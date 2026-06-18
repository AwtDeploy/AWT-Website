import {
  ArrowRight,
  BarChart3,
  Briefcase,
  Building2,
  Brain,
  Cloud,
  Code2,
  Compass,
  Cpu,
  Globe2,
  Handshake,
  Headphones,
  HeartPulse,
  Landmark,
  LayoutGrid,
  Lightbulb,
  LineChart,
  MapPin,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Warehouse,
  GraduationCap,
  ShoppingCart,
  Truck,
  Mail,
  Phone,
  Clock3,
  MonitorSmartphone,
  Bot,
  Megaphone,
  Search,
  Layers3,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import articleAi from "@/assets/hero-insights.jpg";
import articleCloud from "@/assets/hero-solutions.jpg";
import articleTransform from "@/assets/hero-home.jpg";

export interface NavItem {
  label: string;
  to: string;
}

export interface ContactCard {
  title: string;
  value: string;
  detail?: string;
  icon: LucideIcon;
}

export interface Metric {
  value: string;
  label: string;
  detail: string;
  icon: LucideIcon;
}

export interface FeatureCard {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Industry {
  title: string;
  icon: LucideIcon;
}

export interface ProductCard {
  name: string;
  tagline: string;
  bullets: string[];
  accent: "orange" | "violet" | "amber";
}

export interface Article {
  date: string;
  title: string;
  summary: string;
  category: string;
  image?: string;
}

export interface JobRole {
  title: string;
  department: string;
  location: string;
  type: string;
}

export const COMPANY = {
  shortName: "AWT",
  name: "Angadi World Technologies",
  legalName: "Angadi World Technologies Pvt. Ltd.",
  tagline: "Innovations for the New Gen",
  phoneDisplay: "+91 70755 05500",
  phoneHref: "tel:+917075505500",
  whatsappHref: "https://wa.me/917075505500",
  email: "hello@angadiworldtech.com",
  emailHref: "mailto:hello@angadiworldtech.com",
  workingHours: "Mon - Fri: 9:30 AM - 6:30 PM IST",
  countries: ["India"],
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about-us" },
  { label: "Solutions", to: "/solutions" },
  { label: "Products", to: "/products" },
  { label: "Innovation Partners", to: "/innovation-partners" },
  { label: "Insights", to: "/insights" },
  { label: "Careers", to: "/careers" },
  { label: "Contact Us", to: "/contact-us" },
];

export const METRICS: Metric[] = [
  { value: "8+", label: "Years of innovation", detail: "Since 2018", icon: Briefcase },
  { value: "120+", label: "Projects delivered", detail: "Across multiple sectors", icon: Building2 },
  { value: "98%", label: "Client satisfaction", detail: "Measured delivery confidence", icon: Sparkles },
  { value: "24/7", label: "Managed support", detail: "Always-on operations", icon: Headphones },
  { value: "India", label: "Global presence", detail: "Cross-border execution", icon: Globe2 },
];

export const HOME_SOLUTIONS: FeatureCard[] = [
  {
    title: "Digital Transformation",
    description: "Reimagine business models, workflows, and customer journeys with practical transformation roadmaps.",
    icon: LayoutGrid,
  },
  {
    title: "Software Engineering",
    description: "Build secure, scalable applications with modern architecture, performance focus, and strong delivery governance.",
    icon: Code2,
  },
  {
    title: "AI & Automation",
    description: "Design intelligent workflows, decision support systems, and automation layers that improve outcomes.",
    icon: Brain,
  },
  {
    title: "Cloud & DevOps",
    description: "Modernize infrastructure, delivery pipelines, and observability to support resilient growth.",
    icon: Cloud,
  },
  {
    title: "Cyber Security",
    description: "Protect critical systems with assessment, defense, monitoring, and enterprise-ready governance controls.",
    icon: ShieldCheck,
  },
  {
    title: "Managed Services",
    description: "Extend your team with dependable operational support across platforms, users, and mission-critical systems.",
    icon: Users,
  },
];

export const INDUSTRIES: Industry[] = [
  { title: "Manufacturing", icon: Warehouse },
  { title: "Healthcare", icon: HeartPulse },
  { title: "Retail", icon: ShoppingCart },
  { title: "BFSI", icon: Landmark },
  { title: "Education", icon: GraduationCap },
  { title: "Government", icon: Building2 },
  { title: "Technology", icon: Cpu },
  { title: "Logistics", icon: Truck },
];

export const APPROACH_STEPS = [
  {
    title: "Discover",
    description: "Understand the business challenge, technical estate, risks, and opportunity zones.",
    icon: Search,
  },
  {
    title: "Design",
    description: "Create the right solution blueprint, experience structure, and delivery plan.",
    icon: Compass,
  },
  {
    title: "Develop",
    description: "Engineer robust products and platforms with quality, security, and agility.",
    icon: Code2,
  },
  {
    title: "Deploy",
    description: "Launch with integration, cloud readiness, adoption support, and observability.",
    icon: Rocket,
  },
  {
    title: "Drive",
    description: "Continuously optimize performance, automation, and measurable business outcomes.",
    icon: TrendingUp,
  },
];

export const PRODUCTS: ProductCard[] = [
  {
    name: "SafeRide 360™",
    tagline: "Enterprise workforce safety and compliance platform",
    bullets: ["Travel safety monitoring", "Compliance management", "Emergency response", "Executive protection"],
    accent: "orange",
  },
  {
    name: "Job Streamers™",
    tagline: "AI-powered recruitment intelligence platform",
    bullets: ["AI job matching", "Video profiles", "Recruitment analytics", "Talent pipeline automation"],
    accent: "violet",
  },
  {
    name: "Venuvo™",
    tagline: "Smart venue and experience management platform",
    bullets: ["Venue discovery", "Bookings and scheduling", "Vendor coordination", "Customer engagement"],
    accent: "amber",
  },
];

export const ARTICLES: Article[] = [
  {
    date: "May 15, 2025",
    category: "AI & Automation",
    title: "AWT advances AI and automation capabilities",
    summary: "How intelligent systems are helping enterprises move from experimentation to measurable value.",
    image: articleAi,
  },
  {
    date: "May 07, 2025",
    category: "Cloud",
    title: "Partnership with leading cloud provider",
    summary: "Strengthening secure cloud delivery capabilities for enterprise modernization programs.",
    image: articleCloud,
  },
  {
    date: "Apr 28, 2025",
    category: "Transformation",
    title: "Launch of digital transformation consulting hub",
    summary: "A focused advisory offering for organizations navigating modernization with clarity and speed.",
    image: articleTransform,
  },
];

export const ABOUT_TIMELINE = [
  { year: "2018", title: "Founded AWT" },
  { year: "2019", title: "First enterprise transformation" },
  { year: "2020", title: "Software engineering expansion" },
  { year: "2021", title: "Offshore development partnerships" },
  { year: "2022", title: "100+ global clients" },
  { year: "2023", title: "AI and automation vertical" },
  { year: "2025", title: "Innovation platforms launch" },
];

export const VALUES = ["Innovation", "Integrity", "Agility", "Partnership", "Excellence"];

export const ABOUT_PRINCIPLES = [
  "Ownership driven",
  "Continuous learning",
  "Diverse perspectives",
  "Agile collaboration",
  "Vision alignment",
];

export const SOLUTION_PILLARS: FeatureCard[] = [
  {
    title: "Digital Transformation",
    description: "Modern operating models, platform strategy, and execution for changing enterprise demands.",
    icon: Layers3,
  },
  {
    title: "Software Engineering",
    description: "Custom software systems built for resilience, scalability, and long-term maintainability.",
    icon: Code2,
  },
  {
    title: "Cloud & DevOps",
    description: "Cloud migration, infrastructure automation, release excellence, and reliability engineering.",
    icon: Cloud,
  },
  {
    title: "AI & Automation",
    description: "Applied intelligence for workflow automation, prediction, and decision improvement.",
    icon: Bot,
  },
  {
    title: "Cyber Security",
    description: "Enterprise defense strategy, governance, monitoring, and risk reduction aligned to scale.",
    icon: ShieldCheck,
  },
  {
    title: "Managed IT Services",
    description: "Operational support for platforms, applications, infrastructure, and user environments.",
    icon: Headphones,
  },
  {
    title: "IT Consulting",
    description: "Strategic guidance across architecture, modernization, platform selection, and execution planning.",
    icon: Lightbulb,
  },
  {
    title: "Digital Experience",
    description: "Brand, marketing, and customer-facing digital systems built to perform and convert.",
    icon: Megaphone,
  },
];

export const TECHNOLOGIES = [
  "AWS",
  "Microsoft Azure",
  "Google Cloud",
  "React",
  "Node.js",
  "Python",
  ".NET",
  "Docker",
  "Kubernetes",
  "Terraform",
  "MongoDB",
  "GitLab",
];

export const PRODUCT_BENEFITS = [
  { title: "Built with security first", icon: ShieldCheck },
  { title: "Scalable for any business", icon: LineChart },
  { title: "Cloud-native and reliable", icon: Cloud },
  { title: "AI-powered automation", icon: Brain },
  { title: "24/7 support and updates", icon: Headphones },
];

export const INSIGHT_TOPICS = [
  {
    title: "AI & Automation",
    description: "Engineering intelligence into everyday business systems.",
    bullets: ["How AI is redefining enterprise efficiency", "Predictive analytics in 2025", "AI in HR and talent operations"],
    icon: Brain,
  },
  {
    title: "Cloud, Data & Infrastructure",
    description: "Powering the digital backbone of modern enterprises.",
    bullets: ["Multi-cloud evolution", "Data as leadership currency", "DevOps beyond tooling"],
    icon: Cloud,
  },
  {
    title: "Digital Transformation & Strategy",
    description: "Turning modernization programs into sustained business progress.",
    bullets: ["Transformation is not about technology", "The 5D operating model", "Rebuilding legacy enterprises"],
    icon: Compass,
  },
  {
    title: "Startup & Innovation Insights",
    description: "From idea validation to product-market confidence.",
    bullets: ["AI advantage for startups", "Idea validation to MVP", "Tech trends 2025"],
    icon: Rocket,
  },
];

export const FEATURED_SERIES = [
  {
    title: "The Future of AI",
    bullets: ["AI ethics", "Co-intelligence", "Industry impact"],
  },
  {
    title: "The Digital Enterprise Playbook",
    bullets: ["Transformation strategy", "Intelligent organizations", "Scalable growth"],
  },
  {
    title: "The Founder’s Desk",
    bullets: ["Why technology is not the goal", "Vision driven leadership", "How startups scale intelligently"],
  },
];

export const CAREER_BENEFITS: FeatureCard[] = [
  {
    title: "Work that creates impact",
    description: "Solve real business problems and contribute to meaningful transformation programs.",
    icon: Target,
  },
  {
    title: "Innovation every day",
    description: "Work with emerging technologies and future-ready delivery methods.",
    icon: Lightbulb,
  },
  {
    title: "Growth and learning",
    description: "Continuous learning opportunities help you sharpen expertise and widen your scope.",
    icon: TrendingUp,
  },
  {
    title: "Collaborative culture",
    description: "Join a supportive team that values partnership, clarity, and shared ownership.",
    icon: Users,
  },
  {
    title: "Global exposure",
    description: "Work with clients and teams across industries, markets, and time zones.",
    icon: Globe2,
  },
  {
    title: "Recognition and rewards",
    description: "Contributions are acknowledged with trust, visibility, and opportunity.",
    icon: Sparkles,
  },
];

export const JOBS: JobRole[] = [
  { title: "Senior Full Stack Developer", department: "Engineering", location: "Hyderabad, India", type: "Full-time" },
  { title: "AI/ML Engineer", department: "Engineering", location: "Bengaluru, India", type: "Full-time" },
  { title: "Cloud DevOps Engineer", department: "Engineering", location: "Hyderabad, India", type: "Full-time" },
  { title: "Product Manager", department: "Product", location: "Hyderabad, India", type: "Full-time" },
  { title: "UI/UX Designer", department: "Design", location: "Bengaluru, India", type: "Full-time" },
];

export const INNOVATION_MODELS = [
  "Strategic investment",
  "Corporate venture partnerships",
  "Joint ventures",
  "Technology alliances",
  "White label partnerships",
  "Distribution partnerships",
];

export const INNOVATION_REASONS = [
  "We understand enterprise challenges",
  "We build with scalability in mind",
  "We focus on real-world problems",
  "We combine strategy with execution",
  "We believe in long-term partnerships",
];

export const CONTACT_CARDS: ContactCard[] = [
  {
    title: "Call us",
    value: COMPANY.phoneDisplay,
    icon: Phone,
  },
  {
    title: "Email us",
    value: COMPANY.email,
    icon: Mail,
  },
];

export const OFFICES = [
  {
    city: "Bengaluru (HQ)",
    country: "India",
    address: "NO.1, 1ST FLOOR, KVN COMPLEX, T C PALYA MAIN ROAD, DOORAVANI NAGAR, RAMAMURTHY NAGAR, Bangalore, Karnataka, India 560036",
  },
  {
    city: "Hyderabad",
    country: "India",
    address: "7th Floor, Vasavi MPM Grand, Ameerpet, Hyderabad - 500016, Telangana, India",
  },
];

export const FOOTER_LINKS = {
  company: [
    { label: "About Us", to: "/about-us" },
    { label: "Leadership", to: "/about-us" },
    { label: "Careers", to: "/careers" },
    { label: "News & Media", to: "/insights" },
    { label: "Contact Us", to: "/contact-us" },
  ],
  solutions: [
    { label: "Digital Transformation", to: "/solutions" },
    { label: "Software Engineering", to: "/solutions" },
    { label: "AI & Automation", to: "/solutions" },
    { label: "Cloud & DevOps", to: "/solutions" },
    { label: "Cyber Security", to: "/solutions" },
    { label: "Managed IT Services", to: "/solutions" },
  ],
  products: [
    { label: "SafeRide 360™", to: "/products" },
    { label: "Job Streamers™", to: "/products" },
    { label: "Venuvo™", to: "/products" },
  ],
  partners: [
    { label: "Partnership Overview", to: "/innovation-partners" },
    { label: "Strategic Investments", to: "/innovation-partners" },
    { label: "Technology Alliances", to: "/innovation-partners" },
    { label: "Go-To-Market Partnerships", to: "/innovation-partners" },
    { label: "White Label Opportunities", to: "/innovation-partners" },
  ],
};

export const BRAND_KEYWORDS = [
  "enterprise IT solutions",
  "digital transformation partner",
  "AI and automation solutions",
  "cloud and software engineering",
  "innovation partnerships",
];

export const CTA_LABELS = {
  primary: "Describe Your Problem",
  secondary: "Get an Instant Solution",
  homePrimary: "Describe Your Challenge",
  homeSecondary: "Explore Solutions",
};

export const ROUTE_META = {
  home: {
    title: "Enterprise IT Solutions & Digital Transformation | AWT",
    description: "AWT builds enterprise IT solutions across software engineering, cloud, AI, automation, and innovation-led delivery for modern organizations.",
  },
  about: {
    title: "About AWT | Global IT & Digital Transformation Company",
    description: "Discover AWT, its founder-led journey, global delivery model, and the people-first approach behind its technology and innovation services.",
  },
  solutions: {
    title: "Enterprise Solutions | Software, Cloud, AI & Managed IT | AWT",
    description: "Explore AWT solutions across digital transformation, software engineering, cloud, AI, cyber security, consulting, and managed services.",
  },
  products: {
    title: "Innovation Products | SafeRide 360, Job Streamers & Venuvo | AWT",
    description: "See AWT innovation products built for workforce safety, recruitment intelligence, and smart venue experience management.",
  },
  partners: {
    title: "Innovation Partners | Strategic Investment & Alliances | AWT",
    description: "Partner with AWT to co-build intelligent enterprise platforms through strategic investment, alliances, and long-term innovation collaboration.",
  },
  insights: {
    title: "Insights | AI, Cloud, Transformation & Leadership Thinking | AWT",
    description: "Read AWT perspectives on AI, cloud, data, digital transformation, and future-ready enterprise strategy.",
  },
  careers: {
    title: "Careers at AWT | Build What Matters",
    description: "Explore careers at AWT across engineering, product, design, and operations in a modern innovation-led work environment.",
  },
  contact: {
    title: "Contact AWT | Let’s Build What’s Next",
    description: "Reach AWT for enterprise solutions, innovation consulting, partnerships, and delivery conversations across India, USA, and UK markets.",
  },
};

export const HERO_ART = {
  home: "Executive meeting in a modern enterprise technology boardroom, Indian professionals collaborating around a laptop, large analytics dashboards behind them, clean glass office, premium lighting, realistic corporate photography, orange accent lighting, ultra detailed",
  about: "Futuristic illuminated globe with enterprise network lines over a dark professional background, realistic and premium, orange signal lines, modern technology visual",
  solutions: "Abstract enterprise technology cube platform glowing with orange energy lines, modular digital architecture, premium dark background, realistic 3D visualization",
  products: "Futuristic stacked cubes representing digital products and intelligent platforms, glowing orange core, dark premium tech environment, realistic high-end render",
  insights: "Elegant humanoid head formed by glowing neural connections, premium black background with orange light network, editorial technology art, realistic",
  careers: "Modern diverse technology team collaborating around a laptop in a premium office, warm lighting, aspirational corporate photography, subtle orange highlights",
  contact: "Global digital map with connected cities, premium dark background, glowing orange network routes, realistic technology visualization",
  innovation: "Executive partnership handshake and strategy meeting in a premium enterprise setting, technology investment atmosphere, realistic corporate photography, orange accent lighting",
};

export const FOUNDER = {
  name: "Mr. Sravan Kumar Angadi",
  role: "Founder & CEO",
  quote:
    "Technology should not only solve problems. It should empower people, elevate organizations, and transform industries.",
  summary:
    "A visionary entrepreneur and technology strategist, Sravan Kumar Angadi leads AWT with a belief that intelligent systems should create meaningful transformation across enterprises and emerging platforms.",
};

export const HERO_BUTTONS = {
  primary: { label: "Describe Your Problem", helper: "Get an instant solution" },
  secondary: { label: "Explore Solutions", helper: "See how we build" },
};

export const FLOATING_ACTIONS = [
  { label: "WhatsApp", href: COMPANY.whatsappHref },
  { label: "Call us", href: COMPANY.phoneHref },
];

