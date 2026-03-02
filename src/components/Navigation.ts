import { createSimpleLogo } from './Logo';

export function createNavigation(): HTMLElement {
  const nav = document.createElement('nav');
  nav.className = 'navigation';
  nav.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: var(--z-sticky);
    background: rgba(10, 14, 39, 0.8);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--color-border);
  `;

  const container = document.createElement('div');
  container.className = 'container';
  container.style.cssText = `
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 72px;
  `;

  // Logo
  const logoLink = document.createElement('a');
  logoLink.href = '#';
  logoLink.style.cssText = `
    text-decoration: none;
    transition: opacity var(--transition-base);
  `;
  logoLink.onmouseenter = () => logoLink.style.opacity = '0.8';
  logoLink.onmouseleave = () => logoLink.style.opacity = '1';
  logoLink.appendChild(createSimpleLogo({ size: 'md' }));

  // Nav Links
  const navLinks = document.createElement('div');
  navLinks.style.cssText = `
    display: none;
    gap: var(--space-6);
    align-items: center;
  `;

  // Show on tablet and up
  navLinks.style.setProperty('display', 'flex', '');
  const mediaQuery = window.matchMedia('(min-width: 768px)');
  const updateDisplay = (e: MediaQueryListEvent | MediaQueryList) => {
    navLinks.style.display = e.matches ? 'flex' : 'none';
  };
  updateDisplay(mediaQuery);
  mediaQuery.addEventListener('change', updateDisplay);

  const links = [
    { text: 'Features', href: '#features' },
    { text: 'How It Works', href: '#how-it-works' },
    { text: 'Docs', href: '#docs' }
  ];

  links.forEach(link => {
    const a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.text;
    a.style.cssText = `
      color: var(--color-text-secondary);
      text-decoration: none;
      font-size: var(--font-size-sm);
      font-weight: var(--font-weight-medium);
      transition: color var(--transition-base);
    `;
    a.onmouseenter = () => a.style.color = 'var(--color-text-primary)';
    a.onmouseleave = () => a.style.color = 'var(--color-text-secondary)';
    navLinks.appendChild(a);
  });

  // CTA Button
  const ctaButton = document.createElement('button');
  ctaButton.textContent = 'Get Extension';
  ctaButton.className = 'btn-primary';
  ctaButton.style.cssText = `
    padding: var(--space-2) var(--space-4);
    background: linear-gradient(135deg, var(--color-gold) 0%, #F5A82B 100%);
    color: var(--color-navy);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-semibold);
    border: none;
    border-radius: var(--radius-lg);
    cursor: pointer;
    transition: all var(--transition-base);
    box-shadow: 0 4px 12px rgba(255, 184, 77, 0.3);
  `;
  ctaButton.onmouseenter = () => {
    ctaButton.style.transform = 'translateY(-2px)';
    ctaButton.style.boxShadow = '0 6px 16px rgba(255, 184, 77, 0.4)';
  };
  ctaButton.onmouseleave = () => {
    ctaButton.style.transform = 'translateY(0)';
    ctaButton.style.boxShadow = '0 4px 12px rgba(255, 184, 77, 0.3)';
  };

  navLinks.appendChild(ctaButton);

  container.appendChild(logoLink);
  container.appendChild(navLinks);
  nav.appendChild(container);

  return nav;
}
