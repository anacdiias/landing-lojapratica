import { useEffect, useRef, useState } from 'react'

const channels = [
  {
    name: 'TikTok Shop',
    helper: 'Produtos com mais alcance',
    stat: '+38%',
    tone: 'rgba(255,45,163,0.18)',
    border: 'rgba(255,45,163,0.28)',
    accent: '#FF2DA3',
  },
  {
    name: 'Instagram Shop',
    helper: 'Sacolinhas prontas para vender',
    stat: '128',
    tone: 'rgba(124,58,237,0.18)',
    border: 'rgba(124,58,237,0.28)',
    accent: '#A78BFA',
  },
  {
    name: 'Tráfego Pago',
    helper: 'Campanhas trazendo visitas qualificadas',
    stat: '4.8x',
    tone: 'rgba(16,185,129,0.18)',
    border: 'rgba(16,185,129,0.28)',
    accent: '#34D399',
  },
]

const routine = [
  'Catálogo organizado para vender mais fácil',
  'Canais conectados sem depender de planilhas',
  'Mais agilidade no atendimento e nas campanhas',
]

const barConfigs = [
  { initial: 40, min: 34, max: 84, delta: 4.2 },
  { initial: 60, min: 48, max: 98, delta: 6.0 },
  { initial: 54, min: 44, max: 92, delta: 4.6 },
  { initial: 72, min: 60, max: 100, delta: 3.4 },
  { initial: 66, min: 52, max: 94, delta: 4.0 },
  { initial: 84, min: 70, max: 100, delta: 2.8 },
  { initial: 92, min: 78, max: 100, delta: 1.8 },
]

