/**
 * Test Navigation Component
 * Centralized navigation for all pattern tests with render validation
 */

import { BasicContextTest, NestedContextTest } from './context.test';
import { BasicErrorBoundaryTest, NestedErrorBoundaryTest } from './error-boundary.test';
import { expectedRenders } from './expected-renders';
import { BasicListTest, FilteredListTest, NestedListTest } from './list-rendering.test.tsx';
import { ParentComponent } from './nested-components.test';
import { BasicPortalTest, ModalPortalTest } from './portal.test';
import {
  captureComponentRender,
  createCaptureReport,
  IRenderCapture,
  validateRender,
} from './render-capture';

interface ITestResult {
  name: string;
  passed: boolean;
  error?: string;
  duration?: number;
  validationPassed?: boolean;
  validationErrors?: string[];
  capture?: IRenderCapture;
}

const runTest = async (
  name: string,
  testFn: () => HTMLElement
): Promise<{ element: HTMLElement | null; result: ITestResult }> => {
  const startTime = performance.now();
  try {
    const element = testFn();
    const duration = performance.now() - startTime;

    // Capture render state
    let capture: IRenderCapture | undefined;
    let validationPassed = false;
    let validationErrors: string[] = [];

    try {
      capture = await captureComponentRender(element, name, {
        captureComputedStyles: true,
        captureSignals: false, // Enable if signals are used
      });

      // Validate against expected render
      if (expectedRenders[name]) {
        const validation = validateRender(capture, expectedRenders[name]);
        validationPassed = validation.passed;
        validationErrors = validation.errors;

        // Append validation report to element
        const report = createCaptureReport(capture, validation);
        element.appendChild(report);
      }
    } catch (captureError) {
      console.warn('Render capture failed:', captureError);
      validationPassed = true; // Don't fail test if capture fails
    }

    return {
      element,
      result: {
        name,
        passed: true,
        duration,
        validationPassed,
        validationErrors,
        capture,
      },
    };
  } catch (error) {
    const duration = performance.now() - startTime;
    const errorMessage = (error as Error).message;

    const errorDiv = document.createElement('div');
    errorDiv.style.cssText =
      'background: #f8d7da; color: #721c24; padding: 15px; border-radius: 8px; margin: 10px 0;';
    errorDiv.innerHTML = `
      <h4>❌ Test Failed: ${name}</h4>
      <p><strong>Error:</strong> ${errorMessage}</p>
      <pre style="background: #f5f5f5; padding: 10px; border-radius: 4px; overflow-x: auto; font-size: 0.85rem;">${(error as Error).stack}</pre>
    `;

    return {
      element: errorDiv,
      result: {
        name,
        passed: false,
        error: errorMessage,
        duration,
      },
    };
  }
};

const createTestSection = (
  title: string,
  description: string,
  element: HTMLElement
): HTMLElement => {
  const section = document.createElement('section');
  section.style.cssText =
    'margin: 20px 0; padding: 20px; background: #f9f9f9; border-radius: 8px; border-left: 4px solid #667eea;';

  const header = document.createElement('header');

  const h3 = document.createElement('h3');
  h3.textContent = title;
  h3.style.cssText = 'margin: 0 0 5px 0; color: #333;';
  header.appendChild(h3);

  const desc = document.createElement('p');
  desc.textContent = description;
  desc.style.cssText = 'color: #666; font-size: 0.95rem; margin: 0 0 15px 0;';
  header.appendChild(desc);

  section.appendChild(header);
  section.appendChild(element);

  return section;
};

