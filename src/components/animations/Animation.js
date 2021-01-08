import gsap from "gsap"

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

export const fadeBottomFaster = (animatedElem, triggerElem) => {
  gsap.from(animatedElem, {
    autoAlpha: 0,
    y: 100,
    duration: 1,
    ease: "power4.out",
    paused: true,
    scrollTrigger: {
      trigger: triggerElem,
      start: "center 90%",
    },
  })
}

export const fadeLeft = (animatedElem, triggerElem) => {
  gsap.from(animatedElem, {
    autoAlpha: 0,
    x: 100,
    duration: 1,
    ease: "power4.out",
    paused: true,
    scrollTrigger: {
      trigger: triggerElem,
      start: "center 70%",
    },
  })
}
export const jumpBox = (animatedElem, triggerElem) => {
  gsap.from(animatedElem, {
    x: -240,
    y: 120,
    duration: 1,
    ease: "power4.out",
    paused: true,
    scrollTrigger: {
      trigger: triggerElem,
      start: "top 60%",
    },
  })
}

export const fadeFooter = (animatedElem, triggerElem) => {
  gsap.from(animatedElem, {
    autoAlpha: 0,
    y: 100,
    stagger: 0.3,
    ease: "power4.out",
    paused: true,
    scrollTrigger: {
      trigger: triggerElem,
      start: "top 70%",
    },
  })
}
