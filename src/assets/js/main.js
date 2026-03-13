/**
 * ازدهار Theme - Main JavaScript
 * Salla E-commerce Theme
 * Version: 1.0.0
 */

(function () {
    'use strict';

    // ============================================================
    // Initialization
    // ============================================================
    function init() {
        initScrollAnimations();
        initMobileMenu();
        initFlashCountdown();
        initTestimonialsScroll();
        initFAQAccordion();
        initStickyHeader();
    }

    // ============================================================
    // Scroll Animations
    // ============================================================
    function initScrollAnimations() {
        if (!('IntersectionObserver' in window)) return;

        var options = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        var sections = document.querySelectorAll('section');
        sections.forEach(function (section) {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        });
    }

    // ============================================================
    // Mobile Menu
    // ============================================================
    function initMobileMenu() {
        var menuBtn = document.querySelector('[aria-label]');
        var mobileMenu = document.getElementById('mobile-menu');

        if (menuBtn && mobileMenu) {
            menuBtn.addEventListener('click', function () {
                mobileMenu.classList.toggle('hidden');
                document.body.style.overflow = mobileMenu.classList.contains('hidden') ? '' : 'hidden';
            });
        }

        // Close on outside click
        document.addEventListener('click', function (e) {
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
                    mobileMenu.classList.add('hidden');
                    document.body.style.overflow = '';
                }
            }
        });
    }

    // ============================================================
    // Flash Sales Countdown
    // ============================================================
    function initFlashCountdown() {
        var hoursEl = document.getElementById('flash-hours');
        var minutesEl = document.getElementById('flash-minutes');
        var secondsEl = document.getElementById('flash-seconds');

        if (!hoursEl || !minutesEl || !secondsEl) return;

        // Set end time to 12 hours from now
        var endTime = new Date();
        endTime.setHours(endTime.getHours() + 12);
        endTime.setMinutes(endTime.getMinutes() + 45);
        endTime.setSeconds(endTime.getSeconds() + 8);

        function pad(n) {
            return String(n).padStart(2, '0');
        }

        function update() {
            var now = new Date();
            var diff = endTime - now;

            if (diff <= 0) {
                hoursEl.textContent = '00';
                minutesEl.textContent = '00';
                secondsEl.textContent = '00';
                return;
            }

            hoursEl.textContent = pad(Math.floor(diff / 3600000));
            minutesEl.textContent = pad(Math.floor((diff % 3600000) / 60000));
            secondsEl.textContent = pad(Math.floor((diff % 60000) / 1000));
        }

        update();
        setInterval(update, 1000);
    }

    // ============================================================
    // Testimonials Scroll
    // ============================================================
    function initTestimonialsScroll() {
        window.scrollTestimonials = function (direction) {
            var container = document.getElementById('testimonials-container');
            if (container) {
                container.scrollBy({ left: direction * 420, behavior: 'smooth' });
            }
        };
    }

    // ============================================================
    // FAQ Accordion
    // ============================================================
    function initFAQAccordion() {
        var details = document.querySelectorAll('details');
        details.forEach(function (detail) {
            detail.addEventListener('toggle', function () {
                var icon = this.querySelector('.expand-icon');
                if (icon) {
                    icon.style.transform = this.open ? 'rotate(180deg)' : '';
                    icon.style.transition = 'transform 0.3s ease';
                }
            });
        });
    }

    // ============================================================
    // Sticky Header Shadow
    // ============================================================
    function initStickyHeader() {
        var header = document.querySelector('header');
        if (!header) return;

        window.addEventListener('scroll', function () {
            if (window.scrollY > 10) {
                header.style.boxShadow = '0 8px 32px rgba(47, 40, 36, 0.25)';
            } else {
                header.style.boxShadow = '0 4px 20px rgba(47, 40, 36, 0.2)';
            }
        });
    }

    // ============================================================
    // Salla Events Integration
    // ============================================================
    document.addEventListener('salla:cart.updated', function (e) {
        var cartCount = document.querySelector('.cart-count');
        if (cartCount && e.detail) {
            cartCount.textContent = e.detail.count || 0;
        }
    });

    document.addEventListener('salla:product.added', function (e) {
        showToast('تم إضافة المنتج إلى السلة بنجاح ✓', 'success');
    });

    // ============================================================
    // Toast Notification
    // ============================================================
    function showToast(message, type) {
        var toast = document.createElement('div');
        toast.style.cssText = [
            'position: fixed',
            'bottom: 2rem',
            'right: 2rem',
            'z-index: 9999',
            'padding: 1rem 1.5rem',
            'border-radius: 0.75rem',
            'font-family: Tajawal, sans-serif',
            'font-weight: 700',
            'font-size: 0.875rem',
            'color: white',
            'box-shadow: 0 10px 25px rgba(0,0,0,0.15)',
            'transform: translateY(100px)',
            'transition: transform 0.3s ease',
            'background-color: ' + (type === 'success' ? '#16a34a' : '#87602C')
        ].join(';');
        toast.textContent = message;
        document.body.appendChild(toast);

        requestAnimationFrame(function () {
            toast.style.transform = 'translateY(0)';
        });

        setTimeout(function () {
            toast.style.transform = 'translateY(100px)';
            setTimeout(function () { toast.remove(); }, 300);
        }, 3000);
    }

    // ============================================================
    // Product Image Zoom on Hover
    // ============================================================
    function initProductImageZoom() {
        var productImages = document.querySelectorAll('.product-image');
        productImages.forEach(function (img) {
            img.addEventListener('mouseenter', function () {
                this.style.transform = 'scale(1.05)';
            });
            img.addEventListener('mouseleave', function () {
                this.style.transform = 'scale(1)';
            });
        });
    }

    // ============================================================
    // Smooth Scroll for Anchor Links
    // ============================================================
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ============================================================
    // Initialize
    // ============================================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
