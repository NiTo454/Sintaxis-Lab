import { Terminal, Cpu, Layout } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black p-6 text-center">
      {/* Glow Effect de fondo */}
      <div className="absolute top-0 -z-10 h-full w-full bg-[radial-gradient(#e61c8c33_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <h1 className="text-6xl font-black tracking-tighter">
        SINTAXIS <span className="bg-gradient-to-r from-fucsia-lab via-violeta-lab to-naranja-lab bg-clip-text text-transparent">LAB</span>
      </h1>

      <p className="mt-4 text-zinc-500 font-mono">
        Software Development & Tech Solutions
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
        <div className="p-6 border border-zinc-800 rounded-2xl bg-zinc-900/50 hover:border-fucsia-lab/50 transition-colors">
          <Layout className="text-fucsia-lab mb-3 mx-auto" />
          <h3 className="font-bold">Web Design</h3>
        </div>
        <div className="p-6 border border-zinc-800 rounded-2xl bg-zinc-900/50 hover:border-violeta-lab/50 transition-colors">
          <Terminal className="text-violeta-lab mb-3 mx-auto" />
          <h3 className="font-bold">Systems</h3>
        </div>
        <div className="p-6 border border-zinc-800 rounded-2xl bg-zinc-900/50 hover:border-naranja-lab/50 transition-colors">
          <Cpu className="text-naranja-lab mb-3 mx-auto" />
          <h3 className="font-bold">Hardware</h3>
        </div>
      </div>
    </main>
  );
}
