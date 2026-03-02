export function createTransactionPreview(): HTMLElement {
  const section = document.createElement('section');
  section.style.cssText = `
    position: relative;
    padding: var(--space-16) 0;
    background: linear-gradient(180deg, #0A0E27 0%, #131728 100%);
  `;

  const container = document.createElement('div');
  container.className = 'container';
  container.style.cssText = `
    text-align: center;
  `;

  // Product Visual
  const productVisual = document.createElement('div');
  productVisual.style.cssText = `
    position: relative;
    display: inline-block;
  `;

  const visualImage = document.createElement('img');
  visualImage.src = '/assets/hero/transaction-preview.svg';
  visualImage.alt = 'Lucent Transaction Preview';
  visualImage.style.cssText = `
    width: 100%;
    max-width: 900px;
    height: auto;
    border-radius: var(--radius-2xl);
    box-shadow: 0 24px 48px rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(255, 184, 77, 0.2);
  `;

  productVisual.appendChild(visualImage);
  container.appendChild(productVisual);
  section.appendChild(container);

  return section;
}
