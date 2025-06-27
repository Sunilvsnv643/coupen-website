import React from 'react'

export function PopularCategories() {
  const categories = [
    'Flight',
    'Fashion',
    'Electronics',
    'Groceries',
    'Travel',
    'Medicines',
    'Bus',
    'Education',
    'Hotel',
    'Kitchen Appliances',
    'OTT',
    'Hosting',
    'Pizza',
    'Services',
    'Footwear',
    'Food',
    'Lingerie',
    'Entertainment',
    'Bike Rentals',
    'Furniture',
    'Recharge',
    'Utility Bill Payments',
    'Gifts And Flowers',
    'Jewellery',
    'Protein Supplements',
    'Lab Tests',
    'Eyewear',
    'Kids Lifestyle',
    'Beauty',
    'Meat & Dairy'
  ]

  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <div className="flex items-center gap-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">Popular Categories</h2>
            <div className="h-1 w-16 bg-green-500 rounded"></div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 md:gap-3">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 hover:bg-green-50 border border-gray-200 hover:border-green-300 rounded-lg p-3 md:p-4 text-center cursor-pointer transition-all duration-200 group"
            >
              <span className="text-xs md:text-sm font-medium text-gray-700 group-hover:text-green-600">
                {category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}