document.addEventListener('DOMContentLoaded', () => {
    // Existing navbar hover animations
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item, { scale: 1.1, duration: 0.3, ease: 'power2.out' });
        });
        item.addEventListener('mouseleave', () => {
            gsap.to(item, { scale: 1, duration: 0.3, ease: 'power2.out' });
        });
    });

    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    const words = document.querySelectorAll(".word");

    // Debug: Confirm we found the words
    console.log("Words found:", words.length);

    if (words.length === 0) {
        console.error("No .word elements found! Check your HTML.");
        return;
    }

    // IMPORTANT: The words are already hidden via CSS (opacity: 0, transform: translateY(-150px))
    // We use gsap.to() to animate them TO their visible final state
    // The scroller is the .snap-container, NOT the window (because of scroll-snap)

    gsap.to(words, {
        y: 0,                   // Animate TO y: 0 (from CSS translateY(-150px))
        opacity: 1,             // Animate TO opacity: 1 (from CSS opacity: 0)
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.4,           // Each word drops in 0.4s after the previous
        scrollTrigger: {
            trigger: "#section-2",
            scroller: ".snap-container",  // CRITICAL: Use the snap container as scroller
            start: "top 80%",             // Trigger when section top hits 80% of viewport
            end: "top 20%",
            toggleActions: "play none none reverse",
            markers: false,               // Set to true for debugging
            once: false
        }
    });

    // Refresh ScrollTrigger after setup (important for scroll-snap containers)
    ScrollTrigger.refresh();

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.getElementById('mobile-menu');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            mobileMenu.classList.toggle('show');
            mobileMenu.classList.toggle('hidden');
        });
    }
});