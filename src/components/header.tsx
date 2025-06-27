'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, Bell, ChevronDown, Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <span className="text-xl md:text-2xl font-bold text-green-600">GrabOn</span>
                <span className="text-xs text-gray-500 ml-1 hidden sm:inline">SAVE ON EVERYTHING</span>
              </div>
            </div>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                type="text"
                placeholder="Search for brands, categories"
                className="pl-10 pr-4 py-2 w-full border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
              />
            </div>
          </div>

          {/* Right side items */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Mobile Search Button */}
            <Button variant="ghost" size="sm" className="md:hidden p-2">
              <Search className="h-5 w-5 text-gray-600" />
            </Button>
            
            {/* Country Selector - Hidden on small mobile */}
            <div className="hidden sm:flex items-center space-x-1 cursor-pointer">
              <div className="w-6 h-4 bg-orange-500 rounded-sm flex items-center justify-center">
                <div className="w-4 h-3 bg-white rounded-sm flex">
                  <div className="w-1/3 bg-orange-500"></div>
                  <div className="w-1/3 bg-white"></div>
                  <div className="w-1/3 bg-green-600"></div>
                </div>
              </div>
              <span className="text-sm font-medium text-gray-700">IN</span>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </div>

            {/* Notification */}
            <div className="relative">
              <Bell className="h-5 w-5 md:h-6 md:w-6 text-gray-600 cursor-pointer hover:text-green-600" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 md:h-5 md:w-5 flex items-center justify-center text-[10px] md:text-xs">
                2
              </span>
            </div>

            {/* Login/Signup Button - Responsive */}
            <Button className="bg-green-600 hover:bg-green-700 text-white px-2 md:px-4 py-2 rounded-lg text-xs md:text-sm font-medium">
              <span className="hidden sm:inline">Log In / Sign Up</span>
              <span className="sm:hidden">Login</span>
            </Button>
            
            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block border-t border-gray-200 py-3">
          <div className="flex items-center justify-between">
            <div className="flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium flex items-center">
                Stores
              </a>
              <a href="#" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium flex items-center">
                Categories
              </a>
              <a href="#" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium flex items-center">
                Indulge
              </a>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-gray-600 hover:text-green-600">
                Submit Coupon
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-green-600">
                Deals Of The Day
              </a>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            {/* Mobile Search */}
            <div className="mb-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="text"
                  placeholder="Search for brands, categories"
                  className="pl-10 pr-4 py-2 w-full border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                />
              </div>
            </div>
            
            {/* Mobile Navigation Links */}
            <div className="space-y-2">
              <a href="#" className="block text-gray-700 hover:text-green-600 px-3 py-2 text-base font-medium">
                Stores
              </a>
              <a href="#" className="block text-gray-700 hover:text-green-600 px-3 py-2 text-base font-medium">
                Categories
              </a>
              <a href="#" className="block text-gray-700 hover:text-green-600 px-3 py-2 text-base font-medium">
                Indulge
              </a>
              <div className="border-t border-gray-200 pt-2 mt-2">
                <a href="#" className="block text-gray-600 hover:text-green-600 px-3 py-2 text-sm">
                  Submit Coupon
                </a>
                <a href="#" className="block text-gray-600 hover:text-green-600 px-3 py-2 text-sm">
                  Deals Of The Day
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}