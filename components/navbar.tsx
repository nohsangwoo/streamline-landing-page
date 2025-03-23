import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold">아마네 소프트</span>
        </Link>
        <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
          <Link href="/solutions" className="transition-colors hover:text-primary">
            솔루션
          </Link>
          <Link href="/industries" className="transition-colors hover:text-primary">
            산업분야
          </Link>
          <Link href="/about" className="transition-colors hover:text-primary">
            회사소개
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="https://github.com/amanesoft" target="_blank" rel="noreferrer">
            <Button variant="ghost" size="icon">
              <Github className="h-4 w-4" />
              <span className="sr-only">깃허브</span>
            </Button>
          </Link>
          <Button variant="ghost" size="sm">
            문의하기
          </Button>
          <Button size="sm">데모 신청</Button>
        </div>
      </div>
    </header>
  )
}

