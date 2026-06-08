import { Canvas } from '@react-three/fiber'
import { OrbitControls, ContactShadows, Html } from '@react-three/drei'
import { useEffect, useState } from 'react'
import DraggableCartridge from './DraggableCartridge'
import { filterSpaces } from './filterData'

export default function FilterViewer3D({
  selectedSpaceId,
  setSelectedSpaceId,
  inventorySpaceIds,
  setInventorySpaceIds,
  showHints,
  setShowHints
}) {
  const [hoveredSpaceId, setHoveredSpaceId] = useState(null)
  const [draggingSpaceId, setDraggingSpaceId] = useState(null)

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
    const space = filterSpaces.find((item) => item.id === id)
    if (!space?.removable) return

    const isInFilterArea = finalPosition.x > -1 && finalPosition.x < 1 && finalPosition.y > -2 && finalPosition.y < 2
    const isInInventoryArea = finalPosition.x < -1.5

    if (isInFilterArea && inventorySpaceIds.includes(id)) {
      setInventorySpaceIds((prev) => prev.filter((itemId) => itemId !== id))
    } else if (isInInventoryArea && !inventorySpaceIds.includes(id)) {
      setInventorySpaceIds((prev) => [...prev, id])
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
  }, [setSelectedSpaceId])

  return (
    <div
      className="relative overflow-hidden rounded-[40px] bg-[#F5F8F3] shadow-[0_48px_120px_-64px_rgba(31,77,54,0.2)] h-[42rem] md:h-[48rem] xl:h-[56rem]"
    >
      <div className="pointer-events-none absolute -top-10 left-8 h-44 w-44 rounded-full bg-[#C7EDE4]/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 right-10 h-48 w-48 rounded-full bg-[#F1E6D0]/40 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/80 to-transparent" />
      <Canvas
        className="h-full w-full"
        style={{ width: '100%', height: '100%', display: 'block' }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0.5, 1.7], fov: 62 }}
      >
        <hemisphereLight intensity={0.9} skyColor="#E8FBFF" groundColor="#D2E9E5" />
        <directionalLight position={[1.8, 4, 3]} intensity={1.1} />
        <directionalLight position={[-1.5, 2.5, -2]} intensity={0.7} />
        <ambientLight intensity={0.7} />
        <pointLight position={[4, 6, 4]} intensity={1.1} />
        <pointLight position={[-4, -4, 3]} intensity={0.7} />
        <directionalLight position={[0, 10, 5]} intensity={0.9} />

        <mesh position={[0, -1.35, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[22, 22]} />
          <meshStandardMaterial color="#eef6f0" />
        </mesh>
        <ContactShadows position={[0, -1.6, 0]} opacity={0.35} blur={2.2} far={2.5} resolution={800} scale={12} />

        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[1.06, 1.06, 2.84, 48, 1, true]} />
          <meshPhysicalMaterial
            color="#8b939d"
            metalness={0.18}
            roughness={0.22}
            transmission={0.72}
            thickness={0.24}
            opacity={0.26}
            transparent
            depthWrite={false}
            clearcoat={0.55}
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

        {filterSpaces.map((space) => {
          const isInInventory = space.removable && inventorySpaceIds.includes(space.id)
          if (isInInventory) return null
          return (
            <DraggableCartridge
              key={`viewer-${space.id}`}
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
              key={`viewer-inventory-${space.id}`}
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

        <OrbitControls enablePan enableZoom enableRotate autoRotate={!draggingSpaceId} autoRotateSpeed={1.2} minDistance={3} maxDistance={10} />
      </Canvas>

      <div className="absolute inset-x-0 top-4 flex justify-between px-4 text-xs font-semibold text-[#42514a] sm:px-6">
        <div className="rounded-3xl bg-white/85 px-4 py-2 shadow-sm shadow-slate-200/70">Módulos removidos: {inventorySpaceIds.length}</div>
        <button
          type="button"
          onClick={() => setShowHints(!showHints)}
          className="rounded-3xl bg-white/85 px-4 py-2 text-[#2F7D4E] shadow-sm shadow-slate-200/70"
        >
          {showHints ? 'Ocultar guía' : 'Mostrar guía'}
        </button>
      </div>

      {showHints && (
        <div className="pointer-events-none absolute bottom-4 left-4 right-4 rounded-[28px] border border-[#D8D1C4] bg-[#FAF7EF]/95 px-5 py-3 text-sm text-[#57615d] shadow-lg shadow-[#2F7D4E]/10 sm:left-auto sm:right-auto sm:w-[calc(100%-4rem)]">
          Selecciona un módulo para ver su función o arrástralo al inventario para simular mantenimiento.
        </div>
      )}
    </div>
  )
}
