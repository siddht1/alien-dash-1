"use strict";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, MorphSVGPlugin);
ScrollSmoother.create({
    normalizeScroll: true,
    smooth: 1,
    effects: true,
    smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
});
const waveTL = gsap.timeline({
    repeat: -1,
    yoyo: true,
    ease: "none",
});
waveTL.to("#wave path", {
    duration: 5,
    morphSVG: "#wave3 path",
    ease: "quad.inOut",
});
waveTL.to("#wave path", {
    duration: 5,
    morphSVG: "#wave2 path",
    ease: "quad.inOut",
});
