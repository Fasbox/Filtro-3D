import { filterSpaces } from './filterData'

const colorMap = {
  '#c3b47d': 'bg-[#F1E6D0] text-[#A47148]',
  '#7c6a53': 'bg-[#F7E9DA] text-[#A47148]',
  '#5f8f4b': 'bg-[#D4E8D6] text-[#1F4D36]',
  '#272f36': 'bg-[#E8ECEE] text-[#1E2A24]',
  '#0f5871': 'bg-[#D8F1F6] text-[#0F5871]'
}

export default function ComponentsGrid() {
  return (
    <section id="componentes" className="px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl space-y-4">
          <p className="inline-flex rounded-full bg-[#C7EDE4] px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#1F4D36]">
            Componentes clave
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-[#1E2A24] sm:text-4xl">
            Cada espacio del filtro tiene un propósito claro y un mantenimiento sencillo.
          </h2>
          <p className="text-base leading-8 text-[#42514a]">
            EcoBioFilter combina cinco cámaras independientes con módulos removibles que se inspeccionan o reemplazan sin desmontar todo el equipo.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filterSpaces.map((space) => (
            <article key={space.id} className="rounded-4xl border border-[#D8D1C4] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className={`${colorMap[space.color] ?? 'bg-[#F7F7F3] text-[#1E2A24]'} mb-5 inline-flex rounded-3xl px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em]`}>
                Espacio {space.id}
              </div>
              <h3 className="text-2xl font-semibold text-[#1E2A24]">{space.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#57615d]">{space.description}</p>
              <div className="mt-6 space-y-3 text-sm text-[#42514a]">
                {space.benefits?.map((benefit, idx) => (
                  <p key={idx} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#C7EDE4] text-xs font-semibold text-[#1F4D36]">✓</span>
                    {benefit}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
