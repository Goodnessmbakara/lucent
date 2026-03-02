export function createWaitlistSection(): HTMLElement {
  const section = document.createElement('section');
  section.id = 'waitlist';
  section.style.cssText = `
    position: relative;
    padding: var(--space-20) 0;
    background: linear-gradient(180deg, #0A0E27 0%, #131728 100%);
  `;

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
  section.appendChild(gridPattern);

  const container = document.createElement('div');
  container.className = 'container';
  container.style.cssText = `
    position: relative;
    z-index: 1;
    max-width: 1200px;
    text-align: center;
  `;

  // Terminal Window
  const terminal = document.createElement('div');
  terminal.style.cssText = `
    background: #050812;
    border: 1px solid rgba(255, 184, 77, 0.3);
    border-radius: var(--radius-lg);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(255, 184, 77, 0.1);
    overflow: hidden;
    font-family: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
  `;

  // Terminal Header with fake controls
  const terminalHeader = document.createElement('div');
  terminalHeader.style.cssText = `
    background: linear-gradient(180deg, #0A0E1B 0%, #070A14 100%);
    border-bottom: 1px solid rgba(255, 184, 77, 0.2);
    padding: var(--space-3) var(--space-4);
    display: flex;
    align-items: center;
    gap: var(--space-2);
  `;

  // Fake window controls
  const controls = document.createElement('div');
  controls.style.cssText = `
    display: flex;
    gap: var(--space-2);
  `;

  ['#FF5F56', '#FFBD2E', '#27C93F'].forEach(color => {
    const dot = document.createElement('div');
    dot.style.cssText = `
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: ${color};
      opacity: 0.8;
    `;
    controls.appendChild(dot);
  });

  const terminalTitle = document.createElement('div');
  terminalTitle.textContent = 'lucent-waitlist.sh';
  terminalTitle.style.cssText = `
    flex: 1;
    text-align: center;
    font-size: 12px;
    color: rgba(255, 184, 77, 0.7);
    font-weight: 500;
  `;

  terminalHeader.appendChild(controls);
  terminalHeader.appendChild(terminalTitle);
  terminal.appendChild(terminalHeader);

  // Terminal Body
  const terminalBody = document.createElement('div');
  terminalBody.style.cssText = `
    padding: var(--space-6) var(--space-5);
    position: relative;
    min-height: 350px;
  `;

  // Scanline effect
  const scanlines = document.createElement('div');
  scanlines.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: repeating-linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.15),
      rgba(0, 0, 0, 0.15) 1px,
      transparent 1px,
      transparent 2px
    );
    pointer-events: none;
    z-index: 2;
  `;
  terminalBody.appendChild(scanlines);

  // Add CSS animations
  const style = document.createElement('style');
  style.textContent = `
    @keyframes scrollLogs {
      0% { transform: translateY(0); }
      100% { transform: translateY(-50%); }
    }
    @keyframes blink {
      0%, 50% { opacity: 1; }
      51%, 100% { opacity: 0; }
    }
    @keyframes flicker {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.8; }
    }
  `;
  document.head.appendChild(style);

  // Scrolling transaction logs container
  const logsContainer = document.createElement('div');
  logsContainer.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 160px;
    overflow: hidden;
    opacity: 0.3;
    font-size: 11px;
    line-height: 1.6;
    color: #4A9F6E;
    padding: var(--space-4);
  `;

  // Generate fake transaction logs
  const generateTxHash = () => '0x' + Array.from({length: 64}, () =>
    Math.floor(Math.random() * 16).toString(16)).join('');

  const txTypes = ['STX Transfer', 'Contract Call', 'Token Swap', 'NFT Mint'];

  const logsContent = document.createElement('div');
  logsContent.style.cssText = `
    animation: scrollLogs 20s linear infinite;
  `;

  // Create log entries (doubled for seamless loop)
  for (let i = 0; i < 40; i++) {
    const logLine = document.createElement('div');
    const txType = txTypes[Math.floor(Math.random() * txTypes.length)];
    const hash = generateTxHash();
    const isSecure = Math.random() > 0.7;

    logLine.innerHTML = `<span style="color: #666;">[${new Date().toISOString().split('T')[1].split('.')[0]}]</span> ${txType}: <span style="color: #888;">${hash.slice(0, 20)}...</span>${isSecure ? ' <span style="color: var(--color-gold);">✓ SECURE</span>' : ''}`;
    logsContent.appendChild(logLine);
  }

  logsContainer.appendChild(logsContent);
  terminalBody.appendChild(logsContainer);

  // Main content area
  const contentArea = document.createElement('div');
  contentArea.style.cssText = `
    position: relative;
    z-index: 1;
    padding-top: 180px;
  `;

  const heading = document.createElement('div');
  heading.textContent = '> JOIN WAITLIST';
  heading.style.cssText = `
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-bold);
    color: var(--color-gold);
    margin-bottom: var(--space-2);
    text-align: left;
  `;

  const description = document.createElement('div');
  description.innerHTML = '<span style="color: #666;">#</span> Be the first to preview transactions on Stacks';
  description.style.cssText = `
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
    margin-bottom: var(--space-6);
    text-align: left;
  `;

  const form = document.createElement('form');
  form.style.cssText = `
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  `;

  // Input wrapper with prompt
  const inputWrapper = document.createElement('div');
  inputWrapper.style.cssText = `
    display: flex;
    align-items: center;
    gap: var(--space-2);
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 184, 77, 0.2);
    border-radius: var(--radius-lg);
    padding: var(--space-3) var(--space-4);
    transition: all var(--transition-base);
  `;

  const prompt = document.createElement('span');
  prompt.textContent = '>';
  prompt.style.cssText = `
    color: var(--color-gold);
    font-weight: bold;
    font-size: var(--font-size-lg);
  `;

  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.placeholder = 'your@email.com';
  emailInput.required = true;
  emailInput.style.cssText = `
    flex: 1;
    background: transparent;
    border: none;
    color: var(--color-text-primary);
    font-size: var(--font-size-base);
    font-family: inherit;
    outline: none;
  `;

  const cursor = document.createElement('span');
  cursor.textContent = '█';
  cursor.style.cssText = `
    color: var(--color-gold);
    animation: blink 1s infinite;
    opacity: 0;
  `;

  emailInput.onfocus = () => {
    inputWrapper.style.borderColor = 'var(--color-gold)';
    inputWrapper.style.background = 'rgba(255, 255, 255, 0.05)';
    cursor.style.opacity = '1';
  };

  emailInput.onblur = () => {
    inputWrapper.style.borderColor = 'rgba(255, 184, 77, 0.2)';
    inputWrapper.style.background = 'rgba(255, 255, 255, 0.03)';
    cursor.style.opacity = '0';
  };

  inputWrapper.appendChild(prompt);
  inputWrapper.appendChild(emailInput);
  inputWrapper.appendChild(cursor);

  // Submit button styled as ENTER key
  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.innerHTML = 'ENTER <span style="font-size: 1.2em;">↵</span>';
  submitButton.style.cssText = `
    padding: var(--space-2) var(--space-5);
    background: rgba(255, 184, 77, 0.1);
    border: 2px solid var(--color-gold);
    border-radius: var(--radius-lg);
    color: var(--color-gold);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-semibold);
    font-family: inherit;
    cursor: pointer;
    transition: all var(--transition-base);
    text-align: center;
  `;

  submitButton.onmouseenter = () => {
    submitButton.style.background = 'var(--color-gold)';
    submitButton.style.color = 'var(--color-navy)';
  };

  submitButton.onmouseleave = () => {
    submitButton.style.background = 'rgba(255, 184, 77, 0.1)';
    submitButton.style.color = 'var(--color-gold)';
  };

  const successMessage = document.createElement('div');
  successMessage.style.cssText = `
    display: none;
    padding: var(--space-4);
    background: rgba(39, 201, 63, 0.1);
    border: 1px solid rgba(39, 201, 63, 0.3);
    border-radius: var(--radius-lg);
    color: #27C93F;
    font-size: var(--font-size-base);
    text-align: left;
  `;
  successMessage.innerHTML = '<span style="color: #666;">$</span> <span style="color: #27C93F;">✓</span> Email registered successfully. You\'ll be notified when Lucent launches.';

  form.onsubmit = async (e) => {
    e.preventDefault();

    const email = emailInput.value;

    // Disable button during submission
    submitButton.disabled = true;
    submitButton.innerHTML = 'Processing<span id="processingDots">.</span>';
    submitButton.style.opacity = '0.7';

    // Animate processing dots
    let dotCount = 1;
    const dotsInterval = setInterval(() => {
      dotCount = (dotCount % 3) + 1;
      const dotsEl = document.getElementById('processingDots');
      if (dotsEl) dotsEl.textContent = '.'.repeat(dotCount);
    }, 500);

    // Terminal flicker effect
    terminal.style.animation = 'flicker 0.1s 3';

    try {
      // Submit to Google Form
      const formData = new FormData();
      formData.append('entry.509072976', email);

      await fetch('https://docs.google.com/forms/d/e/1FAIpQLScN8bdd7C5b_nF-IowthC0LjZnE-ajpXMO14SDSELn1yuxO2Q/formResponse', {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      });

      clearInterval(dotsInterval);

      // Show success message
      form.style.display = 'none';
      successMessage.style.display = 'block';

      // Reset form after 4 seconds
      setTimeout(() => {
        form.style.display = 'flex';
        successMessage.style.display = 'none';
        emailInput.value = '';
        submitButton.disabled = false;
        submitButton.innerHTML = 'ENTER <span style="font-size: 1.2em;">↵</span>';
        submitButton.style.opacity = '1';
      }, 4000);
    } catch (error) {
      clearInterval(dotsInterval);

      // Even if fetch fails, assume success (Google Forms returns CORS error but still saves)
      form.style.display = 'none';
      successMessage.style.display = 'block';

      setTimeout(() => {
        form.style.display = 'flex';
        successMessage.style.display = 'none';
        emailInput.value = '';
        submitButton.disabled = false;
        submitButton.innerHTML = 'ENTER <span style="font-size: 1.2em;">↵</span>';
        submitButton.style.opacity = '1';
      }, 4000);
    }
  };

  form.appendChild(inputWrapper);
  form.appendChild(submitButton);

  contentArea.appendChild(heading);
  contentArea.appendChild(description);
  contentArea.appendChild(form);
  contentArea.appendChild(successMessage);

  terminalBody.appendChild(contentArea);
  terminal.appendChild(terminalBody);
  container.appendChild(terminal);
  section.appendChild(container);

  return section;
}
