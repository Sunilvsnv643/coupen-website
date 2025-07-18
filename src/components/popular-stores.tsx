import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function PopularStores() {
  const featuredStore = {
    name: "Ultahost",
    description: "Featured Store Of The Month",
    offers: "5 Coupons | 9 Offers Available",
    logo: "UH",
    bgColor: "bg-blue-500"
  }

  const stores = [
    { name: "Nykaa", logo: "NYKAA", color: "text-pink-500" },
    { name: "Air India", logo: "AIR INDIA", color: "text-red-500" },
    { name: "Dell", logo: "DELL", color: "text-blue-600" },
    { name: "Ajio", logo: "AJIO", color: "text-yellow-600" },
    { name: "Myntra", logo: "Myntra", color: "text-pink-600" },
    { name: "Uber", logo: "Uber", color: "text-black" },
    { name: "Amazon", logo: "amazon", color: "text-orange-500" },
    { name: "MakeMyTrip", logo: "makemytrip", color: "text-blue-500" },
    { name: "Udemy", logo: "udemy", color: "text-purple-600" },
    { name: "BigRock", logo: "BIGROCK", color: "text-green-600" },
    { name: "Samsung", logo: "SAMSUNG", color: "text-blue-700" },
    { name: "Flipkart", logo: "Flipkart", color: "text-blue-600" }
  ]

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Popular Stores
            </h2>
            <div className="w-12 md:w-16 h-1 bg-green-500 rounded"></div>
          </div>
          <div className="hidden md:flex gap-2">
            <Button variant="outline" size="sm" className="w-10 h-10 p-0">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm" className="w-10 h-10 p-0">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-3 md:gap-4">
          {/* Featured Store */}
          <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-200 rounded-lg">
            <CardContent className="p-3 md:p-4 text-center">
              <div className="text-xs text-gray-500 mb-2 hidden sm:block">{featuredStore.description}</div>
              <div className={`w-10 h-10 md:w-12 md:h-12 ${featuredStore.bgColor} rounded flex items-center justify-center mx-auto mb-2 md:mb-3 group-hover:scale-105 transition-transform duration-300`}>
                <span className="text-white font-bold text-xs md:text-sm">{featuredStore.logo}</span>
              </div>
              <h3 className="font-bold text-xs md:text-sm text-gray-900 mb-2">{featuredStore.name}</h3>
              <Badge className="bg-green-100 text-green-700 border-green-200 text-xs px-2 py-1 hidden sm:inline-flex">
                {featuredStore.offers}
              </Badge>
              <Badge className="bg-green-100 text-green-700 border-green-200 text-xs px-1 py-1 sm:hidden">
                5 Offers
              </Badge>
            </CardContent>
          </Card>

          {/* Regular Stores */}
          {stores.slice(0, 11).map((store, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-200 rounded-lg">
              <CardContent className="p-3 md:p-4 text-center flex flex-col items-center justify-center h-20 md:h-24">
                <span className={`font-bold text-sm md:text-lg ${store.color} group-hover:scale-105 transition-transform duration-300 text-center leading-tight`}>
                  {store.logo}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-6 md:mt-8 gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}