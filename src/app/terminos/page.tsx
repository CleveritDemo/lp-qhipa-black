import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Términos de servicio | Qhipa",
  description:
    "Condiciones de uso del sitio y de la plataforma Qhipa, un producto de Raven. Cuentas, licencias, propiedad intelectual y ley aplicable.",
};

const sections = [
  {
    title: "Servicio",
    body: "Qhipa es una plataforma de engineering intelligence entregada como SaaS o desplegada en la infraestructura del cliente. El alcance concreto, los módulos y los niveles de servicio se detallan en el acuerdo comercial firmado.",
  },
  {
    title: "Cuentas y licencias",
    body: "El precio se calcula por usuario activo al mes en las plataformas conectadas. El cliente es responsable de mantener la confidencialidad de las credenciales y del uso que hagan sus usuarios autorizados.",
  },
  {
    title: "Piloto y diagnóstico",
    body: "El diagnóstico de dos semanas y el piloto de 30 días se prestan sin costo y sin obligación de contratar. Al término, los datos procesados se eliminan si no se firma un acuerdo.",
  },
  {
    title: "Propiedad intelectual",
    body: "Qhipa y sus componentes son propiedad de Raven. Los datos del cliente, incluidos los metadatos de sus repositorios y los informes generados, son y siguen siendo propiedad del cliente.",
  },
  {
    title: "Disponibilidad y responsabilidad",
    body: "Los compromisos de disponibilidad y soporte aplican según el plan contratado. La responsabilidad de Raven se limita al importe pagado en los doce meses anteriores al hecho que la origine, salvo dolo o culpa grave.",
  },
  {
    title: "Ley aplicable",
    body: "Estas condiciones se rigen por la legislación chilena, sin perjuicio de las normas imperativas aplicables a clientes de la Unión Europea. Las controversias se someterán a los tribunales de Santiago de Chile.",
  },
];

export default function TerminosPage() {
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
            <Scale className="size-4" />
            Legal
          </div>
          <h1 className="text-4xl font-semibold tracking-[-0.04em] text-text-primary sm:text-5xl">
            Términos de servicio
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-text-muted">
            Estas condiciones rigen el uso del sitio y de la plataforma Qhipa.
            Al contratar un plan o iniciar un piloto, aceptas
            lo siguiente.
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
