import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import RecipeCard from '../components/common/RecipeCard'
import { recipes } from '../data/recipes'

const summerRecipes = recipes.slice(1, 5)
const videoRecipes = [recipes[3], recipes[6], recipes[14], recipes[6]]
const editorsPick = [recipes[11], recipes[12], recipes[15], recipes[13]]

export default function HomePage({ onLoginClick, onDiscoverClick }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header onLoginClick={onLoginClick} />
      <main className="flex-1 flex flex-col items-center">
        {/* Hero Section */}
        <section className="w-full max-w-[1280px] px-6 py-8 mb-16">
          <div className="relative w-full h-[580px] rounded-3xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=1400&q=80"
              alt="Chef cooking"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
            {/* Recipe of the day card */}
            <div className="absolute top-20 left-16 bg-white p-7 rounded-3xl w-[360px] flex flex-col items-center text-center shadow-xl">
              <div className="bg-yellow-400 text-yellow-900 text-xs font-bold px-4 py-1.5 rounded-full absolute -top-3">
                Recipe of the day
              </div>
              <h1 className="font-headline text-3xl font-bold text-primary mt-5 mb-3 leading-tight">
                Salad Caprese
              </h1>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella, herbs, olive oil, and balsamic vinegar create a refreshing dish for lunch or appetizer.
              </p>
              <div className="flex flex-col items-center gap-2 mb-6">
                <img
                  src="https://i.pravatar.cc/100?img=11"
                  alt="Chef"
                  className="w-11 h-11 rounded-full border-2 border-white shadow-sm"
                />
                <p className="text-sm font-medium text-on-surface">My Top Cuisine</p>
              </div>
              <Link
                to="/recipe/2"
                id="hero-view-now"
                className="bg-primary text-white py-2.5 px-7 rounded-full hover:bg-primary-dark transition-colors flex items-center gap-2 text-sm font-medium"
              >
                View now <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* This Summer Recipes */}
        <section className="w-full max-w-[1200px] px-6 mb-20 flex flex-col items-center">
          <div className="text-center mb-10">
            <h2 className="section-title">This Summer Recipes</h2>
            <p className="section-subtitle">We have all your Independence Day sweets covered.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {summerRecipes.map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </section>

        {/* Recipes With Videos */}
        <section className="w-full max-w-[1200px] px-6 mb-20 flex flex-col items-center">
          <div className="text-center mb-10">
            <h2 className="section-title">Recipes With Videos</h2>
            <p className="section-subtitle">Cooking Up Culinary Creations with Step-by-Step Videos</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {videoRecipes.map((recipe, i) => (
              <RecipeCard key={`video-${i}`} recipe={recipe} size="video" />
            ))}
          </div>
        </section>

        {/* Editor's Pick */}
        <section className="w-full max-w-[1200px] px-6 mb-24 flex flex-col items-center">
          <div className="text-center mb-10">
            <h2 className="section-title">Editor's pick</h2>
            <p className="section-subtitle">Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
            {editorsPick.map((recipe, i) => (
              <RecipeCard key={`editor-${i}`} recipe={recipe} size="horizontal" />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
