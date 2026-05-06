# Filtro de Agua 3D - Sistema Modular

Una aplicación web interactiva en 3D que permite visualizar y gestionar un filtro de agua modular donde cada sección puede ser removida y reemplazada individualmente.

## 🚀 Características Principales

### 🎯 Funcionalidad de Drag & Drop
- **Arrastrar filtros**: Mueve los cartuchos entre el filtro y el inventario arrastrándolos con el mouse
- **Reemplazo individual**: Cada filtro puede ser removido sin afectar los demás
- **Gestión de inventario**: Los filtros removidos van al inventario para reutilización futura

### 🎨 Visualización 3D Interactiva
- **Modelo 3D realista**: Filtro de agua con tres niveles de filtración
- **Iluminación avanzada**: Luces ambientales y direccionales para mejor visibilidad
- **Controles orbitales**: Rotación, zoom y paneo de la escena 3D
- **Animaciones**: Efectos visuales al seleccionar y arrastrar filtros

### 📊 Información Detallada
- **Tres niveles de filtración**:
  1. **Filtro de Sedimentos** (Rojo) - Elimina partículas grandes
  2. **Filtro de Carbón Activado** (Verde) - Reduce cloro y mejora sabor
  3. **Membrana de Microfiltración** (Azul claro) - Elimina bacterias y virus

### 🎮 Interacciones
- **Selección por clic**: Haz clic en cualquier filtro para ver información detallada
- **Arrastrar y soltar**: Mueve filtros entre áreas del filtro e inventario
- **Navegación por teclado**: ESC para cerrar paneles de información
- **Auto-rotación**: La escena rota automáticamente cuando no hay interacciones

## 🛠️ Tecnologías Utilizadas

- **React 19.2.5**: Framework principal para la interfaz
- **Vite 8.0.10**: Herramienta de desarrollo rápida
- **React Three Fiber 9.6.1**: Renderizado 3D en React
- **Three.js 0.184.0**: Biblioteca de gráficos 3D
- **Tailwind CSS v4.2.4**: Framework de estilos utilitarios

## 📁 Estructura del Proyecto

```
src/
├── App.jsx              # Componente principal de la aplicación
├── components/
│   └── Filter3D.jsx     # Componente principal con lógica 3D y drag & drop
├── index.css            # Estilos globales y configuración Tailwind
└── main.jsx             # Punto de entrada de la aplicación
```

## 🚀 Instalación y Uso

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Ejecutar en desarrollo**:
   ```bash
   npm run dev
   ```

3. **Construir para producción**:
   ```bash
   npm run build
   ```

## 🎯 Uso de la Aplicación

1. **Visualizar el filtro**: La escena 3D muestra el filtro completo con todos los cartuchos instalados
2. **Seleccionar filtros**: Haz clic en cualquier cartucho para ver información detallada en el panel lateral
3. **Reemplazar filtros**: Arrastra un cartucho desde el filtro hacia el área de inventario para removerlo
4. **Instalar filtros**: Arrastra un cartucho desde el inventario hacia el área del filtro para instalarlo

## 🎨 Características Visuales

- **Gradientes modernos**: Fondos con gradientes para mejor estética
- **Efectos de iluminación**: Los filtros brillan cuando se arrastran
- **Animaciones suaves**: Transiciones fluidas en todas las interacciones
- **Indicadores visuales**: Áreas marcadas para filtro e inventario
- **Responsive design**: Adaptable a diferentes tamaños de pantalla

## 🔧 Funcionalidad Técnica

### Estado de Gestión
- **filterCartridges**: Array con IDs de filtros instalados en el filtro
- **inventoryCartridges**: Array con IDs de filtros disponibles en inventario
- **selected**: ID del filtro actualmente seleccionado
- **draggingCartridge**: ID del filtro siendo arrastrado

### Sistema de Drag & Drop
- **Pointer events**: Manejo de eventos del mouse para arrastrar
- **Detección de áreas**: Lógica para determinar si se suelta en filtro o inventario
- **Actualización de estado**: Cambio automático del estado al soltar el filtro

### Componentes 3D
- **DraggableCartridge**: Componente individual para cada filtro con lógica de drag
- **Filter Housing**: Modelo 3D del contenedor del filtro
- **Lighting System**: Sistema de iluminación para visibilidad óptima

## 📝 Notas de Desarrollo

- Compatible con Tailwind CSS v4 (usa sintaxis `bg-linear-to-*` en lugar de `bg-gradient-to-*`)
- Optimizado para rendimiento con React Three Fiber
- Código modular y reutilizable
- Soporte completo para navegación por teclado

---

**Versión**: 1.0.0
**Autor**: GitHub Copilot
**Licencia**: MIT
