import { describe, it, expect, vi, beforeEach } from 'vitest';
import { AudioProcessorEngine } from '../processor.js';
import * as Tone from 'tone';

vi.mock('tone', () => {
  const mockConnect = vi.fn().mockReturnThis();
  const mockToDestination = vi.fn().mockReturnThis();
  const mockStart = vi.fn();
  const mockStop = vi.fn();
  const mockGetValue = vi.fn().mockReturnValue(new Float32Array(1024));
  const mockTriggerAttackRelease = vi.fn();

  const mockGetTransport = vi.fn().mockReturnValue({
    state: 'stopped',
    start: mockStart,
    stop: mockStop,
    scheduleRepeat: vi.fn(),
  });

  return {
    Distortion: vi.fn().mockImplementation(function(distortion) {
      this.distortion = distortion;
      this.connect = mockConnect;
      this.toDestination = mockToDestination;
    }),
    FeedbackDelay: vi.fn().mockImplementation(function(delayTime, feedback) {
      this.delayTime = delayTime;
      this.feedback = feedback;
      this.connect = mockConnect;
      this.wet = { value: 0 };
    }),
    MonoSynth: vi.fn().mockImplementation(function(options) {
      this.options = options;
      this.connect = mockConnect;
      this.triggerAttackRelease = mockTriggerAttackRelease;
    }),
    Waveform: vi.fn().mockImplementation(function(size) {
      this.size = size;
      this.connect = mockConnect;
      this.getValue = mockGetValue;
    }),
    getTransport: mockGetTransport,
    start: vi.fn().mockResolvedValue(undefined),
  };
});

describe('AudioProcessorEngine', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('initializes Tone.Distortion correctly', () => {
    new AudioProcessorEngine();
    expect(Tone.Distortion).toHaveBeenCalledWith(0);
  });

  it('initializes Tone.FeedbackDelay correctly', () => {
    new AudioProcessorEngine();
    expect(Tone.FeedbackDelay).toHaveBeenCalledWith('8n', 0.5);
  });

  it('initializes Tone.MonoSynth with correct parameters', () => {
    new AudioProcessorEngine();
    expect(Tone.MonoSynth).toHaveBeenCalledWith(
      expect.objectContaining({
        oscillator: { type: 'sawtooth' },
        envelope: { attack: 0.1 },
      })
    );
  });
});
