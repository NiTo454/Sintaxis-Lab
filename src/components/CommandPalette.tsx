"use client";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<string[]>([
    "SINTAXIS_LAB Command Console [Versión 1.0.0]",
    "Escribe '/help' para ver una lista de comandos disponibles.",
    ""
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Escuchar eventos de teclado para abrir y cerrar con Ctrl+K o Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      // No activar la consola si el usuario está escribiendo en campos de formulario
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      ) {
        if (isOpen && e.key === "Escape") {
          setIsOpen(false);
        }
        return;
      }

      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Escuchar el evento personalizado para alternar la visibilidad de la consola
  useEffect(() => {
    const handleToggle = () => {
      setIsOpen((prev) => !prev);
    };
    window.addEventListener("toggle-command-palette", handleToggle);
    return () => window.removeEventListener("toggle-command-palette", handleToggle);
  }, []);

  // Forzar foco en la caja de texto de comandos al abrirse
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  // Hacer scroll automático al final de los logs de la consola
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let response = "";
    let shouldClose = false;

    if (trimmed === "/help") {
      response = 
        "UTILIDADES DE CONSOLA:\n" +
        "  /servicios   - Desplazar a la sección de Servicios\n" +
        "  /proyectos   - Desplazar a la sección de Proyectos\n" +
        "  /enlaces     - Desplazar a la sección de Redes y Enlaces\n" +
        "  /contacto    - Desplazar a la sección de Contacto\n" +
        "  /clear       - Limpiar el historial de la terminal\n" +
        "  /exit        - Cerrar consola de comandos";
    } else if (trimmed === "/clear") {
      setHistory([]);
      setInputVal("");
      return;
    } else if (trimmed === "/exit") {
      shouldClose = true;
    } else if (trimmed === "/servicios") {
      shouldClose = true;
      document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" });
    } else if (trimmed === "/proyectos") {
      shouldClose = true;
      document.getElementById("proyectos")?.scrollIntoView({ behavior: "smooth" });
    } else if (trimmed === "/enlaces") {
      shouldClose = true;
      document.getElementById("enlaces")?.scrollIntoView({ behavior: "smooth" });
    } else if (trimmed === "/contacto") {
      shouldClose = true;
      document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
    } else if (trimmed === "") {
      // Presionó enter vacío
    } else {
      response = `Command not found: '${trimmed}'. Escribe '/help' para ver utilidades.`;
    }

    setHistory((prev) => [
      ...prev,
      `sintaxis@lab:~$ ${cmd}`,
      ...(response ? [response] : []),
      ""
    ]);

    setInputVal("");

    if (shouldClose) {
      setTimeout(() => {
        setIsOpen(false);
      }, 100);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(inputVal);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
          {/* Fondo del modal */}
          <div className="absolute inset-0" onClick={() => setIsOpen(false)} />

          {/* Consola */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="w-full max-w-xl bg-black border border-[#A3249E]/40 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(163,36,158,0.2)] font-mono z-10 crt-effect"
          >
            {/* Cabecera */}
            <div className="bg-zinc-950 px-4 py-3 flex items-center justify-between border-b border-zinc-900 select-none">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={() => setIsOpen(false)} />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-[10px] text-zinc-500 tracking-wider">sintaxis-console.sh</span>
            </div>

            {/* Historial */}
            <div className="p-5 max-h-[280px] overflow-y-auto text-left text-xs md:text-sm text-zinc-300 space-y-2">
              {history.map((line, idx) => (
                <div key={idx} className="whitespace-pre-wrap leading-relaxed">
                  {line.startsWith("sintaxis@lab:~$") ? (
                    <span>
                      <span className="text-[#FF5C33] font-bold">sintaxis@lab</span>
                      <span className="text-zinc-600">:</span>
                      <span className="text-zinc-500">~$</span> {line.replace("sintaxis@lab:~$", "")}
                    </span>
                  ) : line.includes("UTILIDADES DE CONSOLA:") ? (
                    <span className="text-fucsia-lab font-bold">{line}</span>
                  ) : (
                    <span>{line}</span>
                  )}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Entrada */}
            <form onSubmit={handleFormSubmit} className="bg-zinc-950 border-t border-zinc-900 px-5 py-4 flex items-center gap-2">
              <span className="text-[#FF5C33] font-bold text-xs shrink-0">sintaxis@lab</span>
              <span className="text-zinc-600 text-xs shrink-0">:</span>
              <span className="text-zinc-500 text-xs shrink-0">~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Escribe un comando... (ej: /help)"
                className="bg-transparent border-none outline-none focus:ring-0 w-full text-white text-xs md:text-sm placeholder:text-zinc-700"
              />
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
