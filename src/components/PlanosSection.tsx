import { ArrowRight, Check, Zap } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { cn } from '../lib/utils'

const plans = [
  {
    name: 'Start',
    subtitle: 'Para quem está começando e precisa de presença digital profissional',
    price: 'R$ 1.997',
    period: 'pagamento único',
    featured: false,
    badge: null,
    features: [
      'Site WordPress profissional',
      'Design responsivo mobile-first',
      'Até 5 páginas/seções',
      'Formulário de contato integrado',
      'Botão WhatsApp flutuante',
      'SEO básico on-page',
      '30 dias de suporte pós-entrega',
    ],
    cta: 'Começar',
    ctaHref: 'https://wa.me/5500000000000?text=Olá!+Tenho+interesse+no+plano+Start.',
  },
  {
    name: 'Pro',
    subtitle: 'Para quem quer vender mais com tecnologia e automação integradas',
    price: 'R$ 3.997',
    period: 'pagamento único',
    featured: true,
    badge: 'Mais popular',
    features: [
      'Tudo do plano Start +',
      'Landing page de alta conversão',
      'IA de atendimento no WhatsApp',
      'Integração com CRM',
      'SEO on-page completo',
      'Automação de e-mail e leads',
      'Tráfego pago gerenciado por IA',
      '60 dias de suporte pós-entrega',
    ],
    cta: 'Escolher Pro',
    ctaHref: 'https://wa.me/5500000000000?text=Olá!+Tenho+interesse+no+plano+Pro.',
  },
  {
    name: 'Scale',
    subtitle: 'Para negócios que querem operação digital completa e escalável',
    price: 'Sob consulta',
    period: 'projeto personalizado',
    featured: false,
    badge: null,
    features: [
      'Tudo do plano Pro +',
      'Meta + Google Ads simultâneos',
      'Criação de conteúdo com IA',
      'Monitoramento e segurança 24/7',
      'Relatórios mensais de performance',
      'Reuniões de estratégia mensais',
      'Suporte prioritário sem prazo',
    ],
    cta: 'Falar com especialista',
    ctaHref: 'https://wa.me/5500000000000?text=Olá!+Quero+saber+sobre+o+plano+Scale.',
  },
]

export function PlanosSection() {
  const { ref, inView } = useInView()

  return (
    <section
      id="planos"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative section-padding overflow-hidden"
      style={{ background: '#050814' }}
    >
      <div className="absolute inset-0 bg-dots opacity-40" />

      {/* Glow center */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="container-inner relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className={cn('mb-4 animate-on-scroll', inView && 'in-view')}
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 700,
              color: '#F8FAFC',
              lineHeight: 1.2,
            }}
          >
            Escolha a estrutura certa{' '}
            <span className="gradient-text">para o seu momento</span>
          </h2>
          <p
            className={cn('animate-on-scroll delay-100', inView && 'in-view')}
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', color: '#9CA3AF', maxWidth: '480px', margin: '0 auto' }}
          >
            Planos pensados para escalar com você — do primeiro site à operação digital completa.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid lg:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={cn(
                'relative flex flex-col p-8 rounded-2xl animate-on-scroll',
                `delay-${(i + 1) * 100}`,
                inView && 'in-view',
              )}
              style={
                plan.featured
                  ? {
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,45,163,0.35)',
                      boxShadow: '0 0 50px rgba(255,45,163,0.08), inset 0 1px 0 rgba(255,255,255,0.06)',
                    }
                  : {
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid rgba(255,255,255,0.07)',
                    }
              }
            >
              {/* Featured badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <div className="badge-brand" style={{ fontSize: '11px', padding: '4px 14px' }}>
                    <Zap size={11} fill="#FF2DA3" />
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Plan name */}
              <div className="mb-6">
                <h3
                  style={{
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    fontSize: '22px',
                    fontWeight: 700,
                    color: plan.featured ? '#FF2DA3' : '#F8FAFC',
                    marginBottom: '8px',
                  }}
                >
                  {plan.name}
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#9CA3AF', lineHeight: 1.5 }}>
                  {plan.subtitle}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8 pb-6" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                <div
                  className="text-3xl font-bold mb-1"
                  style={{
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    color: plan.featured ? '#F8FAFC' : '#E5E7EB',
                  }}
                >
                  {plan.price}
                </div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#6B7280' }}>
                  {plan.period}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        background: plan.featured ? 'rgba(255,45,163,0.15)' : 'rgba(255,255,255,0.06)',
                        border: `1px solid ${plan.featured ? 'rgba(255,45,163,0.3)' : 'rgba(255,255,255,0.10)'}`,
                      }}
                    >
                      <Check
                        size={11}
                        style={{ color: plan.featured ? '#FF2DA3' : '#9CA3AF' }}
                        strokeWidth={3}
                      />
                    </div>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#E5E7EB', lineHeight: 1.5 }}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={plan.ctaHref}
                className={plan.featured ? 'btn-primary justify-center' : 'btn-secondary justify-center'}
              >
                {plan.cta}
                <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p
          className={cn('text-center mt-10 text-sm animate-on-scroll delay-400', inView && 'in-view')}
          style={{ fontFamily: 'Inter, sans-serif', color: '#6B7280' }}
        >
          Todos os planos incluem hospedagem por 12 meses e suporte pós-entrega.{' '}
          <a href="https://wa.me/5500000000000" style={{ color: '#9CA3AF', textDecoration: 'underline' }}>
            Dúvidas? Fale com a gente.
          </a>
        </p>
      </div>
    </section>
  )
}
