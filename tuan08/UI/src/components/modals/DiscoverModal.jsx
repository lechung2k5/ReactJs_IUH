import { ArrowRight, X } from 'lucide-react'

export default function DiscoverModal({ onClose, onNext }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop: blurred background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=1400&q=80"
          alt="Kitchen background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-md" />
      </div>

      {/* Modal Card */}
      <div className="relative z-10 bg-white w-full max-w-4xl rounded-[2rem] overflow-hidden flex flex-col md:flex-row shadow-2xl animate-fade-in">
        {/* Left: Editorial image */}
        <div className="w-full md:w-5/12 relative min-h-[280px] md:min-h-0">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80"
            alt="Gourmet food"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <span className="bg-white/90 backdrop-blur text-primary font-bold text-[10px] tracking-widest px-3 py-1 rounded-full uppercase">
              The Digital Curator
            </span>
          </div>
        </div>

        {/* Right: Onboarding */}
        <div className="w-full md:w-7/12 p-10 md:p-14 flex flex-col justify-between items-center text-center relative">
          {/* Close button */}
          <button
            id="discover-modal-close"
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-6 max-w-sm mt-4">
            <div className="w-16 h-1 bg-primary/30 mx-auto rounded-full" />
            <h1 className="text-4xl md:text-5xl font-headline font-extrabold text-on-surface leading-tight tracking-tight">
              Discover <span className="text-primary italic">Chefify</span>
            </h1>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              Experience culinary storytelling at its finest. From Michelin-star secrets to local heritage recipes, curated just for you.
            </p>
          </div>

          <div className="mt-10 w-full space-y-5 max-w-sm">
            <button
              id="discover-modal-next"
              onClick={onNext}
              className="group w-full py-5 px-8 rounded-full bg-gradient-to-r from-primary to-primary-container text-white font-headline font-bold text-lg shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3"
            >
              Next
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              id="discover-modal-skip"
              onClick={onClose}
              className="inline-block text-on-surface-variant hover:text-primary font-medium text-sm tracking-widest uppercase transition-colors underline decoration-primary/20 underline-offset-8"
            >
              Skip for now
            </button>
          </div>

          {/* Step indicator */}
          <div className="mt-10 flex gap-3">
            <div className="w-8 h-1.5 rounded-full bg-primary" />
            <div className="w-2 h-1.5 rounded-full bg-slate-200" />
            <div className="w-2 h-1.5 rounded-full bg-slate-200" />
          </div>
        </div>
      </div>
    </div>
  )
}
