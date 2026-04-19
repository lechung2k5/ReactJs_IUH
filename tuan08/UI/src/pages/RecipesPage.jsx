import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { Filter, ChevronUp, ChevronDown, SlidersHorizontal } from 'lucide-react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import RecipeCard from '../components/common/RecipeCard'
import Pagination from '../components/common/Pagination'
import { getSaladRecipes, recipes } from '../data/recipes'

const cookTypes = ['Pan-fried', 'Stir-fried', 'Grilled', 'Roasted', 'Sautéed', 'Baked', 'Steamed', 'Stewed']

export default function RecipesPage({ onLoginClick }) {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') || ''
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedTypes, setSelectedTypes] = useState(['Grilled', 'Roasted'])
  const [timeRange, setTimeRange] = useState([30, 50])
  const [selectedRatings, setSelectedRatings] = useState([3, 4])
  const [sort, setSort] = useState('A-Z')
  const [showTypeFilter, setShowTypeFilter] = useState(true)
  const [showTimeFilter, setShowTimeFilter] = useState(true)
  const [showRatingFilter, setShowRatingFilter] = useState(true)

  const allRecipes = query
    ? recipes.filter(r => r.title.toLowerCase().includes(query.toLowerCase()))
    : getSaladRecipes()

  const totalRecipes = allRecipes.length
  const itemsPerPage = 9
  const totalPages = Math.max(1, Math.ceil(totalRecipes / itemsPerPage))
  const pageRecipes = allRecipes.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const toggleType = (type) => {
    setSelectedTypes(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    )
  }

  const toggleRating = (r) => {
    setSelectedRatings(prev =>
      prev.includes(r) ? prev.filter(x => x !== r) : [...prev, r]
    )
  }

  const pageTitle = query ? `Search: "${query}"` : 'Salad'

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header onLoginClick={onLoginClick} />
      <main className="flex-1 max-w-[1280px] mx-auto w-full px-6 py-8">
        <div className="flex gap-8">
          {/* Filter Sidebar */}
          <aside className="w-[260px] shrink-0">
            <div className="flex items-center gap-2 mb-6">
              <SlidersHorizontal className="w-5 h-5 text-on-surface" />
              <h2 className="font-headline font-bold text-on-surface text-base uppercase tracking-wide">Filters</h2>
            </div>

            {/* Type */}
            <div className="mb-6">
              <button
                id="filter-type-toggle"
                onClick={() => setShowTypeFilter(!showTypeFilter)}
                className="flex items-center justify-between w-full mb-3 font-semibold text-sm text-on-surface"
              >
                Type
                {showTypeFilter ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {showTypeFilter && (
                <div className="grid grid-cols-2 gap-2">
                  {cookTypes.map(type => (
                    <label key={type} className="flex items-center gap-2 cursor-pointer text-sm text-on-surface-variant">
                      <input
                        type="checkbox"
                        id={`filter-type-${type}`}
                        checked={selectedTypes.includes(type)}
                        onChange={() => toggleType(type)}
                        className="rounded border-slate-300 text-primary focus:ring-primary w-4 h-4"
                      />
                      {type}
                    </label>
                  ))}
                </div>
              )}
            </div>

            <div className="border-t border-outline-variant pt-5 mb-6">
              <button
                id="filter-time-toggle"
                onClick={() => setShowTimeFilter(!showTimeFilter)}
                className="flex items-center justify-between w-full mb-3 font-semibold text-sm text-on-surface"
              >
                Time
                {showTimeFilter ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {showTimeFilter && (
                <div>
                  <div className="flex justify-between text-xs text-on-surface-variant mb-3">
                    <span>{timeRange[0]} minutes</span>
                    <span>{timeRange[1]} minutes</span>
                  </div>
                  <div className="relative h-1 w-full bg-slate-200 rounded-full flex items-center">
                    <div 
                      className="absolute h-full bg-primary rounded-full"
                      style={{ 
                        left: `${((timeRange[0] - 5) / 115) * 100}%`, 
                        right: `${100 - ((timeRange[1] - 5) / 115) * 100}%` 
                      }}
                    />
                    <input
                      id="filter-time-range-min"
                      type="range"
                      min={5}
                      max={120}
                      value={timeRange[0]}
                      onChange={e => setTimeRange([Math.min(parseInt(e.target.value), timeRange[1] - 1), timeRange[1]])}
                      className="absolute w-full top-0 -mt-1.5 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto"
                      style={{ background: 'transparent' }}
                    />
                    <input
                      id="filter-time-range-max"
                      type="range"
                      min={5}
                      max={120}
                      value={timeRange[1]}
                      onChange={e => setTimeRange([timeRange[0], Math.max(parseInt(e.target.value), timeRange[0] + 1)])}
                      className="absolute w-full top-0 -mt-1.5 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto"
                      style={{ background: 'transparent' }}
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-outline-variant pt-5 mb-6">
              <button
                id="filter-rating-toggle"
                onClick={() => setShowRatingFilter(!showRatingFilter)}
                className="flex items-center justify-between w-full mb-3 font-semibold text-sm text-on-surface"
              >
                Rating
                {showRatingFilter ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {showRatingFilter && (
                <div className="flex flex-col gap-2">
                  {[5, 4, 3, 2, 1].map(r => (
                    <label key={r} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        id={`filter-rating-${r}`}
                        checked={selectedRatings.includes(r)}
                        onChange={() => toggleRating(r)}
                        className="rounded border-slate-300 text-primary focus:ring-primary w-4 h-4"
                      />
                      <div className="flex gap-0.5">
                        {[1,2,3,4,5].map(s => (
                          <span key={s} className={`text-base ${s <= r ? 'text-yellow-400' : 'text-slate-200'}`}>★</span>
                        ))}
                      </div>
                    </label>
                  ))}
                </div>
              )}
            </div>

            <button
              id="filter-apply"
              className="w-full bg-primary text-white py-3 rounded-full font-medium text-sm hover:bg-primary-dark transition-colors"
            >
              Apply
            </button>
          </aside>

          {/* Results */}
          <div className="flex-1 min-w-0">
            {/* Header row */}
            <div className="flex items-center justify-between mb-6">
              <h1 className="font-headline font-bold text-2xl text-on-surface">
                {pageTitle} <span className="text-on-surface-variant font-normal text-lg">({totalRecipes})</span>
              </h1>
              <select
                id="sort-select"
                value={sort}
                onChange={e => setSort(e.target.value)}
                className="border border-outline-variant rounded-lg px-3 py-2 text-sm text-on-surface bg-white focus:ring-2 focus:ring-primary/30 outline-none"
              >
                <option>A-Z</option>
                <option>Z-A</option>
                <option>Newest</option>
                <option>Popular</option>
              </select>
            </div>

            {/* Recipe grid or no results */}
            {pageRecipes.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
                {pageRecipes.map(recipe => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="font-headline font-bold text-xl text-on-surface mb-2">No results found</h3>
                <p className="text-on-surface-variant mb-6">Try a different search term or adjust your filters</p>
                <Link to="/recipes" className="btn-primary">Browse all recipes</Link>
              </div>
            )}

            {/* Pagination */}
            {pageRecipes.length > 0 && (
              <div className="flex justify-between items-center border-t border-outline-variant pt-4">
                <span className="text-sm text-on-surface-variant">{totalRecipes} results</span>
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages > 1 ? totalPages : 11}
                  onPageChange={setCurrentPage}
                />
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
