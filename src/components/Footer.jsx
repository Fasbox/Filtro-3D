export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-[#1F4D36] px-6 py-16 text-white lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-xl space-y-4">
          <p className="text-sm uppercase tracking-[0.28em] text-[#A8D5BA]">EcoBioFilter</p>
          <p className="text-lg font-semibold text-white">Purificación modular de agua doméstica con tecnología biológica.</p>
          <p className="text-sm leading-7 text-[#D3E8DE]">
            Sistema diseñado para hogares que buscan agua limpia, mantenimiento profesional y una alternativa sostenible a los filtros tradicionales.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A8D5BA]">Enlaces</p>
            <ul className="mt-4 space-y-3 text-sm text-[#D3E8DE]">
              <li><a href="#inicio" className="transition hover:text-white">Inicio</a></li>
              <li><a href="#sistema" className="transition hover:text-white">Sistema</a></li>
              <li><a href="#componentes" className="transition hover:text-white">Componentes</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A8D5BA]">Contacto</p>
            <ul className="mt-4 space-y-3 text-sm text-[#D3E8DE]">
              <li>hola@ecobiofilter.com</li>
              <li>LinkedIn / EcoBioFilter</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A8D5BA]">Próximos pasos</p>
            <p className="mt-4 max-w-sm text-sm leading-7 text-[#D3E8DE]">
              Explora el modelo 3D, conoce el proceso y lleva esta propuesta de purificación ecológica al siguiente nivel.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
