import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// FADE IN FROM BOTTOM
export const fadeBottom = (animatedElem, triggerElem) => {
  gsap.from(animatedElem, {
    autoAlpha: 0,
    y: 100,
    duration: 1,
    ease: "power4.out",
    paused: true,
    scrollTrigger: {
      trigger: triggerElem,
      start: "center 70%",
      //   markers: true,
    },
  })
}
