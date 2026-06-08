import { maintenanceTips } from './filterData'

export default function MaintenanceSection() {
  return (
    <section id="mantenimiento" className="px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div className="space-y-6">
            <p className="inline-flex rounded-full bg-[#C7EDE4] px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#1F4D36]">
              Mantenimiento responsable
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-[#1E2A24] sm:text-4xl">
              Reemplaza solo los componentes internos y reduce el desperdicio.
            </h2>
            <p className="max-w-lg text-base leading-8 text-[#42514a]">
              A diferencia de los filtros completos, EcoBioFilter permite sacar módulos removibles, revisar el estado de cada cámara y actuar de forma puntual para mantener agua de calidad sin generar plástico innecesario.
            </p>
          </div>

          <div className="rounded-4xl border border-[#D8D1C4] bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-[#1E2A24]">Guía de mantenimiento rápido</h3>
            <p className="mt-3 text-sm leading-7 text-[#57615d]">
              Basado en la propuesta de valor de EcoBioFilter, el mantenimiento es un proceso accesible que prioriza la durabilidad del sistema.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-[#42514a]">
              {maintenanceTips.map((tip, idx) => (
                <li key={idx} className="flex gap-3 rounded-3xl bg-[#F7F1E6] px-4 py-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#2F7D4E] text-xs font-semibold text-white">{idx + 1}</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
