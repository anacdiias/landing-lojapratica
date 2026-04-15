import { ArrowRight, Check, Zap } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { cn } from '../lib/utils'
import { buildWhatsAppLink } from '../lib/contact'

const plans = [
  {
    name: 'Start',
    subtitle: 'Ideal para quem precisa do essencial para manter o site seguro e funcionando.',
    price: 'R$ 99,90',
    period: '/mês',
    featured: false,
    badge: null,
    features: [
      'Certificado SSL',
      'Suporte via WhatsApp',
      'Backup de segurança a cada 15 dias',
      'Monitoramento básico do site',
      'Sem integração com inteligência artificial',
    ],
    cta: 'Escolher Start',
    ctaHref: buildWhatsAppLink('Olá! Tenho interesse no Plano Start da Loja Prática.'),
  },
  {
    name: 'Plus',
    subtitle: 'Para empresas que desejam mais proteção, desempenho e integração com redes sociais.',
    price: 'R$ 149,90',
    period: '/mês',
    featured: true,
    badge: 'Mais popular',
    features: [
      'Tudo do Plano Start, mais:',
      'Inteligência artificial de proteção ao site',
      'Backup de segurança a cada 7 dias',
      'Antivírus',
      'Velocidade aumentada do site',
      'Integração com Instagram Feed no rodapé',
      'Postagens do Instagram atualizadas automaticamente no site',
      'Instagram Shop',
      'Sacolinha do Instagram',
    ],
    cta: 'Escolher Plus',
    ctaHref: buildWhatsAppLink('Olá! Tenho interesse no Plano Plus da Loja Prática.'),
  },
  {
    name: 'Premium',
    subtitle: 'Nosso plano mais completo, pensado para lojas que buscam mais performance, proteção e prioridade no suporte.',
    price: 'R$ 219,90',
    period: '/mês',
    featured: false,
    badge: null,
    features: [
      'Tudo do Plano Plus, mais:',
      'TikTok Shop',
      'Integração com sistemas de loja',
      'Melhor desempenho no PageSpeed',
      'SEO aplicado dentro do código do site',
      'Suporte prioritário',
      'Backup de segurança a cada 24 horas',
      '4 inteligências artificiais para proteção anti-hacker e anti-bot',
    ],
    cta: 'Escolher Premium',
    ctaHref: buildWhatsAppLink('Olá! Tenho interesse no Plano Premium da Loja Prática.'),
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

      {/* Brilho central */}
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
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h2
            className={cn('mb-4 animate-on-scroll', inView && 'in-view')}
            style={{
              fontFamily: 'Sora, sans-serif',
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 700,
              color: '#F8FAFC',
              lineHeight: 1.2,
            }}
          >
            Planos mensais para manter seu site{' '}
            <span className="gradient-text">seguro, rápido e integrado</span>
          </h2>
          <p
            className={cn('animate-on-scroll delay-100', inView && 'in-view')}
            style={{ fontFamily: 'Manrope, sans-serif', fontSize: '17px', color: '#9CA3AF', maxWidth: '480px', margin: '0 auto' }}
          >
            Escolha o nível de proteção, desempenho e integração ideal para a fase atual do seu negócio.
          </p>
        </div>

        {/* Grade dos planos */}
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
              {/* Selo em destaque */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <div className="badge-brand" style={{ fontSize: '11px', padding: '4px 14px' }}>
                    <Zap size={11} fill="#FF2DA3" />
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Nome do plano */}
              <div className="mb-6">
                <h3
                  style={{
                    fontFamily: 'Sora, sans-serif',
                    fontSize: '22px',
                    fontWeight: 700,
                    color: plan.featured ? '#FF2DA3' : '#F8FAFC',
                    marginBottom: '8px',
                  }}
                >
                  {plan.name}
                </h3>
                <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '14px', color: '#9CA3AF', lineHeight: 1.5 }}>
                  {plan.subtitle}
                </p>
              </div>

              {/* Preço */}
              <div className="mb-8 pb-6" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                <div
                  className="text-3xl font-bold mb-1"
                  style={{
                    fontFamily: 'Sora, sans-serif',
                    color: plan.featured ? '#F8FAFC' : '#E5E7EB',
                  }}
                >
                  {plan.price}
                </div>
                <div style={{ fontFamily: 'Manrope, sans-serif', fontSize: '13px', color: '#6B7280' }}>
                  {plan.period}
                </div>
                <p className="mt-3 text-xs" style={{ fontFamily: 'Manrope, sans-serif', color: '#ff2da3', lineHeight: 1.6 }}>
                  *Desenvolvimento do site não incluso.
                </p>
              </div>

              {/* Recursos */}
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
                    <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '14px', color: '#E5E7EB', lineHeight: 1.5 }}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Botão de ação */}
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

        {/* Nota do rodapé */}
        <p
          className={cn('text-center mt-10 text-sm animate-on-scroll delay-400', inView && 'in-view')}
          style={{ fontFamily: 'Manrope, sans-serif', color: '#6B7280' }}
        >
          Todos os planos incluem acompanhamento contínuo para manter o site protegido e funcionando bem. {' '}
          <a href={buildWhatsAppLink('Olá! Tenho dúvidas sobre os planos da Loja Prática e quero falar com vocês.')} style={{ color: '#9CA3AF', textDecoration: 'underline' }}>
            Dúvidas? Fale com a gente.
          </a>
        </p>
      </div>
    </section>
  )
}


