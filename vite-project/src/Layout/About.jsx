// import React from "react";

//    import { motion } from "framer-motion";
// export default function About() {
//   return (
//     <>
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 text-white py-24">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
//           <div className="flex justify-center space-x-4">
//             <a href="#" className="text-white/80 hover:text-white transition">Home</a>
//             <span>/</span>
//             <a href="#" className="text-white">About Us</a>
//           </div>
//         </div>
//       </section>

//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
//           <div>
//             <h2 className="text-4xl font-bold text-gray-900 mb-6">
//               Empower Your Business Growth<br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-600">
//                 Unlock the future with Jeetweb
//               </span>
//             </h2>
//             <p className="text-gray-600 leading-relaxed mb-6">
//               At Jeetweb, we specialize in building powerful, scalable, and beautiful digital solutions that help businesses grow faster in the modern world. From stunning websites to AI-powered applications — we deliver excellence.
//             </p>
//             <p className="text-gray-600 leading-relaxed">
//               With a perfect blend of creativity, technology, and strategy, we turn your vision into reality.
//             </p>
//             <button className="mt-8 bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition shadow-lg">
//               Get Started
//             </button>
//           </div>

//           <div className="relative">
//             <img
//               src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
//               alt="Jeetweb Team"
//               className="rounded-2xl shadow-2xl"
//             />
//             <div className="absolute -top-6 -right-6 bg-gradient-to-br from-cyan-400 to-purple-600 text-white px-8 py-4 rounded-xl shadow-xl text-2xl font-bold">
//               Jeetweb
//             </div>
//           </div>
//         </div>
//       </section>

    

  


//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4">
//       <div className="max-w-5xl mx-auto">

//         {/* Hero Title - Compact & Powerful */}
//         <motion.div 
//           initial={{ y: -40, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-12"
//         >
//           <h1 className="text-5xl md:text-7xl font-extrabold text-indigo-900 mb-2">
//             JEETWEB™
//           </h1>
//           <h2 className="text-2xl md:text-4xl font-bold text-indigo-700">
//             WEB API 
//             <span className="ml-3 text-sm md:text-lg align-top bg-gradient-to-r from-blue-600 to-purple-700 text-white px-4 py-2 rounded-full font-bold shadow-md">
//               INFOGRAPHIC 2025
//             </span>
//           </h2>
//         </motion.div>

//         {/* COMPACT & BEAUTIFUL FLOW DIAGRAM */}
//         <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-t-8 border-indigo-600">

//           {/* Horizontal Flow - Perfect for Mobile + Desktop */}
//           <div className="grid grid-cols-3 md:grid-cols-7 gap-4 md:gap-8 items-center justify-center">

//             {/* 1. Web App */}
//             <motion.div 
//               whileHover={{ scale: 1.15 }}
//               className="text-center"
//             >
//               <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-6 rounded-2xl shadow-xl border-4 border-blue-300">
//                 <img 
//                   src="https://i.imgur.com/9J8oK5P.png" 
//                   alt="Web App" 
//                   className="w-16 h-16 md:w-20 md:h-20 mx-auto"
//                 />
//               </div>
//               <p className="mt-3 text-sm md:text-lg font-bold text-gray-800">WEB APP</p>
//               <span className="text-xs text-gray-600">React/Next.js</span>
//             </motion.div>

//             {/* Arrow Right */}
//             <motion.div 
//               animate={{ x: [0, 8, 0] }}
//               transition={{ repeat: Infinity, duration: 1.8 }}
//               className="text-3xl md:text-5xl text-blue-600 font-bold"
//             >
//               →
//             </motion.div>

//             {/* CENTER: JEETWEB API (Star of the Show) */}
//             <motion.div 
//               animate={{ scale: [1, 1.08, 1] }}
//               transition={{ repeat: Infinity, duration: 3 }}
//               className="col-span-1 md:col-span-1 relative"
//             >
//               <div className="bg-gradient-to-br from-blue-700 via-purple-700 to-indigo-800 text-white p-8 md:p-10 rounded-full shadow-2xl border-8 border-white">
//                 <h3 className="text-3xl md:text-5xl font-black text-center">API</h3>
//               </div>
//               <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-full text-xs md:text-sm font-bold whitespace-nowrap shadow-lg">
//                 JEETWEB™
//               </div>
//             </motion.div>

//             {/* Arrow Left */}
//             <motion.div 
//               animate={{ x: [0, -8,  excitatory: true }}
//               transition={{ repeat: Infinity, duration: 1.8 }}
//               className="text-3xl md:text-5xl text-green-600 font-bold rotate-180"
//             >
//               →
//             </motion.div>

//             {/* 2. Web Server */}
//             <motion.div 
//               whileHover={{ scale: 1.15 }}
//               className="text-center"
//             >
//               <div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-6 rounded-2xl shadow-xl border-4 border-indigo-300">
//                 <img 
//                   src="https://i.imgur.com/XyZ8vR2.png" 
//                   alt="Server" 
//                   className="w-16 h-16 md:w-20 md:h-20 mx-auto"
//                 />
//               </div>
//               <p className="mt-3 text-sm md:text-lg font-bold text-gray-800">SERVER</p>
//               <span className="text-xs text-gray-600">Node.js</span>
//             </motion.div>

