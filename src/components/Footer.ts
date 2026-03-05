export function createFooter(): HTMLElement {
  const footer = document.createElement('footer');
  footer.style.cssText = `
    position: relative;
    overflow: hidden;
  `;

  // Create 3 horizontal steps container
  const stepsContainer = document.createElement('div');
  stepsContainer.className = 'footer-steps';
  stepsContainer.style.cssText = `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
    min-height: 400px;
  `;

  // Add responsive styles
  const style = document.createElement('style');
  style.textContent = `
    @media (max-width: 768px) {
      .footer-steps {
        grid-template-columns: 1fr !important;
        min-height: auto !important;
      }
      .footer-step {
        border-right: none !important;
        border-bottom: 1px solid rgba(255, 184, 77, 0.1) !important;
        padding: var(--space-8) var(--space-4) !important;
        min-height: 280px;
      }
      .footer-step:last-child {
        border-bottom: none !important;
      }
    }
  `;
  document.head.appendChild(style);

  // STEP 1: Brand & Tagline (darkest)
  const step1 = document.createElement('div');
  step1.className = 'footer-step';
  step1.style.cssText = `
    background: var(--color-navy);
    padding: var(--space-12) var(--space-6);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-right: 1px solid rgba(255, 184, 77, 0.1);
  `;

  const logoContainer = document.createElement('div');
  logoContainer.style.cssText = `
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: var(--space-4);
  `;

  const logoIcon = document.createElement('img');
  logoIcon.src = '/logos/lucent/icon-dark.svg';
  logoIcon.alt = 'Lucent';
  logoIcon.style.cssText = `
    width: 40px;
    height: 40px;
    display: block;
  `;

  const logoText = document.createElement('span');
  logoText.textContent = 'Lucent';
  logoText.style.cssText = `
    font-size: 28px;
    font-weight: 700;
    color: var(--color-text-primary);
    letter-spacing: -0.5px;
  `;

  logoContainer.appendChild(logoIcon);
  logoContainer.appendChild(logoText);

  const tagline = document.createElement('p');
  tagline.textContent = 'Built for Stacks Users';
  tagline.style.cssText = `
    font-size: var(--font-size-xl);
    font-weight: 600;
    color: var(--color-text-secondary);
    margin: 0;
    line-height: 1.4;
  `;

  const description = document.createElement('p');
  description.textContent = 'Preview transactions before you sign';
  description.style.cssText = `
    font-size: var(--font-size-sm);
    color: var(--color-text-tertiary);
    margin-top: var(--space-2);
    max-width: 280px;
  `;

  step1.appendChild(logoContainer);
  step1.appendChild(tagline);
  step1.appendChild(description);

  // STEP 2: Navigation (medium)
  const step2 = document.createElement('div');
  step2.className = 'footer-step';
  step2.style.cssText = `
    background: var(--color-surface);
    padding: var(--space-12) var(--space-6);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: 1px solid rgba(255, 184, 77, 0.1);
  `;

  const navTitle = document.createElement('h3');
  navTitle.textContent = 'NAVIGATE';
  navTitle.style.cssText = `
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 2px;
    color: var(--color-gold);
    margin-bottom: var(--space-6);
  `;

  const navLinks = document.createElement('nav');
  navLinks.style.cssText = `
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
    align-items: center;
  `;

  const links = [
    { text: 'Features', href: '#features' },
    { text: 'How It Works', href: '#how-it-works' },
    { text: 'GitHub', href: 'https://github.com/Goodnessmbakara/lucent', external: true }
  ];

  links.forEach(link => {
    const a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.text;
    if (link.external) {
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
    }
    a.style.cssText = `
      font-size: var(--font-size-lg);
      font-weight: 500;
      color: var(--color-text-secondary);
      text-decoration: none;
      transition: all var(--transition-base);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    `;
    a.onmouseenter = () => {
      a.style.color = 'var(--color-gold)';
      a.style.transform = 'translateX(8px)';
    };
    a.onmouseleave = () => {
      a.style.color = 'var(--color-text-secondary)';
      a.style.transform = 'translateX(0)';
    };
    navLinks.appendChild(a);
  });

  step2.appendChild(navTitle);
  step2.appendChild(navLinks);

  // STEP 3: Connect (lightest)
  const step3 = document.createElement('div');
  step3.className = 'footer-step';
  step3.style.cssText = `
    background: var(--color-surface-hover);
    padding: var(--space-12) var(--space-6);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const connectTitle = document.createElement('h3');
  connectTitle.textContent = 'CONNECT';
  connectTitle.style.cssText = `
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 2px;
    color: var(--color-gold);
    margin-bottom: var(--space-6);
  `;

  // Social links
  const socialLinks = document.createElement('div');
  socialLinks.style.cssText = `
    display: flex;
    gap: var(--space-4);
    align-items: center;
    margin-bottom: var(--space-6);
  `;

  const socials = [
    { name: 'Twitter', icon: '𝕏', href: 'https://twitter.com' },
    { name: 'GitHub', icon: '', href: 'https://github.com/Goodnessmbakara/lucent', isGitHub: true }
  ];

  socials.forEach(social => {
    const a = document.createElement('a');
    a.href = social.href;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.setAttribute('aria-label', social.name);
    a.style.cssText = `
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--color-surface);
      border: 2px solid var(--color-border);
      border-radius: var(--radius-lg);
      color: var(--color-text-secondary);
      text-decoration: none;
      font-size: 18px;
      transition: all var(--transition-base);
    `;

    if (social.isGitHub) {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('width', '20');
      svg.setAttribute('height', '20');
      svg.setAttribute('viewBox', '0 0 24 24');
      svg.setAttribute('fill', 'currentColor');
      svg.innerHTML = '<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>';
      a.appendChild(svg);
    } else {
      a.textContent = social.icon;
    }

    a.onmouseenter = () => {
      a.style.borderColor = 'var(--color-gold)';
      a.style.backgroundColor = 'var(--color-gold)';
      a.style.color = 'var(--color-navy)';
      a.style.transform = 'scale(1.1)';
    };

    a.onmouseleave = () => {
      a.style.borderColor = 'var(--color-border)';
      a.style.backgroundColor = 'var(--color-surface)';
      a.style.color = 'var(--color-text-secondary)';
      a.style.transform = 'scale(1)';
    };

    socialLinks.appendChild(a);
  });

  const contactLink = document.createElement('a');
  contactLink.href = 'mailto:mbakaragoodness2003@gmail.com';
  contactLink.textContent = 'Contact Us';
  contactLink.style.cssText = `
    font-size: var(--font-size-base);
    font-weight: 600;
    color: var(--color-text-secondary);
    text-decoration: none;
    margin-bottom: var(--space-4);
    transition: color var(--transition-base);
  `;
  contactLink.onmouseenter = () => contactLink.style.color = 'var(--color-gold)';
  contactLink.onmouseleave = () => contactLink.style.color = 'var(--color-text-secondary)';

  const copyright = document.createElement('div');
  copyright.style.cssText = `
    font-size: var(--font-size-sm);
    color: var(--color-text-tertiary);
    margin-top: var(--space-6);
  `;
  copyright.textContent = '© 2026 Lucent';

  step3.appendChild(connectTitle);
  step3.appendChild(socialLinks);
  step3.appendChild(contactLink);
  step3.appendChild(copyright);

  // Assemble steps
  stepsContainer.appendChild(step1);
  stepsContainer.appendChild(step2);
  stepsContainer.appendChild(step3);

  // Gold accent line at the very bottom
  const goldAccent = document.createElement('div');
  goldAccent.style.cssText = `
    height: 4px;
    background: linear-gradient(90deg, transparent, var(--color-gold), transparent);
  `;

  footer.appendChild(stepsContainer);
  footer.appendChild(goldAccent);

  return footer;
}
