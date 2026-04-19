import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import RecipesPage from './pages/RecipesPage'
import RecipeDetailPage from './pages/RecipeDetailPage'
import RecipeDetailRefinedPage from './pages/RecipeDetailRefinedPage'
import SubscribePage from './pages/SubscribePage'
import DashboardPage from './pages/DashboardPage'
import NoResultsPage from './pages/NoResultsPage'
import LoginModal from './components/modals/LoginModal'
import DiscoverModal from './components/modals/DiscoverModal'
import './index.css'

export default function App() {
  const [showLogin, setShowLogin] = useState(false)
  const [showDiscover, setShowDiscover] = useState(true)

  // Khi click Next trong DiscoverModal → đóng Discover, mở Login
  const handleDiscoverNext = () => {
    setShowDiscover(false)
    setShowLogin(true)
  }

  return (
    <BrowserRouter>
      {/* Global Modals - render on top of everything */}
      {showDiscover && (
        <DiscoverModal
          onClose={() => setShowDiscover(false)}
          onNext={handleDiscoverNext}
        />
      )}
      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
        />
      )}

      <Routes>
        {/* Page 1: Home - Login/Discover triggers via Header */}
        <Route path="/" element={<HomePage onLoginClick={() => setShowLogin(true)} onDiscoverClick={() => setShowDiscover(true)} />} />

        {/* Page 2: Recipes List */}
        <Route path="/recipes" element={<RecipesPage onLoginClick={() => setShowLogin(true)} />} />

        {/* Page 3: Recipe Detail */}
        <Route path="/recipe/:id" element={<RecipeDetailPage onLoginClick={() => setShowLogin(true)} />} />

        {/* Page 9: Recipe Detail Refined */}
        <Route path="/recipe/:id/refined" element={<RecipeDetailRefinedPage onLoginClick={() => setShowLogin(true)} />} />

        {/* Page 4: Subscribe */}
        <Route path="/subscribe" element={<SubscribePage onLoginClick={() => setShowLogin(true)} />} />

        {/* Page 6: Dashboard (no modal needed) */}
        <Route path="/dashboard" element={<DashboardPage />} />

        {/* Page 7: No Results */}
        <Route path="/no-results" element={<NoResultsPage onLoginClick={() => setShowLogin(true)} />} />

        {/* Fallback */}
        <Route path="*" element={<NoResultsPage onLoginClick={() => setShowLogin(true)} />} />
      </Routes>
    </BrowserRouter>
  )
}
