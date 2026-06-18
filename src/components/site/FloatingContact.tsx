import { useState } from "react";
import { Phone, X } from "lucide-react";
import { COMPANY } from "@/lib/site-content";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M19.11 17.39c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.6-1.5-1.87-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.83-2.02-.22-.53-.45-.46-.61-.47l-.52-.01c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.35.98 2.65 1.12 2.83.14.18 1.94 2.96 4.69 4.15.66.28 1.17.45 1.57.58.66.21 1.26.18 1.74.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.18.16-1.28-.07-.11-.25-.18-.52-.32zM16.02 5.33c-5.9 0-10.7 4.8-10.7 10.7 0 1.88.49 3.72 1.43 5.34l-1.52 5.55 5.69-1.49a10.7 10.7 0 0 0 5.1 1.3h.01c5.9 0 10.7-4.8 10.7-10.7s-4.81-10.7-10.71-10.7z" />
    </svg>
  );
}

export function FloatingContact() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="flex flex-col items-end gap-2 rounded-2xl border border-border bg-white p-2 shadow-xl">
          <a
            href={COMPANY.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-ink transition hover:bg-surface"
          >
            <WhatsAppIcon className="size-4 text-[#25D366]" /> WhatsApp
          </a>
          <a
            href={COMPANY.phoneHref}
            className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-ink transition hover:bg-surface"
          >
            <Phone className="size-4 text-brand" /> Call us
          </a>
        </div>
      )}
      <button
        aria-label="Contact options"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex size-12 items-center justify-center rounded-full bg-[#ef5b5b] text-white shadow-lg ring-1 ring-black/5 transition hover:bg-[#e54848]"
      >
        {open ? <X className="size-5" /> : (
          <svg viewBox="0 0 24 24" className="size-6" fill="currentColor" aria-hidden="true">
            <path d="M5 3h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-8.5L6 21.5V17H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm3 5a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2H8zm0 4a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2H8z" />
          </svg>
        )}
      </button>
    </div>
  );
}
