import { systemSpaces, maintenanceTips } from './filterData'

function FilterInfoPanel({
  selectedSpace,
  filterSpaces,
  inventorySpaceIds,
  setSelectedSpaceId,
  setInventorySpaceIds,
  showHints,
  setShowHints
}) {
  const selectedInInventory = selectedSpace && inventorySpaceIds.includes(selectedSpace.id)

  const handleToggleSpace = () => {
    if (!selectedSpace || !selectedSpace.removable) return

    if (selectedInInventory) {
      setInventorySpaceIds((prev) => prev.filter((id) => id !== selectedSpace.id))
    } else {
      setInventorySpaceIds((prev) => [...prev, selectedSpace.id])
    }
    setSelectedSpaceId(null)
  }

  return (
    <div className="space-y-6">
      <div className="rounded-[28px] border border-[#D8D1C4] bg-[#FAF7EF] p-6 shadow-sm">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#1F4D36]">Gestión del sistema</p>
            <h2 className="mt-3 text-2xl font-semibold text-[#1E2A24]">Vista técnica del filtro</h2>
            <p className="mt-3 text-sm leading-7 text-[#57615d]">
              5 espacios independientes y 15 partes clave del sistema que permiten controlar el proceso de purificación.
            </p>
          </div>
          <button
            onClick={() => setShowHints(!showHints)}
            className="rounded-full border border-[#D8D1C4] bg-white px-4 py-2 text-sm font-semibold text-[#1F4D36] shadow-sm transition hover:bg-[#F1E6D0]"
            title={showHints ? 'Ocultar sugerencias' : 'Mostrar sugerencias'}
          >
            {showHints ? 'Ocultar guía' : 'Mostrar guía'}
          </button>
        </div>
      </div>

      {selectedSpace ? (
        <div className="space-y-6">
          <div className="rounded-4xl border border-[#D8D1C4] bg-white p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div
                className="h-16 w-16 rounded-3xl shadow-[0_16px_40px_-24px_rgba(47,125,78,0.75)]"
                style={{ backgroundColor: selectedSpace.color }}
              />
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[#1F4D36] font-semibold">
                  Espacio {selectedSpace.id}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-[#1E2A24]">{selectedSpace.title}</h3>
                <p className="mt-1 text-sm text-[#57615d]">{selectedSpace.removable ? (selectedInInventory ? 'Modulo extraído' : 'Modulo instalado') : 'Componente fijo'}</p>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-sm leading-7 text-[#42514a]">
              <p>{selectedSpace.description}</p>
              {selectedSpace.benefits && (
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-[#1F4D36] font-semibold">Beneficios</p>
                  <ul className="mt-3 space-y-2">
                    {selectedSpace.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#C7EDE4] text-xs font-semibold text-[#1F4D36]">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              {selectedSpace.removable ? (
                <button
                  onClick={handleToggleSpace}
                  className="flex-1 rounded-full bg-[#2F7D4E] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#256944]"
                >
                  {selectedInInventory ? 'Instalar en filtro' : 'Extraer del filtro'}
                </button>
              ) : (
                <div className="flex-1 rounded-full border border-[#D8D1C4] bg-[#F1E6D0] px-4 py-3 text-sm font-semibold text-[#1E2A24]">
                  Módulo fijo
                </div>
              )}
              <button
                onClick={() => setSelectedSpaceId(null)}
                className="flex-1 rounded-full border border-[#D8D1C4] bg-white px-4 py-3 text-sm font-semibold text-[#1F4D36] transition hover:bg-[#F1E6D0]"
              >
                Ver otros espacios
              </button>
            </div>
          </div>

          <div className="rounded-4xl border border-[#D8D1C4] bg-[#FAF7EF] p-6 shadow-sm">
            <p className="text-xs uppercase tracking-[0.28em] text-[#1F4D36] font-semibold">Duración estimada</p>
            <p className="mt-3 text-sm leading-7 text-[#42514a]">{selectedSpace.lifespan}</p>
            <div className="mt-4 rounded-3xl bg-white p-4 text-sm text-[#57615d] shadow-sm">
              El diseño modular permite reemplazar solo la parte necesaria y mantiene bajo el costo operativo.
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="rounded-4xl border border-[#D8D1C4] bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-[#1E2A24]">Resumen del sistema</h3>
            <p className="mt-3 text-sm leading-7 text-[#57615d]">
              EcoBioFilter está diseñado para hogares que desean una alternativa real a los filtros comunes. Selecciona cualquiera de los cinco espacios del modelo 3D para ver su función.
            </p>
          </div>

          <div className="rounded-4xl border border-[#D8D1C4] bg-[#FAF7EF] p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[#1E2A24]">Espacios del filtro</h3>
            <div className="mt-5 space-y-3">
              {filterSpaces.map((space) => {
                const isInInventory = space.removable && inventorySpaceIds.includes(space.id)
                return (
                  <button
                    key={space.id}
                    onClick={() => setSelectedSpaceId(space.id)}
                    className="w-full rounded-3xl border border-[#D8D1C4] bg-white px-4 py-4 text-left transition hover:border-[#2F7D4E]/80 hover:bg-[#F1E6D0]"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-xs uppercase tracking-[0.24em] text-[#1F4D36]">Espacio {space.id}</p>
                        <p className="mt-1 text-sm font-semibold text-[#1E2A24]">{space.title}</p>
                      </div>
                      <span className={`text-xs font-semibold ${isInInventory ? 'text-[#0f5871]' : 'text-[#2F7D4E]'}`}>
                        {isInInventory ? 'Inventario' : 'Activo'}
                      </span>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="rounded-4xl border border-[#D8D1C4] bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[#1E2A24]">Mantenimiento recomendado</h3>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-[#57615d]">
              {maintenanceTips.map((tip, idx) => (
                <li key={idx} className="flex gap-3 rounded-2xl bg-[#F1E6D0] px-4 py-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#2F7D4E] text-xs font-semibold text-white">{idx + 1}</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default FilterInfoPanel
