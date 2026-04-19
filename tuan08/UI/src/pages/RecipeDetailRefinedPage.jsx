import { useParams, Link } from 'react-router-dom'
import { Clock, Users, Star, Bookmark, Share2, ChevronRight, Heart, MessageCircle } from 'lucide-react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import RecipeCard from '../components/common/RecipeCard'
import { getRecipeById, recipes } from '../data/recipes'

export default function RecipeDetailRefinedPage({ onLoginClick }) {
  const { id } = useParams()
  const recipe = getRecipeById(id) || recipes[10]
  const relatedRecipes = recipes.filter(r => r.category === recipe.category && r.id !== recipe.id).slice(0, 4)

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header onLoginClick={onLoginClick} />

      {/* Full-width hero image */}
      <div className="w-full h-[400px] relative overflow-hidden">
        <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0 max-w-[1280px] mx-auto px-6 text-white">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-white/70 mb-4">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/recipes" className="hover:text-white">Recipes</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white">{recipe.title}</span>
          </div>
          <h1 className="font-headline font-extrabold text-4xl text-white leading-tight max-w-[700px]">
            {recipe.title}
          </h1>
        </div>
      </div>

      <main className="flex-1 max-w-[1280px] mx-auto w-full px-6 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Sidebar */}
          <aside className="lg:w-[320px] shrink-0">
            {/* Author */}
            <div className="flex items-center gap-3 mb-6 p-4 bg-slate-50 rounded-2xl">
              <img src={recipe.author.avatar} alt={recipe.author.name} className="w-12 h-12 rounded-full" />
              <div>
                <p className="font-bold text-sm text-on-surface">{recipe.author.name}</p>
                <p className="text-xs text-on-surface-variant">Expert Chef</p>
              </div>
              <button id="refined-follow" className="ml-auto bg-primary-light text-primary text-xs font-medium px-4 py-1.5 rounded-full hover:bg-primary hover:text-white transition-colors">
                Follow
              </button>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="text-center p-4 bg-slate-50 rounded-2xl">
                <Clock className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="text-xs text-on-surface-variant">Total Time</p>
                <p className="font-bold text-on-surface">{recipe.time} min</p>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-2xl">
                <Users className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="text-xs text-on-surface-variant">Servings</p>
                <p className="font-bold text-on-surface">{recipe.servings}</p>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-2xl">
                <Star className="w-5 h-5 text-yellow-400 mx-auto mb-2" fill="currentColor" />
                <p className="text-xs text-on-surface-variant">Rating</p>
                <p className="font-bold text-on-surface">{recipe.rating}/5</p>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-2xl">
                <MessageCircle className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="text-xs text-on-surface-variant">Reviews</p>
                <p className="font-bold text-on-surface">128</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mb-6">
              <button id="refined-bookmark" className="flex-1 flex items-center justify-center gap-2 py-3 border border-primary text-primary rounded-full font-medium text-sm hover:bg-primary-light transition-colors">
                <Bookmark className="w-4 h-4" /> Save
              </button>
              <button id="refined-like" className="flex-1 flex items-center justify-center gap-2 py-3 border border-primary text-primary rounded-full font-medium text-sm hover:bg-primary-light transition-colors">
                <Heart className="w-4 h-4" /> Like
              </button>
              <button id="refined-share" className="py-3 px-4 border border-outline-variant text-on-surface-variant rounded-full hover:bg-slate-50 transition-colors">
                <Share2 className="w-4 h-4" />
              </button>
            </div>

            {/* Ingredients */}
            <div className="bg-slate-50 rounded-2xl p-5 mb-6">
              <h2 className="font-headline font-bold text-base text-on-surface mb-4">Ingredients</h2>
              <p className="text-sm text-on-surface-variant mb-4">For {recipe.servings} servings</p>
              <ul className="flex flex-col gap-3">
                {recipe.ingredients.map((ing, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <span className="w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center text-primary text-xs font-bold shrink-0">✓</span>
                    <span className="text-on-surface-variant">{ing}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Subscribe CTA */}
            <div className="bg-primary rounded-2xl p-5 text-white text-center">
              <p className="font-headline font-bold text-lg mb-1">Unlock Pro Recipes</p>
              <p className="text-white/80 text-xs mb-4">Get exclusive access to 40K+ curated recipes</p>
              <Link to="/subscribe" id="refined-subscribe" className="block bg-white text-primary font-bold py-2.5 rounded-full text-sm hover:bg-primary-light transition-colors">
                Subscribe Now
              </Link>
            </div>
          </aside>

          {/* Main: Steps */}
          <div className="flex-1">
            {/* Description */}
            <p className="text-on-surface-variant leading-relaxed mb-8 text-base">{recipe.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {recipe.tags.map(tag => (
                <span key={tag} className="bg-slate-100 text-on-surface-variant text-xs px-3 py-1 rounded-full font-medium hover:bg-primary-light hover:text-primary transition-colors cursor-pointer">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Steps */}
            <h2 className="font-headline font-bold text-2xl text-on-surface mb-6">Step-by-Step Instructions</h2>
            <div className="flex flex-col gap-10">
              {recipe.steps.map(step => (
                <div key={step.step} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <span className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                      {step.step}
                    </span>
                    {step.step < recipe.steps.length && (
                      <div className="w-0.5 h-full bg-primary/20 mt-2" />
                    )}
                  </div>
                  <div className="flex-1 pb-4">
                    <h3 className="font-headline font-bold text-lg text-on-surface mb-2">{step.title}</h3>
                    <p className="text-on-surface-variant leading-relaxed text-sm">{step.desc}</p>
                    {step.image && (
                      <img src={step.image} alt={step.title} className="mt-4 w-full h-[200px] object-cover rounded-xl" />
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Cooking Note */}
            <div className="mt-10 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl">
              <h3 className="font-headline font-bold text-lg text-yellow-900 mb-2">👨‍🍳 Pro Tip</h3>
              <p className="text-yellow-800 leading-relaxed">{recipe.cookingNote}</p>
            </div>
          </div>
        </div>

        {/* Related Recipes */}
        {relatedRecipes.length > 0 && (
          <div className="mt-16 pt-12 border-t border-outline-variant">
            <h2 className="font-headline font-bold text-2xl text-on-surface mb-8">More like this</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {relatedRecipes.map(r => (
                <RecipeCard key={r.id} recipe={r} />
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
