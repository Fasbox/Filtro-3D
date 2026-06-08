import { Canvas } from '@react-three/fiber'
import { OrbitControls, Html } from '@react-three/drei'
import { useState, useRef, useEffect } from 'react'

function DraggableCartridge({
  cartridge,
  isInFilter,
  position,
  onDragStart,
  onDragEnd,
  onClick,
  isHovering,
  onHover,
  isDragging
}) {
  const meshRef = useRef()
  const [dragOffset, setDragOffset] = useState([0, 0, 0])

  const handlePointerDown = (e) => {
    e.stopPropagation()
    const rect = e.target.getBoundingClientRect()
    setDragOffset([
      e.clientX - rect.left,
      e.clientY - rect.top,
      0
    ])
    onDragStart(cartridge.id)
  }

  const handlePointerMove = (e) => {
    if (isDragging) {
      // Update position based on mouse movement
      const newPosition = [
        (e.clientX - dragOffset[0]) / 100 - 2, // Adjust for canvas positioning
        -(e.clientY - dragOffset[1]) / 100 + 1,
        position[2]
      ]
      if (meshRef.current) {
        meshRef.current.position.set(...newPosition)
      }
    }
  }

  const handlePointerUp = (e) => {
    if (isDragging) {
      onDragEnd(cartridge.id, meshRef.current.position)
    }
  }

  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={onClick}
      onPointerEnter={() => onHover(true)}
      onPointerLeave={() => onHover(false)}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      scale={isDragging ? [1.2, 1.2, 1.2] : isHovering ? [1.1, 1.1, 1.1] : [1, 1, 1]}
      renderOrder={2}
    >
      <cylinderGeometry args={[0.35, 0.35, 0.7, 32]} />
      <meshStandardMaterial
        color={cartridge.color}
        metalness={0.35}
        roughness={0.3}
        emissive={cartridge.color}
        emissiveIntensity={0.18}
        transparent={true}
        opacity={0.95}
      />

      {/* Cartridge cap */}
      <mesh position={[0, 0.4, 0]}>
        <cylinderGeometry args={[0.38, 0.35, 0.1, 32]} />
        <meshStandardMaterial color="#333333" metalness={0.6} />
      </mesh>

      {/* Drag indicator */}
      {isDragging && (
        <Html position={[0, 0.8, 0]}>
          <div className="bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
            Arrastrando...
          </div>
        </Html>
      )}
    </mesh>
  )
}

