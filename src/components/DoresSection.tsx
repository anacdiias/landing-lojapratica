import { useInView } from '../hooks/useInView'
import { cn } from '../lib/utils'

const dores = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#FF2DA3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 10h8M8 14h4" stroke="#FF2DA3" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Atendimento no limite',
    body: 'Você responde cada cliente no WhatsApp manualmente, uma por uma. Enquanto isso, concorrentes com automação atendem dezenas ao mesmo tempo — e você perde vendas sem perceber.',
    highlight: 'sem perceber.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="#FF2DA3" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Processos que te consomem',
    body: 'Tarefas repetitivas, planilhas soltas, nenhum processo automático. Cada hora do seu dia é gasta em operação, não em crescimento. Escalar assim significa contratar mais — não crescer mais.',
    highlight: 'contratar mais — não crescer mais.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="#FF2DA3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Vendas que dependem do acaso',
    body: 'Sem estratégia de tráfego, sem conteúdo consistente, sem dados. O faturamento sobe e desce sem explicação. Você não controla o crescimento — ele acontece por sorte.',
    highlight: 'por sorte.',
  },
]

export function DoresSection() {
  const { ref, inView } = useInView()

  return (
    <section
      id="servicos"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative section-padding overflow-hidden"
      style={{ background: '#0A0E1A' }}
    >
      {/* Grade de fundo */}
      <div className="absolute inset-0 bg-dots opacity-40" />

      <div className="container-inner relative z-10">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <p className={cn('section-label mb-4 animate-on-scroll', inView && 'in-view')}>
            O problema que você conhece bem
          </p>
          <h2
            className={cn('animate-on-scroll delay-100', inView && 'in-view')}
            style={{
              fontFamily: 'Sora, sans-serif',
              fontSize: 'clamp(26px, 4vw, 44px)',
              fontWeight: 700,
              color: '#F8FAFC',
              lineHeight: 1.2,
              maxWidth: '720px',
              margin: '0 auto',
            }}
          >
            Sem estrutura digital, você{' '}
            <span className="gradient-text">trabalha mais</span> e{' '}
            <span className="gradient-text">cresce menos</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {dores.map((dor, i) => (
            <div
              key={dor.title}
              className={cn('glass-card p-8 animate-on-scroll', inView && 'in-view', `delay-${(i + 1) * 100 + 100}`)}
            >
              {/* Ícone */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{
                  background: 'rgba(255,45,163,0.08)',
                  border: '1px solid rgba(255,45,163,0.15)',
                }}
              >
                {dor.icon}
              </div>

              {/* Título */}
              <h3
                className="mb-3"
                style={{
                  fontFamily: 'Sora, sans-serif',
                  fontSize: '20px',
                  fontWeight: 600,
                  color: '#F8FAFC',
                  lineHeight: 1.3,
                }}
              >
                {dor.title}
              </h3>

              {/* Corpo do texto */}
              <p
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: '15px',
                  color: '#9CA3AF',
                  lineHeight: 1.7,
                }}
              >
                {dor.body.replace(dor.highlight, '').trim()}{' '}
                <span style={{ color: '#E5E7EB' }}>{dor.highlight}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Divisor */}
        <div className="divider-gradient mt-20" />
      </div>
    </section>
  )
}


