// Neural network-style particle background with mouse interaction
(function () {
  const canvas = document.createElement('canvas');
  canvas.id = 'bg-canvas';
  canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;z-index:-1;pointer-events:none;';
  document.body.prepend(canvas);
  const ctx = canvas.getContext('2d');

  let w, h;
  const particles = [];
  const ripples = [];
  const PARTICLE_COUNT = 60;
  const CONNECTION_DIST = 150;
  const MOUSE_ATTRACT_DIST = 200;
  const mouse = { x: -1000, y: -1000 };

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.vx = (Math.random() - 0.5) * 0.6;
      this.vy = (Math.random() - 0.5) * 0.6;
      this.r = Math.random() * 2 + 1;
      this.baseAlpha = Math.random() * 0.3 + 0.1;
    }
    update() {
      // Mouse attraction
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < MOUSE_ATTRACT_DIST && dist > 0) {
        const force = (MOUSE_ATTRACT_DIST - dist) / MOUSE_ATTRACT_DIST * 0.02;
        this.vx += dx / dist * force;
        this.vy += dy / dist * force;
      }

      // Damping
      this.vx *= 0.99;
      this.vy *= 0.99;

      this.x += this.vx;
      this.y += this.vy;

      // Wrap around
      if (this.x < -10) this.x = w + 10;
      if (this.x > w + 10) this.x = -10;
      if (this.y < -10) this.y = h + 10;
      if (this.y > h + 10) this.y = -10;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(100, 140, 200, ${this.baseAlpha})`;
      ctx.fill();
    }
  }

  class Ripple {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.r = 0;
      this.maxR = 120;
      this.alpha = 0.5;
      this.speed = 3;
    }
    update() {
      this.r += this.speed;
      this.alpha = 0.5 * (1 - this.r / this.maxR);
      return this.r < this.maxR;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(100, 180, 255, ${this.alpha})`;
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  }

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONNECTION_DIST) {
          const alpha = (1 - dist / CONNECTION_DIST) * 0.12;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(100, 140, 200, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    // Mouse connections
    for (let i = 0; i < particles.length; i++) {
      const dx = mouse.x - particles[i].x;
      const dy = mouse.y - particles[i].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < MOUSE_ATTRACT_DIST) {
        const alpha = (1 - dist / MOUSE_ATTRACT_DIST) * 0.25;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.strokeStyle = `rgba(120, 180, 255, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, w, h);

    particles.forEach(p => { p.update(); p.draw(); });
    drawConnections();

    for (let i = ripples.length - 1; i >= 0; i--) {
      if (!ripples[i].update()) {
        ripples.splice(i, 1);
      } else {
        ripples[i].draw();
      }
    }

    requestAnimationFrame(animate);
  }

  function init() {
    resize();
    particles.length = 0;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle());
    }
  }

  window.addEventListener('resize', () => { resize(); });
  document.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });
  document.addEventListener('mouseleave', () => { mouse.x = -1000; mouse.y = -1000; });
  document.addEventListener('click', e => { ripples.push(new Ripple(e.clientX, e.clientY)); });

  init();
  animate();
})();
