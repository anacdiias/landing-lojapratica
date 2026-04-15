import { ArrowRight, ChevronDown } from 'lucide-react'
// import { DashboardMockup } from './mockups/DashboardMockup'
import { CommerceGrowthMockup } from './mockups/CommerceGrowthMockup'
import { buildWhatsAppLink } from '../lib/contact'

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
      {/* Pontos de fundo */}
      <div className="absolute inset-0 bg-dots opacity-60" />

      {/* Brilho canto superior esquerdo */}
      <div
        className="glow-purple"
        style={{ width: '500px', height: '500px', top: '0', left: '-150px', opacity: 0.6 }}
      />

      {/* Brilho canto superior direito */}
      <div
        className="glow-pink"
        style={{ width: '400px', height: '400px', top: '-50px', right: '-100px', opacity: 0.5 }}
      />

      <div className="container-inner relative z-10 py-20 text-center">
        {/* Selo */}
        <div className="flex justify-center mb-7">
          <div className="badge-brand animate-fade-in">
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: '#FF2DA3', display: 'inline-block', marginRight: '4px' }}
            />
            Estrutura digital para lojistas
          </div>
        </div>

        {/* Título principal */}
        <h1
          className="mb-6 leading-tight"
          style={{
            fontFamily: 'Sora, sans-serif',
            fontSize: 'clamp(38px, 6vw, 68px)',
            fontWeight: 800,
            color: '#F8FAFC',
            maxWidth: '920px',
            margin: '0 auto 24px',
            lineHeight: 1.02,
            letterSpacing: '-0.05em',
          }}
        >
          Sua loja precisa de mais{' '}
          <span className="gradient-text">organização</span>
          <br />
          para vender com mais{' '}
          <span className="gradient-text">clareza.</span>
        </h1>

        {/* Subtítulo */}
        <p
          className="mb-10"
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'clamp(17px, 2vw, 21px)',
            color: '#CBD5E1',
            maxWidth: '760px',
            margin: '0 auto 42px',
            lineHeight: 1.8,
            fontWeight: 500,
          }}
        >
          Site profissional, atendimento integrado, redes sociais conectadas e tráfego pago em uma
          estrutura pensada para deixar a rotina da sua loja mais leve, organizada e pronta para crescer.
        </p>

        {/* Chamadas para ação */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href={buildWhatsAppLink('Olá! Quero montar minha estrutura digital e entender a melhor solução para minha loja.')}
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

        {/* Indicadores de confiança */}
        <div
          className="flex flex-wrap items-center justify-center gap-4 mb-16 text-sm"
          style={{ color: '#9CA3AF', fontFamily: 'Manrope, sans-serif' }}
        >
          {[
            'TikTok Shop e Instagram Shop organizados',
            'Atendimento centralizado no WhatsApp e no site',
            'Tráfego pago para vender com mais previsibilidade',
          ].map((item) => (
            <span
              key={item}
              className="rounded-full px-4 py-2"
              style={{
                color: '#CBD5E1',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {item}
            </span>
          ))}
        </div>

        {/* Mockup de dashboard */}
        {/* <DashboardMockup /> */}
        <CommerceGrowthMockup />
      </div>

      {/* Indicador de rolagem */}
      <a
        href="#servicos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40 hover:opacity-70 transition-opacity"
        style={{ color: '#9CA3AF' }}
      >
        <span className="text-xs" style={{ fontFamily: 'Manrope, sans-serif' }}>Role para ver mais</span>
        <ChevronDown size={18} className="animate-bounce" />
      </a>
    </section>
  )
}

