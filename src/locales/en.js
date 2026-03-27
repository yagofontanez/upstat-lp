const en = {
  nav: {
    features: "Features",
    pricing: "Pricing",
    login: "Sign in",
    cta: "Get started for free →",
  },
  hero: {
    badge1: "Real-time monitoring",
    badge2: "WhatsApp alerts",
    title1: "You find out about downtime",
    title2: "before your users do.",
    sub: "Monitor APIs, status pages and real user flows. Detect outages in seconds and get alerts straight to your WhatsApp — at 3am, on weekends, no email required.",
    cta1: "Start for free →",
    cta2: "See how it works",
  },
  mock: {
    title: "My Startup — Status",
    api: "Main API",
    operational: "Operational",
  },
  stats: {
    uptime: "AVERAGE MONITORED UPTIME",
    detection: "DETECTION TIME",
    start: "TO GET STARTED",
  },
  feat: {
    tag: "// features",
    head1: "Everything you need.",
    head2: "Nothing you don't.",
  },
  feat1: {
    title: "Automatic monitoring",
    desc: "Your system is checked every 1–5 minutes. If it goes down, you know before your client does.",
  },
  feat2: {
    title: "Synthetic Monitor",
    desc: "Simulate real flows — login, checkout, forms. Detect when something breaks, not just when the server goes down.",
    tag: "✦ Pro",
  },
  feat3: {
    title: "Uptime history",
    desc: "View 90 days of history with daily bars, latency and recorded incidents.",
  },
  feat4: {
    title: "WhatsApp alerts",
    desc: "Get a message straight to WhatsApp when any monitor goes down or recovers. Instantly, no delay.",
    tag: "💬 Pro",
  },
  feat5: {
    title: "Public status page",
    desc: "Professional page with custom URL to share with your clients and users.",
  },
  feat6: {
    title: "Email alerts",
    desc: "Email notifications when your system goes down or recovers — available on all plans.",
  },
  feat7: {
    title: "CLI & SDK",
    desc: "Manage monitors from the terminal or integrate directly in your code with the npm SDK. Zero friction in your workflow.",
    tag: "📦 npm install upstat-sdk",
  },
  feat8: {
    title: "Status Page Subscriptions",
    desc: "Your users subscribe to your status page and receive automatic notifications by email or WhatsApp when anything goes down.",
  },
  feat9: {
    title: "REST API",
    desc: "Access all your monitor data via API. Integrate with any tool, dashboard or internal system.",
  },
  wpp: {
    tag: "// whatsapp alerts",
    head1: "Goes down at 3am?",
    head2: "You know right away.",
    desc: "Emails go unread. Push notifications get ignored. But <strong>WhatsApp you always check</strong> — no matter the time. That's why UpStat sends alerts right where you'll actually see them.",
    check1:
      "<strong>Instant downtime alert</strong> — as soon as the monitor detects a failure",
    check2:
      "<strong>Recovery alert</strong> — when the system comes back online",
    check3:
      "<strong>Full details</strong> — monitor name, downtime duration, status code",
    check4:
      "<strong>No extra app</strong> — works directly in the WhatsApp you already use",
    cta: "💬 I want WhatsApp alerts →",
    bubble1t: "🔴 Monitor offline",
    bubble1b:
      "<strong>Main API</strong> is down.<br/>Status: 503 · Detected at 03:17",
    bubble2t: "🔴 Synthetic failed",
    bubble2b:
      "<strong>Checkout Flow</strong> — step 2 failed.<br/>Timeout at payment step",
    bubble3t: "🟢 Monitor recovered",
    bubble3b:
      "<strong>Main API</strong> is back online.<br/>Downtime: 4 min · Latency: 138ms",
  },
  syn: {
    tag: "// synthetic monitor",
    head1: "It's not just a ping.",
    head2: "It's the real flow.",
    desc: "Server returning 200 OK while checkout is broken? The Synthetic Monitor simulates what your <strong>real user does</strong> and alerts you when any step fails.",
    check1:
      "<strong>Simulates real flows</strong> — login, checkout, chained APIs",
    check2:
      "<strong>Detects logical errors</strong> — not just downtime, but integration failures",
    check3: "<strong>Granular steps</strong> — see exactly which step broke",
    check4:
      "<strong>WhatsApp + email alerts</strong> — integrates with all channels",
    cta: "🤖 Create my first synthetic →",
    running: "CHECKOUT FLOW · RUNNING NOW",
    step1: "Listing loaded",
    step2: "Item added",
    step3: "Checking gateway…",
    running_step: "⟳ running",
    step4desc: "Confirmation",
    step5desc: "Order validation",
    waiting: "waiting",
    lastrun:
      'Last: <span style="color:var(--up)">✓ OK</span> · 1.2s · 3 min ago',
  },
  cli: {
    tag: "// cli & sdk",
    head1: "In your terminal.",
    head2: "In your code.",
    desc: "Manage monitors, check status and trigger events directly from your workflow. <strong>CLI for the terminal</strong>, SDK to integrate in your code — the way devs like it.",
    check1:
      "<strong>Full CLI</strong> — create, pause, list and delete monitors without opening the dashboard",
    check2:
      "<strong>npm SDK</strong> — <code>upstat-sdk</code> for Node.js and TypeScript",
    check3:
      "<strong>Heartbeat & cron jobs</strong> — monitor scheduled tasks with a simple ping",
    check4:
      "<strong>CI/CD ready</strong> — pause alerts during deploys without false positives",
    npm: "📦 View on npm →",
    docs: "View docs",
    heartbeat_hint:
      "If the job doesn't ping within the expected interval, the alert fires automatically.",
  },
  sub: {
    tag: "// status page subscriptions",
    head1: "Your users",
    head2: "always informed.",
    desc: "Any visitor to your status page can subscribe to receive automatic notifications when <strong>any service goes down or recovers</strong> — no need to keep refreshing the page.",
    check1:
      "<strong>Email subscription</strong> — form already integrated in your status page",
    check2:
      "<strong>WhatsApp subscription</strong> — notification in the channel they already use",
    check3:
      "<strong>Incident notification</strong> — notified when something goes down and when it recovers",
    check4:
      "<strong>Zero configuration</strong> — works automatically on your existing status page",
    cta: "📣 Enable subscriptions →",
    preview: "PREVIEW — PUBLIC STATUS PAGE",
    form_label: "RECEIVE NOTIFICATIONS",
    form_btn: "Subscribe",
    sent_label: "NOTIFICATIONS SENT",
    notif1_title: "Incident detected",
    notif1_desc: "Email sent to 47 subscribers · Main API offline",
    notif2_title: "Service recovered",
    notif2_desc: "WhatsApp sent to 23 subscribers · Downtime: 4 min",
  },
  how: {
    tag: "// how it works",
    head1: "From sign-up to",
    head2: "status page in minutes.",
    step1title: "Create your free account",
    step1desc:
      "Sign up in 30 seconds. No credit card. Your first monitor starts running immediately.",
    step2title: "Add a monitor (HTTP or Synthetic)",
    step2desc:
      "Paste your API URL for simple monitoring, or set up a Synthetic Monitor with chained steps to test real flows.",
    step3title: "Set up your alerts",
    step3desc:
      "Enable email notifications — or WhatsApp on the Pro plan — to know immediately when something fails.",
    step4title: "Share your status page",
    step4desc:
      "A public URL is automatically generated. Share it with your clients and let them follow along in real time.",
  },
  testimonial: {
    quote:
      "UpStat alerts me before my client even notices something went down. Simple, straightforward and in Portuguese — no need for a foreign tool.",
    name: "Dev BR",
    role: "Pro Customer · upstat.online",
  },
  price: {
    tag: "// pricing",
    head1: "For $9/mo you stop finding out",
    head2: "about downtime from your users.",
    forever: "forever",
    f1: "10 HTTP monitors",
    f2: "Ping every 5 minutes",
    f3: "7-day history",
    f4: "Public status page",
    f5: "Email notifications",
    f6: "WhatsApp alerts",
    f7: "Synthetic Monitor",
    f8: "Custom URL",
    freebtn: "Start for free",
    recommended: "recommended",
    permonth: "per month",
    p1: "Unlimited monitors",
    p2: "Ping every 1 minute",
    p3: "90-day history",
    p4: "Public status page",
    p5: "Custom URL",
    p6: "Email notifications",
    p7: "💬 WhatsApp alerts",
    p8: "🤖 Synthetic Monitor",
    p9: "Priority support",
    probtn: "I want to upgrade →",
  },
  faq: {
    tag: "// frequently asked questions",
    head1: "Have a question?",
    head2: "We've got answers.",
    q1: "Is there a time limit on the free plan?",
    a1: "No. The Free plan is free forever — it's not a trial. You can use the 10 HTTP monitors, status page and email alerts without paying anything, for as long as you want.",
    q2: "How do WhatsApp alerts work?",
    a2: "You connect your WhatsApp number in the account settings. When any monitor goes down or recovers, UpStat sends a message directly to you — no extra app needed. Available on the Pro plan.",
    q3: "What is a Synthetic Monitor?",
    a3: "It's a monitor that simulates real user actions — chained HTTP requests, like login or a full checkout. It detects when a feature breaks, even if the server is still responding.",
    q4: "How do I install and use the SDK?",
    a4: 'Install via npm: <code>npm install upstat-sdk</code>. Initialize with your API key (available in the dashboard) and use the methods to create monitors, check status and send heartbeats. Docs at <a href="https://upstat.online/docs" target="_blank">upstat.online/docs</a>.',
    q5: "How do my users subscribe to the status page?",
    a5: 'Your public status page has a "Receive notifications" button. The user enters their email or WhatsApp and starts receiving automatic alerts on each incident. You can see the subscriber list in the dashboard.',
    q6: "Can I use the CLI in CI/CD?",
    a6: "Yes. Just run <code>upstat monitors pause &lt;id&gt;</code> before the deploy and <code>upstat monitors resume &lt;id&gt;</code> afterwards to avoid false positives. Works in any pipeline (GitHub Actions, GitLab CI, etc.).",
    q7: "What's the difference between monitoring cron jobs and APIs?",
    a7: "Monitoring APIs is active: UpStat makes periodic requests. Monitoring cron jobs is passive (heartbeat): your job sends a ping to UpStat after running. If the ping doesn't arrive within the expected interval, the alert fires — ideal for backups, email sending and reports.",
    q8: "Do I need a credit card to create an account?",
    a8: "No. Free account with no payment data required. A card is only needed to upgrade to the Pro plan.",
  },
  cta: {
    title1: "Your API might be down",
    title2: "right now.",
    title3: "Would you know?",
    sub: "Start for free. No credit card. Monitor running in 60 seconds.",
    btn1: "Create my account →",
  },
  footer: {
    copy: "© 2026 UpStat. Made in Brazil 🇧🇷",
  },
};

export default en;
