import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Send } from 'lucide-react'

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setEmail('')
    alert('Cảm ơn bạn đã đăng ký!')
  }

  return (
    <footer className="w-full bg-[#1e293b] text-white pt-14 pb-8 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* About */}
          <div>
            <h4 className="font-headline font-bold mb-4 text-white text-base">About Us</h4>
            <p className="text-slate-300 text-sm leading-relaxed mb-5">
              Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                id="footer-email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="flex-1 bg-white text-[#1e293b] text-sm px-3 py-2 rounded outline-none focus:ring-2 focus:ring-primary placeholder:text-slate-400"
              />
              <button
                type="submit"
                id="footer-send"
                className="bg-primary text-white px-4 py-2 rounded text-sm font-medium hover:bg-primary-dark transition-colors flex items-center gap-1"
              >
                Send
              </button>
            </form>
          </div>

          {/* Learn More + Shop */}
          <div>
            <h4 className="font-headline font-bold mb-4 text-white text-base">Learn More</h4>
            <ul className="flex flex-col gap-2.5 text-slate-300 text-sm mb-7">
              <li><Link to="/" className="hover:text-primary transition-colors">Our Cooks</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">See Our Features</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
            <h4 className="font-headline font-bold mb-4 text-white text-base">Shop</h4>
            <ul className="flex flex-col gap-2.5 text-slate-300 text-sm">
              <li><Link to="/subscribe" className="hover:text-primary transition-colors">Gift Subscription</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Send Us Feedback</Link></li>
            </ul>
          </div>

          {/* Recipes */}
          <div>
            <h4 className="font-headline font-bold mb-4 text-white text-base">Recipes</h4>
            <ul className="flex flex-col gap-2.5 text-slate-300 text-sm">
              <li><Link to="/recipes" className="hover:text-primary transition-colors">What to Cook This Week</Link></li>
              <li><Link to="/recipes" className="hover:text-primary transition-colors">Pasta</Link></li>
              <li><Link to="/recipes" className="hover:text-primary transition-colors">Dinner</Link></li>
              <li><Link to="/recipes" className="hover:text-primary transition-colors">Healthy</Link></li>
              <li><Link to="/recipes" className="hover:text-primary transition-colors">Vegetarian</Link></li>
              <li><Link to="/recipes" className="hover:text-primary transition-colors">Vegan</Link></li>
              <li><Link to="/recipes" className="hover:text-primary transition-colors">Christmas</Link></li>
            </ul>
          </div>

          {/* Empty col for spacing on large screens */}
          <div></div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-slate-400 text-sm">
            <Link to="/" className="flex items-center gap-2 font-bold text-white">
              <img src="/Lab_03/avatar_small.png" alt="Chefify" className="w-6 h-6 rounded object-cover" />
              Chefify
            </Link>
            <span>2023 Chefify Company</span>
            <span>Terms of Service | Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
