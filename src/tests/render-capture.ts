/**
 * Render Capture Utility
 * Captures and validates component render output
 */

export interface IDOMSnapshot {
  html: string;
  textContent: string;
  attributes: Record<string, string>;
  children: number;
  classes: string[];
  styles: Record<string, string>;
  tagName: string;
}

export interface IA11ySnapshot {
  role: string | null;
  name: string | null;
  description: string | null;
  level: number;
  children: IA11ySnapshot[];
}

export interface IRenderCapture {
  screenshot?: string;
  dom: IDOMSnapshot;
  a11y: IA11ySnapshot;
  signals: Record<string, any>;
  computedValues: Record<string, any>;
  timestamp: number;
  componentName: string;
}

export interface ICaptureOptions {
  includeScreenshot?: boolean;
  captureSignals?: boolean;
  captureComputedStyles?: boolean;
}

/**
 * Get DOM snapshot of element
 */
function getDOMSnapshot(element: HTMLElement): IDOMSnapshot {
  const computedStyle = window.getComputedStyle(element);

  const snapshot: IDOMSnapshot = {
    html: element.outerHTML,
    textContent: element.textContent || '',
    attributes: {},
    children: element.children.length,
    classes: Array.from(element.classList),
    styles: {},
    tagName: element.tagName.toLowerCase(),
  };

  // Capture attributes
  Array.from(element.attributes).forEach((attr) => {
    snapshot.attributes[attr.name] = attr.value;
  });

  // Capture key computed styles
  const importantStyles = [
    'display',
    'position',
    'width',
    'height',
    'padding',
    'margin',
    'border',
    'background',
    'color',
    'font-size',
    'opacity',
    'visibility',
  ];

  importantStyles.forEach((prop) => {
    snapshot.styles[prop] = computedStyle.getPropertyValue(prop);
  });

  return snapshot;
}

/**
 * Get accessibility tree snapshot
 */
function getA11ySnapshot(element: HTMLElement, level = 0): IA11ySnapshot {
  const role = element.getAttribute('role') || element.tagName.toLowerCase();
  const ariaLabel = element.getAttribute('aria-label');
  const ariaDescription = element.getAttribute('aria-description');

  const snapshot: IA11ySnapshot = {
    role,
    name: ariaLabel || element.textContent?.substring(0, 50) || null,
    description: ariaDescription || null,
    level,
    children: [],
  };

  // Recursively capture children (max depth 3)
  if (level < 3) {
    Array.from(element.children).forEach((child) => {
      if (child instanceof HTMLElement) {
        snapshot.children.push(getA11ySnapshot(child, level + 1));
      }
    });
  }

  return snapshot;
}

/**
 * Get signal values from Pulsar debug context
 */
function getSignalValues(): Record<string, any> {
  // Check if Pulsar exposes debug signals
  if (typeof window !== 'undefined' && (window as any).__PULSAR_DEBUG__) {
    return (window as any).__PULSAR_DEBUG__.getSignalValues?.() || {};
  }
  return {};
}

/**
 * Capture screenshot as base64
 */
async function captureScreenshot(element: HTMLElement): Promise<string> {
  try {
    // Use html2canvas if available, otherwise return placeholder
    if (typeof (window as any).html2canvas !== 'undefined') {
      const canvas = await (window as any).html2canvas(element);
      return canvas.toDataURL('image/png');
    }

    // Fallback: use canvas API
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return '';

    const rect = element.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    // Note: This is a simplified version - doesn't actually capture HTML
    ctx.fillStyle = '#f5f5f5';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#333';
    ctx.font = '14px system-ui';
    ctx.fillText('Screenshot placeholder', 10, 20);

    return canvas.toDataURL('image/png');
  } catch (error) {
    console.warn('Screenshot capture failed:', error);
    return '';
  }
}

/**
 * Capture component render state
 */
export async function captureComponentRender(
  element: HTMLElement,
  componentName: string,
  options: ICaptureOptions = {}
): Promise<IRenderCapture> {
  const capture: IRenderCapture = {
    componentName,
    timestamp: Date.now(),
    dom: getDOMSnapshot(element),
    a11y: getA11ySnapshot(element),
    signals: {},
    computedValues: {},
  };

  if (options.includeScreenshot) {
    capture.screenshot = await captureScreenshot(element);
  }

  if (options.captureSignals) {
    capture.signals = getSignalValues();
  }

  if (options.captureComputedStyles) {
    const style = window.getComputedStyle(element);
    capture.computedValues = {
      width: style.width,
      height: style.height,
      display: style.display,
      position: style.position,
    };
  }

  return capture;
}

/**
 * Expected render definitions for validation
 */
export interface IExpectedRender {
  componentName: string;
  assertions: {
    dom?: {
      tagName?: string;
      minChildren?: number;
      maxChildren?: number;
      hasClasses?: string[];
      hasAttributes?: string[];
      textContains?: string[];
    };
    a11y?: {
      hasRole?: string;
      hasName?: boolean;
      minChildrenDepth?: number;
    };
    visual?: {
      isVisible?: boolean;
      hasMinWidth?: number;
      hasMinHeight?: number;
    };
  };
}

