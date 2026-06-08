import Logo from '../assets/Logo.jpeg'

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sistema', label: 'Sistema' },
  { href: '#componentes', label: 'Componentes' },
  { href: '#funcionamiento', label: 'Funcionamiento' },
  { href: '#mantenimiento', label: 'Mantenimiento' }
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-[#FAF7EF]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <a href="#inicio" className="flex items-center gap-3">
          <img src={Logo} alt="EcoBioFilter logo" className="h-12 w-12 rounded-3xl border border-slate-200 bg-white object-cover shadow-sm" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#1F4D36]">EcoBioFilter</p>
            <p className="text-xs text-slate-500">Purificación modular</p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-[#1E2A24] lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-[#2F7D4E]">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#sistema"
            className="hidden rounded-full bg-[#2F7D4E] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_-24px_rgba(47,125,78,0.9)] transition hover:bg-[#256944] lg:inline-flex"
          >
            Ver modelo 3D
          </a>
          <button className="inline-flex items-center rounded-full border border-[#2F7D4E] bg-white px-4 py-2 text-sm font-semibold text-[#2F7D4E] transition hover:bg-[#F1E6D0]">
            Contacto
          </button>
        </div>
      </div>
    </header>
  )
}
