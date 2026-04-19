import { X } from 'lucide-react'

export default function LoginModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop với blur */}
      <div
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Box */}
      <div className="relative z-10 w-full max-w-[900px] bg-white rounded-2xl shadow-2xl flex overflow-hidden h-[560px] mx-4 animate-fade-in">
        {/* Left: Visual */}
        <section className="hidden md:flex flex-1 relative items-center justify-center bg-gray-900">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80"
            alt="Chefify kitchen"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 p-8 text-center max-w-xs">
            <h2 className="text-2xl font-bold text-white leading-tight drop-shadow-lg">
              "Embrace the art of cooking, where flavors come alive!"
            </h2>
          </div>
        </section>

        {/* Right: Form */}
        <section className="flex-1 flex flex-col p-8 sm:p-10 bg-white relative">
          {/* Close button */}
          <button
            id="login-modal-close"
            onClick={onClose}
            className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-full max-w-sm mx-auto flex-1 flex flex-col justify-center">
            <div className="mb-7">
              <h2 className="text-3xl font-headline font-bold text-on-surface mb-2">Login</h2>
              <p className="text-on-surface-variant text-sm">Enter your email to log in.</p>
            </div>

            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
              <input
                id="login-modal-email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-on-surface placeholder:text-slate-400 text-sm transition-all"
              />

              <button
                id="login-modal-continue"
                type="submit"
                className="w-full py-3 rounded-lg bg-primary text-white font-medium text-sm hover:bg-primary-dark transition-colors"
              >
                Continue
              </button>

              <div className="relative py-4 flex items-center">
                <div className="flex-grow border-t border-slate-200" />
                <span className="flex-shrink mx-4 text-xs text-slate-400 uppercase tracking-wider">Or</span>
                <div className="flex-grow border-t border-slate-200" />
              </div>

              <p className="text-xs text-slate-500 text-center px-4">
                By continuing, you agree to the{' '}
                <a href="#" className="text-slate-700 font-medium hover:underline">Terms of Sale</a>,{' '}
                <a href="#" className="text-slate-700 font-medium hover:underline">Terms of Service</a>, and{' '}
                <a href="#" className="text-slate-700 font-medium hover:underline">Privacy Policy</a>.
              </p>

              <div className="space-y-3">
                <button
                  id="login-modal-google"
                  type="button"
                  className="w-full flex items-center justify-center gap-3 py-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors text-sm font-medium"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M12 5.04c1.62 0 3.08.56 4.22 1.65l3.17-3.17C17.45 1.68 14.91 1 12 1 7.24 1 3.2 3.82 1.4 7.92l3.73 2.9C6.01 7.39 8.77 5.04 12 5.04z" fill="#EA4335"/>
                    <path d="M23.49 12.27c0-.8-.07-1.56-.19-2.27H12v4.31h6.44c-.28 1.48-1.12 2.74-2.37 3.58l3.73 2.9C21.93 18.75 23.49 15.81 23.49 12.27z" fill="#4285F4"/>
                    <path d="M5.13 14.82c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09l-3.73-2.9C.51 9.24 0 10.57 0 12s.51 2.76 1.4 4.27l3.73-2.9z" fill="#FBBC05"/>
                    <path d="M12 23c2.91 0 5.34-.96 7.12-2.6l-3.73-2.9c-1.04.7-2.38 1.11-3.39 1.11-3.23 0-5.99-2.35-6.87-5.49l-3.73 2.9C3.2 20.18 7.24 23 12 23z" fill="#34A853"/>
                  </svg>
                  <span className="text-[#ea4335]">Continue with Google</span>
                </button>

                <button
                  id="login-modal-facebook"
                  type="button"
                  className="w-full flex items-center justify-center gap-3 py-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors text-sm font-medium text-[#1877f2]"
                >
                  <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Continue with Facebook
                </button>

                <button
                  id="login-modal-apple"
                  type="button"
                  className="w-full flex items-center justify-center gap-3 py-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors text-sm font-medium text-gray-900"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.03 1.52-.06 2.09-.98 3.928-.98 1.837 0 2.357.98 3.957.95 1.62-.03 2.66-1.48 3.664-2.946 1.157-1.69 1.633-3.328 1.657-3.415-.035-.015-3.176-1.218-3.21-4.821-.027-3.01 2.457-4.453 2.57-4.522-1.408-2.065-3.57-2.3-4.33-2.344-1.62-.135-2.91.738-3.626.738zm1.615-4.22c.795-.963 1.332-2.302 1.185-3.642-1.15.047-2.54.767-3.367 1.73-.743.854-1.39 2.221-1.213 3.53 1.282.1 2.597-.655 3.395-1.618z"/>
                  </svg>
                  Continue with Apple
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  )
}
