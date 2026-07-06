"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send } from "lucide-react";
import ScrambleText from "@/components/ScrambleText";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    // Extraer los datos del formulario
    const formData = new FormData(form);
    const nombre = formData.get("nombre");
    const contacto = formData.get("contacto");
    const mensaje = formData.get("mensaje");

    // Formato LIMPIO y PROFESIONAL para WhatsApp
    const rawMessage =
      `*SINTAXIS LAB* | 🚀\n` +
      `*Nuevo contacto desde la web*\n\n` +
      `• *Cliente:* ${nombre}\n` +
      `• *Dato:* ${contacto}\n\n` +
      `*Consulta:*\n` +
      `"${mensaje}"\n\n` +
      `_Enviado desde el terminal web_ 💻`;

    const text = encodeURIComponent(rawMessage);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=525584266211&text=${text}`;

    // Intentamos abrir la ventana de inmediato para evitar el bloqueo del navegador
    let whatsappWindow: Window | null = null;
    try {
      whatsappWindow = window.open(whatsappUrl, "_blank");
    } catch (err) {
      console.error("No se pudo abrir la pestaña de WhatsApp directamente:", err);
    }

    setIsSubmitting(true);
    setLogs(["> INICIANDO CONEXIÓN CON SERVIDOR SINTAXIS_LAB..."]);

    // Simular logs secuenciales de compilación de terminal
    setTimeout(() => {
      setLogs((prev) => [...prev, `> PROCESANDO REGISTRO: "${nombre?.toString().toUpperCase()}"... [OK]`]);
    }, 600);

    setTimeout(() => {
      setLogs((prev) => [...prev, "> ESTABLECIENDO CONEXIÓN P2P WHATSAPP... [OK]"]);
    }, 1200);

    setTimeout(() => {
      setLogs((prev) => [
        ...prev, 
        whatsappWindow 
          ? "> MENSAJE ENVIADO A LA NUEVA PESTAÑA. COMPLETANDO PROCESO..." 
          : "> VENTANA EMERGENTE BLOQUEADA. REDIRECCIONANDO EN ESTA PESTAÑA..."
      ]);
    }, 1800);

    setTimeout(() => {
      // Si la ventana fue bloqueada, redireccionar la ventana actual
      if (!whatsappWindow) {
        window.location.href = whatsappUrl;
      }

      // Reiniciar estados y limpiar formulario
      form.reset();
      setIsSubmitting(false);
      setLogs([]);
    }, 2400);
  };

  return (
    <section id="contacto" className="py-16 md:py-24 px-4 sm:px-6 max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-black font-mono mb-2 italic tracking-tighter text-center"
      >
        <ScrambleText text="04. INICIAR_COMUNICACIÓN" />
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-zinc-500 font-mono text-sm text-center mb-12"
      >
        // Estamos listos para ayudarte con tu proyecto o equipo.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#0a0a0a] border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl crt-effect"
      >
        {/* Barra de la ventana */}
        <div className="bg-zinc-900/80 px-4 py-3 flex items-center justify-between border-b border-zinc-800">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">contacto.sh</span>
        </div>
        <div className="p-6 md:p-10">
          {/* FORMULARIO U OVERLAY DE TERMINAL DE LOGS */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              {isSubmitting ? (
                <motion.div
                  key="console"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  className="bg-black border border-zinc-800 rounded-2xl p-6 md:p-10 min-h-[380px] flex flex-col justify-between font-mono text-left shadow-2xl relative overflow-hidden"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 border-b border-zinc-800 pb-3 text-zinc-600 text-xs">
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 animate-ping shadow-[0_0_8px_rgba(234,179,8,0.5)]" />
                      <span>SINTAXIS_LAB TRANSMISSION PROTOCOL // RUNNING</span>
                    </div>
                    <div className="space-y-2 text-xs md:text-sm">
                      {logs.map((log, idx) => (
                        <p key={idx} className={log.includes("[OK]") ? "text-green-400 font-bold" : "text-zinc-300"}>
                          {log}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-600 text-[10px] border-t border-zinc-900 pt-3">
                    <span>SYSTEM_STATUS: REDIRECTING_TO_WHATSAPP</span>
                    <span className="w-1.5 h-3 bg-zinc-600 animate-pulse" />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="flex items-center gap-2 mb-8 border-l-2 border-fucsia-lab pl-4">
                    <h3 className="font-bold font-mono text-xl uppercase text-white">{`> NUEVO_MENSAJE`}</h3>
                  </div>

                  <form className="space-y-8" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-mono font-bold text-zinc-500 ml-1 uppercase tracking-wider">¿Cómo te llamas?</label>
                        <input
                          type="text"
                          name="nombre"
                          required
                          placeholder="Tu nombre completo"
                          className="bg-black/40 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-fucsia-lab focus:ring-1 focus:ring-fucsia-lab transition-all text-white font-mono text-sm placeholder:text-zinc-700"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-mono font-bold text-zinc-500 ml-1 uppercase tracking-wider">Teléfono o Correo</label>
                        <input
                          type="text"
                          name="contacto"
                          required
                          placeholder="Donde podamos contactarte"
                          className="bg-black/40 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-fucsia-lab focus:ring-1 focus:ring-fucsia-lab transition-all text-white font-mono text-sm placeholder:text-zinc-700"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-mono font-bold text-zinc-500 ml-1 uppercase tracking-wider">¿En qué te podemos ayudar?</label>
                      <textarea
                        name="mensaje"
                        rows={4}
                        required
                        placeholder="Cuéntanos: ¿Buscas una página web? ¿Se descompuso tu compu? ¿Quieres playeras?"
                        className="bg-black/40 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-fucsia-lab focus:ring-1 focus:ring-fucsia-lab transition-all text-white font-mono text-sm resize-none placeholder:text-zinc-700"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-fucsia-lab/10 border-2 border-fucsia-lab text-fucsia-lab hover:bg-fucsia-lab hover:text-white font-black py-4 rounded-xl transition-all flex items-center justify-center gap-3 uppercase tracking-widest shadow-[0_0_15px_rgba(230,28,140,0.1)] hover:shadow-[0_0_25px_rgba(230,28,140,0.4)] font-mono"
                    >
                      <Send size={20} />
                      ENVIAR_MENSAJE
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
