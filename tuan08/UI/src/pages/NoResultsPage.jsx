import { Link, useSearchParams } from 'react-router-dom'
import { Search, ArrowLeft } from 'lucide-react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

export default function NoResultsPage({ onLoginClick }) {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') || ''

  const suggestions = [
    'Salad', 'Pasta', 'Chicken', 'Vegetarian', 'Dessert', 'Soup', 'Grilled', 'Smoothie'
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header onLoginClick={onLoginClick} />
      <main className="flex-1 max-w-[800px] mx-auto w-full px-6 py-20 flex flex-col items-center text-center">
        {/* Illustration */}
        <div className="w-40 h-40 bg-primary-light rounded-full flex items-center justify-center mb-8">
          <Search className="w-20 h-20 text-primary/30" />
        </div>

        <h1 className="font-headline font-bold text-3xl text-on-surface mb-3">
          No results found
        </h1>

        {query ? (
          <p className="text-on-surface-variant text-lg mb-8">
            We couldn't find any recipes matching{' '}
            <span className="font-semibold text-on-surface">"{query}"</span>.
            <br />
            Try a different search term or browse our popular categories below.
          </p>
        ) : (
          <p className="text-on-surface-variant text-lg mb-8">
            No recipes found for your current filters.
            <br />
            Try adjusting your search or browse popular categories.
          </p>
        )}

        {/* Search again */}
        <form
          onSubmit={(e) => { e.preventDefault() }}
          className="flex gap-3 w-full max-w-[500px] mb-12"
        >
          <div className="relative flex-1">
            <Search className="absolute left-4 top-3 text-slate-400 w-5 h-5" />
            <input
              id="no-results-search"
              type="text"
              defaultValue={query}
              placeholder="Try another search..."
              className="w-full pl-12 pr-4 py-3 rounded-full border border-outline-variant focus:ring-2 focus:ring-primary/30 focus:border-primary focus:outline-none text-on-surface"
            />
          </div>
          <button
            id="no-results-search-btn"
            type="submit"
            className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary-dark transition-colors"
          >
            Search
          </button>
        </form>

        {/* Suggestions */}
        <div className="mb-12">
          <p className="text-sm text-on-surface-variant mb-4 font-medium">Try searching for:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {suggestions.map(s => (
              <Link
                key={s}
                to={`/recipes?q=${s.toLowerCase()}`}
                id={`suggestion-${s.toLowerCase()}`}
                className="px-4 py-2 rounded-full border border-outline-variant text-sm text-on-surface hover:border-primary hover:text-primary hover:bg-primary-light transition-colors"
              >
                {s}
              </Link>
            ))}
          </div>
        </div>

        {/* Back link */}
        <Link
          to="/recipes"
          id="no-results-back"
          className="flex items-center gap-2 text-primary font-medium hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          Browse all recipes
        </Link>
      </main>
      <Footer />
    </div>
  )
}
