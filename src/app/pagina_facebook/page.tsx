"use client";
import { motion } from "framer-motion";
import { MessageCircle, BookIcon, MessageCircleCheck, Globe } from "lucide-react";

export default function PaginaFacebook() {
  const links = [
    {
      name: "SÍGUENOS EN FACEBOOK",
      url: "https://www.facebook.com/profile.php?id=61576431586635",
      icon: BookIcon,
      color: "text-[#1877F2]",
      bgHover: "hover:bg-[#1877F2]/10",
      borderHover: "hover:border-[#1877F2]/50"
    },
    {
      name: "ESCRÍBENOS POR WHATSAPP",
      url: "https://wa.me/525584266211",
      icon: MessageCircle,
      color: "text-[#25D366]",
      bgHover: "hover:bg-[#25D366]/10",
      borderHover: "hover:border-[#25D366]/50"
    },
    {
      name: "MENSAJE POR MESSENGER",
      url: "https://m.me/61576431586635",
      icon: MessageCircleCheck,
      color: "text-[#00B2FF]",
      bgHover: "hover:bg-[#00B2FF]/10",
      borderHover: "hover:border-[#00B2FF]/50"
    },
    {
      name: "VISITAR SITIO WEB",
      url: "/",
      icon: Globe,
      color: "text-fucsia-lab",
      bgHover: "hover:bg-fucsia-lab/10",
      borderHover: "hover:border-fucsia-lab/50"
    }
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Efecto de fondo: Cuadrícula y Resplandor (igual que en tu Hero) */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <div className="absolute left-1/2 top-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fucsia-lab/20 blur-[120px] pointer-events-none"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md flex flex-col items-center gap-8 z-10"
      >
        {/* Encabezado con Logo */}
        <div className="text-center">
          <h1 className="text-5xl font-black tracking-tighter leading-none mb-2">
            SINTAXIS<br />
            <span className="bg-gradient-to-r from-fucsia-lab via-violeta-lab to-naranja-lab bg-clip-text text-transparent">
              LAB
            </span>
            <span className="text-naranja-lab">_</span>
          </h1>
          <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest mt-4">
            [ terminal_de_enlaces.sh ]
          </p>
        </div>

        {/* Botones de Enlaces */}
        <div className="w-full flex flex-col gap-4">
          {links.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.url}
              target={link.url.startsWith("http") ? "_blank" : "_self"}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`flex items-center gap-4 bg-zinc-900/50 border border-white/10 ${link.bgHover} ${link.borderHover} p-4 rounded-xl transition-all group`}
            >
              <link.icon size={24} className={`${link.color} group-hover:scale-110 transition-transform shrink-0`} />
              <span className="font-mono font-bold text-sm text-white uppercase tracking-wider">
                {link.name}
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
