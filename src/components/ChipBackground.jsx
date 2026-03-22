import { useEffect, useRef } from "react";

const THEMES = {
  dark: {
    background: "#040810",
    grid: "rgba(0,150,100,0.04)",
    scanline: "rgba(0,0,0,0.06)",
    vignetteOuter: "rgba(2,6,14,0.82)",
    particlePalette: [
      (opacity) => `rgba(0,255,180,${opacity})`,
      (opacity) => `rgba(0,200,255,${opacity})`,
      (opacity) => `rgba(80,120,255,${opacity})`,
    ],
    accentParticle: (opacity) => `rgba(0,255,180,${opacity})`,
    streamHead: (opacity) => `rgba(200,255,230,${opacity})`,
    streamTrail: (opacity) => `rgba(0,220,140,${opacity})`,
    tracePalette: [
      "rgba(0,220,140,",
      "rgba(0,180,255,",
      "rgba(80,100,255,",
    ],
    chipStroke: "rgba(0,200,140,0.25)",
    chipFill: "rgba(0,40,30,0.3)",
    chipPin: "rgba(0,200,140,0.2)",
    glowInner: "rgba(0,255,160,0.06)",
  },
  light: {
    background: "#ffffff",
    grid: "rgba(37,99,235,0.08)",
    scanline: "rgba(148,163,184,0.08)",
    vignetteOuter: "rgba(191,219,254,0.38)",
    particlePalette: [
      (opacity) => `rgba(37,99,235,${opacity})`,
      (opacity) => `rgba(14,116,144,${opacity})`,
      (opacity) => `rgba(59,130,246,${opacity})`,
    ],
    accentParticle: (opacity) => `rgba(30,64,175,${opacity})`,
    streamHead: (opacity) => `rgba(29,78,216,${opacity})`,
    streamTrail: (opacity) => `rgba(14,116,144,${opacity})`,
    tracePalette: [
      "rgba(37,99,235,",
      "rgba(14,116,144,",
      "rgba(96,165,250,",
    ],
    chipStroke: "rgba(37,99,235,0.26)",
    chipFill: "rgba(219,234,254,0.45)",
    chipPin: "rgba(14,116,144,0.24)",
    glowInner: "rgba(96,165,250,0.12)",
  },
};

