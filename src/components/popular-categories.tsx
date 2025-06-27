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
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold text-gray-900">Popular Categories</h2>
            <div className="h-1 w-16 bg-green-500 rounded"></div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
          {categories.map((category, index) => (
            <div
              key={index}
              className="text-center py-2 px-3 text-sm text-gray-700 hover:text-green-600 cursor-pointer transition-colors"
            >
              {category}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}