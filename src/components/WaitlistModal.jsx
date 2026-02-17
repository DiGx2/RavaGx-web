import { useState } from "react";
import { X, Mail, Loader2, CheckCircle2, AlertCircle, PartyPopper } from "lucide-react";
import { supabase } from "../lib/supabase";

export default function WaitlistModal({ open, onClose }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | duplicate | error
  const [errorMsg, setErrorMsg] = useState("");

  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const { error } = await supabase
        .from("waitlist")
        .insert([{ email: email.toLowerCase().trim() }]);

      if (error) {
        // Unique constraint violation = email already exists
        if (error.code === "23505") {
          setStatus("duplicate");
          return;
        }
        throw error;
      }
      setStatus("success");
    } catch (err) {
      console.error(err);
      setErrorMsg("Ocurrió un error. Inténtalo de nuevo.");
      setStatus("error");
    }
  };

  const handleClose = () => {
    setEmail("");
    setStatus("idle");
    setErrorMsg("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md animate-[fadeUp_0.3s_ease-out] rounded-3xl border border-ravagx-border bg-ravagx-card p-8 shadow-[0_0_80px_rgba(255,77,41,0.1)]">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-full p-1.5 text-ravagx-gray transition hover:bg-white/10 hover:text-white"
          aria-label="Cerrar"
        >
          <X className="h-5 w-5" />
        </button>

        {status === "success" ? (
          /* ── Success state ── */
          <div className="flex flex-col items-center gap-4 py-6 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-ravagx-orange/15">
              <CheckCircle2 className="h-9 w-9 text-ravagx-orange" />
            </div>
            <h3 className="text-2xl font-bold text-white">¡Gracias!</h3>
            <p className="text-ravagx-gray">
              Te avisaremos pronto cuando RavaGx esté disponible para ti.
            </p>
            <button
              onClick={handleClose}
              className="mt-2 rounded-full bg-ravagx-orange px-8 py-3 text-sm font-bold text-white transition hover:brightness-110"
            >
              Entendido
            </button>
          </div>
        ) : status === "duplicate" ? (
          /* ── Duplicate state ── */
          <div className="flex flex-col items-center gap-4 py-6 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-ravagx-orange/15">
              <PartyPopper className="h-9 w-9 text-ravagx-orange" />
            </div>
            <h3 className="text-2xl font-bold text-white">¡Ya estás en la lista!</h3>
            <p className="text-ravagx-gray">
              El correo <span className="font-semibold text-white">{email}</span> ya
              está registrado. No te preocupes, te notificaremos apenas RavaGx esté
              disponible.
            </p>
            <button
              onClick={handleClose}
              className="mt-2 rounded-full bg-ravagx-orange px-8 py-3 text-sm font-bold text-white transition hover:brightness-110"
            >
              ¡Perfecto!
            </button>
          </div>
        ) : (
          /* ── Form state ── */
          <>
            <div className="mb-6 text-center">
              <h3 className="text-2xl font-bold text-white">
                Sé el primero en probar{" "}
                <span className="text-ravagx-orange">RavaGx</span>
              </h3>
              <p className="mt-2 text-sm text-ravagx-gray">
                Únete a la lista de espera y te notificaremos cuando la app esté
                disponible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ravagx-gray" />
                <input
                  type="email"
                  required
                  placeholder="tucorreo@ejemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-2xl border border-ravagx-border bg-ravagx-bg py-3.5 pl-12 pr-4 text-white placeholder:text-ravagx-gray/60 outline-none transition focus:border-ravagx-orange focus:shadow-[0_0_12px_rgba(255,77,41,0.2)]"
                />
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 rounded-xl bg-red-500/10 px-4 py-2.5 text-sm text-red-400">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-ravagx-orange py-3.5 text-base font-bold text-white shadow-[0_0_15px_rgba(255,77,41,0.4)] transition hover:shadow-[0_0_25px_rgba(255,77,41,0.6)] hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  "Notificarme"
                )}
              </button>
            </form>

            <p className="mt-4 text-center text-xs text-ravagx-gray/60">
              Solo usaremos tu email para avisarte. Sin spam, lo prometemos.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
