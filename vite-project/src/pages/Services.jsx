import React from 'react';

export default function Services() {
  return (
    <div className="min-h-screen bg-white text-gray-800 py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Services
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We build all types of business websites — from simple corporate sites to advanced e-commerce, 
            booking systems, web apps, and complete digital solutions.
          </p>

          <div className="mt-10 flex justify-center gap-6">
     {/* Call Button */}
<button
  onClick={() => window.location.href = 'tel:+919399882934'}
  className="bg-black text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition"
>
  Call to action
</button>

{/* Email Button - ab aapka real email daal diya hai */}
<button
  onClick={() => {
    window.location.href = 'mailto:adityajainghetal@gmail.com?subject=Course%20की%20जानकारी%20चाहिए&body=नमस्ते%20आदित्य%20सर,%0D%0A%0D%0Aमैं%20आपके%20कोर्स%20के%20बारे%20में%20जानकारी%20लेना%20चाहता/चाहती%20हूँ।%0D%0Aकृपया%20fees,%20duration,%20batch%20timing%20और%20अगला%20batch%20कब%20शुरू%20हो%20रहा%20है,%20ये%20सारी%20डिटेल्स%20भेज%20दें।%0D%0A%0D%0Aधन्यवाद!%0D%0A%0D%0Aनाम:%20%0D%0Aमोबाइल:%20';
  }}
  className="border-2 border-gray-300 text-gray-700 px-10 py-4 rounded-full text-lg font-semibold hover:border-black transition ml-4"
>
  Send Email
</button>
          </div>
        </div>

        {/* Jeetweb Services Intro */}
        <div className="bg-gradient-to-r from-indigo-900 to-blue-900 text-white py-16 px-10 rounded-3xl mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Jeetweb Services</h2>
          <p className="text-lg leading-relaxed max-w-5xl">
            Jeetweb delivers smart digital solutions designed to attract customers, build trust, and accelerate business growth. 
            We create modern, high-speed, mobile-friendly websites that instantly make your brand look professional and credible. 
            Our custom Android and iOS apps help businesses automate operations and increase customer engagement. 
            With powerful branding and graphic design we shape a visual identity that grabs attention and stays memorable. 
            Our digital marketing strategies—SEO, Google Ads, Meta Ads, and targeted lead generation—are crafted to convert clicks into real customers. 
            At Jeetweb, we focus on quality, speed, and long-term results that help your business grow confidently.
          </p>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
            We build all types of business websites that create<br />
            <span className="text-indigo-700">trust, attract customers, and convert your</span><br />
            <span className="text-indigo-700">traffic into sales.</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          
          {/* Company Websites */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition">
            <div className="text-5xl mb-6">Company</div>
            <h3 className="text-2xl font-bold mb-5">Company Websites</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center"><span className="text-indigo-600 mr-3">›</span> Business portfolio website</li>
              <li className="flex items-center"><span className="text-indigo-600 mr-3">›</span> Company profile website</li>
              <li className="flex items-center"><span className="text-indigo-600 mr-3">›</span> About, services, careers, contact pages</li>
            </ul>
          </div>

          {/* Service-Based Business */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition">
            <div className="text-5xl mb-6">Service</div>
            <h3 className="text-2xl font-bold mb-5">Service-Based Business Websites the idea</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center"><span className="text-indigo-600 mr-3">›</span> Coaching website</li>
              <li className="flex items-center"><span className="text-indigo-600 mr-3">›</span> Agency website</li>
              <li className="flex items-center"><span className="text-indigo-600 mr-3">›</span> Freelancer website</li>
              <li className="flex items-center"><span className="text-indigo-600 mr-3">›</span> Consultation booking website</li>
            </ul>
          </div>

          {/* Personal Branding */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition">
            <div className="text-5xl mb-6">Person</div>
            <h3 className="text-2xl font-bold mb-5">Personal Branding Websites</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center"><span className="text-indigo-600 mr-3">›</span> Portfolio website</li>
              <li className="flex items-center"><span className="text-indigo-600 mr-3">›</span> Influencer website</li>
              <li className="flex items-center"><span className="text-indigo-600 mr-3">›</span> Author / speaker website</li>
              <li className="flex items-center"><span className="text-indigo-600 mr-3">›</span> Resume website</li>
            </ul>
          </div>

          {/* Local Business */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition">
            <div className="text-5xl mb-6">Location</div>
            <h3 className="text-2xl font-bold mb-5">Local Business Websites</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center"><span className="text-indigo-600 mr-3">›</span> Restaurants</li>
              <li className="flex items-center"><span className="text-indigo-600 mr-3">›</span> Gym & fitness</li>
              <li className="flex items-center"><span className="text-indigo-600 mr-3">›</span> Salons</li>
              <li className="flex items-center"><span className="text-indigo-600 mr-3">›</span> Real estate businesses</li>
            </ul>
          </div>

          {/* Booking & Appointment */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition">
            <div className="text-5xl mb-6">Calendar</div>
            <h3 className="text-2xl font-bold mb-5">Booking & Appointment Websites</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center"><span className="text-indigo-600 mr-3">›</span> Doctor appointment system</li>
              <li className="flex items-center"><span className="text-indigo-600 mr-3">›</span> Salon booking</li>
              <li className="flex items-center"><span className="text-indigo-600 mr-3">›</span> Event booking</li>
              <li className="flex items-center"><span className="text-indigo-600 mr-3">›</span> Online scheduling system</li>
            </ul>
          </div>

          {/* Professional Service */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition">
            <div className="text-5xl mb-6">Briefcase</div>
            <h3 className="text-2xl font-bold mb-5">Professional Service Websites</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center"><span className="text-indigo-600 mr-3">›</span> Lawyers</li>
              <li className="flex items-center"><span className="text-indigo-600 mr-3">›</span> CA / Finance</li>
              <li className="flex items-center"><span className="text-indigo-600 mr-3">›</span> Consultants</li>
              <li className="flex items-center"><span className="text-indigo-600 mr-3">›</span> Architecture & interior</li>
            </ul>
          </div>

          {/* Educational */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition">
            <div className="text-5xl mb-6">GraduationCap</div>
            <h3 className="text-2xl font-bold mb-5">Educational Websites</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center"><span className="text-indigo-600 mr-3">›</span> Coaching institute</li>
              <li className="flex items-center"><span className="text-indigo-600 mr-3">›</span> LMS (Learning Management System)</li>
              <li className="flex items-center"><span className="text-indigo-600 mr-3">›</span> Online courses website</li>
              <li className="flex items-center"><span className="text-indigo-600 mr-3">›</span> Digital classroom</li>
            </ul>
          </div>

          {/* Marketplace */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition">
            <div className="text-5xl mb-6">Store</div>
            <h3 className="text-2xl font-bold mb-5">Marketplace Websites</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center"><span className="text-indigo-600 mr-3">›</span> Multi-vendor marketplace</li>
              <li className="flex items-center"><span className="text-indigo-600 mr-3">›</span> Service marketplace</li>
              <li className="flex items-center"><span className="text-indigo-600 mr-3">›</span> Rental marketplace</li>
            </ul>
          </div>

          {/* Blogging & News */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition">
            <div className="text-5xl mb-6">Newspaper</div>
            <h3 className="text-2xl font-bold mb-5">Blogging & News Websites</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center"><span className="text-indigo-600 mr-3">›</span> Magazine style</li>
              <li className="flex items-center"><span className="text-indigo-600 mr-3">›</span> News portal</li>
              <li className="flex items-center"><span className="text-indigo-600 mr-3">›</span> Content management system</li>
            </ul>
          </div>

        </div>
      </div>


  
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-blue-50 to-green-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Main Heading */}
        <h1 className="text-center text-5xl md:text-6xl font-black text-gray-900 mb-16 text-center">
          Why Choose Us
        </h1>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">

          {/* Card 1 - OUR MISSION */}
          <div className="bg-gradient-to-br from-cyan-400 to-blue-600 text-white rounded-3xl p-10 shadow-2xl transform hover:scale-105 transition duration-300">
            <h2 className="text-4xl font-black mb-8 opacity-90">OUR MISSION</h2>
            <ul className="text-lg space-y-5 font-medium">
              <li>1. Help businesses look more professional so customers choose them instantly.</li>
              <li>2. Build high-impact websites and apps that increase leads and sales automatically.</li>
              <li>3. Create branding that makes people remember and trust your business.</li>
              <li>4. Use smart digital marketing to turn clicks into real paying customers.</li>
              <li>5. Deliver fast, affordable solutions so growth never feels difficult.</li>
            </ul>
          </div>

          {/* Card 2 - WHAT WE BUILD */}
          <div className="bg-gradient-to-br from-green-400 to-teal-500 text-white rounded-3xl p-10 shadow-2xl transform hover:scale-105 transition duration-300">
            <h2 className="text-4xl font-black mb-8 opacity-90">WHAT WE BUILD</h2>
            <ul className="text-lg space-y-5 font-medium">
              <li>1. High-performance business website.</li>
              <li>2. Custom Android & iOS mobile apps.</li>
              <li>3. Professional logos and brand identity.</li>
              <li>4. Sales-focused landing pages.</li>
              <li>5. E-commerce and service platforms.</li>
            </ul>
          </div>

         
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-3xl p-10 shadow-2xl transform hover:scale-105 transition duration-300">
            <h2 className="text-4xl font-black mb-8 opacity-90">WHAT WE DO</h2>
            <ul className="text-lg space-y-5 font-medium">
              <li>1. Design and develop high-quality websites that build trust and convert visitors into customers.</li>
              <li>2. Create custom mobile apps to automate business operations and boost user engagement.</li>
              <li>3. Build strong brand identities through logos, graphics, and premium visual design.</li>
              <li>4. Run data-driven digital marketing campaigns that generate real leads and measurable growth.</li>
              <li>5. Develop scalable tech solutions tailored to each business’s goals and industry needs.</li>
            </ul>
          </div>

          {/* Card 4 - OUR PROCESS */}
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-3xl p-10 shadow-2xl transform hover:scale-105 transition duration-300">
            <h2 className="text-4xl font-black mb-8 opacity-90">OUR PROCESS</h2>
            <ul className="text-lg space-y-5 font-medium">
              <li>1. Discovery & Understanding: We listen to your goals, challenges, and expectations to understand exactly what your business needs.</li>
              <li>2. Planning & Strategy: We create a clear action plan focused on design, technology, and marketing — to deliver the best results.</li>
              <li>3. Design & Prototype: Our team prepares modern UI/UX designs and shows you a demo so you can see how your project will look.</li>
              <li>4. Development & Build: We convert the design into a working website, app, or digital system using clean and scalable code.</li>
              <li>5. Testing & Quality Check: Every feature is tested for speed, security, and performance to ensure a flawless user experience.</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
<div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-center text-5xl md:text-6xl font-black text-blue-900 mb-16">
          Choose Your Perfect Plan
        </h2>

        {/* 4 Pricing Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* BASIC - Single Page */}
          <div className="relative bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-300">
            <div className="absolute top-0 right-0 bg-yellow-400 text-black font-bold px-8 py-2 rounded-bl-3xl">
              SPECIAL OFFER
            </div>
            <div className="p-8 pt-12">
              <h3 className="text-3xl font-black mb-2">BASIC</h3>
              <p className="text-xl font-light opacity-90">Single Page Website</p>
              <p className="text-sm mt-2 opacity-80">Ideal for: Small business | Personal website</p>

              <ul className="mt-8 space-y-3 text-left">
                <li>Limited Offer: 1 Year Free Domain & Hosting</li>
                <li>Full Custom Coding (No WordPress)</li>
                <li>1 Template</li>
                <li>Contact Form + Social Media Integration</li>
                <li>Full Responsive Design</li>
                <li>SSL Certificate Included</li>
                <li>Pages: Home + 3 Basic Pages</li>
                <li>Basic UI/UX Design & Standard Layout</li>
                <li>6 Months Support & Minor Updates</li>
                <li>Basic SEO Setup (On-Page + Technical)</li>
              </ul>

              <div className="mt-10 text-center">
                <p className="text-4xl line-through opacity-70">₹12,000</p>
                <p className="text-6xl font-black mt-2">5,999</p>
                <button className="mt-6 bg-white text-blue-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/* STANDARD - Multi Page (Best Selling) */}
          <div className="relative bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-300 border-4 border-yellow-400">
            <div className="absolute -top-1 -right-1 bg-yellow-400 text-black font-bold px-10 py-3 rounded-bl-3xl text-xl">
              BEST SELLING
            </div>
            <div className="p-8 pt-14">
              <h3 className="text-3xl font-black mb-2">STANDARD</h3>
              <p className="text-xl font-light opacity-90">Multi Page Best Selling</p>

              <ul className="mt-8 space-y-3 text-left text-sm">
                <li>Limited Offer: 1 Year Free Domain & Hosting</li>
                <li>Basic E-commerce Setup (up to 10 Products)</li>
                <li>Full Custom Coding</li>
                <li>Full Responsive Design</li>
                <li>SSL Certificate Included</li>
                <li>Pages: 10-15 Customizable Pages</li>
                <li>Blog / News Section</li>
                <li>6 Months Support & Updates</li>
                <li>Advance UI/UX Design</li>
                <li>WhatsApp Integration</li>
                <li>Newsletter / Email Subscription Setup</li>
                <li>SEO Optimization (On-Page + Technical)</li>
              </ul>

              <div className="mt-8 text-center">
                <p className="text-4xl line-through opacity-70">₹18,000</p>
                <p className="text-6xl font-black mt-2">9,999</p>
                <button className="mt-6 bg-white text-cyan-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/* ADVANCE - Fully Functional */}
          <div className="relative bg-gradient-to-br from-purple-600 to-blue-800 text-white rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-300">
            <div className="absolute top-0 right-0 bg-orange-500 text-black font-bold px-8 py-2 rounded-bl-3xl">
              SPECIAL OFFER
            </div>
            <div className="p-8 pt-12">
              <h3 className="text-3xl font-black mb-2">ADVANCE</h3>
              <p className="text-xl font-light opacity-90">Fully Functional (Dynamic)</p>

              <ul className="mt-8 space-y-3 text-left text-sm">
                <li>Limited Offer: 1 Year Free Domain + Premium Hosting</li>
                <li>25 Products (E-commerce Ready)</li>
                <li>Admin Panel + User Login System</li>
                <li>Payment Gateway Integration</li>
                <li>Full Custom Coding (No Template)</li>
                <li>Advanced SEO & Performance Optimization</li>
                <li>Live Chat + WhatsApp API</li>
                <li>Full Responsive Design</li>
                <li>SSL Certificate + Speed Optimization</li>
                <li>Pages: Unlimited</li>
                <li>1 Year Free Support</li>
                <li>Marketing & Google Tools Setup</li>
              </ul>

              <div className="mt-8 text-center">
                <p className="text-4xl line-through opacity-70">₹40,000</p>
                <p className="text-6xl font-black mt-2">14,999</p>
                <button className="mt-6 bg-white text-purple-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/* PREMIUM - Fully Functional Premium */}
          <div className="relative bg-gradient-to-br from-pink-600 to-purple-800 text-white rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-300">
            <div className="absolute top-0 right-0 bg-red-600 text-white font-bold px-8 py-2 rounded-bl-3xl blink">
              SPECIAL OFFER
            </div>
            <div className="p-8 pt-12">
              <h3 className="text-3xl font-black mb-2">PREMIUM</h3>
              <p className="text-xl font-light opacity-90">Fully Functional Premium Website</p>

              <ul className="mt-8 space-y-3 text-left text-sm">
                <li>Limited Offer: 1 Year Free Domain & Hosting</li>
                <li>All Admin Features (Commercial Use)</li>
                <li>Unlimited Products / Services</li>
                <li>Advance SEO & Performance Optimization</li>
                <li>Payment Gateway + Wallet System</li>
                <li>Full Custom Coding (No Template)</li>
                <li>Multi-Language + Multi-Currency</li>
                <li>Live Chat + WhatsApp Business API</li>
                <li>1 Year Full Support & Updates</li>
                <li>Dedicated 1 Year Technical Support</li>
              </ul>

              <div className="mt-8 text-center">
                <p className="text-4xl line-through opacity-70">₹60,000</p>
                <p className="text-6xl font-black mt-2">24,999</p>
                <button className="mt-6 bg-white text-pink-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition">
                  Get Started
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    </div>
  );
}
