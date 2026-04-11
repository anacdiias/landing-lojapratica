export function DashboardMockup() {
  return (
    <div className="relative w-full max-w-[760px] mx-auto animate-float">
      {/* Glow behind the mockup */}
      <div
        className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(255,45,163,0.18) 0%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />

      {/* Main window */}
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          background: 'rgba(10, 14, 26, 0.95)',
          border: '1px solid rgba(255,255,255,0.10)',
          boxShadow: '0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)',
        }}
      >
        {/* Title bar */}
        <div
          className="flex items-center gap-2 px-4 py-3"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(5,8,20,0.8)' }}
        >
          <div className="w-3 h-3 rounded-full bg-red-500 opacity-80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-80" />
          <div className="w-3 h-3 rounded-full bg-green-500 opacity-80" />
          <div
            className="ml-4 flex-1 rounded-md px-3 py-1 text-xs text-center"
            style={{
              background: 'rgba(255,255,255,0.05)',
              color: 'rgba(255,255,255,0.3)',
              maxWidth: '220px',
              margin: '0 auto',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            app.lojapratica.com.br
          </div>
        </div>

        {/* Dashboard content */}
        <div className="flex" style={{ minHeight: '320px' }}>
          {/* Sidebar */}
          <div
            className="hidden sm:flex flex-col gap-1 py-4 px-3"
            style={{
              width: '52px',
              borderRight: '1px solid rgba(255,255,255,0.05)',
              background: 'rgba(5,8,20,0.5)',
            }}
          >
            {[
              '#FF2DA3',
              'rgba(255,255,255,0.25)',
              'rgba(255,255,255,0.25)',
              'rgba(255,255,255,0.25)',
            ].map((color, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  background: i === 0 ? 'rgba(255,45,163,0.12)' : 'transparent',
                }}
              >
                <div className="w-4 h-4 rounded" style={{ background: color }} />
              </div>
            ))}
          </div>

          {/* Main area */}
          <div className="flex-1 p-4 space-y-4">
            {/* Top stats row */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: 'Leads hoje', value: '28', delta: '+12%', color: '#FF2DA3' },
                { label: 'Sites ativos', value: '143', delta: '+4', color: '#7C3AED' },
                { label: 'Conversões', value: '92%', delta: '+3%', color: '#10B981' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl p-3"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif' }}>
                    {stat.label}
                  </div>
                  <div
                    className="text-lg font-bold"
                    style={{ color: stat.color, fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs" style={{ color: '#10B981' }}>{stat.delta}</div>
                </div>
              ))}
            </div>

            {/* Chart area */}
            <div
              className="rounded-xl p-4"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif' }}>
                  Crescimento de leads
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(255,45,163,0.12)', color: '#FF2DA3' }}>
                  Últimos 7 dias
                </span>
              </div>
              {/* Chart bars */}
              <div className="flex items-end gap-2 h-16">
                {[35, 52, 44, 68, 58, 82, 91].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t-sm" style={{
                    height: `${h}%`,
                    background: i === 6
                      ? 'linear-gradient(180deg, #FF2DA3, #7C3AED)'
                      : 'rgba(124,58,237,0.3)',
                    transition: 'height 0.3s ease',
                  }} />
                ))}
              </div>
            </div>

            {/* Active clients row */}
            <div className="flex gap-2">
              {['IA Ativa', 'WhatsApp', 'Tráfego IA', 'E-mail'].map((tag, i) => (
                <div
                  key={tag}
                  className="text-xs px-3 py-1.5 rounded-full"
                  style={{
                    background: i === 0 ? 'rgba(255,45,163,0.12)' : 'rgba(255,255,255,0.04)',
                    border: `1px solid ${i === 0 ? 'rgba(255,45,163,0.3)' : 'rgba(255,255,255,0.08)'}`,
                    color: i === 0 ? '#FF2DA3' : 'rgba(255,255,255,0.5)',
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  {i === 0 && <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 mr-1.5 animate-pulse" />}
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
