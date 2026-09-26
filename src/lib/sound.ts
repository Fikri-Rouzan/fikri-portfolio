let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;

  // Check if the AudioContext is already created, if not, create a new one
  if (!audioCtx) {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  return audioCtx;
}

function triggerBlip(ctx: AudioContext) {
  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  // Set up the oscillator and gain node for the blip sound
  osc.type = "square";
  osc.frequency.setValueAtTime(700, now);
  osc.frequency.exponentialRampToValueAtTime(250, now + 0.06);

  // Set up the gain node to create a quick fade-out effect
  gain.gain.setValueAtTime(0.12, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

  osc.connect(gain);
  gain.connect(ctx.destination);

  // Start and stop the oscillator to play the blip sound
  osc.start(now);
  osc.stop(now + 0.06);
}

export function playRetroBlip() {
  const ctx = getAudioContext();
  if (!ctx) return;

  // If the AudioContext is suspended, resume it before playing the blip sound
  if (ctx.state === "suspended") {
    ctx.resume().then(() => {
      triggerBlip(ctx);
    });
  } else {
    triggerBlip(ctx);
  }
}
