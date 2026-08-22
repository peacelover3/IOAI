// NSTC IOAI Pakistan - Main JavaScript File
// Modern 2026 Redesign - Enhanced Animations

// ============================================
// Initialize on Page Load
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initializeMobileMenu();
    initializeScrollAnimations();
    initializeInteractiveElements();
    addSmoothScrolling();
    animateCounterNumbers();
});

// ============================================
// Mobile Menu Toggle
// ============================================

function initializeMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    if (!mobileMenuBtn || !navLinks) return;

    mobileMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        });
    });

    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && e.target !== mobileMenuBtn) {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        }
    });

    window.addEventListener('scroll', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    });
}

// ============================================
// Scroll-triggered Animations
// ============================================

function initializeScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });

    document.querySelectorAll('.card, .team-card, .resource-card, .stat-item').forEach(el => {
        observer.observe(el);
    });
}

// ============================================
// Counter Animation for Stats
// ============================================

function animateCounterNumbers() {
    const counters = document.querySelectorAll('.stat-number[data-target]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                const duration = 2000;
                const increment = target / (duration / 16);
                let current = 0;

                const updateCounter = () => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        counter.textContent = target + '+';
                    } else {
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    }
                };

                updateCounter();
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

// ============================================
// Interactive Elements
// ============================================

function initializeInteractiveElements() {
    const buttons = document.querySelectorAll('.cta-btn, .cta-btn-large, .download-btn, .view-btn, .join-btn, .secondary-btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.05)';
        });
        btn.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
        });
    });

    buttons.forEach(btn => {
        btn.addEventListener('click', function (e) {
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.6)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s ease-out';
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });

    updateActiveNavLink();
    window.addEventListener('scroll', updateActiveNavLink);
}

// ============================================
// Update Active Navigation Link
// ============================================

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                const href = link.getAttribute('href');
                if (href && href.includes(section.id)) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ============================================
// Smooth Scrolling for Anchor Links
// ============================================

function addSmoothScrolling() {
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
}

// ============================================
// Parallax Effect
// ============================================

function parallaxEffect() {
    const parallaxElements = document.querySelectorAll('.blob');
    window.addEventListener('scroll', () => {
        parallaxElements.forEach((el, index) => {
            const speed = 0.5 + index * 0.1;
            el.style.transform = `translateY(${window.pageYOffset * speed}px)`;
        });
    });
}

parallaxEffect();

// ============================================
// Text Glitch Effect
// ============================================

function addGlitchEffect() {
    const glitchElement = document.querySelector('.glitch');
    if (!glitchElement) return;

    glitchElement.addEventListener('mouseenter', function () {
        this.style.animation = 'glitch-animation 0.3s ease-in-out';
        setTimeout(() => {
            this.style.animation = 'none';
        }, 300);
    });
}

addGlitchEffect();

// ============================================
// Dynamic Background Animation
// ============================================

function animateBackground() {
    const blobs = document.querySelectorAll('.blob');
    blobs.forEach((blob, index) => {
        blob.style.animationDelay = `${index * 2}s`;
    });
}

animateBackground();

// ============================================
// Console Easter Egg
// ============================================

console.log(
    "%c🚀 Welcome to NSTC Community of IOAI Pakistan! 🚀\n" +
    "%cJoin us on WhatsApp to be part of Pakistan's AI revolution!\n" +
    "%cMade with ❤️ and cutting-edge animations | 2026 Edition",
    "color: #00d4ff; font-size: 16px; font-weight: bold;",
    "color: #7c3aed; font-size: 14px;",
    "color: #0099ff; font-size: 12px;"
);

// ============================================
// Performance Optimization
// ============================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// CSS Animation Keyframes
// ============================================

const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to { transform: scale(4); opacity: 0; }
    }
    @keyframes glitch-animation {
        0%, 100% { text-shadow: 0 0 0px #00d4ff; }
        50% { text-shadow: 3px 3px 0px #7c3aed, -2px -2px 0px #0099ff; }
    }
    @keyframes pulse-badge {
        0%, 100% { box-shadow: 0 0 20px rgba(0, 212, 255, 0.3); }
        50% { box-shadow: 0 0 40px rgba(0, 212, 255, 0.6); }
    }
    .animate-in { animation: slide-up 0.6s ease-out !important; }
`;

document.head.appendChild(style);

window.addEventListener('load', () => {
    console.log('✅ NSTC IOAI Website fully loaded and animated! | 2026 Edition');
});
