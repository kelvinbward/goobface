import * as Tone from 'tone';

export class AudioProcessorEngine {
  private dist: Tone.Distortion;
  private delay: Tone.FeedbackDelay;
  private synth: Tone.MonoSynth;
  private waveform: Tone.Waveform;
  private notes: string[] = ["E2", "E2", "G2", "A2"];
  private index: number = 0;

  constructor() {
    this.dist = new Tone.Distortion(0).toDestination();
    this.waveform = new Tone.Waveform(1024);
    this.dist.connect(this.waveform);

    this.delay = new Tone.FeedbackDelay("8n", 0.5).connect(this.dist);
    this.synth = new Tone.MonoSynth({
      oscillator: { type: "sawtooth" },
      envelope: { attack: 0.1 },
    }).connect(this.delay);

    Tone.getTransport().scheduleRepeat((time) => {
      const note = this.notes[this.index % this.notes.length];
      this.synth.triggerAttackRelease(note, "16n", time);
      this.index++;
    }, "8n");
  }

  public setDistortion(amount: number): void {
    this.dist.distortion = amount;
  }

  public setDelay(mix: number): void {
    this.delay.wet.value = mix;
  }

  public async toggleAudio(): Promise<boolean> {
    if (Tone.getTransport().state === 'started') {
      Tone.getTransport().stop();
      return false;
    } else {
      await Tone.start();
      Tone.getTransport().start();
      return true;
    }
  }

  public isPlaying(): boolean {
    return Tone.getTransport().state === 'started';
  }

  public getWaveformData(): Float32Array {
    return this.waveform.getValue() as Float32Array;
  }

  public triggerNote(note: string, duration: string = "8n"): void {
    this.synth.triggerAttackRelease(note, duration);
  }
}