//             {/* DB Arrow */}
//             <div className="text-2xl md:text-4xl text-purple-600">↓</div>

//             {/* 3. Database */}
//             <motion.div 
//               whileHover={{ scale: 1.15 }}
//               className="text-center"
//             >
//               <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-2xl shadow-xl border-4 border-purple-300">
//                 <img 
//                   src="https://i.imgur.com/LmP9kN1.png" 
//                   alt="Database" 
//                   className="w-16 h-16 md:w-20 md:h-20 mx-auto"
//                 />
//               </div>
//               <p className="mt-3 text-sm md:text-lg font-bold text-gray-800">DATABASE</p>
//               <span className="text-xs text-gray-600">MongoDB/MySQL</span>
//             </motion.div>

//           </div>

//           {/* Caption Below Diagram */}
//           <div className="text-center mt-16">
//             <motion.p 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.5 }}
//               className="text-xl md:text-2xl font-bold text-indigo-800"
//             >
//               Request → JEETWEB™ API → Process → Instant Response!
//             </motion.p>
//             <p className="text-gray-600 mt-2 text-sm md:text-base">
//               Bilkul jaise aap WhatsApp pe message bhejte ho – turant pahunch jata hai!
//             </p>
//           </div>
//         </div>

//         {/* Bottom Features - Clean Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
//           {[
//             { title: "Super Fast", desc: "0.2 sec response", icon: "Lightning" },
//             { title: "100% Secure", desc: "Bank-level encryption", icon: "Lock" },
//             { title: "Zero Coding", desc: "Copy-paste integration", icon: "Magic" }
//           ].map((item, i) => (
//             <motion.div
//               key={i}
//               initial={{ y: 50, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               transition={{ delay: i * 0.2 }}
//               className="bg-white rounded-2xl p-8 text-center shadow-xl border-t-4 border-indigo-600 hover:shadow-2xl transition-all"
//             >
//               <div className="text-5xl mb-4">{item.icon}</div>
//               <h3 className="text-xl font-bold text-indigo-800">{item.title}</h3>
//               <p className="text-gray-600 mt-2">{item.desc}</p>
//             </motion.div>
//           ))}
//         </div>

//         {/* Final Punchline */}
//         <motion.div 
//           initial={{ scale: 0.8, opacity: 0 }}
//           whileInView={{ scale: 1, opacity: 1 }}
//           className="text-center mt-16 bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-10 rounded-3xl shadow-2xl"
//         >
//           <h2 className="text-3xl md:text-5xl font-black">
//             JEETWEB™ = Future of Automation
//           </h2>
//           <p className="text-xl md:text-3xl font-bold mt-4 animate-pulse">
//             Sabka API • Sabka Future • Sabka JEETWEB™
//           </p>
//         </motion.div>

//         {/* Footer */}
//         <div className="text-center mt-12 text-gray-600">
//           <p className="text-lg font-semibold">© 2025 JEETWEB.IN – India Ka Apna Automation Platform</p>
//         </div>

//       </div>
//     </div>

//       {/* Web Development Section */}  
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
//             Web Development Services
//           </h2>
//           <div className="grid md:grid-cols-2 gap-12">
//             <div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">We Create Stunning Websites</h3>
//               <p className="text-gray-600 leading-relaxed mb-8">
//                 From simple landing pages to complex e-commerce platforms — we build responsive, SEO-friendly websites that convert visitors into customers.
//               </p>
//               <ul className="space-y-4">
//                 {[
//                   "Custom Website Design",
//                   "E-commerce Solutions",
//                   "Content Management Systems",
//                   "SEO Optimization",
//                   "Performance Tuning",
//                   "Maintenance & Support"
//                 ].map((item, i) => (
//                   <li key={i} className="flex items-center space-x-3">
//                     <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
//                     <span className="text-gray-700 font-medium">{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-12 text-white">
//               <h3 className="text-3xl font-bold mb-6">Ready to Elevate Your Online Presence?</h3>
//               <p className="text-lg mb-8 opacity-90">
//                 Let's discuss your project and create a website that truly represents your brand.
//               </p>
//               <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition">
//                 Start Your Project
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>


  


