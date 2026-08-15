<?php
declare(strict_types=1);

header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

const CMS_USERNAME = 'AWT Careers';
const CMS_PASSWORD = 'OrangeQr#Talent360';
const SESSION_NAME = 'awt_cms';

$jobsFile = dirname(__DIR__) . DIRECTORY_SEPARATOR . 'jobs.json';

function json_input(): array
{
    $raw = file_get_contents('php://input');
    if (!$raw) {
        return $_POST;
    }
    $data = json_decode($raw, true);
    return is_array($data) ? $data : [];
}

function send_json(mixed $payload, int $status = 200): void
{
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($payload, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    exit;
}

function start_cms_session(): void
{
    session_name(SESSION_NAME);
    session_set_cookie_params([
        'lifetime' => 60 * 60 * 24 * 7,
        'path' => '/',
        'secure' => (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off'),
        'httponly' => true,
        'samesite' => 'Lax',
    ]);
    session_start();
}

function logged_in(): bool
{
    return !empty($_SESSION['cms_user']);
}

function require_login(): void
{
    if (!logged_in()) {
        send_json(['error' => 'Unauthorized'], 401);
    }
}

function default_jobs(): array
{
    $now = '2026-01-15T00:00:00.000Z';
    return [
        job_row('job-fullstack', 'Senior Full Stack Developer', 'Engineering', 'Hyderabad, India', 'Full-time', 'Build and scale web products across the AWT platform stack.', $now),
        job_row('job-aiml', 'AI/ML Engineer', 'Engineering', 'Bengaluru, India', 'Full-time', 'Design intelligent systems and automation that create measurable business value.', $now),
        job_row('job-devops', 'Cloud DevOps Engineer', 'Engineering', 'Hyderabad, India', 'Full-time', 'Own cloud infrastructure, delivery pipelines, and operational reliability.', $now),
        job_row('job-pm', 'Product Manager', 'Product', 'Hyderabad, India', 'Full-time', 'Shape product direction from discovery through delivery with engineering and design.', $now),
        job_row('job-design', 'UI/UX Designer', 'Design', 'Bengaluru, India', 'Full-time', 'Craft clear, premium product experiences across AWT platforms and websites.', $now),
    ];
}

function job_row(string $id, string $title, string $department, string $location, string $type, string $description, string $now): array
{
    return [
        'id' => $id,
        'title' => $title,
        'department' => $department,
        'location' => $location,
        'type' => $type,
        'description' => $description,
        'applyUrl' => '/contact-us',
        'status' => 'open',
        'createdAt' => $now,
        'updatedAt' => $now,
    ];
}

function read_jobs(string $file): array
{
    if (!is_file($file)) {
        return default_jobs();
    }
    $raw = json_decode((string) file_get_contents($file), true);
    return is_array($raw) ? $raw : default_jobs();
}

function write_jobs(string $file, array $jobs): void
{
    $dir = dirname($file);
    if (!is_dir($dir) && !mkdir($dir, 0775, true) && !is_dir($dir)) {
        send_json(['error' => 'Could not create jobs folder. Set write permission on the site root.'], 500);
    }
    $ok = file_put_contents($file, json_encode(array_values($jobs), JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) . "\n");
    if ($ok === false) {
        send_json(['error' => 'Could not write jobs.json. Give the site user write permission on the website root.'], 500);
    }
}

function normalize_job(array $input, ?array $existing = null): array
{
    $title = trim((string) ($input['title'] ?? ''));
    if ($title === '') {
        send_json(['error' => 'Title, department, and location are required'], 400);
    }
    $now = gmdate('c');
    $types = ['Full-time', 'Part-time', 'Contract', 'Internship'];
    $statuses = ['open', 'closed'];
    $type = (string) ($input['type'] ?? 'Full-time');
    $status = (string) ($input['status'] ?? 'open');
    return [
        'id' => $existing['id'] ?? (string) ($input['id'] ?? uniqid('job-', true)),
        'title' => $title,
        'department' => trim((string) ($input['department'] ?? 'General')) ?: 'General',
        'location' => trim((string) ($input['location'] ?? 'India')) ?: 'India',
        'type' => in_array($type, $types, true) ? $type : 'Full-time',
        'description' => trim((string) ($input['description'] ?? '')),
        'applyUrl' => trim((string) ($input['applyUrl'] ?? '/contact-us')) ?: '/contact-us',
        'status' => in_array($status, $statuses, true) ? $status : 'open',
        'createdAt' => $existing['createdAt'] ?? $now,
        'updatedAt' => $now,
    ];
}

start_cms_session();
$action = (string) ($_GET['action'] ?? json_input()['action'] ?? 'public');
$body = json_input();

if ($action === 'public') {
    $open = array_values(array_filter(read_jobs($jobsFile), static fn($job) => ($job['status'] ?? '') === 'open'));
    send_json(['jobs' => $open]);
}

if ($action === 'session') {
    send_json(['user' => $_SESSION['cms_user'] ?? null]);
}

if ($action === 'login') {
    $user = (string) ($body['username'] ?? '');
    $pass = (string) ($body['password'] ?? '');
    if (!hash_equals(CMS_USERNAME, $user) || !hash_equals(CMS_PASSWORD, $pass)) {
        send_json(['error' => 'Invalid username or password'], 401);
    }
    session_regenerate_id(true);
    $_SESSION['cms_user'] = CMS_USERNAME;
    send_json(['ok' => true, 'user' => CMS_USERNAME]);
}

if ($action === 'logout') {
    $_SESSION = [];
    if (ini_get('session.use_cookies')) {
        $params = session_get_cookie_params();
        setcookie(session_name(), '', time() - 42000, $params['path'], $params['domain'] ?? '', $params['secure'], $params['httponly']);
    }
    session_destroy();
    send_json(['ok' => true]);
}

if ($action === 'jobs') {
    require_login();
    send_json(['jobs' => read_jobs($jobsFile), 'note' => 'Changes are saved to jobs.json on this server and show on the careers page.']);
}

if ($action === 'save') {
    require_login();
    $jobs = read_jobs($jobsFile);
    $id = trim((string) ($body['id'] ?? ''));
    $existing = null;
    foreach ($jobs as $job) {
        if (($job['id'] ?? '') === $id) {
            $existing = $job;
            break;
        }
    }
    $next = normalize_job($body, $existing);
    if ($existing) {
        $jobs = array_map(static fn($job) => ($job['id'] ?? '') === $next['id'] ? $next : $job, $jobs);
    } else {
        array_unshift($jobs, $next);
    }
    write_jobs($jobsFile, $jobs);
    send_json(['jobs' => $jobs, 'job' => $next, 'note' => 'Opening saved. It now appears on /careers/.']);
}

if ($action === 'delete') {
    require_login();
    $id = (string) ($body['id'] ?? '');
    $jobs = array_values(array_filter(read_jobs($jobsFile), static fn($job) => ($job['id'] ?? '') !== $id));
    write_jobs($jobsFile, $jobs);
    send_json(['jobs' => $jobs, 'note' => 'Opening deleted.']);
}

send_json(['error' => 'Unknown action'], 400);
