import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de privacidad | Qhipa",
  description:
    "Política de privacidad de Qhipa, un producto de Raven. Datos tratados, base legal, derechos RGPD y Ley 19.628 de Chile.",
};

const sections = [
  {
    title: "Responsable del tratamiento",
    body: "Raven, en su calidad de responsable, trata los datos recogidos a través de Qhipa. Puedes contactarnos en privacy@qhipa.dev para cualquier asunto relativo a esta política.",
  },
  {
    title: "Qué datos recogemos",
    body: "Datos que nos entregas en el formulario de contacto (nombre, correo corporativo, empresa, tamaño de equipo y mensaje) y datos técnicos de navegación cuando has consentido cookies analíticas: páginas vistas, origen de la visita y tipo de dispositivo.",
  },
  {
    title: "Para qué los usamos",
    body: "Responder tu solicitud de demo, diagnóstico o piloto; gestionar la relación comercial; y, con tu consentimiento, medir el rendimiento del sitio y de nuestras campañas. No vendemos datos personales ni los usamos para decisiones automatizadas.",
  },
  {
    title: "Base legal y conservación",
    body: "El tratamiento se basa en tu consentimiento y en el interés legítimo de atender solicitudes comerciales. Conservamos los datos de contacto mientras exista relación comercial y hasta 24 meses después del último contacto.",
  },
  {
    title: "Datos de la plataforma",
    body: "Cuando conectas tus repositorios, Qhipa accede mediante tokens y claves API con verificación SSL. Procesamos metadatos de actividad de desarrollo, no el contenido de tu código fuente, y actuamos como encargado del tratamiento bajo tu instrucción.",
  },
  {
    title: "Tus derechos",
    body: "Puedes acceder, rectificar, suprimir, oponerte o solicitar la portabilidad de tus datos, y retirar tu consentimiento en cualquier momento escribiendo a privacy@qhipa.dev. También puedes reclamar ante la autoridad de control de tu país.",
  },
];

export default function PrivacidadPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-canvas text-text-primary">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_color-mix(in_srgb,var(--color-primary)_12%,transparent),_transparent_40%),linear-gradient(180deg,_var(--color-surface),_var(--color-canvas)_40%)]" />

      {/* Top bar with back button */}
      <header className="sticky top-0 z-50 border-b border-border-subtle bg-canvas/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4 sm:px-10">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-text-dim">
            Legal
          </span>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-border-subtle px-5 py-2.5 text-sm font-medium text-text-muted transition hover:border-border-active hover:text-primary"
          >
            <ArrowLeft className="size-4" />
            Volver al inicio
          </Link>
        </div>
      </header>

      {/* Content */}
      <article className="relative mx-auto max-w-4xl px-6 pb-24 pt-16 sm:px-10">
        {/* Header */}
        <div className="mb-14">
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-border-active bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Shield className="size-4" />
            Privacidad
          </div>
          <h1 className="text-4xl font-semibold tracking-[-0.04em] text-text-primary sm:text-5xl">
            Política de privacidad
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-text-muted">
            Qhipa es un producto de Raven. Esta política explica qué datos
            tratamos cuando visitas el sitio o usas la plataforma, con qué base
            legal y qué derechos tienes bajo el RGPD y la Ley 19.628 de Chile.
          </p>
        </div>

        {/* Sections */}
        <div className="divide-y divide-border-subtle">
          {sections.map((section, index) => (
            <section key={section.title} className="py-8 first:pt-0">
              <h2 className="text-lg font-semibold text-text-primary sm:text-xl">
                <span className="mr-2 text-primary">{index + 1}.</span>
                {section.title}
              </h2>
              <p className="mt-3 leading-7 text-text-muted">
                {section.body}
              </p>
            </section>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-10 border-t border-border-subtle pt-8">
          <p className="text-sm leading-6 text-text-dim">
            <span className="font-semibold text-text-muted">
              Última actualización:
            </span>{" "}
            agosto de 2026. Texto de referencia: debe ser revisado por el equipo
            legal antes de publicarse.
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-border-subtle px-7 text-base font-semibold text-text-muted transition hover:border-border-active hover:text-primary"
          >
            <ArrowLeft className="size-5" />
            Volver al inicio
          </Link>
        </div>
      </article>
    </main>
  );
}
