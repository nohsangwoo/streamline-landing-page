import { Brain, Cloud, Shield, Zap } from "lucide-react"

const features = [
  {
    name: "AI 기반 분석",
    description: "머신러닝의 힘을 활용하여 데이터에서 실행 가능한 인사이트를 도출합니다.",
    icon: Brain,
  },
  {
    name: "클라우드 네이티브 아키텍처",
    description: "현대 클라우드 생태계를 위해 구축된 확장 가능하고 탄력적이며 효율적인 솔루션입니다.",
    icon: Cloud,
  },
  {
    name: "기업급 보안",
    description: "가장 귀중한 자산을 보호하기 위한 최첨단 보안 조치를 제공합니다.",
    icon: Shield,
  },
  {
    name: "고성능 시스템",
    description: "속도와 효율성을 위해 최적화된 솔루션으로 타의 추종을 불허하는 성능을 제공합니다.",
    icon: Zap,
  },
]

export default function Features() {
  return (
    <section className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">최첨단 솔루션</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          아마네 소프트의 혁신적인 기술로 비즈니스를 어떻게 변화시킬 수 있는지 알아보세요.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {features.map((feature) => (
          <div key={feature.name} className="relative overflow-hidden rounded-lg border bg-background p-8">
            <div className="flex items-center gap-4">
              <feature.icon className="h-8 w-8" />
              <h3 className="font-bold">{feature.name}</h3>
            </div>
            <p className="mt-2 text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

