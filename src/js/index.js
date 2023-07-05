import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// Header motion
let timeline = gsap.timeline();

timeline
  .fromTo(
    ".daily",
    { opacity: 0, y: -10 },
    { opacity: 1, y: 0, duration: 2.5, ease: "power4.in" }
  )
  .fromTo(
    ".pop",
    { opacity: 0, x: -10 },
    { opacity: 1, x: 0, duration: 2, ease: "power4.in" },
    "-=1.5" // delay the start by 1.5 seconds relative to the previous animation
  )
  .fromTo(
    ".magazine",
    { opacity: 0, y: 10 },
    { opacity: 1, y: 0, duration: 2.5, ease: "power4.in" },
    "-=1.8" // delay the start by 1.8 seconds relative to the previous animation
  )
  .fromTo(
    ".est",
    { opacity: 0, y: -10 },
    { opacity: 1, y: 0, duration: 2.5, ease: "power4.in" },
    "-=1.8" // delay the start by 1.8 seconds relative to the previous animation
  )
  .fromTo(
    ".sidedrawer",
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 2.8, ease: "power4.in" },
    "-=2.1" // delay the start by 2.1 seconds relative to the previous animation
  )
  .fromTo(
    ".introtexth1",
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 2.5, ease: "power4.in" },
    "-=2.3" // delay the start by 2.3 seconds relative to the previous animation
  )
  .fromTo(
    ".introtexth2",
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 3.8,
      ease: "power4.in",
      onComplete: showSections,
    },
    "-=2.5" // delay the start by 2.5 seconds relative to the previous animation
  );

function showSections() {
  document.querySelector("#blogcards").style.display = "block";
  document.querySelector("#fastB").style.display = "block";
  document.querySelector("#footer").style.display = "block";

  // Refresh the ScrollTrigger after the sections are displayed
  ScrollTrigger.refresh();
}

// showcase motion: select the blog card element
const blogCard = document.querySelector(".blog-cardscale");

// set the initial scale of the blog card to 0.7
gsap.set(blogCard, { scale: 0.7 });

// animate the scale of the blog card to 1 when it reaches the top 80% of the viewport
gsap.to(blogCard, {
  scale: 1,
  stagger: 1,
  ease: "steps(3)",
  scrollTrigger: {
    fastScrollEnd: true,
    preventOverlaps: true,
    scrub: true,
    trigger: blogCard,
    start: "clamp(top 95%)",
    end: "clamp(top 55%)",
  },
});

gsap.fromTo(
  "#fastB",
  { opacity: 0, y: 20 },
  { opacity: 1, y: 0, duration: 2.8, ease: "power4.in" }
);

// select elements to reveal
const elements = document.querySelectorAll(".reveal");

// reveal elements when they come into view
elements.forEach((el) => {
  gsap.fromTo(
    el,
    { y: 30, opacity: 0 },
    {
      y: 0,
      duration: 1,
      opacity: 1,
      ease: "power4.inout",
      scrollTrigger: {
        fastScrollEnd: true,
        scrub: true,
        trigger: el,
        start: "clamp(top 95%)",
        end: "clamp(top 75%)",
      },
    }
  );
});
