export function createFooter(): HTMLElement {
  const footer = document.createElement('footer');
  footer.style.cssText = `
    background: var(--color-navy);
    position: relative;
    overflow: hidden;
  `;

  // Top section with tagline
  const topSection = document.createElement('div');
  topSection.className = 'container';
  topSection.style.cssText = `
    padding: var(--space-16) 0 var(--space-12) 0;
    text-align: center;
  `;

  const tagline = document.createElement('h2');
  tagline.textContent = 'Built for Stacks Users';
  tagline.style.cssText = `
    font-size: clamp(32px, 5vw, 48px);
    font-weight: 700;
    color: var(--color-text-primary);
    margin: 0;
    letter-spacing: -1px;
    line-height: 1.2;
  `;
  topSection.appendChild(tagline);

  // Stepped navigation section - horizontal steps
  const stepsWrapper = document.createElement('div');
  stepsWrapper.style.cssText = `
    position: relative;
    margin-bottom: var(--space-8);
  `;

  const stepsContainer = document.createElement('div');
  stepsContainer.className = 'container';
  stepsContainer.style.cssText = `
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2px;
    padding: 0;
  `;

  const links = [
    { text: 'FEATURES', href: '#features' },
    { text: 'HOW IT WORKS', href: '#how-it-works' },
    { text: 'GITHUB', href: 'https://github.com/Goodnessmbakara/lucent', external: true },
    { text: 'CONTACT', href: 'mailto:mbakaragoodness2003@gmail.com' },
    { text: '@LUCENT', href: 'https://twitter.com', external: true }
  ];

  // Create stepped boxes - each progressively lighter
  const backgrounds = [
    'var(--color-surface)',
    'var(--color-surface-hover)',
    '#1E2440',
    '#252B4D',
    '#2C3259'
  ];

  links.forEach((link, index) => {
    const stepBox = document.createElement('div');
    stepBox.style.cssText = `
      background: ${backgrounds[index]};
      padding: var(--space-4) var(--space-3);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all var(--transition-base);
      cursor: pointer;
      border: 1px solid rgba(255, 184, 77, 0.1);
    `;

    const a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.text;
    if (link.external) {
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
    }
    a.style.cssText = `
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.5px;
      color: var(--color-text-tertiary);
      text-decoration: none;
      transition: color var(--transition-base);
      text-transform: uppercase;
      white-space: nowrap;
    `;

    stepBox.onmouseenter = () => {
      stepBox.style.background = 'var(--color-gold)';
      stepBox.style.transform = 'translateY(-4px)';
      a.style.color = 'var(--color-navy)';
    };

    stepBox.onmouseleave = () => {
      stepBox.style.background = backgrounds[index];
      stepBox.style.transform = 'translateY(0)';
      a.style.color = 'var(--color-text-tertiary)';
    };

    stepBox.appendChild(a);
    stepsContainer.appendChild(stepBox);
  });

  stepsWrapper.appendChild(stepsContainer);

  // Bottom section
  const bottomSection = document.createElement('div');
  bottomSection.className = 'container';
  bottomSection.style.cssText = `
    padding: var(--space-6) 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--space-6);
    border-top: 1px solid rgba(255, 184, 77, 0.1);
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
    color: var(--color-text-primary);
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
    color: var(--color-text-tertiary);
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
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-md);
      color: var(--color-text-secondary);
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
      a.style.backgroundColor = 'var(--color-gold)';
      a.style.color = 'var(--color-navy)';
    };

    a.onmouseleave = () => {
      a.style.borderColor = 'var(--color-border)';
      a.style.backgroundColor = 'var(--color-surface)';
      a.style.color = 'var(--color-text-secondary)';
    };

    socialLinks.appendChild(a);
  });

  rightSection.appendChild(copyright);
  rightSection.appendChild(socialLinks);

  bottomSection.appendChild(logoContainer);
  bottomSection.appendChild(rightSection);

  // Gold accent line at the very bottom
  const goldAccent = document.createElement('div');
  goldAccent.style.cssText = `
    height: 3px;
    background: linear-gradient(90deg, transparent, var(--color-gold), transparent);
  `;

  // Assemble all sections
  footer.appendChild(topSection);
  footer.appendChild(stepsWrapper);
  footer.appendChild(bottomSection);
  footer.appendChild(goldAccent);

  return footer;
}
