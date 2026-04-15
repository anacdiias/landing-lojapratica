import { useInView } from '../hooks/useInView'
import { useCountUp } from '../hooks/useCountUp'
import { cn } from '../lib/utils'

function Stat({ value, suffix, label, delay, started }: {
  value: number
  suffix: string
  label: string
  delay: string
  started: boolean
}) {
  const count = useCountUp(value, 2000, started)

  return (
    <div className={cn('text-center animate-on-scroll', delay, started && 'in-view')}>
      <div
        className="text-4xl md:text-5xl font-extrabold mb-2"
        style={{
          fontFamily: 'Sora, sans-serif',
          background: 'linear-gradient(135deg, #FF2DA3, #7C3AED)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {count}{suffix}
      </div>
      <div style={{ fontFamily: 'Manrope, sans-serif', fontSize: '15px', color: '#9CA3AF' }}>
        {label}
      </div>
    </div>
  )
}

export function InstitucionalSection() {
  const { ref, inView } = useInView()

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative section-padding overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #050814, #0A0E1A)' }}
    >
      {/* Brilho central */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: '800px',
          height: '400px',
          background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="container-inner relative z-10">
        {/* Conteúdo principal */}
        <div className="max-w-[760px] mx-auto text-center mb-20">
          <h2
            className={cn('mb-6 animate-on-scroll', inView && 'in-view')}
            style={{
              fontFamily: 'Sora, sans-serif',
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 700,
              color: '#F8FAFC',
              lineHeight: 1.2,
            }}
          >
            Tecnologia real para{' '}
            <span className="gradient-text">negócios reais</span>
          </h2>

          <p
            className={cn('animate-on-scroll delay-100', inView && 'in-view')}
            style={{ fontFamily: 'Manrope, sans-serif', color: '#9CA3AF', lineHeight: 1.8, fontSize: '17px' }}
          >
            A Loja Prática não é uma agência. Somos uma{' '}
            <strong style={{ color: '#E5E7EB', fontWeight: 500 }}>empresa de tecnologia</strong> que transforma
            operações manuais em estruturas digitais escaláveis  com sites que vendem, automações que funcionam
            e inteligência que cresce com você.
          </p>

          <p
            className={cn('mt-4 animate-on-scroll delay-200', inView && 'in-view')}
            style={{ fontFamily: 'Manrope, sans-serif', color: '#9CA3AF', lineHeight: 1.8, fontSize: '17px' }}
          >
            Não entregamos templates. Entregamos{' '}
            <span style={{ color: '#E5E7EB' }}>estrutura</span>. Construímos{' '}
            <span style={{ color: '#E5E7EB' }}>operações digitais completas, integradas e prontas para escalar.</span>
          </p>
        </div>

        {/* Grade de estatísticas */}
        <div className="grid grid-cols-3 gap-8 max-w-[600px] mx-auto mb-16">
          <Stat value={275} suffix="+" label="Clientes ativos" delay="delay-100" started={inView} />
          <Stat value={320} suffix="+" label="Projetos entregues" delay="delay-200" started={inView} />
          <Stat value={98} suffix="%" label="Satisfação" delay="delay-300" started={inView} />
        </div>

        {/* Divisor decorativo */}
        <div className="relative flex items-center justify-center">
          <div className="divider-gradient w-full" />
          <div
            className="absolute w-32 h-1 rounded-full"
            style={{ background: 'linear-gradient(90deg, #FF2DA3, #7C3AED)', filter: 'blur(8px)' }}
          />
        </div>

        {/* Tags de recurso */}
        <div className={cn('flex flex-wrap justify-center gap-3 mt-12 animate-on-scroll delay-400', inView && 'in-view')}>
          {[
            'WordPress + WooCommerce',
            'IA de Atendimento',
            'Tráfego Pago com IA',
            'Integrações e APIs',
            'Automação de Processos',
            'Segurança Digital',
          ].map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full text-sm"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: '#9CA3AF',
                fontFamily: 'Manrope, sans-serif',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}


