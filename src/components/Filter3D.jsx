import { Canvas } from '@react-three/fiber'
import { OrbitControls, Html } from '@react-three/drei'
import { useState, useEffect } from 'react'
import DraggableCartridge from './DraggableCartridge'
import FilterInfoPanel from './FilterInfoPanel'
import { filterSpaces } from './filterData'

function Filter3D() {
  const [inventorySpaceIds, setInventorySpaceIds] = useState([])
  const [selectedSpaceId, setSelectedSpaceId] = useState(null)
  const [hoveredSpaceId, setHoveredSpaceId] = useState(null)
  const [draggingSpaceId, setDraggingSpaceId] = useState(null)
  const [showHints, setShowHints] = useState(true)

  const handleSpaceClick = (id) => {
    if (!draggingSpaceId) {
      setSelectedSpaceId(selectedSpaceId === id ? null : id)
    }
  }

  const handleDragStart = (id) => {
    setDraggingSpaceId(id)
  }

  const handleDragEnd = (id, finalPosition) => {
    setDraggingSpaceId(null)
    const space = filterSpaces.find(item => item.id === id)
    if (!space?.removable) return

    const isInFilterArea = finalPosition.x > -1 && finalPosition.x < 1 && finalPosition.y > -2 && finalPosition.y < 2
    const isInInventoryArea = finalPosition.x < -1.5

    if (isInFilterArea && inventorySpaceIds.includes(id)) {
      setInventorySpaceIds(prev => prev.filter(itemId => itemId !== id))
    } else if (isInInventoryArea && !inventorySpaceIds.includes(id)) {
      setInventorySpaceIds(prev => [...prev, id])
    }
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedSpaceId(null)
        setDraggingSpaceId(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const selectedSpace = filterSpaces.find((space) => space.id === selectedSpaceId)
  const spacesInFilterCount = filterSpaces.length - inventorySpaceIds.length

  return (
    <div className="w-full h-screen flex flex-col bg-slate-950 text-slate-100 overflow-hidden">
      <div className="border-b border-slate-800 bg-slate-900/95 backdrop-blur-sm px-6 py-4 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-100">Filtro de Agua 3D</h1>
            <p className="text-slate-400 text-sm mt-1 max-w-2xl">Sistema modular de purificación con 5 espacios independientes y componentes diseñados para mantenimiento profesional.</p>
          </div>
          <div className="text-left md:text-right space-y-1 text-xs text-slate-400">
            <p>{selectedSpace ? `${selectedSpace.title} seleccionado` : 'Selecciona cualquier espacio para ver detalles'}</p>
            <p>Espacios en filtro: {spacesInFilterCount}/5 · Repuestos: {inventorySpaceIds.length}</p>
          </div>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 bg-linear-to-b from-slate-800 to-slate-900 relative group cursor-grab active:cursor-grabbing">
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <hemisphereLight intensity={0.9} skyColor="#98c1ff" groundColor="#102343" />
            <ambientLight intensity={0.8} />
            <pointLight position={[5, 5, 5]} intensity={1.3} />
            <pointLight position={[-5, -5, 3]} intensity={0.9} />
            <directionalLight position={[0, 10, 5]} intensity={1.0} />

            <mesh position={[0, 0, -3]} scale={[24, 24, 1]}>
              <planeGeometry />
              <meshStandardMaterial color="#0f172a" />
            </mesh>

            <mesh position={[0, 0, 0]} renderOrder={1}>
              <cylinderGeometry args={[1.08, 1.08, 2.84, 48, 1, true]} />
              <meshPhysicalMaterial
                color="#8b939d"
                metalness={0.18}
                roughness={0.22}
                transmission={0.72}
                thickness={0.24}
                opacity={0.24}
                transparent
                depthWrite={false}
                clearcoat={0.58}
                clearcoatRoughness={0.18}
              />
            </mesh>

            <mesh position={[0, 1.44, 0]}>
              <cylinderGeometry args={[1.08, 1.08, 0.16, 48]} />
              <meshPhysicalMaterial color="#2e3439" metalness={0.92} roughness={0.22} clearcoat={0.84} />
            </mesh>
            <mesh position={[0, -1.44, 0]}>
              <cylinderGeometry args={[1.08, 1.08, 0.16, 48]} />
              <meshPhysicalMaterial color="#25292f" metalness={0.92} roughness={0.24} clearcoat={0.82} />
            </mesh>

            {[0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2].map((rotation) => (
              <mesh key={rotation} position={[0, 0, 0]} rotation={[0, rotation, 0]}>
                <boxGeometry args={[0.05, 2.8, 0.08]} />
                <meshStandardMaterial color="#2f3439" metalness={0.88} roughness={0.2} />
              </mesh>
            ))}

            <mesh position={[0, 1.45, 0]} rotation={[Math.PI / 2, 0, 0]} renderOrder={3}>
              <torusGeometry args={[1.06, 0.06, 16, 100]} />
              <meshStandardMaterial color="#4b5870" metalness={0.78} transparent opacity={0.82} />
            </mesh>
            <mesh position={[0, -1.45, 0]} rotation={[Math.PI / 2, 0, 0]} renderOrder={3}>
              <torusGeometry args={[1.06, 0.06, 16, 100]} />
              <meshStandardMaterial color="#4b5870" metalness={0.78} transparent opacity={0.82} />
            </mesh>

            <mesh position={[1.16, 0.4, 0]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.06, 0.06, 1.2, 18]} />
              <meshStandardMaterial color="#2d3137" metalness={0.94} roughness={0.18} />
            </mesh>
            <mesh position={[-1.16, -0.4, 0]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.06, 0.06, 1.2, 18]} />
              <meshStandardMaterial color="#2d3137" metalness={0.94} roughness={0.18} />
            </mesh>

            <Html position={[0, 2.5, 0]}>
              <div className="bg-blue-600 bg-opacity-80 text-white text-xs px-3 py-1 rounded whitespace-nowrap">
                Área del filtro
              </div>
            </Html>
            <Html position={[-2, 2.5, 0]}>
              <div className="bg-green-600 bg-opacity-80 text-white text-xs px-3 py-1 rounded whitespace-nowrap">
                Inventario de repuestos
              </div>
            </Html>

            {filterSpaces.map((space) => {
              const isInInventory = space.removable && inventorySpaceIds.includes(space.id)
              if (isInInventory) return null
              return (
                <DraggableCartridge
                  key={`filter-${space.id}`}
                  space={space}
                  position={space.position}
                  onDragStart={handleDragStart}
                  onDragEnd={handleDragEnd}
                  onClick={() => handleSpaceClick(space.id)}
                  isHovering={hoveredSpaceId === space.id}
                  onHover={(state) => setHoveredSpaceId(state ? space.id : null)}
                  isDragging={draggingSpaceId === space.id}
                  draggable={space.removable}
                />
              )
            })}

            {filterSpaces.map((space) => {
              const isInInventory = space.removable && inventorySpaceIds.includes(space.id)
              if (!isInInventory) return null
              return (
                <DraggableCartridge
                  key={`inventory-${space.id}`}
                  space={space}
                  position={space.inventoryPosition}
                  onDragStart={handleDragStart}
                  onDragEnd={handleDragEnd}
                  onClick={() => handleSpaceClick(space.id)}
                  isHovering={hoveredSpaceId === space.id}
                  onHover={(state) => setHoveredSpaceId(state ? space.id : null)}
                  isDragging={draggingSpaceId === space.id}
                  draggable={true}
                />
              )
            })}

            <OrbitControls
              enablePan
              enableZoom
              enableRotate
              autoRotate={!selectedSpace && !draggingSpaceId}
              autoRotateSpeed={1.5}
              minDistance={3}
              maxDistance={12}
            />
          </Canvas>

          {showHints && (
            <div className="absolute bottom-4 left-4 bg-slate-900/85 text-slate-200 text-xs px-3 py-2 rounded-lg border border-slate-700 shadow-lg backdrop-blur-sm">
              Selecciona cada espacio del filtro o arrastra los módulos removibles al inventario.
            </div>
          )}
        </div>

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

      <div className="bg-slate-700 border-t border-slate-600 px-6 py-3 text-xs text-slate-300 flex items-center justify-between">
        <div>🖱️ <span className="ml-2">Selecciona espacios | Arrastra módulos removibles | ESC para cerrar</span></div>
        <div className="text-slate-400">Sistema Modular v1.0</div>
      </div>
    </div>
  )
}

export default Filter3D
