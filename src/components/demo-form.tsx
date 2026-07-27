"use client";

import { useState } from "react";

// Where demo/contact requests are sent (from the live site). To wire this to a
// CRM instead (the brand deck lists HubSpot / Attio), replace the submit handler.
const INBOX = { demo: "jake@basta.app", contact: "hi@basta.app" } as const;

export function DemoForm({ kind = "demo" }: { kind?: "demo" | "contact" }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject =
      kind === "demo"
        ? `Demo request — ${form.company || form.name}`
        : `Hello from ${form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.company && `Company: ${form.company}`,
      "",
      form.message,
    ]
      .filter(Boolean)
      .join("\n");
    // Opens the visitor's email client addressed to Basta (no backend needed).
    window.location.href = `mailto:${INBOX[kind]}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  const field =
    "w-full rounded-xl border border-muted/60 bg-white/60 px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-black";

  return (
    <form onSubmit={onSubmit} className="mx-auto flex max-w-xl flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          required
          placeholder="Your name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={field}
        />
        <input
          required
          type="email"
          placeholder="Work email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={field}
        />
      </div>
      <input
        placeholder="Company / house (optional)"
        value={form.company}
        onChange={(e) => setForm({ ...form, company: e.target.value })}
        className={field}
      />
      <textarea
        required
        rows={4}
        placeholder={
          kind === "demo"
            ? "What would you like to auction?"
            : "How can we help?"
        }
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className={`${field} resize-none`}
      />
      <button
        type="submit"
        className="font-display inline-flex items-center justify-center rounded-full border border-black bg-acid px-8 py-4 text-xs uppercase tracking-[0.08em] text-black transition-transform hover:-translate-y-0.5"
      >
        {kind === "demo" ? "Request a demo" : "Send message"}
      </button>
      <p className="text-center text-xs text-ink/50">
        We&apos;ll get back to you within one business day.
      </p>
    </form>
  );
}
