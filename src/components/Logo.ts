/**
 * Logo Component - Concept 3: "The Signal"
 * Ultra-minimal typographic wordmark with extended L and gold signal dot
 */

export interface LogoOptions {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark';
  showWordmark?: boolean;
}

const SIZES = {
  sm: { height: 24, fontSize: 16 },
  md: { height: 32, fontSize: 20 },
  lg: { height: 48, fontSize: 28 },
  xl: { height: 64, fontSize: 40 }
};

export function createLogo(options: LogoOptions = {}): HTMLElement {
  const {
    size = 'md',
    variant = 'light',
    showWordmark = true
  } = options;

  const { height, fontSize } = SIZES[size];
  const lExtension = height * 1.8; // Extended L height
  const dotY = height * 1.4; // Gold dot position

  const logo = document.createElement('div');
  logo.className = 'lucent-logo';
  logo.style.cssText = `
    display: inline-flex;
    align-items: flex-end;
    position: relative;
    height: ${lExtension}px;
    font-family: var(--font-sans);
    font-weight: var(--font-weight-bold);
    font-size: ${fontSize}px;
    letter-spacing: -0.02em;
    user-select: none;
  `;

  if (showWordmark) {
    // Create SVG for the wordmark with extended L and signal dot
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const viewBoxHeight = lExtension;
    const viewBoxWidth = fontSize * 5.5; // Approximate width for "LUCENT"

    svg.setAttribute('viewBox', `0 0 ${viewBoxWidth} ${viewBoxHeight}`);
    svg.setAttribute('width', `${viewBoxWidth}`);
    svg.setAttribute('height', `${lExtension}`);
    svg.style.cssText = 'display: block;';

    // Define gradient for the extended L
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
    gradient.setAttribute('id', `lucent-gradient-${size}`);
    gradient.setAttribute('x1', '0%');
    gradient.setAttribute('y1', '0%');
    gradient.setAttribute('x2', '0%');
    gradient.setAttribute('y2', '100%');

    const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop1.setAttribute('offset', '0%');
    stop1.setAttribute('style', 'stop-color: var(--color-gold); stop-opacity: 1');

    const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop2.setAttribute('offset', '100%');
    stop2.setAttribute('style', variant === 'light' ? 'stop-color: #FFFFFF; stop-opacity: 1' : 'stop-color: var(--color-navy); stop-opacity: 1');

    gradient.appendChild(stop1);
    gradient.appendChild(stop2);
    defs.appendChild(gradient);
    svg.appendChild(defs);

    // Text element for the wordmark
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', '0');
    text.setAttribute('y', `${viewBoxHeight - 8}`);
    text.setAttribute('fill', variant === 'light' ? '#FFFFFF' : 'var(--color-navy)');
    text.setAttribute('font-family', 'Inter, sans-serif');
    text.setAttribute('font-weight', '700');
    text.setAttribute('font-size', `${fontSize}`);
    text.setAttribute('letter-spacing', '-0.02em');
    text.textContent = 'LUCENT';
    svg.appendChild(text);

    // Extended L line (gradient stroke)
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', `${fontSize * 0.15}`);
    line.setAttribute('y1', `${viewBoxHeight - fontSize - 2}`);
    line.setAttribute('x2', `${fontSize * 0.15}`);
    line.setAttribute('y2', '0');
    line.setAttribute('stroke', `url(#lucent-gradient-${size})`);
    line.setAttribute('stroke-width', '3');
    line.setAttribute('stroke-linecap', 'round');
    svg.appendChild(line);

    // Signal dot (gold)
    const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    dot.setAttribute('cx', `${fontSize * 2.2}`); // Position above U
    dot.setAttribute('cy', `${viewBoxHeight - dotY}`);
    dot.setAttribute('r', `${fontSize * 0.08}`);
    dot.setAttribute('fill', 'var(--color-gold)');

    // Add glow effect
    const glowFilter = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
    glowFilter.setAttribute('id', `glow-${size}`);
    const feGaussianBlur = document.createElementNS('http://www.w3.org/2000/svg', 'feGaussianBlur');
    feGaussianBlur.setAttribute('stdDeviation', '2');
    feGaussianBlur.setAttribute('result', 'coloredBlur');
    glowFilter.appendChild(feGaussianBlur);

    const feMerge = document.createElementNS('http://www.w3.org/2000/svg', 'feMerge');
    const feMergeNode1 = document.createElementNS('http://www.w3.org/2000/svg', 'feMergeNode');
    feMergeNode1.setAttribute('in', 'coloredBlur');
    const feMergeNode2 = document.createElementNS('http://www.w3.org/2000/svg', 'feMergeNode');
    feMergeNode2.setAttribute('in', 'SourceGraphic');
    feMerge.appendChild(feMergeNode1);
    feMerge.appendChild(feMergeNode2);
    glowFilter.appendChild(feMerge);

    defs.appendChild(glowFilter);
    dot.setAttribute('filter', `url(#glow-${size})`);
    svg.appendChild(dot);

    // Subtle connecting beam from dot to L extension (very faint)
    const beam = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    beam.setAttribute('x1', `${fontSize * 2.2}`);
    beam.setAttribute('y1', `${viewBoxHeight - dotY}`);
    beam.setAttribute('x2', `${fontSize * 0.15}`);
    beam.setAttribute('y2', `${fontSize * 0.5}`);
    beam.setAttribute('stroke', 'var(--color-gold)');
    beam.setAttribute('stroke-width', '1');
    beam.setAttribute('stroke-opacity', '0.15');
    svg.appendChild(beam);

    logo.appendChild(svg);
  }

  return logo;
}

/**
 * Simple text-based logo for use in HTML when SVG is not needed
 */
export function createSimpleLogo(options: LogoOptions = {}): HTMLElement {
  const { size = 'md', variant = 'light' } = options;
  const { fontSize } = SIZES[size];

  const logo = document.createElement('div');
  logo.className = 'lucent-logo-simple';
  logo.style.cssText = `
    font-family: var(--font-sans);
    font-weight: var(--font-weight-bold);
    font-size: ${fontSize}px;
    letter-spacing: -0.02em;
    color: ${variant === 'light' ? '#FFFFFF' : 'var(--color-navy)'};
    user-select: none;
  `;

  logo.innerHTML = `
    <span style="position: relative;">
      L<span style="color: var(--color-gold);">U</span>CENT
      <span style="
        position: absolute;
        top: -4px;
        left: 50%;
        width: 6px;
        height: 6px;
        background: var(--color-gold);
        border-radius: 50%;
        box-shadow: 0 0 8px var(--color-gold);
      "></span>
    </span>
  `;

  return logo;
}
