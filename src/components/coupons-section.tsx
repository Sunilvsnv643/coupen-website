import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Clock, Copy, Star, Users, Tag, Gift, Plane, Car, Home, Smartphone, Gamepad2 } from 'lucide-react'

export function CouponsSection() {
  const categories = [
    { name: "Most Used", icon: Star, count: 150, active: true },
    { name: "Travel", icon: Plane, count: 85 },
    { name: "Food & Dining", icon: Gift, count: 120 },
    { name: "Fashion", icon: Tag, count: 200 },
    { name: "Electronics", icon: Smartphone, count: 95 },
    { name: "Home & Garden", icon: Home, count: 75 },
    { name: "Entertainment", icon: Gamepad2, count: 60 },
    { name: "Automotive", icon: Car, count: 45 }
  ]

  const coupons = [
    {
      id: 1,
      store: "Flipkart",
      title: "FLAT 50% OFF",
      description: "Get flat 50% discount on electronics and fashion items. Valid on minimum purchase of ₹1999.",
      code: "FLAT50",
      discount: "50% OFF",
      validTill: "31 Dec 2024",
      usedBy: "2.5k",
      rating: 4.8,
      logo: "🛒",
      color: "bg-blue-500"
    },
    {
      id: 2,
      store: "Amazon",
      title: "Extra ₹200 OFF",
      description: "Get extra ₹200 off on your first order. No minimum purchase required.",
      code: "FIRST200",
      discount: "₹200 OFF",
      validTill: "25 Dec 2024",
      usedBy: "1.8k",
      rating: 4.6,
      logo: "📦",
      color: "bg-orange-500"
    },
    {
      id: 3,
      store: "Myntra",
      title: "Buy 2 Get 1 FREE",
      description: "Buy any 2 fashion items and get 1 absolutely free. Valid on selected brands only.",
      code: "BUY2GET1",
      discount: "Buy 2 Get 1",
      validTill: "28 Dec 2024",
      usedBy: "3.2k",
      rating: 4.7,
      logo: "👗",
      color: "bg-pink-500"
    },
    {
      id: 4,
      store: "Zomato",
      title: "Free Delivery",
      description: "Get free delivery on all orders above ₹199. Valid for Gold members only.",
      code: "FREEDEL",
      discount: "Free Delivery",
      validTill: "30 Dec 2024",
      usedBy: "4.1k",
      rating: 4.5,
      logo: "🍕",
      color: "bg-red-500"
    },
    {
      id: 5,
      store: "BookMyShow",
      title: "₹150 OFF on Movies",
      description: "Get ₹150 off on movie tickets. Valid on weekend bookings only.",
      code: "MOVIE150",
      discount: "₹150 OFF",
      validTill: "26 Dec 2024",
      usedBy: "1.5k",
      rating: 4.4,
      logo: "🎬",
      color: "bg-purple-500"
    },
    {
      id: 6,
      store: "Swiggy",
      title: "40% OFF + Free Delivery",
      description: "Get 40% off on your order plus free delivery. Valid on orders above ₹299.",
      code: "SAVE40",
      discount: "40% OFF",
      validTill: "29 Dec 2024",
      usedBy: "2.9k",
      rating: 4.6,
      logo: "🛵",
      color: "bg-orange-600"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Today&apos;s Top Coupons & Offers
            </h2>
            <div className="w-16 h-1 bg-green-500 rounded"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="text-lg">Categories</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-1">
                  {categories.map((category, index) => {
                    const IconComponent = category.icon
                    return (
                      <div key={index}>
                        <button className={`w-full flex items-center justify-between p-3 text-left hover:bg-gray-50 transition-colors ${
                          category.active ? 'bg-green-50 text-green-700 border-r-2 border-green-500' : 'text-gray-700'
                        }`}>
                          <div className="flex items-center gap-3">
                            <IconComponent className="w-4 h-4" />
                            <span className="font-medium">{category.name}</span>
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {category.count}
                          </Badge>
                        </button>
                        {index < categories.length - 1 && <Separator />}
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Coupons Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coupons.map((coupon) => (
                <Card key={coupon.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                  <CardContent className="p-0">
                    {/* Header */}
                    <div className={`${coupon.color} p-4 text-white relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -mr-8 -mt-8"></div>
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xl">{coupon.logo}</span>
                            <span className="font-bold text-lg">{coupon.store}</span>
                          </div>
                          <Badge className="bg-white/20 text-white border-0">
                            {coupon.discount}
                          </Badge>
                        </div>
                        <h3 className="font-bold text-xl mb-1">{coupon.title}</h3>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {coupon.description}
                      </p>

                      {/* Coupon Code */}
                      <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-3 mb-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-xs text-gray-500 uppercase tracking-wide">Coupon Code</span>
                            <div className="font-mono font-bold text-lg text-gray-900">{coupon.code}</div>
                          </div>
                          <Button size="sm" variant="outline" className="gap-2">
                            <Copy className="w-4 h-4" />
                            Copy
                          </Button>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">{coupon.rating}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-600">{coupon.usedBy}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-orange-500">
                          <Clock className="w-4 h-4" />
                          <span className="text-xs">{coupon.validTill}</span>
                        </div>
                      </div>

                      <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                        Get Deal
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" size="lg" className="px-8">
                Load More Coupons
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}