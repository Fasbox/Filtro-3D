export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#FAF7EF] px-6 py-16 lg:px-8">
      <div
        className="absolute inset-x-0 top-0 h-64"
        style={{
          backgroundImage: 'radial-gradient(circle at top, rgba(126,200,196,0.24), transparent 55%)',
        }}
      />
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="max-w-2xl space-y-6">
          <span className="inline-flex rounded-full bg-[#C7EDE4] px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-[#1F4D36]">
            EcoBioFilter • Purificación inteligente
          </span>
          <h1
            className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
            style={{ color: '#051F15', opacity: 1, textShadow: '0 1px 3px rgba(10, 35, 22, 0.08)' }}
          >
            Explora un filtro de agua modular en 3D para hogares sostenibles.
          </h1>
          <p className="max-w-xl text-base leading-8 text-[#32473D] sm:text-lg">
            Visualiza cada cámara, entiende su función y descubre cómo un sistema doméstico modular con biorremediación activa ofrece agua segura, económica y libre de metales pesados.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="#sistema" className="inline-flex items-center justify-center rounded-full bg-[#2F7D4E] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#2F7D4E]/20 transition hover:bg-[#256944]">
              Explorar componentes
            </a>
            <a href="#funcionamiento" className="inline-flex items-center justify-center rounded-full border border-[#A47148] bg-[#FAF7EF] px-6 py-3 text-sm font-semibold text-[#A47148] transition hover:bg-[#F1E6D0]">
              Ver funcionamiento
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-3xl border border-[#D8D1C4] bg-white/90 px-5 py-4 shadow-sm">
              <p className="text-sm font-semibold text-[#1F4D36]">5 espacios independientes</p>
              <p className="mt-2 text-sm text-[#57615d]">Control total del flujo y los módulos del filtro.</p>
            </div>
            <div className="rounded-3xl border border-[#D8D1C4] bg-white/90 px-5 py-4 shadow-sm">
              <p className="text-sm font-semibold text-[#1F4D36]">Biorremediación activa</p>
              <p className="mt-2 text-sm text-[#57615d]">Microorganismos inmovilizados degradan contaminantes químicos y orgánicos.</p>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-24 rounded-full"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(126,200,196,0.25), transparent 60%)',
            }}
          />
          <div className="relative w-full overflow-hidden rounded-[36px] border border-[#D8D1C4] bg-white/90 p-6 shadow-[0_32px_80px_-42px_rgba(47,125,78,0.22)]">
            <div
              className="relative mx-auto flex w-full max-w-md items-center justify-center overflow-hidden rounded-[28px] bg-linear-to-br from-[#E8F5F2] via-[#F5F1E7] to-[#F9FAF6] p-6 shadow-inner shadow-[#2F7D4E]/10"
              style={{ minHeight: '420px' }}
            >
              <div
                className="absolute inset-0 rounded-[28px]"
                style={{
                  backgroundImage: 'radial-gradient(circle at top left, rgba(126,200,196,0.25), transparent 25%)',
                }}
              />
              <div className="absolute -left-8 top-12 h-24 w-24 rounded-full bg-[#C7EDE4]/90 blur-2xl" />
              <div className="absolute right-6 bottom-10 h-28 w-28 rounded-full bg-[#F1E6D0]/90 blur-2xl" />
              <div className="relative flex h-full w-full items-center justify-center">
                <div className="relative h-72 w-72">
                  <div className="absolute left-1/2 top-4 h-14 w-56 -translate-x-1/2 rounded-3xl border border-[#D8D1C4] bg-white/80 shadow-[0_18px_40px_-20px_rgba(31,77,54,0.2)]" />
                  <div className="absolute left-1/2 top-20 h-14 w-60 -translate-x-1/2 rounded-3xl border border-[#D8D1C4] bg-[#F1E6D0]/90 shadow-[0_18px_40px_-20px_rgba(47,125,78,0.16)]" />
                  <div className="absolute left-1/2 top-36 h-14 w-52 -translate-x-1/2 rounded-3xl border border-[#D8D1C4] bg-[#C7EDE4]/90 shadow-[0_18px_40px_-20px_rgba(47,125,78,0.16)]" />
                  <div className="absolute left-1/2 top-52 h-16 w-48 -translate-x-1/2 rounded-3xl border border-[#A47148] bg-white/90 shadow-[0_18px_40px_-20px_rgba(47,125,78,0.16)]" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 left-1/2 grid w-[calc(100%-2rem)] -translate-x-1/2 gap-4 rounded-[28px] bg-[#F1E6D0]/95 p-4 text-sm shadow-xl shadow-[#1F4D36]/5 sm:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[#2F7D4E]">Reducción de residuos</p>
                <p className="mt-2 text-sm text-[#42514a]">Diseño modular que minimiza el plástico y extiende la vida útil.</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[#2F7D4E]">Agua de mejor calidad</p>
                <p className="mt-2 text-sm text-[#42514a]">Elimina metales pesados, sedimentos y malos olores en el punto de uso.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
