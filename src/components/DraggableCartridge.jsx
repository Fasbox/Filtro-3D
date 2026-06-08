import { useRef, useState, useMemo } from 'react'
import { Html } from '@react-three/drei'
import { CanvasTexture, RepeatWrapping, LinearFilter } from 'three'

function createCanvasTexture(size, drawFn) {
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')
  drawFn(ctx, size)
  const texture = new CanvasTexture(canvas)
  texture.wrapS = RepeatWrapping
  texture.wrapT = RepeatWrapping
  texture.repeat.set(1.5, 1.5)
  texture.minFilter = LinearFilter
  texture.needsUpdate = true
  return texture
}

function createStoneTexture() {
  return createCanvasTexture(256, (ctx, size) => {
    ctx.fillStyle = '#736153'
    ctx.fillRect(0, 0, size, size)

    for (let i = 0; i < 30; i += 1) {
      const radius = 8 + Math.random() * 18
      const x = Math.random() * (size - radius * 2) + radius
      const y = Math.random() * (size - radius * 2) + radius
      ctx.beginPath()
      ctx.fillStyle = `hsl(35, ${30 + Math.random() * 20}%, ${35 + Math.random() * 20}%)`
      ctx.arc(x, y, radius, 0, Math.PI * 2)
      ctx.fill()
      ctx.strokeStyle = 'rgba(18, 15, 11, 0.12)'
      ctx.lineWidth = 1.5
      ctx.stroke()
    }

    ctx.globalAlpha = 0.18
    for (let i = 0; i < 80; i += 1) {
      ctx.fillStyle = `rgba(63, 53, 44, ${Math.random() * 0.18})`
      const x = Math.random() * size
      const y = Math.random() * size
      const w = 3 + Math.random() * 6
      const h = 3 + Math.random() * 6
      ctx.fillRect(x, y, w, h)
    }
    ctx.globalAlpha = 1
  })
}

function createBioTexture() {
  return createCanvasTexture(256, (ctx, size) => {
    const gradient = ctx.createLinearGradient(0, 0, size, size)
    gradient.addColorStop(0, '#4f7a47')
    gradient.addColorStop(1, '#6aa867')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, size, size)

    for (let i = 0; i < 28; i += 1) {
      const width = 12 + Math.random() * 18
      const height = 6 + Math.random() * 10
      const x = Math.random() * (size - width)
      const y = Math.random() * (size - height)
      ctx.save()
      ctx.translate(x + width / 2, y + height / 2)
      ctx.rotate(Math.random() * Math.PI)
      ctx.fillStyle = `rgba(255,255,255,${0.18 + Math.random() * 0.15})`
      ctx.fillRect(-width / 2, -height / 2, width, height)
      ctx.restore()
    }

    ctx.globalAlpha = 0.25
    for (let i = 0; i < 40; i += 1) {
      const radius = 4 + Math.random() * 6
      const x = Math.random() * size
      const y = Math.random() * size
      ctx.beginPath()
      ctx.fillStyle = `rgba(42, 84, 35, ${0.35 + Math.random() * 0.18})`
      ctx.arc(x, y, radius, 0, Math.PI * 2)
      ctx.fill()
    }
    ctx.globalAlpha = 1
  })
}

