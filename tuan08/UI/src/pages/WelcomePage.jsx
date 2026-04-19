import { Link } from 'react-router-dom'
import { ArrowRight, Star } from 'lucide-react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import RecipeCard from '../components/common/RecipeCard'
import { recipes } from '../data/recipes'

const featured = recipes[10] // Strawberry shortcake
const topRecipes = recipes.slice(0, 6)
const stats = [
  { label: 'Recipes', value: '40K+' },
  { label: 'Expert Chefs', value: '1,200+' },
  { label: 'Happy Users', value: '500K+' },
  { label: 'Reviews', value: '4.9 ★' },
]

export default function WelcomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="w-full bg-gradient-to-br from-primary-light via-white to-white py-20 px-6">
          <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-primary-light text-primary text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
                <img src="/Lab_03/avatar_small.png" alt="Chefify" className="w-4 h-4 rounded-full" />
                Welcome to Chefify
              </div>
              <h1 className="font-headline font-extrabold text-5xl text-on-surface leading-tight mb-6">
                Discover <span className="text-primary">Delicious</span><br />
                Recipes for Every<br />
                Occasion
              </h1>
              <p className="text-on-surface-variant text-lg mb-8 max-w-lg">
                Explore thousands of chef-curated recipes, from quick weeknight dinners to impressive dinner party showstoppers.
              </p>
              <div className="flex gap-4 justify-center lg:justify-start">
                <Link
                  to="/recipes"
                  id="welcome-explore"
                  className="bg-primary text-white px-8 py-4 rounded-full font-bold text-base hover:bg-primary-dark transition-colors flex items-center gap-2"
                >
                  Explore Recipes <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/subscribe"
                  id="welcome-subscribe"
                  className="border-2 border-primary text-primary px-8 py-4 rounded-full font-bold text-base hover:bg-primary-light transition-colors"
                >
                  Subscribe Free
                </Link>
              </div>
            </div>
            <div className="flex-1 relative max-w-[560px]">
              <div className="relative w-full h-[460px] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=1000&q=80"
                  alt="Chef cooking"
                  className="w-full h-full object-cover"
                />
                {/* Floating card */}
                <div className="absolute bottom-8 left-6 bg-white rounded-2xl p-4 shadow-lg max-w-[240px]">
                  <div className="flex items-center gap-3 mb-2">
                    <img src={featured.image} alt="" className="w-12 h-12 rounded-xl object-cover" />
                    <div>
                      <p className="font-bold text-sm text-on-surface line-clamp-1">{featured.title}</p>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-400" fill="currentColor" />
                        <span className="text-xs text-on-surface-variant">{featured.rating}.0 · {featured.time} min</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-primary font-medium bg-primary-light px-2 py-0.5 rounded">
                    Recipe of the day
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-[#1e293b] py-12 px-6">
          <div className="max-w-[900px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map(s => (
              <div key={s.label}>
                <p className="font-headline font-extrabold text-3xl text-white mb-1">{s.value}</p>
                <p className="text-slate-400 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Recipes */}
        <section className="max-w-[1200px] mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="section-title">Popular Recipes</h2>
            <p className="section-subtitle">Discover what's trending in our kitchen community</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {topRecipes.map(r => (
              <RecipeCard key={r.id} recipe={r} />
            ))}
          </div>
          <div className="text-center">
            <Link to="/recipes" id="welcome-view-all" className="bg-primary text-white px-10 py-4 rounded-full font-bold text-base hover:bg-primary-dark transition-colors inline-block">
              View All Recipes
            </Link>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-primary py-16 px-6">
          <div className="max-w-[800px] mx-auto text-center text-white">
            <h2 className="font-headline font-extrabold text-4xl mb-4">Ready to start cooking?</h2>
            <p className="text-white/80 text-lg mb-8">
              Join over 500,000 home cooks who use Chefify every day to make amazing meals.
            </p>
            <Link
              to="/login"
              id="welcome-get-started"
              className="bg-white text-primary font-bold px-10 py-4 rounded-full text-base hover:bg-primary-light transition-colors inline-block"
            >
              Get Started Free
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
