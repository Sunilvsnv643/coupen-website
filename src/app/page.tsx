import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { PopularOffers } from '@/components/popular-offers'
import { PopularStores } from '@/components/popular-stores'
import { CouponsSection } from '@/components/coupons-section'
import { DealsSection } from '@/components/deals-section'
import { PopularCategories } from '@/components/popular-categories'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <PopularOffers />
      <PopularStores />
      <CouponsSection />
      <DealsSection />
      <PopularCategories />
      <Footer />
    </div>
  );
}
