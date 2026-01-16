// --------------------------------
// file: src/components/logo.tsx
// --------------------------------

import { SiLinksys } from 'react-icons/si'
import { cn } from '@/lib/utils'

type LogoProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showText?: boolean
  className?: string
}

const sizeClasses = {
  sm: 'h-8 w-8 text-xl',
  md: 'h-10 w-10 text-2xl',
  lg: 'h-16 w-16 text-4xl',
  xl: 'h-20 w-20 text-5xl',
}

export function Logo({ size = 'md', showText = false, className }: LogoProps) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <span className={cn('rounded-lg flex items-center justify-center', sizeClasses[size])}>
        <SiLinksys />
      </span>
      {showText && <span className="text-xl font-medium tracking-tight">Linkly</span>}
    </div>
  )
}
