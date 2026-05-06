import { systemSpaces, systemParts, maintenanceTips } from './filterData'

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
      setInventorySpaceIds(prev => prev.filter(id => id !== selectedSpace.id))
    } else {
      setInventorySpaceIds(prev => [...prev, selectedSpace.id])
    }
    setSelectedSpaceId(null)
  }

  return (
    <div className="w-96 bg-slate-950 shadow-xl flex flex-col overflow-hidden border-l border-slate-800 transition-all duration-300">
      <div className="bg-slate-900/95 px-6 py-4 border-b border-slate-800">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white">Gestión del Sistema</h2>
            <p className="text-slate-300 text-sm mt-1">5 espacios independientes y 15 partes del filtro según la imagen.</p>
          </div>
          <button
            onClick={() => setShowHints(!showHints)}
            className="text-slate-300 hover:text-white transition text-lg"
            title={showHints ? 'Ocultar sugerencias' : 'Mostrar sugerencias'}
          >
            {showHints ? '💡' : '🔦'}
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-6">
        {selectedSpace ? (
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div
                className="w-16 h-16 rounded-lg shadow-2xl transition-transform duration-300 hover:scale-110"
                style={{
                  backgroundColor: selectedSpace.color,
                  boxShadow: `0 0 20px ${selectedSpace.color}80`
                }}
              ></div>
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
                  Espacio {selectedSpace.id}{' '}
                  {selectedSpace.removable ? (selectedInInventory ? '(En inventario)' : '(En filtro)') : '(Fijo)'}
                </p>
                <h3 className="text-2xl font-bold text-white">{selectedSpace.title}</h3>
              </div>
            </div>

            <div className="h-px bg-linear-to-r from-slate-600 to-transparent"></div>

            <div>
              <p className="text-sm uppercase tracking-widest text-slate-400 font-semibold mb-3">Descripción</p>
              <p className="text-slate-200 leading-relaxed text-base">{selectedSpace.description}</p>
            </div>

            {selectedSpace.benefits && selectedSpace.benefits.length > 0 && (
              <div>
                <p className="text-sm uppercase tracking-widest text-slate-400 font-semibold mb-3">Beneficios</p>
                <div className="space-y-2">
                  {selectedSpace.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-2 rounded-lg bg-slate-700 bg-opacity-50 hover:bg-opacity-70 transition">
                      <span className="text-lg shrink-0 mt-0.5">✓</span>
                      <span className="text-slate-200">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <p className="text-sm uppercase tracking-widest text-slate-400 font-semibold mb-3">Vida útil</p>
              <div className="bg-orange-900 bg-opacity-30 border border-orange-600 rounded-lg p-3">
                <p className="text-orange-200 text-sm">⏱️ {selectedSpace.lifespan}</p>
              </div>
            </div>

            {selectedSpace.removable ? (
              <div className="space-y-2 pt-4">
                <button
                  onClick={handleToggleSpace}
                  className="w-full px-4 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition"
                >
                  {selectedInInventory ? 'Instalar en filtro' : 'Extraer del filtro'}
                </button>
                <button
                  onClick={() => setSelectedSpaceId(null)}
                  className="w-full px-4 py-3 bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold rounded-lg transition"
                >
                  Ver otros espacios
                </button>
                <p className="text-xs text-slate-400 text-center mt-2">
                  Presiona <kbd className="bg-slate-700 px-2 py-1 rounded">ESC</kbd> para cerrar
                </p>
              </div>
            ) : (
              <div className="space-y-3 pt-4">
                <div className="rounded-lg border border-slate-600 bg-slate-700 p-4 text-slate-200">
                  Este espacio no es extraíble, pero puedes seleccionarlo para revisar su función.
                </div>
                <button
                  onClick={() => setSelectedSpaceId(null)}
                  className="w-full px-4 py-3 bg-slate-600 hover:bg-slate-500 text-white font-semibold rounded-lg transition transform hover:scale-105 active:scale-95"
                >
                  ← Ver otros espacios
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            <div className="bg-slate-900/75 border border-slate-700 rounded-lg p-4 mb-6">
              <p className="text-slate-300 text-sm leading-relaxed">
                El sistema de filtrado contiene 5 espacios independientes y 15 partes visibles. Selecciona cualquier espacio para ver su función o extraer los módulos removibles.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-700 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-3">Espacios del filtro</h3>
                <div className="space-y-3">
                  {filterSpaces.map((space) => {
                    const isInInventory = space.removable && inventorySpaceIds.includes(space.id)
                    return (
                      <button
                        key={space.id}
                        onClick={() => setSelectedSpaceId(space.id)}
                        className="w-full text-left p-3 rounded-xl border border-slate-700 transition hover:border-slate-500 hover:bg-slate-900 bg-slate-950"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold">Espacio {space.id}</p>
                            <p className="text-white font-semibold leading-tight">{space.title}</p>
                          </div>
                          <span className={`text-xs font-semibold ${isInInventory ? 'text-blue-400' : 'text-green-400'}`}>
                            {isInInventory ? 'Inventario' : 'En filtro'}
                          </span>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="bg-slate-700 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-3">Partes del sistema</h3>
                <ul className="space-y-2 text-slate-200 text-sm">
                  {systemSpaces.map((space) => (
                    <li key={space.id}>
                      <span className="font-semibold text-slate-100">{space.title}:</span> {space.description}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-900/75 border border-slate-700 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-3">Mantenimiento recomendado</h3>
                <ul className="space-y-2 text-slate-300 text-sm">
                  {maintenanceTips.map((tip, idx) => (
                    <li key={idx} className="flex gap-2 items-start">
                      <span className="mt-0.5">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default FilterInfoPanel
