"use client";

import { useEffect, useRef } from "react";

// A 3D circuit field drawn on a 2D canvas: raised chips, copper-style traces with light pulses,
// and out-of-focus motes. No WebGL or extra dependency; pauses when off-screen.

type P = { x: number; z: number };
type Trace = { pts: P[]; cum: number[]; len: number; speed: number; phase: number; tail: number; sprite: number };
type Chip = { x: number; z: number; w: number; d: number; h: number };
type Mote = { x: number; y: number; z: number; r: number; drift: number; sprite: number; a: number };

const DEPTH = 64; // world repeats every DEPTH units along z
const HALF_W = 22;
const NEAR = 0.9;
const CAM_Y = 2.6;
const PITCH = 0.2;
const SCROLL_SPEED = 1.1;

const NAVY = "#011c3f";
const GLOWS = ["59,240,248", "0,190,213", "120,180,255"]; // cyan, teal, light blue

function rng(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function makeSprite(rgb: string) {
  const c = document.createElement("canvas");
  c.width = c.height = 64;
  const g = c.getContext("2d")!;
  const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  grad.addColorStop(0, "rgba(255,255,255,1)");
  grad.addColorStop(0.18, `rgba(${rgb},0.9)`);
  grad.addColorStop(0.5, `rgba(${rgb},0.25)`);
  grad.addColorStop(1, `rgba(${rgb},0)`);
  g.fillStyle = grad;
  g.fillRect(0, 0, 64, 64);
  return c;
}

function buildWorld(compact: boolean) {
  const rand = rng(20260);
  const traces: Trace[] = [];
  const count = compact ? 120 : 240;
  for (let i = 0; i < count; i++) {
    // denser towards the centre line, where the camera looks
    const r = rand() * 2 - 1;
    let x = Math.round(Math.sign(r) * Math.pow(Math.abs(r), 1.5) * HALF_W * 4) / 4;
    let z = rand() * DEPTH;
    const pts: P[] = [{ x, z }];
    const steps = 3 + Math.floor(rand() * 6);
    let bend = 0;
    for (let s = 0; s < steps; s++) {
      if (bend !== 0) {
        const d = 0.6 + rand() * 1.6;
        x += bend * d;
        z += d;
        bend = 0;
      } else if (rand() < 0.22) {
        x += (rand() < 0.5 ? -1 : 1) * (1 + rand() * 3);
      } else {
        z += 1 + rand() * 4.5;
        if (rand() < 0.55) bend = rand() < 0.5 ? -1 : 1;
      }
      pts.push({ x, z });
    }
    const cum = [0];
    for (let k = 1; k < pts.length; k++) {
      cum.push(cum[k - 1] + Math.hypot(pts[k].x - pts[k - 1].x, pts[k].z - pts[k - 1].z));
    }
    traces.push({
      pts,
      cum,
      len: cum[cum.length - 1],
      speed: 3 + rand() * 5,
      phase: rand() * 40,
      tail: 1.5 + rand() * 2.5,
      sprite: rand() < 0.65 ? 0 : rand() < 0.6 ? 1 : 2,
    });
  }

  const chips: Chip[] = [];
  for (let i = 0; i < (compact ? 18 : 34); i++) {
    const r = rand() * 2 - 1;
    chips.push({
      x: Math.sign(r) * Math.pow(Math.abs(r), 1.4) * HALF_W * 0.8,
      z: rand() * DEPTH,
      w: 0.7 + rand() * 1.6,
      d: 0.6 + rand() * 1.4,
      h: 0.08 + rand() * 0.16,
    });
  }

  const motes: Mote[] = [];
  for (let i = 0; i < (compact ? 22 : 42); i++) {
    motes.push({
      x: (rand() * 2 - 1) * 16,
      y: 0.4 + rand() * 4.5,
      z: 2 + rand() * (DEPTH * 0.6),
      r: 0.06 + rand() * 0.22,
      drift: 0.2 + rand() * 0.5,
      sprite: rand() < 0.5 ? 0 : rand() < 0.5 ? 1 : 2,
      a: 0.25 + rand() * 0.5,
    });
  }
  return { traces, chips, motes };
}

export default function HeroScene({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sprites = GLOWS.map(makeSprite);
    let world = buildWorld(window.innerWidth < 768);

    let W = 0;
    let H = 0;
    let f = 0;
    let horizon = 0;
    const cosP = Math.cos(PITCH);
    const sinP = Math.sin(PITCH);

    const cam = { x: 0, y: CAM_Y, tx: 0, ty: CAM_Y };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = rect.width;
      H = rect.height;
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      f = Math.max(W, H) * 0.62;
      horizon = H * (W < 768 ? 0.5 : 0.46);
      world = buildWorld(W < 768);
    };

    // world (x, y, z relative to camera) -> screen
    const project = (x: number, y: number, z: number) => {
      const dx = x - cam.x;
      const dy = y - cam.y;
      const yp = dy * cosP + z * sinP;
      const zp = z * cosP - dy * sinP;
      if (zp < 0.05) return null;
      const s = f / zp;
      return { x: W / 2 + dx * s, y: horizon + f * Math.tan(PITCH) - yp * s, s };
    };

    const fog = (z: number) => {
      const far = Math.max(0, 1 - z / (DEPTH * 0.95));
      const near = Math.min(1, (z - NEAR) / 2);
      return Math.max(0, Math.pow(far, 1.3) * near);
    };

    const drawBackground = () => {
      ctx.fillStyle = NAVY;
      ctx.fillRect(0, 0, W, H);
      const hy = horizon;
      const glow = ctx.createRadialGradient(W * 0.62, hy, 0, W * 0.62, hy, Math.max(W, H) * 0.7);
      glow.addColorStop(0, "rgba(11,95,208,0.55)");
      glow.addColorStop(0.35, "rgba(11,95,208,0.18)");
      glow.addColorStop(1, "rgba(1,28,63,0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, W, H);
      const line = ctx.createLinearGradient(0, hy - 40, 0, hy + 70);
      line.addColorStop(0, "rgba(59,240,248,0)");
      line.addColorStop(0.36, "rgba(59,240,248,0.12)");
      line.addColorStop(1, "rgba(59,240,248,0)");
      ctx.fillStyle = line;
      ctx.fillRect(0, hy - 40, W, 110);
    };

    const segment = (ax: number, az: number, bx: number, bz: number, color: string, width: number, alphaMul: number) => {
      if (az < NEAR && bz < NEAR) return;
      if (az < NEAR) {
        const t = (NEAR - az) / (bz - az);
        ax += (bx - ax) * t;
        az = NEAR;
      } else if (bz < NEAR) {
        const t = (NEAR - bz) / (az - bz);
        bx += (ax - bx) * t;
        bz = NEAR;
      }
      const a = project(ax, 0, az);
      const b = project(bx, 0, bz);
      if (!a || !b) return;
      const alpha = fog((az + bz) / 2) * alphaMul;
      if (alpha < 0.01) return;
      ctx.strokeStyle = `rgba(${color},${alpha})`;
      ctx.lineWidth = Math.max(0.6, width * ((a.s + b.s) / 2));
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
    };

    const drawChip = (c: Chip, z: number) => {
      if (z < NEAR || z > DEPTH) return;
      const alpha = fog(z + c.d / 2);
      if (alpha < 0.02) return;
      const x0 = c.x - c.w / 2;
      const x1 = c.x + c.w / 2;
      const z1 = z + c.d;
      const top = [project(x0, c.h, z), project(x1, c.h, z), project(x1, c.h, z1), project(x0, c.h, z1)];
      const base0 = project(x0, 0, z);
      const base1 = project(x1, 0, z);
      if (top.some((p) => !p) || !base0 || !base1) return;
      const [a, b, cc, d] = top as { x: number; y: number; s: number }[];
      // front face
      ctx.fillStyle = `rgba(2,20,48,${0.95 * alpha})`;
      ctx.beginPath();
      ctx.moveTo(base0.x, base0.y);
      ctx.lineTo(base1.x, base1.y);
      ctx.lineTo(b.x, b.y);
      ctx.lineTo(a.x, a.y);
      ctx.closePath();
      ctx.fill();
      // top face
      ctx.fillStyle = `rgba(10,46,96,${0.95 * alpha})`;
      ctx.strokeStyle = `rgba(59,240,248,${0.35 * alpha})`;
      ctx.lineWidth = Math.max(0.5, 0.012 * a.s);
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.lineTo(cc.x, cc.y);
      ctx.lineTo(d.x, d.y);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      // small inner die
      const inset = (p: { x: number; y: number }, q: { x: number; y: number }, t: number) => ({
        x: p.x + (q.x - p.x) * t,
        y: p.y + (q.y - p.y) * t,
      });
      const ia = inset(a, cc, 0.3);
      const ic = inset(cc, a, 0.3);
      const ib = inset(b, d, 0.3);
      const id = inset(d, b, 0.3);
      ctx.fillStyle = `rgba(11,95,208,${0.35 * alpha})`;
      ctx.beginPath();
      ctx.moveTo(ia.x, ia.y);
      ctx.lineTo(ib.x, ib.y);
      ctx.lineTo(ic.x, ic.y);
      ctx.lineTo(id.x, id.y);
      ctx.closePath();
      ctx.fill();
    };

    const glowAt = (x: number, y: number, z: number, size: number, sprite: number, alpha: number) => {
      const p = project(x, y, z);
      if (!p) return;
      const r = size * p.s;
      if (r < 0.4) return;
      ctx.globalAlpha = alpha;
      ctx.drawImage(sprites[sprite], p.x - r, p.y - r, r * 2, r * 2);
      ctx.globalAlpha = 1;
    };

    const pointOn = (t: Trace, d: number) => {
      let k = 1;
      while (k < t.cum.length - 1 && t.cum[k] < d) k++;
      const a = t.pts[k - 1];
      const b = t.pts[k];
      const seg = t.cum[k] - t.cum[k - 1] || 1;
      const u = Math.min(1, Math.max(0, (d - t.cum[k - 1]) / seg));
      return { x: a.x + (b.x - a.x) * u, z: a.z + (b.z - a.z) * u };
    };

    const render = (time: number) => {
      const t = time / 1000;
      cam.x += (cam.tx - cam.x) * 0.04;
      cam.y += (cam.ty - cam.y) * 0.04;
      const scroll = reduced ? 0 : (t * SCROLL_SPEED) % DEPTH;

      drawBackground();

      // traces + end pads
      for (const tr of world.traces) {
        for (let copy = 0; copy < 2; copy++) {
          const off = copy * DEPTH - scroll;
          if (tr.pts[0].z + off > DEPTH && tr.pts[tr.pts.length - 1].z + off > DEPTH) continue;
          for (let k = 1; k < tr.pts.length; k++) {
            const a = tr.pts[k - 1];
            const b = tr.pts[k];
            segment(a.x, a.z + off, b.x, b.z + off, "78,156,250", 0.008, 0.8);
          }
          const end = tr.pts[tr.pts.length - 1];
          const ez = end.z + off;
          if (ez > NEAR) {
            const p = project(end.x, 0, ez);
            const a = fog(ez);
            if (p && a > 0.02) {
              ctx.fillStyle = `rgba(120,180,255,${0.7 * a})`;
              ctx.beginPath();
              ctx.ellipse(p.x, p.y, 0.06 * p.s, 0.06 * p.s * Math.sin(PITCH + 0.25), 0, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      }

      // chips, far to near
      const visibleChips: { c: Chip; z: number }[] = [];
      for (const c of world.chips) {
        for (let copy = 0; copy < 2; copy++) visibleChips.push({ c, z: c.z + copy * DEPTH - scroll });
      }
      visibleChips.sort((a, b) => b.z - a.z);
      for (const v of visibleChips) drawChip(v.c, v.z);

      // light pulses
      ctx.globalCompositeOperation = "lighter";
      for (const tr of world.traces) {
        const cycle = tr.len + 14;
        const head = reduced ? tr.phase % cycle : (t * tr.speed + tr.phase) % cycle;
        if (head > tr.len + tr.tail) continue;
        const rgb = GLOWS[tr.sprite];
        for (let copy = 0; copy < 2; copy++) {
          const off = copy * DEPTH - scroll;
          const steps = 6;
          for (let s = 0; s < steps; s++) {
            const d0 = Math.min(tr.len, Math.max(0, head - tr.tail * ((s + 1) / steps)));
            const d1 = Math.min(tr.len, Math.max(0, head - tr.tail * (s / steps)));
            if (d1 - d0 < 0.001) continue;
            const p0 = pointOn(tr, d0);
            const p1 = pointOn(tr, d1);
            segment(p0.x, p0.z + off, p1.x, p1.z + off, rgb, 0.022, 0.9 * (1 - s / steps));
          }
          if (head <= tr.len) {
            const h = pointOn(tr, head);
            const hz = h.z + off;
            if (hz > NEAR) glowAt(h.x, 0.02, hz, 0.35, tr.sprite, fog(hz));
          }
        }
      }

      // floating motes (bokeh)
      for (const m of world.motes) {
        const span = DEPTH * 0.6;
        let z = m.z - (reduced ? 0 : t * m.drift * 1.6);
        z = ((z % span) + span) % span + 1.5;
        const y = m.y + (reduced ? 0 : Math.sin(t * 0.6 + m.x) * 0.15);
        const blur = z < 6 ? 2.6 : 1.4;
        glowAt(m.x, y, z, m.r * blur, m.sprite, m.a * Math.min(1, fog(z) * 1.6) * 0.6);
      }
      ctx.globalCompositeOperation = "source-over";
    };

    let raf = 0;
    let running = false;
    const loop = (time: number) => {
      render(time);
      raf = requestAnimationFrame(loop);
    };
    const start = () => {
      if (running || reduced) return;
      running = true;
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    resize();
    render(performance.now());

    const ro = new ResizeObserver(() => {
      resize();
      render(performance.now());
    });
    ro.observe(canvas);

    const io = new IntersectionObserver(([entry]) => (entry.isIntersecting ? start() : stop()));
    io.observe(canvas);

    const onVisibility = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVisibility);

    const onPointer = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      cam.tx = (e.clientX / window.innerWidth - 0.5) * 3;
      cam.ty = CAM_Y + (e.clientY / window.innerHeight - 0.5) * -0.6;
    };
    window.addEventListener("pointermove", onPointer, { passive: true });

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pointermove", onPointer);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className={`block h-full w-full ${className}`} />;
}