function Filter3D() {
  const [filterCartridges, setFilterCartridges] = useState([1, 2, 3]) // IDs of cartridges in filter
  const [inventoryCartridges, setInventoryCartridges] = useState([]) // IDs of cartridges in inventory
  const [selected, setSelected] = useState(null)
  const [hoveredCartridge, setHoveredCartridge] = useState(null)
  const [draggingCartridge, setDraggingCartridge] = useState(null)
  const [showHints, setShowHints] = useState(true)

  const cartridges = [
    {
      id: 1,
      filterPosition: [0, 0.8, 0],
      inventoryPosition: [-2, 1.5, 0],
      color: '#FF6B6B',
      name: 'Filtro de Sedimentos',
      description: 'Elimina partículas grandes, arena y sedimentos del agua. Es el primer nivel de filtración y prolonga la vida útil de los demás filtros.',
      benefits: ['Elimina arena y sedimentos', 'Particulas > 5 micrones', 'Protege otros filtros'],
      lifespan: '6-12 meses'
    },
    {
      id: 2,
      filterPosition: [0, 0, 0],
      inventoryPosition: [-2, 0, 0],
      color: '#4ECDC4',
      name: 'Filtro de Carbón Activado',
      description: 'Reduce cloro, metales pesados, olores desagradables y mejora el sabor del agua. Absorbe compuestos químicos y contaminantes orgánicos.',
      benefits: ['Elimina cloro y olor', 'Mejora el sabor', 'Absorbe químicos'],
      lifespan: '6-12 meses'
    },
    {
      id: 3,
      filterPosition: [0, -0.8, 0],
      inventoryPosition: [-2, -1.5, 0],
      color: '#95E1D3',
      name: 'Membrana de Microfiltración',
      description: 'Filtra bacterias, virus y microorganismos. Es el nivel final que proporciona agua purificada y segura lista para consumo inmediato.',
      benefits: ['Elimina bacterias', 'Elimina virus', 'Agua 100% pura'],
      lifespan: '12-24 meses'
    },
  ]

  const handleCartridgeClick = (id) => {
    if (!draggingCartridge) {
      setSelected(selected === id ? null : id)
    }
  }

  const handleDragStart = (id) => {
    setDraggingCartridge(id)
  }

  const handleDragEnd = (id, finalPosition) => {
    setDraggingCartridge(null)

    // Check if dropped in filter area or inventory area
    const isInFilterArea = finalPosition.x > -1 && finalPosition.x < 1 &&
                          finalPosition.y > -2 && finalPosition.y < 2

    const isInInventoryArea = finalPosition.x < -1.5

    if (isInFilterArea && !filterCartridges.includes(id)) {
      // Add to filter
      setFilterCartridges(prev => [...prev, id])
      setInventoryCartridges(prev => prev.filter(c => c !== id))
    } else if (isInInventoryArea && !inventoryCartridges.includes(id)) {
      // Add to inventory
      setInventoryCartridges(prev => [...prev, id])
      setFilterCartridges(prev => prev.filter(c => c !== id))
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelected(null)
        setDraggingCartridge(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const selectedCartridge = cartridges.find(c => c.id === selected)

  return (
    <div className="w-full h-screen flex flex-col bg-linear-to-b from-slate-900 to-slate-800 overflow-hidden">
      {/* Header */}
      <div className="bg-linear-to-r from-blue-600 to-cyan-600 px-6 py-4 shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-white drop-shadow">🔧 Filtro de Agua 3D</h1>
            <p className="text-blue-100 text-sm mt-1">Sistema modular de purificación - Reemplaza filtros individualmente</p>
          </div>
          <div className="text-right">
            <p className="text-blue-100 text-xs">
              {selected ? `${selectedCartridge.name} seleccionado` : 'Arrastra para reemplazar filtros'}
            </p>
            <p className="text-blue-200 text-xs">
              Filtros en uso: {filterCartridges.length} | Inventario: {inventoryCartridges.length}
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* 3D Canvas */}
        <div className="flex-1 bg-linear-to-b from-slate-800 to-slate-900 relative group cursor-grab active:cursor-grabbing">
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            {/* Lighting */}
            <hemisphereLight intensity={0.9} skyColor="#98c1ff" groundColor="#102343" />
            <ambientLight intensity={0.8} />
            <pointLight position={[5, 5, 5]} intensity={1.3} />
            <pointLight position={[-5, -5, 3]} intensity={0.9} />
            <directionalLight position={[0, 10, 5]} intensity={1.0} />

            {/* Background */}
            <mesh position={[0, 0, -3]} scale={[24, 24, 1]}>
              <planeGeometry />
              <meshStandardMaterial color="#0f172a" />
            </mesh>

            {/* Filter Housing */}
            <mesh position={[0, 0, 0]} renderOrder={1}>
              <cylinderGeometry args={[1, 1, 2.8, 32]} />
              <meshPhysicalMaterial
                color="#9ca3af"
                metalness={0.1}
                roughness={0.1}
                transmission={0.85}
                thickness={0.2}
                opacity={0.18}
                transparent={true}
                depthWrite={false}
                clearcoat={0.25}
                clearcoatRoughness={0.2}
              />
            </mesh>

            <mesh position={[0, 0, 0]}>
              <cylinderGeometry args={[1.01, 1.01, 2.8, 32]} />
              <meshBasicMaterial color="#ffffff" wireframe opacity={0.12} transparent />
            </mesh>

            {/* Housing top ring */}
            <mesh position={[0, 1.45, 0]} rotation={[Math.PI / 2, 0, 0]} renderOrder={3}>
              <torusGeometry args={[1.05, 0.08, 16, 100]} />
              <meshStandardMaterial color="#60a5fa" metalness={0.8} transparent={true} opacity={0.9} />
            </mesh>

            {/* Housing bottom ring */}
            <mesh position={[0, -1.45, 0]} rotation={[Math.PI / 2, 0, 0]} renderOrder={3}>
              <torusGeometry args={[1.05, 0.08, 16, 100]} />
              <meshStandardMaterial color="#60a5fa" metalness={0.8} transparent={true} opacity={0.9} />
            </mesh>

            {/* Filter Area Indicator */}
            <Html position={[0, 2.5, 0]}>
              <div className="bg-blue-600 bg-opacity-80 text-white text-xs px-3 py-1 rounded whitespace-nowrap">
                Área del Filtro
              </div>
            </Html>

            {/* Inventory Area Indicator */}
            <Html position={[-2, 2.5, 0]}>
              <div className="bg-green-600 bg-opacity-80 text-white text-xs px-3 py-1 rounded whitespace-nowrap">
                Inventario de Repuestos
              </div>
            </Html>

            {/* Cartridges in Filter */}
            {cartridges.map(cartridge => filterCartridges.includes(cartridge.id) && (
              <DraggableCartridge
                key={`filter-${cartridge.id}`}
                cartridge={cartridge}
                isInFilter={true}
                position={cartridge.filterPosition}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                onClick={() => handleCartridgeClick(cartridge.id)}
                isHovering={hoveredCartridge === cartridge.id}
                onHover={(state) => setHoveredCartridge(state ? cartridge.id : null)}
                isDragging={draggingCartridge === cartridge.id}
              />
            ))}

            {/* Cartridges in Inventory */}
            {cartridges.map(cartridge => inventoryCartridges.includes(cartridge.id) && (
              <DraggableCartridge
                key={`inventory-${cartridge.id}`}
                cartridge={cartridge}
                isInFilter={false}
                position={cartridge.inventoryPosition}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                onClick={() => handleCartridgeClick(cartridge.id)}
                isHovering={hoveredCartridge === cartridge.id}
                onHover={(state) => setHoveredCartridge(state ? cartridge.id : null)}
                isDragging={draggingCartridge === cartridge.id}
              />
            ))}

            <OrbitControls
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
              autoRotate={!selected && !draggingCartridge}
              autoRotateSpeed={1.5}
              minDistance={3}
              maxDistance={12}
            />
          </Canvas>

          {/* Canvas overlay hints */}
          {showHints && (
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white text-xs px-3 py-2 rounded-lg backdrop-blur-sm">
              🖱️ Arrastra los filtros para moverlos entre el filtro e inventario
            </div>
          )}
        </div>

        {/* Info Panel */}
        <div className="w-96 bg-slate-800 shadow-2xl flex flex-col overflow-hidden border-l border-slate-700 transition-all duration-300">
          {/* Panel Header */}
          <div className="bg-linear-to-r from-slate-700 to-slate-600 px-6 py-4 border-b border-slate-600">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Gestión de Filtros</h2>
              <button
                onClick={() => setShowHints(!showHints)}
                className="text-slate-300 hover:text-white transition text-lg"
                title={showHints ? "Ocultar sugerencias" : "Mostrar sugerencias"}
              >
                {showHints ? '💡' : '🔦'}
              </button>
            </div>
          </div>

          {/* Panel Content */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {selectedCartridge ? (
              <div className="space-y-6">
                {/* Color indicator with animation */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-16 h-16 rounded-lg shadow-2xl transition-transform duration-300 hover:scale-110"
                    style={{
                      backgroundColor: selectedCartridge.color,
                      boxShadow: `0 0 20px ${selectedCartridge.color}80`
                    }}
                  ></div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
                      Nivel {selectedCartridge.id}
                      {filterCartridges.includes(selectedCartridge.id) ? '(En Filtro)' : '(En Inventario)'}
                    </p>
                    <h3 className="text-2xl font-bold text-white">
                      {selectedCartridge.name}
                    </h3>
                  </div>
                </div>

                {/* Separator */}
                <div className="h-px bg-linear-to-r from-slate-600 to-transparent"></div>

                {/* Description */}
                <div>
                  <p className="text-sm uppercase tracking-widest text-slate-400 font-semibold mb-3">Descripción</p>
                  <p className="text-slate-200 leading-relaxed text-base">
                    {selectedCartridge.description}
                  </p>
                </div>

                {/* Benefits */}
                <div>
                  <p className="text-sm uppercase tracking-widest text-slate-400 font-semibold mb-3">Beneficios</p>
                  <div className="space-y-2">
                    {selectedCartridge.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-2 rounded-lg bg-slate-700 bg-opacity-50 hover:bg-opacity-70 transition">
                        <span className="text-lg shrink-0 mt-0.5">✓</span>
                        <span className="text-slate-200">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Lifespan */}
                <div>
                  <p className="text-sm uppercase tracking-widest text-slate-400 font-semibold mb-3">Vida Útil</p>
                  <div className="bg-orange-900 bg-opacity-30 border border-orange-600 rounded-lg p-3">
                    <p className="text-orange-200 text-sm">
                      ⏱️ {selectedCartridge.lifespan}
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2 pt-4">
                  {filterCartridges.includes(selectedCartridge.id) ? (
                    <button
                      onClick={() => {
                        setFilterCartridges(prev => prev.filter(id => id !== selectedCartridge.id))
                        setInventoryCartridges(prev => [...prev, selectedCartridge.id])
                        setSelected(null)
                      }}
                      className="w-full px-4 py-3 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-lg transition transform hover:scale-105 active:scale-95"
                    >
                      🔧 Remover del Filtro
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setInventoryCartridges(prev => prev.filter(id => id !== selectedCartridge.id))
                        setFilterCartridges(prev => [...prev, selectedCartridge.id])
                        setSelected(null)
                      }}
                      className="w-full px-4 py-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-lg transition transform hover:scale-105 active:scale-95"
                    >
                      ➕ Instalar en Filtro
                    </button>
                  )}

                  <button
                    onClick={() => setSelected(null)}
                    className="w-full px-4 py-3 bg-slate-600 hover:bg-slate-500 text-white font-semibold rounded-lg transition transform hover:scale-105 active:scale-95"
                  >
                    ← Ver otros filtros
                  </button>
                  <p className="text-xs text-slate-400 text-center mt-2">
                    Presiona <kbd className="bg-slate-700 px-2 py-1 rounded">ESC</kbd> para cerrar
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="bg-blue-900 bg-opacity-40 border border-blue-600 rounded-lg p-4 mb-6">
                  <p className="text-blue-200 text-sm leading-relaxed">
                    🔄 Arrastra los filtros entre el área del filtro y el inventario para reemplazarlos individualmente cuando llegue el final de su vida útil.
                  </p>
                </div>

                {/* Filter Status */}
                <div className="bg-slate-700 rounded-lg p-4 mb-6">
                  <h3 className="text-white font-semibold mb-3">Estado del Filtro</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Filtros instalados:</span>
                      <span className="text-green-400 font-semibold">{filterCartridges.length}/3</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Repuestos disponibles:</span>
                      <span className="text-blue-400 font-semibold">{inventoryCartridges.length}</span>
                    </div>
                  </div>
                </div>

                {/* Cartridge buttons */}
                <div className="space-y-3">
                  {cartridges.map((cartridge) => {
                    const isInFilter = filterCartridges.includes(cartridge.id)
                    return (
                      <button
                        key={cartridge.id}
                        onClick={() => setSelected(cartridge.id)}
                        className="w-full text-left p-4 rounded-lg border-2 hover:shadow-xl transition transform hover:scale-105 active:scale-95 bg-slate-700 group"
                        style={{
                          borderColor: cartridge.color,
                        }}
                        title={`Presiona para seleccionar - ${isInFilter ? 'En filtro' : 'En inventario'}`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="w-5 h-5 rounded-full shrink-0 transition-transform group-hover:scale-150"
                            style={{ backgroundColor: cartridge.color }}
                          ></div>
                          <div className="min-w-0 flex-1">
                            <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
                              Nivel {cartridge.id}
                              <span className={`ml-2 ${isInFilter ? 'text-green-400' : 'text-blue-400'}`}>
                                {isInFilter ? '● En filtro' : '○ En inventario'}
                              </span>
                            </p>
                            <p className="text-white font-semibold leading-tight">
                              {cartridge.name}
                            </p>
                          </div>
                          <span className="text-slate-400 group-hover:text-white transition">
                            {isInFilter ? '🔧' : '📦'}
                          </span>
                        </div>
                      </button>
                    )
                  })}
                </div>

                {/* Info boxes */}
                <div className="mt-8 space-y-3">
                  <div className="p-3 bg-green-900 bg-opacity-30 border border-green-600 rounded-lg">
                    <p className="text-xs text-green-200">
                      💡 Reemplaza filtros individualmente sin cambiar todo el sistema
                    </p>
                  </div>
                  <div className="p-3 bg-purple-900 bg-opacity-30 border border-purple-600 rounded-lg">
                    <p className="text-xs text-purple-200">
                      🎯 Arrastra y suelta para gestionar el mantenimiento del filtro
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-slate-700 border-t border-slate-600 px-6 py-3 text-xs text-slate-300 flex items-center justify-between">
        <div>
          🖱️ <span className="ml-2">Arrastra filtros | Clic para seleccionar | ESC para cerrar</span>
        </div>
        <div className="text-slate-400">
          Sistema Modular v1.0
        </div>
      </div>
    </div>
  )
}

export default Filter3D