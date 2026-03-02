export function createHero(): HTMLElement {
  const hero = document.createElement('section');
  hero.className = 'hero';
  hero.style.cssText = `
    position: relative;
    padding: calc(72px + var(--space-16)) 0 var(--space-20) 0;
    overflow: hidden;
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
    opacity: 0.08;
    pointer-events: none;
    z-index: 0;
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
  hero.appendChild(backgroundContainer);

  // Gradient background overlay
  const gradientOverlay = document.createElement('div');
  gradientOverlay.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      ellipse at top,
      rgba(255, 184, 77, 0.05) 0%,
      transparent 50%
    );
    pointer-events: none;
    z-index: 0;
  `;
  hero.appendChild(gradientOverlay);

  // Grid pattern overlay
  const gridPattern = document.createElement('div');
  gridPattern.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image:
      linear-gradient(rgba(255, 184, 77, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 184, 77, 0.03) 1px, transparent 1px);
    background-size: 50px 50px;
    pointer-events: none;
    z-index: 0;
  `;
  hero.appendChild(gridPattern);

  const container = document.createElement('div');
  container.className = 'container';
  container.style.cssText = `
    position: relative;
    z-index: 1;
    text-align: center;
    max-width: 960px;
  `;

  // Subtle indicator (no generic badge)
  const indicator = document.createElement('div');
  indicator.style.cssText = `
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-2);
    margin-bottom: var(--space-6);
    font-size: var(--font-size-sm);
    color: var(--color-text-tertiary);
    letter-spacing: 0.05em;
  `;

  const indicatorDot = document.createElement('span');
  indicatorDot.style.cssText = `
    width: 6px;
    height: 6px;
    background: var(--color-gold);
    border-radius: 50%;
    box-shadow: 0 0 12px rgba(255, 184, 77, 0.6);
  `;

  const indicatorText = document.createElement('span');
  indicatorText.textContent = 'TRANSACTION PREVIEW FOR STACKS';

  indicator.appendChild(indicatorDot);
  indicator.appendChild(indicatorText);

  // Main Heading
  const heading = document.createElement('h1');
  heading.style.cssText = `
    font-size: var(--font-size-5xl);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-tight);
    margin-bottom: var(--space-6);
    background: linear-gradient(
      135deg,
      #FFFFFF 0%,
      rgba(255, 255, 255, 0.8) 50%,
      var(--color-gold) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  `;

  const headingLine1 = document.createElement('span');
  headingLine1.style.display = 'block';
  headingLine1.textContent = 'See clearly';

  const headingLine2 = document.createElement('span');
  headingLine2.style.display = 'block';
  headingLine2.textContent = 'before you sign';

  heading.appendChild(headingLine1);
  heading.appendChild(headingLine2);

  // Subtitle
  const subtitle = document.createElement('p');
  subtitle.style.cssText = `
    font-size: var(--font-size-xl);
    line-height: var(--line-height-relaxed);
    color: var(--color-text-secondary);
    margin-bottom: var(--space-8);
    max-width: 720px;
    margin-left: auto;
    margin-right: auto;
  `;
  subtitle.textContent = 'Lucent previews your Stacks transactions with detailed insights and security warnings before you commit. Never sign blind again.';

  // CTA Buttons
  const ctaContainer = document.createElement('div');
  ctaContainer.style.cssText = `
    display: flex;
    gap: var(--space-3);
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: var(--space-12);
  `;

  const primaryButton = document.createElement('button');
  primaryButton.textContent = 'Add to Chrome';
  primaryButton.style.cssText = `
    padding: var(--space-3) var(--space-6);
    background: linear-gradient(135deg, var(--color-gold) 0%, #F5A82B 100%);
    color: var(--color-navy);
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-semibold);
    border: none;
    border-radius: var(--radius-xl);
    cursor: pointer;
    transition: all var(--transition-base);
    box-shadow: 0 8px 24px rgba(255, 184, 77, 0.3);
  `;
  primaryButton.onmouseenter = () => {
    primaryButton.style.transform = 'translateY(-2px)';
    primaryButton.style.boxShadow = '0 12px 32px rgba(255, 184, 77, 0.4)';
  };
  primaryButton.onmouseleave = () => {
    primaryButton.style.transform = 'translateY(0)';
    primaryButton.style.boxShadow = '0 8px 24px rgba(255, 184, 77, 0.3)';
  };

  const secondaryButton = document.createElement('a');
  secondaryButton.textContent = 'View on GitHub';
  secondaryButton.href = 'https://github.com/Goodnessmbakara/lucent';
  secondaryButton.target = '_blank';
  secondaryButton.rel = 'noopener noreferrer';
  secondaryButton.style.cssText = `
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-3) var(--space-6);
    background: transparent;
    color: var(--color-text-primary);
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-semibold);
    border: 2px solid var(--color-border);
    border-radius: var(--radius-xl);
    cursor: pointer;
    text-decoration: none;
    transition: all var(--transition-base);
  `;
  secondaryButton.onmouseenter = () => {
    secondaryButton.style.borderColor = 'var(--color-gold)';
    secondaryButton.style.background = 'rgba(255, 184, 77, 0.05)';
  };
  secondaryButton.onmouseleave = () => {
    secondaryButton.style.borderColor = 'var(--color-border)';
    secondaryButton.style.background = 'transparent';
  };

  ctaContainer.appendChild(primaryButton);
  ctaContainer.appendChild(secondaryButton);

  // Trust Indicators
  const trustIndicators = document.createElement('div');
  trustIndicators.style.cssText = `
    display: flex;
    gap: var(--space-6);
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  `;

  const indicators = [
    { icon: '🔒', text: 'End-to-End Encrypted' },
    { icon: '⚡', text: 'Real-Time Analysis' },
    { icon: '🛡️', text: 'Phishing Protection' }
  ];

  indicators.forEach(item => {
    const indicator = document.createElement('div');
    indicator.style.cssText = `
      display: flex;
      align-items: center;
      gap: var(--space-1);
      font-size: var(--font-size-sm);
      color: var(--color-text-tertiary);
    `;

    const icon = document.createElement('span');
    icon.textContent = item.icon;
    icon.style.fontSize = 'var(--font-size-base)';

    const text = document.createElement('span');
    text.textContent = item.text;

    indicator.appendChild(icon);
    indicator.appendChild(text);
    trustIndicators.appendChild(indicator);
  });

  container.appendChild(indicator);
  container.appendChild(heading);
  container.appendChild(subtitle);
  container.appendChild(ctaContainer);
  container.appendChild(trustIndicators);

  // Product Visual
  const productVisual = document.createElement('div');
  productVisual.style.cssText = `
    margin-top: var(--space-12);
    position: relative;
  `;

  const visualImage = document.createElement('img');
  visualImage.src = '/assets/hero/transaction-preview.svg';
  visualImage.alt = 'Lucent Transaction Preview';
  visualImage.style.cssText = `
    width: 100%;
    max-width: 800px;
    height: auto;
    border-radius: var(--radius-2xl);
    box-shadow: 0 24px 48px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 184, 77, 0.1);
  `;

  productVisual.appendChild(visualImage);
  container.appendChild(productVisual);

  hero.appendChild(container);

  return hero;
}
