# Deploy AWT Website on DigitalOcean CloudPanel

Live domain: https://angadiworldtech.com  
Repo: https://github.com/AwtDeploy/AWT-Website

## Fastest fix for the nginx `/admin/login` 404 (no Node)

The live site is a **static** export. Nginx 404s because there is no `admin/login/` folder in `htdocs`. Upload the drop-in from this repo:

`cloudpanel-dropin/` → website `htdocs` root (merge, do not wipe the rest of the site)

That folder contains:

- `admin/login/index.html`
- `admin/careers/index.html`
- `admin/admin.css` and `admin/admin.js`
- `api/cms.php`
- `jobs.json`
- `careers/index.html` (replaces the old hardcoded jobs list so CMS edits show in public)

### CloudPanel File Manager

1. Log in to CloudPanel (`https://YOUR_DROPLET_IP:8443`).
2. **Sites** → **angadiworldtech.com** → **File Manager** (or **Vhost** → open the site root / `htdocs`).
3. Copy the contents of `cloudpanel-dropin/` into that root so you have `htdocs/admin/`, `htdocs/api/`, `htdocs/jobs.json`.
4. If CloudPanel asks to overwrite `careers/index.html`, choose **yes** (this is what syncs openings to the public page).
5. Make `jobs.json` writable: File Manager → `jobs.json` → permissions **664** (or 666 if save still fails).
6. Confirm PHP is on for this site. If `/admin/login/` loads but Sign in fails, set the site type to **PHP** (or keep PHP-FPM in the vhost). `.php` files must execute.

Then open:

- https://angadiworldtech.com/admin/login/
- https://angadiworldtech.com/admin/login (nginx should redirect to the slash URL once the folder exists)

**Username:** `AWT Careers`  
**Password:** `OrangeQr#Talent360`

---

## Why you saw a plain nginx 404

The live site is still the old **static** Vite export in `htdocs` (hashed `/assets/*.js`, last updated June 2026). CloudPanel Static HTML nginx looks for a physical path. `/careers/` works because a `careers/` folder with `index.html` exists; `/admin/login` did not.

## Optional later: full Node app

Use the Node reverse-proxy path below only if you want the full TanStack Start build instead of the PHP drop-in.

CMS login:

- Username: `AWT Careers`
- Password: `OrangeQr#Talent360`

---

## Preferred later: existing live site → Node reverse proxy

Do **not** delete the site (SSL stays). Change nginx and start Node.

### 1. Confirm the current site type

1. Log in to CloudPanel (usually `https://YOUR_DROPLET_IP:8443`).
2. Click **Sites**.
3. Open **angadiworldtech.com**.
4. Note whether it is **Static HTML**, **PHP**, or **Node.js**.

If it is already **Node.js**, skip to step 3 (still confirm App Port = 3000).

### 2. Point nginx at Node (Static HTML / PHP today)

1. Sites → **angadiworldtech.com** → **Vhost**.
2. Leave SSL, `{{ssl_certificate}}`, `{{server_name}}`, and `location ~ /.well-known` unchanged.
3. Delete or comment out static rules after `{{settings}}` (the `index` line, the long `location ~* \.(css|js|...` block, and `if (-f $request_filename)`).
4. Paste the **PREFERRED** `location / { ... }` block from `deploy/cloudpanel-nginx.conf.example` (proxy to `127.0.0.1:3000`).
5. Click **Save**. CloudPanel checks nginx syntax and reloads. If Save fails, the editor reverts — fix the paste and save again.

Until Node is listening on 3000, the public site may show **502 Bad Gateway**. Start Node next before you announce the change, or do steps 3–4 first in a maintenance window.

### 3. SSH in as the site user

In CloudPanel: Sites → angadiworldtech.com → copy **Site User**. SSH:

```bash
ssh SITE_USER@YOUR_DROPLET_IP
cd ~/htdocs/angadiworldtech.com
```

If the app already lives in a subfolder, `cd` there instead. App root must contain `package.json`.

### 4. Use Node 20 or 22

CloudPanel uses NVM. Example:

```bash
source ~/.nvm/nvm.sh
nvm install 22
nvm use 22
node -v
```

In CloudPanel, if the site is Node.js: set **Node.js Version** to 20 or 22.

### 5. Pull, install, build

```bash
git remote -v
git fetch origin
git checkout main
git pull origin main
npm ci
npm run build
```

