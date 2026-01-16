// -------------------------------------
// File: src/pages/LandingPage.tsx
// -------------------------------------

import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'

export function LandingPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-20">
      <section className="max-w-2xl text-center space-y-6">
        <p className="inline-flex items-center rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1 mb-20 text-xs font-medium text-slate-300">
          ✨ Minimal link manager for focused people
        </p>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight ">
          Save links. Stay organized. Focus on what matters.
        </h1>
        <p className="text-sm sm:text-base  leading-relaxed">
          Linkly helps you capture, organize, and revisit the links that matter — with a fast,
          minimal interface backed by a type-safe API.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Button asChild className="w-full sm:w-auto">
            <Link to="/auth/register">Start for free</Link>
          </Button>
          <Button asChild variant="outline" className="border-slate-800">
            <Link to="/auth/login">I already have an account</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
