import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/20 to-transparent"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-400/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-300/10 rounded-full blur-xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white text-center lg:text-left">
            <Badge className="bg-white text-purple-700 mb-6 px-4 py-2 text-sm font-semibold">
              New User Special
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Get 80% OFF on Top Courses Today!
            </h1>
            <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 text-lg font-semibold">
              Shop now
            </Button>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Clock illustration */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
                {/* Main illustration container */}
                <div className="absolute inset-0 bg-gray-800 rounded-full flex items-center justify-center">
                  {/* Clock face */}
                  <div className="w-32 h-32 bg-white rounded-full relative flex items-center justify-center">
                    <div className="w-2 h-12 bg-gray-800 absolute top-4 rounded-full"></div>
                    <div className="w-8 h-2 bg-gray-800 absolute right-8 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                  </div>
                  
                  {/* Documents/papers */}
                  <div className="absolute -bottom-8 -left-8">
                    <div className="w-24 h-32 bg-white rounded-lg shadow-lg transform rotate-12 relative">
                      <div className="w-4 h-4 bg-red-500 rounded-full absolute top-4 left-4"></div>
                      <div className="w-12 h-2 bg-gray-300 rounded absolute top-10 left-4"></div>
                      <div className="w-8 h-2 bg-gray-300 rounded absolute top-14 left-4"></div>
                    </div>
                    <div className="w-24 h-32 bg-white rounded-lg shadow-lg transform -rotate-6 absolute -top-2 left-4">
                      <div className="w-12 h-2 bg-gray-300 rounded absolute top-4 left-4"></div>
                      <div className="w-8 h-2 bg-gray-300 rounded absolute top-8 left-4"></div>
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