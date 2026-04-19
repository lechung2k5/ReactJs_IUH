import { Link } from 'react-router-dom'
import { Bookmark } from 'lucide-react'

export default function RecipeCard({ recipe, size = 'md' }) {
  const { id, title, image, time, author } = recipe

  if (size === 'horizontal') {
    return (
      <div className="flex bg-white rounded-2xl overflow-hidden border border-outline-variant p-4 gap-5 hover:shadow-md transition-shadow">
        <div className="w-[180px] h-[180px] shrink-0 rounded-xl overflow-hidden bg-slate-100">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-headline font-bold text-lg text-on-surface">{title}</h3>
            <BookmarkBtn id={id} />
          </div>
          <p className="text-on-surface-variant text-sm mb-3">{time} minutes</p>
          {recipe.description && (
            <p className="text-sm text-on-surface-variant mb-4 line-clamp-2 leading-relaxed">{recipe.description}</p>
          )}
          {author && (
            <div className="flex items-center gap-2 mt-auto">
              <img src={author.avatar} alt={author.name} className="w-8 h-8 rounded-full object-cover" />
              <span className="text-sm font-medium text-on-surface">{author.name}</span>
            </div>
          )}
        </div>
      </div>
    )
  }

  if (size === 'video') {
    return (
      <div className="recipe-card">
        <Link to={`/recipe/${id}`}>
          <div className="relative h-[160px] rounded-xl overflow-hidden mb-4 bg-slate-100 group cursor-pointer">
            <img src={image} alt={title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-primary ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          </div>
        </Link>
        <div className="flex items-start justify-between">
          <Link to={`/recipe/${id}`}>
            <h3 className="font-headline font-bold text-[15px] text-on-surface leading-snug w-[85%] hover:text-primary transition-colors">{title}</h3>
          </Link>
          <BookmarkBtn id={id} />
        </div>
        <div className="mt-auto pt-3">
          <span className="badge-time">{time} minutes</span>
        </div>
      </div>
    )
  }

  // Default size 'md'
  return (
    <div className="recipe-card">
      <Link to={`/recipe/${id}`}>
        <div className="relative h-[200px] rounded-xl overflow-hidden mb-4 bg-slate-100">
          <img src={image} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
        </div>
      </Link>
      <div className="flex items-start justify-between">
        <Link to={`/recipe/${id}`}>
          <h3 className="font-headline font-bold text-[17px] text-on-surface leading-snug w-[85%] hover:text-primary transition-colors">{title}</h3>
        </Link>
        <BookmarkBtn id={id} />
      </div>
      <div className="mt-auto pt-3">
        <span className="badge-time">{time} minutes</span>
      </div>
    </div>
  )
}

function BookmarkBtn({ id }) {
  return (
    <button
      id={`bookmark-${id}`}
      className="text-primary hover:bg-primary-light p-1.5 rounded-full transition-colors border border-primary/20 shrink-0"
    >
      <Bookmark className="w-4 h-4" />
    </button>
  )
}