/**
 * Validate capture against expected render
 */
export function validateRender(
  capture: IRenderCapture,
  expected: IExpectedRender
): { passed: boolean; errors: string[] } {
  const errors: string[] = [];

  // DOM assertions
  if (expected.assertions.dom) {
    const { dom } = expected.assertions;

    if (dom.tagName && capture.dom.tagName !== dom.tagName.toLowerCase()) {
      errors.push(`Expected tagName "${dom.tagName}", got "${capture.dom.tagName}"`);
    }

    if (dom.minChildren !== undefined && capture.dom.children < dom.minChildren) {
      errors.push(`Expected at least ${dom.minChildren} children, got ${capture.dom.children}`);
    }

    if (dom.maxChildren !== undefined && capture.dom.children > dom.maxChildren) {
      errors.push(`Expected at most ${dom.maxChildren} children, got ${capture.dom.children}`);
    }

    if (dom.hasClasses) {
      dom.hasClasses.forEach((className) => {
        if (!capture.dom.classes.includes(className)) {
          errors.push(`Missing expected class: "${className}"`);
        }
      });
    }

    if (dom.hasAttributes) {
      dom.hasAttributes.forEach((attr) => {
        if (!(attr in capture.dom.attributes)) {
          errors.push(`Missing expected attribute: "${attr}"`);
        }
      });
    }

    if (dom.textContains) {
      dom.textContains.forEach((text) => {
        if (!capture.dom.textContent.includes(text)) {
          errors.push(`Text does not contain: "${text}"`);
        }
      });
    }
  }

  // A11y assertions
  if (expected.assertions.a11y) {
    const { a11y } = expected.assertions;

    if (a11y.hasRole && capture.a11y.role !== a11y.hasRole) {
      errors.push(`Expected role "${a11y.hasRole}", got "${capture.a11y.role}"`);
    }

    if (a11y.hasName && !capture.a11y.name) {
      errors.push(`Expected accessible name, got null`);
    }

    if (
      a11y.minChildrenDepth !== undefined &&
      capture.a11y.children.length < a11y.minChildrenDepth
    ) {
      errors.push(
        `Expected at least ${a11y.minChildrenDepth} a11y children, got ${capture.a11y.children.length}`
      );
    }
  }

  // Visual assertions
  if (expected.assertions.visual) {
    const { visual } = expected.assertions;

    if (visual.isVisible !== undefined) {
      const isVisible =
        capture.dom.styles.display !== 'none' &&
        capture.dom.styles.visibility !== 'hidden' &&
        parseFloat(capture.dom.styles.opacity) > 0;

      if (visual.isVisible !== isVisible) {
        errors.push(`Expected visible=${visual.isVisible}, got ${isVisible}`);
      }
    }

    if (visual.hasMinWidth !== undefined) {
      const width = parseFloat(capture.dom.styles.width);
      if (width < visual.hasMinWidth) {
        errors.push(`Expected min width ${visual.hasMinWidth}px, got ${width}px`);
      }
    }

    if (visual.hasMinHeight !== undefined) {
      const height = parseFloat(capture.dom.styles.height);
      if (height < visual.hasMinHeight) {
        errors.push(`Expected min height ${visual.hasMinHeight}px, got ${height}px`);
      }
    }
  }

  return {
    passed: errors.length === 0,
    errors,
  };
}

/**
 * Create capture comparison report
 */
export function createCaptureReport(
  capture: IRenderCapture,
  validation: { passed: boolean; errors: string[] }
): HTMLElement {
  const report = document.createElement('div');
  report.style.cssText =
    'margin-top: 10px; padding: 15px; background: #f8f9fa; border-radius: 6px; font-size: 0.9rem;';

  const header = document.createElement('div');
  header.style.cssText =
    'font-weight: bold; margin-bottom: 10px; color: ' + (validation.passed ? '#28a745' : '#dc3545');
  header.textContent = validation.passed ? '✅ Validation Passed' : '❌ Validation Failed';
  report.appendChild(header);

  if (!validation.passed && validation.errors.length > 0) {
    const errorList = document.createElement('ul');
    errorList.style.cssText = 'margin: 10px 0; padding-left: 20px; color: #721c24;';

    validation.errors.forEach((error) => {
      const li = document.createElement('li');
      li.textContent = error;
      errorList.appendChild(li);
    });

    report.appendChild(errorList);
  }

  // Show capture summary
  const details = document.createElement('details');
  details.style.marginTop = '10px';

  const summary = document.createElement('summary');
  summary.textContent = 'View Capture Details';
  summary.style.cursor = 'pointer';
  details.appendChild(summary);

  const captureInfo = document.createElement('pre');
  captureInfo.style.cssText =
    'background: white; padding: 10px; border-radius: 4px; overflow-x: auto; font-size: 0.85rem; margin-top: 10px;';
  captureInfo.textContent = JSON.stringify(
    {
      tagName: capture.dom.tagName,
      children: capture.dom.children,
      classes: capture.dom.classes,
      role: capture.a11y.role,
      textLength: capture.dom.textContent.length,
    },
    null,
    2
  );
  details.appendChild(captureInfo);

  report.appendChild(details);

  return report;
}
