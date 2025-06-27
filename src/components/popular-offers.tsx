import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function PopularOffers() {
  const offers = [
    {
      id: 1,
      title: "GRABON EXCLUSIVE",
      description: "Exclusive Offer - Up To Rs 500 OFF On Your Bus Ticket Bookings",
      badge: "EXCLUSIVE",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop&crop=center",
      bgColor: "bg-gradient-to-br from-red-500 to-red-600",
      textColor: "text-white"
    },
    {
      id: 2,
      title: "Web Hosting @ Rs 69",
      description: "Get Web Hosting Plan at Rs 69/month + Extra 10% OFF",
      badge: "EXCLUSIVE",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center",
      bgColor: "bg-gradient-to-br from-orange-400 to-orange-500",
      textColor: "text-white"
    },
    {
      id: 3,
      title: "Up To 97% OFF",
      description: "Udemy Coupon : Save Up to 97% on Best-Selling Courses!!",
      badge: "EXCLUSIVE",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=center",
      bgColor: "bg-gradient-to-br from-purple-500 to-purple-600",
      textColor: "text-white"
    }
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Popular Offers of the Day
            </h2>
            <div className="w-16 h-1 bg-green-500 rounded"></div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="w-10 h-10 p-0">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm" className="w-10 h-10 p-0">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <Card key={offer.id} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md overflow-hidden cursor-pointer">
              <CardContent className="p-0">
                <div className="flex flex-col overflow-hidden">
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={offer.image} 
                      alt={offer.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-green-500 text-white border-0 text-xs px-2 py-1">
                        {offer.badge}
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className={`${offer.bgColor} ${offer.textColor} p-6`}>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                        <div className="w-5 h-5 bg-white/30 rounded"></div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2">{offer.title}</h3>
                        <p className="text-sm opacity-90 leading-relaxed">{offer.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}