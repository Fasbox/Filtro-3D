export default function BenefitsSection() {
  const benefits = [
    {
      title: 'Comprensión visual',
      description:
        'El modelo 3D muestra cada cámara y su función, facilitando la explicación técnica para clientes e inversores.'
    },
    {
      title: 'Diseño modular',
      description:
        'EcoBioFilter está construido para que los componentes internos se reemplacen sin desmontar todo el sistema.'
    },
    {
      title: 'Mantenimiento profesional',
      description:
        'La estructura independiente de las cámaras permite una inspección rápida y un recambio eficiente de partes.'
    },
    {
      title: 'Sostenibilidad real',
      description:
        'Reduce el gasto en agua embotellada y el desperdicio de plástico al enfocarse en la durabilidad y el reemplazo selectivo.'
    }
  ]

  return (
    <section className="px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl space-y-4">
          <p className="inline-flex rounded-full bg-[#C7EDE4] px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#1F4D36]">
            Beneficios clave
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-[#1E2A24] sm:text-4xl">
            Una solución clara, profesional y alineada con el consumo sostenible.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((item) => (
            <div key={item.title} className="rounded-4xl border border-[#D8D1C4] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#2F7D4E]">{item.title}</p>
              <p className="mt-4 text-sm leading-7 text-[#42514a]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
