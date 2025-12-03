import React from 'react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Main Title */}
        <h1 className="text-center text-5xl md:text-6xl font-black text-gray-900 mb-16">
          Why a Website is Important Today
        </h1>

        {/* Images Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?w=800" alt="Sales" className="w-full h-64 object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800" alt="Team" className="w-full h-64 object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800" alt="SEO" className="w-full h-64 object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800" alt="Jetweb" className="w-full h-64 object-cover" />
          </div>
        </div>

        {/* Two Columns Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">

          {/* Left Column - Why a Website is Important */}
          <div>
            <h2 className="text-4xl font-black text-blue-900 mb-10">
              Why a Website is Important Today
            </h2>

            <ul className="space-y-8 text-lg text-gray-700">
              <li className="flex">
                <span className="text-blue-600 text-4xl mr-6">•</span>
                <div>
                  <strong className="block text-xl mb-2">First impression of your business</strong>
                  Today, customers check your business online before buying. A website is your 24×7 showroom in their front and credibility.
                </div>
              </li>

              <li className="flex">
                <span className="text-blue-600 text-4xl mr-6">•</span>
                <div>
                  <strong className="block text-xl mb-2">24×7 Sales Machine</strong>
                  Automatic booking, inquiry, ordering, payment — your website keeps selling even when you’re sleeping.
                </div>
              </li>

              <li className="flex">
                <span className="text-blue-600 text-4xl mr-6">•</span>
                <div>
                  <strong className="block text-xl mb-2">Customers compare businesses online</strong>
                  If you don’t have a website and your competitor does, you’ve already lost 70% customers instantly.
                </div>
              </li>

              <li className="flex">
                <span className="text-blue-600 text-4xl mr-6">•</span>
                <div>
                  <strong className="block text-xl mb-2">Shows professional & brand value</strong>
                  A clean website tells customers: “We are serious, trustworthy, and here to stay.”
                </div>
              </li>

              <li className="flex">
                <span className="text-blue-600 text-4xl mr-6">•</span>
                <div>
                  <strong className="block text-xl mb-2">Google Search Visibility</strong>
                  You appear when customers search “best “near me”, “best coaching”, “best salon” etc.
                </div>
              </li>

              <li className="flex">
                <span className="text-blue-600 text-4xl mr-6">•</span>
                <div>
                  <strong className="block text-xl mb-2">Increases conversions</strong>
                  A website converts 10x customers — booking, inquiry, payment — without you doing anything.
                </div>
              </li>

              <li className="flex">
                <span className="text-blue-600 text-4xl mr-6">•</span>
                <div>
                  <strong className="block text-xl mb-2">Essential for advertising</strong>
                  Facebook, Google Ads, WhatsApp marketing — sab website pe traffic bhejte hain.
                </div>
              </li>

              <li className="flex">
                <span className="text-blue-600 text-4xl mr-6">•</span>
                <div>
                  <strong className="block text-xl mb-2">Builds Long-Term Digital Authority</strong>
                  A website stores all your content, testimonials, products, and reviews — your digital asset that grows over time.
                </div>
              </li>
            </ul>
          </div>

          {/* Right Column - How Jeetweb Helps */}
          <div className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white rounded-3xl p-12 shadow-2xl">
            <h2 className="text-4xl font-black mb-10">
              How Jeetweb Helps Businesses Grow
            </h2>

            <ul className="space-y-7 text-lg">
              <li className="flex items-start">
                <span className="text-yellow-400 text-3xl mr-5">✓</span>
                <div>
                  <strong className="block text-xl mb-1">Premium Business Websites</strong>
                  Speed-loaded, mobile-first, fully professional websites that build trust and sales.
                </div>
              </li>

              <li className="flex items-start">
                <span className="text-yellow-400 text-3xl mr-5">✓</span>
                <div>
                  <strong className="block text-xl mb-1">Lead Generation System</strong>
                  We design websites that convert visitors into real customers — more calls, inquiries, bookings.
                </div>
              </li>

              <li className="flex items-start">
                <span className="text-yellow-400 text-3xl mr-5">✓</span>
                <div>
                  <strong className="block text-xl mb-1">Google Ranking (SEO)</strong>
                  Websites that rank top on Google for your city, service, and keywords.
                </div>
              </li>

              <li className="flex items-start">
                <span className="text-yellow-400 text-3xl mr-5">✓</span>
                <div>
                  <strong className="block text-xl mb-1">Branding & Identity</strong>
                  Logo, colors, professional images — we make your business look premium.
                </div>
              </li>

              <li className="flex items-start">
                <span className="text-yellow-400 text-3xl mr-5">✓</span>
                <div>
                  <strong className="block text-xl mb-1">Automation & Customer Management</strong>
                  Auto-reply WhatsApp, booking system, payment, CRM — everything automatic.
                </div>
              </li>

              <li className="flex items-start">
                <span className="text-yellow-400 text-3xl mr-5">✓</span>
                <div>
                  <strong className="block text-xl mb-1">Fast Delivery & High Quality</strong>
                  Most websites delivered in 7–15 days with 100% satisfaction.
                </div>
              </li>

              <li className="flex items-start">
                <span className="text-yellow-400 text-3xl mr-5">✓</span>
                <div>
                  <strong className="block text-xl mb-1">Perfect for All Types of Businesses</strong>
                  Coaching, salon, doctor, real estate, e-commerce, startup — we’ve done it all.
                </div>
              </li>

              <li className="flex items-start">
                <span className="text-yellow-400 text-3xl mr-5">✓</span>
                <div>
                  <strong className="block text-xl mb-1">Ongoing support and maintenance</strong>
                  Free support for months + lifetime minor updates.
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>


    <div className="min-h-screen bg-sky-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-black text-gray-900 text-center mb-6">
          Our Portfolio
        </h1>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Our best work from different industries
        </p>

        {/* Portfolio Grid - 4 columns on desktop, responsive */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap- gap-8">

          {/* 1 */}
          <div className="group cursor-pointer">
            <div className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-3">
              <img 
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800" 
                alt="Solar Panel Website" 
                className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
            <p className="mt-4 text-lg font-semibold text-center text-gray-800">Solar Panel Company</p>
          </div>

          {/* 2 */}
          <div className="group cursor-pointer">
            <div className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-3">
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800" 
                alt="Restaurant Website" 
                className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
            <p className="mt-4 text-lg font-semibold text-center text-gray-800">Multi-Cuisine Restaurant</p>
          </div>

          {/* 3 */}
          <div className="group cursor-pointer">
            <div className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-3">
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800" 
                alt="Food Delivery App" 
                className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
            <p className="mt-4 text-lg font-semibold text-center text-gray-800">Food Ordering Platform</p>
          </div>

          {/* 4 */}
          <div className="group cursor-pointer">
            <div className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-3">
              <img 
                src="https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?w=800" 
                alt="Gym Website" 
                className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
            <p className="mt-4 text-lg font-semibold text-center text-gray-800">Fitness & Gym Chain</p>
          </div>

          {/* 5 */}
          <div className="group cursor-pointer">
            <div className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-3">
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800" 
                alt="Fashion Store" 
                className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
            <p className="mt-4 text-lg font-semibold text-center text-gray-800">Fashion Boutique</p>
          </div>

          {/* 6 */}
          <div className="group cursor-pointer">
            <div className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-3">
              <img 
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800" 
                alt="Solar Energy" 
                className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
            <p className="mt-4 text-lg font-semibold text-center text-gray-800">Solar Energy</p>
          </div>

          {/* 7 */}
          <div className="group cursor-pointer">
            <div className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-3">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800" 
                alt="Corporate Website" 
                className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
            <p className="mt-4 text-lg font-semibold text-center text-gray-800">Corporate Business</p>
          </div>

          {/* 8 */}
          <div className="group cursor-pointer">
            <div className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-3">
              <img 
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800" 
                alt="Automotive Website" 
                className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
            <p className="mt-4 text-lg font-semibold text-center text-gray-800">Luxury Car Dealership</p>
          </div>

        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <button className="bg-blue-700 text-white px-12 py-5 rounded-full text-xl font-bold hover:bg-blue-800 transition shadow-lg hover:shadow-2xl">
            View All Projects →
          </button>
        </div>

      </div>
    </div>
 <div className="bg-gray-200 py-24">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-10">
            Summary
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-medium">
            A website is the most important business tool today. Jeetweb builds 
            powerful, trust-focused and lead-generating websites that help 
            businesses grow, rank higher on Google, and convert more customers.
          </p>
        </div>
      </div>

      {/* Call to Action Section - White */}
      <div className="bg-white py-24">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-12">
            Let's work together
          </h2>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
           {/* Call Button - Direct Call */}
<button
  onClick={() => window.location.href = 'tel:+919399882934'}
  className="bg-black text-white px-12 py-5 rounded-full text-xl font-bold hover:bg-gray-800 transition shadow-lg"
>
  Call Now
</button>

{/* Email Button - Book Demo */}
<button
  onClick={() => {
    window.location.href = 'mailto:adityajainghetal@gmail.com?subject=Book%20Demo%20Class%20Request&body=नमस्ते%20आदित्य%20सर,%0D%0A%0D%0Aमैं%20आपके%20कोर्स%20की%20Free%20Demo%20Class%20बुक%20करना%20चाहता/चाहती%20हूँ।%0D%0A%0D%0Aकृपया%20मुझे%20उपलब्ध%20Demo%20Slots%20बताएं%20या%20मेरा%20Demo%20Schedule%20कर%20दें।%0D%0A%0D%0Aनाम:%20%0D%0Aमोबाइल%20नंबर:%20%0D%0Aशहर:%20%0D%0A%0D%0Aधन्यवाद!%0D%0Aजल्दी%20रिप्लाई%20की%20प्रतीक्षा%20में...';
  }}
  className="border-2 border-gray-800 text-gray-900 px-12 py-5 rounded-full text-xl font-bold hover:bg-gray-100 transition ml-4"
>
  Book Our Demo
</button>
          </div>
        </div>
      </div>
    </div>
  );
}