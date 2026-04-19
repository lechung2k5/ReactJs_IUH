import { useParams, Link } from 'react-router-dom'
import { Clock, Users, Star, Bookmark, Share2, ChevronRight } from 'lucide-react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import RecipeCard from '../components/common/RecipeCard'
import { getRecipeById, recipes } from '../data/recipes'

const comments = [
  { id: 1, name: "Alice Martin", avatar: "https://i.pravatar.cc/40?img=20", date: "2 days ago", rating: 5, text: "This recipe is absolutely amazing! I made it for my family and everyone loved it. The instructions are so clear and easy to follow." },
  { id: 2, name: "Mark Johnson", avatar: "https://i.pravatar.cc/40?img=21", date: "5 days ago", rating: 4, text: "Very good recipe! I added a little extra lemon juice and it was perfect. Will definitely make again." },
  { id: 3, name: "Yuki Tanaka", avatar: "https://i.pravatar.cc/40?img=22", date: "1 week ago", rating: 5, text: "Beautiful recipe. I appreciate how detailed the steps are. The photos really help understand what to do." },
]

export default function RecipeDetailPage({ onLoginClick }) {
  const { id } = useParams()
  const recipe = getRecipeById(id) || recipes[10]
  const relatedRecipes = recipes.filter(r => r.id !== recipe.id).slice(0, 4)

  if (!recipe) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header onLoginClick={onLoginClick} />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-on-surface-variant">Recipe not found</p>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header onLoginClick={onLoginClick} />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="max-w-[1280px] mx-auto px-6 py-4 flex items-center gap-2 text-sm text-on-surface-variant">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/recipes" className="hover:text-primary transition-colors">Recipes</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-on-surface font-medium truncate">{recipe.title}</span>
        </div>

        <div className="max-w-[1280px] mx-auto px-6 pb-16">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left: Recipe Info */}
            <div className="lg:w-[380px] shrink-0">
              {/* Title + Meta */}
              <div className="mb-6">
                <div className="flex items-start justify-between gap-4">
                  <h1 className="font-headline font-bold text-2xl text-on-surface leading-tight">
                    How to make a {recipe.title}
                  </h1>
                  <div className="flex gap-2 shrink-0">
                    <button id="recipe-bookmark" className="p-2 border border-outline-variant rounded-full hover:bg-primary-light hover:border-primary transition-colors text-on-surface-variant hover:text-primary">
                      <Bookmark className="w-4 h-4" />
                    </button>
                    <button id="recipe-share" className="p-2 border border-outline-variant rounded-full hover:bg-slate-50 transition-colors text-on-surface-variant">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-3">
                  <img src={recipe.author.avatar} alt={recipe.author.name} className="w-8 h-8 rounded-full" />
                  <span className="text-sm font-medium text-on-surface">{recipe.author.name}</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-slate-50 rounded-2xl">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-primary mb-1">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="text-xs text-on-surface-variant">Time</div>
                  <div className="text-sm font-bold text-on-surface">{recipe.time} min</div>
                </div>
                <div className="text-center border-x border-outline-variant">
                  <div className="flex items-center justify-center gap-1 text-primary mb-1">
                    <Users className="w-4 h-4" />
                  </div>
                  <div className="text-xs text-on-surface-variant">Serves</div>
                  <div className="text-sm font-bold text-on-surface">{recipe.servings}</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-primary mb-1">
                    <Star className="w-4 h-4" fill="currentColor" />
                  </div>
                  <div className="text-xs text-on-surface-variant">Rating</div>
                  <div className="text-sm font-bold text-on-surface">{recipe.rating}.0</div>
                </div>
              </div>

              {/* Ingredients */}
              <div className="mb-6">
                <h2 className="font-headline font-bold text-lg text-on-surface mb-4">Ingredients ({recipe.servings} servings)</h2>
                <ul className="flex flex-col gap-2">
                  {recipe.ingredients.map((ing, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-on-surface-variant">
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                      {ing}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {recipe.tags.map(tag => (
                  <span key={tag} className="bg-primary-light text-primary text-xs px-3 py-1 rounded-full font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Subscribe CTA */}
              <Link
                to="/subscribe"
                id="recipe-subscribe-cta"
                className="block w-full bg-primary text-white text-center py-3 rounded-full font-medium text-sm hover:bg-primary-dark transition-colors"
              >
                Subscribe to save this recipe
              </Link>
            </div>

            {/* Right: Steps & Photos */}
            <div className="flex-1">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-[340px] object-cover rounded-2xl mb-8"
              />

              <h2 className="font-headline font-bold text-xl text-on-surface mb-6">
                Cooking steps
              </h2>

              <div className="flex flex-col gap-8">
                {recipe.steps.map((step) => (
                  <div key={step.step}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                        {step.step}
                      </span>
                      <h3 className="font-headline font-bold text-base text-on-surface">{step.title}</h3>
                    </div>
                    <p className="text-sm text-on-surface-variant leading-relaxed ml-11">{step.desc}</p>
                    {step.image && (
                      <img
                        src={step.image}
                        alt={step.title}
                        className="mt-4 w-full h-[220px] object-cover rounded-xl ml-0"
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Cooking note */}
              <div className="mt-8 p-5 bg-yellow-50 border border-yellow-200 rounded-2xl">
                <h3 className="font-headline font-bold text-base text-yellow-900 mb-2">👨‍🍳 Cooking note</h3>
                <p className="text-sm text-yellow-800 leading-relaxed">{recipe.cookingNote}</p>
              </div>

              {/* Comments */}
              <div className="mt-10">
                <h2 className="font-headline font-bold text-xl text-on-surface mb-6">
                  Comments ({comments.length})
                </h2>
                <div className="flex flex-col gap-6 mb-6">
                  {comments.map(c => (
                    <div key={c.id} className="flex gap-4">
                      <img src={c.avatar} alt={c.name} className="w-10 h-10 rounded-full shrink-0" />
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="font-medium text-sm text-on-surface">{c.name}</span>
                          <div className="flex gap-0.5">
                            {[1,2,3,4,5].map(s => (
                              <span key={s} className={`text-xs ${s <= c.rating ? 'text-yellow-400' : 'text-slate-200'}`}>★</span>
                            ))}
                          </div>
                          <span className="text-xs text-on-surface-variant">{c.date}</span>
                        </div>
                        <p className="text-sm text-on-surface-variant leading-relaxed">{c.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Add comment */}
                <div className="border-t border-outline-variant pt-6">
                  <h3 className="font-semibold text-sm text-on-surface mb-3">Leave a comment</h3>
                  <textarea
                    id="comment-input"
                    placeholder="Share your thoughts about this recipe..."
                    rows={3}
                    className="w-full border border-outline-variant rounded-xl px-4 py-3 text-sm text-on-surface placeholder:text-slate-400 resize-none focus:ring-2 focus:ring-primary/30 focus:outline-none focus:border-primary"
                  />
                  <button id="comment-submit" className="mt-3 bg-primary text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-primary-dark transition-colors">
                    Post Comment
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* You may also like */}
          <div className="mt-16">
            <h2 className="font-headline font-bold text-2xl text-on-surface mb-8">You may also like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {relatedRecipes.map(r => (
                <RecipeCard key={r.id} recipe={r} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
