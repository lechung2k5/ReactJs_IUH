import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ChevronRight, CheckCircle, Crown } from 'lucide-react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const features = [
  "40,000+ recipes to suit all tastes and skill levels",
  "Filter for diets, cook times, and more",
  "Personal Recipe Box for favorites",
  "Gain exclusive access to our subscriber-only mobile app",
]

const accessItems = [
  { name: "Cooking", desc: "Enjoy recipes, advice and inspiration for any occasion." },
  { name: "Wirecutter", desc: "Explore independent reviews for thousands of products." },
  { name: "Games", desc: "Unwind with Spelling Bee, Wordle, The Crossword" },
  { name: "The Athletic", desc: "Discover in-depth, personalized sports journalism." },
]

export default function SubscribePage({ onLoginClick }) {
  const [plan, setPlan] = useState('month')
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header onLoginClick={onLoginClick} />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center gap-2 text-sm text-on-surface-variant">
          <Link to="/recipes" className="hover:text-primary transition-colors">Recipes</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-on-surface font-medium">Subscribe</span>
        </div>

        {/* Hero Section */}
        <section className="max-w-[1200px] mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left: Info */}
            <div className="flex-1 max-w-[560px]">
              <p className="text-sm text-on-surface-variant mb-2 italic">
                This recipe is exclusively available to subscribers
              </p>
              <h1 className="font-headline font-bold text-3xl text-primary leading-tight mb-6">
                Join now to access effortless, hassle-free recipes
              </h1>

              <ul className="flex flex-col gap-3 mb-8">
                {features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-on-surface-variant">
                    <CheckCircle className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mb-6">
                <p className="font-headline font-bold text-xl text-on-surface">0.25USD / Week</p>
                <p className="text-sm text-on-surface-variant">Billed as $1 every 4 weeks for the first year</p>
              </div>

              <button
                id="subscribe-now-hero"
                onClick={() => navigate('/subscribe#plans')}
                className="w-full max-w-[320px] bg-primary text-white py-3.5 rounded-full font-bold text-base hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 mb-3"
              >
                <Crown className="w-5 h-5" />
                Subscribe Now
              </button>
              <p className="text-sm text-primary text-center max-w-[320px] cursor-pointer hover:underline">
                Cancel or Pause anytime
              </p>
            </div>

            {/* Right: Image */}
            <div className="lg:w-[460px] shrink-0">
              <img
                src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&q=80"
                alt="Delicious food spread"
                className="w-full h-[380px] object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* All Access Section */}
        <section className="bg-slate-50 py-16 px-6 mt-8">
          <div className="max-w-[1000px] mx-auto text-center">
            <h2 className="font-headline font-bold text-2xl text-primary mb-10">
              An All Access subscription includes
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {accessItems.map(item => (
                <div key={item.name} className="text-center">
                  <h3 className="font-headline font-bold text-base text-on-surface mb-2">{item.name}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section id="plans" className="py-16 px-6">
          <div className="max-w-[560px] mx-auto text-center">
            {/* Chefify logo */}
            <div className="flex flex-col items-center mb-8">
              <div className="w-12 h-12 rounded-full overflow-hidden mb-3">
                <img src="/Lab_03/avatar_small.png" alt="Chefify" className="w-full h-full object-cover" />
              </div>
              <h2 className="font-headline font-bold text-2xl text-on-surface">Chefify</h2>
            </div>

            <h3 className="font-headline font-bold text-2xl text-primary mb-2">
              Subscribe to Chefify Cooking only
            </h3>
            <p className="text-sm text-on-surface-variant mb-8">
              Enjoy thousands of delicious recipes for every taste, plus advice and inspiration daily.
            </p>

            {/* Plan Options */}
            <div className="flex flex-col gap-3 mb-8">
              <label id="plan-month" className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${plan === 'month' ? 'border-primary bg-primary-light' : 'border-outline-variant hover:border-primary/40'}`}>
                <input
                  type="radio"
                  name="plan"
                  value="month"
                  checked={plan === 'month'}
                  onChange={() => setPlan('month')}
                  className="text-primary focus:ring-primary"
                />
                <span className="font-medium text-on-surface">$2/month (Billed every 4 weeks)</span>
              </label>
              <label id="plan-year" className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${plan === 'year' ? 'border-primary bg-primary-light' : 'border-outline-variant hover:border-primary/40'}`}>
                <input
                  type="radio"
                  name="plan"
                  value="year"
                  checked={plan === 'year'}
                  onChange={() => setPlan('year')}
                  className="text-primary focus:ring-primary"
                />
                <span className="font-medium text-on-surface">$30/year (Billed one annually)</span>
              </label>
            </div>

            <button
              id="subscribe-now-plans"
              className="w-full bg-primary text-white py-4 rounded-full font-bold text-base hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 mb-3"
            >
              <Crown className="w-5 h-5" />
              Subscribe Now
            </button>
            <p className="text-sm text-primary cursor-pointer hover:underline">
              Cancel or Pause anytime
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
