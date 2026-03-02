export function createComingSoonModal(onComplete: () => void): HTMLElement {
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(12px);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.25s ease;
  `;

  const modal = document.createElement('div');
  modal.style.cssText = `
    background: linear-gradient(135deg, #131728 0%, #1A1F35 100%);
    border: 1px solid rgba(255, 184, 77, 0.3);
    border-radius: var(--radius-2xl);
    padding: var(--space-10) var(--space-8);
    max-width: 420px;
    text-align: center;
    transform: scale(0.95) translateY(10px);
    transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(255, 184, 77, 0.1);
  `;

  // Icon with glow effect
  const iconWrapper = document.createElement('div');
  iconWrapper.style.cssText = `
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    background: rgba(255, 184, 77, 0.1);
    border: 2px solid rgba(255, 184, 77, 0.3);
    border-radius: 50%;
    margin-bottom: var(--space-5);
    box-shadow: 0 0 30px rgba(255, 184, 77, 0.2);
  `;

  const icon = document.createElement('div');
  icon.textContent = '🚀';
  icon.style.cssText = `
    font-size: 40px;
  `;

  iconWrapper.appendChild(icon);

  const heading = document.createElement('h2');
  heading.textContent = 'Coming Soon';
  heading.style.cssText = `
    font-size: var(--font-size-3xl);
    font-weight: var(--font-weight-bold);
    background: linear-gradient(135deg, #FFFFFF 0%, var(--color-gold) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: var(--space-2);
  `;

  const message = document.createElement('p');
  message.textContent = 'Join the waitlist for early access';
  message.style.cssText = `
    font-size: var(--font-size-base);
    color: var(--color-text-secondary);
    line-height: var(--line-height-relaxed);
  `;

  modal.appendChild(iconWrapper);
  modal.appendChild(heading);
  modal.appendChild(message);
  overlay.appendChild(modal);

  // Animate in
  requestAnimationFrame(() => {
    overlay.style.opacity = '1';
    modal.style.transform = 'scale(1) translateY(0)';
  });

  // Auto-dismiss after 1.5 seconds
  setTimeout(() => {
    overlay.style.opacity = '0';
    modal.style.transform = 'scale(0.95) translateY(10px)';

    setTimeout(() => {
      overlay.remove();
      onComplete();
    }, 250);
  }, 1500);

  return overlay;
}
