import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { DoresSection } from './components/DoresSection'
import { IAAtendimentoSection } from './components/IAAtendimentoSection'
import { IATrafegoSection } from './components/IATrafegoSection'
import { InstitucionalSection } from './components/InstitucionalSection'
import { SiteTypesSection } from './components/SiteTypesSection'
import { PlanosSection } from './components/PlanosSection'
import { ProvasSocialSection } from './components/ProvasSocialSection'
import { CTAFinalSection } from './components/CTAFinalSection'
import { Footer } from './components/Footer'
import { FloatingWhatsApp } from './components/FloatingWhatsApp'

export default function App() {
  return (
    <div className="page-shell" style={{ background: '#050814' }}>
      <div className="page-frame">
        <Header />
        <main>
          <HeroSection />
          <DoresSection />
          <IAAtendimentoSection />
          <IATrafegoSection />
          <InstitucionalSection />
          <SiteTypesSection />
          <PlanosSection />
          <ProvasSocialSection />
          <CTAFinalSection />
        </main>
        <Footer />
      </div>
      <FloatingWhatsApp />
    </div>
  )
}


