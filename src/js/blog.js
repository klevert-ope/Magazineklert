import { gsap } from "gsap";

// Header motion
gsap.fromTo(
  ".daily",
  { opacity: 0, y: -10 },
  { opacity: 1, y: 0, duration: 2.5, ease: "power4.in" }
);
gsap.fromTo(
  ".pop",
  { opacity: 0, x: -10 },
  { opacity: 1, x: 0, duration: 2, ease: "power4.in" }
);
gsap.fromTo(
  ".magazine",
  { opacity: 0, y: 10 },
  { opacity: 1, y: 0, duration: 2.5, ease: "power4.in" }
);
gsap.fromTo(
  ".est",
  { opacity: 0, y: -10 },
  { opacity: 1, y: 0, duration: 2.5, ease: "power4.in" }
);
gsap.fromTo(
  ".sidedrawer",
  { opacity: 0, y: 20 },
  { opacity: 1, y: 0, duration: 2.8, ease: "power4.in" }
);

gsap.fromTo(
  ".blogtitle",
  { opacity: 0, y: -20 },
  { opacity: 1, y: 0, duration: 2.5, ease: "circ.in" }
);

// reveal elements
gsap.fromTo(
  ".reveal",
  { x: -20, opacity: 0 },
  {
    x: 0,
    duration: 2.8,
    opacity: 1,
    ease: "circ.in",
    onComplete: showSection,
  }
);

function showSection() {
  document.querySelector("#footer").style.display = "block";
}
