export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Tools", href: "#tools" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

export const personalInfo = [
  { label: "Location", value: "Rangpur, Bangladesh", icon: "BD" },
  { label: "Role", value: "Full Stack Developer", icon: "FS" },
  { label: "Specialization", value: "MERN Stack", icon: "JS" },
  { label: "Focus", value: "React & Next.js", icon: "UI" },
  { label: "Workflow", value: "AI Assisted Coding", icon: "AI" },
] as const;

export const skills = [
  { name: "HTML", percentage: 95 },
  { name: "CSS", percentage: 90 },
  { name: "JavaScript", percentage: 85 },
  { name: "JavaScript ES6", percentage: 82 },
  { name: "React.js", percentage: 86 },
  { name: "Next.js", percentage: 80 },
  { name: "Node.js", percentage: 84 },
  { name: "Express.js", percentage: 82 },
  { name: "MongoDB", percentage: 80 },
  { name: "Mongoose", percentage: 78 },
  { name: "Redux", percentage: 76 },
  { name: "Tailwind CSS", percentage: 88 },
] as const;

export const tools = [
  { name: "VS Code", icon: "VS", color: "from-blue-500 to-cyan-400" },
  { name: "Git & GitHub", icon: "GH", color: "from-orange-500 to-red-400" },
  { name: "Vercel", icon: "VC", color: "from-zinc-100 to-zinc-400" },
  { name: "Claude", icon: "CL", color: "from-amber-500 to-orange-400" },
  { name: "Lovable", icon: "LV", color: "from-pink-500 to-rose-400" },
  { name: "Cursor", icon: "CR", color: "from-cyan-500 to-blue-500" },
  { name: "Google AI Studio", icon: "GA", color: "from-blue-500 to-purple-500" },
  { name: "Anti Gravity", icon: "AG", color: "from-violet-500 to-purple-600" },
  { name: "ChatGPT", icon: "CG", color: "from-emerald-500 to-teal-400" },
] as const;

export const projects = [
  {
    title: "ShopWave E-Commerce",
    description:
      "A MERN e-commerce platform with product search, cart management, secure checkout, admin controls, and inventory updates.",
    stack: ["React", "Node.js", "MongoDB", "Stripe"],
    gradient: "from-sky-500 via-cyan-400 to-teal-400",
    demo: "#",
    github: "#",
  },
  {
    title: "TaskFlow Pro",
    description:
      "A collaborative project management app with workspaces, drag-and-drop boards, deadlines, and activity notifications.",
    stack: ["Next.js", "Express", "MongoDB", "Tailwind"],
    gradient: "from-violet-500 via-fuchsia-500 to-rose-400",
    demo: "#",
    github: "#",
  },
  {
    title: "DevBlog CMS",
    description:
      "A developer blog platform with a markdown editor, syntax highlighting, SEO-friendly pages, and comment workflows.",
    stack: ["Next.js", "MongoDB", "Redux", "Vercel"],
    gradient: "from-indigo-500 via-blue-500 to-cyan-400",
    demo: "#",
    github: "#",
  },
  {
    title: "WeatherScope",
    description:
      "A responsive weather dashboard with location search, 7-day forecasts, map-ready data, and animated UI transitions.",
    stack: ["React", "API", "Tailwind", "Chart.js"],
    gradient: "from-cyan-500 via-sky-500 to-blue-500",
    demo: "#",
    github: "#",
  },
  {
    title: "ConnectHub Social",
    description:
      "A social app with profiles, posts, likes, real-time messaging, JWT authentication, and media upload support.",
    stack: ["MERN", "Socket.io", "Cloudinary", "JWT"],
    gradient: "from-rose-500 via-pink-500 to-orange-400",
    demo: "#",
    github: "#",
  },
  {
    title: "FinanceTrack",
    description:
      "A personal finance tracker with expense categories, budget goals, visual analytics, and monthly report exports.",
    stack: ["React", "Node.js", "MongoDB", "Recharts"],
    gradient: "from-emerald-500 via-teal-500 to-cyan-400",
    demo: "#",
    github: "#",
  },
] as const;

export const experience = [
  {
    title: "Frontend Development",
    period: "2022 - Present",
    description:
      "Crafting responsive, accessible interfaces with React, Next.js, and Tailwind CSS, focused on performance and polished design.",
  },
  {
    title: "MERN Stack Development",
    period: "2023 - Present",
    description:
      "Building scalable full stack applications with MongoDB, Express, React, and Node.js, from REST APIs to production deployments.",
  },
  {
    title: "Full Stack Web Applications",
    period: "2023 - Present",
    description:
      "Delivering web solutions with authentication, database design, state management, dashboards, and cloud deployment.",
  },
  {
    title: "AI Assisted Development",
    period: "2024 - Present",
    description:
      "Using tools like Cursor, Claude, and ChatGPT to explore ideas faster, improve code quality, and ship products with more focus.",
  },
] as const;

export const socialLinks = [
  { name: "GitHub", href: "https://github.com", icon: "github" },
  { name: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  { name: "Twitter", href: "https://twitter.com", icon: "twitter" },
  { name: "Email", href: "mailto:mdmahadih673@gmail.com", icon: "email" },
] as const;

export const siteConfig = {
  name: "Md. Mahadi Hasan",
  title: "Full Stack Web Developer | MERN Stack Developer",
  intro:
    "I build responsive websites, clean dashboards, and reliable MERN applications that are ready to launch.",
  email: "mdmahadih673@gmail.com",
  quote:
    "Creativity and technology together can create extraordinary digital experiences.",
  copyright: "(c) 2026 Md. Mahadi Hasan. All rights reserved.",
};
