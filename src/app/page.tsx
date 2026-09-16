"use client";

import Image from "next/image";
import {
  BookOpen,
  Boxes,
  Bot,
  Building2,
  CloudCog,
  Code2,
  Cpu,
  Database,
  FileCode2,
  FileText,
  FolderTree,
  GitBranch,
  Grid2X2,
  Languages,
  Monitor,
  NotebookPen,
  PanelsTopLeft,
  Ticket,
  Workflow,
} from "lucide-react";
import { ContactModal } from "@/components/contact-modal";
import { CookieBanner } from "@/components/cookie-banner";
import { CookiesModal } from "@/components/cookies-modal";
import DotField from "@/components/dot-field";
import { HeroDome } from "@/components/hero-dome";
import { HeroParticles } from "@/components/hero-particles";
import { useLanguage } from "@/components/language-provider";
import { ProductMockup } from "@/components/product-mockup";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SiteNavbar } from "@/components/site-navbar";
import { StickyCapabilities } from "@/components/sticky-capabilities";
import { assetPath } from "@/lib/asset-path";

const copy = {
  es: {
    heroBadge: "Orquestador de escritorio",
    heroTitle: "Todo tu flujo de desarrollo en un solo workspace inteligente.",
    heroDescription:
      "Qhipa reúne shells, archivos, Git y agentes de programación en un orquestador visual diseñado para equipos que necesitan moverse más rápido sin perder control.",
    contactAgent: "Contactar a un agente",
    exploreFeatures: "Explorar funcionalidades",
    featuresEyebrow: "Funcionalidades",
    featuresTitle: "Un orquestador que entiende el proyecto, no solo comandos.",
    featuresDescription:
      "Qhipa reduce el cambio de contexto entre consola, editor, repositorio, issues y agentes. Todo vive en pestañas persistentes preparadas para trabajos largos y sesiones que puedes retomar.",
    workspaceLabel: "Workspace",
    workspaceTitle: "Shells, archivos y Git en el mismo lugar",
    agentsLabel: "Agentes",
    agentsTitle: "Programación asistida con control real",
    contextEyebrow: "Contexto reutilizable",
    contextTitle: "Dale al agente exactamente lo que necesita.",
    contextDescription:
      "Cada pestaña puede acumular contexto propio para que una conversación continúe con la información correcta: código, notas, estado del repo y dependencias relevantes.",
    contextCardDescription:
      "Disponible como señal de trabajo para terminales, agentes y decisiones dentro del workspace.",
    integrationsEyebrow: "Integraciones",
    integrationsTitle: "Conecta el trabajo real de tu equipo.",
    productEyebrow: "Producto",
    productTitle: "Una interfaz real para coordinar agentes, shells y contexto.",
    productDescription:
      "El workspace de Qhipa mantiene el foco en el flujo activo: agentes a la izquierda, acciones rápidas a la derecha y un composer inferior para conversar con el contexto correcto.",
    ctaEyebrow: "Solicita una demo",
    ctaTitle: "Habla con un agente y ve Qhipa aplicado a tu flujo.",
    ctaDescription:
      "Cuéntanos cómo trabaja tu equipo hoy y te mostraremos una demo orientada a shells, Git, Jira, agentes de programación y contexto reutilizable.",
    footerDescription:
      "Orquestador inteligente para equipos que trabajan con código, agentes, Git e integraciones en un solo espacio.",
    footerNote:
      "Diseñado para equipos que quieren acelerar su desarrollo sin perder visibilidad, contexto ni control operativo.",
    rights: "Todos los derechos reservados.",
    downloadEyebrow: "Descarga",
    downloadTitle: "Instala Qhipa en tu sistema operativo.",
    downloadDescription:
      "Disponible para macOS, Windows y Linux. Descarga la versión que necesitas y empieza a trabajar en minutos.",
    downloadMac: "macOS",
    downloadWindows: "Windows",
    downloadLinux: "Linux",
    downloadSoon: "Próximamente",
    downloadMacNote: "Apple Silicon",
    downloadWindowsNote: "Instalador x64",
    downloadLinuxNote: "AppImage x86_64",
  },
  en: {
    heroBadge: "Desktop orchestrator",
    heroTitle: "Your entire development workflow in one intelligent workspace.",
    heroDescription:
      "Qhipa brings shells, files, Git and programming agents into a visual orchestrator built for teams that need to move faster without losing control.",
    contactAgent: "Contact an agent",
    exploreFeatures: "Explore features",
    featuresEyebrow: "Features",
    featuresTitle: "An orchestrator that understands the project, not just commands.",
    featuresDescription:
      "Qhipa reduces context switching between console, editor, repository, issues and agents. Everything lives in persistent tabs ready for long-running work and sessions you can resume.",
    workspaceLabel: "Workspace",
    workspaceTitle: "Shells, files and Git in the same place",
    agentsLabel: "Agents",
    agentsTitle: "Assisted programming with real control",
    contextEyebrow: "Reusable context",
    contextTitle: "Give the agent exactly what it needs.",
    contextDescription:
      "Each tab can keep its own context so a conversation continues with the right information: code, notes, repository status and relevant dependencies.",
    contextCardDescription:
      "Available as working signal for terminals, agents and decisions inside the workspace.",
    integrationsEyebrow: "Integrations",
    integrationsTitle: "Connect your team's real work.",
    productEyebrow: "Product",
    productTitle: "A real interface to coordinate agents, shells and context.",
    productDescription:
      "The Qhipa workspace keeps focus on the active flow: agents on the left, quick actions on the right and a bottom composer to chat with the right context.",
    ctaEyebrow: "Request a demo",
    ctaTitle: "Talk to an agent and see Qhipa applied to your workflow.",
    ctaDescription:
      "Tell us how your team works today and we'll show you a demo focused on shells, Git, Jira, programming agents and reusable context.",
    footerDescription:
      "An intelligent orchestrator for teams working with code, agents, Git and integrations in one space.",
    footerNote:
      "Designed for teams that want to accelerate development without losing visibility, context or operational control.",
    rights: "All rights reserved.",
    downloadEyebrow: "Download",
    downloadTitle: "Install Qhipa on your operating system.",
    downloadDescription:
      "Available for macOS, Windows and Linux. Download the version you need and start working in minutes.",
    downloadMac: "macOS",
    downloadWindows: "Windows",
    downloadLinux: "Linux",
    downloadSoon: "Coming soon",
    downloadMacNote: "Apple Silicon",
    downloadWindowsNote: "x64 installer",
    downloadLinuxNote: "AppImage x86_64",
  },
};

