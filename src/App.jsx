import {
  Shield,
  FileText,
  AlertTriangle,
  Wrench,
  Umbrella,
  BatteryCharging,
  Users,
  Truck,
  Download,
  TrafficCone,
  Phone,
  ChevronRight,
  Car,
  Gauge,
  Bell,
} from "lucide-react";
import mockup from "./assets/mockup.png";

/* ──────────────────────────────────────────────
   HERO
   ────────────────────────────────────────────── */
function Hero() {
  return (
    <section id="app" className="relative overflow-hidden bg-ravagx-bg">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-ravagx-orange/10 blur-[120px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 py-24 lg:flex-row lg:gap-16 lg:py-32">
        {/* Text side */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            El control de tu vehículo,{" "}
            <span className="text-ravagx-orange">ahora en tu bolsillo</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ravagx-gray sm:text-xl mx-auto lg:mx-0">
            Consulta tu SOAT, inspección técnica, multas y más desde un solo
            lugar. RavaGx es tu copiloto digital en las calles del Perú.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-full bg-ravagx-orange px-8 py-3.5 text-base font-bold text-white shadow-[0_0_20px_rgba(255,77,41,0.5)] transition hover:shadow-[0_0_30px_rgba(255,77,41,0.7)] hover:brightness-110"
            >
              <Download className="h-5 w-5" />
              Descargar App
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-1 rounded-full border border-ravagx-border px-6 py-3.5 text-sm font-semibold text-ravagx-gray transition hover:border-ravagx-orange hover:text-white"
            >
              Ver características
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Phone mockup */}
        <div className="flex flex-1 items-center justify-center">
          <img
            src={mockup}
            alt="RavaGx App"
            className="h-full w-full max-h-[600px] object-contain drop-shadow-[0_0_40px_rgba(255,77,41,0.15)]"
          />
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   SERVICES GRID  (mirrors the app's icon menu)
   ────────────────────────────────────────────── */
const services = [
  { icon: Shield, label: "SOAT" },
  { icon: FileText, label: "Inspección" },
  { icon: AlertTriangle, label: "Multas" },
  { icon: Wrench, label: "Talleres" },
  { icon: Umbrella, label: "Seguros" },
  { icon: BatteryCharging, label: "Batería" },
  { icon: Users, label: "Comunidad" },
  { icon: Truck, label: "Grúa" },
];

function ServicesBar() {
  return (
    <section className="bg-ravagx-bg">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-10 text-center text-2xl font-bold text-white sm:text-3xl">
          Todo lo que necesitas, en{" "}
          <span className="text-ravagx-orange">un solo lugar</span>
        </h2>
        <div className="grid grid-cols-4 gap-4 sm:grid-cols-4 md:grid-cols-8">
          {services.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="group flex flex-col items-center gap-2 rounded-2xl bg-ravagx-card p-4 transition hover:bg-ravagx-card/80 hover:shadow-[0_0_12px_rgba(255,77,41,0.2)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ravagx-bg text-ravagx-orange transition group-hover:scale-110">
                <Icon className="h-6 w-6" />
              </div>
              <span className="text-[11px] font-medium text-ravagx-gray sm:text-xs">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   FEATURES (3 cards)
   ────────────────────────────────────────────── */
const features = [
  {
    icon: TrafficCone,
    title: "Semáforo Legal",
    description:
      "Visualiza en tiempo real el estado de tu SOAT, inspección técnica vehicular y multas pendientes con un semáforo intuitivo de colores.",
  },
  {
    icon: Phone,
    title: "Botón SOS",
    description:
      "Ante cualquier emergencia en la vía, accede con un toque a asistencia de grúa, seguros y talleres cercanos a tu ubicación.",
  },
  {
    icon: Users,
    title: "Comunidad",
    description:
      "Conéctate con otros conductores, comparte experiencias, reporta incidentes y mantente informado sobre las novedades del tránsito peruano.",
  },
];

function Features() {
  return (
    <section id="features" className="bg-ravagx-bg">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="mb-4 text-center text-3xl font-extrabold text-white sm:text-4xl">
          Características{" "}
          <span className="text-ravagx-orange">Principales</span>
        </h2>
        <p className="mx-auto mb-14 max-w-2xl text-center text-ravagx-gray">
          Diseñadas para facilitar tu día a día como conductor en las calles del
          Perú.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-3xl border border-ravagx-border bg-ravagx-card p-8 transition hover:border-ravagx-orange/40 hover:shadow-[0_0_20px_rgba(255,77,41,0.1)]"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-ravagx-orange/10 text-ravagx-orange transition group-hover:bg-ravagx-orange group-hover:text-white">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
              <p className="leading-relaxed text-ravagx-gray">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   GARAGE PREVIEW (mirrors "Mi Garaje" from app)
   ────────────────────────────────────────────── */
const vehicles = [
  {
    plate: "CCC-789",
    brand: "Motrix",
    model: "Urban X Sport",
    year: 2020,
    color: "#FFFFFF",
    colorName: "Blanco",
  },
  {
    plate: "BBB-456",
    brand: "Velocis",
    model: "Falcon GT",
    year: 2023,
    color: "#FF4D29",
    colorName: "Rojo",
  },
  {
    plate: "AAA-123",
    brand: "Autonix",
    model: "Strider LX",
    year: 2021,
    color: "#3B82F6",
    colorName: "Azul",
  },
];

function GaragePreview() {
  return (
    <section className="bg-ravagx-bg">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Mi <span className="text-ravagx-orange">Garaje</span>
          </h2>
          <button className="inline-flex items-center gap-1.5 rounded-full bg-ravagx-orange px-5 py-2 text-sm font-semibold text-white transition hover:brightness-110">
            + Agregar
          </button>
        </div>

        <div className="flex flex-col gap-4">
          {vehicles.map((v) => (
            <div
              key={v.plate}
              className="flex items-center gap-4 rounded-2xl border border-ravagx-border bg-ravagx-card p-5 transition hover:border-ravagx-orange/30"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-ravagx-orange/15">
                <Car className="h-7 w-7 text-ravagx-orange" />
              </div>
              <div className="flex-1">
                <p className="text-lg font-bold text-white">{v.plate}</p>
                <p className="text-sm text-ravagx-gray">
                  {v.brand} · {v.model} · {v.year}
                </p>
                <div className="mt-1 flex items-center gap-1.5">
                  <span
                    className="inline-block h-3 w-3 rounded-full border border-white/20"
                    style={{ backgroundColor: v.color }}
                  />
                  <span className="text-xs text-ravagx-gray">
                    {v.colorName}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   CTA / DOWNLOAD SECTION
   ────────────────────────────────────────────── */
function CTA() {
  return (
    <section id="cta" className="bg-ravagx-bg">
      <div className="mx-auto max-w-4xl px-6 py-24 text-center">
        <div className="rounded-3xl border border-ravagx-orange/20 bg-gradient-to-br from-ravagx-card to-ravagx-bg p-12 shadow-[0_0_60px_rgba(255,77,41,0.08)]">
          <Gauge className="mx-auto mb-6 h-14 w-14 text-ravagx-orange" />
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            ¿Listo para tomar el control?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ravagx-gray">
            Únete a miles de conductores peruanos que ya gestionan su SOAT,
            multas e inspección desde la palma de su mano.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-ravagx-orange px-8 py-4 text-base font-bold text-white shadow-[0_0_20px_rgba(255,77,41,0.5)] transition hover:shadow-[0_0_30px_rgba(255,77,41,0.7)] hover:brightness-110"
            >
              <Download className="h-5 w-5" />
              Descargar en Google Play
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-ravagx-orange px-8 py-4 text-base font-bold text-ravagx-orange transition hover:bg-ravagx-orange hover:text-white"
            >
              <Bell className="h-5 w-5" />
              Notifícame al lanzamiento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   HOME PAGE (Landing)
   ────────────────────────────────────────────── */
export default function App() {
  return (
    <>
      <Hero />
      <ServicesBar />
      <Features />
      <GaragePreview />
      <CTA />
    </>
  );
}
