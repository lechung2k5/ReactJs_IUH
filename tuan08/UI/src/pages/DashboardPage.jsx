import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LayoutDashboard, FolderOpen, Users, BarChart2, MessageSquare, Code, Bell, HelpCircle, Edit, Upload, Download, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { dashboardOrders } from '../data/recipes'

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true, href: '/dashboard' },
  { icon: FolderOpen, label: 'Projects', active: false, href: '/dashboard' },
  { icon: Users, label: 'Teams', active: false, href: '/dashboard' },
  { icon: BarChart2, label: 'Analytics', active: false, href: '/dashboard' },
  { icon: MessageSquare, label: 'Messages', active: false, href: '/dashboard' },
  { icon: Code, label: 'Integrations', active: false, href: '/dashboard' },
]

const overviewCards = [
  { title: 'Turnover', value: '$92,405', change: '+5.39%', bg: 'bg-[#fff0f4]', border: 'border-[#ffe0e8]', icon: '🛒', iconColor: 'text-[#f24d73] border-[#f24d73]' },
  { title: 'Profit', value: '$32,218', change: '+5.39%', bg: 'bg-[#f0f6ff]', border: 'border-[#e0edff]', icon: '$', iconColor: 'text-[#3b82f6] border-[#3b82f6]' },
  { title: 'New customer', value: '298', change: '+6.84%', bg: 'bg-[#f0f9ff]', border: 'border-[#e0f2fe]', icon: '👤', iconColor: 'text-[#0284c7] border-[#0284c7]' },
]

const statusStyle = {
  'New': 'bg-[#e0f2fe] text-[#0ea5e9]',
  'In-progress': 'bg-[#fef3c7] text-[#d97706]',
  'Completed': 'bg-[#dcfce7] text-[#22c55e]',
}

