import { ArrowRight, ChevronDown } from 'lucide-react'
import { DashboardMockup } from './mockups/DashboardMockup'

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #050814 0%, #0A0E1A 60%, #050814 100%)',
        paddingTop: 'clamp(112px, 14vw, 148px)',
      }}
    >
      {/* Background dots */}
      <div className="absolute inset-0 bg-dots opacity-60" />

      {/* Top-left glow */}
      <div
        className="glow-purple"
        style={{ width: '500px', height: '500px', top: '0', left: '-150px', opacity: 0.6 }}
      />

      {/* Top-right glow */}
      <div
        className="glow-pink"
        style={{ width: '400px', height: '400px', top: '-50px', right: '-100px', opacity: 0.5 }}
      />

      <div className="container-inner relative z-10 py-20 text-center">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="badge-brand animate-fade-in">
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: '#FF2DA3', display: 'inline-block', marginRight: '4px' }}
            />
            ✦ Tecnologia que escala negócios
          </div>
        </div>

        {/* H1 */}
        <h1
          className="mb-6 leading-tight"
          style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: 'clamp(36px, 6vw, 64px)',
            fontWeight: 800,
            color: '#F8FAFC',
            maxWidth: '840px',
            margin: '0 auto 24px',
            lineHeight: 1.1,
          }}
        >
          Sua empresa precisa de{' '}
          <span className="gradient-text">estrutura.</span>
          <br />
          Nós entregamos{' '}
          <span className="gradient-text">tecnologia.</span>
        </h1>

        {/* Subheadline */}
        <p
          className="mb-10"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(16px, 2vw, 19px)',
            color: '#E5E7EB',
            maxWidth: '600px',
            margin: '0 auto 40px',
            lineHeight: 1.7,
            fontWeight: 400,
          }}
        >
          Sites, automação com IA, integrações e tráfego pago —<br className="hidden sm:block" />
          tudo em um parceiro de tecnologia que faz seu negócio{' '}
          <strong style={{ color: '#F8FAFC', fontWeight: 600 }}>crescer com previsibilidade.</strong>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="https://wa.me/5500000000000?text=Olá!+Quero+montar+minha+estrutura+digital."
            className="btn-primary"
            style={{ fontSize: '16px', padding: '15px 32px' }}
          >
            Quero minha estrutura
            <ArrowRight size={18} />
          </a>
          <a
            href="#planos"
            className="btn-secondary"
            style={{ fontSize: '16px', padding: '15px 32px' }}
          >
            Ver planos
          </a>
        </div>

        {/* Trust indicators */}
        <div
          className="flex flex-wrap items-center justify-center gap-6 mb-16 text-sm"
          style={{ color: '#9CA3AF', fontFamily: 'Inter, sans-serif' }}
        >
          {[
            '✓  Sites WordPress profissionais',
            '✓  IA de atendimento 24/7',
            '✓  Tráfego pago otimizado',
          ].map((item) => (
            <span key={item} style={{ color: '#6B7280' }}>
              <span style={{ color: '#10B981' }}>{item.slice(0, 1)}</span>
              {item.slice(1)}
            </span>
          ))}
        </div>

        {/* Dashboard mockup */}
        <DashboardMockup />
      </div>

      {/* Scroll indicator */}
      <a
        href="#servicos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40 hover:opacity-70 transition-opacity"
        style={{ color: '#9CA3AF' }}
      >
        <span className="text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>Role para ver mais</span>
        <ChevronDown size={18} className="animate-bounce" />
      </a>
    </section>
  )
}
