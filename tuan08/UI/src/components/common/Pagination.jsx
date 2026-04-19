import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Pagination({ currentPage = 1, totalPages = 11, onPageChange }) {
  const getPages = () => {
    const pages = []
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i)
      return pages
    }
    pages.push(1, 2, 3, 4)
    pages.push('...')
    pages.push(totalPages - 1, totalPages)
    return pages
  }

  return (
    <div className="flex items-center gap-1">
      <button
        id="pagination-prev"
        onClick={() => onPageChange && currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-on-surface disabled:opacity-40 transition-colors"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {getPages().map((page, idx) =>
        page === '...' ? (
          <span key={`dots-${idx}`} className="w-7 h-7 flex items-center justify-center text-slate-400 text-sm">
            ...
          </span>
        ) : (
          <button
            key={page}
            id={`page-${page}`}
            onClick={() => onPageChange && onPageChange(page)}
            className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
              page === currentPage
                ? 'bg-primary text-white'
                : 'text-slate-400 hover:bg-slate-100'
            }`}
          >
            {page}
          </button>
        )
      )}

      <button
        id="pagination-next"
        onClick={() => onPageChange && currentPage < totalPages && onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-on-surface disabled:opacity-40 transition-colors"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  )
}
