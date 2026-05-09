/* ================================================
   VY PORTFOLIO - INTERACTIVE JAVASCRIPT
   Dark/Light Mode, Smooth Scroll, Animations
   ================================================ */

// ============== THEME TOGGLE FUNCTIONALITY ==============

const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference or default to 'light-mode'
const currentTheme = localStorage.getItem('theme') || 'light-mode';
if (currentTheme === 'dark-mode') {
    body.classList.add('dark-mode');
    updateThemeIcon();
}

// Theme toggle event listener
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Update localStorage
    const theme = body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
    localStorage.setItem('theme', theme);
    
    // Update icon
    updateThemeIcon();
});

// Update theme icon based on current theme
function updateThemeIcon() {
    const icon = themeToggle.querySelector('i');
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// ============== SMOOTH SCROLL FUNCTION ==============

function scrollToSection(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

/* ============================================
   SMOOTH SCROLL WITH FADE-IN ANIMATION
   ============================================ */

// Intersection Observer for fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            // Optional: stop observing after animation
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with data-animation attribute
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('[data-animation]');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
    
    // Also observe about card and contact section for animations
    const aboutCard = document.querySelector('.about-card');
    const contactSection = document.querySelector('.contact');
    
    if (aboutCard) observer.observe(aboutCard);
    if (contactSection) observer.observe(contactSection);
});

/* ============================================
   ACTIVE NAVBAR LINK
   ============================================ */

// Update active navbar link based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = 'var(--accent-primary)';
        } else {
            link.style.color = 'var(--text-secondary)';
        }
    });
});

/* ============================================
   MOBILE MENU HANDLING (if you add mobile menu later)
   ============================================ */

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/* ============================================
   PAGE LOAD ANIMATION
   ============================================ */

// Fade in page elements on load
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

/* ============================================
   PARALLAX EFFECT (OPTIONAL - for hero section)
   ============================================ */

const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    if (hero) {
        const scrollPosition = window.scrollY;
        const heroElements = hero.querySelectorAll('.hero::before, .hero::after');
        
        // Subtle parallax effect
        hero.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    }
});

/* ============================================
   UTILITY: ADD CUSTOM CONSOLE MESSAGE
   ============================================ */

console.log('%cVy Portfolio 🎨', 'font-size: 24px; font-weight: bold; color: #c084fc;');
console.log('%cDesigned & Developed by Trương Triệu Vy', 'font-size: 12px; color: #666666;');
console.log('%cWelcome! 👋', 'font-size: 14px; color: #f9a8d4;');

/* ============================================
   PERFORMANCE OPTIMIZATION
   ============================================ */

// Lazy load images when implemented
if ('IntersectionObserver' in window) {
    // Intersection Observer is already being used for animations
} else {
    // Fallback for older browsers
    document.querySelectorAll('[data-animation]').forEach(el => {
        el.classList.add('fade-in');
    });
}

/* ============================================
   KEYBOARD NAVIGATION
   ============================================ */

// Enhanced keyboard accessibility
document.addEventListener('keydown', (e) => {
    // Press 'T' to toggle theme
    if (e.key === 't' || e.key === 'T') {
        if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            themeToggle.click();
        }
    }
    
    // Press 'H' to scroll to home
    if (e.key === 'h' || e.key === 'H') {
        if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
        }
    }
});

/* ============================================
   SCROLL TOP INDICATOR (OPTIONAL)
   ============================================ */

// Show/hide scroll indicator based on scroll position
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    
    // You can add more complex scroll-based effects here
    if (scrollPosition > 100) {
        // User has scrolled down
    }
});

/* ============================================
   RESPONSIVE TOUCH HANDLING
   ============================================ */

// Improve touch interactions on mobile
if ('ontouchstart' in window) {
    document.querySelectorAll('.btn, .social-link, .hobby-card').forEach(element => {
        element.addEventListener('touchstart', function() {
            this.style.opacity = '0.8';
        });
        
        element.addEventListener('touchend', function() {
            this.style.opacity = '1';
        });
    });
}

/* ============================================
   READY STATE
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    console.log('✨ Portfolio loaded successfully!');
    
    // Add initial fade-in animation to hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.animation = 'fadeInUp 1s ease-out';
    }
});
