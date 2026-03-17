import { useEffect, useRef } from "react";

const ChipBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;

    let animationId = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const toBinary = (text) =>
      text
        .split("")
        .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
        .join(" ");

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
      constructor(width, height) {
        this.W = width;
        this.H = height;
        this.reset(true);
      }

      reset(init = false) {
        this.x = Math.random() * this.W;
        this.y = init ? Math.random() * this.H : -20;
        this.speed = 0.4 + Math.random() * 0.8;
        this.char = Math.random() > 0.5 ? "1" : "0";
        this.size = 9 + Math.random() * 5;
        this.opacity = 0.12 + Math.random() * 0.5;
        this.color =
          Math.random() > 0.7
            ? `rgba(0,255,180,${this.opacity})`
            : Math.random() > 0.5
              ? `rgba(0,200,255,${this.opacity})`
              : `rgba(80,120,255,${this.opacity})`;

        if (Math.random() > 0.85) {
          const word = WORDS[Math.floor(Math.random() * WORDS.length)];
          this.char = word[Math.floor(Math.random() * word.length)];
          this.opacity = 0.5 + Math.random() * 0.4;
          this.color = `rgba(0,255,180,${this.opacity})`;
          this.size = 11 + Math.random() * 4;
        }
      }

      update() {
        this.y += this.speed;
        if (this.y > this.H + 20) this.reset();
      }

      draw(context) {
        context.font = `${this.size}px 'Courier New', monospace`;
        context.fillStyle = this.color;
        context.fillText(this.char, this.x, this.y);
      }
    }

    class BinaryStream {
      constructor(width, height) {
        this.W = width;
        this.H = height;
        this.x = Math.floor(Math.random() * (width / 14)) * 14;
        this.y = Math.random() * height;
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

      draw(context) {
        this.trail.forEach((trailPoint, i) => {
          const fade = 1 - i / this.trail.length;
          if (i === 0) {
            context.font = `bold ${this.charSize}px 'Courier New', monospace`;
            context.fillStyle = `rgba(200,255,230,${this.opacity * fade * 2.5})`;
          } else {
            context.font = `${this.charSize}px 'Courier New', monospace`;
            context.fillStyle = `rgba(0,220,140,${this.opacity * fade * 0.8})`;
          }
          context.fillText(trailPoint.char, this.x, trailPoint.y);
        });
      }
    }

    class CircuitTrace {
      constructor(width, height) {
        this.W = width;
        this.H = height;
        this.reset();
      }

      reset() {
        const snap = (value) => Math.round(value / GRID) * GRID;
        this.x1 = snap(Math.random() * this.W);
        this.y1 = snap(Math.random() * this.H);
        const isHorizontal = Math.random() > 0.5;
        const length = (2 + Math.floor(Math.random() * 6)) * GRID;
        this.x2 = isHorizontal ? this.x1 + length : this.x1;
        this.y2 = isHorizontal ? this.y1 : this.y1 + length;
        this.progress = 0;
        this.speed = 0.004 + Math.random() * 0.008;
        this.opacity = 0.08 + Math.random() * 0.18;
        this.color =
          Math.random() > 0.6 ? "rgba(0,220,140," : Math.random() > 0.5 ? "rgba(0,180,255," : "rgba(80,100,255,";
        this.waitFrames = Math.floor(Math.random() * 120);
        this.waited = 0;
      }

      update() {
        if (this.waited < this.waitFrames) {
          this.waited += 1;
          return;
        }
        this.progress = Math.min(1, this.progress + this.speed);
        if (this.progress >= 1) this.reset();
      }

      draw(context) {
        if (this.waited < this.waitFrames) return;
        const cx = this.x1 + (this.x2 - this.x1) * this.progress;
        const cy = this.y1 + (this.y2 - this.y1) * this.progress;

        context.beginPath();
        context.moveTo(this.x1, this.y1);
        context.lineTo(cx, cy);
        context.strokeStyle = `${this.color}${this.opacity})`;
        context.lineWidth = 1.2;
        context.stroke();

        context.beginPath();
        context.arc(this.x1, this.y1, 2.5, 0, Math.PI * 2);
        context.fillStyle = `${this.color}${this.opacity * 1.8})`;
        context.fill();

        if (this.progress >= 1) {
          context.beginPath();
          context.arc(this.x2, this.y2, 2.5, 0, Math.PI * 2);
          context.fillStyle = `${this.color}${this.opacity * 2})`;
          context.fill();
        }
      }
    }

    const drawChips = (width, height) => {
      const chips = [
        { x: 0.12, y: 0.15, w: 0.1, h: 0.06 },
        { x: 0.7, y: 0.1, w: 0.14, h: 0.08 },
        { x: 0.4, y: 0.6, w: 0.12, h: 0.07 },
        { x: 0.08, y: 0.7, w: 0.09, h: 0.05 },
        { x: 0.78, y: 0.65, w: 0.11, h: 0.06 },
        { x: 0.55, y: 0.25, w: 0.08, h: 0.05 },
      ];

      chips.forEach((chip) => {
        const x = chip.x * width;
        const y = chip.y * height;
        const w = chip.w * width;
        const h = chip.h * height;

        ctx.strokeStyle = "rgba(0,200,140,0.25)";
        ctx.lineWidth = 1;
        ctx.strokeRect(x, y, w, h);
        ctx.fillStyle = "rgba(0,40,30,0.3)";
        ctx.fillRect(x, y, w, h);

        const pinCount = 4;
        const pinLen = 10;
        for (let i = 0; i < pinCount; i += 1) {
          const px = x + (w / (pinCount + 1)) * (i + 1);
          ctx.beginPath();
          ctx.moveTo(px, y);
          ctx.lineTo(px, y - pinLen);
          ctx.strokeStyle = "rgba(0,200,140,0.2)";
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(px, y + h);
          ctx.lineTo(px, y + h + pinLen);
          ctx.stroke();
        }

        const glow = ctx.createRadialGradient(x + w / 2, y + h / 2, 2, x + w / 2, y + h / 2, w * 0.8);
        glow.addColorStop(0, "rgba(0,255,160,0.06)");
        glow.addColorStop(1, "transparent");
        ctx.fillStyle = glow;
        ctx.fillRect(x - w * 0.3, y - h * 0.3, w * 1.6, h * 1.6);
      });
    };

    let particles = [];
    let streams = [];
    let traces = [];

    const init = (width, height) => {
      particles = Array.from({ length: 120 }, () => new BitParticle(width, height));
      streams = Array.from({ length: 28 }, () => new BinaryStream(width, height));
      traces = Array.from({ length: 40 }, () => new CircuitTrace(width, height));
    };

    const animate = () => {
      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = "#040810";
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = "rgba(0,150,100,0.04)";
      ctx.lineWidth = 0.5;
      for (let x = 0; x < width; x += GRID) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += GRID) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      traces.forEach((trace) => {
        trace.update();
        trace.draw(ctx);
      });

      drawChips(width, height);

      streams.forEach((stream) => {
        stream.update();
        stream.draw(ctx);
      });

      particles.forEach((particle) => {
        particle.update();
        particle.draw(ctx);
      });

      for (let y = 0; y < height; y += 3) {
        ctx.fillStyle = "rgba(0,0,0,0.06)";
        ctx.fillRect(0, y, width, 1);
      }

      const vig = ctx.createRadialGradient(width / 2, height / 2, height * 0.2, width / 2, height / 2, height * 0.9);
      vig.addColorStop(0, "transparent");
      vig.addColorStop(1, "rgba(2,6,14,0.82)");
      ctx.fillStyle = vig;
      ctx.fillRect(0, 0, width, height);

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
  }, []);

  return <canvas ref={canvasRef} className="chip-bg-canvas" />;
};

export default ChipBackground;
