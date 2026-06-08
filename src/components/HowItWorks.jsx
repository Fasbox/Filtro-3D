export default function HowItWorks() {
  const steps = [
    {
      title: '1. Entrada del agua',
      description:
        'El agua llega desde el grifo al filtro EcoBioFilter y se distribuye en la cámara superior para iniciar el proceso de purificación.'
    },
    {
      title: '2. Filtrado físico',
      description:
        'El módulo de piedras y medios porosos retiene sedimentos y partículas visibles, protegiendo las etapas siguientes.'
    },
    {
      title: '3. Biorremediación activa',
      description:
        'Una capa biológica con microorganismos especializados degrada contaminantes químicos y orgánicos de forma natural.'
    },
    {
      title: '4. Carbón activado',
      description:
        'El carbón reduce olores, sabores y compuestos residuales, dejando el agua con una sensación más limpia y segura.'
    },
    {
      title: '5. Agua filtrada',
      description:
        'El agua purificada se acumula en la cámara final, lista para el consumo y con menos dependencia de agua embotellada.'
    }
  ]

  return (
    <section id="funcionamiento" className="px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl space-y-4">
          <p className="inline-flex rounded-full bg-[#C7EDE4] px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#1F4D36]">
            Cómo funciona
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-[#1E2A24] sm:text-4xl">
            El proceso de EcoBioFilter está diseñado para purificar el agua con claridad y confianza.
          </h2>
          <p className="text-base leading-8 text-[#42514a]">
            Gracias a su diseño modular y su enfoque en biorremediación activa, el filtro combate contaminantes habituales y mejora la seguridad del agua de consumo directo.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-[28px] border border-[#D8D1C4] bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#2F7D4E] text-lg font-semibold text-white">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-[#1E2A24]">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#57615d]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
