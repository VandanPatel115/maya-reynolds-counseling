export const site = {
  name: "Dr. Maya Reynolds, PsyD",
  shortName: "Maya Reynolds",
  credential: "Licensed Clinical Psychologist",
  city: "Santa Monica",
  region: "California",
  address: "123th Street 45 W, Santa Monica, CA 90401",
  serviceAreas: [
    "Santa Monica",
    "Venice",
    "Brentwood",
    "Pacific Palisades",
    "Marina del Rey",
    "Culver City",
  ],
  telehealthNote: "Secure telehealth available throughout California",
};

export const nav = {
  links: [
    { label: "About", href: "#about" },
    {
      label: "Services",
      href: "#services",
      children: [
        { label: "Anxiety & Panic Therapy", href: "#anxiety" },
        { label: "Trauma Therapy & EMDR", href: "#trauma" },
        { label: "Burnout & Perfectionism", href: "#burnout" },
      ],
    },
    {
      label: "Approach",
      href: "#approach",
      children: [
        { label: "Cognitive Behavioral Therapy", href: "#approach" },
        { label: "EMDR", href: "#approach" },
        { label: "Mindfulness-Based Practice", href: "#approach" },
        { label: "Somatic & Body-Oriented Work", href: "#approach" },
      ],
    },
    { label: "Our Office", href: "#office" },
    { label: "FAQ", href: "#faq" },
  ],
  cta: { label: "Free Consultation", href: "#contact" },
};

export const about = {
  eyebrow: "About Dr. Reynolds",
  headingStart: "A grounded, collaborative approach to",
  headingEm: "healing",
  paragraphs: [
    "I'm Dr. Maya Reynolds, a licensed clinical psychologist in Santa Monica. Most of the people I work with are thoughtful, capable adults who look like they're managing well from the outside — and who are quietly exhausted underneath it. Entrepreneurs, creatives, professionals carrying more than they let on.",
    "My approach is warm and collaborative rather than clinical and distant. I draw on cognitive behavioral therapy, EMDR, mindfulness practices, and body-based work, because anxiety and trauma live in the body as much as the mind. Which of those we use depends entirely on you — we'll find what actually helps rather than following a script.",
    "Whether we meet in person at my Santa Monica office or by secure video anywhere in California, the work moves at your pace. Especially with trauma, nothing is rushed. We build safety and stability first, and go deeper only when you're ready.",
  ],
  image: {
    src: "/images/about-office.jpeg",
    alt: "Dr. Maya Reynolds' therapy office in Santa Monica, with natural light and comfortable seating",
  },
  cta: { label: "Schedule a Free 15-Min Consultation", href: "#contact" },
};

export const hero = {
  eyebrow: "Santa Monica, California · In-person & Telehealth",
  headingStart: "Anxiety & Trauma",
  headingEm: "Therapist",
  headingEnd: "in Santa Monica, CA",
  body:
  "You don’t have to keep pushing through on your own. Whether you’re caught in anxious spirals, carrying the weight of past experiences, or running on empty, therapy can help you find steadier ground. Dr. Maya Reynolds offers warm, collaborative care for adults in Santa Monica and across California via telehealth.",
  cta: { label: "Schedule a Free 15-Min Consultation", href: "#contact" },
  imageLeft: {
    src: "/images/hero-left.jpeg",
    alt: "Natural light in Dr. Maya Reynolds' Santa Monica therapy office",
  },
  imageRight: {
    src: "/images/hero-right.png",
    alt: "Dr. Maya Reynolds, PsyD, licensed clinical psychologist in Santa Monica",
  },
};

