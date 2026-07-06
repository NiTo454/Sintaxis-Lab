"use client";
import { useEffect, useRef } from "react";

// Símbolos y fragmentos de código dinámicos para el fondo
const CODE_SYMBOLS = [
  // Símbolos de código común
  "{ }", "[ ]", "=>", "++", "&&", "||", "===", ";",
  // Palabras clave y sentencias
  "const", "async", "await", "import", "export", "interface", "npm run dev",
  "useState(null)", "console.log('lab')", "git commit -m 'feat'",
  "SELECT * FROM db", "return <Layout />", "window.open(url)",
  "docker-compose up", "api.get('/services')", "new Promise((resolve) => {})",
  "<AnimatePresence>", "systemctl restart nginx", "const handler = async () => {}",
  "map((item) => item.id)", "npm install next", "class SintaxisLab extends React",
  "const [data, setData] = useState()", "useEffect(() => {}, [])", "npm run build",
  "git push origin main", "chmod +x script.sh", "curl -X POST https://api",
  "db.users.findIndex()", "sudo systemctl status nginx", "cat .env.local",
  "grep -rnw './src'", "docker ps -a", "ssh -i keys.pem root@server",
  "ping -c 4 8.8.8.8", "kill -9 PID", "chmod 755 config.json"
];

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  text: string;
  isText: boolean;
  color: string;
}

export default function CodeParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    
    // Configuración adaptativa según el tamaño de pantalla
    let isMobile = false;
    let maxDistance = 105; // Distancia máxima para dibujar líneas de conexión
    let particleCount = 140;

    const themeColors = [
      "rgba(230, 28, 140",  // Fucsia Lab (#E61C8C)
      "rgba(255, 92, 51",   // Naranja Lab (#FF5C33)
      "rgba(163, 36, 158"   // Violeta Lab (#A3249E)
    ];

    const resizeCanvas = () => {
      isMobile = window.innerWidth < 768;
      particleCount = isMobile ? 55 : 140;
      maxDistance = isMobile ? 70 : 105;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);

      // Re-inicializar partículas al redimensionar si el número cambió significativamente
      if (particles.length === 0 || Math.abs(particles.length - particleCount) > 10) {
        initParticles();
      }
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        const isText = Math.random() > 0.45; // 55% son textos/símbolos, 45% puntos
        const text = CODE_SYMBOLS[Math.floor(Math.random() * CODE_SYMBOLS.length)];
        const color = themeColors[Math.floor(Math.random() * themeColors.length)];

        particles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.35, // Movimiento lento y elegante
          vy: (Math.random() - 0.5) * 0.35,
          size: isText ? Math.floor(Math.random() * 5) + 9 : Math.random() * 1.8 + 1, // Tamaño de fuente o diámetro del punto
          alpha: Math.random() * 0.28 + 0.08, // Opacidad base ultra suave para no saturar
          text,
          isText,
          color
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // 1. Dibujar líneas de conexión primero para que queden de fondo
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.1; // Transición de línea muy sutil
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            
            // Gradiente entre las dos partículas
            const grad = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
            grad.addColorStop(0, `${p1.color}, ${alpha})`);
            grad.addColorStop(1, `${p2.color}, ${alpha})`);
            
            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.45;
            ctx.stroke();
          }
        }

        // Conectar también con el mouse si está activo
        if (mouseRef.current.active) {
          const dx = p1.x - mouseRef.current.x;
          const dy = p1.y - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const mouseMaxDist = isMobile ? 90 : 150;

          if (dist < mouseMaxDist) {
            const alpha = (1 - dist / mouseMaxDist) * 0.15; // Más marcado cerca del mouse
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
            ctx.strokeStyle = `${p1.color}, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // 2. Dibujar y actualizar partículas
      particles.forEach((p) => {
        // Actualizar posiciones
        p.x += p.vx;
        p.y += p.vy;

        // Rebote en bordes con pequeño margen
        const margin = 20;
        if (p.x < -margin) p.x = window.innerWidth + margin;
        if (p.x > window.innerWidth + margin) p.x = -margin;
        if (p.y < -margin) p.y = window.innerHeight + margin;
        if (p.y > window.innerHeight + margin) p.y = -margin;

        // Interacción con el mouse (Repulsión sutil)
        if (mouseRef.current.active) {
          const dx = p.x - mouseRef.current.x;
          const dy = p.y - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const repelRadius = 120;

          if (dist < repelRadius) {
            const force = (repelRadius - dist) / repelRadius;
            const angle = Math.atan2(dy, dx);
            const repelStrength = 0.4;

            p.x += Math.cos(angle) * force * repelStrength;
            p.y += Math.sin(angle) * force * repelStrength;
          }
        }

        // Renderizar partícula
        ctx.fillStyle = `${p.color}, ${p.alpha})`;

        if (p.isText) {
          ctx.font = `bold ${p.size}px var(--font-mono), monospace`;
          ctx.fillText(p.text, p.x, p.y);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    // Registrar manejadores
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    draw();

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current.x = e.touches[0].clientX;
        mouseRef.current.y = e.touches[0].clientY;
        mouseRef.current.active = true;
      }
    };

    const handleTouchEnd = () => {
      mouseRef.current.active = false;
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);

    // Limpieza
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none w-full h-full block bg-transparent"
    />
  );
}
