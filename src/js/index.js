import { gsap } from "gsap";
import { ExpoScaleEase, RoughEase, SlowMo } from "gsap/EasePack";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(
  ScrollTrigger,
  ScrollToPlugin,
  ExpoScaleEase,
  RoughEase,
  SlowMo
);

// Header motion
gsap.fromTo(
  ".daily",
  { opacity: 0, y: -10 },
  { opacity: 1, y: 0, duration: 3.5, ease: "power2.in" }
);
gsap.fromTo(
  ".pop",
  { opacity: 0, x: -10 },
  { opacity: 1, x: 0, duration: 3, ease: "power2.in" }
);
gsap.fromTo(
  ".magazine",
  { opacity: 0, y: 10 },
  { opacity: 1, y: 0, duration: 3.5, ease: "power2.in" }
);
gsap.fromTo(
  ".est",
  { opacity: 0, y: -10 },
  { opacity: 1, y: 0, duration: 3.5, ease: "power2.in" }
);
gsap.fromTo(
  ".sidedrawer",
  { opacity: 0, y: 20 },
  { opacity: 1, y: 0, duration: 3.8, ease: "power2.in" }
);

// Intro text motion
gsap.fromTo(
  ".introtexth1",
  { opacity: 0, y: 30 },
  { opacity: 1, y: 0, duration: 3.5, ease: "power2.in" }
);
gsap.fromTo(
  ".introtexth2",
  { opacity: 0, y: 40 },
  { opacity: 1, y: 0, duration: 3.8, ease: "power2.in" }
);

//showcase motion select the blog card element
const blogCard = document.querySelector(".blog-cardscale");

gsap.fromTo(
  ".blog-cardscale",
  { opacity: 0, y: 20 },
  { opacity: 1, y: 0, duration: 3.8, ease: "power2.in" }
);
// set the initial scale of the blog card to 0.7
gsap.set(blogCard, { scale: 0.7 });

// animate the scale of the blog card to 1 when it reaches the top 80% of the viewport
gsap.to(blogCard, {
  scale: 1,
  duration: 3,
  ease: "steps(3)",
  scrollTrigger: {
    trigger: blogCard,
    start: "top 85%",
  },
});

gsap.fromTo(
  "#fastB",
  { opacity: 0, y: 20 },
  { opacity: 1, y: 0, duration: 3.8, ease: "power2.in" }
);

// select elements to reveal
const elements = document.querySelectorAll(".reveal");

// reveal elements when they come into view
elements.forEach((el) => {
  gsap.fromTo(
    el,
    { y: 10, opacity: 0 },
    {
      y: 0,
      duration: 1,
      opacity: 1,
      ease: "power2.in",
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
      },
    }
  );
});
