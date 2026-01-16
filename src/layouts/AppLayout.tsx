// -------------------------------------
// File: src/layouts/AppLayout.tsx
// -------------------------------------

import { Outlet } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Link } from 'react-router-dom'

export function AppLayout() {
  return (
    <div className="min-h-svh bg-slate-950 text-slate-50 flex flex-col">
      <header className="flex items-center justify-between border-b border-slate-800 px-6 py-4">
        <Link to="/app" className="flex items-center gap-2">
          <span className="h-7 w-7 rounded-lg bg-sky-500 text-slate-950 flex items-center justify-center text-sm font-bold">
            L
          </span>
          <span className="text-sm font-medium tracking-tight text-slate-50">Linkly</span>
        </Link>
        <Button variant="outline" size="sm" className="border-slate-700">
          Logout
        </Button>
      </header>

      <main className="flex-1 px-6 py-6">
        <Outlet />
      </main>
    </div>
  )
}
