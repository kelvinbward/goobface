# Audio Specs
- **Tone.js Lifecycle**: Always start Tone.js transport only after user interaction.
- **WebAudio AudioContext**: WebAudio AudioContext requires resume-on-click or user interaction to start. See `src/lib/audio/processor.ts` `toggleAudio` method.
- **Oscilloscope Canvas Rendering**: When using Tone.Waveform, ensure canvas rendering syncs with the transport or requestAnimationFrame loops safely.
