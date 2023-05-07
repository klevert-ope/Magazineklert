// Initialization side nav
import {
  Sidenav,
  initTE,
} from "tw-elements";

initTE({ Sidenav });


import { gsap } from "gsap";
import { ExpoScaleEase, RoughEase, SlowMo } from "gsap/EasePack";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(Flip, ScrollTrigger, ScrollToPlugin, TextPlugin, ExpoScaleEase, RoughEase, SlowMo);


// get all the sections in your document and apply smoothscroll
const sections = document.querySelectorAll('section'); 

sections.forEach((section) => {
  ScrollTrigger.create({
    trigger: section,
    start: 'top center',
    end: 'bottom center',
    scrub: true,
  });
});



//header motion
gsap.from(".daily", {opacity: 0, y: -10, duration: 4.5, ease: 'power2'});
gsap.from(".pop", {opacity: 0, x: -10, duration: 3, ease: 'power2'});
gsap.from(".magazine", {opacity: 0, y: 10, duration: 4.5, ease: 'power2'});
gsap.from(".est", {opacity: 0, y: -10, duration: 4.5, ease: 'power2'});
gsap.from(".sidedrawer", {opacity: 0, y: 20, duration: 4.8, ease: 'power2'});


//introtext motion
gsap.from(".introtexth1", {opacity: 0, y: 30, duration: 4.5, ease: 'power2'});
gsap.from(".introtexth2", {opacity: 0, y: 40, duration: 4.8, ease: 'power2'});

//showcase motion select the blog card element
const blogCard = document.querySelector('.blog-cardscale');

// set the initial scale of the blog card to 0.7
gsap.set(blogCard, { scale: 0.7 });

// animate the scale of the blog card to 1 when it reaches the top 80% of the viewport
gsap.to(blogCard, {
  scale: 1,
  duration: 3.5,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: blogCard,
    start: 'top 75%',
  },
});

// select elements to reveal
const elements = document.querySelectorAll('.reveal');

// set initial y position below viewport
gsap.set(elements, { y: 10, opacity: 0});

// reveal elements when they come into view
elements.forEach(el => {
  gsap.to(el, {
    y: 0,
    duration: 2.5,
    opacity: 1,
    ease: 'power2',
    scrollTrigger: {
      trigger: el,
      start: 'top 90%',
    },
  });
});







  
  
  


  
  
  

