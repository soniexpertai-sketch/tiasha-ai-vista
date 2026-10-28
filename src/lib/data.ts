export const CONTACT = {
  phone: "+91 95735 18073",
  phoneHref: "tel:+919573518073",
  whatsappHref:
    "https://wa.me/919573518073?text=Hi%20Tiasha%20AI%20Vista%2C%20I%27d%20like%20to%20book%20a%20free%20AI%20consultation.",
  email: "info@tiashaaivista.com",
  emailHref: "mailto:info@tiashaaivista.com",
  linkedin: "https://www.linkedin.com/company/145349716/",
  facebook: "https://www.facebook.com/profile.php?id=61591972387391",
  city: "Pune, Maharashtra",
};

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Industries", href: "#industries" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const PROBLEMS = [
  {
    title: "Enquiries go cold overnight",
    body: "A lead messages at 10:40 pm on WhatsApp. Someone sees it at 11 the next morning. By then they've called two other people.",
  },
  {
    title: "Good staff stuck typing",
    body: "Your accountant spends Monday keying supplier invoices into Tally. Your sales head updates the CRM on Sunday evenings.",
  },
  {
    title: "The phone rings during peak hours",
    body: "The front desk can only hold one call at a time. Missed calls turn into missed appointments and no one tracks them.",
  },
  {
    title: "Nobody knows the real numbers",
    body: "How many leads came in last week, and how many were followed up? The answer lives in three spreadsheets and someone's phone.",
  },
];

export const SERVICES = [
  {
    icon: "MessageCircle",
    title: "WhatsApp enquiry desk",
    body: "Replies to every new lead within a minute, asks the right questions, books the visit or demo, and hands hot leads to your team.",
  },
  {
    icon: "Mic",
    title: "Voice call agent",
    body: "Answers calls in English or Hindi when your line is busy or closed. Books, reschedules and sends reminders by SMS or WhatsApp.",
  },
  {
    icon: "ScanText",
    title: "Invoice and document processing",
    body: "Reads invoices, POs and forms (scans and phone photos too), checks them, and posts the entries to Tally, Zoho or your ERP.",
  },
  {
    icon: "Workflow",
    title: "CRM and follow-up automation",
    body: "Keeps your CRM up to date on its own and runs the follow-ups your team keeps meaning to send. A weekly report lands in your inbox.",
  },
];

export const MORE_SERVICES = [
  "Website chat assistants",
  "Email triage and drafting",
  "HR screening and onboarding",
  "Q&A over your own documents",
  "Expense and reconciliation workflows",
  "Custom AI agents",
];

export const TOOLS = [
  "WhatsApp Business API",
  "Zoho",
  "Tally",
  "Google Workspace",
  "Microsoft 365",
  "OpenAI",
  "Claude",
  "n8n",
  "Python",
];

export const WALKTHROUGH = [
  {
    time: "10:42 pm",
    title: "Enquiry comes in",
    body: "A buyer messages about a 2BHK in Baner from a 99acres listing.",
  },
  {
    time: "10:42 pm",
    title: "Assistant replies",
    body: "Answers price and availability, asks budget, timeline and preferred visit day.",
  },
  {
    time: "10:44 pm",
    title: "Lead is scored and saved",
    body: "Marked hot. Contact, budget and chat history go into Zoho CRM.",
  },
  {
    time: "10:45 pm",
    title: "Visit booked",
    body: "Sunday 11 am goes into the agent's calendar. The buyer gets a confirmation with the location pin.",
  },
  {
    time: "9:00 am",
    title: "Your team picks it up",
    body: "The agent sees the lead, the chat and the booking. No one had to stay up.",
  },
];

export const EXAMPLE_BUILDS = [
  {
    industry: "Real estate developer",
    problem: "Portal and WhatsApp leads wait hours for a first reply, and site-visit scheduling happens over long phone calls.",
    build: "A WhatsApp assistant that qualifies each lead, books visits into agents' calendars and updates the CRM.",
    measure: "Time to first reply, visits booked per week, leads with no follow-up.",
    timeline: "About 4 weeks",
  },
  {
    industry: "Multi-clinic practice",
    problem: "Calls go unanswered at the morning rush, and no-shows are high because reminders are sent by hand.",
    build: "A voice agent for overflow calls, plus automatic reminders and a reschedule link on WhatsApp.",
    measure: "Missed calls, no-show rate, front-desk time on the phone.",
    timeline: "About 5 weeks",
  },
  {
    industry: "Manufacturer",
    problem: "Two people spend most of each week typing supplier invoices into the accounting system.",
    build: "An invoice reader that extracts and checks line items against POs and posts them for one-click approval.",
    measure: "Invoices processed per hour, error rate, days to close the month.",
    timeline: "About 5 weeks",
  },
];

