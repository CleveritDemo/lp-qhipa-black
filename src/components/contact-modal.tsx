"use client";

import { FormEvent, ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Bot, CalendarCheck, MessageSquare, Send, X } from "lucide-react";

type ContactModalProps = {
  children: ReactNode;
};

export function ContactModal({ children }: ContactModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [intent, setIntent] = useState<"demo" | "message">("demo");

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = data.get("name")?.toString() ?? "";
    const email = data.get("email")?.toString() ?? "";
    const message = data.get("message")?.toString() ?? "";
    const subject = intent === "demo" ? "Solicitar demo de Qhipa" : "Mensaje para Qhipa";
    const body = [
      `Nombre: ${name}`,
      `Email: ${email}`,
      `Tipo: ${intent === "demo" ? "Solicitar demo" : "Enviar mensaje"}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:hola@qhipa.dev?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setIsOpen(false);
  }

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)} className="contents">
        {children}
      </button>

      {isOpen && typeof document !== "undefined"
        ? createPortal(
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/70 px-4 py-8 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            aria-label="Cerrar modal"
            onClick={() => setIsOpen(false)}
          />

          <div className="border-glow relative w-full max-w-xl overflow-hidden rounded-[2rem] border border-border-subtle bg-surface p-6 shadow-2xl shadow-black/60 sm:p-8">
            <button
              type="button"
              aria-label="Cerrar modal"
              onClick={() => setIsOpen(false)}
              className="absolute right-5 top-5 grid size-9 place-items-center rounded-full border border-border-subtle text-text-muted transition hover:border-border-active hover:text-text-primary"
            >
              <X className="size-4" />
            </button>

            <div className="mb-6 flex items-center gap-3">
              <div className="grid size-11 place-items-center rounded-2xl bg-primary text-primary-fg">
                <Bot className="size-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-primary">Contactar a un agente</p>
                <h2 id="contact-modal-title" className="text-2xl font-semibold text-text-primary">
                  Solicita una demo o envía un mensaje
                </h2>
              </div>
            </div>

            <div className="mb-6 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => setIntent("demo")}
                className={`border-glow rounded-2xl border p-4 text-left transition ${
                  intent === "demo"
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border-subtle bg-surface-elevated text-text-muted hover:border-border-active"
                }`}
              >
                <CalendarCheck className="mb-3 size-5" />
                <span className="font-semibold">Pedir demo</span>
              </button>
              <button
                type="button"
                onClick={() => setIntent("message")}
                className={`border-glow rounded-2xl border p-4 text-left transition ${
                  intent === "message"
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border-subtle bg-surface-elevated text-text-muted hover:border-border-active"
                }`}
              >
                <MessageSquare className="mb-3 size-5" />
                <span className="font-semibold">Enviar mensaje</span>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                required
                placeholder="Nombre"
                className="h-12 w-full rounded-2xl border border-border-subtle bg-canvas px-4 text-sm text-text-primary outline-none transition placeholder:text-text-dim focus:border-primary"
              />
              <input
                name="email"
                required
                type="email"
                placeholder="Email"
                className="h-12 w-full rounded-2xl border border-border-subtle bg-canvas px-4 text-sm text-text-primary outline-none transition placeholder:text-text-dim focus:border-primary"
              />
              <textarea
                name="message"
                required
                rows={5}
                placeholder={
                  intent === "demo"
                    ? "Cuéntanos sobre tu equipo y qué flujo quieres ver en la demo."
                    : "Escribe tu mensaje para el equipo de Qhipa."
                }
                className="w-full resize-none rounded-2xl border border-border-subtle bg-canvas px-4 py-3 text-sm text-text-primary outline-none transition placeholder:text-text-dim focus:border-primary"
              />
              <button
                type="submit"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-fg transition hover:bg-primary-hover"
              >
                <Send className="size-4" />
                {intent === "demo" ? "Solicitar demo" : "Enviar mensaje"}
              </button>
            </form>
          </div>
        </div>,
        document.body,
        )
        : null}
    </>
  );
}
