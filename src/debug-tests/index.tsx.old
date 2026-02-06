/**
 * Debug Test Suite Index
 *
 * Central entry point for all edge case tests
 * Use this to navigate between different test scenarios
 */

import { useState } from '@pulsar-framework/pulsar.dev';
import { EdgeCase1ArrayMap } from './edge-case-1-array-map';
import { EdgeCase2NestedComponents } from './edge-case-2-nested-components';
import { EdgeCase3Conditionals } from './edge-case-3-conditionals';

type TestCase = 'home' | 'array-map' | 'nested-components' | 'conditionals';

export const DebugTestSuite = (): HTMLElement => {
  const [activeTest, setActiveTest] = useState<TestCase>('home');

  const renderTest = () => {
    const test = activeTest();

    if (test === 'array-map') return EdgeCase1ArrayMap();
    if (test === 'nested-components') return EdgeCase2NestedComponents();
    if (test === 'conditionals') return EdgeCase3Conditionals();

    // Home screen
    return (
      <div style="padding: 2rem; max-width: 1000px; margin: 0 auto; font-family: system-ui;">
        <div style="text-align: center; margin-bottom: 3rem;">
          <h1 style="margin: 0; font-size: 3rem; color: #2d3748; margin-bottom: 0.5rem;">
            🧪 Transformer Debug Test Suite
          </h1>
          <p style="margin: 0; font-size: 1.2rem; color: #718096;">
            Testing edge cases in JSX transformation
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-bottom: 3rem;">
          {/* Test Case 1 */}
          <div
            onClick={() => setActiveTest('array-map')}
            style="padding: 2rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; cursor: pointer; transition: transform 0.2s; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"
            onMouseOver={(e: MouseEvent) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
            }}
            onMouseOut={(e: MouseEvent) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
            }}
          >
            <div style="font-size: 3rem; margin-bottom: 1rem;">🔴</div>
            <h2 style="margin: 0 0 0.5rem; color: white; font-size: 1.5rem;">Edge Case 1</h2>
            <h3 style="margin: 0 0 1rem; color: rgba(255,255,255,0.9); font-size: 1.1rem;">
              Array.map()
            </h3>
            <p style="margin: 0; color: rgba(255,255,255,0.8); font-size: 0.95rem; line-height: 1.5;">
              Tests reactive arrays with .map() transformation, dynamic item addition/removal, and
              keyed reconciliation.
            </p>
          </div>

          {/* Test Case 2 */}
          <div
            onClick={() => setActiveTest('nested-components')}
            style="padding: 2rem; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); border-radius: 12px; cursor: pointer; transition: transform 0.2s; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"
            onMouseOver={(e: MouseEvent) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
            }}
            onMouseOut={(e: MouseEvent) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
            }}
          >
            <div style="font-size: 3rem; margin-bottom: 1rem;">🟣</div>
            <h2 style="margin: 0 0 0.5rem; color: white; font-size: 1.5rem;">Edge Case 2</h2>
            <h3 style="margin: 0 0 1rem; color: rgba(255,255,255,0.9); font-size: 1.1rem;">
              Nested Components
            </h3>
            <p style="margin: 0; color: rgba(255,255,255,0.8); font-size: 0.95rem; line-height: 1.5;">
              Tests deep component nesting (3+ levels), children prop passing, and reactive props
              across component boundaries.
            </p>
          </div>

          {/* Test Case 3 */}
          <div
            onClick={() => setActiveTest('conditionals')}
            style="padding: 2rem; background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); border-radius: 12px; cursor: pointer; transition: transform 0.2s; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"
            onMouseOver={(e: MouseEvent) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
            }}
            onMouseOut={(e: MouseEvent) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
            }}
          >
            <div style="font-size: 3rem; margin-bottom: 1rem;">🟠</div>
            <h2 style="margin: 0 0 0.5rem; color: white; font-size: 1.5rem;">Edge Case 3</h2>
            <h3 style="margin: 0 0 1rem; color: rgba(255,255,255,0.9); font-size: 1.1rem;">
              Conditionals
            </h3>
            <p style="margin: 0; color: rgba(255,255,255,0.8); font-size: 0.95rem; line-height: 1.5;">
              Tests ternary operators, nested conditionals, reactive content in branches, and lazy
              evaluation.
            </p>
          </div>
        </div>

        {/* Instructions */}
        <div style="padding: 2rem; background: #edf2f7; border-radius: 12px; border: 2px solid #cbd5e0;">
          <h2 style="margin: 0 0 1rem; color: #2d3748; font-size: 1.5rem;">📝 Instructions</h2>
          <ol style="margin: 0; padding-left: 1.5rem; color: #4a5568; line-height: 1.8;">
            <li>Click on any edge case card above to run that test</li>
            <li>Open browser DevTools console (F12)</li>
            <li>Look for transformation logs: [jsx-transform], [generate-*], [REGISTRY]</li>
            <li>Interact with the test components</li>
            <li>Verify reactivity works correctly</li>
            <li>Check for errors or unexpected behavior</li>
            <li>Document findings in TRANSFORMER-DEBUG-ANALYSIS.md</li>
          </ol>
        </div>

        {/* Debug Info */}
        <div style="padding: 2rem; background: #faf5ff; border-radius: 12px; border: 2px solid #d6bcfa; margin-top: 2rem;">
          <h2 style="margin: 0 0 1rem; color: #6b46c1; font-size: 1.5rem;">🔍 What to Look For</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
            <div style="padding: 1rem; background: white; border-radius: 8px;">
              <div style="font-weight: bold; color: #2d3748; margin-bottom: 0.5rem;">
                ✅ Success Indicators
              </div>
              <ul style="margin: 0; padding-left: 1.5rem; color: #718096; font-size: 0.9rem;">
                <li>All JSX transforms</li>
                <li>Reactivity works</li>
                <li>No console errors</li>
                <li>Clean output code</li>
              </ul>
            </div>

            <div style="padding: 1rem; background: white; border-radius: 8px;">
              <div style="font-weight: bold; color: #2d3748; margin-bottom: 0.5rem;">
                ⚠️ Warning Signs
              </div>
              <ul style="margin: 0; padding-left: 1.5rem; color: #718096; font-size: 0.9rem;">
                <li>Missing wire() calls</li>
                <li>Nested JSX not transformed</li>
                <li>Static instead of reactive</li>
                <li>Incomplete transformation</li>
              </ul>
            </div>

            <div style="padding: 1rem; background: white; border-radius: 8px;">
              <div style="font-weight: bold; color: #2d3748; margin-bottom: 0.5rem;">
                ❌ Error Indicators
              </div>
              <ul style="margin: 0; padding-left: 1.5rem; color: #718096; font-size: 0.9rem;">
                <li>"React is not defined"</li>
                <li>appendChild TypeError</li>
                <li>Infinite loops</li>
                <li>Transformation crash</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {/* Header navigation - only show when not on home */}
      {activeTest() !== 'home' ? (
        <div style="position: sticky; top: 0; z-index: 100; background: #2d3748; padding: 1rem 2rem; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <button
            onClick={() => setActiveTest('home')}
            style="padding: 0.5rem 1.5rem; background: #4299e1; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; font-size: 1rem;"
          >
            ← Back to Test Suite
          </button>
          <span style="margin-left: 1rem; color: white; font-size: 1.1rem; font-weight: bold;">
            {activeTest() === 'array-map'
              ? '🔴 Edge Case 1: Array.map()'
              : activeTest() === 'nested-components'
                ? '🟣 Edge Case 2: Nested Components'
                : '🟠 Edge Case 3: Conditionals'}
          </span>
        </div>
      ) : null}

      {/* Render active test */}
      <div>{renderTest()}</div>
    </div>
  );
};
