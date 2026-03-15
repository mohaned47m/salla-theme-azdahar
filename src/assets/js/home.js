import "lite-youtube-embed";
import BasePage from "./base-page";
import Lightbox from "fslightbox";
window.fslightbox = Lightbox;

class Home extends BasePage {
    onReady() {
        this.initFeaturedTabs();
        this.initAzdaharScrollAnimations();
    }

    /**
     * used in views/components/home/featured-products-style*.twig
     */
    initFeaturedTabs() {
        app.all('.tab-trigger', el => {
            el.addEventListener('click', ({ currentTarget: btn }) => {
                let id = btn.dataset.componentId;
                // btn.setAttribute('fill', 'solid');
                app.toggleClassIf(`#${id} .tabs-wrapper>div`, 'is-active opacity-0 translate-y-3', 'inactive', tab => tab.id == btn.dataset.target)
                    .toggleClassIf(`#${id} .tab-trigger`, 'is-active', 'inactive', tabBtn => tabBtn == btn);

                // fadeIn active tabe
                setTimeout(() => app.toggleClassIf(`#${id} .tabs-wrapper>div`, 'opacity-100 translate-y-0', 'opacity-0 translate-y-3', tab => tab.id == btn.dataset.target), 100);
            })
        });
        document.querySelectorAll('.s-block-tabs').forEach(block => block.classList.add('tabs-initialized'));
    }

    /**
     * Intersection Observer for ازدهار scroll-in animations
     * Targets: .az-prod-card, .az-flash-card, .az-cat-card, .az-feat-item
     */
    initAzdaharScrollAnimations() {
        const style = document.createElement('style');
        style.textContent = `
            .az-scroll-hidden {
                opacity: 0;
                transform: translateY(24px);
                transition: opacity 0.55s ease, transform 0.55s cubic-bezier(.25,.8,.25,1);
            }
            .az-scroll-visible {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
            .az-scroll-hidden:nth-child(1) { transition-delay: 0.05s; }
            .az-scroll-hidden:nth-child(2) { transition-delay: 0.10s; }
            .az-scroll-hidden:nth-child(3) { transition-delay: 0.15s; }
            .az-scroll-hidden:nth-child(4) { transition-delay: 0.20s; }
            .az-scroll-hidden:nth-child(5) { transition-delay: 0.25s; }
            .az-scroll-hidden:nth-child(6) { transition-delay: 0.30s; }
            .az-scroll-hidden:nth-child(7) { transition-delay: 0.35s; }
            .az-scroll-hidden:nth-child(8) { transition-delay: 0.40s; }
        `;
        document.head.appendChild(style);

        const selectors = [
            '.az-prod-card',
            '.az-flash-card',
            '.az-cat-card',
            '.az-feat-item',
            '.az-testimonial-card',
            '.az-faq-item',
        ];

        const elements = document.querySelectorAll(selectors.join(', '));
        if (!elements.length || !("IntersectionObserver" in window)) return;

        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top > window.innerHeight * 0.1) {
                el.classList.add('az-scroll-hidden');
            }
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('az-scroll-visible');
                    entry.target.classList.remove('az-scroll-hidden');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

        elements.forEach(el => {
            if (el.classList.contains('az-scroll-hidden')) observer.observe(el);
        });
    }
}

Home.initiateWhenReady(['index']);