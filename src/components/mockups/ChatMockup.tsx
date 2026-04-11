export function ChatMockup() {
  const messages = [
    { from: 'ai', text: 'Olá! Sou a assistente da Loja Prática. Como posso ajudar você hoje? 🤖' },
    { from: 'user', text: 'Quero um site para minha loja' },
    { from: 'ai', text: 'Perfeito! Trabalhamos com WordPress + WooCommerce profissional. Posso te apresentar nossos planos?' },
    { from: 'user', text: 'Sim! Qual o prazo?' },
    { from: 'ai', text: 'Entregamos em até 15 dias úteis com suporte completo pós-lançamento. Quer falar com um especialista? ✅' },
  ]

  return (
    <div
      className="rounded-2xl overflow-hidden w-full max-w-[360px]"
      style={{
        background: 'rgba(10,14,26,0.96)',
        border: '1px solid rgba(255,255,255,0.10)',
        boxShadow: '0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.03)',
      }}
    >
      {/* Chat header */}
      <div
        className="flex items-center gap-3 px-4 py-3"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', background: 'rgba(5,8,20,0.8)' }}
      >
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold"
          style={{ background: 'linear-gradient(135deg, #FF2DA3, #7C3AED)' }}
        >
          LP
        </div>
        <div>
          <div className="text-sm font-semibold" style={{ color: '#F8FAFC', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            IA Loja Prática
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs" style={{ color: '#9CA3AF', fontFamily: 'Inter, sans-serif' }}>Ativo 24/7</span>
          </div>
        </div>
        <div className="ml-auto text-xs px-2 py-1 rounded-full" style={{ background: 'rgba(16,185,129,0.12)', color: '#10B981' }}>
          Online
        </div>
      </div>

      {/* Messages */}
      <div className="p-4 space-y-3" style={{ minHeight: '260px' }}>
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className="text-xs px-3 py-2 rounded-2xl max-w-[80%]"
              style={{
                background: msg.from === 'user'
                  ? 'linear-gradient(135deg, rgba(255,45,163,0.25), rgba(124,58,237,0.25))'
                  : 'rgba(255,255,255,0.05)',
                border: msg.from === 'user'
                  ? '1px solid rgba(255,45,163,0.25)'
                  : '1px solid rgba(255,255,255,0.07)',
                color: msg.from === 'user' ? '#F8FAFC' : '#E5E7EB',
                fontFamily: 'Inter, sans-serif',
                lineHeight: '1.5',
                borderRadius: msg.from === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
              }}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        <div className="flex items-center gap-1 px-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: '#9CA3AF',
                animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Input bar */}
      <div
        className="flex items-center gap-2 px-3 py-3 mx-3 mb-3 rounded-xl text-xs"
        style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
          color: 'rgba(255,255,255,0.3)',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        <span className="flex-1">Digite sua mensagem...</span>
        <div
          className="w-7 h-7 rounded-lg flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #FF2DA3, #7C3AED)' }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path d="M22 2L11 13" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-6px); }
        }
      `}</style>
    </div>
  )
}
