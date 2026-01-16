//----------------------------------
// page: src/layouts/LandingLayout.tsx
//----------------------------------

import { Link, Outlet } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/logo'

export function LandingLayout() {
  return (
    <div className="flex min-h-svh flex-col bg-background text-foreground">
      <header className="flex items-center justify-between px-6 py-4  ">
        <Link to="/" className="flex items-center gap-1">
          <Logo size="md" />
        </Link>
        <nav className="flex items-center gap-3">
          <Link to="/auth/login" className="text-sm ">
            Login
          </Link>
          <Button asChild size="sm">
            <Link to="/auth/register">Get started</Link>
          </Button>
        </nav>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-slate-800/80 px-6 py-3 text-center text-xs text-slate-500">
        Built with 💗 by Areef.
      </footer>
    </div>
  )
}
