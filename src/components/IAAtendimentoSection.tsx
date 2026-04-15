import { ArrowRight, Check } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { cn } from '../lib/utils'
import { ChatMockup } from './mockups/ChatMockup'
import { buildWhatsAppLink } from '../lib/contact'

const benefits = [
  'Atendimento integrado no TikTok',
  'Respostas centralizadas no Messenger',
  'Chat no site para captar e atender visitantes em tempo real',
  'WhatsApp conectado ao fluxo de atendimento',
]

export function IAAtendimentoSection() {
  const { ref, inView } = useInView()

  return (
    <section
      id="como-funciona"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative section-padding overflow-hidden"
      style={{ background: '#050814' }}
    >
      {/* Brilho */}
      <div className="glow-purple" style={{ width: '500px', height: '500px', right: '-100px', top: '50%', transform: 'translateY(-50%)' }} />

      <div className="container-inner relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Coluna de texto */}
          <div>
            <div className={cn('badge-brand mb-6 animate-on-scroll', inView && 'in-view')}>
              Atendimento e Integração
            </div>

            <h2
              className={cn('mb-6 animate-on-scroll delay-100', inView && 'in-view')}
              style={{
                fontFamily: 'Sora, sans-serif',
                fontSize: 'clamp(28px, 3.5vw, 44px)',
                fontWeight: 700,
                color: '#F8FAFC',
                lineHeight: 1.2,
              }}
            >
              Seus canais conectados{' '}
              <br />
              <span className="gradient-text">em um só atendimento</span>
            </h2>

            <p
              className={cn('mb-8 animate-on-scroll delay-200', inView && 'in-view')}
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: '17px',
                color: '#9CA3AF',
                lineHeight: 1.75,
              }}
            >
              Estruturamos o atendimento da sua empresa para funcionar de forma integrada no
              TikTok, Messenger, chat do site e WhatsApp, com mais agilidade e menos perda de
              oportunidades.
              <br /><br />
              Assim, o cliente encontra sua marca no canal que preferir e você mantém a operação{' '}
              <span style={{ color: '#E5E7EB' }}>mais organizada, rápida e profissional.</span>
            </p>

            {/* Lista de benefícios */}
            <ul className={cn('space-y-4 mb-10 animate-on-scroll delay-300', inView && 'in-view')}>
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'rgba(255,45,163,0.15)', border: '1px solid rgba(255,45,163,0.3)' }}
                  >
                    <Check size={11} style={{ color: '#FF2DA3' }} strokeWidth={3} />
                  </div>
                  <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '15px', color: '#E5E7EB', lineHeight: 1.6 }}>
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            <div className={cn('animate-on-scroll delay-400', inView && 'in-view')}>
              <a
                href={buildWhatsAppLink('Olá! Quero integrar o atendimento da minha loja no TikTok, Messenger, chat do site e WhatsApp.')}
                className="btn-primary"
              >
                Quero integrar meu atendimento
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          {/* Coluna visual */}
          <div className={cn('flex justify-center lg:justify-end animate-on-scroll delay-200', inView && 'in-view')}>
            <div className="relative">
              {/* Brilho atrás do chat */}
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(255,45,163,0.1) 0%, transparent 70%)',
                  transform: 'scale(1.2)',
                  filter: 'blur(30px)',
                }}
              />
              <ChatMockup />

              {/* Selo flutuante de estatística */}
              <div
                className="absolute -right-4 -bottom-4 rounded-xl px-4 py-3"
                style={{
                  background: 'rgba(10,14,26,0.95)',
                  border: '1px solid rgba(255,255,255,0.10)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold gradient-text" style={{ fontFamily: 'Sora, sans-serif' }}>
                    89%
                  </span>
                  <div>
                    <div className="text-xs font-medium" style={{ color: '#E5E7EB', fontFamily: 'Manrope, sans-serif' }}>
                      menos tempo
                    </div>
                    <div className="text-xs" style={{ color: '#9CA3AF', fontFamily: 'Manrope, sans-serif' }}>
                      no atendimento
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


