export function createFooter(): HTMLElement {
  const footer = document.createElement('footer');
  footer.style.cssText = `
    background: #000000;
    position: relative;
    overflow: hidden;
  `;

  // Gradient overlay at bottom (inspired by Stacks Endowment)
  const gradientOverlay = document.createElement('div');
  gradientOverlay.style.cssText = `
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, transparent, var(--color-gold), transparent);
    opacity: 0.6;
  `;
  footer.appendChild(gradientOverlay);

  const container = document.createElement('div');
  container.className = 'container';
  container.style.cssText = `
    padding: var(--space-16) 0 var(--space-8) 0;
  `;

  // Hero tagline section
  const taglineSection = document.createElement('div');
  taglineSection.style.cssText = `
    text-align: center;
    margin-bottom: var(--space-12);
  `;

  const tagline = document.createElement('h2');
  tagline.textContent = 'Built for Stacks Users';
  tagline.style.cssText = `
    font-size: clamp(32px, 5vw, 48px);
    font-weight: 700;
    color: #FFFFFF;
    margin: 0;
    letter-spacing: -1px;
    line-height: 1.2;
  `;
  taglineSection.appendChild(tagline);

  // Navigation links
  const navSection = document.createElement('nav');
  navSection.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--space-6);
    margin-bottom: var(--space-12);
    padding-bottom: var(--space-8);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  `;

  const links = [
    { text: 'FEATURES', href: '#features' },
    { text: 'HOW IT WORKS', href: '#how-it-works' },
    { text: 'GITHUB', href: 'https://github.com/Goodnessmbakara/lucent', external: true },
    { text: 'CONTACT', href: 'mailto:mbakaragoodness2003@gmail.com' },
    { text: '@LUCENT', href: 'https://twitter.com', external: true }
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
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 0.5px;
      color: rgba(255, 255, 255, 0.6);
      text-decoration: none;
      transition: color var(--transition-base);
      text-transform: uppercase;
    `;
    a.onmouseenter = () => a.style.color = 'var(--color-gold)';
    a.onmouseleave = () => a.style.color = 'rgba(255, 255, 255, 0.6)';
    navSection.appendChild(a);
  });

  // Bottom section with logo and copyright
  const bottomSection = document.createElement('div');
  bottomSection.style.cssText = `
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--space-6);
  `;

  // Logo section
  const logoContainer = document.createElement('div');
  logoContainer.style.cssText = `
    display: flex;
    align-items: center;
    gap: 10px;
  `;

  const logoIcon = document.createElement('img');
  logoIcon.src = '/logos/lucent/icon-dark.svg';
  logoIcon.alt = 'Lucent';
  logoIcon.style.cssText = `
    width: 28px;
    height: 28px;
    display: block;
  `;

  const logoText = document.createElement('span');
  logoText.textContent = 'Lucent';
  logoText.style.cssText = `
    font-size: 18px;
    font-weight: 600;
    color: #FFFFFF;
    letter-spacing: -0.3px;
  `;

  logoContainer.appendChild(logoIcon);
  logoContainer.appendChild(logoText);

  // Copyright and social
  const rightSection = document.createElement('div');
  rightSection.style.cssText = `
    display: flex;
    align-items: center;
    gap: var(--space-6);
  `;

  const copyright = document.createElement('div');
  copyright.style.cssText = `
    font-size: 13px;
    color: rgba(255, 255, 255, 0.5);
  `;
  copyright.textContent = '© 2026 Lucent';

  // Social links
  const socialLinks = document.createElement('div');
  socialLinks.style.cssText = `
    display: flex;
    gap: var(--space-3);
    align-items: center;
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
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: var(--radius-md);
      color: rgba(255, 255, 255, 0.6);
      text-decoration: none;
      font-size: 14px;
      transition: all var(--transition-base);
    `;

    if (social.isGitHub) {
      // GitHub SVG icon
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('width', '16');
      svg.setAttribute('height', '16');
      svg.setAttribute('viewBox', '0 0 24 24');
      svg.setAttribute('fill', 'currentColor');
      svg.innerHTML = '<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>';
      a.appendChild(svg);
    } else {
      a.textContent = social.icon;
    }

    a.onmouseenter = () => {
      a.style.borderColor = 'var(--color-gold)';
      a.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
      a.style.color = 'var(--color-gold)';
    };

    a.onmouseleave = () => {
      a.style.borderColor = 'rgba(255, 255, 255, 0.1)';
      a.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
      a.style.color = 'rgba(255, 255, 255, 0.6)';
    };

    socialLinks.appendChild(a);
  });

  rightSection.appendChild(copyright);
  rightSection.appendChild(socialLinks);

  bottomSection.appendChild(logoContainer);
  bottomSection.appendChild(rightSection);

  container.appendChild(taglineSection);
  container.appendChild(navSection);
  container.appendChild(bottomSection);
  footer.appendChild(container);

  return footer;
}
