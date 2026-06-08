import { useState } from 'react'
import FilterViewer3D from './FilterViewer3D'
import FilterInfoPanel from './FilterInfoPanel'
import { filterSpaces, systemSpaces, maintenanceTips } from './filterData'

export default function InteractiveFilterSection() {
  const [selectedSpaceId, setSelectedSpaceId] = useState(2)
  const [inventorySpaceIds, setInventorySpaceIds] = useState([])
  const [showHints, setShowHints] = useState(true)
  const selectedSpace = filterSpaces.find((space) => space.id === selectedSpaceId)

  return (
    <section id="sistema" className="relative overflow-hidden px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl space-y-4">
          <p className="inline-flex rounded-full bg-[#C7EDE4] px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#1F4D36]">
            Sistema modular en acción
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-[#1E2A24] sm:text-4xl">
            Explora el modelo 3D interactivo y revisa cada cámara del EcoBioFilter.
          </h2>
          <p className="max-w-2xl text-base leading-8 text-[#42514a]">
            El filtro es más que una carcasa: contiene módulos intercambiables y una capa biológica que actúa sobre metales pesados, contaminantes orgánicos y sedimentos.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr]">
          <div>
            <FilterViewer3D
              selectedSpaceId={selectedSpaceId}
              setSelectedSpaceId={setSelectedSpaceId}
              inventorySpaceIds={inventorySpaceIds}
              setInventorySpaceIds={setInventorySpaceIds}
              showHints={showHints}
              setShowHints={setShowHints}
            />
          </div>

          <div className="space-y-6">
            <div className="rounded-4xl border border-slate-200/80 bg-white p-6 shadow-[0_30px_80px_-48px_rgba(31,77,54,0.28)]">
              <FilterInfoPanel
                selectedSpace={selectedSpace}
                filterSpaces={filterSpaces}
                inventorySpaceIds={inventorySpaceIds}
                setSelectedSpaceId={setSelectedSpaceId}
                setInventorySpaceIds={setInventorySpaceIds}
                showHints={showHints}
                setShowHints={setShowHints}
              />
            </div>

            <div className="rounded-4xl border border-[#D8D1C4] bg-[#F1E6D0]/70 p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-[#1F4D36]">Adopción segura</p>
              <h3 className="mt-4 text-2xl font-semibold text-[#1E2A24]">Validación centrada en la confianza y la sostenibilidad.</h3>
              <p className="mt-3 text-sm leading-7 text-[#42514a]">
                Este modelo está pensado para hogares urbanos, periurbanos y rurales que desean una solución confiable, modular y económica. El diseño enfatiza la limpieza visual y la inspección profesional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
