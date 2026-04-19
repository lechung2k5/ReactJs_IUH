import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Mail, Eye, EyeOff } from 'lucide-react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [showSocial, setShowSocial] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setShowSocial(true)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#fff4f5]">
      {/* Header (minimal) */}
      <header className="fixed top-0 w-full z-50 bg-rose-50/80 backdrop-blur-xl shadow-sm">
        <div className="flex justify-between items-center h-20 px-8 max-w-screen-xl mx-auto">
          <Link to="/" id="login-logo" className="text-2xl font-black text-rose-700 italic font-headline tracking-tight">
            Chefify
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <Link to="/recipes" className="text-rose-900/60 hover:text-rose-700 transition-colors font-medium">Browse</Link>
            <Link to="/recipes" className="text-rose-900/60 hover:text-rose-700 transition-colors font-medium">Cuisines</Link>
            <Link to="/" className="text-rose-900/60 hover:text-rose-700 transition-colors font-medium">Chefs</Link>
          </nav>
          <div className="flex items-center gap-3">
            <button className="p-2 text-rose-600 hover:bg-rose-100/50 rounded-full transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            </button>
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-rose-100 bg-slate-200">
              <img src="https://i.pravatar.cc/40?img=30" alt="User" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </header>

      <main className="flex h-screen pt-20">
        {/* Left: Visual */}
        <section className="hidden lg:flex flex-1 relative items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1400&q=80"
              alt="Culinary background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent" />
          </div>
          <div className="relative z-10 p-16 max-w-xl">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-medium tracking-widest uppercase">
              Culinary Excellence
            </div>
            <h1 className="text-5xl font-headline font-extrabold text-white leading-tight mb-8">
              Embrace the art of cooking, where flavors come alive!
            </h1>
            <div className="flex items-center gap-4 text-white/90">
              <div className="flex -space-x-3">
                {[20,21,22].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/40?img=${i}`} alt="User" className="w-10 h-10 rounded-full border-2 border-primary/60" />
                ))}
              </div>
              <p className="text-sm font-medium">Join 50k+ chefs across the globe</p>
            </div>
          </div>
        </section>

        {/* Right: Login Form */}
        <section className="flex-1 flex items-center justify-center px-8 sm:px-12 bg-[#fff4f5]">
          <div className="w-full max-w-md">
            <div className="mb-10">
              <h2 className="text-3xl font-headline font-bold text-[#4b2130] mb-2">Welcome Back</h2>
              <p className="text-[#7f4c5d] font-body">Sign in to continue your culinary journey</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="login-email" className="text-xs font-bold text-[#7f4c5d] uppercase tracking-wider px-1 block mb-2">
                  Email Address
                </label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7f4c5d]/50 w-5 h-5 group-focus-within:text-primary transition-colors" />
                  <input
                    id="login-email"
                    type="email"
                    placeholder="chef@chefify.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-[#ffe1e8] border-none outline-none focus:ring-2 focus:ring-primary text-[#4b2130] placeholder:text-[#7f4c5d]/40 transition-all"
                  />
                </div>
              </div>

              <button
                id="login-continue"
                type="submit"
                className="w-full py-4 rounded-full bg-gradient-to-r from-[#b3193c] to-[#ff7484] text-white font-headline font-bold text-base shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all"
              >
                Continue
              </button>

              {showSocial && (
                <div className="animate-fade-in">
                  <div className="relative py-4 flex items-center">
                    <div className="flex-grow border-t border-[#da9cae]/30" />
                    <span className="flex-shrink mx-4 text-xs font-semibold text-[#7f4c5d]/60 uppercase tracking-widest">Or continue with</span>
                    <div className="flex-grow border-t border-[#da9cae]/30" />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {/* Google */}
                    <button id="login-google" type="button" className="flex items-center justify-center py-3.5 rounded-xl bg-[#ffe1e8] hover:bg-[#ffd9e2] transition-colors border border-[#da9cae]/10">
                      <svg className="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M12 5.04c1.62 0 3.08.56 4.22 1.65l3.17-3.17C17.45 1.68 14.91 1 12 1 7.24 1 3.2 3.82 1.4 7.92l3.73 2.9C6.01 7.39 8.77 5.04 12 5.04z" fill="#EA4335"/>
                        <path d="M23.49 12.27c0-.8-.07-1.56-.19-2.27H12v4.31h6.44c-.28 1.48-1.12 2.74-2.37 3.58l3.73 2.9C21.93 18.75 23.49 15.81 23.49 12.27z" fill="#4285F4"/>
                        <path d="M5.13 14.82c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09l-3.73-2.9C.51 9.24 0 10.57 0 12s.51 2.76 1.4 4.27l3.73-2.9z" fill="#FBBC05"/>
                        <path d="M12 23c2.91 0 5.34-.96 7.12-2.6l-3.73-2.9c-1.04.7-2.38 1.11-3.39 1.11-3.23 0-5.99-2.35-6.87-5.49l-3.73 2.9C3.2 20.18 7.24 23 12 23z" fill="#34A853"/>
                      </svg>
                    </button>
                    {/* Facebook */}
                    <button id="login-facebook" type="button" className="flex items-center justify-center py-3.5 rounded-xl bg-[#ffe1e8] hover:bg-[#ffd9e2] transition-colors border border-[#da9cae]/10">
                      <svg className="w-6 h-6" fill="#1877F2" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </button>
                    {/* Apple */}
                    <button id="login-apple" type="button" className="flex items-center justify-center py-3.5 rounded-xl bg-[#ffe1e8] hover:bg-[#ffd9e2] transition-colors border border-[#da9cae]/10">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.03 1.52-.06 2.09-.98 3.928-.98 1.837 0 2.357.98 3.957.95 1.62-.03 2.66-1.48 3.664-2.946 1.157-1.69 1.633-3.328 1.657-3.415-.035-.015-3.176-1.218-3.21-4.821-.027-3.01 2.457-4.453 2.57-4.522-1.408-2.065-3.57-2.3-4.33-2.344-1.62-.135-2.91.738-3.626.738zm1.615-4.22c.795-.963 1.332-2.302 1.185-3.642-1.15.047-2.54.767-3.367 1.73-.743.854-1.39 2.221-1.213 3.53 1.282.1 2.597-.655 3.395-1.618z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </form>

            <div className="mt-10 text-center">
              <p className="text-[#7f4c5d] text-sm">
                Don't have an account?{' '}
                <Link to="/subscribe" className="text-[#b3193c] font-bold hover:underline">
                  Join the community
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer minimal */}
      <footer className="fixed bottom-0 w-full py-4 bg-[#fff4f5]/50 backdrop-blur-md border-t border-[#da9cae]/20">
        <div className="max-w-screen-xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-[#7f4c5d]/50 uppercase tracking-widest">
          <p>© 2024 Chefify. Editorial Culinary Experiences.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
