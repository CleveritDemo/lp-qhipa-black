import { Bot, DatabaseZap, ShieldCheck } from "lucide-react";

const capabilities = [
  {
    title: "Agent Orchestrator",
    description:
      "Acts as the definitive interface for managing agent dynamics and AI workflows across your development workspace.",
    icon: Bot,
  },
  {
    title: "Context Governance",
    description:
      "Allows teams to set custom context rules and manage risk when deploying agentic AI inside real engineering flows.",
    icon: ShieldCheck,
  },
  {
    title: "Terminal-First Telemetry",
    description:
      "Captures prompts, commits, and LLM calls with local SQLite storage and zero cloud dependency required for specific developer metrics.",
    icon: DatabaseZap,
  },
];

export function StickyCapabilities() {
  return (
    <section
      id="capacidades"
      className="relative mx-auto w-full max-w-7xl scroll-mt-24 px-6 py-20 sm:px-10 lg:px-12"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary">
          Capacidades clave
        </p>
        <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-text-primary sm:text-5xl">
          Control, contexto y telemetría para equipos con agentes.
        </h2>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {capabilities.map(({ title, description, icon: Icon }, index) => (
          <article
            key={title}
            className="border-glow group rounded-[2rem] border border-border-subtle bg-canvas p-6 transition duration-300 [transform-style:preserve-3d] hover:scale-[1.025] hover:rotate-x-2 hover:-rotate-y-2 hover:border-border-active hover:bg-surface-subtle hover:shadow-2xl hover:shadow-black/40"
          >
            <div className="flex items-center justify-between">
              <span className="rounded-full border border-border-subtle bg-surface-elevated px-3 py-1 text-xs font-semibold text-text-muted">
                0{index + 1}
              </span>
              <Icon className="size-6 text-text-dim transition group-hover:text-primary" />
            </div>
            <h3 className="mt-8 text-2xl font-semibold tracking-[-0.03em] text-text-primary transition group-hover:text-primary">
              {title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-text-muted">{description}</p>
          </article>
        ))}
        </div>
    </section>
  );
}