export const services = {
  eyebrow: "How I can help",
  heading: "Specialized therapy for anxiety, trauma, and burnout",
  items: [
    {
      id: "anxiety",
      title: "Anxiety Therapy in Santa Monica",
      description:
        "If anxiety is keeping you stuck in overthinking, perfectionism, or constant worry, anxiety therapy in Santa Monica can help you break the cycle. Using CBT and mindfulness, Dr. Reynolds helps you build practical tools to feel calmer and more in control.",
      image: {
        src: "/images/service-anxiety.jpg",
        alt: "Quiet corner of a Santa Monica therapy office used for anxiety therapy sessions",
      },
    },
    {
      id: "trauma",
      title: "Trauma Therapy in Santa Monica, CA",
      description:
        "Trauma therapy with Dr. Reynolds creates a safe, paced space to process painful experiences without feeling overwhelmed. Using EMDR and body-based approaches, she helps adults in Santa Monica move from survival mode toward genuine healing.",
      image: {
        src: "/images/service-trauma-misty.jpg",
        alt: "Still water at dawn, evoking the paced, grounded approach of trauma therapy in Santa Monica",
      },
    },
    {
      id: "burnout",
      title: "Burnout Counseling for Adults in Santa Monica",
      description:
        "If you're exhausted, disconnected, or running on fumes, burnout counseling can help you reconnect with what matters. Dr. Reynolds works with high-achieving adults in Santa Monica to rebuild sustainable energy and rediscover a sense of self beyond productivity.",
      image: {
        src: "/images/service-burnout.jpg",
        alt: "Bookshelf and soft seating in a Santa Monica counseling office",
      },
    },
  ],
};

export const office = {
  eyebrow: "The space",
  headingStart: "A calm room in Santa Monica to",
  headingEm: "land",
  paragraphs: [
    "My office sits at 123th Street 45 W in Santa Monica. It's quiet, private, and full of natural light — comfortable without being cluttered. Clients often tell me the room itself helps them settle before we've said much at all.",
    "Sessions are available in person here, or by secure video anywhere in California. Whichever you choose, the priority is the same: a space where you can arrive as you are, without performing being okay.",
  ],
  images: [
    { src: "/images/office-1.jpeg", alt: "Seating area with natural light in Dr. Maya Reynolds' Santa Monica therapy office" },
    { src: "/images/office-2.jpeg", alt: "Bookshelf and sofa in the counseling room at the Santa Monica practice" },
  ],
};

export const faq = {
  eyebrow: "Common questions",
  heading: "What to expect",
  items: [
    {
      q: "Do you offer online therapy in California?",
      a: "Yes. I see clients in person at my Santa Monica office and by secure video anywhere in California. Many people do a mix of both depending on their week.",
    },
    {
      q: "What kind of therapy do you practice?",
      a: "I draw on cognitive behavioral therapy, EMDR, mindfulness practices, and body-based approaches. Which of these we use depends on what you're working through — we'll figure that out together rather than following a fixed protocol.",
    },
    {
      q: "Do you work with couples, teens, or children?",
      a: "I work exclusively with adults. If you're looking for family, couples, or child therapy, I'm glad to point you toward colleagues in the Santa Monica area who specialize in those areas.",
    },
    {
      q: "I've never done trauma therapy. Is it overwhelming?",
      a: "It shouldn't be. We move at your pace and build safety and stability first. Nothing gets opened up before you're ready for it, and you stay in control of what we talk about.",
    },
    {
      q: "How do I get started?",
      a: "Book a free 15-minute consultation. It's a short, no-pressure conversation to talk about what's going on and whether we're a good fit to work together.",
    },
  ],
};

export const cta = {
  eyebrow: "Ready when you are",
  headingStart: "Let's find out if we're a good",
  headingEm: "fit",
  body:
    "A free 15-minute call is the easiest place to start. No commitment, no pressure — just a conversation about what's going on and how I might be able to help.",
  button: { label: "Schedule a Free 15-Min Consultation", href: "#contact" },
  image: {
    src: "/images/cta-office.jpeg",
    alt: "Natural light through the windows of a Santa Monica therapy office",
  },
};

export const footer = {
  blurb:
    "Dr. Maya Reynolds, PsyD is a licensed clinical psychologist offering therapy for anxiety, trauma, and burnout in Santa Monica, California.",
  navTitle: "Navigate",
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Our Office", href: "#office" },
    { label: "FAQ", href: "#faq" },
  ],
  servicesTitle: "Services",
  serviceLinks: [
    { label: "Anxiety Therapy", href: "#anxiety" },
    { label: "Trauma Therapy & EMDR", href: "#trauma" },
    { label: "Burnout Counseling", href: "#burnout" },
  ],
  contactTitle: "Contact",
  address: "123th Street 45 W\nSanta Monica, CA 90401",
  areasLabel: "Serving Santa Monica, Venice, Brentwood, Pacific Palisades, Marina del Rey, and Culver City — plus secure telehealth throughout California.",
  legal: "© 2026 Dr. Maya Reynolds, PsyD. All rights reserved.",
};
