"use client";
import { motion } from "framer-motion";
import { MessageCircle, BookIcon, MessageCircleCheck , Send } from "lucide-react";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Extraer los datos del formulario
    const formData = new FormData(e.currentTarget);
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

    // Abrir WhatsApp en una nueva pestaña
    window.open(whatsappUrl, "_blank");

    // Limpiar el formulario automáticamente
    e.currentTarget.reset();
  };

  return (
    <section id="contacto" className="py-16 md:py-24 px-4 sm:px-6 max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-black font-mono mb-2 italic tracking-tighter text-center"
      >
        03. INICIAR_COMUNICACIÓN
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
        className="bg-[#0a0a0a] border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl"
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
          {/* SECCIÓN DE CONTACTO RÁPIDO */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <a
              href="https://wa.me/525584266211"
              target="_blank"
              className="flex items-center justify-center gap-4 bg-[#25D366]/5 border border-[#25D366]/20 hover:bg-[#25D366]/10 hover:border-[#25D366]/50 py-4 rounded-xl transition-all group"
            >
              <MessageCircle size={28} className="text-[#25D366] group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <p className="text-[10px] uppercase font-mono font-bold text-zinc-500">Escríbenos por</p>
                <p className="font-black text-lg text-white group-hover:text-[#25D366] transition-colors">WHATSAPP</p>
              </div>
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61576431586635"
              target="_blank"
              className="flex items-center justify-center gap-4 bg-[#1877F2]/5 border border-[#1877F2]/20 hover:bg-[#1877F2]/10 hover:border-[#1877F2]/50 py-4 rounded-xl transition-all group"
            >
              <BookIcon size={28} className="text-[#1877F2] group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <p className="text-[10px] uppercase font-mono font-bold text-zinc-500">Visítanos en</p>
                <p className="font-black text-lg text-white group-hover:text-[#1877F2] transition-colors">FACEBOOK</p>
              </div>
            </a>
            <a
              href="https://m.me/61576431586635"
              target="_blank"
              className="flex items-center justify-center gap-4 bg-[#00B2FF]/5 border border-[#00B2FF]/20 hover:bg-[#00B2FF]/10 hover:border-[#00B2FF]/50 py-4 rounded-xl transition-all group"
            >
              <MessageCircleCheck size={28} className="text-[#00B2FF] group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <p className="text-[10px] uppercase font-mono font-bold text-zinc-500">Escríbenos por</p>
                <p className="font-black text-lg text-white group-hover:text-[#00B2FF] transition-colors">MESSENGER</p>
              </div>
            </a>
          </div>

          {/* FORMULARIO */}
          <div className="relative">
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
          </div>
        </div>
      </motion.div>
    </section>
  );
}
