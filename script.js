// Initial animations for hero elements
gsap.from(".hero-title", {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "power2.out"
  });
  
  gsap.from(".hero-subtitle", {
    opacity: 0,
    y: -30,
    delay: 0.5,
    duration: 1,
    ease: "power2.out"
  });
  
  gsap.from(".hero-button", {
    opacity: 0,
    y: 20,
    delay: 1,
    duration: 1,
    ease: "power2.out"
  });
  
  // Parallax effect for background
  document.addEventListener("mousemove", (event) => {
    const { clientX, clientY } = event;
    const heroBg = document.querySelector(".hero-background");
    const movementX = (clientX - window.innerWidth / 2) * 0.02;
    const movementY = (clientY - window.innerHeight / 2) * 0.02;
    
    gsap.to(heroBg, {
      x: movementX,
      y: movementY,
      duration: 0.5
    });
  });
  