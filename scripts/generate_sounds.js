const fs = require('fs');
const path = require('path');

function generateWav(filename, generateSample, duration, sampleRate = 44100) {
  const numSamples = Math.floor(sampleRate * duration);
  const buffer = Buffer.alloc(44 + numSamples * 2);

  // RIFF Chunk Descriptor
  buffer.write('RIFF', 0);
  buffer.writeUInt32LE(36 + numSamples * 2, 4);
  buffer.write('WAVE', 8);

  // FMT Sub-chunk
  buffer.write('fmt ', 12);
  buffer.writeUInt32LE(16, 16); // Subchunk1Size
  buffer.writeUInt16LE(1, 20); // AudioFormat (1=PCM)
  buffer.writeUInt16LE(1, 22); // NumChannels (1=Mono)
  buffer.writeUInt32LE(sampleRate, 24); // SampleRate
  buffer.writeUInt32LE(sampleRate * 2, 28); // ByteRate
  buffer.writeUInt16LE(2, 32); // BlockAlign
  buffer.writeUInt16LE(16, 34); // BitsPerSample

  // Data Sub-chunk
  buffer.write('data', 36);
  buffer.writeUInt32LE(numSamples * 2, 40);

  // Generate Audio Data
  for (let i = 0; i < numSamples; i++) {
    const t = i / sampleRate;
    const sample = generateSample(t, duration);
    // Convert to 16-bit PCM (between -32768 and 32767)
    const val = Math.max(-1, Math.min(1, sample));
    buffer.writeInt16LE(Math.floor(val * 32767), 44 + i * 2);
  }

  fs.writeFileSync(path.join(__dirname, '..', 'assets', 'sounds', filename), buffer);
}

// 1. Activate Sound (Pitch rising over time, sci-fi hum)
generateWav('activate.wav', (t, d) => {
  const env = Math.sin((t / d) * Math.PI / 2); // fast attack, slow sustain
  const freq = 400 + 400 * t; // rising pitch
  return Math.sin(2 * Math.PI * freq * t) * env * 0.5 + 
         Math.sin(2 * Math.PI * (freq * 1.5) * t) * env * 0.25;
}, 0.5);

// 2. Deactivate Sound (Pitch falling, fading out)
generateWav('deactivate.wav', (t, d) => {
  const env = Math.cos((t / d) * Math.PI / 2); // gradual fade
  const freq = 800 - 600 * t; // falling pitch
  return Math.sin(2 * Math.PI * freq * t) * env * 0.5 + 
         Math.sin(2 * Math.PI * (freq * 0.5) * t) * env * 0.25;
}, 0.6);

// 3. Dial Sound (Short crisp synth click/blip)
generateWav('dial.wav', (t, d) => {
  const env = Math.exp(-t * 30); // very fast decay
  const freq = 1200;
  return Math.sin(2 * Math.PI * freq * t) * env * 0.5;
}, 0.1);

// 4. Transform Sound (Loud swoosh / flash blast)
generateWav('transform.wav', (t, d) => {
  const env = t < 0.1 ? t * 10 : Math.exp(-(t - 0.1) * 3); // Attack then decay
  const noise = (Math.random() * 2 - 1) * 0.4;
  const swoosh = Math.sin(2 * Math.PI * (200 + 800 * (1-t)) * t) * 0.6;
  return (noise + swoosh) * env;
}, 1.5);

console.log('Sounds generated successfully in assets/sounds');
