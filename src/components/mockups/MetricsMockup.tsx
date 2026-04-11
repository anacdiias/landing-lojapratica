export function MetricsMockup() {
  const campaigns = [
    { name: 'Meta Ads — Loja A', value: 87, color: '#FF2DA3', roi: '+340%' },
    { name: 'Google Ads — Loja B', value: 64, color: '#7C3AED', roi: '+218%' },
    { name: 'Instagram — Loja C', value: 92, color: '#10B981', roi: '+410%' },
  ]

  return (
    <div
      className="rounded-2xl overflow-hidden w-full max-w-[400px]"
      style={{
        background: 'rgba(10,14,26,0.96)',
        border: '1px solid rgba(255,255,255,0.10)',
        boxShadow: '0 24px 60px rgba(0,0,0,0.5)',
      }}
    >
      {/* Header */}
      <div
        className="px-5 py-4"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', background: 'rgba(5,8,20,0.7)' }}
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-bold" style={{ color: '#F8FAFC', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Performance IA
            </div>
            <div className="text-xs mt-0.5" style={{ color: '#9CA3AF', fontFamily: 'Inter, sans-serif' }}>
              Campanhas otimizadas automaticamente
            </div>
          </div>
          <div
            className="text-xs px-2 py-1 rounded-full"
            style={{ background: 'rgba(16,185,129,0.12)', color: '#10B981', border: '1px solid rgba(16,185,129,0.2)' }}
          >
            ● Ao vivo
          </div>
        </div>
      </div>

      {/* Big ROI number */}
      <div className="px-5 pt-5 pb-3">
        <div className="flex items-end gap-2 mb-1">
          <span
            className="text-4xl font-extrabold"
            style={{
              background: 'linear-gradient(135deg, #FF2DA3, #7C3AED)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontFamily: 'Plus Jakarta Sans, sans-serif',
            }}
          >
            +340%
          </span>
          <span className="text-sm mb-1.5" style={{ color: '#9CA3AF', fontFamily: 'Inter, sans-serif' }}>ROI médio</span>
        </div>
        <div className="text-xs" style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'Inter, sans-serif' }}>
          vs. campanhas sem otimização por IA
        </div>
      </div>

      {/* Campaign bars */}
      <div className="px-5 pb-4 space-y-3">
        {campaigns.map((c) => (
          <div key={c.name}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs truncate" style={{ color: '#E5E7EB', fontFamily: 'Inter, sans-serif' }}>
                {c.name}
              </span>
              <span className="text-xs font-medium ml-2" style={{ color: c.color }}>
                {c.roi}
              </span>
            </div>
            <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
              <div
                className="h-full rounded-full"
                style={{
                  width: `${c.value}%`,
                  background: `linear-gradient(90deg, ${c.color}88, ${c.color})`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom stats */}
      <div
        className="grid grid-cols-3 gap-px"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.04)' }}
      >
        {[
          { label: 'Conversões', value: '1.284' },
          { label: 'Custo/lead', value: 'R$ 8,20' },
          { label: 'Otimizações', value: '247/dia' },
        ].map((s) => (
          <div key={s.label} className="p-3 text-center" style={{ background: 'rgba(5,8,20,0.5)' }}>
            <div className="text-sm font-bold" style={{ color: '#F8FAFC', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              {s.value}
            </div>
            <div className="text-xs mt-0.5" style={{ color: '#9CA3AF', fontFamily: 'Inter, sans-serif' }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
