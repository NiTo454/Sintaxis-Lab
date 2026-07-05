"use client";
import dynamic from "next/dynamic";

const CodeParticlesBackground = dynamic(
  () => import("./CodeParticlesBackground"),
  { ssr: false }
);

export default function CodeParticlesWrapper() {
  return <CodeParticlesBackground />;
}
