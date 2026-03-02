export function createHowItWorks(): HTMLElement {
  const section = document.createElement('section');
  section.id = 'how-it-works';
  section.style.cssText = `
    padding: var(--space-20) 0;
    position: relative;
  `;

  const container = document.createElement('div');
  container.className = 'container';

  // Section Header
  const header = document.createElement('div');
  header.style.cssText = `
    text-align: center;
    margin-bottom: var(--space-12);
  `;

  const badge = document.createElement('div');
  badge.textContent = 'HOW IT WORKS';
  badge.style.cssText = `
    display: inline-block;
    padding: var(--space-1) var(--space-3);
    background: rgba(255, 184, 77, 0.1);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-full);
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-semibold);
    letter-spacing: 0.1em;
    color: var(--color-gold);
    margin-bottom: var(--space-4);
  `;

  const heading = document.createElement('h2');
  heading.textContent = 'Three Steps to Safer Transactions';
  heading.style.cssText = `
    font-size: var(--font-size-4xl);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-tight);
    color: var(--color-text-primary);
  `;

  header.appendChild(badge);
  header.appendChild(heading);

  // Steps
  const stepsContainer = document.createElement('div');
  stepsContainer.style.cssText = `
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-8);
    max-width: 1000px;
    margin: 0 auto;
  `;

  const updateStepsGrid = () => {
    if (window.innerWidth >= 768) {
      stepsContainer.style.gridTemplateColumns = 'repeat(3, 1fr)';
    } else {
      stepsContainer.style.gridTemplateColumns = '1fr';
    }
  };
  updateStepsGrid();
  window.addEventListener('resize', updateStepsGrid);

  const steps = [
    {
      number: '01',
      title: 'Install Extension',
      description: 'Add Lucent to Chrome or Firefox in one click. Works seamlessly with your existing Stacks wallet.',
      icon: '📥'
    },
    {
      number: '02',
      title: 'Initiate Transaction',
      description: 'Start any transaction as normal. Lucent automatically intercepts and analyzes before you sign.',
      icon: '🔄'
    },
    {
      number: '03',
      title: 'Review & Sign',
      description: 'Get detailed preview with security warnings. Approve with confidence or reject with clarity.',
      icon: '✅'
    }
  ];

  steps.forEach((step, index) => {
    const stepCard = document.createElement('div');
    stepCard.style.cssText = `
      position: relative;
      text-align: center;
      padding: var(--space-6);
    `;

    // Connecting line (except for last item)
    if (index < steps.length - 1) {
      const line = document.createElement('div');
      line.style.cssText = `
        position: absolute;
        top: 60px;
        left: 50%;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, var(--color-gold) 0%, transparent 100%);
        display: none;
      `;

      // Show line on desktop
      const updateLine = () => {
        line.style.display = window.innerWidth >= 768 ? 'block' : 'none';
      };
      updateLine();
      window.addEventListener('resize', updateLine);

      stepCard.appendChild(line);
    }

    const numberBadge = document.createElement('div');
    numberBadge.style.cssText = `
      width: 64px;
      height: 64px;
      margin: 0 auto var(--space-4);
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, rgba(255, 184, 77, 0.2) 0%, rgba(255, 184, 77, 0.05) 100%);
      border: 2px solid var(--color-border);
      border-radius: 50%;
      font-size: var(--font-size-2xl);
      font-weight: var(--font-weight-bold);
      font-family: var(--font-mono);
      color: var(--color-gold);
      position: relative;
      z-index: 1;
    `;
    numberBadge.textContent = step.icon;

    const stepNumber = document.createElement('div');
    stepNumber.textContent = step.number;
    stepNumber.style.cssText = `
      font-size: var(--font-size-sm);
      font-weight: var(--font-weight-bold);
      font-family: var(--font-mono);
      color: var(--color-gold);
      margin-bottom: var(--space-2);
    `;

    const title = document.createElement('h3');
    title.textContent = step.title;
    title.style.cssText = `
      font-size: var(--font-size-xl);
      font-weight: var(--font-weight-semibold);
      color: var(--color-text-primary);
      margin-bottom: var(--space-2);
    `;

    const description = document.createElement('p');
    description.textContent = step.description;
    description.style.cssText = `
      font-size: var(--font-size-base);
      line-height: var(--line-height-relaxed);
      color: var(--color-text-secondary);
    `;

    stepCard.appendChild(numberBadge);
    stepCard.appendChild(stepNumber);
    stepCard.appendChild(title);
    stepCard.appendChild(description);
    stepsContainer.appendChild(stepCard);
  });

  container.appendChild(header);
  container.appendChild(stepsContainer);

  // Browser Extension Mockup
  const mockupVisual = document.createElement('div');
  mockupVisual.style.cssText = `
    margin-top: var(--space-16);
    text-align: center;
  `;

  const mockupImage = document.createElement('img');
  mockupImage.src = '/mockups/browser-extension.svg';
  mockupImage.alt = 'Lucent Browser Extension in Action';
  mockupImage.style.cssText = `
    width: 100%;
    max-width: 1200px;
    height: auto;
    border-radius: var(--radius-2xl);
    box-shadow: 0 24px 48px rgba(0, 0, 0, 0.2);
  `;

  mockupVisual.appendChild(mockupImage);
  container.appendChild(mockupVisual);

  section.appendChild(container);

  return section;
}