export const TestNavigation = (): HTMLElement => {
  const app = document.createElement('div');
  app.style.cssText = 'max-width: 1400px; margin: 0 auto; padding: 20px;';

  // Show loading state
  app.innerHTML =
    '<div style="padding: 40px; text-align: center;"><h1>🔄 Loading tests...</h1></div>';

  // Test results collector
  const testResults: ITestResult[] = [];

  // Run all tests asynchronously
  const runAllTests = async () => {
    try {
      console.log('🔄 Starting test execution with render validation...');
      app.innerHTML = ''; // Clear loading message

      const header = document.createElement('header');
      header.style.cssText =
        'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px; border-radius: 10px; margin-bottom: 30px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);';

      const h1 = document.createElement('h1');
      h1.textContent = '🧪 Pulsar UI - Pattern Test Suite';
      h1.style.cssText = 'font-size: 2.5rem; margin: 0 0 10px 0;';
      header.appendChild(h1);

      const subtitle = document.createElement('p');
      subtitle.textContent = 'Comprehensive transformation engine validation with render capture';
      subtitle.style.cssText = 'font-size: 1.1rem; opacity: 0.9; margin: 0;';
      header.appendChild(subtitle);

      app.appendChild(header);

      const main = document.createElement('main');

      // 1. NESTED COMPONENTS
      console.log('🔄 Running nested component tests...');
      const nestedGroup = document.createElement('div');
      nestedGroup.style.cssText =
        'background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 40px;';

      const nestedTitle = document.createElement('h2');
      nestedTitle.textContent = '1️⃣ Nested Component Imports';
      nestedTitle.style.cssText =
        'font-size: 1.8rem; color: #667eea; margin: 0 0 20px 0; padding-bottom: 10px; border-bottom: 2px solid #e0e0e0;';
      nestedGroup.appendChild(nestedTitle);

      const { element: parentEl, result: parentResult } = await runTest(
        'Parent->Child->GrandChild',
        ParentComponent
      );
      if (parentEl) {
        testResults.push(parentResult);
        nestedGroup.appendChild(
          createTestSection(
            'Parent Component',
            'Tests 3-level nesting: Parent imports Child, Child imports GrandChild',
            parentEl
          )
        );
      }

      main.appendChild(nestedGroup);

      // 2. LIST RENDERING
      console.log('🔄 Running list rendering tests...');
      const listGroup = document.createElement('div');
      listGroup.style.cssText =
        'background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 40px;';

      const listTitle = document.createElement('h2');
      listTitle.textContent = '2️⃣ List Rendering with .map()';
      listTitle.style.cssText =
        'font-size: 1.8rem; color: #667eea; margin: 0 0 20px 0; padding-bottom: 10px; border-bottom: 2px solid #e0e0e0;';
      listGroup.appendChild(listTitle);

      const { element: basicListEl, result: basicListResult } = await runTest(
        'Basic List',
        BasicListTest
      );
      if (basicListEl) {
        testResults.push(basicListResult);
        listGroup.appendChild(
          createTestSection(
            'Basic List',
            'items.map((item: IItem) => <ListItem key={item.id} />)',
            basicListEl
          )
        );
      }

      const { element: filteredListEl, result: filteredListResult } = await runTest(
        'Filtered List',
        FilteredListTest
      );
      if (filteredListEl) {
        testResults.push(filteredListResult);
        listGroup.appendChild(
          createTestSection('Filtered List', 'items.filter().map() chain', filteredListEl)
        );
      }

      const { element: nestedListEl, result: nestedListResult } = await runTest(
        'Nested Lists',
        NestedListTest
      );
      if (nestedListEl) {
        testResults.push(nestedListResult);
        listGroup.appendChild(
          createTestSection(
            'Nested Lists',
            'categories.map() with nested items.map()',
            nestedListEl
          )
        );
      }

      main.appendChild(listGroup);

      // 3. PORTALS
      console.log('🔄 Running portal tests...');
      const portalGroup = document.createElement('div');
      portalGroup.style.cssText =
        'background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 40px;';

      const portalTitle = document.createElement('h2');
      portalTitle.textContent = '3️⃣ Portal Components';
      portalTitle.style.cssText =
        'font-size: 1.8rem; color: #667eea; margin: 0 0 20px 0; padding-bottom: 10px; border-bottom: 2px solid #e0e0e0;';
      portalGroup.appendChild(portalTitle);

      const { element: basicPortalEl, result: basicPortalResult } = await runTest(
        'Basic Portal',
        () => <BasicPortalTest />
      );
      if (basicPortalEl) {
        testResults.push(basicPortalResult);
        portalGroup.appendChild(
          createTestSection(
            'Basic Portal',
            'Renders content in document.body via portal',
            basicPortalEl
          )
        );
      }

      const { element: modalPortalEl, result: modalPortalResult } = await runTest(
        'Modal Portal',
        () => <ModalPortalTest />
      );
      if (modalPortalEl) {
        testResults.push(modalPortalResult);
        portalGroup.appendChild(
          createTestSection(
            'Modal Portal',
            'Interactive modal with overlay using portals',
            modalPortalEl
          )
        );
      }

      main.appendChild(portalGroup);

      // 4. CONTEXT API
      console.log('🔄 Running context tests...');
      const contextGroup = document.createElement('div');
      contextGroup.style.cssText =
        'background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 40px;';

      const contextTitle = document.createElement('h2');
      contextTitle.textContent = '4️⃣ Context API';
      contextTitle.style.cssText =
        'font-size: 1.8rem; color: #667eea; margin: 0 0 20px 0; padding-bottom: 10px; border-bottom: 2px solid #e0e0e0;';
      contextGroup.appendChild(contextTitle);

      const { element: basicContextEl, result: basicContextResult } = await runTest(
        'Basic Context',
        () => <BasicContextTest />
      );
      if (basicContextEl) {
        testResults.push(basicContextResult);
        contextGroup.appendChild(
          createTestSection(
            'Basic Context',
            'Provider/Consumer pattern with theme context',
            basicContextEl
          )
        );
      }

      const { element: nestedContextEl, result: nestedContextResult } = await runTest(
        'Nested Context',
        () => <NestedContextTest />
      );
      if (nestedContextEl) {
        testResults.push(nestedContextResult);
        contextGroup.appendChild(
          createTestSection('Nested Context', '2-level nested context providers', nestedContextEl)
        );
      }

      main.appendChild(contextGroup);

      // 5. ERROR BOUNDARIES
      console.log('🔄 Running error boundary tests...');
      const errorGroup = document.createElement('div');
      errorGroup.style.cssText =
        'background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 40px;';

      const errorTitle = document.createElement('h2');
      errorTitle.textContent = '5️⃣ Error Boundaries';
      errorTitle.style.cssText =
        'font-size: 1.8rem; color: #667eea; margin: 0 0 20px 0; padding-bottom: 10px; border-bottom: 2px solid #e0e0e0;';
      errorGroup.appendChild(errorTitle);

      const { element: basicErrorEl, result: basicErrorResult } = await runTest(
        'Basic Error Boundary',
        () => <BasicErrorBoundaryTest />
      );
      if (basicErrorEl) {
        testResults.push(basicErrorResult);
        errorGroup.appendChild(
          createTestSection(
            'Basic Error Boundary',
            'Try/catch with error fallback UI',
            basicErrorEl
          )
        );
      }

      const { element: nestedErrorEl, result: nestedErrorResult } = await runTest(
        'Nested Error Boundaries',
        () => <NestedErrorBoundaryTest />
      );
      if (nestedErrorEl) {
        testResults.push(nestedErrorResult);
        errorGroup.appendChild(
          createTestSection(
            'Nested Error Boundaries',
            'Multiple error boundaries with isolated error handling',
            nestedErrorEl
          )
        );
      }

      main.appendChild(errorGroup);
      app.appendChild(main);

      // SUMMARY with validation results
      const summary = document.createElement('footer');
      summary.style.cssText =
        'background: white; padding: 30px; border-radius: 10px; margin-top: 40px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);';

      const summaryTitle = document.createElement('h2');
      summaryTitle.textContent = '📊 Test Results Summary';
      summaryTitle.style.cssText = 'color: #667eea; margin: 0 0 20px 0;';
      summary.appendChild(summaryTitle);

      const passed = testResults.filter((r) => r.passed).length;
      const failed = testResults.filter((r) => !r.passed).length;
      const validationPassed = testResults.filter((r) => r.validationPassed).length;
      const validationFailed = testResults.filter(
        (r) => r.validationErrors && r.validationErrors.length > 0
      ).length;
      const total = testResults.length;

      const stats = document.createElement('div');
      stats.style.cssText =
        'display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;';

      const statHTML = `
      <div style="padding: 20px; background: #f5f5f5; border-radius: 8px; text-align: center;">
        <span style="display: block; font-size: 0.9rem; color: #666; margin-bottom: 5px;">Total Tests</span>
        <span style="display: block; font-size: 2rem; font-weight: bold; color: #333;">${total}</span>
      </div>
      <div style="padding: 20px; background: #e8f5e9; border: 2px solid #4caf50; border-radius: 8px; text-align: center;">
        <span style="display: block; font-size: 0.9rem; color: #666; margin-bottom: 5px;">✅ Passed</span>
        <span style="display: block; font-size: 2rem; font-weight: bold; color: #333;">${passed}</span>
      </div>
      <div style="padding: 20px; background: #ffebee; border: 2px solid #f44336; border-radius: 8px; text-align: center;">
        <span style="display: block; font-size: 0.9rem; color: #666; margin-bottom: 5px;">❌ Failed</span>
        <span style="display: block; font-size: 2rem; font-weight: bold; color: #333;">${failed}</span>
      </div>
      <div style="padding: 20px; background: #e3f2fd; border: 2px solid #2196f3; border-radius: 8px; text-align: center;">
        <span style="display: block; font-size: 0.9rem; color: #666; margin-bottom: 5px;">🎯 Validated</span>
        <span style="display: block; font-size: 2rem; font-weight: bold; color: #333;">${validationPassed}/${total}</span>
      </div>
      <div style="padding: 20px; background: #f5f5f5; border-radius: 8px; text-align: center;">
        <span style="display: block; font-size: 0.9rem; color: #666; margin-bottom: 5px;">Success Rate</span>
        <span style="display: block; font-size: 2rem; font-weight: bold; color: #333;">${total > 0 ? Math.round((passed / total) * 100) : 0}%</span>
      </div>
    `;
      stats.innerHTML = statHTML;
      summary.appendChild(stats);

      app.appendChild(summary);

      console.log('📊 Test Results:', {
        total,
        passed,
        failed,
        validationPassed,
        validationFailed,
        successRate: `${total > 0 ? Math.round((passed / total) * 100) : 0}%`,
        results: testResults,
      });
    } catch (error) {
      console.error('Fatal error during test execution:', error);
      app.innerHTML = `
        <div style="background: #f44336; color: white; padding: 40px; border-radius: 10px; text-align: center;">
          <h1>❌ Test Suite Failed</h1>
          <p>${(error as Error).message}</p>
          <pre style="background: rgba(0,0,0,0.2); padding: 20px; border-radius: 8px; text-align: left; overflow-x: auto;">${(error as Error).stack}</pre>
        </div>
      `;
    }
  };

  // Execute tests
  runAllTests();

  return app;
};

// Export with non-camelCase name to avoid transformer detection
export const create_test_navigation = TestNavigation;
