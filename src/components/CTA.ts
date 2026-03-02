export function createCTA(): HTMLElement {
  const section = document.createElement('section');
  section.style.cssText = `
    padding: var(--space-20) 0;
    border-top: 1px solid rgba(255, 184, 77, 0.1);
  `;

  const container = document.createElement('div');
  container.className = 'container';
  container.style.cssText = `
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-8);
    align-items: center;
  `;

  // Responsive grid
  const updateGrid = () => {
    if (window.innerWidth >= 768) {
      container.style.gridTemplateColumns = '1fr auto';
    } else {
      container.style.gridTemplateColumns = '1fr';
    }
  };
  updateGrid();
  window.addEventListener('resize', updateGrid);

  // Left side - Direct copy
  const textContainer = document.createElement('div');

  const heading = document.createElement('h2');
  heading.textContent = 'Never sign blind';
  heading.style.cssText = `
    font-size: var(--font-size-5xl);
    font-weight: var(--font-weight-bold);
    line-height: 1.1;
    margin-bottom: var(--space-3);
    color: var(--color-text-primary);
  `;

  const description = document.createElement('p');
  description.textContent = 'Browser extension for Chrome and Firefox. Free, open source.';
  description.style.cssText = `
    font-size: var(--font-size-xl);
    line-height: var(--line-height-relaxed);
    color: var(--color-text-secondary);
  `;

  textContainer.appendChild(heading);
  textContainer.appendChild(description);

  // Right side - Actions
  const actionsContainer = document.createElement('div');
  actionsContainer.style.cssText = `
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
    align-items: flex-start;
  `;

  const primaryButton = document.createElement('button');
  primaryButton.textContent = 'Add to Chrome';
  primaryButton.style.cssText = `
    padding: var(--space-3) var(--space-6);
    background: var(--color-gold);
    color: var(--color-navy);
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-semibold);
    border: none;
    border-radius: var(--radius-lg);
    cursor: pointer;
    transition: all var(--transition-base);
  `;
  primaryButton.onmouseenter = () => {
    primaryButton.style.background = '#F5A82B';
    primaryButton.style.transform = 'translateX(4px)';
  };
  primaryButton.onmouseleave = () => {
    primaryButton.style.background = 'var(--color-gold)';
    primaryButton.style.transform = 'translateX(0)';
  };

  const githubLink = document.createElement('a');
  githubLink.textContent = 'Star on GitHub →';
  githubLink.href = 'https://github.com/Goodnessmbakara/lucent';
  githubLink.target = '_blank';
  githubLink.rel = 'noopener noreferrer';
  githubLink.style.cssText = `
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-medium);
    color: var(--color-text-tertiary);
    text-decoration: none;
    transition: all var(--transition-base);
  `;
  githubLink.onmouseenter = () => {
    githubLink.style.color = 'var(--color-text-primary)';
    githubLink.style.transform = 'translateX(4px)';
  };
  githubLink.onmouseleave = () => {
    githubLink.style.color = 'var(--color-text-tertiary)';
    githubLink.style.transform = 'translateX(0)';
  };

  actionsContainer.appendChild(primaryButton);
  actionsContainer.appendChild(githubLink);

  container.appendChild(textContainer);
  container.appendChild(actionsContainer);
  section.appendChild(container);

  return section;
}
