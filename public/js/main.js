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

    // Force a refresh of ScrollTrigger (fixes scroll-snap issues)
    ScrollTrigger.refresh();

    const words = document.querySelectorAll(".word");

    // Debug: Confirm we found the words
    console.log("Words found:", words.length);

    if (words.length === 0) {
        console.error("No .word elements found! Check your HTML.");
    }

    // Animate words – this is the most reliable way with scroll-snap
    gsap.from(words, {
        y: -150,                // Drop from higher up for more drama
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.4,           // Longer stagger so you really see them come in one by one
        scrollTrigger: {
            trigger: "#section-2",
            start: "top 85%",       // Trigger when top of section is near bottom of viewport
            end: "bottom 15%",      // Keep it active longer
            toggleActions: "play none none reverse", // Play once, reverse on scroll up
            markers: true,          // SHOWS GREEN/PINK MARKERS ON SCREEN – TURN OFF LATER
            // markers: false,      // Uncomment this when it's working
            once: false             // Let it replay on scroll up/down for testing
        }
    });
});