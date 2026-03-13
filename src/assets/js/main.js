/**
 * Azdahar Theme - Main JavaScript
 * Theme for Salla e-commerce platform
 */

(function() {
    'use strict';

    // Initialize theme
    function init() {
        initializeEventListeners();
        initializeAnimations();
        initializeCart();
    }

    // Event listeners
    function initializeEventListeners() {
        // Mobile menu toggle
        const menuBtn = document.querySelector('[aria-label="menu"]');
        if (menuBtn) {
            menuBtn.addEventListener('click', toggleMobileMenu);
        }

        // Search functionality
        const searchInput = document.querySelector('input[placeholder*="ابحث"]');
        if (searchInput) {
            searchInput.addEventListener('input', handleSearch);
        }

        // Add to cart buttons
        const addToCartBtns = document.querySelectorAll('button:has(.material-symbols-outlined:contains("shopping_cart"))');
        addToCartBtns.forEach(btn => {
            btn.addEventListener('click', handleAddToCart);
        });

        // Category links
        const categoryLinks = document.querySelectorAll('[data-category]');
        categoryLinks.forEach(link => {
            link.addEventListener('click', handleCategoryClick);
        });
    }

    // Animations
    function initializeAnimations() {
        // Fade in elements on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });

        // Parallax effect on hero section
        const heroSection = document.querySelector('section:first-of-type');
        if (heroSection) {
            window.addEventListener('scroll', () => {
                const scrollY = window.scrollY;
                heroSection.style.backgroundPosition = `center ${scrollY * 0.5}px`;
            });
        }
    }

    // Cart functionality
    function initializeCart() {
        // Get cart from localStorage or initialize
        let cart = JSON.parse(localStorage.getItem('cart')) || {
            items: [],
            total: 0
        };

        window.cart = cart;
    }

    // Handle add to cart
    function handleAddToCart(e) {
        e.preventDefault();
        
        const productCard = e.target.closest('[data-product]');
        if (!productCard) return;

        const product = {
            id: productCard.dataset.product,
            name: productCard.querySelector('h5').textContent,
            price: parseFloat(productCard.dataset.price),
            image: productCard.querySelector('img').src
        };

        window.cart.items.push(product);
        window.cart.total += product.price;
        localStorage.setItem('cart', JSON.stringify(window.cart));

        // Show notification
        showNotification(`تم إضافة ${product.name} إلى السلة`);
        updateCartCount();
    }

    // Handle search
    function handleSearch(e) {
        const query = e.target.value.toLowerCase();
        // Implement search logic here
        console.log('Searching for:', query);
    }

    // Handle category click
    function handleCategoryClick(e) {
        e.preventDefault();
        const category = e.target.dataset.category;
        // Implement category filter here
        console.log('Filtering by category:', category);
    }

    // Toggle mobile menu
    function toggleMobileMenu() {
        const menu = document.querySelector('[data-mobile-menu]');
        if (menu) {
            menu.classList.toggle('hidden');
        }
    }

    // Show notification
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    // Update cart count
    function updateCartCount() {
        const cartCount = document.querySelector('[data-cart-count]');
        if (cartCount) {
            cartCount.textContent = window.cart.items.length;
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
