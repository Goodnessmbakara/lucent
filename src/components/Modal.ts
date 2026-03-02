export function createComingSoonModal(onComplete: () => void): HTMLElement {
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(8px);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  `;

  const modal = document.createElement('div');
  modal.style.cssText = `
    background: #131728;
    border: 1px solid rgba(255, 184, 77, 0.2);
    border-radius: var(--radius-2xl);
    padding: var(--space-12);
    max-width: 500px;
    text-align: center;
    transform: scale(0.9);
    transition: transform 0.3s ease;
  `;

  const icon = document.createElement('div');
  icon.textContent = '🚀';
  icon.style.cssText = `
    font-size: 64px;
    margin-bottom: var(--space-4);
  `;

  const heading = document.createElement('h2');
  heading.textContent = 'Coming Soon';
  heading.style.cssText = `
    font-size: var(--font-size-4xl);
    font-weight: var(--font-weight-bold);
    color: var(--color-text-primary);
    margin-bottom: var(--space-3);
  `;

  const message = document.createElement('p');
  message.textContent = 'Join the waitlist to get early access';
  message.style.cssText = `
    font-size: var(--font-size-lg);
    color: var(--color-text-secondary);
  `;

  modal.appendChild(icon);
  modal.appendChild(heading);
  modal.appendChild(message);
  overlay.appendChild(modal);

  // Animate in
  requestAnimationFrame(() => {
    overlay.style.opacity = '1';
    modal.style.transform = 'scale(1)';
  });

  // Auto-dismiss after 2 seconds
  setTimeout(() => {
    overlay.style.opacity = '0';
    modal.style.transform = 'scale(0.9)';

    setTimeout(() => {
      overlay.remove();
      onComplete();
    }, 300);
  }, 2000);

  return overlay;
}
