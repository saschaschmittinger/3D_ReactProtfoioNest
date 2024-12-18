import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Über uns",
  },
  {
    id: "work",
    title: "Prozesse",
  },
  {
    id: "contact",
    title: "Kontakt",
  },
];

const services = [
  {
    title: "Web Entwicklung",
    icon: web,
  },
  {
    title: "E-Commerce",
    icon: mobile,
  },
  {
    title: "Conversion-Rate Optimierung",
    icon: backend,
  },
  {
    title: "Social Media Marketing",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Gemeinsame Planung",
    company_name: "",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Erster Schritt",
    points: [
      "Zielvereinbarung: Klare Festlegung der Hauptziele der Webanwendung und Identifikation der Zielgruppen, um Funktionen und Inhalte optimal zu gestalten.",
      "Anforderungsanalyse: Besprechung der benötigten Funktionen und technischen Anforderungen, um  eine qualitativ hochwertige Lead Gernerierung sicherzustellen",
      "Zeitplan: Festlegung eines realistischen Zeitplans, um eine effiziente und wirtschaftliche Umsetzung zu gewährleisten.",
      "Kommunikations- und Feedbackstruktur: Vereinbarung regelmäßiger Meetings, Feedbackzyklen und Kommunikationskanäle, um den Fortschritt transparent zu halten und Änderungswünsche frühzeitig zu erkennen",
    ],
  },
  {
    title: "Die Entwicklung",
    company_name: "",
    icon: tesla,
    iconBg: "#383E56",
    date: " Zweiter Schritt",
    points: [
      "Entwicklung der Webanwendung mit React.js und verwandten Technologien",
      "Zusammenarbeit mit funktionsübergreifenden Teams, einschließlich Designern, Produktmanagern und anderen Entwicklern, um für Sie das bestmögliche Ergebniss zu erreichen.",
      "Umsetzung eines responsiven Designs und Sicherstellung der Kompatibilität mit verschiedenen Browsern, Handys und Tablets",
      "Teilnahme an Code-Reviews und Bereitstellung konstruktiven Feedbacks",
    ],
  },
  {
    title: "Hosting der Webanwendung",
    company_name: "",
    icon: shopify,
    iconBg: "#383E56",
    date: " Finale Beprechung vor dem Hosting",
    points: [
      "Zuverlässigkeit und Uptime: Sicherstellen, dass die Website auf einem Server mit hoher Verfügbarkeit in Deutschland gehostet wird, um minimale Ausfallzeiten und eine durchgängig erreichbare Website zu gewährleisten",
      "Sicherheit: Einsatz von SSL-Zertifikaten, regelmäßigen Backups und Schutzmechanismen wie Firewalls und DDoS-Abwehr, um die Daten des Kunden zu schützen",
      "Skalierbarkeit: Möglichkeit zur Erweiterung der Serverkapazitäten, um steigenden Traffic oder neue Anforderungen des Kunden ohne Leistungseinbußen zu bewältigen",
      "Support und Wartung: Bereitstellung eines schnellen und kompetenten technischen Supports sowie regelmäßige Updates und Wartung zur Sicherstellung einer optimalen Leistung der Website.",
    ],
  },
  {
    title: "Abschluss Review",
    company_name: "",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Zoom Call wischen 30 - 60 Min",
    points: [
      "Projektziele und Ergebnisse vergleichen: Überprüfung, ob die ursprünglichen Projektziele erreicht wurden und wie gut die fertige Webanwendung den Anforderungen entspricht",
      "Leistungsanalyse: Bewertung der technischen Performance der Webanwendung, einschließlich Ladezeiten, Benutzerfreundlichkeit und Stabilität unter verschiedenen Bedingungen",
      "Identifizierung von Herausforderungen: Analyse der größten Schwierigkeiten während des Projekts, um Verbesserungspotenziale für zukünftige Projekte zu erkennen.  ",
      "Feedback-Runde und Dokumentation: Einholen von Feedback vom Team und vom Kunden und Erstellung eines Abschlussberichts, der die wichtigsten Erkenntnisse und Empfehlungen für künftige Projekte festhält.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Blog App",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "Astro",
        color: "blue-text-gradient",
      },
      {
        name: "Framer-Motion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://ssc-block.netlify.app",
  },
  {
    name: "IT Landingpage",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://schmittinger-react-landingpage.netlify.app/",
  },
  {
    name: "SSC-Tailwindcss Course",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://ssc-tailwindcourse.netlify.app",
  },
];

export { services, technologies, experiences, testimonials, projects };