export function CommerceGrowthMockup() {
  const [animatedBars, setAnimatedBars] = useState<number[]>(barConfigs.map((config) => config.initial))
  const directionsRef = useRef<number[]>(barConfigs.map((_, index) => (index % 2 === 0 ? 1 : -1)))

  useEffect(() => {
    const interval = window.setInterval(() => {
      setAnimatedBars((currentBars) =>
        currentBars.map((value, index) => {
          const { min, max, delta } = barConfigs[index]
          let direction = directionsRef.current[index]
          let next = value + direction * delta

          if (next >= max) {
            next = max - delta
            direction = -1
          } else if (next <= min) {
            next = min + delta
            direction = 1
          }

          directionsRef.current[index] = direction
          return next
        }),
      )
    }, 800)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full max-w-[860px] mx-auto">
      <div
        className="absolute inset-x-12 -bottom-12 h-48 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255,45,163,0.2) 0%, rgba(124,58,237,0.14) 38%, transparent 74%)',
          filter: 'blur(30px)',
        }}
      />

      <div className="relative grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div
          className="rounded-[30px] p-5 sm:p-6"
          style={{
            background: 'linear-gradient(180deg, rgba(10,14,26,0.94), rgba(5,8,20,0.98))',
            border: '1px solid rgba(255,255,255,0.10)',
            boxShadow: '0 30px 90px rgba(0,0,0,0.5)',
          }}
        >
          <div className="mb-5 flex items-center gap-3">
            <div
              className="rounded-full px-4 py-2 text-base sm:text-lg font-semibold uppercase tracking-[0.14em]"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: '#E2E8F0',
              }}
            >
              Sua loja mais organizada
            </div>
            <div
              className="ml-auto rounded-full px-3 py-1 text-base sm:text-lg"
              style={{
                background: 'rgba(16,185,129,0.12)',
                border: '1px solid rgba(16,185,129,0.25)',
                color: '#34D399',
              }}
            >
              atualizando agora
            </div>
          </div>

          <div className="mb-5 max-w-[520px]">
            <h3
              className="mb-3 text-[clamp(28px,4vw,40px)] font-bold"
              style={{ color: '#F8FAFC', lineHeight: 1.1 }}
            >
              Mais clareza para vender no <span style={{ color: '#FF2DA3' }}>TikTok</span>, no <span style={{ color: '#A78BFA' }}>Instagram</span> e no tráfego pago.
            </h3>
            <p
              className="text-base sm:text-xl"
              style={{ color: '#B6C2D1', lineHeight: 1.75 }}
            >
              Aqui a ideia não é parecer um sistema da Loja Prática. É mostrar o que o cliente ganha:
              acesso fácil, canais organizados e campanhas andando com muito mais clareza.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {channels.map((channel) => (
              <div
                key={channel.name}
                className="rounded-[22px] p-4"
                style={{
                  background: channel.tone,
                  border: `1px solid ${channel.border}`,
                }}
              >
                <div className="mb-8 flex items-start justify-between">
                  <div>
                    <div className="mb-1 text-sm uppercase tracking-[0.14em]" style={{ color: 'rgba(255,255,255,0.75)' }}>
                      canal ativo
                    </div>
                    <div className="text-lg font-semibold" style={{ color: '#F8FAFC' }}>
                      {channel.name}
                    </div>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ background: channel.accent }} />
                </div>
                <div className="mb-2 text-[30px] font-bold" style={{ color: channel.accent, lineHeight: 1 }}>
                  {channel.stat}
                </div>
                <div className="text-sm sm:text-base" style={{ color: '#D7E0EA', lineHeight: 1.6 }}>
                  {channel.helper}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div
            className="rounded-[28px] p-5 sm:p-6"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 24px 70px rgba(0,0,0,0.28)',
            }}
          >
            <div className="mb-4 flex items-center justify-between">
              <div>
                <div className="text-lg sm:text-xl font-semibold" style={{ color: '#F8FAFC' }}>
                  Rotina mais leve
                </div>
                <div className="text-sm sm:text-base" style={{ color: '#9FB0C2' }}>
                  Organização que o lojista percebe no dia a dia
                </div>
              </div>
              <span className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: 'rgba(255,45,163,0.12)', color: '#FF2DA3' }}>
                LP
              </span>
            </div>

            <div className="space-y-3">
              {routine.map((item, index) => (
                <div
                  key={item}
                  className="rounded-[20px] px-4 py-3"
                  style={{
                    background: 'rgba(5,8,20,0.55)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{
                        background: index === 0 ? 'rgba(255,45,163,0.14)' : index === 1 ? 'rgba(124,58,237,0.14)' : 'rgba(16,185,129,0.14)',
                        color: index === 0 ? '#FF2DA3' : index === 1 ? '#A78BFA' : '#34D399',
                      }}
                    >
                      {index + 1}
                    </span>
                    <span className="text-base" style={{ color: '#E2E8F0', lineHeight: 1.6 }}>
                      {item}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="rounded-[28px] p-5 sm:p-6"
            style={{
              background: 'linear-gradient(180deg, rgba(10,14,26,0.9), rgba(5,8,20,0.95))',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 24px 70px rgba(0,0,0,0.28)',
            }}
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="text-lg sm:text-xl font-semibold" style={{ color: '#F8FAFC' }}>
                Movimento da operação
              </div>
              <div className="text-sm sm:text-base" style={{ color: '#9FB0C2' }}>
                semana atual
              </div>
            </div>
            <div className="mb-4 flex items-end gap-2 h-28">
              {animatedBars.map((bar, index) => (
                <div key={index} className="flex-1">
                  <div
                    className="w-full rounded-t-[14px]"
                    style={{
                      height: `${bar}%`,
                      minHeight: '24px',
                      transition: 'height 0.9s ease-in-out',
                      background: index === animatedBars.length - 1
                        ? 'linear-gradient(180deg, #FF2DA3 0%, #7C3AED 54%, #2DD4BF 100%)'
                        : 'linear-gradient(180deg, rgba(255,255,255,0.22), rgba(255,255,255,0.06))',
                    }}
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {['TikTok Shop pronto', 'Sacolinha ativa', 'Campanhas rodando'].map((tag, index) => (
                <span
                  key={tag}
                  className="rounded-full px-3 py-2 text-base"
                  style={{
                    background: index === 0 ? 'rgba(255,45,163,0.12)' : index === 1 ? 'rgba(124,58,237,0.12)' : 'rgba(45,212,191,0.12)',
                    border: index === 0 ? '1px solid rgba(255,45,163,0.26)' : index === 1 ? '1px solid rgba(124,58,237,0.26)' : '1px solid rgba(45,212,191,0.26)',
                    color: index === 0 ? '#FF2DA3' : index === 1 ? '#A78BFA' : '#5EEAD4',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

