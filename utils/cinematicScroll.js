export const cinematicScrollObject = {
  brand: {
    name: "Bhavesh Gurav",
    href: "#top",
  },
  cta: {
    label: "Hire Me",
    href: "#contact",
  },
  hint: "scroll to explore",
  diveScroll: 1.3,
  connScroll: 0.9,
  atmosphere: true,
  nav: true,
  sections: [
    {
      id: "intro",
      label: "Intro",
      still: "/assets/background/hero-poster.jpg",
      stillMobile: "/assets/background/hero-poster-mobile.jpg",
      clip: "/assets/vid/intro.mp4",
      clipMobile: "/assets/vid/intro-mobile.mp4",
      accent: "#7dd3fc",
      eyebrow: "Software Developer",
      title: "Building digital experiences that feel premium.",
      body: "I design and develop scalable full-stack products that blend clean engineering with thoughtful user experiences.",
      tags: ["React", "ASP.NET", "SQL", "TypeScript"],
      scroll: 1.5,
      linger: 0.35,
    },
    {
      id: "build",
      label: "Build",
      still: "/assets/background/build-poster.jpg",
      stillMobile: "/assets/background/build-poster-mobile.jpg",
      clip: "/assets/vid/build.mp4",
      clipMobile: "/assets/vid/build-mobile.mp4",
      accent: "#a78bfa",
      eyebrow: "Engineering",
      title: "Clean architecture, fast delivery, resilient systems.",
      body: "From API design to frontend implementation, I focus on maintainable code and performant user journeys.",
      tags: ["C#", "API", "UI", "Performance"],
      scroll: 1.6,
      linger: 0.4,
    },
    {
      id: "launch",
      label: "Launch",
      still: "/assets/background/launch-poster.jpg",
      stillMobile: "/assets/background/launch-poster-mobile.jpg",
      clip: "/assets/vid/launch.mp4",
      clipMobile: "/assets/vid/launch-mobile.mp4",
      accent: "#34d399",
      eyebrow: "Product",
      title: "From idea to production-ready release.",
      body: "I help turn concepts into polished web experiences that are designed to ship and grow with real users.",
      tags: ["Product", "UX", "Deployment", "Optimization"],
      scroll: 1.7,
      linger: 0.45,
    },
    {
      id: "contact",
      label: "Contact",
      still: "/assets/background/contact-poster.jpg",
      stillMobile: "/assets/background/contact-poster-mobile.jpg",
      clip: "/assets/vid/contact.mp4",
      clipMobile: "/assets/vid/contact-mobile.mp4",
      accent: "#fbbf24",
      eyebrow: "Let’s work together",
      title: "Available for product work, custom builds, and freelance collaboration.",
      body: "I’m open to building polished digital experiences and solving product challenges with modern engineering practices.",
      tags: ["Freelance", "Remote", "Full Stack"],
      scroll: 1.4,
      linger: 0.3,
      cta: {
        primary: { label: "Get in touch", href: "#contact" },
        secondary: { label: "View projects", href: "#projects" },
      },
    },
  ],
  connectors: [
    "/assets/vid/connector-1.mp4",
    "/assets/vid/connector-2.mp4",
    "/assets/vid/connector-3.mp4",
  ],
  connectorsMobile: [
    "/assets/vid/connector-1-mobile.mp4",
    "/assets/vid/connector-2-mobile.mp4",
    "/assets/vid/connector-3-mobile.mp4",
  ],
};

export function createCinematicScrollConfig(overrides = {}) {
  return {
    ...cinematicScrollObject,
    ...overrides,
    sections: overrides.sections || cinematicScrollObject.sections,
    connectors: overrides.connectors || cinematicScrollObject.connectors,
    connectorsMobile:
      overrides.connectorsMobile || cinematicScrollObject.connectorsMobile,
  };
}

export default cinematicScrollObject;
