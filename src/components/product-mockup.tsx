"use client";

import Image from "next/image";
import {
  BarChart3,
  Bot,
  Brain,
  Box,
  File,
  FileText,
  FolderTree,
  GitBranch,
  ImageIcon,
  NotebookText,
  PanelsTopLeft,
  Search,
  SendHorizontal,
  Settings,
} from "lucide-react";
import { useEffect, useState, useEffectEvent } from "react";
import { useLanguage } from "@/components/language-provider";
import { ProductActionsMenu } from "@/components/product-actions-menu";
import { assetPath } from "@/lib/asset-path";

function TypewriterMessage({
  message,
  className = "mt-2 min-h-20 text-left text-sm leading-6 text-text-muted",
  onComplete,
  speed = 34,
}: {
  message: string;
  className?: string;
  onComplete?: () => void;
  speed?: number;
}) {
  const [typedMessage, setTypedMessage] = useState("");
  const handleComplete = useEffectEvent(() => {
    onComplete?.();
  });

  useEffect(() => {
    let index = 0;

    const interval = window.setInterval(() => {
      index += 1;
      setTypedMessage(message.slice(0, index));

      if (index >= message.length) {
        window.clearInterval(interval);
        handleComplete();
      }
    }, speed);

    return () => window.clearInterval(interval);
  }, [message, speed]);

  return (
    <p className={className}>
      {typedMessage}
      <span className="ml-0.5 inline-block h-4 w-1 translate-y-0.5 animate-pulse rounded-full bg-primary" />
    </p>
  );
}

function ThinkingState() {
  const { language } = useLanguage();

  return (
    <div className="mt-3 flex items-center gap-2 text-xs text-text-muted">
      <span>{language === "es" ? "Pensando" : "Thinking"}</span>
      <span className="flex gap-1">
        <span className="size-1.5 animate-bounce rounded-full bg-primary [animation-delay:-0.2s]" />
        <span className="size-1.5 animate-bounce rounded-full bg-primary [animation-delay:-0.1s]" />
        <span className="size-1.5 animate-bounce rounded-full bg-primary" />
      </span>
    </div>
  );
}

function TypedText({
  text,
  isTyping,
  className = "mt-2 min-h-20 text-left text-sm leading-6 text-text-muted",
}: {
  text: string;
  isTyping: boolean;
  className?: string;
}) {
  return (
    <p className={className}>
      {text}
      {isTyping ? (
        <span className="ml-0.5 inline-block h-4 w-1 translate-y-0.5 animate-pulse rounded-full bg-primary" />
      ) : null}
    </p>
  );
}

const productTabs = [
  { label: { es: "Agentes", en: "Agents" }, icon: Bot },
  { label: "Git", icon: GitBranch },
  { label: { es: "Métricas", en: "Metrics" }, icon: BarChart3 },
  { label: { es: "Previews", en: "Previews" }, icon: PanelsTopLeft },
  { label: { es: "Contexto", en: "Context" }, icon: FileText },
  { label: { es: "Brain", en: "Brain" }, icon: Brain },
  { label: { es: "Archivos", en: "Files" }, icon: FolderTree },
];

