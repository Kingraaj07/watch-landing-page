// Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Mobile menu toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        const dropdownTrigger = document.querySelector('.dropdown-trigger');
        const dropdownContent = document.querySelector('.dropdown-content');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });
    

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            const isClickInsideNav = e.target.closest('.nav-container');
            const isMenuOpen = navLinks.classList.contains('active');

            if (!isClickInsideNav && isMenuOpen) {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Handle window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
                if (dropdownTrigger) {
                    dropdownTrigger.classList.remove('active');
                    dropdownContent.classList.remove('active');
                }
            }
        });


// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Add staggered delay for feature cards
            if (entry.target.classList.contains('feature-card')) {
                const delay = entry.target.dataset.delay;
                entry.target.style.animationDelay = `${delay}s`;
            }
        }
    });
}, {
    threshold: 0.1
});

// Observe all animated elements
document.querySelectorAll('.problem-header, .problem-statement, .consequence-item, .real-talk, .solution-header, .solution-intro, .feature-card, .tagline').forEach(el => {
    observer.observe(el);
});

// Add staggered animations
const elements = document.querySelectorAll('.main-heading, .subheading, .offer-box, .cta-button, .trust-badges');
elements.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.2}s`;
    observer.observe(el);
});

// Observe all fade-in elements
document.querySelectorAll('.fade-in-up').forEach((el, index) => {
    el.style.transitionDelay = `${index * 0.2}s`;
    observer.observe(el);
});