//       {/* Mobile App Development */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
//             Mobile App Development
//           </h2>
//           <div className="grid md:grid-cols-2 gap-12">
//             <div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">We Build Powerful Mobile Apps</h3>
//               <p className="text-gray-600 leading-relaxed mb-8">
//                 From idea to launch — we create native and cross-platform mobile applications that users love.
//               </p>
//               <ul className="space-y-4">
//                 {[
//                   "iOS & Android Apps",
//                   "React Native & Flutter",
//                   "UI/UX Design",
//                   "App Store Deployment",
//                   "Backend Integration",
//                   "Maintenance & Support"
//                 ].map((item, i) => (
//                   <li key={i} className="flex items-center space-x-3">
//                     <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
//                     <span className="text-gray-700 font-medium">{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className="bg-gradient-to-br from-purple-600 to-cyan-500 rounded-3xl p-12 text-white">
//               <h3 className="text-3xl font-bold mb-6">Ready to Build Your App?</h3>
//               <p className="text-lg mb-8 opacity-90">
//                 Let's discuss your idea and turn it into a successful mobile application.
//               </p>
//               <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition">
//                 Start Your Project
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-black text-white py-12">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <div className="flex items-center justify-center space-x-4 mb-6">
//             <span className="text-3xl">Globe</span>
//             <span className="text-3xl font-bold">JEETWEB</span>
//           </div>
//           <p>© 2025 JEETWEB • Building the Future of Web & Mobile</p>
//         </div>
//       </footer>
//     </>
//   );
// }


import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-white/80 hover:text-white transition">Home</a>
            <span>/</span>
            <a href="#" className="text-white">About Us</a>
          </div>
        </div>
      </section>

      {/* About Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Empower Your Business Growth<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-600">
                Unlock the future with Jeetweb
              </span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              At Jeetweb, we specialize in building powerful, scalable, and beautiful digital solutions that help businesses grow faster in the modern world. From stunning websites to AI-powered applications — we deliver excellence.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With a perfect blend of creativity, technology, and strategy, we turn your vision into reality.
            </p>
            <button className="mt-8 bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition shadow-lg">
              Get Started
            </button>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
              alt="Jeetweb Team"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -top-6 -right-6 bg-gradient-to-br from-cyan-400 to-purple-600 text-white px-8 py-4 rounded-xl shadow-xl text-2xl font-bold">
              Jeetweb
            </div>
          </div>
        </div>
      </section>

      {/* JEETWEB API Infographic Section - 2025 */}
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">

          {/* Hero Title */}
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-indigo-900 mb-2">
              JEETWEB™
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-indigo-700">
              WEB API
              <span className="ml-3 text-sm md:text-lg align-top bg-gradient-to-r from-blue-600 to-purple-700 text-white px-4 py-2 rounded-full font-bold shadow-md">
                INFOGRAPHIC 2025
              </span>
            </h2>
          </motion.div>

          {/* Flow Diagram */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-t-8 border-indigo-600">
            <div className="">

           <img src="./src/assets/1_bFjOXPlJUi14P05-4DQQ9w.gif" alt="" />
            </div>

            {/* Caption */}
          
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { title: "Super Fast", desc: "0.2 sec response", icon: "⚡" },
              { title: "100% Secure", desc: "Bank-level encryption", icon: "🔒" },
              { title: "Zero Coding", desc: "Copy-paste integration", icon: "✨" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white rounded-2xl p-8 text-center shadow-xl border-t-4 border-indigo-600 hover:shadow-2xl transition-all"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-indigo-800">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Final Punchline */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="text-center mt-16 bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-10 rounded-3xl shadow-2xl"
          >
            <h2 className="text-3xl md:text-5xl font-black">
              JEETWEB™ = Future of Automation
            </h2>
            <p className="text-xl md:text-3xl font-bold mt-4 animate-pulse">
              Sabka API • Sabka Future • Sabka JEETWEB™
            </p>
          </motion.div>

          {/* Footer Note */}
          <div className="text-center mt-12 text-gray-600">
            <p className="text-lg font-semibold">© 2025 JEETWEB.IN – India Ka Apna Automation Platform</p>
          </div>
        </div>
      </div>

      {/* Web Development Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Web Development Services</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">We Create Stunning Websites</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                From simple landing pages to complex e-commerce platforms — we build responsive, SEO-friendly websites that convert visitors into customers.
              </p>
              <ul className="space-y-4">
                {["Custom Website Design", "E-commerce Solutions", "Content Management Systems", "SEO Optimization", "Performance Tuning", "Maintenance & Support"].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-6">Ready to Elevate Your Online Presence?</h3>
              <p className="text-lg mb-8 opacity-90">
                Let's discuss your project and create a website that truly represents your brand.
              </p>
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition">
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Development */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Mobile App Development</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">We Build Powerful Mobile Apps</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                From idea to launch — we create native and cross-platform mobile applications that users love.
              </p>
              <ul className="space-y-4">
                {["iOS & Android Apps", "React Native & Flutter", "UI/UX Design", "App Store Deployment", "Backend Integration", "Maintenance & Support"].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-600 to-cyan-500 rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-6">Ready to Build Your App?</h3>
              <p className="text-lg mb-8 opacity-90">
                Let's discuss your idea and turn it into a successful mobile application.
              </p>
              <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition">
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <span className="text-3xl">🌐</span>
            <span className="text-3xl font-bold">JEETWEB</span>
          </div>
          <p>© 2025 JEETWEB • Building the Future of Web & Mobile</p>
        </div>
      </footer>
    </>
  );
}