const productAgents = [
  {
    initials: "TL",
    role: "Tech Lead",
    intro: {
      es: "Hola, soy tu agente Tech Lead. Puedo ayudarte a ordenar decisiones técnicas, riesgos y planes de entrega.",
      en: "Hi, I am your Tech Lead agent. I can help organize technical decisions, risks and delivery plans.",
    },
    request: {
      es: "Analiza esta issue de Jira y proponme un plan técnico para dividirla en tareas ejecutables.",
      en: "Analyze this Jira issue and propose a technical plan to split it into executable tasks.",
    },
    response: {
      es: "Entendido. Voy a separar la issue en arquitectura, riesgos y tareas ejecutables para que el equipo pueda avanzar con claridad.",
      en: "Understood. I will split the issue into architecture, risks and executable tasks so the team can move forward clearly.",
    },
    results: {
      es: ["Arquitectura propuesta", "Riesgos priorizados", "Plan en 5 tareas"],
      en: ["Architecture proposal", "Prioritized risks", "5-task plan"],
    },
  },
  {
    initials: "DV",
    role: "Developer",
    intro: {
      es: "Hola, soy tu agente Developer. Puedo trabajar con archivos, terminales y cambios concretos del repositorio.",
      en: "Hi, I am your Developer agent. I can work with files, terminals and concrete repository changes.",
    },
    request: {
      es: "Implementa el flujo de permisos Ask, Auto y Plan usando los archivos seleccionados como contexto.",
      en: "Implement the Ask, Auto and Plan permission flow using the selected files as context.",
    },
    response: {
      es: "Entendido. El requerimiento necesita estados de permiso claros, ejecución segura y persistencia del modo seleccionado. Voy a actualizar los componentes del flujo, conectar la lógica con los archivos relevantes y dejar comandos de validación para confirmar que Ask, Auto y Plan funcionen como corresponde.",
      en: "Understood. This requires clear permission states, safe execution and persistence for the selected mode. I will update the flow components, connect the logic to the relevant files and leave validation commands for Ask, Auto and Plan.",
    },
    results: {
      es: ["Archivos actualizados", "Comandos ejecutados", "Checklist para PR"],
      en: ["Files updated", "Commands executed", "PR checklist"],
    },
  },
  {
    initials: "QA",
    role: "QA",
    intro: {
      es: "Hola, soy tu agente QA. Puedo revisar riesgos, validar escenarios y ayudarte a publicar con más confianza.",
      en: "Hi, I am your QA agent. I can review risks, validate scenarios and help you ship with more confidence.",
    },
    request: {
      es: "Revisa los cambios staged y dime qué escenarios debo probar antes de publicar.",
      en: "Review the staged changes and tell me which scenarios I should test before publishing.",
    },
    response: {
      es: "Entendido. Antes de publicar conviene validar los cambios staged contra los flujos críticos del workspace. Voy a priorizar riesgos de regresión, revisar interacciones entre terminal, Git y agentes, y convertirlo en una matriz de pruebas accionable.",
      en: "Understood. Before publishing, the staged changes should be validated against critical workspace flows. I will prioritize regression risks, review terminal, Git and agent interactions, and turn them into an actionable test matrix.",
    },
    results: {
      es: ["Matriz de pruebas", "Riesgos de regresión", "Casos críticos"],
      en: ["Test matrix", "Regression risks", "Critical cases"],
    },
  },
];

const productActions = [
  ["Browser", "Ctrl+B"],
  ["Database", "Ctrl+D"],
  ["Canvas", "Ctrl+L"],
  ["New terminal", "Ctrl+Y"],
  ["New agent", "Ctrl+A"],
] as const;

type ProductMockupProps = {
  variant?: "hero" | "product";
};

type ProductPhase =
  | "tlIntro"
  | "userRequest"
  | "tlThinking"
  | "tlResponse"
  | "tlResults"
  | "tlDelegating"
  | "devResult"
  | "devToQa"
  | "qaThinking"
  | "qaResult"
  | "userThanks";

function getAgentIndexFromPhase(phase: ProductPhase) {
  if (phase.startsWith("dev")) {
    return 1;
  }

  if (phase.startsWith("qa") || phase === "userThanks") {
    return 2;
  }

  return 0;
}