const downloads = {
  mac: "https://github.com/credicorp-internal/qhipa-manifest/releases/download/v1.27.0/Qhipa-Platform-1.27.0-arm64.dmg",
  windows: "https://github.com/credicorp-internal/qhipa-manifest/releases/download/v1.27.0/Qhipa-Platform-1.27.0-setup-x64.exe",
  linux: "https://github.com/credicorp-internal/qhipa-manifest/releases/download/v1.27.0/Qhipa-Platform-1.27.0-x86_64.AppImage",
};

const workspaceFeatures = {
  es: [
    "Pestañas persistentes con hasta cuatro paneles redimensionables y reordenables.",
    "Terminales reales mediante node-pty con restauración de cwd, scrollback e historial.",
    "Explorador de archivos con búsqueda, operaciones rápidas y editor CodeMirror integrado.",
    "Panel Git para revisar cambios, stage, unstage, commit, pull y push sin cambiar de app.",
  ],
  en: [
    "Persistent tabs with up to four resizable and reorderable panes.",
    "Real terminals powered by node-pty with cwd restore, scrollback and command history.",
    "File explorer with search, quick file operations and an integrated CodeMirror editor.",
    "Git panel to review changes, stage, unstage, commit, pull and push without switching apps.",
  ],
};

const agentFeatures = {
  es: [
    "Paneles para Claude Code y Cursor Agent ejecutados con CLIs instaladas localmente.",
    "Modos Ask, Auto y Plan para controlar permisos según el nivel de autonomía requerido.",
    "Selector de modelo, cancelación de tareas y reanudación de conversaciones.",
    "Contextos reutilizables por pestaña para que cada agente entienda el trabajo activo.",
  ],
  en: [
    "Panels for Claude Code and Cursor Agent running through locally installed CLIs.",
    "Ask, Auto and Plan modes to control permissions based on the autonomy level required.",
    "Model selector, task cancellation and conversation resume.",
    "Reusable context per tab so each agent understands the active work.",
  ],
};

