// --------------------------------
// file: src/components/login-form.tsx
// --------------------------------

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Link } from 'react-router-dom'
import { Logo } from '@/components/logo'

export function LoginForm({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Welcome back</h1>
                <p className="text-muted-foreground text-balance">Login to your Linkly account</p>
              </div>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input id="email" type="email" placeholder="m@example.com" required />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a href="#" className="ml-auto text-sm underline-offset-2 hover:underline">
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </Field>
              <Field>
                <Button type="submit">Login</Button>
              </Field>
              <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
                Or
              </FieldSeparator>

              <FieldDescription className="text-center">
                Don&apos;t have an account? <Link to="/auth/register">Sign up</Link>
              </FieldDescription>
            </FieldGroup>
          </form>

          {/* Logo Section - Center aligned */}
          <div className="bg-muted relative hidden md:flex items-center justify-center p-8">
            <div className="flex flex-col items-center gap-6 z-10">
              <Logo size="xl" />
              <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold">Linkly</h2>
                <p className="text-sm text-muted-foreground max-w-xs">
                  Organize your links, boost your productivity
                </p>
              </div>
            </div>
            <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent" />
          </div>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <a href="#">Terms of Service</a> and{' '}
        <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  )
}
