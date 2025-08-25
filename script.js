document.addEventListener("DOMContentLoaded", () => {
    // --- Sticky Navbar on Scroll ---
    const header = document.querySelector(".header");
    window.addEventListener("scroll", () => {
        header.classList.toggle("scrolled", window.scrollY > 50);
    });

    // --- Mobile Hamburger Menu ---
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
    document.querySelectorAll(".nav-link").forEach(link => 
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        })
    );

    // --- FAQ Accordion ---
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const currentlyActive = document.querySelector('.faq-item.active');
            if (currentlyActive && currentlyActive !== item) {
                currentlyActive.classList.remove('active');
                currentlyActive.querySelector('.faq-answer').style.maxHeight = 0;
            }

            item.classList.toggle('active');
            const answer = item.querySelector('.faq-answer');
            answer.style.maxHeight = item.classList.contains('active') ? answer.scrollHeight + 'px' : 0;
        });
    });

    // --- Fade-in on Scroll Animation ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // --- Particle.js for Hero Background ---
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', { particles: { number: { value: 60, density: { enable: true, value_area: 800 } }, color: { value: "#ffffff" }, shape: { type: "circle" }, opacity: { value: 0.5, random: false }, size: { value: 3, random: true }, line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 }, move: { enable: true, speed: 2, direction: "none", out_mode: "out" } }, interactivity: { detect_on: "canvas", events: { onhover: { enable: true, mode: "repulse" }, resize: true } }, retina_detect: true });
    }

    // --- Make Contact Us items unclickable (keep hover animation) ---
    const contactLinks = document.querySelectorAll('.footer-links .contact-us a');
    contactLinks.forEach(link => {
        // Prevent mouse clicks from triggering tel: or navigation
        link.addEventListener('click', (e) => e.preventDefault());
        // Prevent keyboard activation (Enter/Space)
        link.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
            }
        });
        // Remove href so it's non-interactive, keep hover styles
        link.removeAttribute('href');
        // Remove from tab order
        link.tabIndex = -1;
        // Mark as disabled for assistive tech
        link.setAttribute('aria-disabled', 'true');
        link.setAttribute('role', 'text');
    });
});