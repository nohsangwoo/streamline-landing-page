import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
      <div className="space-y-4">
        <h1 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
          아마네 소프트와 함께
          <br />더 빠른 혁신을
        </h1>
        <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          최첨단 소프트웨어 솔루션으로 비즈니스에 힘을 실어드립니다. AI 기반 분석부터 원활한 클라우드 통합까지, 우리는
          기술의 미래를 만들어 갑니다.
        </p>
      </div>
      <div className="flex gap-4">
        <Button size="lg">
          솔루션 살펴보기
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button variant="outline" size="lg">
          데모 일정 잡기
        </Button>
      </div>
    </section>
  )
}