const ChipBackground = ({ theme = "dark" }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    const palette = THEMES[theme] ?? THEMES.dark;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const toBinary = (text) =>
      text.split("").map(c => c.charCodeAt(0).toString(2).padStart(8, "0")).join(" ");

    const WORDS = ["MEGHANA", "CSE", "AI", "01001101", "01000001"];
    const BINARY_STREAMS = [
      toBinary("MEGHANA"),
      toBinary("CSE"),
      toBinary("AI"),
      "01001101 01000101 01000111 01001000 01000001 01001110 01000001",
      "01000011 01010011 01000101",
      "01000001 01001001",
    ];

    const GRID = 48;

    class BitParticle {
      constructor(W, H) {
        this.W = W; this.H = H;
        this.reset(true);
      }
      reset(init = false) {
        this.x = Math.random() * this.W;
        this.y = init ? Math.random() * this.H : -20;
        this.speed = 0.4 + Math.random() * 0.8;
        this.char = Math.random() > 0.5 ? "1" : "0";
        this.size = 9 + Math.random() * 5;
        this.opacity = 0.12 + Math.random() * 0.5;
        const particleTone =
          palette.particlePalette[
            Math.floor(Math.random() * palette.particlePalette.length)
          ];
        this.color = particleTone(this.opacity);
        if (Math.random() > 0.85) {
          const w = WORDS[Math.floor(Math.random() * WORDS.length)];
          this.char = w[Math.floor(Math.random() * w.length)];
          this.opacity = 0.5 + Math.random() * 0.4;
          this.color = palette.accentParticle(this.opacity);
          this.size = 11 + Math.random() * 4;
        }
      }
      update() {
        this.y += this.speed;
        if (this.y > this.H + 20) this.reset();
      }
      draw(ctx) {
        ctx.font = `${this.size}px 'Courier New', monospace`;
        ctx.fillStyle = this.color;
        ctx.fillText(this.char, this.x, this.y);
      }
    }

    class BinaryStream {
      constructor(W, H) {
        this.W = W; this.H = H;
        this.x = Math.floor(Math.random() * (W / 14)) * 14;
        this.y = Math.random() * H;
        this.streamIdx = Math.floor(Math.random() * BINARY_STREAMS.length);
        this.charIdx = 0;
        this.speed = 0.6 + Math.random() * 1.2;
        this.chars = BINARY_STREAMS[this.streamIdx].split("");
        this.opacity = 0.18 + Math.random() * 0.35;
        this.charSize = 11;
        this.trail = [];
        this.maxTrail = 18 + Math.floor(Math.random() * 12);
      }
      update() {
        this.y += this.speed;
        this.charIdx = (this.charIdx + 1) % this.chars.length;
        this.trail.unshift({ char: this.chars[this.charIdx], y: this.y });
        if (this.trail.length > this.maxTrail) this.trail.pop();
        if (this.y > this.H + 200) {
          this.y = -20;
          this.x = Math.floor(Math.random() * (this.W / 14)) * 14;
          this.streamIdx = Math.floor(Math.random() * BINARY_STREAMS.length);
          this.chars = BINARY_STREAMS[this.streamIdx].split("");
          this.trail = [];
        }
      }
      draw(ctx) {
        this.trail.forEach((t, i) => {
          const fade = 1 - i / this.trail.length;
          if (i === 0) {
            ctx.font = `bold ${this.charSize}px 'Courier New', monospace`;
            ctx.fillStyle = palette.streamHead(this.opacity * fade * 2.5);
          } else {
            ctx.font = `${this.charSize}px 'Courier New', monospace`;
            ctx.fillStyle = palette.streamTrail(this.opacity * fade * 0.8);
          }
          ctx.fillText(t.char, this.x, t.y);
        });
      }
    }

    class CircuitTrace {
      constructor(W, H) {
        this.W = W; this.H = H;
        this.reset();
      }
      reset() {
        const snap = (v) => Math.round(v / GRID) * GRID;
        this.x1 = snap(Math.random() * this.W);
        this.y1 = snap(Math.random() * this.H);
        const horiz = Math.random() > 0.5;
        const len = (2 + Math.floor(Math.random() * 6)) * GRID;
        this.x2 = horiz ? this.x1 + len : this.x1;
        this.y2 = horiz ? this.y1 : this.y1 + len;
        this.progress = 0;
        this.speed = 0.004 + Math.random() * 0.008;
        this.opacity = 0.08 + Math.random() * 0.18;
        this.color =
          palette.tracePalette[
            Math.floor(Math.random() * palette.tracePalette.length)
          ];
        this.done = false;
        this.waitFrames = Math.floor(Math.random() * 120);
        this.waited = 0;
      }
      update() {
        if (this.waited < this.waitFrames) { this.waited++; return; }
        this.progress = Math.min(1, this.progress + this.speed);
        if (this.progress >= 1) {
          this.done = true;
          setTimeout(() => this.reset(), 2000 + Math.random() * 3000);
        }
      }
      draw(ctx) {
        if (this.waited < this.waitFrames) return;
        const cx = this.x1 + (this.x2 - this.x1) * this.progress;
        const cy = this.y1 + (this.y2 - this.y1) * this.progress;
        ctx.beginPath();
        ctx.moveTo(this.x1, this.y1);
        ctx.lineTo(cx, cy);
        ctx.strokeStyle = `${this.color}${this.opacity})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(this.x1, this.y1, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `${this.color}${this.opacity * 1.8})`;
        ctx.fill();
        if (this.progress >= 1) {
          ctx.beginPath();
          ctx.arc(this.x2, this.y2, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `${this.color}${this.opacity * 2})`;
          ctx.fill();
        }
      }
    }

    const drawChips = (W, H) => {
      const chips = [
        { x: 0.12, y: 0.15, w: 0.10, h: 0.06 },
        { x: 0.70, y: 0.10, w: 0.14, h: 0.08 },
        { x: 0.40, y: 0.60, w: 0.12, h: 0.07 },
        { x: 0.08, y: 0.70, w: 0.09, h: 0.05 },
        { x: 0.78, y: 0.65, w: 0.11, h: 0.06 },
        { x: 0.55, y: 0.25, w: 0.08, h: 0.05 },
      ];
      chips.forEach(c => {
        const x = c.x * W, y = c.y * H, w = c.w * W, h = c.h * H;
        ctx.strokeStyle = palette.chipStroke;
        ctx.lineWidth = 1;
        ctx.strokeRect(x, y, w, h);
        ctx.fillStyle = palette.chipFill;
        ctx.fillRect(x, y, w, h);
        const pinCount = 4;
        const pinLen = 10;
        for (let i = 0; i < pinCount; i++) {
          const px = x + (w / (pinCount + 1)) * (i + 1);
          ctx.beginPath();
          ctx.moveTo(px, y);
          ctx.lineTo(px, y - pinLen);
          ctx.strokeStyle = palette.chipPin;
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(px, y + h);
          ctx.lineTo(px, y + h + pinLen);
          ctx.stroke();
        }
        const glow = ctx.createRadialGradient(x+w/2, y+h/2, 2, x+w/2, y+h/2, w*0.8);
        glow.addColorStop(0, palette.glowInner);
        glow.addColorStop(1, "transparent");
        ctx.fillStyle = glow;
        ctx.fillRect(x - w*0.3, y - h*0.3, w*1.6, h*1.6);
      });
    };

    let particles = [];
    let streams = [];
    let traces = [];

    const init = (W, H) => {
      particles = Array.from({ length: 120 }, () => new BitParticle(W, H));
      streams   = Array.from({ length: 28  }, () => new BinaryStream(W, H));
      traces    = Array.from({ length: 40  }, () => new CircuitTrace(W, H));
    };

    const animate = () => {
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      ctx.fillStyle = palette.background;
      ctx.fillRect(0, 0, W, H);

      ctx.strokeStyle = palette.grid;
      ctx.lineWidth = 0.5;
      for (let x = 0; x < W; x += GRID) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
      }
      for (let y = 0; y < H; y += GRID) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
      }

      traces.forEach(t => { t.update(); t.draw(ctx); });
      drawChips(W, H);
      streams.forEach(s => { s.update(); s.draw(ctx); });
      particles.forEach(p => { p.update(); p.draw(ctx); });

      for (let y = 0; y < H; y += 3) {
        ctx.fillStyle = palette.scanline;
        ctx.fillRect(0, y, W, 1);
      }

      const vig = ctx.createRadialGradient(W/2, H/2, H*0.2, W/2, H/2, H*0.9);
      vig.addColorStop(0, "transparent");
      vig.addColorStop(1, palette.vignetteOuter);
      ctx.fillStyle = vig;
      ctx.fillRect(0, 0, W, H);

      animationId = requestAnimationFrame(animate);
    };

    resize();
    init(canvas.width, canvas.height);
    animate();

    const handleResize = () => {
      resize();
      init(canvas.width, canvas.height);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        display: "block",
      }}
    />
  );
};

export default ChipBackground;