export const INDUSTRIES = [
  { name: "Real Estate", line: "Lead qualification, site-visit booking, broker follow-ups." },
  { name: "Healthcare", line: "Appointment calls, reminders, report delivery on WhatsApp." },
  { name: "Education", line: "Admission enquiries, fee reminders, document collection." },
  { name: "Manufacturing", line: "Invoice and PO entry, supplier follow-ups." },
  { name: "Retail", line: "Order-status replies, catalogue on WhatsApp, return requests." },
  { name: "Finance", line: "KYC document checks, client service replies, reports." },
  { name: "Logistics", line: "Tracking queries, proof-of-delivery digitisation." },
  { name: "Professional Services", line: "Client intake, meeting notes, internal knowledge search." },
];

export const PROCESS_STEPS = [
  {
    when: "Day 1",
    title: "30-minute call",
    body: "You tell us where time is going. We ask a lot of questions and tell you honestly if AI is the right fix.",
  },
  {
    when: "Week 1",
    title: "Workflow audit",
    body: "We map one process end to end and send a written plan: what we'd build, what it costs, what it should save.",
  },
  {
    when: "Weeks 2–5",
    title: "Build and test",
    body: "We build on your real data and test with your team before anything reaches a customer.",
  },
  {
    when: "Ongoing",
    title: "Run and improve",
    body: "We watch the conversations, fix what's off, and send you a short report every month.",
  },
];

export const PRICING = [
  {
    name: "Starter",
    tagline: "One workflow, one channel. A good first project.",
    features: [
      "One assistant or automation",
      "WhatsApp or website",
      "Connects to one system (CRM, Sheets, Tally)",
      "Email and WhatsApp support",
    ],
    featured: false,
  },
  {
    name: "Growth",
    tagline: "For businesses ready to automate across teams.",
    features: [
      "Up to three workflows",
      "WhatsApp, website and voice",
      "CRM and calendar integration",
      "Monthly performance report",
      "Priority support",
    ],
    featured: true,
  },
  {
    name: "Custom",
    tagline: "Larger organisations, ERP integrations or bespoke agents.",
    features: [
      "Workflows scoped to your processes",
      "ERP and Microsoft 365 integration",
      "Deployment in your own cloud",
      "Security review and SLAs",
    ],
    featured: false,
  },
];

export const FAQS = [
  {
    q: "How much does it cost?",
    a: "It depends on the workflow, the channels and the systems we connect to. We give you a fixed quote after the audit, before any work starts. Most first projects for SMEs cost less than one employee's salary for a few months.",
  },
  {
    q: "How long does it take?",
    a: "A first workflow usually goes live in three to five weeks. You'll see a working version on your own data in the second week.",
  },
  {
    q: "Does it work on WhatsApp?",
    a: "Yes. We use the official WhatsApp Business API, so your assistant can reply, send catalogues and reminders and take bookings within WhatsApp's rules.",
  },
  {
    q: "Will it replace my staff?",
    a: "No. It takes over the repetitive part of their day: the first reply, the data entry, the reminder. Your people still handle the conversations that need judgement.",
  },
  {
    q: "Is my data safe?",
    a: "Your data stays in your accounts. Access is role-based, and for larger clients we can deploy inside your own Azure or AWS account. We don't use your data to train public models.",
  },
  {
    q: "Do we need a technical person to run it?",
    a: "No. You get a simple dashboard and a short training session. If your team can use WhatsApp and email, they can run it.",
  },
  {
    q: "Does it understand Hindi or Marathi?",
    a: "Yes. Chat and voice assistants can reply in English, Hindi, Marathi and other Indian languages, switching based on how the customer writes or speaks.",
  },
  {
    q: "Can it connect to our CRM or accounting software?",
    a: "Usually, yes. We regularly connect to Zoho, Tally, Google Sheets, Microsoft 365 and calendars, and to most other tools that have an API.",
  },
  {
    q: "Can I see a demo first?",
    a: "Yes. On the first call we show working demos for your industry. If it helps you decide, we'll build a small proof of concept on your own use case.",
  },
];