const contextItems = [
  { title: { es: "Árbol de carpetas", en: "Folder tree" }, icon: FolderTree },
  { title: { es: "Archivos", en: "Files" }, icon: FileText },
  { title: { es: "Símbolos", en: "Symbols" }, icon: FileCode2 },
  { title: { es: "Notas", en: "Notes" }, icon: NotebookPen },
  { title: { es: "Estado de Git", en: "Git status" }, icon: GitBranch },
  { title: { es: "Dependencias", en: "Dependencies" }, icon: Boxes },
  { title: { es: "README", en: "README" }, icon: BookOpen },
  { title: { es: "Issues de Jira", en: "Jira issues" }, icon: Ticket },
];

const integrationCards = [
  {
    title: { es: "Jira Cloud nativo", en: "Native Jira Cloud" },
    icon: CloudCog,
    description:
      {
        es: "Menciona una issue en el composer y su ficha viaja como contexto del turno para que el agente trabaje con la historia completa.",
        en: "Mention an issue in the composer and its card travels as turn context so the agent works with the full story.",
      },
  },
  {
    title: { es: "GitHub Actions visible", en: "Visible GitHub Actions" },
    icon: Workflow,
    description:
      {
        es: "Consulta el estado de pipelines con token, variable de entorno o credenciales de Git sin romper tu flujo de desarrollo.",
        en: "Check pipeline status with a token, environment variable or Git credentials without breaking your development flow.",
      },
  },
  {
    title: { es: "Experiencia configurable", en: "Configurable experience" },
    icon: Languages,
    description:
      {
        es: "Temas, tamaño de fuente, interfaz en español o inglés y controles opcionales de Spotify en la barra de título.",
        en: "Themes, font size, Spanish or English interface and optional Spotify controls in the title bar.",
      },
  },
];

const integrationFlow = {
  sources: [
    { label: "Copilot", icon: Bot },
    { label: "Claude", icon: SparkIcon },
    { label: "Cursor", icon: Code2 },
    { label: "Apps", icon: Grid2X2 },
  ],
  modules: [
    { label: "Agentic Terminal", icon: Monitor },
    { label: "Gravity Client", icon: Cpu },
    { label: "Unified Context", icon: PanelsTopLeft },
    { label: "Telemetry", icon: Workflow },
    { label: "Agent Registry", icon: Bot },
    { label: "Tools", icon: CloudCog },
  ],
  targets: [
    { label: "Modelos", icon: Cpu },
    { label: "APIs", icon: Code2 },
    { label: "Datos", icon: Database },
    { label: "Sistemas", icon: Building2 },
  ],
};

function SparkIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2.75V21.25M2.75 12H21.25M5.46 5.46L18.54 18.54M18.54 5.46L5.46 18.54"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
      <path
        d="M12 7.5L13.4 10.6L16.5 12L13.4 13.4L12 16.5L10.6 13.4L7.5 12L10.6 10.6L12 7.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
  action?: "contact" | "cookies";
};

type FooterColumn = {
  title: string;
  links: FooterLink[];
};

