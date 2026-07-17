 /* ============================================
       CERES ENTERPRISES - MAIN JAVASCRIPT
       ============================================

       Table of Contents:
       1. Image Slider
       2. Navbar Scroll Effect
       3. Mobile Menu Toggle
       4. Word Drop-in Animation

       ============================================ */

    (function() {
        'use strict';

        // Wait for DOM to be ready
        document.addEventListener('DOMContentLoaded', init);

        function init() {
            initImageSlider();
            initNavbarScroll();
            initMobileMenu();
            initWordAnimation();
        }


        /* ============================================
           1. IMAGE SLIDER
           ============================================ */
        function initImageSlider() {
            const slides = document.querySelectorAll('.slide');

            if (slides.length === 0) return;

            let currentSlide = 0;
            const slideInterval = 10000; // 10 seconds

            function nextSlide() {
                slides[currentSlide].classList.remove('active');
                currentSlide = (currentSlide + 1) % slides.length;
                slides[currentSlide].classList.add('active');
            }

            // Auto-advance slides
            setInterval(nextSlide, slideInterval);

            // Preload images for smoother transitions
            slides.forEach(function(slide) {
                const img = slide.querySelector('img');
                if (img && img.src) {
                    const preloadImg = new Image();
                    preloadImg.src = img.src;
                }
            });
        }


        /* ============================================
           2. NAVBAR SCROLL EFFECT
           ============================================ */
        function initNavbarScroll() {
            const scrollContainer = document.getElementById('scroll-container');
            const navbar = document.getElementById('navbar');

            if (!scrollContainer || !navbar) return;

            const scrollThreshold = 80;

            scrollContainer.addEventListener('scroll', function() {
                if (scrollContainer.scrollTop > scrollThreshold) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });
        }


        /* ============================================
           3. MOBILE MENU TOGGLE
           ============================================ */
        function initMobileMenu() {
            const hamburger = document.getElementById('hamburger');
            const mobileMenu = document.getElementById('mobile-menu');

            if (!hamburger || !mobileMenu) return;

            hamburger.addEventListener('click', function() {
                mobileMenu.classList.toggle('hidden');

                // Update aria-expanded for accessibility
                const isExpanded = !mobileMenu.classList.contains('hidden');
                hamburger.setAttribute('aria-expanded', isExpanded);
            });

            // Close menu when clicking a link
            const menuLinks = mobileMenu.querySelectorAll('a');
            menuLinks.forEach(function(link) {
                link.addEventListener('click', function() {
                    mobileMenu.classList.add('hidden');
                    hamburger.setAttribute('aria-expanded', 'false');
                });
            });
        }


        /* ============================================
           4. WORD DROP-IN ANIMATION
           ============================================

           Uses Intersection Observer to detect when
           section 2 enters the viewport, then triggers
           CSS animations by adding the 'animate' class.

           Animation only plays once.

           ============================================ */
        function initWordAnimation() {
            const scrollContainer = document.getElementById('scroll-container');
            const section = document.getElementById('section-2');
            const wordsContainer = document.getElementById('words-container');

            if (!scrollContainer || !section || !wordsContainer) return;

            let hasAnimated = false;

            const observerOptions = {
                root: scrollContainer,  // Watch scroll within this container
                threshold: 0.3          // Trigger when 30% visible
            };

            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting && !hasAnimated) {
                        hasAnimated = true;

                        // Add class to trigger CSS animation
                        wordsContainer.classList.add('animate');

                        // Stop observing - animation only plays once
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            observer.observe(section);
        }

    })();