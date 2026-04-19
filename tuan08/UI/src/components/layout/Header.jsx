import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Search, Menu, X } from 'lucide-react'

export default function Header({ onLoginClick }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchVal, setSearchVal] = useState('')
  const location = useLocation()
  const navigate = useNavigate()

  const navLinks = [
    { label: 'What to cook', href: '/' },
    { label: 'Recipes', href: '/recipes' },
    { label: 'Ingredients', href: '/recipes' },
    { label: 'Occasions', href: '/recipes' },
    { label: 'About Us', href: '/dashboard' },
  ]

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchVal.trim()) {
      navigate(`/recipes?q=${encodeURIComponent(searchVal.trim())}`)
    }
  }

  return (
    <header className="w-full bg-white border-b border-outline-variant sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1280px] mx-auto flex justify-between items-center px-6 h-[72px]">

        {/* Logo + Search */}
        <div className="flex items-center gap-4 flex-1">
          <Link to="/" className="flex items-center shrink-0" id="header-logo">
            <img src="/Lab_03/avatar_small.png" alt="Chefify Logo" className="h-8 rounded-lg object-contain" />
          </Link>

          <form onSubmit={handleSearch} className="relative hidden md:block w-full max-w-[280px]">
            <Search className="absolute left-3 top-2.5 text-on-surface-variant/60 w-4 h-4" />
            <input
              id="header-search"
              type="text"
              placeholder="What would you like to cook?"
              value={searchVal}
              onChange={e => setSearchVal(e.target.value)}
              className="w-full h-10 pl-9 pr-4 rounded-lg bg-slate-100 border-none focus:ring-2 focus:ring-primary/30 outline-none text-sm text-on-surface placeholder:text-slate-400 transition-all"
            />
          </form>
        </div>

        {/* Nav */}
        <nav className="hidden lg:flex items-center gap-6 text-sm text-on-surface-variant">
          {navLinks.map(link => (
            <Link
              key={link.label}
              to={link.href}
              className={`font-medium transition-colors hover:text-primary ${
                location.pathname === link.href ? 'text-primary' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions: Login + Subscribe (no Recipe Box) */}
        <div className="flex items-center gap-3 justify-end ml-4">
          <button
            id="header-login"
            onClick={onLoginClick}
            className="hidden md:block text-primary bg-primary/10 hover:bg-primary/20 transition-colors text-sm font-medium px-5 py-2 rounded-lg"
          >
            Login
          </button>
          <Link
            to="/subscribe"
            id="header-subscribe"
            className="hidden md:flex bg-primary text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors"
          >
            Subscribe
          </Link>
          <button
            className="lg:hidden p-2 text-on-surface-variant"
            onClick={() => setMenuOpen(!menuOpen)}
            id="header-mobile-menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-outline-variant px-6 py-4 flex flex-col gap-4 animate-fade-in">
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-3 top-2.5 text-on-surface-variant/60 w-4 h-4" />
            <input
              type="text"
              placeholder="Search recipes..."
              value={searchVal}
              onChange={e => setSearchVal(e.target.value)}
              className="w-full h-10 pl-9 pr-4 rounded-lg bg-slate-100 border-none outline-none text-sm"
            />
          </form>
          {navLinks.map(link => (
            <Link
              key={link.label}
              to={link.href}
              className="text-on-surface-variant hover:text-primary font-medium py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-3 pt-2 border-t border-outline-variant">
            <button
              onClick={() => { setMenuOpen(false); onLoginClick?.(); }}
              className="flex-1 text-center border border-primary text-primary py-2 rounded-full text-sm font-medium"
            >
              Login
            </button>
            <Link
              to="/subscribe"
              className="flex-1 text-center bg-primary text-white py-2 rounded-full text-sm font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Subscribe
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