const simulationCopy = {
  es: {
    developerResult:
      "Recibí la instrucción del Tech Lead. Implementé la estructura base del flujo, conecté los modos Ask, Auto y Plan, y dejé los cambios listos para revisión con validaciones locales.",
    developerToQa:
      "Tarea delegada a QA para validar riesgos, escenarios críticos y pruebas simples antes de publicar.",
    qaResult:
      "Ejecuté pruebas simples emuladas sobre el flujo principal: cambio de permisos, persistencia del modo activo, acciones de terminal y revisión del estado Git. No detecté bloqueos críticos.",
    userThanks:
      "Muchas gracias, me ayudaron mucho. El plan, la implementación y la validación quedaron claros para avanzar.",
    delegationMessage:
      "Listo. Voy a delegar esto a Developer para implementar la solución y a QA para validar el resultado.",
    delegatedToDeveloper: "Tarea delegada a Developer",
    delegatedToQa: "Tarea delegada a QA",
    user: "Usuario",
    standingBy: "Standing by",
    messagePlaceholder: "Message the selected agent...",
    workspace: "Workspace 2 1 x",
    active: "activo",
  },
  en: {
    developerResult:
      "I received the Tech Lead instruction. I implemented the base flow structure, connected Ask, Auto and Plan modes, and left the changes ready for review with local validations.",
    developerToQa:
      "Task delegated to QA to validate risks, critical scenarios and simple tests before publishing.",
    qaResult:
      "I ran simple simulated tests over the main flow: permission changes, active mode persistence, terminal actions and Git status review. No critical blockers were found.",
    userThanks:
      "Thank you, this helped a lot. The plan, implementation and validation are clear enough to move forward.",
    delegationMessage:
      "Done. I will delegate this to Developer to implement the solution and to QA to validate the result.",
    delegatedToDeveloper: "Task delegated to Developer",
    delegatedToQa: "Task delegated to QA",
    user: "User",
    standingBy: "Standing by",
    messagePlaceholder: "Message the selected agent...",
    workspace: "Workspace 2 1 x",
    active: "active",
  },
};

const productPhaseOrder: ProductPhase[] = [
  "tlIntro",
  "userRequest",
  "tlThinking",
  "tlResponse",
  "tlResults",
  "tlDelegating",
  "devResult",
  "devToQa",
  "qaThinking",
  "qaResult",
  "userThanks",
];

const timelineMarkers = [
  { label: "Tech Lead", phase: "tlIntro" as const },
  { label: "Developer", phase: "devResult" as const },
  { label: "QA", phase: "qaThinking" as const },
];

