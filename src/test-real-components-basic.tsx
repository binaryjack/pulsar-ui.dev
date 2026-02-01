/**
 * Test: Real Pulsar UI Components - Basic Showcase
 * Testing actual components that exist in the repository
 */
import { createEffect, useState } from '@pulsar-framework/pulsar.dev';

// Import actual existing components
import { Checkbox } from './components/atoms/checkbox/checkbox';
import { Input } from './components/atoms/input/input';
import { Progress } from './components/atoms/progress/progress';
import { Radio } from './components/atoms/radio/radio';
import { Slider } from './components/atoms/slider/slider';
import { Spinner } from './components/atoms/spinner/spinner';
import { Toggle } from './components/atoms/toggle/toggle';
import { Typography } from './components/atoms/typography/typography';
import { Alert } from './components/molecules/alert/alert';
import { Badge } from './components/molecules/badge/badge';
import { Button } from './components/molecules/button/button';
import { Card } from './components/organisms/card/card';

export const TestRealComponentsBasic = (): HTMLElement => {
  console.log('[TestRealComponentsBasic] Component executing');

  // State for different components
  const [inputValue, setInputValue] = useState('Hello Pulsar UI');
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('option1');
  const [toggleEnabled, setToggleEnabled] = useState(true);
  const [sliderValue, setSliderValue] = useState(50);
  const [progressValue, setProgressValue] = useState(75);
  const [badgeCount, setBadgeCount] = useState(3);
  const [loading, setLoading] = useState(false);
  const [alertVisible, setAlertVisible] = useState(true);

  // Effects to log state changes
  createEffect(() => {
    console.log('[TestRealComponentsBasic] Input value changed:', inputValue());
  });

  createEffect(() => {
    console.log('[TestRealComponentsBasic] Checkbox changed:', checkboxChecked());
  });

  // Event handlers using callback forms
  const handleInputChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    setInputValue(target.value);
  };

  const handleCheckboxChange = () => {
    setCheckboxChecked((prev) => !prev);
  };

  const handleRadioChange = (value: string) => {
    setRadioValue(value);
  };

  const handleToggleChange = () => {
    setToggleEnabled((prev) => !prev);
  };

  const handleSliderChange = (value: number) => {
    setSliderValue(value);
  };

  const incrementBadge = () => {
    setBadgeCount((prev) => prev + 1);
  };

  const decrementBadge = () => {
    setBadgeCount((prev) => Math.max(0, prev - 1));
  };

  const simulateLoading = () => {
    setLoading(true);
    setProgressValue(0);

    const interval = setInterval(() => {
      setProgressValue((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setLoading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const toggleAlert = () => {
    setAlertVisible((prev) => !prev);
  };

  return (
    <div
      style={{
        padding: '2rem',
        fontFamily: 'system-ui',
        maxWidth: '1200px',
        margin: '0 auto',
        backgroundColor: '#f8f9fa',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <Typography variant="h1" style={{ color: '#2563eb', marginBottom: '0.5rem' }}>
          🎯 Real Pulsar UI Components Test
        </Typography>
        <Typography variant="subtitle1" style={{ color: '#6c757d' }}>
          Testing actual components from the Pulsar UI library with full reactivity
        </Typography>
      </div>

      {/* Alert Section */}
      {alertVisible() && (
        <div style={{ marginBottom: '2rem' }}>
          <Alert variant="info" title="Component Testing Active" onClose={toggleAlert}>
            All components are working with Pulsar reactivity. State changes are logged to console.
          </Alert>
        </div>
      )}

      {/* Main Content Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
          marginBottom: '2rem',
        }}
      >
        {/* Input Controls */}
        <Card>
          <div style={{ padding: '1.5rem' }}>
            <Typography variant="h3" style={{ marginBottom: '1rem', color: '#2563eb' }}>
              📝 Input Controls
            </Typography>

            <div style={{ marginBottom: '1.5rem' }}>
              <Typography variant="label" style={{ display: 'block', marginBottom: '0.5rem' }}>
                Text Input:
              </Typography>
              <Input
                value={inputValue()}
                onChange={handleInputChange}
                placeholder="Type something..."
                style={{ width: '100%' }}
              />
              <Typography
                variant="caption"
                style={{ color: '#6c757d', marginTop: '0.5rem', display: 'block' }}
              >
                Current: "{inputValue()}" ({inputValue().length} chars)
              </Typography>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <Checkbox
                checked={checkboxChecked()}
                onChange={handleCheckboxChange}
                label="Enable notifications"
              />
              <Typography
                variant="caption"
                style={{ display: 'block', color: '#6c757d', marginTop: '0.25rem' }}
              >
                Status: {checkboxChecked() ? 'checked' : 'unchecked'}
              </Typography>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <Toggle
                checked={toggleEnabled()}
                onChange={handleToggleChange}
                label="Feature toggle"
              />
              <Typography
                variant="caption"
                style={{ display: 'block', color: '#6c757d', marginTop: '0.25rem' }}
              >
                Toggle: {toggleEnabled() ? 'enabled' : 'disabled'}
              </Typography>
            </div>
          </div>
        </Card>

        {/* Selection Controls */}
        <Card>
          <div style={{ padding: '1.5rem' }}>
            <Typography variant="h3" style={{ marginBottom: '1rem', color: '#28a745' }}>
              ☑️ Selection Controls
            </Typography>

            <div style={{ marginBottom: '1.5rem' }}>
              <Typography variant="label" style={{ display: 'block', marginBottom: '0.75rem' }}>
                Radio Group:
              </Typography>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <Radio
                  name="testRadio"
                  value="option1"
                  checked={radioValue() === 'option1'}
                  onChange={() => handleRadioChange('option1')}
                  label="First Option"
                />
                <Radio
                  name="testRadio"
                  value="option2"
                  checked={radioValue() === 'option2'}
                  onChange={() => handleRadioChange('option2')}
                  label="Second Option"
                />
                <Radio
                  name="testRadio"
                  value="option3"
                  checked={radioValue() === 'option3'}
                  onChange={() => handleRadioChange('option3')}
                  label="Third Option"
                />
              </div>

              <Typography
                variant="caption"
                style={{ color: '#6c757d', marginTop: '0.5rem', display: 'block' }}
              >
                Selected: {radioValue()}
              </Typography>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <Typography variant="label" style={{ display: 'block', marginBottom: '0.5rem' }}>
                Slider Control:
              </Typography>
              <Slider
                value={sliderValue()}
                onChange={handleSliderChange}
                min={0}
                max={100}
                step={5}
              />
              <Typography
                variant="caption"
                style={{ color: '#6c757d', marginTop: '0.5rem', display: 'block' }}
              >
                Value: {sliderValue()}%
              </Typography>
            </div>
          </div>
        </Card>
      </div>

      {/* Actions and Progress */}
      <Card style={{ marginBottom: '2rem' }}>
        <div style={{ padding: '1.5rem' }}>
          <Typography variant="h3" style={{ marginBottom: '1rem', color: '#dc3545' }}>
            🎮 Actions & Progress
          </Typography>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem' }}>
            {/* Buttons */}
            <div>
              <Typography variant="label" style={{ display: 'block', marginBottom: '1rem' }}>
                Button Actions:
              </Typography>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <Button variant="primary" onClick={simulateLoading} disabled={loading()}>
                  {loading() ? 'Loading...' : 'Start Progress'}
                </Button>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <Button variant="secondary" onClick={incrementBadge} size="sm">
                    +1
                  </Button>

                  <Badge count={badgeCount()}>
                    <Button variant="outline" size="sm">
                      Notifications
                    </Button>
                  </Badge>

                  <Button variant="secondary" onClick={decrementBadge} size="sm">
                    -1
                  </Button>
                </div>

                <Button variant="ghost" onClick={toggleAlert} size="sm">
                  {alertVisible() ? 'Hide Alert' : 'Show Alert'}
                </Button>
              </div>
            </div>

            {/* Progress */}
            <div>
              <Typography variant="label" style={{ display: 'block', marginBottom: '1rem' }}>
                Progress Indicators:
              </Typography>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <Progress value={progressValue()} max={100} showLabel={true} />
                  <Typography
                    variant="caption"
                    style={{ color: '#6c757d', marginTop: '0.25rem', display: 'block' }}
                  >
                    Progress: {progressValue()}%
                  </Typography>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <Spinner size="md" loading={loading()} />
                  <Typography
                    variant="caption"
                    style={{ display: 'block', marginTop: '0.5rem', color: '#6c757d' }}
                  >
                    Spinner: {loading() ? 'active' : 'inactive'}
                  </Typography>
                </div>
              </div>
            </div>

            {/* Status */}
            <div>
              <Typography variant="label" style={{ display: 'block', marginBottom: '1rem' }}>
                Component Status:
              </Typography>

              <div
                style={{
                  backgroundColor: '#f8f9fa',
                  padding: '1rem',
                  borderRadius: '8px',
                  fontSize: '0.85rem',
                  fontFamily: 'monospace',
                }}
              >
                <div>Loading: {loading() ? '✅' : '❌'}</div>
                <div>Alert: {alertVisible() ? '👁️' : '🙈'}</div>
                <div>Badge: {badgeCount()}</div>
                <div>Checkbox: {checkboxChecked() ? '☑️' : '☐'}</div>
                <div>Toggle: {toggleEnabled() ? '🔛' : '🔴'}</div>
                <div>Radio: {radioValue()}</div>
                <div>Slider: {sliderValue()}%</div>
                <div>Progress: {progressValue()}%</div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Comprehensive State Summary */}
      <Card>
        <div style={{ padding: '1.5rem' }}>
          <Typography variant="h4" style={{ marginBottom: '1rem' }}>
            🔍 Complete State Summary
          </Typography>

          <div
            style={{
              backgroundColor: '#f8f9fa',
              padding: '1rem',
              borderRadius: '8px',
              fontFamily: 'monospace',
              fontSize: '0.9rem',
              overflow: 'auto',
            }}
          >
            <pre>{`Input Value: "${inputValue()}" (${inputValue().length} characters)
Checkbox: ${checkboxChecked() ? 'CHECKED' : 'unchecked'}
Radio Selection: ${radioValue()}
Toggle Status: ${toggleEnabled() ? 'ENABLED' : 'disabled'}
Slider Position: ${sliderValue()}%
Progress: ${progressValue()}%
Badge Count: ${badgeCount()}
Loading State: ${loading() ? 'ACTIVE' : 'inactive'}
Alert Visible: ${alertVisible() ? 'YES' : 'no'}

🎯 All components are reactive and state changes are logged to console.
🔄 Try interacting with any control to see live updates!`}</pre>
          </div>
        </div>
      </Card>
    </div>
  );
};
