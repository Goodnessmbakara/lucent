export function createProductShowcase(): HTMLElement {
  const section = document.createElement('section');
  section.style.cssText = `
    position: relative;
    padding: var(--space-20) 0;
    overflow: hidden;
    background: linear-gradient(180deg, #0A0E27 0%, #131728 100%);
  `;

  // Browser Extension as Background
  const backgroundContainer = document.createElement('div');
  backgroundContainer.style.cssText = `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 1400px;
    height: 90%;
    opacity: 0.15;
    pointer-events: none;
  `;

  const backgroundImage = document.createElement('img');
  backgroundImage.src = '/mockups/browser-extension.svg';
  backgroundImage.alt = '';
  backgroundImage.style.cssText = `
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  `;

  backgroundContainer.appendChild(backgroundImage);
  section.appendChild(backgroundContainer);

  // Content Overlay
  const container = document.createElement('div');
  container.className = 'container';
  container.style.cssText = `
    position: relative;
    z-index: 1;
    text-align: center;
  `;

  // Section Header
  const header = document.createElement('div');
  header.style.cssText = `
    margin-bottom: var(--space-8);
  `;

  const title = document.createElement('h2');
  title.textContent = 'Preview Every Transaction';
  title.style.cssText = `
    font-size: var(--font-size-4xl);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-tight);
    margin-bottom: var(--space-4);
    color: var(--color-text-primary);
  `;

  const description = document.createElement('p');
  description.textContent = 'Lucent intercepts transactions before you sign, showing exactly what will happen to your assets.';
  description.style.cssText = `
    font-size: var(--font-size-lg);
    line-height: var(--line-height-relaxed);
    color: var(--color-text-secondary);
    max-width: 600px;
    margin: 0 auto;
  `;

  header.appendChild(title);
  header.appendChild(description);

  // Stats Grid
  const statsGrid = document.createElement('div');
  statsGrid.style.cssText = `
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--space-6);
    margin-top: var(--space-12);
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
  `;

  const stats = [
    { value: '< 1s', label: 'Analysis Time', description: 'Lightning-fast preview' },
    { value: '100%', label: 'Transactions', description: 'All contracts supported' },
    { value: '24/7', label: 'Protection', description: 'Always monitoring' }
  ];

  stats.forEach(stat => {
    const statCard = document.createElement('div');
    statCard.style.cssText = `
      padding: var(--space-6);
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 184, 77, 0.1);
      border-radius: var(--radius-xl);
      backdrop-filter: blur(8px);
      transition: all var(--transition-base);
    `;

    statCard.onmouseenter = () => {
      statCard.style.background = 'rgba(255, 184, 77, 0.05)';
      statCard.style.borderColor = 'rgba(255, 184, 77, 0.3)';
      statCard.style.transform = 'translateY(-4px)';
    };

    statCard.onmouseleave = () => {
      statCard.style.background = 'rgba(255, 255, 255, 0.03)';
      statCard.style.borderColor = 'rgba(255, 184, 77, 0.1)';
      statCard.style.transform = 'translateY(0)';
    };

    const value = document.createElement('div');
    value.textContent = stat.value;
    value.style.cssText = `
      font-size: var(--font-size-4xl);
      font-weight: var(--font-weight-bold);
      color: var(--color-gold);
      margin-bottom: var(--space-2);
    `;

    const label = document.createElement('div');
    label.textContent = stat.label;
    label.style.cssText = `
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-semibold);
      color: var(--color-text-primary);
      margin-bottom: var(--space-1);
    `;

    const desc = document.createElement('div');
    desc.textContent = stat.description;
    desc.style.cssText = `
      font-size: var(--font-size-sm);
      color: var(--color-text-tertiary);
    `;

    statCard.appendChild(value);
    statCard.appendChild(label);
    statCard.appendChild(desc);
    statsGrid.appendChild(statCard);
  });

  container.appendChild(header);
  container.appendChild(statsGrid);
  section.appendChild(container);

  return section;
}