export function ProductMockup({ variant = "product" }: ProductMockupProps) {
  const { language } = useLanguage();
  const t = simulationCopy[language];
  const [selectedAgentIndex, setSelectedAgentIndex] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const isProductVariant = variant === "product";
  const [phase, setPhase] = useState<ProductPhase>("tlIntro");
  const [typedLength, setTypedLength] = useState(0);
  const [delegatedAgentsActive, setDelegatedAgentsActive] = useState(false);
  const activeAgentIndex = isProductVariant
    ? getAgentIndexFromPhase(phase)
    : selectedAgentIndex;
  const selectedAgent = productAgents[activeAgentIndex];
  const heroMessage =
    language === "es"
      ? `Hola, soy tu agente de ${selectedAgent.role}. Estoy listo para ayudarte con tu workspace activo.`
      : `Hi, I am your ${selectedAgent.role} agent. I am ready to help with your active workspace.`;
  const delegationMessage = t.delegationMessage;
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const phaseIndex = productPhaseOrder.indexOf(phase);

  function hasReached(target: ProductPhase) {
    return phaseIndex >= productPhaseOrder.indexOf(target);
  }

  function getTextForPhase(target: ProductPhase, text: string) {
    if (phase === target) {
      return text.slice(0, typedLength);
    }

    return hasReached(target) ? text : "";
  }

  function isTyping(target: ProductPhase, text: string) {
    return phase === target && typedLength < text.length;
  }

  function moveToPhase(nextPhase: ProductPhase) {
    setTypedLength(0);
    setPhase(nextPhase);

    if (productPhaseOrder.indexOf(nextPhase) >= productPhaseOrder.indexOf("tlDelegating")) {
      setDelegatedAgentsActive(true);
    }
  }

  function jumpToPhase(nextPhase: ProductPhase) {
    moveToPhase(nextPhase);
  }

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (prefersReducedMotion) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    setTilt({ x, y });
  }

  function resetTilt() {
    setTilt({ x: 0, y: 0 });
  }

  useEffect(() => {
    if (isProductVariant) {
      return;
    }

    const interval = window.setInterval(() => {
      setSelectedAgentIndex((current) => (current + 1) % productAgents.length);
    }, 5200);

    return () => window.clearInterval(interval);
  }, [isProductVariant]);

  function selectAgent(index: number) {
    if (!isProductVariant) {
      setSelectedAgentIndex(index);
      return;
    }

    moveToPhase(index === 0 ? "tlIntro" : index === 1 ? "devResult" : "qaThinking");
  }

  useEffect(() => {
    if (!isProductVariant) {
      return;
    }

    const textByPhase: Partial<Record<ProductPhase, string>> = {
      tlIntro: productAgents[0].intro[language],
      userRequest: productAgents[0].request[language],
      tlResponse: productAgents[0].response[language],
      tlDelegating: delegationMessage,
      devResult: t.developerResult,
      devToQa: t.developerToQa,
      qaResult: t.qaResult,
      userThanks: t.userThanks,
    };
    const currentText = textByPhase[phase];

    if (!currentText || typedLength >= currentText.length) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setTypedLength((current) => Math.min(current + 1, currentText.length));
    }, 48);

    return () => window.clearTimeout(timeout);
  }, [delegationMessage, isProductVariant, language, phase, t, typedLength]);

  useEffect(() => {
    if (!isProductVariant || phase !== "tlThinking") {
      return;
    }

    const timeout = window.setTimeout(() => {
      moveToPhase("tlResponse");
    }, 900);

    return () => window.clearTimeout(timeout);
  }, [isProductVariant, phase]);

  useEffect(() => {
    if (!isProductVariant || phase !== "qaThinking") {
      return;
    }

    const timeout = window.setTimeout(() => {
      moveToPhase("qaResult");
    }, 900);

    return () => window.clearTimeout(timeout);
  }, [isProductVariant, phase]);

  useEffect(() => {
    if (!isProductVariant) {
      return;
    }

    const textByPhase: Partial<Record<ProductPhase, string>> = {
      tlIntro: productAgents[0].intro[language],
      userRequest: productAgents[0].request[language],
      tlResponse: productAgents[0].response[language],
      tlDelegating: delegationMessage,
      devResult: t.developerResult,
      devToQa: t.developerToQa,
      qaResult: t.qaResult,
      userThanks: t.userThanks,
    };
    const currentText = textByPhase[phase];

    if (currentText && typedLength < currentText.length) {
      return;
    }

    const nextPhaseByPhase: Partial<Record<ProductPhase, ProductPhase>> = {
      tlIntro: "userRequest",
      userRequest: "tlThinking",
      tlResponse: "tlResults",
      tlResults: "tlDelegating",
      tlDelegating: "devResult",
      devResult: "devToQa",
      devToQa: "qaThinking",
      qaResult: "userThanks",
      userThanks: "tlIntro",
    };
    const nextPhase = nextPhaseByPhase[phase];

    if (!nextPhase) {
      return;
    }

    const delay = phase === "tlResults" ? 1300 : phase === "userThanks" ? 2200 : 1000;
    const timeout = window.setTimeout(() => moveToPhase(nextPhase), delay);

    return () => window.clearTimeout(timeout);
  }, [delegationMessage, isProductVariant, language, phase, t, typedLength]);

  return (
    <div className="space-y-6">
    <div
      className="group relative z-20 overflow-visible [perspective:900px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
    >
      <div
        className="pointer-events-none absolute -inset-x-6 bottom-[-3rem] z-0 h-28 rounded-[50%] bg-black/35 blur-2xl transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${tilt.x * -48}px, ${tilt.y * 28}px, 0) scale(${1.02 + Math.abs(tilt.x) * 0.04})`,
        }}
      />
      <div
        className="border-glow relative z-10 overflow-visible rounded-2xl border border-border-subtle bg-[#07080a] shadow-2xl shadow-black/60 ring-1 ring-white/5 transition-transform duration-300 ease-out will-change-transform"
        style={{
          transform: `rotateX(${tilt.y * -18}deg) rotateY(${tilt.x * 24}deg) scale3d(1.04, 1.04, 1) translateZ(0)`,
          transformStyle: "preserve-3d",
          boxShadow: `${tilt.x * -18}px ${18 + tilt.y * 14}px 48px rgba(0, 0, 0, 0.28)`,
        }}
      >
      <div className="flex h-9 items-center justify-between rounded-t-2xl border-b border-border-subtle bg-surface px-3 text-xs text-text-muted">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex items-center gap-2 pr-1 font-semibold text-text-primary">
            <span className="text-primary">&gt;</span>
            <span>qhipa</span>
          </div>
          <div className="hidden items-center gap-1 overflow-hidden md:flex">
            {productTabs.map(({ label, icon: Icon }) => {
              const tabLabel = typeof label === "string" ? label : label[language];

              return (
                <span
                  key={tabLabel}
                  className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 font-medium ${
                    tabLabel === "Agents" || tabLabel === "Agentes"
                      ? "bg-primary/20 text-primary"
                      : "text-text-dim"
                  }`}
                >
                  <Icon className="size-3.5" />
                  {tabLabel}
                </span>
              );
            })}
          </div>
        </div>
        <div className="hidden items-center gap-4 text-text-dim sm:flex">
          <Search className="size-3.5" />
          <span>Qhipa Dark</span>
          <span>08:39</span>
          <Settings className="size-3.5" />
        </div>
      </div>

      <div className="relative min-h-[520px] overflow-visible rounded-b-2xl bg-[radial-gradient(circle,_color-mix(in_srgb,var(--color-text-dim)_28%,transparent)_1px,_transparent_1px)] bg-[length:22px_22px] md:min-h-[640px]">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent,_rgba(0,0,0,0.55)_70%)] transition-transform duration-300 ease-out"
          style={{ transform: `translate3d(${tilt.x * -72}px, ${tilt.y * -72}px, 0)` }}
        />
        <div
          className="pointer-events-none absolute right-1/3 top-20 h-24 w-1 rounded-full bg-primary/30 blur-sm transition-transform duration-300 ease-out"
          style={{ transform: `translate3d(${tilt.x * -200}px, ${tilt.y * 145}px, 190px) rotate(28deg)` }}
        />

        <div
          className="relative flex min-h-[520px] transition-transform duration-300 ease-out md:min-h-[640px]"
          style={{ transform: `translate3d(${tilt.x * 50}px, ${tilt.y * 50}px, 105px)` }}
        >
          <aside className="hidden w-72 shrink-0 p-5 lg:block">
            <div className="flex items-center gap-2 text-xs font-semibold text-text-muted">
              <span className="flex items-center gap-1.5 rounded-md border border-border-subtle bg-surface px-3 py-2 text-text-primary">
                <NotebookText className="size-3.5" />
                notes
              </span>
              <span className="flex items-center gap-1.5 rounded-md border border-border-subtle bg-surface px-3 py-2">
                <GitBranch className="size-3.5" />
                github
              </span>
            </div>

            <div className="mt-12 flex items-center justify-between px-1 text-[10px] uppercase tracking-[0.24em] text-text-dim">
              <span>{language === "es" ? "Agentes" : "Agents"}</span>
              <span>3</span>
            </div>

            <div className="mt-4 space-y-4">
              {productAgents.map((agent, index) => {
                const isActive = index === activeAgentIndex;
                const isDelegatedAgentActive = delegatedAgentsActive && index > 0;

                return (
                  <button
                    key={agent.role}
                    type="button"
                    onClick={() => selectAgent(index)}
                    className={`border-glow relative w-full rounded-lg border bg-surface/70 p-3 text-left transition duration-300 hover:border-border-active ${
                      isActive
                        ? "z-20 -translate-x-3 scale-[1.03] border-primary shadow-[0_0_0_1px_var(--color-primary),0_24px_50px_rgba(0,0,0,0.45)]"
                        : "border-border-subtle"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-xs font-semibold text-text-primary">
                        <span className="mr-2 text-text-muted">{agent.initials}</span>
                        {agent.role}
                      </p>
                      <span className="flex items-center gap-1.5 text-text-muted">
                        {isDelegatedAgentActive ? (
                          <span className="relative flex size-2.5 items-center justify-center">
                            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-70" />
                            <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                          </span>
                        ) : null}
                        <span className="rounded bg-surface-subtle px-1.5 py-0.5 text-[9px] font-bold">
                          DEF
                        </span>
                        <Box className="size-3" />
                      </span>
                    </div>
                    <p className="mt-1.5 text-[11px] text-text-muted">{t.standingBy}</p>
                    <div className="mt-6 flex justify-end text-text-dim">
                      <File className="size-3.5" />
                    </div>
                  </button>
                );
              })}
            </div>
          </aside>

          <div className="relative flex flex-1 flex-col">
            <div className="absolute left-1/2 top-[45%] w-[min(88%,560px)] -translate-x-1/2 -translate-y-1/2">
              <div className="space-y-5">
                {!isProductVariant || activeAgentIndex === 0 ? (
                <div className="flex items-start gap-3">
                  <Image
                    src={assetPath("/brand/favicon.svg")}
                    alt="Qhipa agent"
                    width={124}
                    height={124}
                    className="mt-0.5 size-9 shrink-0 rounded-xl"
                  />
                  <div className="flex-1 text-left">
                    <p className="text-xs font-semibold text-primary">
                      {selectedAgent.initials} · {selectedAgent.role}
                    </p>
                    {isProductVariant ? (
                      <TypedText
                        text={getTextForPhase("tlIntro", productAgents[0].intro[language])}
                        isTyping={isTyping("tlIntro", productAgents[0].intro[language])}
                      />
                    ) : (
                      <TypewriterMessage key={selectedAgent.role} message={heroMessage} />
                    )}
                  </div>
                </div>
                ) : null}

                {isProductVariant && activeAgentIndex === 0 && hasReached("userRequest") ? (
                  <div className="ml-auto flex max-w-[88%] items-start justify-end gap-3 text-right">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-text-dim">
                        {t.user}
                      </p>
                      <TypedText
                        text={getTextForPhase("userRequest", productAgents[0].request[language])}
                        isTyping={isTyping("userRequest", productAgents[0].request[language])}
                        className="mt-2 min-h-12 rounded-2xl border border-border-subtle bg-surface/80 px-4 py-3 text-sm leading-6 text-text-primary"
                      />
                    </div>
                    <Image
                      src={assetPath("/brand/user.png")}
                      alt={t.user}
                      width={96}
                      height={96}
                      className="mt-5 size-9 shrink-0 rounded-full border border-border-subtle object-cover"
                    />
                  </div>
                ) : null}

                {isProductVariant && activeAgentIndex === 0 && hasReached("tlThinking") ? (
                <div className="flex items-start gap-3">
                  <Image
                    src={assetPath("/brand/favicon.svg")}
                    alt="Qhipa agent"
                    width={124}
                    height={124}
                    className="mt-0.5 size-9 shrink-0 rounded-xl"
                  />
                  <div className="flex-1 text-left">
                    <p className="text-xs font-semibold text-primary">
                      {selectedAgent.initials} · {selectedAgent.role}
                    </p>
                    {phase === "tlThinking" ? (
                      <ThinkingState />
                    ) : null}
                    {hasReached("tlResponse") ? (
                      <>
                        <TypedText
                          text={getTextForPhase("tlResponse", productAgents[0].response[language])}
                          isTyping={isTyping("tlResponse", productAgents[0].response[language])}
                        />
                        {hasReached("tlResults") ? (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {productAgents[0].results[language].map((result) => (
                              <span
                                key={result}
                                className="rounded-full border border-border-active bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                              >
                                {result}
                              </span>
                            ))}
                          </div>
                        ) : null}
                        {hasReached("tlDelegating") ? (
                          <TypedText
                            text={getTextForPhase("tlDelegating", delegationMessage)}
                            isTyping={isTyping("tlDelegating", delegationMessage)}
                            className="mt-4 border-l border-primary pl-3 text-sm leading-6 text-text-muted"
                          />
                        ) : null}
                      </>
                    ) : null}
                  </div>
                </div>
                ) : null}

                {isProductVariant && activeAgentIndex === 1 && hasReached("devResult") ? (
                  <>
                    <div className="flex items-start gap-3">
                      <Image
                        src={assetPath("/brand/favicon.svg")}
                        alt="Qhipa Tech Lead agent"
                        width={124}
                        height={124}
                        className="mt-0.5 size-9 shrink-0 rounded-xl"
                      />
                      <div className="flex-1 text-left">
                        <p className="text-xs font-semibold text-primary">TL · Tech Lead</p>
                        <p className="mt-2 rounded-xl border border-border-active bg-primary/10 px-3 py-2 text-sm font-medium text-primary">
                          {t.delegatedToDeveloper}
                        </p>
                      </div>
                    </div>

                  <div className="flex items-start gap-3">
                    <Image
                      src={assetPath("/brand/favicon.svg")}
                      alt="Qhipa developer agent"
                      width={124}
                      height={124}
                      className="mt-0.5 size-9 shrink-0 rounded-xl"
                    />
                    <div className="flex-1 text-left">
                      <p className="text-xs font-semibold text-primary">DV · Developer</p>
                      <TypedText
                        text={getTextForPhase("devResult", t.developerResult)}
                        isTyping={isTyping("devResult", t.developerResult)}
                      />
                      {hasReached("devToQa") ? (
                        <TypedText
                          text={getTextForPhase("devToQa", t.developerToQa)}
                          isTyping={isTyping("devToQa", t.developerToQa)}
                          className="mt-4 border-l border-primary pl-3 text-sm leading-6 text-text-muted"
                        />
                      ) : null}
                    </div>
                  </div>
                  </>
                ) : null}

                {isProductVariant && activeAgentIndex === 2 && hasReached("qaThinking") ? (
                  <>
                    <div className="flex items-start gap-3">
                      <Image
                        src={assetPath("/brand/favicon.svg")}
                        alt="Qhipa Developer agent"
                        width={124}
                        height={124}
                        className="mt-0.5 size-9 shrink-0 rounded-xl"
                      />
                      <div className="flex-1 text-left">
                        <p className="text-xs font-semibold text-primary">DV · Developer</p>
                        <p className="mt-2 rounded-xl border border-border-active bg-primary/10 px-3 py-2 text-sm font-medium text-primary">
                          {t.delegatedToQa}
                        </p>
                      </div>
                    </div>

                  <div className="flex items-start gap-3">
                    <Image
                      src={assetPath("/brand/favicon.svg")}
                      alt="Qhipa QA agent"
                      width={124}
                      height={124}
                      className="mt-0.5 size-9 shrink-0 rounded-xl"
                    />
                    <div className="flex-1 text-left">
                      <p className="text-xs font-semibold text-primary">QA · QA</p>
                      {phase === "qaThinking" ? <ThinkingState /> : null}
                      {hasReached("qaResult") ? (
                        <>
                          <TypedText
                            text={getTextForPhase("qaResult", t.qaResult)}
                            isTyping={isTyping("qaResult", t.qaResult)}
                          />
                          {hasReached("userThanks") ? (
                            <div className="mt-3 flex flex-wrap gap-2">
                              {productAgents[2].results[language].map((result) => (
                                <span
                                  key={result}
                                  className="rounded-full border border-border-active bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                                >
                                  {result}
                                </span>
                              ))}
                            </div>
                          ) : null}
                        </>
                      ) : null}
                    </div>
                  </div>
                  </>
                ) : null}

                {isProductVariant && activeAgentIndex === 2 && hasReached("userThanks") ? (
                  <div className="ml-auto flex max-w-[88%] items-start justify-end gap-3 text-right">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-text-dim">
                        {t.user}
                      </p>
                      <TypedText
                        text={getTextForPhase("userThanks", t.userThanks)}
                        isTyping={isTyping("userThanks", t.userThanks)}
                        className="mt-2 min-h-12 rounded-2xl border border-border-subtle bg-surface/80 px-4 py-3 text-sm leading-6 text-text-primary"
                      />
                    </div>
                    <Image
                      src={assetPath("/brand/user.png")}
                      alt={t.user}
                      width={96}
                      height={96}
                      className="mt-5 size-9 shrink-0 rounded-full border border-border-subtle object-cover"
                    />
                  </div>
                ) : null}
              </div>
            </div>

            <div className="absolute right-4 top-6 text-xl text-text-dim">+</div>

            <div className="absolute inset-x-4 bottom-8 mx-auto max-w-xl">
              <div className="mb-3 flex justify-center gap-1.5 text-[10px] text-text-muted">
                {productAgents.map((agent, index) => {
                  const isActive = index === activeAgentIndex;

                  return (
                    <button
                      key={agent.role}
                      type="button"
                      onClick={() => selectAgent(index)}
                      className={`rounded-md border px-3 py-0.5 transition hover:border-border-active hover:text-text-primary ${
                        isActive
                          ? "border-primary text-primary"
                          : "border-border-subtle bg-surface/80"
                      }`}
                    >
                      {agent.role}
                    </button>
                  );
                })}
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="hidden size-10 place-items-center rounded-md border border-border-subtle bg-surface text-text-muted transition hover:border-border-active hover:text-text-primary sm:grid"
                  aria-label="Adjuntar imagen"
                >
                  <ImageIcon className="size-4" />
                </button>
                <button
                  className="hidden size-10 place-items-center rounded-md border border-border-subtle bg-surface text-text-muted transition hover:border-border-active hover:text-text-primary sm:grid"
                  aria-label="Adjuntar documento"
                >
                  <File className="size-4" />
                </button>
                <div className="flex h-10 flex-1 items-center rounded-md border border-border-subtle bg-surface/90 px-4 font-mono text-xs text-text-dim">
                  <span className="mr-3 text-primary">&gt;</span>
                  {t.messagePlaceholder}
                </div>
                <button
                  className="grid size-10 place-items-center rounded-md bg-primary text-primary-fg"
                  aria-label="Enviar mensaje"
                >
                  <SendHorizontal className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 flex h-8 w-44 items-center gap-1.5 border-r border-t border-primary bg-surface px-3 py-2 text-xs font-semibold text-text-muted">
          <PanelsTopLeft className="size-3.5 text-primary" />
          {t.workspace}
        </div>
        <ProductActionsMenu actions={productActions} />
      </div>
    </div>
    </div>
    {isProductVariant ? (
      <div className="border-glow rounded-2xl border border-border-subtle bg-surface/80 px-5 py-5 backdrop-blur">
        <div className="relative h-7">
          <div className="absolute left-0 right-0 top-1/2 h-1 -translate-y-1/2 rounded-full bg-surface-subtle" />
          <div
            className="absolute left-0 top-1/2 h-1 -translate-y-1/2 rounded-full bg-primary transition-all duration-500"
            style={{ width: `${(phaseIndex / (productPhaseOrder.length - 1)) * 100}%` }}
          />
          <div
            className="absolute top-1/2 size-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary bg-canvas shadow-[0_0_22px_color-mix(in_srgb,var(--color-primary)_45%,transparent)] transition-all duration-500"
            style={{ left: `${(phaseIndex / (productPhaseOrder.length - 1)) * 100}%` }}
          />
          {timelineMarkers.map((marker) => {
            const markerIndex = productPhaseOrder.indexOf(marker.phase);
            const isActive = activeAgentIndex === getAgentIndexFromPhase(marker.phase);
            const isReached = phaseIndex >= markerIndex;
            const markerProgress = (markerIndex / (productPhaseOrder.length - 1)) * 100;

            return (
              <button
                key={marker.label}
                type="button"
                aria-label={`Ir a ${marker.label}`}
                onClick={() => jumpToPhase(marker.phase)}
                className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${markerProgress}%` }}
              >
                <span
                  className={`block size-3.5 rounded-full border transition ${
                    isActive
                      ? "border-primary bg-primary"
                      : isReached
                        ? "border-primary bg-primary/40"
                        : "border-border-subtle bg-surface-subtle"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
    ) : null}
    </div>
  );
}
