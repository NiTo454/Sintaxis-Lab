import React from "react";
// Verifica que los nombres coincidan exactamente con estos:
import { 
  Mail, 
  Phone, 
  MapPin, 
  MonitorSmartphone, 
  
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="bg-[#000000] border-t border-[#A3249E]/30 pt-16 pb-8 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        
        {/* SECCIÓN 1: Identidad */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <MonitorSmartphone className="text-[#E61C8C]" size={28} />
            <span className="font-black tracking-tighter text-2xl bg-gradient-to-r from-[#E61C8C] via-[#A3249E] to-[#FF5C33] text-transparent bg-clip-text">
              SINTAXIS_LAB
            </span>
          </div>
          <p className="text-zinc-400 text-sm leading-relaxed pr-4">
            Soluciones tecnológicas integrales. Elevamos tu presencia digital 
            y mantenemos tu equipo operando al máximo rendimiento.
          </p>
        </div>

        {/* SECCIÓN 2: Enlaces de Navegación */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Servicios</h3>
          <nav className="flex flex-col gap-3">
            <a href="#desarrollo" className="text-zinc-400 hover:text-[#FF5C33] hover:translate-x-1 transition-all text-sm w-fit">
              Páginas Web
            </a>
            <a href="#diseno" className="text-zinc-400 hover:text-[#A3249E] hover:translate-x-1 transition-all text-sm w-fit">
              Reparación de PC
            </a>
            <a href="#auditoria" className="text-zinc-400 hover:text-[#E61C8C] hover:translate-x-1 transition-all text-sm w-fit">
              Publicidad e Impresión
            </a>
          </nav>
        </div>

        {/* SECCIÓN 3: Contacto y Social Media */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Contáctanos</h3>
          
          <div className="space-y-3">
            <a href="tel:+521234567890" className="flex items-center gap-3 text-zinc-400 group cursor-pointer w-fit">
              <Phone size={18} className="group-hover:text-[#FF5C33] transition-colors" />
              <span className="text-sm group-hover:text-white transition-colors">+52 55 8426 6211 </span>
            </a>
            
            <a href="mailto:contacto@sintaxislab.com" className="flex items-center gap-3 text-zinc-400 group cursor-pointer w-fit">
              <Mail size={18} className="group-hover:text-[#A3249E] transition-colors" />
              <span className="text-sm group-hover:text-white transition-colors">contacto@sintaxislab.com</span>
            </a>

            <div className="flex items-center gap-3 text-zinc-400 w-fit">
              <MapPin size={18} className="text-[#E61C8C]" />
              <span className="text-sm">Atención en tu zona</span>
            </div>
          </div>

          <div className="flex gap-4 mt-2">
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
        <p>© {currentYear} <span className="font-semibold">SINTAXIS_LAB</span>. Todos los derechos reservados.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-zinc-300 transition-colors">Aviso de Privacidad</a>
          <a href="#" className="hover:text-zinc-300 transition-colors">Términos y Condiciones</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;