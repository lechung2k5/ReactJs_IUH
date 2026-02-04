import React, { useState } from 'react'
import UseStateDemo from './components/UseStateDemo'
import UseEffectDemo from './components/UseEffectDemo'
import UseReducerDemo from './components/UseReducerDemo'
import UseRefDemo from './components/UseRefDemo'
import UseMemoDemo from './components/UseMemoDemo'
import UseCallbackDemo from './components/UseCallbackDemo'
import ApiFetch from './components/ApiFetch'
import ApiAsync from './components/ApiAsync'
import ApiAxios from './components/ApiAxios'

function App() {
  const [baiTap, setBaiTap] = useState('useState')

  const menu = [
    { id: 'useState', name: 'useState' },
    { id: 'useEffect', name: 'useEffect' },
    { id: 'useReducer', name: 'useReducer' },
    { id: 'useRef', name: 'useRef' },
    { id: 'useMemo', name: 'useMemo' },
    { id: 'useCallback', name: 'useCallback' },
    { id: 'apiFetch', name: 'API Fetch' },
    { id: 'apiAsync', name: 'API Async' },
    { id: 'apiAxios', name: 'API Axios' },
  ]

  return (
    /* bg-slate-950: background-color: #020617 | text-slate-200: chữ trắng xám nhẹ */
    <div className="min-h-screen bg-slate-950 p-4 md:p-10 font-sans text-slate-200">

      {/* Header: bg-slate-900 (nền đen nhạt) | border-blue-500 (viền xanh sáng) */}
      <header className="max-w-6xl mx-auto mb-8 bg-slate-900 p-6 rounded-2xl shadow-2xl border-l-8 border-blue-500 ring-1 ring-slate-800">
        <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight">
          Ôn tập ReactJS Hooks & API
        </h1>
        <div className="mt-2 text-slate-400">
          <p>Sinh viên: <span className="font-bold text-blue-400">Lê Công Chung</span></p>
          <p>MSSV: <span className="font-bold text-blue-400">23637071</span> | DHKPTM19ATT</p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* Sidebar: h-fit (chiều cao theo nội dung) | sticky (giữ cố định khi cuộn) */}
        <nav className="lg:col-span-1 bg-slate-900 p-5 rounded-2xl shadow-xl border border-slate-800 h-fit sticky top-10">
          <h2 className="text-xs font-bold uppercase text-slate-500 mb-5 tracking-[0.2em]">Danh mục bài tập</h2>
          <div className="flex flex-col gap-3">
            {menu.map((item) => (
              <button
                key={item.id}
                onClick={() => setBaiTap(item.id)}
                /* transition-all: mượt mà | hover:bg-slate-800 (đổi nền khi di chuột) */
                className={`text-left px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${baiTap === item.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20 translate-x-2' // Đang chọn
                    : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                  }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </nav>

        {/* Main: bg-slate-900 | border-slate-800 (viền tối rất mảnh) */}
        <main className="lg:col-span-3 bg-slate-900 p-6 md:p-10 rounded-2xl shadow-xl border border-slate-800 ">
          <div className="mb-8 pb-5 border-b border-slate-800 flex justify-between items-end">
            <div>
              <span className="text-xs font-bold text-blue-500 uppercase tracking-widest">Đang xem</span>
              <h2 className="text-2xl font-black text-white uppercase">{baiTap}</h2>
            </div>
          </div>

          {/* Khu vực hiển thị nội dung bài tập */}
          <div className="transition-opacity duration-500 ease-in-out">
            {baiTap === 'useState' && <UseStateDemo />}
            {baiTap === 'useEffect' && <UseEffectDemo />}
            {baiTap === 'useReducer' && <UseReducerDemo />}
            {baiTap === 'useRef' && <UseRefDemo />}
            {baiTap === 'useMemo' && <UseMemoDemo />}
            {baiTap === 'useCallback' && <UseCallbackDemo />}
            {baiTap === 'apiFetch' && <ApiFetch />}
            {baiTap === 'apiAsync' && <ApiAsync />}
            {baiTap === 'apiAxios' && <ApiAxios />}
          </div>
        </main>
      </div>

      <footer className="text-center mt-12 text-slate-600 text-xs font-medium tracking-widest uppercase pb-10">
        © 2026 — Lê Công Chung — 23637071 — DHKTPM19ATT
      </footer>
    </div>
  )
}

export default App