If this directory is not a git clone, clone once:

```bash
cd ~/htdocs
mv angadiworldtech.com angadiworldtech.com.static.bak
git clone https://github.com/AwtDeploy/AWT-Website.git angadiworldtech.com
cd angadiworldtech.com
source ~/.nvm/nvm.sh && nvm use 22
npm ci
npm run build
```

Keep the `.static.bak` folder until `/admin/login` works, then delete it.

### 6. Environment variables

In the app root, copy `.env.example` to `.env` (never commit `.env`):

```bash
nano .env
```

```
CMS_USERNAME="AWT Careers"
CMS_PASSWORD="OrangeQr#Talent360"
CMS_SESSION_SECRET=put-a-long-random-string-here
DATABASE_URL=
PORT=3000
HOST=127.0.0.1
```

- `PORT` must match nginx `proxy_pass` and CloudPanel **App Port**.
- `HOST=127.0.0.1` keeps Node off the public internet; nginx terminates HTTPS.
- Leave `DATABASE_URL` empty to save jobs in `data/jobs.json`. For lasting storage on a restart, set a Postgres URI (Neon/Supabase/local).
- Quote `CMS_USERNAME` and `CMS_PASSWORD` (space and `#`).

If CloudPanel shows **Environment Variables** on the site, add the same keys there as well.

### 7. Start Node and keep it running

```bash
source ~/.nvm/nvm.sh && nvm use 22
cd ~/htdocs/angadiworldtech.com
PORT=3000 HOST=127.0.0.1 npm start
```

Confirm locally:

```bash
curl -sI http://127.0.0.1:3000/admin/login
```

You should see HTTP 200 (or a redirect), not 404. Then install PM2 so it survives reboot:

```bash
npm install -g pm2
cd ~/htdocs/angadiworldtech.com
PORT=3000 HOST=127.0.0.1 pm2 start npm --name awt-website -- start
pm2 save
pm2 startup
```

Run the `pm2 startup` command it prints (may need root). After code updates:

```bash
cd ~/htdocs/angadiworldtech.com
git pull origin main
npm ci
npm run build
pm2 restart awt-website
```

### 8. SSL

Sites → angadiworldtech.com → **SSL**. Let’s Encrypt should already be active. Do not add SSL in Node.

### 9. Verify in a browser

- https://angadiworldtech.com/ — homepage (new build, not June 2026 hashed assets only)
- https://angadiworldtech.com/careers and `/careers/`
- https://angadiworldtech.com/admin/login and `/admin/login/` — CMS login, not nginx 404
- Sign in with `AWT Careers` / `OrangeQr#Talent360`

If you still see nginx **404 Not Found** with `<center>nginx</center>`, nginx is still serving static files. Re-open **Vhost** and confirm `proxy_pass http://127.0.0.1:3000` is inside `location /`.

If you see **502**, Node is not listening on 3000 (`pm2 status`, `ss -lptn | grep 3000`).

---

## Optional: create a new Node.js site

Only if the domain is not already a site (or you are replacing it on purpose):

1. Sites → **+ Add Site** → **Create a Node.js Site**.
2. Domain: `angadiworldtech.com` (and www if you use it).
3. Node.js Version: **22** (or 20).
4. App Port: **3000**.
5. Create, then issue SSL.
6. Deploy with steps 3–7 above. CloudPanel’s Node.js vhost already reverse-proxies to `127.0.0.1:{{app_port}}`.

Changing type in place is usually **not** offered. Prefer editing the existing Vhost (steps 1–2).

---

## Fallback B: stay on Static HTML

Paste into Vhost:

```nginx
index index.html;
location / {
  try_files $uri $uri/ /index.html;
}
```

This only stops the nginx 404 if `index.html` of a **client-side SPA** is in htdocs. The current live export is pre-rendered folders without `/admin`. Job create/edit still needs Node (Preferred path). Use B only as a short-term SPA fallback.

---

## Quick checklist

- [ ] `git pull origin main` on the droplet
- [ ] Node 20/22, `npm ci`, `npm run build`
- [ ] `.env` with CMS credentials, `PORT=3000`, `HOST=127.0.0.1`
- [ ] `pm2` running `npm start` (`.output/server/index.mjs`)
- [ ] Vhost `location /` proxies to `127.0.0.1:3000` (not static-only)
- [ ] `/admin/login` is the AWT login page
