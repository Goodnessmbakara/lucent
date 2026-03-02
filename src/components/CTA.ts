export function createCTA(): HTMLElement {
  const section = document.createElement('section');
  section.style.cssText = `
    padding: var(--space-20) 0;
    position: relative;
  `;

  // Background gradient
  const gradientBg = document.createElement('div');
  gradientBg.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      ellipse at center,
      rgba(255, 184, 77, 0.08) 0%,
      transparent 70%
    );
    pointer-events: none;
  `;
  section.appendChild(gradientBg);

  const container = document.createElement('div');
  container.className = 'container';
  container.style.cssText = `
    position: relative;
    z-index: 1;
  `;

  const card = document.createElement('div');
  card.style.cssText = `
    max-width: 900px;
    margin: 0 auto;
    padding: var(--space-12) var(--space-8);
    background: linear-gradient(135deg, rgba(255, 184, 77, 0.1) 0%, rgba(74, 158, 255, 0.05) 100%);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-2xl);
    text-align: center;
    position: relative;
    overflow: hidden;
  `;

  // Shine effect
  const shine = document.createElement('div');
  shine.style.cssText = `
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent 30%,
      rgba(255, 255, 255, 0.05) 50%,
      transparent 70%
    );
    transform: rotate(45deg);
    pointer-events: none;
  `;
  card.appendChild(shine);

  const content = document.createElement('div');
  content.style.cssText = 'position: relative; z-index: 1;';

  const heading = document.createElement('h2');
  heading.textContent = 'Ready to Sign with Confidence?';
  heading.style.cssText = `
    font-size: var(--font-size-4xl);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-tight);
    margin-bottom: var(--space-4);
    color: var(--color-text-primary);
  `;

  const description = document.createElement('p');
  description.textContent = 'Join thousands of users protecting their assets with Lucent. Free and open source.';
  description.style.cssText = `
    font-size: var(--font-size-lg);
    line-height: var(--line-height-relaxed);
    color: var(--color-text-secondary);
    margin-bottom: var(--space-8);
  `;

  const buttonContainer = document.createElement('div');
  buttonContainer.style.cssText = `
    display: flex;
    gap: var(--space-3);
    justify-content: center;
    flex-wrap: wrap;
  `;

  const primaryButton = document.createElement('button');
  primaryButton.textContent = 'Get Started Free';
  primaryButton.style.cssText = `
    padding: var(--space-3) var(--space-8);
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
  secondaryButton.textContent = 'View Documentation →';
  secondaryButton.href = '#docs';
  secondaryButton.style.cssText = `
    display: inline-flex;
    align-items: center;
    padding: var(--space-3) var(--space-8);
    color: var(--color-text-primary);
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-semibold);
    text-decoration: none;
    transition: color var(--transition-base);
  `;
  secondaryButton.onmouseenter = () => {
    secondaryButton.style.color = 'var(--color-gold)';
  };
  secondaryButton.onmouseleave = () => {
    secondaryButton.style.color = 'var(--color-text-primary)';
  };

  buttonContainer.appendChild(primaryButton);
  buttonContainer.appendChild(secondaryButton);

  content.appendChild(heading);
  content.appendChild(description);
  content.appendChild(buttonContainer);
  card.appendChild(content);
  container.appendChild(card);
  section.appendChild(container);

  return section;
}
