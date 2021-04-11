gsap.fromTo(".first", { x: 1, opacity: "0" }, { duration: 6, y: 100, opacity: "1" });

gsap.to(".second", { duration: 2, y: 200 });

gsap.fromTo(".coco", { color: "blue" }, { duration: 8, y: 200, color: "purple", textShadow: "5px 5px pink", fontSize: "100px", fontWeight: "900", fontFamily: "fantasy" })