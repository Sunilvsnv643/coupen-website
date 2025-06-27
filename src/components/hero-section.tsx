import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 py-8 md:py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/20 to-transparent"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-400/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-300/10 rounded-full blur-xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-white text-center lg:text-left order-2 lg:order-1">
            <Badge className="bg-white text-purple-700 mb-4 md:mb-6 px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm font-semibold">
              New User Special
            </Badge>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Get 80% OFF on Top Courses Today!
            </h1>
            <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white px-6 md:px-8 py-2 md:py-3 text-base md:text-lg font-semibold">
              Shop now
            </Button>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              {/* Clock illustration */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 relative">
                {/* Main illustration container */}
                <div className="absolute inset-0 bg-gray-800 rounded-full flex items-center justify-center">
                  {/* Clock face */}
                  <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-full relative flex items-center justify-center">
                    <div className="w-1.5 h-8 sm:w-2 sm:h-12 bg-gray-800 absolute top-2 sm:top-4 rounded-full"></div>
                    <div className="w-6 h-1.5 sm:w-8 sm:h-2 bg-gray-800 absolute right-6 sm:right-8 rounded-full"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gray-800 rounded-full"></div>
                  </div>
                  
                  {/* Documents/papers */}
                  <div className="absolute -bottom-6 sm:-bottom-8 -left-6 sm:-left-8">
                    <div className="w-20 h-24 sm:w-24 sm:h-32 bg-white rounded-lg shadow-lg transform rotate-12 relative">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full absolute top-3 sm:top-4 left-3 sm:left-4"></div>
                      <div className="w-8 h-1.5 sm:w-12 sm:h-2 bg-gray-300 rounded absolute top-6 sm:top-10 left-3 sm:left-4"></div>
                      <div className="w-6 h-1.5 sm:w-8 sm:h-2 bg-gray-300 rounded absolute top-8 sm:top-14 left-3 sm:left-4"></div>
                    </div>
                    <div className="w-20 h-24 sm:w-24 sm:h-32 bg-white rounded-lg shadow-lg transform -rotate-6 absolute -top-1 sm:-top-2 left-3 sm:left-4">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full absolute top-3 sm:top-4 left-3 sm:left-4"></div>
                      <div className="w-8 h-1.5 sm:w-12 sm:h-2 bg-gray-300 rounded absolute top-6 sm:top-10 left-3 sm:left-4"></div>
                      <div className="w-6 h-1.5 sm:w-8 sm:h-2 bg-gray-300 rounded absolute top-8 sm:top-14 left-3 sm:left-4"></div>
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-lg sm:text-2xl">💡</span>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-4 sm:-bottom-6 -right-8 sm:-right-12">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-400 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-sm sm:text-lg">✓</span>
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