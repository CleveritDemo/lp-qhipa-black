"use client";

import { useState, useEffect } from "react";
import { CookiesModal } from "@/components/cookies-modal";

const CONSENT_KEY = "cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setVisible(!localStorage.getItem(CONSENT_KEY));
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  function handleAcceptAll() {
    localStorage.setItem(CONSENT_KEY, "all");
    setVisible(false);
  }

  function handleRejectOptional() {
    localStorage.setItem(CONSENT_KEY, "necessary");
    setVisible(false);
  }

  function handleConfigSaved() {
    localStorage.setItem(CONSENT_KEY, "custom");
    setVisible(false);
  }

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border-subtle bg-surface/95 backdrop-blur-xl animate-in slide-in-from-bottom-full duration-500">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 px-6 py-4 sm:flex-row sm:items-center sm:px-10 lg:px-12">
        {/* Text */}
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-text-primary">
            Tu privacidad, tu decisión
          </p>
          <p className="mt-1 text-sm leading-6 text-text-muted">
            Usamos cookies necesarias para el funcionamiento del sitio. Con tu
            consentimiento también usaremos cookies analíticas y de marketing
            para medir el rendimiento de nuestras campañas. Puedes rechazarlas
            sin perder funcionalidad.
          </p>
        </div>

        {/* Actions */}
        <div className="flex shrink-0 flex-wrap items-center gap-3">
          <CookiesModal onSave={handleConfigSaved}>
            <span className="cursor-pointer text-sm font-medium text-text-muted transition hover:text-primary">
              Configurar
            </span>
          </CookiesModal>

          <button
            type="button"
            onClick={handleRejectOptional}
            className="inline-flex h-10 items-center justify-center rounded-full border border-border-subtle px-5 text-sm font-semibold text-text-muted transition hover:border-border-active hover:text-text-primary"
          >
            Rechazar opcionales
          </button>

          <button
            type="button"
            onClick={handleAcceptAll}
            className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-fg transition hover:bg-primary-hover"
          >
            Aceptar todas
          </button>
        </div>
      </div>
    </div>
  );
}
