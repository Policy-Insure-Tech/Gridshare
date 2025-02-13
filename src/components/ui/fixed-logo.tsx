
import { Icons } from "./icons"

export function FixedLogo() {
  return (
    <div className="fixed top-6 left-6 z-50">
      <a href="/" className="flex items-center gap-x-2 group">
        <Icons.logo className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
        <span className="font-bold text-lg sm:text-xl text-foreground/90 group-hover:text-primary transition-colors">
          GridShare
        </span>
      </a>
    </div>
  )
}