export default function DashboardPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [checkedRows, setCheckedRows] = useState([])
  const [allChecked, setAllChecked] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleRow = (id) => {
    setCheckedRows(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])
  }

  const toggleAll = () => {
    setAllChecked(!allChecked)
    setCheckedRows(!allChecked ? dashboardOrders.map(o => o.id) : [])
  }

  return (
    <div className="bg-[#f8f9fc] font-body text-[#333333] flex min-h-screen">
      {/* Sidebar */}
      <aside className={`h-screen w-[260px] flex flex-col fixed left-0 top-0 bg-white border-r border-[#e0e0e0] p-6 gap-y-2 z-40 transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        {/* Logo */}
        <div className="mb-8 flex items-center gap-2">
          <img src="/Lab_03/avatar_small.png" alt="Logo" className="w-8 h-8 rounded-lg object-cover" />
          <span className="font-headline text-2xl font-bold text-[#333333] tracking-tight ml-1">Chefify</span>
        </div>

        {/* Nav */}
        <nav className="flex flex-col gap-1 flex-grow text-[15px]">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              id={`sidenav-${item.label.toLowerCase()}`}
              className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-colors ${
                item.active
                  ? 'bg-[#f24d73] text-white font-medium'
                  : 'text-[#666666] hover:bg-[#f4f5fa]'
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Promo card */}
        <div className="mt-auto bg-[#f4f7fc] rounded-xl overflow-hidden border border-[#e8ebf1]">
          <div className="h-40 flex items-center justify-center p-4 bg-gradient-to-b from-[#f0f4fd] to-[#f4f7fc]">
            <img
              src="https://illustrations.popsy.co/amber/man-with-laptop.svg"
              alt="V2.0 illustration"
              className="w-full h-auto object-contain"
              style={{ mixBlendMode: 'multiply' }}
            />
          </div>
          <div className="p-4 flex flex-col gap-3 items-center text-center pb-5">
            <h4 className="font-headline font-bold text-[15px] text-[#333333]">V2.0 is available</h4>
            <button id="promo-try-now" className="bg-white border border-[#3b82f6] text-[#3b82f6] rounded-md py-1.5 px-6 w-full text-sm font-medium hover:bg-[#eff6ff] transition-colors">
              Try now
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/30 z-30 md:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Main Content */}
      <main className="flex-1 md:ml-[260px] flex flex-col min-h-screen bg-[#f8f9fc]">
        {/* Top Bar */}
        <header className="flex justify-between items-center px-8 h-[88px] w-full bg-white border-b border-[#e0e0e0] sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <button className="md:hidden p-2" onClick={() => setSidebarOpen(true)}>
              <LayoutDashboard className="w-5 h-5" />
            </button>
            <h1 className="font-headline font-bold text-2xl text-[#f24d73] tracking-tight">Dashboard</h1>
          </div>
          <div className="flex items-center gap-5">
            <div className="relative hidden sm:block">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999999]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              <input id="dashboard-search" className="bg-[#f4f5fa] border-0 rounded-lg py-2 pl-10 pr-4 text-sm placeholder:text-[#999999] focus:ring-1 focus:ring-[#f24d73] w-[280px] outline-none" placeholder="Search..." type="text" />
            </div>
            <div className="flex items-center gap-3">
              <button id="dash-notifications" className="text-[#666666] hover:text-[#f24d73] transition-colors w-8 h-8 flex items-center justify-center rounded-full">
                <Bell className="w-5 h-5" />
              </button>
              <button id="dash-help" className="text-[#666666] hover:text-[#f24d73] transition-colors w-8 h-8 flex items-center justify-center rounded-full">
                <HelpCircle className="w-5 h-5" />
              </button>
              <img src="https://i.pravatar.cc/40?img=30" alt="User avatar" className="w-9 h-9 rounded-full object-cover ml-1" />
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-8 flex-1 flex flex-col gap-6 max-w-[1400px] mx-auto w-full">
          {/* Overview */}
          <div className="flex items-center gap-2 mb-2">
            <LayoutDashboard className="w-5 h-5 text-[#f24d73]" />
            <h2 className="font-headline font-bold text-xl text-[#333333]">Overview</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-2">
            {overviewCards.map(card => (
              <div key={card.title} className={`${card.bg} p-6 rounded-xl flex flex-col relative overflow-hidden border ${card.border}`}>
                <div className="flex justify-between items-start mb-4">
                  <p className="text-[15px] font-bold text-[#333333]">{card.title}</p>
                  <div className={`w-10 h-10 rounded-lg border flex items-center justify-center bg-white text-sm ${card.iconColor}`}>
                    {card.icon}
                  </div>
                </div>
                <h3 className="font-headline font-bold text-[32px] text-[#333333] mb-4">{card.value}</h3>
                <p className="text-[13px] text-[#999999] flex items-center gap-1">
                  <span className="text-[#22c55e] font-bold flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd"/></svg>
                    {card.change}
                  </span>
                  <span>period of change</span>
                </p>
              </div>
            ))}
          </div>

          {/* Detailed Report */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#f24d73]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              <h2 className="font-headline font-bold text-xl text-[#333333]">Detailed report</h2>
            </div>
            <div className="flex gap-3">
              <button id="dash-import" className="px-5 py-2 bg-white text-[#f24d73] border border-[#f24d73] rounded-lg text-sm font-medium hover:bg-[#fff0f4] transition-colors flex items-center gap-2">
                <Download className="w-4 h-4" /> Import
              </button>
              <button id="dash-export" className="px-5 py-2 bg-white text-[#f24d73] border border-[#f24d73] rounded-lg text-sm font-medium hover:bg-[#fff0f4] transition-colors flex items-center gap-2">
                <Upload className="w-4 h-4" /> Export
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-[#e0e0e0] flex-1 flex flex-col overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[13px] whitespace-nowrap">
                <thead className="text-[#666666] font-bold text-xs uppercase tracking-wider bg-[#f8f9fc] border-b border-[#e0e0e0]">
                  <tr>
                    <th className="px-6 py-4 w-12">
                      <input id="dash-check-all" type="checkbox" checked={allChecked} onChange={toggleAll} className="rounded border-gray-300 text-[#f24d73] focus:ring-[#f24d73]" />
                    </th>
                    <th className="px-6 py-4">CUSTOMER NAME</th>
                    <th className="px-6 py-4">COMPANY</th>
                    <th className="px-6 py-4">ORDER VALUE</th>
                    <th className="px-6 py-4">ORDER DATE</th>
                    <th className="px-6 py-4">STATUS</th>
                    <th className="px-6 py-4 text-right"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e0e0e0] text-[#333333]">
                  {dashboardOrders.map(order => (
                    <tr key={order.id} className="hover:bg-[#f4f5fa] transition-colors">
                      <td className="px-6 py-5">
                        <input
                          id={`dash-check-${order.id}`}
                          type="checkbox"
                          checked={checkedRows.includes(order.id)}
                          onChange={() => toggleRow(order.id)}
                          className="rounded border-gray-300 text-[#f24d73] focus:ring-[#f24d73]"
                        />
                      </td>
                      <td className="px-6 py-5 font-bold">
                        <div className="flex items-center gap-3">
                          <img src={order.avatar} alt={order.name} className="w-8 h-8 rounded-full object-cover" />
                          {order.name}
                        </div>
                      </td>
                      <td className="px-6 py-5 text-[#666666]">{order.company}</td>
                      <td className="px-6 py-5 text-[#666666]">{order.value}</td>
                      <td className="px-6 py-5 text-[#999999]">{order.date}</td>
                      <td className="px-6 py-5">
                        <span className={`px-3 py-1 rounded-full text-[11px] font-medium ${statusStyle[order.status]}`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <button id={`dash-edit-${order.id}`} className="text-[#999999] hover:text-[#f24d73]">
                          <Edit className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="px-6 py-4 border-t border-[#e0e0e0] bg-white flex justify-between items-center text-[13px]">
              <span className="text-[#666666]">63 results</span>
              <div className="flex gap-1 items-center">
                <button id="dash-prev" className="w-8 h-8 flex items-center justify-center text-[#999999] hover:text-[#333333] transition-colors">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                {[1,2,3,4].map(p => (
                  <button
                    key={p}
                    id={`dash-page-${p}`}
                    onClick={() => setCurrentPage(p)}
                    className={`w-7 h-7 rounded-full flex items-center justify-center font-medium transition-colors ${currentPage === p ? 'bg-[#f24d73] text-white' : 'text-[#999999] hover:bg-[#f4f5fa]'}`}
                  >
                    {p}
                  </button>
                ))}
                <span className="w-7 h-7 flex items-center justify-center text-[#999999]">...</span>
                {[10,11].map(p => (
                  <button
                    key={p}
                    onClick={() => setCurrentPage(p)}
                    className={`w-7 h-7 rounded-full flex items-center justify-center font-medium transition-colors ${currentPage === p ? 'bg-[#f24d73] text-white' : 'text-[#999999] hover:bg-[#f4f5fa]'}`}
                  >
                    {p}
                  </button>
                ))}
                <button id="dash-next" className="w-8 h-8 flex items-center justify-center text-[#999999] hover:text-[#333333] transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