const footerColumns: FooterColumn[] = [
  {
    title: "Producto",
    links: [
      { label: "Funcionalidades", href: "#funcionalidades" },
      { label: "Integraciones", href: "#integraciones" },
      { label: "Agentes", href: "#funcionalidades" },
      { label: "Demo", href: "#contacto" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Contacto", href: "#contacto", action: "contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacidad", href: "/privacidad" },
      { label: "Términos", href: "/terminos" },
      { label: "Cookies", href: "#", action: "cookies" },
    ],
  },
];

export default function Home() {
  const { language } = useLanguage();
  const t = copy[language];
  const currentWorkspaceFeatures = workspaceFeatures[language];
  const currentAgentFeatures = agentFeatures[language];

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-canvas text-text-primary">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_color-mix(in_srgb,var(--color-primary)_22%,transparent),_transparent_34%),radial-gradient(circle_at_80%_20%,_color-mix(in_srgb,var(--color-border-active)_34%,transparent),_transparent_30%),linear-gradient(135deg,_var(--color-surface),_var(--color-canvas))]" />
      <div className="pointer-events-none absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <SiteNavbar />

      <section className="relative flex min-h-screen w-full flex-col overflow-hidden px-6 pb-8 pt-36 sm:px-10 lg:px-12">
        <HeroDome />
        <HeroParticles />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-56 bg-canvas/0 backdrop-blur-[10px] [mask-image:linear-gradient(to_top,black_0%,black_35%,transparent_100%)]" />
        <div className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-20 bg-gradient-to-r from-canvas/70 to-transparent backdrop-blur-[2px] sm:w-28 lg:w-36" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-[2] w-20 bg-gradient-to-l from-canvas/70 to-transparent backdrop-blur-[2px] sm:w-28 lg:w-36" />
        <div className="relative z-20 mx-auto flex w-full max-w-7xl flex-1 items-center justify-center py-20 lg:py-24">
          <ScrollReveal className="mx-auto w-full text-center" delay={100}>
            <div className="mx-auto max-w-5xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border-active bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <span className="size-2 rounded-full bg-primary shadow-[0_0_22px_var(--color-primary)]" />
              {t.heroBadge}
            </div>

            <h1 className="mx-auto max-w-5xl text-balance text-5xl font-semibold tracking-[-0.05em] text-text-primary sm:text-6xl lg:text-7xl">
              {t.heroTitle}
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-text-muted sm:text-xl">
              {t.heroDescription}
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <ContactModal>
                <span className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-7 text-base font-semibold text-primary-fg transition hover:bg-primary-hover">
                  {t.contactAgent}
                </span>
              </ContactModal>
              <a
                href="#funcionalidades"
                className="inline-flex h-14 items-center justify-center rounded-full border border-white px-7 text-base font-semibold text-white transition hover:bg-white hover:text-primary-fg"
              >
                {t.exploreFeatures}
              </a>
            </div>
            </div>

            <div className="mt-16">
              <ProductMockup variant="hero" />
            </div>
          </ScrollReveal>

        </div>
      </section>

      <StickyCapabilities />

      <section
        id="funcionalidades"
        className="relative mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-12"
      >
        <ScrollReveal className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary">
            {t.featuresEyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-text-primary sm:text-5xl">
            {t.featuresTitle}
          </h2>
          <p className="mt-5 text-lg leading-8 text-text-muted">
            {t.featuresDescription}
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <ScrollReveal
            className="border-glow rounded-[2rem] border border-border-subtle bg-surface/80 p-6 sm:p-8"
            delay={100}
          >
            <span className="text-sm font-medium text-primary">{t.workspaceLabel}</span>
            <h3 className="mt-3 text-2xl font-semibold text-text-primary">
              {t.workspaceTitle}
            </h3>
            <div className="mt-6 space-y-4">
              {currentWorkspaceFeatures.map((feature) => (
                <div key={feature} className="flex gap-3 text-text-muted">
                  <span className="mt-2 size-2 shrink-0 rounded-full bg-primary" />
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal
            className="border-glow rounded-[2rem] border border-border-subtle bg-surface/80 p-6 sm:p-8"
            delay={200}
          >
            <span className="text-sm font-medium text-primary">{t.agentsLabel}</span>
            <h3 className="mt-3 text-2xl font-semibold text-text-primary">
              {t.agentsTitle}
            </h3>
            <div className="mt-6 space-y-4">
              {currentAgentFeatures.map((feature) => (
                <div key={feature} className="flex gap-3 text-text-muted">
                  <span className="mt-2 size-2 shrink-0 rounded-full bg-primary" />
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section
        id="contexto"
        className="relative mx-auto grid w-full max-w-7xl scroll-mt-24 gap-8 px-6 py-20 sm:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:px-12"
      >
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary">
            {t.contextEyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-text-primary sm:text-5xl">
            {t.contextTitle}
          </h2>
          <p className="mt-5 text-lg leading-8 text-text-muted">
            {t.contextDescription}
          </p>
        </ScrollReveal>

        <div className="grid gap-3 sm:grid-cols-2">
          {contextItems.map(({ title, icon: Icon }, index) => (
            <ScrollReveal
              key={title.es}
              className={`border-glow group rounded-3xl border border-border-subtle bg-surface-elevated p-5 transition duration-300 [transform-style:preserve-3d] hover:scale-[1.025] hover:rotate-x-2 hover:-rotate-y-2 hover:border-border-active hover:bg-surface-subtle hover:shadow-2xl hover:shadow-black/40 ${
                index % 2 === 0 ? "sm:-translate-y-8" : "sm:translate-y-14"
              }`}
              delay={index * 60}
            >
              <Icon className="size-6 text-text-dim transition group-hover:translate-z-4 group-hover:text-primary" />
              <p className="mt-4 text-lg font-semibold text-text-primary transition group-hover:text-primary">
                {title[language]}
              </p>
              <p className="mt-2 text-sm leading-6 text-text-muted">
                {t.contextCardDescription}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section
        id="integraciones"
        className="relative mx-auto w-full max-w-7xl scroll-mt-24 px-6 py-20 sm:px-10 lg:px-12"
      >
        <ScrollReveal className="border-glow rounded-[2.5rem] border border-border-subtle bg-canvas p-6 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary">
                {t.integrationsEyebrow}
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-text-primary sm:text-5xl">
                {t.integrationsTitle}
              </h2>
            </div>

            <div className="grid gap-4">
              <ScrollReveal delay={160}>
                <div className="relative overflow-hidden rounded-[2rem] bg-surface-elevated/70 p-5 shadow-2xl shadow-black/20 sm:p-6">
                  <div className="relative">
                    <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-text-dim">
                      Aplicaciones
                    </p>

                    <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {integrationFlow.sources.map(({ label, icon: Icon }) => (
                        <div
                          key={label}
                          className="group flex min-h-20 items-center gap-3 rounded-[1.25rem] border border-border-subtle bg-[#07080a] px-4 py-4 text-left transition hover:border-border-active hover:bg-surface"
                        >
                          <Icon className="size-5 shrink-0 text-text-dim transition group-hover:text-primary" />
                          <span className="text-sm font-semibold leading-tight text-text-primary sm:text-base">
                            {label}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mx-auto my-5 h-8 w-px bg-gradient-to-b from-text-dim/0 via-text-dim/60 to-text-dim/0" />

                    <div className="rounded-[1.75rem] border border-primary/20 bg-surface p-5 shadow-2xl shadow-primary/10">
                      <div className="flex items-center justify-center">
                        <Image
                          src={assetPath("/brand/logotipo-qhipa.svg")}
                          alt="Qhipa"
                          width={630}
                          height={124}
                          className="h-9 w-auto"
                        />
                      </div>

                      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                        {integrationFlow.modules.map(({ label, icon: Icon }) => (
                          <div
                            key={label}
                            className="flex min-h-24 flex-col items-start justify-center gap-2 rounded-[1.35rem] border border-white/10 bg-[#07080a]/80 p-4 text-left backdrop-blur-sm transition hover:border-primary/40 hover:bg-surface"
                          >
                            <Icon className="size-5 text-text-dim" />
                            <span className="text-sm font-semibold leading-tight text-text-primary sm:text-base">
                              {label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mx-auto my-5 h-8 w-px bg-gradient-to-b from-text-dim/0 via-text-dim/60 to-text-dim/0" />

                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {integrationFlow.targets.map(({ label, icon: Icon }) => (
                        <div
                          key={label}
                          className="group flex min-h-20 items-center gap-3 rounded-[1.25rem] border border-border-subtle bg-[#07080a] px-4 py-4 text-left transition hover:border-border-active hover:bg-surface"
                        >
                          <Icon className="size-5 shrink-0 text-text-dim transition group-hover:text-primary" />
                          <span className="text-sm font-semibold leading-tight text-text-primary sm:text-base">
                            {label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

        </ScrollReveal>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {integrationCards.map(({ title, icon: Icon, description }, index) => (
            <ScrollReveal
              key={title.es}
              className="border-glow group rounded-3xl border border-border-subtle bg-surface-elevated p-6 transition duration-300 [transform-style:preserve-3d] hover:scale-[1.025] hover:rotate-x-2 hover:-rotate-y-2 hover:border-border-active hover:bg-surface-subtle hover:shadow-2xl hover:shadow-black/40"
              delay={index * 80}
            >
              <Icon className="size-6 text-text-dim transition group-hover:translate-z-4 group-hover:text-primary" />
              <h3 className="mt-4 text-xl font-semibold text-text-primary transition group-hover:text-primary">
                {title[language]}
              </h3>
              <p className="mt-3 leading-7 text-text-muted">
                {description[language]}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary">
              {t.productEyebrow}
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-text-primary sm:text-5xl">
              {t.productTitle}
            </h2>
            <p className="mt-5 text-lg leading-8 text-text-muted">
              {t.productDescription}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={160} className="mt-12">
          <ProductMockup variant="product" />
        </ScrollReveal>
      </section>

      <section
        id="descarga"
        className="relative w-full overflow-hidden py-20"
      >
        <DotField
          className="pointer-events-auto !absolute inset-0 z-0"
          dotRadius={1.5}
          dotSpacing={16}
          cursorRadius={400}
          bulgeStrength={50}
          gradientFrom="rgba(243, 41, 183, 0.5)"
          gradientTo="rgba(169, 41, 243, 0.2)"
          glowColor="transparent"
        />
        <ScrollReveal className="relative z-10 mx-auto max-w-3xl px-6 text-center sm:px-10 lg:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary">
            {t.downloadEyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-text-primary sm:text-5xl">
            {t.downloadTitle}
          </h2>
          <p className="mt-5 text-lg leading-8 text-text-muted">
            {t.downloadDescription}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row sm:items-start">
            {/* macOS */}
            <div className="flex w-full flex-col items-center gap-2 sm:w-auto">
            <a
              href={downloads.mac}
              className="group inline-flex h-14 w-full items-center justify-center gap-3 rounded-2xl border border-border-subtle bg-surface-elevated/80 px-6 text-base font-semibold text-text-primary backdrop-blur-sm transition hover:border-primary hover:bg-primary/10 hover:text-primary sm:w-auto sm:min-w-[180px]"
            >
              <svg className="size-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8.286 7.008c-3.216 0 -4.286 3.23 -4.286 5.92c0 3.229 2.143 8.072 4.286 8.072c1.165 -.05 1.799 -.538 3.214 -.538c1.406 0 1.607 .538 3.214 .538s4.286 -3.229 4.286 -5.381c-.03 -.011 -2.649 -.434 -2.679 -3.23c-.02 -2.335 2.589 -3.179 2.679 -3.228c-1.096 -1.606 -3.162 -2.113 -3.75 -2.153c-1.535 -.12 -3.032 1.077 -3.75 1.077c-.729 0 -2.036 -1.077 -3.214 -1.077" />
                <path d="M12 4a2 2 0 0 0 2 -2a2 2 0 0 0 -2 2" />
              </svg>
              {t.downloadMac}
            </a>
              <p className="text-xs text-text-muted">{t.downloadMacNote}</p>
            </div>

            {/* Windows */}
            <div className="flex w-full flex-col items-center gap-2 sm:w-auto">
            <a
              href={downloads.windows}
              className="group inline-flex h-14 w-full items-center justify-center gap-3 rounded-2xl border border-border-subtle bg-surface-elevated/80 px-6 text-base font-semibold text-text-primary backdrop-blur-sm transition hover:border-primary hover:bg-primary/10 hover:text-primary sm:w-auto sm:min-w-[180px]"
            >
              <svg className="size-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.8 20l-12 -1.5c-1 -.1 -1.8 -.9 -1.8 -1.9v-9.2c0 -1 .8 -1.8 1.8 -1.9l12 -1.5c1.2 -.1 2.2 .8 2.2 1.9v12.1c0 1.2 -1.1 2.1 -2.2 1.9l0 .1" />
                <path d="M12 5l0 14" />
                <path d="M4 12l16 0" />
              </svg>
              {t.downloadWindows}
            </a>
              <p className="text-xs text-text-muted">{t.downloadWindowsNote}</p>
            </div>

            {/* Linux */}
            <div className="flex w-full flex-col items-center gap-2 sm:w-auto">
            <a
              href={downloads.linux}
              className="group inline-flex h-14 w-full items-center justify-center gap-3 rounded-2xl border border-border-subtle bg-surface-elevated/80 px-6 text-base font-semibold text-text-primary backdrop-blur-sm transition hover:border-primary hover:bg-primary/10 hover:text-primary sm:w-auto sm:min-w-[180px]"
            >
              <svg className="size-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17.723 7.41a7.992 7.992 0 0 0 -3.74 -2.162m-3.971 0a7.993 7.993 0 0 0 -3.789 2.216m-1.881 3.215a8 8 0 0 0 -.342 2.32c0 .738 .1 1.453 .287 2.132m1.96 3.428a7.993 7.993 0 0 0 3.759 2.19m4 0a7.993 7.993 0 0 0 3.747 -2.186m1.962 -3.43a8.008 8.008 0 0 0 .287 -2.131c0 -.764 -.107 -1.503 -.307 -2.203" />
                <path d="M3 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              </svg>
              {t.downloadLinux}
            </a>
              <p className="text-xs text-text-muted">{t.downloadLinuxNote}</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section
        id="contacto"
        className="relative w-full overflow-hidden py-20"
      >
        <DotField
          className="pointer-events-auto !absolute inset-0 z-0"
          dotRadius={1.5}
          dotSpacing={16}
          cursorRadius={400}
          bulgeStrength={50}
          gradientFrom="rgba(243, 41, 183, 0.5)"
          gradientTo="rgba(169, 41, 243, 0.2)"
          glowColor="transparent"
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12">
          <ScrollReveal className="border-glow overflow-hidden rounded-[2.5rem] border border-border-active bg-primary p-8 text-primary-fg sm:p-12 lg:p-16">
            <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.35em] opacity-70">
              {t.ctaEyebrow}
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
              {t.ctaTitle}
            </h2>
            <p className="mt-6 text-lg leading-8 opacity-80">
              {t.ctaDescription}
            </p>
            <ContactModal>
              <span className="mt-10 inline-flex h-14 items-center justify-center rounded-full bg-primary-fg px-7 text-base font-semibold text-primary transition hover:opacity-90">
                {t.contactAgent}
              </span>
            </ContactModal>
          </div>
        </ScrollReveal>
        </div>
      </section>

      <footer className="relative border-t border-border-active bg-[#080C0A] px-6 py-14 sm:px-10 lg:px-12">
        <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="max-w-md">
            <a href="#" className="inline-flex" aria-label="Qhipa">
              <Image
                src={assetPath("/brand/logotipo-qhipa-footer.svg")}
                alt="Qhipa"
                width={630}
                height={124}
                className="h-12 w-auto sm:h-14"
              />
            </a>
            <p className="mt-3 max-w-md text-sm leading-6 text-text-muted">
              {t.footerDescription}
            </p>
            <p className="mt-5 text-sm text-text-dim">
              {t.footerNote}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h2 className="text-sm font-semibold text-text-primary">
                  {column.title}
                </h2>
                <div className="mt-4 flex flex-col gap-3 text-sm text-text-muted">
                  {column.links.map((link) =>
                    link.action === "cookies" ? (
                      <CookiesModal key={link.label}>
                        <span className="cursor-pointer text-left transition hover:text-primary">
                          {link.label}
                        </span>
                      </CookiesModal>
                    ) : link.action === "contact" ? (
                      <ContactModal key={link.label}>
                        <span className="cursor-pointer text-left transition hover:text-primary">
                          {link.label}
                        </span>
                      </ContactModal>
                    ) : (
                      <a
                        key={link.label}
                        href={link.href}
                        {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="transition hover:text-primary"
                      >
                        {link.label}
                      </a>
                    ),
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-border-active pt-6 text-center text-sm text-text-dim lg:col-span-2">
            <p>
              © {new Date().getFullYear()} Qhipa. {t.rights}
            </p>
          </div>
        </div>
      </footer>

      <CookieBanner />
    </main>
  );
}
