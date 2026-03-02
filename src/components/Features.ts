export function createFeatures(): HTMLElement {
  const section = document.createElement('section');
  section.id = 'features';
  section.style.cssText = `
    padding: var(--space-20) 0;
    background: linear-gradient(180deg, transparent 0%, rgba(255, 184, 77, 0.02) 100%);
  `;

  const container = document.createElement('div');
  container.className = 'container';

  // Section Header
  const header = document.createElement('div');
  header.style.cssText = `
    text-align: center;
    margin-bottom: var(--space-12);
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  `;

  const badge = document.createElement('div');
  badge.textContent = 'FEATURES';
  badge.style.cssText = `
    display: inline-block;
    padding: var(--space-1) var(--space-3);
    background: rgba(74, 158, 255, 0.1);
    border: 1px solid rgba(74, 158, 255, 0.2);
    border-radius: var(--radius-full);
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-semibold);
    letter-spacing: 0.1em;
    color: var(--color-blue);
    margin-bottom: var(--space-4);
  `;

  const heading = document.createElement('h2');
  heading.textContent = 'Transaction Intelligence';
  heading.style.cssText = `
    font-size: var(--font-size-4xl);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-tight);
    margin-bottom: var(--space-4);
    color: var(--color-text-primary);
  `;

  const description = document.createElement('p');
  description.textContent = 'Comprehensive transaction analysis powered by real-time blockchain simulation and security intelligence.';
  description.style.cssText = `
    font-size: var(--font-size-lg);
    line-height: var(--line-height-relaxed);
    color: var(--color-text-secondary);
  `;

  header.appendChild(badge);
  header.appendChild(heading);
  header.appendChild(description);

  // Features Grid
  const grid = document.createElement('div');
  grid.style.cssText = `
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-6);
    margin-bottom: var(--space-12);
  `;

  // Responsive grid
  const updateGrid = () => {
    if (window.innerWidth >= 768) {
      grid.style.gridTemplateColumns = 'repeat(2, 1fr)';
    } else {
      grid.style.gridTemplateColumns = '1fr';
    }
    if (window.innerWidth >= 1024) {
      grid.style.gridTemplateColumns = 'repeat(3, 1fr)';
    }
  };
  updateGrid();
  window.addEventListener('resize', updateGrid);

  const features = [
    {
      icon: '🔍',
      title: 'Transaction Preview',
      description: 'See exactly what happens before you sign. Preview balance changes, token transfers, and contract interactions.',
      color: 'var(--color-blue)'
    },
    {
      icon: '⚠️',
      title: 'Security Warnings',
      description: 'Get instant alerts for suspicious transactions, phishing attempts, and known malicious contracts.',
      color: 'var(--color-gold)'
    },
    {
      icon: '📊',
      title: 'Gas Estimation',
      description: 'Accurate transaction cost estimation so you never overpay. Compare with historical averages.',
      color: 'var(--color-blue)'
    },
    {
      icon: '🧪',
      title: 'Simulation Engine',
      description: 'Test transactions in a sandboxed environment. No surprises, no failed transactions.',
      color: 'var(--color-gold)'
    },
    {
      icon: '📝',
      title: 'Human-Readable',
      description: 'Complex Clarity code translated into plain English. Understand what you\'re signing.',
      color: 'var(--color-blue)'
    },
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Sub-second analysis powered by optimized blockchain nodes. Never wait for security.',
      color: 'var(--color-gold)'
    }
  ];

  features.forEach(feature => {
    const card = document.createElement('div');
    card.style.cssText = `
      padding: var(--space-6);
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-xl);
      transition: all var(--transition-base);
      cursor: default;
    `;

    card.onmouseenter = () => {
      card.style.borderColor = feature.color;
      card.style.transform = 'translateY(-4px)';
      card.style.boxShadow = `0 12px 32px rgba(0, 0, 0, 0.2)`;
    };

    card.onmouseleave = () => {
      card.style.borderColor = 'var(--color-border)';
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = 'none';
    };

    const iconContainer = document.createElement('div');
    iconContainer.style.cssText = `
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${feature.color === 'var(--color-gold)' ? 'rgba(255, 184, 77, 0.1)' : 'rgba(74, 158, 255, 0.1)'};
      border-radius: var(--radius-lg);
      font-size: var(--font-size-2xl);
      margin-bottom: var(--space-4);
    `;
    iconContainer.textContent = feature.icon;

    const title = document.createElement('h3');
    title.textContent = feature.title;
    title.style.cssText = `
      font-size: var(--font-size-xl);
      font-weight: var(--font-weight-semibold);
      color: var(--color-text-primary);
      margin-bottom: var(--space-2);
    `;

    const desc = document.createElement('p');
    desc.textContent = feature.description;
    desc.style.cssText = `
      font-size: var(--font-size-base);
      line-height: var(--line-height-relaxed);
      color: var(--color-text-secondary);
    `;

    card.appendChild(iconContainer);
    card.appendChild(title);
    card.appendChild(desc);
    grid.appendChild(card);
  });

  container.appendChild(header);
  container.appendChild(grid);
  section.appendChild(container);

  return section;
}
