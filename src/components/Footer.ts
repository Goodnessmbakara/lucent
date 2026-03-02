export function createFooter(): HTMLElement {
  const footer = document.createElement('footer');
  footer.style.cssText = `
    padding: var(--space-12) 0 var(--space-6) 0;
    border-top: 1px solid var(--color-border);
  `;

  const container = document.createElement('div');
  container.className = 'container';

  // Main footer content
  const mainContent = document.createElement('div');
  mainContent.style.cssText = `
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-8);
    margin-bottom: var(--space-8);
  `;

  const updateMainGrid = () => {
    if (window.innerWidth >= 768) {
      mainContent.style.gridTemplateColumns = 'repeat(2, 1fr)';
    } else {
      mainContent.style.gridTemplateColumns = '1fr';
    }
    if (window.innerWidth >= 1024) {
      mainContent.style.gridTemplateColumns = '2fr 1fr 1fr 1fr';
    }
  };
  updateMainGrid();
  window.addEventListener('resize', updateMainGrid);

  // Brand section
  const brandSection = document.createElement('div');

  // Logo with icon + text
  const logoContainer = document.createElement('div');
  logoContainer.style.cssText = `
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: var(--space-3);
  `;

  const logoIcon = document.createElement('img');
  logoIcon.src = '/logos/lucent/icon-dark.svg';
  logoIcon.alt = 'Lucent';
  logoIcon.style.cssText = `
    width: 32px;
    height: 32px;
    display: block;
  `;

  const logoText = document.createElement('span');
  logoText.textContent = 'Lucent';
  logoText.style.cssText = `
    font-size: 20px;
    font-weight: 600;
    color: #FFFFFF;
    letter-spacing: -0.3px;
  `;

  logoContainer.appendChild(logoIcon);
  logoContainer.appendChild(logoText);

  const brandDescription = document.createElement('p');
  brandDescription.textContent = 'Transaction preview and security warnings for the Stacks blockchain. Built with ❤️ for the Stacks community.';
  brandDescription.style.cssText = `
    font-size: var(--font-size-sm);
    line-height: var(--line-height-relaxed);
    color: var(--color-text-tertiary);
    max-width: 300px;
  `;

  brandSection.appendChild(logoContainer);
  brandSection.appendChild(brandDescription);

  // Links sections
  const linkSections = [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#features' },
        { text: 'How It Works', href: '#how-it-works' },
        { text: 'Pricing', href: '#pricing' },
        { text: 'Changelog', href: '#changelog' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { text: 'Documentation', href: '#docs' },
        { text: 'GitHub', href: 'https://github.com' },
        { text: 'API Reference', href: '#api' },
        { text: 'Support', href: '#support' }
      ]
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#about' },
        { text: 'Blog', href: '#blog' },
        { text: 'Privacy', href: '#privacy' },
        { text: 'Terms', href: '#terms' }
      ]
    }
  ];

  linkSections.forEach(section => {
    const sectionDiv = document.createElement('div');

    const title = document.createElement('h3');
    title.textContent = section.title;
    title.style.cssText = `
      font-size: var(--font-size-sm);
      font-weight: var(--font-weight-semibold);
      color: var(--color-text-primary);
      margin-bottom: var(--space-3);
    `;

    const linksList = document.createElement('ul');
    linksList.style.cssText = `
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: var(--space-2);
    `;

    section.links.forEach(link => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = link.href;
      a.textContent = link.text;
      a.style.cssText = `
        font-size: var(--font-size-sm);
        color: var(--color-text-tertiary);
        text-decoration: none;
        transition: color var(--transition-base);
      `;
      a.onmouseenter = () => a.style.color = 'var(--color-text-primary)';
      a.onmouseleave = () => a.style.color = 'var(--color-text-tertiary)';

      li.appendChild(a);
      linksList.appendChild(li);
    });

    sectionDiv.appendChild(title);
    sectionDiv.appendChild(linksList);
    mainContent.appendChild(sectionDiv);
  });

  mainContent.insertBefore(brandSection, mainContent.firstChild);

  // Bottom section
  const bottomSection = document.createElement('div');
  bottomSection.style.cssText = `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: var(--space-6);
    border-top: 1px solid var(--color-border);
    flex-wrap: wrap;
    gap: var(--space-4);
  `;

  const copyright = document.createElement('p');
  copyright.style.cssText = `
    font-size: var(--font-size-sm);
    color: var(--color-text-tertiary);
  `;
  copyright.textContent = `© ${new Date().getFullYear()} Lucent. All rights reserved.`;

  // Social links
  const socialLinks = document.createElement('div');
  socialLinks.style.cssText = `
    display: flex;
    gap: var(--space-4);
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
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-md);
      color: var(--color-text-secondary);
      text-decoration: none;
      font-size: var(--font-size-base);
      transition: all var(--transition-base);
    `;

    if (social.isGitHub) {
      // GitHub SVG icon
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('width', '18');
      svg.setAttribute('height', '18');
      svg.setAttribute('viewBox', '0 0 24 24');
      svg.setAttribute('fill', 'currentColor');
      svg.innerHTML = '<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>';
      a.appendChild(svg);
    } else {
      a.textContent = social.icon;
    }

    a.onmouseenter = () => {
      a.style.borderColor = 'var(--color-gold)';
      a.style.color = 'var(--color-gold)';
      a.style.transform = 'translateY(-2px)';
    };

    a.onmouseleave = () => {
      a.style.borderColor = 'var(--color-border)';
      a.style.color = 'var(--color-text-secondary)';
      a.style.transform = 'translateY(0)';
    };

    socialLinks.appendChild(a);
  });

  bottomSection.appendChild(copyright);
  bottomSection.appendChild(socialLinks);

  container.appendChild(mainContent);
  container.appendChild(bottomSection);
  footer.appendChild(container);

  return footer;
}