function createCharcoalTexture() {
  return createCanvasTexture(256, (ctx, size) => {
    ctx.fillStyle = '#23272c'
    ctx.fillRect(0, 0, size, size)

    for (let i = 0; i < 40; i += 1) {
      const radius = 4 + Math.random() * 10
      const x = Math.random() * (size - radius * 2) + radius
      const y = Math.random() * (size - radius * 2) + radius
      ctx.beginPath()
      ctx.fillStyle = `rgba(46, 52, 58, ${0.7 + Math.random() * 0.18})`
      ctx.arc(x, y, radius, 0, Math.PI * 2)
      ctx.fill()
    }

    ctx.globalAlpha = 0.2
    for (let i = 0; i < 65; i += 1) {
      ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.08})`
      const x = Math.random() * size
      const y = Math.random() * size
      const w = 1 + Math.random() * 3
      const h = 1 + Math.random() * 3
      ctx.fillRect(x, y, w, h)
    }
    ctx.globalAlpha = 1
  })
}

function createWaterTexture() {
  return createCanvasTexture(256, (ctx, size) => {
    const gradient = ctx.createLinearGradient(0, 0, 0, size)
    gradient.addColorStop(0, '#0e5d7b')
    gradient.addColorStop(0.4, '#0f6d88')
    gradient.addColorStop(1, '#3ca2c4')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, size, size)

    ctx.strokeStyle = 'rgba(255,255,255,0.2)'
    ctx.lineWidth = 2
    for (let i = 0; i < 16; i += 1) {
      const y = (i / 16) * size + 8
      ctx.beginPath()
      ctx.moveTo(-20, y)
      ctx.bezierCurveTo(size * 0.25, y + 5, size * 0.75, y - 6, size + 20, y + 2)
      ctx.stroke()
    }

    ctx.globalAlpha = 0.22
    for (let i = 0; i < 30; i += 1) {
      ctx.beginPath()
      const radius = 6 + Math.random() * 8
      const x = Math.random() * size
      const y = Math.random() * size
      ctx.arc(x, y, radius, 0, Math.PI * 2)
      ctx.fillStyle = '#ffffff'
      ctx.fill()
    }
    ctx.globalAlpha = 1
  })
}

function createTopTexture() {
  return createCanvasTexture(256, (ctx, size) => {
    ctx.fillStyle = '#bfb89c'
    ctx.fillRect(0, 0, size, size)
    ctx.strokeStyle = 'rgba(71, 70, 66, 0.28)'
    ctx.lineWidth = 1
    for (let i = 0; i < 12; i += 1) {
      const x = (i / 12) * size
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, size)
      ctx.stroke()
    }
    for (let i = 0; i < 12; i += 1) {
      const y = (i / 12) * size
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(size, y)
      ctx.stroke()
    }
  })
}

function getLayerMap(type) {
  switch (type) {
    case 'stones':
      return createStoneTexture()
    case 'bio':
      return createBioTexture()
    case 'charcoal':
      return createCharcoalTexture()
    case 'water':
      return createWaterTexture()
    default:
      return createTopTexture()
  }
}

function DraggableCartridge({
  space,
  position,
  onDragStart,
  onDragEnd,
  onClick,
  isHovering,
  onHover,
  isDragging,
  draggable = true
}) {
  const meshRef = useRef()
  const [dragOffset, setDragOffset] = useState([0, 0, 0])
  const textureMap = useMemo(() => getLayerMap(space.textureType), [space.textureType])

  const handlePointerDown = (e) => {
    if (!draggable || !meshRef.current) return
    e.stopPropagation()
    const point = e.point
    setDragOffset([
      meshRef.current.position.x - point.x,
      meshRef.current.position.y - point.y,
      0
    ])
    onDragStart(space.id)
  }

  const handlePointerMove = (e) => {
    if (!draggable || !isDragging || !meshRef.current) return
    e.stopPropagation()
    const point = e.point
    meshRef.current.position.set(point.x + dragOffset[0], point.y + dragOffset[1], position[2])
  }

  const handlePointerUp = (e) => {
    if (!draggable || !isDragging || !meshRef.current) return
    e.stopPropagation()
    onDragEnd(space.id, meshRef.current.position)
  }

  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={onClick}
      onPointerEnter={() => onHover(true)}
      onPointerLeave={() => onHover(false)}
      onPointerDown={draggable ? handlePointerDown : undefined}
      onPointerMove={draggable ? handlePointerMove : undefined}
      onPointerUp={draggable ? handlePointerUp : undefined}
      scale={isDragging ? [1.2, 1.2, 1.2] : isHovering ? [1.1, 1.1, 1.1] : [1, 1, 1]}
      renderOrder={2}
    >
      <cylinderGeometry args={[0.35, 0.35, space.height || 0.7, 32]} />
      <meshPhysicalMaterial
        map={textureMap}
        color={space.color}
        emissive={space.material?.emissive || '#000000'}
        emissiveIntensity={space.material?.emissiveIntensity || 0}
        transparent={space.material?.transparent ?? true}
        opacity={space.material?.opacity ?? 0.95}
        roughness={space.material?.roughness ?? 0.6}
        metalness={space.material?.metalness ?? 0.1}
        clearcoat={space.material?.clearcoat ?? 0.1}
        clearcoatRoughness={space.material?.clearcoatRoughness ?? 0.6}
        transmission={space.material?.transmission ?? 0}
      />

      <mesh position={[0, (space.height || 0.7) / 2 - 0.1, 0]}>
        <cylinderGeometry args={[0.38, 0.35, 0.1, 32]} />
        <meshStandardMaterial color="#333333" metalness={0.6} roughness={0.4} />
      </mesh>

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

export default DraggableCartridge
