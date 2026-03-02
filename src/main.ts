import './styles/design-system.css';
import './styles/main.css';
import { createNavigation } from './components/Navigation';
import { createHero } from './components/Hero';
import { createTransactionPreview } from './components/TransactionPreview';
import { createFeatures } from './components/Features';
import { createHowItWorks } from './components/HowItWorks';
import { createWaitlistSection } from './components/Waitlist';
import { createCTA } from './components/CTA';
import { createFooter } from './components/Footer';

function initializeApp() {
  const app = document.querySelector<HTMLDivElement>('#app');

  if (!app) {
    throw new Error('App container not found');
  }

  // Clear any existing content
  app.innerHTML = '';

  // Build the page structure
  const navigation = createNavigation();
  const hero = createHero();
  const howItWorks = createHowItWorks();
  const transactionPreview = createTransactionPreview();
  const features = createFeatures();
  const waitlist = createWaitlistSection();
  const cta = createCTA();
  const footer = createFooter();

  // Append all sections
  app.appendChild(navigation);
  app.appendChild(hero);
  app.appendChild(howItWorks);
  app.appendChild(transactionPreview);
  app.appendChild(features);
  app.appendChild(waitlist);
  app.appendChild(cta);
  app.appendChild(footer);

  // Smooth scroll behavior for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const href = anchor.getAttribute('href');
      if (href && href !== '#') {
        const target = document.querySelector(href);
        if (target) {
          const offsetTop = (target as HTMLElement).offsetTop - 72; // Account for fixed nav
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Add scroll event for navigation background
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const nav = document.querySelector('.navigation') as HTMLElement;

    if (nav) {
      if (currentScroll > 100) {
        nav.style.background = 'rgba(10, 14, 39, 0.95)';
      } else {
        nav.style.background = 'rgba(10, 14, 39, 0.8)';
      }
    }
  });

  console.log('🌟 Lucent landing page initialized');
}

// Initialize the app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}
