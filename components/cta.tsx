import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="border-t">
      <div className="container flex flex-col items-center gap-4 py-24 text-center md:py-32">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">비즈니스 혁신을 준비하셨나요?</h2>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          디지털 혁신을 주도하고 빠르게 진화하는 기술 환경에서 앞서 나가기 위해 아마네 소프트를 신뢰하는 선도적인
          기업들과 함께하세요.
        </p>
        <Button size="lg" className="mt-4">
          지금 시작하기
        </Button>
      </div>
    </section>
  )
}

