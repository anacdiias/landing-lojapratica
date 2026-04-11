import { ArrowRight, Check } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { cn } from '../lib/utils'
import { MetricsMockup } from './mockups/MetricsMockup'

const benefits = [
  'IA para criação de conteúdo com identidade e frequência',
  'Otimização automática de anúncios no Meta e Google',
  'Relatórios de performance em tempo real, sem planilhas',
]

export function IATrafegoSection() {
  const { ref, inView } = useInView()

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative section-padding overflow-hidden"
      style={{ background: '#0A0E1A' }}
    >
      {/* Glow */}
      <div className="glow-pink" style={{ width: '500px', height: '500px', left: '-100px', top: '50%', transform: 'translateY(-50%)' }} />
      <div className="absolute inset-0 bg-dots opacity-30" />

      <div className="container-inner relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Visual column (left on desktop) */}
          <div className={cn(
            'flex justify-center order-2 lg:order-1 animate-on-scroll delay-200',
            inView && 'in-view'
          )}>
            <div className="relative">
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.1) 0%, transparent 70%)',
                  transform: 'scale(1.2)',
                  filter: 'blur(30px)',
                }}
              />
              <MetricsMockup />

              {/* Floating AI badge */}
              <div
                className="absolute -left-4 -top-4 rounded-xl px-3 py-2 flex items-center gap-2"
                style={{
                  background: 'rgba(10,14,26,0.95)',
                  border: '1px solid rgba(124,58,237,0.3)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#7C3AED' }} />
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#E5E7EB' }}>
                  IA otimizando agora
                </span>
              </div>
            </div>
          </div>

          {/* Text column (right on desktop) */}
          <div className="order-1 lg:order-2">
            <div className={cn('badge-brand mb-6 animate-on-scroll', inView && 'in-view')}>
              Marketing com IA
            </div>

            <h2
              className={cn('mb-6 animate-on-scroll delay-100', inView && 'in-view')}
              style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: 'clamp(28px, 3.5vw, 44px)',
                fontWeight: 700,
                color: '#F8FAFC',
                lineHeight: 1.2,
              }}
            >
              Cresça com{' '}
              <span className="gradient-text">previsibilidade</span>
              <br />
              no tráfego pago
            </h2>

            <div
              className={cn('mb-8 animate-on-scroll delay-200', inView && 'in-view')}
            >
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '17px',
                  color: '#9CA3AF',
                  lineHeight: 1.75,
                  marginBottom: '16px',
                }}
              >
                <strong style={{ color: '#6B7280', fontWeight: 500 }}>Antes:</strong> anúncios rodando sem otimização,
                conteúdo criado na pressa, relatórios que ninguém lê.
              </p>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '17px',
                  color: '#9CA3AF',
                  lineHeight: 1.75,
                }}
              >
                <strong style={{ color: '#E5E7EB', fontWeight: 500 }}>Depois:</strong> IA que analisa seus dados,
                ajusta os anúncios em tempo real e cria conteúdo com consistência —{' '}
                <span style={{ color: '#E5E7EB' }}>enquanto você foca no que só você pode fazer.</span>
              </p>
            </div>

            {/* Benefits */}
            <ul className={cn('space-y-4 mb-10 animate-on-scroll delay-300', inView && 'in-view')}>
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.3)' }}
                  >
                    <Check size={11} style={{ color: '#7C3AED' }} strokeWidth={3} />
                  </div>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#E5E7EB', lineHeight: 1.6 }}>
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            <div className={cn('animate-on-scroll delay-400', inView && 'in-view')}>
              <a
                href="https://wa.me/5500000000000?text=Olá!+Quero+crescer+com+IA+no+tráfego+pago."
                className="btn-primary"
              >
                Quero crescer com IA
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
