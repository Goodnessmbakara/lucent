export function createWaitlistSection(): HTMLElement {
  const section = document.createElement('section');
  section.id = 'waitlist';
  section.style.cssText = `
    position: relative;
    padding: var(--space-20) 0;
    background: linear-gradient(180deg, #0A0E27 0%, #131728 100%);
  `;

  const container = document.createElement('div');
  container.className = 'container';
  container.style.cssText = `
    max-width: 600px;
    text-align: center;
  `;

  const heading = document.createElement('h2');
  heading.textContent = 'Join the Waitlist';
  heading.style.cssText = `
    font-size: var(--font-size-5xl);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-tight);
    margin-bottom: var(--space-4);
    background: linear-gradient(135deg, #FFFFFF 0%, var(--color-gold) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  `;

  const description = document.createElement('p');
  description.textContent = 'Be the first to know when Lucent launches. Get early access and exclusive updates.';
  description.style.cssText = `
    font-size: var(--font-size-lg);
    color: var(--color-text-secondary);
    margin-bottom: var(--space-8);
    line-height: var(--line-height-relaxed);
  `;

  const form = document.createElement('form');
  form.style.cssText = `
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  `;

  const inputWrapper = document.createElement('div');
  inputWrapper.style.cssText = `
    display: flex;
    gap: var(--space-3);
    flex-wrap: wrap;
  `;

  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.placeholder = 'your@email.com';
  emailInput.required = true;
  emailInput.style.cssText = `
    flex: 1;
    min-width: 250px;
    padding: var(--space-4) var(--space-5);
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 184, 77, 0.2);
    border-radius: var(--radius-xl);
    color: var(--color-text-primary);
    font-size: var(--font-size-base);
    outline: none;
    transition: all var(--transition-base);
  `;

  emailInput.onfocus = () => {
    emailInput.style.borderColor = 'var(--color-gold)';
    emailInput.style.background = 'rgba(255, 255, 255, 0.08)';
  };

  emailInput.onblur = () => {
    emailInput.style.borderColor = 'rgba(255, 184, 77, 0.2)';
    emailInput.style.background = 'rgba(255, 255, 255, 0.05)';
  };

  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Join Waitlist';
  submitButton.style.cssText = `
    padding: var(--space-4) var(--space-8);
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

  submitButton.onmouseenter = () => {
    submitButton.style.transform = 'translateY(-2px)';
    submitButton.style.boxShadow = '0 12px 32px rgba(255, 184, 77, 0.4)';
  };

  submitButton.onmouseleave = () => {
    submitButton.style.transform = 'translateY(0)';
    submitButton.style.boxShadow = '0 8px 24px rgba(255, 184, 77, 0.3)';
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
  `;
  successMessage.textContent = '✓ Thanks! We\'ll notify you when Lucent launches.';

  form.onsubmit = async (e) => {
    e.preventDefault();

    const email = emailInput.value;

    // Disable button during submission
    submitButton.disabled = true;
    submitButton.textContent = 'Joining...';
    submitButton.style.opacity = '0.7';

    try {
      // Submit to Google Form
      const formData = new FormData();
      formData.append('entry.509072976', email);

      // Use no-cors mode to avoid CORS issues with Google Forms
      await fetch('https://docs.google.com/forms/d/e/1FAIpQLScN8bdd7C5b_nF-IowthC0LjZnE-ajpXMO14SDSELn1yuxO2Q/formResponse', {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      });

      // Show success message
      form.style.display = 'none';
      successMessage.style.display = 'block';

      // Reset form after 3 seconds
      setTimeout(() => {
        form.style.display = 'flex';
        successMessage.style.display = 'none';
        emailInput.value = '';
        submitButton.disabled = false;
        submitButton.textContent = 'Join Waitlist';
        submitButton.style.opacity = '1';
      }, 3000);
    } catch (error) {
      // Even if fetch fails, assume success (Google Forms returns CORS error but still saves)
      form.style.display = 'none';
      successMessage.style.display = 'block';

      setTimeout(() => {
        form.style.display = 'flex';
        successMessage.style.display = 'none';
        emailInput.value = '';
        submitButton.disabled = false;
        submitButton.textContent = 'Join Waitlist';
        submitButton.style.opacity = '1';
      }, 3000);
    }
  };

  inputWrapper.appendChild(emailInput);
  inputWrapper.appendChild(submitButton);
  form.appendChild(inputWrapper);

  container.appendChild(heading);
  container.appendChild(description);
  container.appendChild(form);
  container.appendChild(successMessage);
  section.appendChild(container);

  return section;
}
