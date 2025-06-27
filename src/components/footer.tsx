import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  Shield,
  Award,
  Users,
  Heart
} from 'lucide-react'

export function Footer() {
  const quickLinks = [
    'About Us', 'Contact Us', 'Privacy Policy', 'Terms of Service',
    'Refund Policy', 'Shipping Policy', 'FAQ', 'Sitemap'
  ]



  const popularStores = [
    'Amazon', 'Flipkart', 'Myntra', 'Ajio',
    'Nykaa', 'BigBasket', 'Swiggy', 'Zomato'
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-green-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Get The Latest & Best Coupon/Offer Alerts
              </h3>
              <p className="text-green-100">
                Subscribe to our newsletter and never miss a deal!
              </p>
            </div>
            <div className="flex gap-3">
              <Input 
                placeholder="Enter your email address" 
                className="bg-white text-gray-900 border-0 flex-1"
              />
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">G</span>
                </div>
                <span className="text-xl font-bold">GrabOn</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                India's largest platform for coupons, deals, and cashback offers. 
                Save money on every purchase with verified promo codes.
              </p>
              <div className="flex gap-4">
                <Button size="sm" variant="ghost" className="w-10 h-10 p-0 hover:bg-gray-800">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button size="sm" variant="ghost" className="w-10 h-10 p-0 hover:bg-gray-800">
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button size="sm" variant="ghost" className="w-10 h-10 p-0 hover:bg-gray-800">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button size="sm" variant="ghost" className="w-10 h-10 p-0 hover:bg-gray-800">
                  <Youtube className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>



            {/* Popular Stores */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Popular Stores</h4>
              <ul className="space-y-3">
                {popularStores.map((store, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {store}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Separator className="my-12 bg-gray-700" />

          {/* Contact Info & Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-green-500" />
                  <span className="text-gray-400">support@grabon.in</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-green-500" />
                  <span className="text-gray-400">+91 80-4718-8999</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-green-500" />
                  <span className="text-gray-400">Bangalore, Karnataka, India</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Why Choose GrabOn?</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-green-500" />
                  <div>
                    <div className="font-semibold">10M+</div>
                    <div className="text-sm text-gray-400">Happy Users</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-green-500" />
                  <div>
                    <div className="font-semibold">50K+</div>
                    <div className="text-sm text-gray-400">Active Deals</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-green-500" />
                  <div>
                    <div className="font-semibold">100%</div>
                    <div className="text-sm text-gray-400">Verified</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-green-500" />
                  <div>
                    <div className="font-semibold">₹500Cr+</div>
                    <div className="text-sm text-gray-400">Saved</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-gray-700" />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 GrabOn. All rights reserved. Made with ❤️ in India
            </div>
            <div className="flex items-center gap-6">
              <Badge variant="secondary" className="bg-gray-800 text-gray-300">
                #SaveOnGrabOn
              </Badge>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
                <a href="#" className="hover:text-white transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}