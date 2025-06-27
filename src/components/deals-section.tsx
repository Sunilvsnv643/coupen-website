import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Star, Clock, Heart } from 'lucide-react'
import Image from 'next/image'

export function DealsSection() {
  const deals = [
    {
      id: 1,
      title: "Wireless Bluetooth Headphones",
      brand: "Sony",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop&crop=center",
      originalPrice: 4999,
      salePrice: 2499,
      discount: 50,
      rating: 4.5,
      reviews: 1250,
      timeLeft: "2h 30m",
      category: "Electronics"
    },
    {
      id: 2,
      title: "Smart Fitness Watch",
      brand: "Apple",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop&crop=center",
      originalPrice: 25900,
      salePrice: 19900,
      discount: 23,
      rating: 4.7,
      reviews: 890,
      timeLeft: "5h 15m",
      category: "Wearables"
    },
    {
      id: 3,
      title: "Gaming Mechanical Keyboard",
      brand: "Logitech",
      image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop&crop=center",
      originalPrice: 8999,
      salePrice: 5999,
      discount: 33,
      rating: 4.6,
      reviews: 567,
      timeLeft: "1h 45m",
      category: "Gaming"
    },
    {
      id: 4,
      title: "4K Ultra HD Smart TV",
      brand: "Samsung",
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop&crop=center",
      originalPrice: 45999,
      salePrice: 32999,
      discount: 28,
      rating: 4.4,
      reviews: 2100,
      timeLeft: "8h 20m",
      category: "Electronics"
    },
    {
      id: 5,
      title: "Wireless Charging Pad",
      brand: "Belkin",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop&crop=center",
      originalPrice: 2999,
      salePrice: 1499,
      discount: 50,
      rating: 4.3,
      reviews: 445,
      timeLeft: "3h 10m",
      category: "Accessories"
    },
    {
      id: 6,
      title: "Premium Coffee Maker",
      brand: "Nespresso",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop&crop=center",
      originalPrice: 12999,
      salePrice: 8999,
      discount: 31,
      rating: 4.8,
      reviews: 678,
      timeLeft: "6h 55m",
      category: "Home"
    },
    {
      id: 7,
      title: "Smartphone 128GB",
      brand: "OnePlus",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop&crop=center",
      originalPrice: 29999,
      salePrice: 24999,
      discount: 17,
      rating: 4.6,
      reviews: 3200,
      timeLeft: "4h 30m",
      category: "Mobile"
    },
    {
      id: 8,
      title: "Laptop Backpack",
      brand: "American Tourister",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop&crop=center",
      originalPrice: 3499,
      salePrice: 1999,
      discount: 43,
      rating: 4.2,
      reviews: 890,
      timeLeft: "7h 15m",
      category: "Travel"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Trending Deals
            </h2>
            <div className="w-16 h-1 bg-green-500 rounded"></div>
          </div>
        </div>

        {/* Featured Deal Banner */}
        <Card className="mb-12 bg-gradient-to-r from-blue-600 to-purple-600 border-0 overflow-hidden">
          <CardContent className="p-8 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="bg-orange-500 text-white mb-4">
                  Limited Time Offer
                </Badge>
                <h3 className="text-3xl font-bold mb-4">
                  Get 15% OFF on Everything
                </h3>
                <p className="text-xl mb-6 text-blue-100">
                  Use code SAVE15 and save on all products. Valid till midnight!
                </p>
                <div className="flex items-center gap-4">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                    Shop Now
                  </Button>
                  <div className="flex items-center gap-2 text-orange-300">
                    <Clock className="w-5 h-5" />
                    <span className="font-semibold">Ends in 12h 30m</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-8xl mb-4">🛍️</div>
                <div className="text-2xl font-bold">Save Big Today!</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {deals.map((deal) => (
            <Card key={deal.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                {/* Image Section */}
                <div className="relative bg-gray-100 overflow-hidden">
                  <div className="absolute top-2 right-2 z-10">
                    <Button size="sm" variant="ghost" className="w-8 h-8 p-0 hover:bg-white/80">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="absolute top-2 left-2 z-10">
                    <Badge className="bg-red-500 text-white">
                      {deal.discount}% OFF
                    </Badge>
                  </div>
                  <div className="relative h-48 group-hover:scale-105 transition-transform duration-300">
                    <Image 
                      src={deal.image} 
                      alt={deal.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute bottom-2 left-2 z-10">
                    <Badge variant="secondary" className="text-xs bg-white/90">
                      {deal.category}
                    </Badge>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-4">
                  <div className="mb-2">
                    <span className="text-xs text-gray-500 uppercase tracking-wide">{deal.brand}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-green-600 transition-colors">
                    {deal.title}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{deal.rating}</span>
                    </div>
                    <span className="text-xs text-gray-500">({deal.reviews})</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg font-bold text-green-600">₹{deal.salePrice.toLocaleString()}</span>
                    <span className="text-sm text-gray-500 line-through">₹{deal.originalPrice.toLocaleString()}</span>
                  </div>

                  {/* Time Left */}
                  <div className="flex items-center gap-1 text-orange-500 mb-4">
                    <Clock className="w-4 h-4" />
                    <span className="text-xs font-medium">{deal.timeLeft} left</span>
                  </div>

                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                    Buy Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg" className="px-8">
            View All Deals
          </Button>
        </div>
      </div>
    </section>
  )
}