/**
 * Edge Case 3: Conditional Rendering with Signal Dependencies
 *
 * Tests:
 * - Ternary operators with JSX in both branches
 * - Conditional rendering with nested signals
 * - Lazy evaluation of branches
 * - Mixed conditional patterns
 */

import { useState } from '@pulsar-framework/pulsar.dev';

export const EdgeCase3Conditionals = (): HTMLElement => {
  console.log('[EdgeCase3] Initializing conditional rendering test');

  const [showContent, setShowContent] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [count, setCount] = useState(0);
  const [userType, setUserType] = useState<'guest' | 'user' | 'admin'>('guest');

  const toggleContent = () => setShowContent((prev) => !prev);
  const toggleLoading = () => setIsLoading((prev) => !prev);
  const toggleError = () => setHasError((prev) => !prev);

  const cycleUserType = () => {
    const types: Array<'guest' | 'user' | 'admin'> = ['guest', 'user', 'admin'];
    const currentIndex = types.indexOf(userType());
    const nextIndex = (currentIndex + 1) % types.length;
    setUserType(types[nextIndex]);
  };

  return (
    <div style="padding: 2rem; max-width: 800px; margin: 0 auto; font-family: system-ui;">
      <div style="border-bottom: 2px solid #ed8936; padding-bottom: 1rem; margin-bottom: 2rem;">
        <h1 style="margin: 0; color: #ed8936; font-size: 2rem;">
          🟠 Edge Case 3: Conditional Rendering
        </h1>
        <p style="margin: 0.5rem 0 0; color: #666;">
          Testing ternary operators and conditionals with signal dependencies
        </p>
      </div>

      {/* Controls */}
      <div style="padding: 1.5rem; background: #f7fafc; border-radius: 8px; border: 2px solid #cbd5e0; margin-bottom: 2rem;">
        <h2 style="margin: 0 0 1rem; color: #2d3748; font-size: 1.2rem;">Controls</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
          <button
            onClick={toggleContent}
            style={`padding: 0.75rem; background: ${showContent() ? '#48bb78' : '#a0aec0'}; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;`}
          >
            {showContent() ? 'Hide Content' : 'Show Content'}
          </button>

          <button
            onClick={toggleLoading}
            style={`padding: 0.75rem; background: ${isLoading() ? '#4299e1' : '#a0aec0'}; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;`}
          >
            {isLoading() ? 'Stop Loading' : 'Start Loading'}
          </button>

          <button
            onClick={toggleError}
            style={`padding: 0.75rem; background: ${hasError() ? '#fc8181' : '#a0aec0'}; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;`}
          >
            {hasError() ? 'Clear Error' : 'Trigger Error'}
          </button>

          <button
            onClick={cycleUserType}
            style="padding: 0.75rem; background: #805ad5; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;"
          >
            User: {userType()}
          </button>
        </div>
      </div>

      {/* CRITICAL: Edge Case 1 - Simple ternary with JSX */}
      <div style="padding: 1.5rem; background: #ebf8ff; border-radius: 8px; border: 2px solid #3182ce; margin-bottom: 1rem;">
        <h3 style="margin: 0 0 1rem; color: #2c5282;">Test 1: Simple Ternary (show/hide)</h3>
        {showContent() ? (
          <div style="padding: 1rem; background: #c6f6d5; border: 2px solid #48bb78; border-radius: 6px;">
            <div style="font-size: 1.2rem; font-weight: bold; color: #22543d; margin-bottom: 0.5rem;">
              ✅ Content is visible
            </div>
            <div style="color: #2f855a;">
              This content should only render when showContent() is true
            </div>
          </div>
        ) : (
          <div style="padding: 1rem; background: #fed7d7; border: 2px solid #fc8181; border-radius: 6px;">
            <div style="font-size: 1.2rem; font-weight: bold; color: #742a2a; margin-bottom: 0.5rem;">
              ❌ Content is hidden
            </div>
            <div style="color: #c53030;">
              This content should only render when showContent() is false
            </div>
          </div>
        )}
      </div>

      {/* CRITICAL: Edge Case 2 - Nested conditionals */}
      <div style="padding: 1.5rem; background: #fef5e7; border-radius: 8px; border: 2px solid #f6ad55; margin-bottom: 1rem;">
        <h3 style="margin: 0 0 1rem; color: #7c2d12;">
          Test 2: Nested Conditionals (loading state)
        </h3>
        {isLoading() ? (
          <div style="padding: 2rem; text-align: center; background: #bee3f8; border: 2px dashed #4299e1; border-radius: 6px;">
            <div style="font-size: 3rem; margin-bottom: 0.5rem;">⏳</div>
            <div style="font-size: 1.2rem; font-weight: bold; color: #2c5282;">Loading...</div>
          </div>
        ) : hasError() ? (
          <div style="padding: 2rem; text-align: center; background: #fed7d7; border: 2px solid #fc8181; border-radius: 6px;">
            <div style="font-size: 3rem; margin-bottom: 0.5rem;">⚠️</div>
            <div style="font-size: 1.2rem; font-weight: bold; color: #742a2a; margin-bottom: 0.5rem;">
              Error Occurred
            </div>
            <div style="color: #c53030;">Something went wrong. Please try again.</div>
          </div>
        ) : (
          <div style="padding: 2rem; text-align: center; background: #c6f6d5; border: 2px solid #48bb78; border-radius: 6px;">
            <div style="font-size: 3rem; margin-bottom: 0.5rem;">✅</div>
            <div style="font-size: 1.2rem; font-weight: bold; color: #22543d; margin-bottom: 0.5rem;">
              Content Loaded Successfully
            </div>
            <div style="color: #2f855a;">
              Counter: <strong style="font-size: 1.5rem;">{count()}</strong>
            </div>
            <button
              onClick={() => setCount((c) => c + 1)}
              style="margin-top: 1rem; padding: 0.5rem 1.5rem; background: #48bb78; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;"
            >
              Increment
            </button>
          </div>
        )}
      </div>

      {/* CRITICAL: Edge Case 3 - Conditional with reactive content in both branches */}
      <div style="padding: 1.5rem; background: #faf5ff; border-radius: 8px; border: 2px solid #d6bcfa; margin-bottom: 1rem;">
        <h3 style="margin: 0 0 1rem; color: #44337a;">Test 3: Conditional with Reactive Content</h3>
        {count() % 2 === 0 ? (
          <div style="padding: 1rem; background: #bee3f8; border: 2px solid #4299e1; border-radius: 6px;">
            <div style="font-size: 1.1rem; font-weight: bold; color: #2c5282; margin-bottom: 0.5rem;">
              📊 Even Number: {count()}
            </div>
            <div style="color: #2d3748;">
              The counter is currently even. Both branches have reactive content.
            </div>
          </div>
        ) : (
          <div style="padding: 1rem; background: #fed7e2; border: 2px solid #f687b3; border-radius: 6px;">
            <div style="font-size: 1.1rem; font-weight: bold; color: #702459; margin-bottom: 0.5rem;">
              📈 Odd Number: {count()}
            </div>
            <div style="color: #2d3748;">
              The counter is currently odd. This branch also displays the reactive count.
            </div>
          </div>
        )}
      </div>

      {/* CRITICAL: Edge Case 4 - Multi-way conditional (switch-like) */}
      <div style="padding: 1.5rem; background: #e6fffa; border-radius: 8px; border: 2px solid #81e6d9; margin-bottom: 1rem;">
        <h3 style="margin: 0 0 1rem; color: #234e52;">Test 4: Multi-way Conditional (user type)</h3>
        {userType() === 'guest' ? (
          <div style="padding: 1rem; background: #fed7d7; border: 2px solid #fc8181; border-radius: 6px;">
            <div style="font-size: 1.1rem; font-weight: bold; color: #742a2a; margin-bottom: 0.5rem;">
              🚫 Guest Access
            </div>
            <div style="color: #c53030;">
              Limited permissions. Please log in to access more features.
            </div>
          </div>
        ) : userType() === 'user' ? (
          <div style="padding: 1rem; background: #bee3f8; border: 2px solid #4299e1; border-radius: 6px;">
            <div style="font-size: 1.1rem; font-weight: bold; color: #2c5282; margin-bottom: 0.5rem;">
              👤 User Access
            </div>
            <div style="color: #2d3748;">
              Standard permissions. You can view and edit your own content.
            </div>
          </div>
        ) : (
          <div style="padding: 1rem; background: #faf089; border: 2px solid #f6e05e; border-radius: 6px;">
            <div style="font-size: 1.1rem; font-weight: bold; color: #744210; margin-bottom: 0.5rem;">
              👑 Admin Access
            </div>
            <div style="color: #744210;">
              Full permissions. You can manage all content and users.
            </div>
          </div>
        )}
      </div>

      {/* Debug info */}
      <div style="padding: 1.5rem; background: #faf5ff; border-radius: 8px; border: 2px solid #d6bcfa;">
        <h2 style="margin: 0 0 1rem; color: #6b46c1; font-size: 1.2rem;">🔍 Debug Info</h2>
        <pre style="background: white; padding: 1rem; border-radius: 4px; overflow: auto; font-size: 0.875rem; margin: 0;">
          {`Current State:
  - showContent: ${showContent()}
  - isLoading: ${isLoading()}
  - hasError: ${hasError()}
  - count: ${count()}
  - userType: ${userType()}

Expected Transformation:
  ✅ Ternary operators should transform JSX in both branches
  ✅ Nested ternaries should work correctly
  ✅ Reactive signals in conditional branches should wire properly
  ✅ Only active branch should be in DOM (lazy evaluation)

Check Console for:
  - [jsx-transform] Transforming conditional branches
  - [generate-*] Wire calls inside conditionals
  - [expression-classifier] Conditional detection
  - No "React is not defined" errors in ternaries`}
        </pre>
      </div>
    </div>
  );
};
