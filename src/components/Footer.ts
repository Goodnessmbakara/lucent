import { createSimpleLogo } from './Logo';

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
  const logo = createSimpleLogo({ size: 'sm' });
  logo.style.marginBottom = 'var(--space-3)';

  const brandDescription = document.createElement('p');
  brandDescription.textContent = 'Transaction preview and security warnings for the Stacks blockchain. Built with ❤️ for the Stacks community.';
  brandDescription.style.cssText = `
    font-size: var(--font-size-sm);
    line-height: var(--line-height-relaxed);
    color: var(--color-text-tertiary);
    max-width: 300px;
  `;

  brandSection.appendChild(logo);
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
    { name: 'Discord', icon: '💬', href: 'https://discord.com' },
    { name: 'GitHub', icon: '⚡', href: 'https://github.com' }
  ];

  socials.forEach(social => {
    const a = document.createElement('a');
    a.href = social.href;
    a.setAttribute('aria-label', social.name);
    a.textContent = social.icon;
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
