document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item, { scale: 1.1, duration: 0.3, ease: 'power2.out' });
        });
        item.addEventListener('mouseleave', () => {
            gsap.to(item, { scale: 1, duration: 0.3, ease: 'power2.out' });
        });
    });
});
