// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useNavigate } from "react-router-dom";

// export default function Home() {
// const navigate = useNavigate();

//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       easing: 'ease-out-cubic',
//       once: true,
//     });
//   }, []);

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50 py-24 px-6 overflow-hidden">
//         <div className="absolute inset-0 bg-grid-slate-100 opacity-40 -z-10"></div>
//         <div className="max-w-7xl mx-auto text-center relative">
//           <h1
//             data-aos="fade-up"
//             className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight"
//           >
//             We Build Websites & AI Solutions<br />
//             <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
//               That Grow Your Business
//             </span>
//           </h1>
//           <p
//             data-aos="fade-up"
//             data-aos-delay="200"
//             className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto font-light"
//           >
//             Professional web development, automation tools, and AI-powered solutions to take your business to the next level.
//           </p>
//           <div data-aos="fade-up" data-aos-delay="400">
//             {/* <button className="relative group bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 px-12 rounded-full text-lg shadow-2xl transition-all transform hover:scale-105 hover:-translate-y-1">
//               <span className="relative z-10">Get Started Now</span>
//               <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition"></div>
//             </button> */}

//             <button
//   onClick={() => navigate("/about")}
//   className="relative group bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 px-12 rounded-full text-lg shadow-2xl transition-all transform hover:scale-105 hover:-translate-y-1"
// >
//   <span className="relative z-10 cursor-pointer">Get Started Now</span>
//   <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition"></div>
// </button>

//           </div>
//         </div>
//       </section>

//       {/* About Me Section */}
//       <section className="py-24 px-6 bg-white">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
//           <div data-aos="fade-right">
//             <div className="relative group">
//               <img
//                 src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
//                 alt="Aditya Jain - Founder"
//                 className="rounded-3xl shadow-2xl object-cover w-full hover:scale-105 transition-transform duration-700"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition"></div>
//             </div>
//           </div>
//           <div data-aos="fade-left">
//             <h2 className="text-5xl font-black text-gray-900 mb-8">
//               About Me
//             </h2>
//            <p className="text-xl text-gray-600 leading-relaxed mb-6">
//   Founder of <strong>JEETWEB</strong> — with <span className="font-bold text-blue-600">5+ years</span> of experience in full-stack development, AI integration, and digital growth strategies.
// </p>

// <p className="text-xl text-gray-600 leading-relaxed mb-6">
//   <strong className="text-gray-800">Aditya Jain</strong>, the Co-Founder and Website Developer of Jeetweb, specializes in creating high-performance, modern, and fully optimized websites that help businesses scale faster and build a powerful online presence.
// </p>
// <p className="text-xl text-gray-600 leading-relaxed mb-6">
//   <strong className="text-gray-800">Brajeet Kumar Yadav</strong> is a visionary entrepreneur and Founder of Jeetweb, dedicated to building smart digital and AI-driven solutions for businesses. He helps startups and brands grow faster with modern websites, automation, and intelligent technology.
// </p>

// <p className="text-xl text-gray-600 leading-relaxed">
//   Together, we help businesses launch high-converting websites, automate workflows, and deploy smart AI tools that save time and multiply revenue.
// </p>
//             <div className="mt-10 flex gap-6">
//               <div className="text-center">
//                 <h4 className="text-4xl font-black text-blue-600">50+</h4>
//                 <p className="text-gray-600">Happy Clients</p>
//               </div>
//               <div className="text-center">
//                 <h4 className="text-4xl font-black text-blue-600">₹10Cr+</h4>
//                 <p className="text-gray-600">Revenue Generated</p>
//               </div>
//               <div className="text-center">
//                 <h4 className="text-4xl font-black text-blue-600">100%</h4>
//                 <p className="text-gray-600">Satisfaction</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="py-24 px-6 bg-gradient-to-b from-sky-50 to-white">
//         <div className="max-w-7xl mx-auto">
//           <h2 data-aos="fade-up" className="text-5xl font-black text-center text-gray-900 mb-20">
//             What We Do
//           </h2>

//           <div className="grid md:grid-cols-3 gap-10">
//             {[
//               {
//                 title: "Website Development",
//                 desc: "Blazing-fast, SEO-optimized websites that convert visitors into customers",
//                 img: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=800"
//               },
//               {
//                 title: "AI & Automation",
//                 desc: "Chatbots, lead generation bots, CRM automation & smart workflows",
//                 img: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800"
//               },
//               {
//                 title: "App Development",
//                 desc: "Custom mobile & web apps with modern tech stack (React, Node, Flutter)",
//                 img: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800"
//               }
//             ].map((service, i) => (
//               <div
//                 key={i}
//                 data-aos="fade-up"
//                 data-aos-delay={i * 200}
//                 className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-4"
//               >
//                 <div className="overflow-hidden">
//                   <img
//                     src={service.img}
//                     alt={service.title}
//                     className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
//                 </div>
//                 <div className="p-10 relative">
//                   <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
//                   <p className="text-lg text-gray-600 leading-relaxed">{service.desc}</p>
//                   <div className="mt-6 text-blue-600 font-bold group-hover:translate-x-2 transition">
//                     Learn More →
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-24 px-6 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <h2 data-aos="fade-up" className="text-5xl font-black text-center text-gray-900 mb-20">
//             Client Success Stories
//           </h2>

//       <div className="grid md:grid-cols-3 gap-10">
//   {[
//     {
//       name: "Aditya Jain",
//       role: "Developer, TechSolutions,C0O, WebMasters,co-founder, BizBoost",
//       text: "Our sales jumped 240% in 3 months after the new website!",
//       img: "https://randomuser.me/api/portraits/men/32.jpg"
//     },
//     {
//           name: "Raj",
//           role: "Specialized in Marketing, BizBoost, founder",
//           text: "Best investment we made. Professional, fast, and result-driven.",
//           img: "https://randomuser.me/api/portraits/men/30.jpg"
//         },
//     {
//       name: "Rohan Verma",
//       role: "Director, GrowFast",
//       text: "Aditya is a genius. Delivered more than promised!",
//       img: "https://randomuser.me/api/portraits/men/76.jpg"
//     }
//   ].map((t, i) => (
//     <div
//       key={i}
//       data-aos="fade-up"
//       data-aos-delay={i * 200}
//       className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-3"
//     >
//       <div className="flex mb-6">
//         {[...Array(5)].map((_, idx) => (
//           <span key={idx} className="text-yellow-500 text-2xl">★</span>
//         ))}
//       </div>

//       <p className="text-gray-700 italic text-lg mb-8 leading-relaxed">
//         "{t.text}"
//       </p>

//       <div className="flex items-center">
//         <img
//           src={t.img}
//           alt={t.name}
//           className="w-16 h-16 object-cover rounded-full mr-4 border-4 border-white shadow-lg"
//         />
//         <div>
//           <p className="font-bold text-gray-900">{t.name}</p>
//           <p className="text-sm text-gray-600">{t.role}</p>
//         </div>
//       </div>
//     </div>
//   ))}
// </div>

//           {/* Quote */}
//           <div data-aos="zoom-in" className="mt-24 text-center">
//             <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-20 py-16 rounded-3xl shadow-2xl transform hover:scale-105 transition">
//               <h3 className="text-5xl font-black leading-tight">
//                 PATIENCE IS THE KEY<br />OF SUCCESS.
//               </h3>
//               <p className="mt-6 text-2xl opacity-90">— JEETWEB</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="py-32 px-6 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white relative overflow-hidden">
//         <div className="absolute inset-0 bg-black opacity-30"></div>
//         <div className="max-w-5xl mx-auto text-center relative z-10">
//           <h2
//             data-aos="fade-up"
//             className="text-5xl md:text-7xl font-black mb-8 leading-tight"
//           >
//             Ready to 10x Your Business?
//           </h2>
//           <p
//             data-aos="fade-up"
//             data-aos-delay="200"
//             className="text-2xl mb-12 opacity-90"
//           >
//             Join 50+ growing businesses who trusted JEETWEB
//           </p>
//           <div data-aos="fade-up" data-aos-delay="400">
//             <button className="bg-white text-blue-600 hover:bg-gray-100 font-black py-6 px-16 rounded-full text-2xl shadow-2xl transition-all transform hover:scale-110 hover:-translate-y-2">
//               Let's Talk Now
//             </button>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import SupportBanner from "./SupportBanner";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50 py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 opacity-40 -z-10"></div>
        <div className="max-w-7xl mx-auto text-center relative">
          <h1
            data-aos="fade-up"
            className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight"
          >
            We Build Websites & AI Solutions
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
              That Grow Your Business
            </span>
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto font-light"
          >
            Professional web development, automation tools, and AI-powered
            solutions to take your business to the next level.
          </p>
          <div data-aos="fade-up" data-aos-delay="400">
            <button
              onClick={() => navigate("/about")}
              className="relative group bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 px-12 rounded-full text-lg shadow-2xl transition-all transform hover:scale-105 hover:-translate-y-1"
            >
              <span className="relative z-10">Get Started Now</span>
              <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition"></div>
            </button>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <div className="relative group">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Aditya Jain - Founder"
                className="rounded-3xl shadow-2xl object-cover w-full hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition"></div>
            </div>
          </div>
          <div data-aos="fade-left">
            <h2 className="text-5xl font-black text-gray-900 mb-8">About Me</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Founder of <strong>JEETWEB</strong> — with{" "}
              <span className="font-bold text-blue-600">5+ years</span> of
              experience in full-stack development, AI integration, and digital
              growth strategies.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              <strong className="text-gray-800">Aditya Jain</strong>, the
              Co-Founder and Website Developer of Jeetweb, specializes in
              creating high-performance, modern, and fully optimized websites
              that help businesses scale faster and build a powerful online
              presence.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              <strong className="text-gray-800">Brajeet Kumar Yadav</strong> is
              a visionary entrepreneur and Founder of Jeetweb, dedicated to
              building smart digital and AI-driven solutions for businesses.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              Together, we help businesses launch high-converting websites,
              automate workflows, and deploy smart AI tools that save time and
              multiply revenue.
            </p>
            <div className="mt-10 flex gap-6">
              <div className="text-center">
                <h4 className="text-4xl font-black text-blue-600">50+</h4>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div className="text-center">
                <h4 className="text-4xl font-black text-blue-600">₹10Cr+</h4>
                <p className="text-gray-600">Revenue Generated</p>
              </div>
              <div className="text-center">
                <h4 className="text-4xl font-black text-blue-600">100%</h4>
                <p className="text-gray-600">Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2
            data-aos="fade-up"
            className="text-5xl font-black text-center text-gray-900 mb-20"
          >
            What We Do
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Website Development",
                desc: "Blazing-fast, SEO-optimized websites that convert visitors into customers",
                img: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=800",
              },
              {
                title: "AI & Automation",
                desc: "Chatbots, lead generation bots, CRM automation & smart workflows",
                img: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800",
              },
              {
                title: "App Development",
                desc: "Custom mobile & web apps with modern tech stack (React, Node, Flutter)",
                img: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800",
              },
            ].map((service, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 200}
                className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-4"
              >
                <div className="overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                </div>
                <div className="p-10 relative">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.desc}
                  </p>
                  <div className="mt-6 text-blue-600 font-bold group-hover:translate-x-2 transition">
                    Learn More →
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW:JeetWeb Features Section - Exactly like your image */}
      <section className="py-24 px-6 bg-gradient-to-b from-indigo-50 via-white to-sky-50">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-20 leading-tight">
            Why Traders Choose{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
              JeetWeb
            </span>
          </h2>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {/* Feature 1 - Real-Time Signals */}
            <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-gray-100">
              <div className="mb-8">
                <svg
                  className="w-16 h-16 text-red-500 mx-auto"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Real-Time Signals
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                JeetWeb provides accurate buy/sell signals in real time, helping
                traders make confident decisions and maximize profits.
              </p>
              <a
                href="#"
                className="text-blue-600 font-semibold text-lg inline-flex items-center gap-2 hover:gap-4 transition-all"
              >
                Discover now <span className="text-2xl">→</span>
              </a>
            </div>

            {/* Feature 2 - Comprehensive Analysis */}
            <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-gray-100">
              <div className="mb-8">
                <svg
                  className="w-16 h-16 text-blue-600 mx-auto"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Comprehensive Analysis
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Analyze multiple markets with ease usingJeetWeb’s advanced
                technical tools, tailored for both beginners and experts.
              </p>
              <a
                href="#"
                className="text-blue-600 font-semibold text-lg inline-flex items-center gap-2 hover:gap-4 transition-all"
              >
                Discover now <span className="text-2xl">→</span>
              </a>
            </div>

            {/* Feature 3 - Data Security */}
            <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-gray-100">
              <div className="mb-8">
                <svg
                  className="w-16 h-16 text-green-600 mx-auto"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="15" r="4" />
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 17.93c-3.92-.13-7-3.24-7.14-7.16l7.14-.01V19.93z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Data Security
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                We ensure secure data handling, keeping your trading information
                confidential and protected at all times.
              </p>
              <a
                href="#"
                className="text-blue-600 font-semibold text-lg inline-flex items-center gap-2 hover:gap-4 transition-all"
              >
                Discover now <span className="text-2xl">→</span>
              </a>
            </div>

            {/* Feature 4 - Custom Strategies */}
            <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-gray-100">
              <div className="mb-8">
                <svg
                  className="w-16 h-16 text-purple-600 mx-auto"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.48 1c-.55-.33-1.17-.58-1.84-.73l-.38-2.64c-.04-.24-.24-.41-.48-.41h-4c-.24 0-.44.17-.48.41l-.38 2.64c-.67.15-1.29.4-1.84.73l-2.48-1c-.05-.02-.11-.03-.17-.03-.18 0-.35.09-.44.25l-2 3.46c-.12.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.48-1c.55.33 1.17.58 1.84.73l.38 2.64c.04.24.24.41.48.41h4c.24 0 .44-.17.48-.41l.38-2.64c.67-.15 1.29-.4 1.84-.73l2.48 1c.05.02.11.03.17.03.18 0 .35-.09.44-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Custom Strategies
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Build and customize trading strategies to suit your unique needs
                and trading style with JeetWeb’s flexible tools.
              </p>
              <a
                href="#"
                className="text-blue-600 font-semibold text-lg inline-flex items-center gap-2 hover:gap-4 transition-all"
              >
                Discover now <span className="text-2xl">→</span>
              </a>
            </div>

            {/* Feature 5 - Risk Management */}
            <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-gray-100">
              <div className="mb-8">
                <svg
                  className="w-16 h-16 text-orange-600 mx-auto"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Risk Management
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Implement effective risk management withJeetWeb’s advanced
                tools, ensuring safer trading practices.
              </p>
              <a
                href="#"
                className="text-blue-600 font-semibold text-lg inline-flex items-center gap-2 hover:gap-4 transition-all"
              >
                Discover now <span className="text-2xl">→</span>
              </a>
            </div>

            {/* Feature 6 - 24/7 Support */}
            <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-gray-100">
              <div className="mb-8">
                <svg
                  className="w-16 h-16 text-indigo-600 mx-auto"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                24/7 Support
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our dedicated support team is available around the clock to
                assist you with any queries or issues.
              </p>
              <a
                href="#"
                className="text-blue-600 font-semibold text-lg inline-flex items-center gap-2 hover:gap-4 transition-all"
              >
                Discover now <span className="text-2xl">→</span>
              </a>
            </div>
          </div>

          {/* Trust Line */}
          <div className="mt-20">
            <p className="text-2xl font-light text-gray-700">
              Trusted by{" "}
              <span className="font-black text-indigo-600 text-4xl">
                10,000+
              </span>{" "}
              active traders in India
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2
            data-aos="fade-up"
            className="text-5xl font-black text-center text-gray-900 mb-20"
          >
            Client Success Stories
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                name: "Aditya Jain",
                role: "Developer, TechSolutions & Co-founder, BizBoost",
                text: "Our sales jumped 240% in 3 months after the new website!",
                img: "https://randomuser.me/api/portraits/men/32.jpg",
              },
              {
                name: "Raj",
                role: "Marketing Head, BizBoost",
                text: "Best investment we made. Professional, fast, and result-driven.",
                img: "https://randomuser.me/api/portraits/men/30.jpg",
              },
              {
                name: "Rohan Verma",
                role: "Director, GrowFast",
                text: "Aditya is a genius. Delivered more than promised!",
                img: "https://randomuser.me/api/portraits/men/76.jpg",
              },
            ].map((t, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 200}
                className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-3"
              >
                <div className="flex mb-6">
                  {[...Array(5)].map((_, idx) => (
                    <span key={idx} className="text-yellow-500 text-2xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 italic text-lg mb-8 leading-relaxed">
                  "{t.text}"
                </p>
                <div className="flex items-center">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-16 h-16 object-cover rounded-full mr-4 border-4 border-white shadow-lg"
                  />
                  <div>
                    <p className="font-bold text-gray-900">{t.name}</p>
                    <p className="text-sm text-gray-600">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <SupportBanner />
        </div>
      </section>
      {/* Final CTA */}
      <section className="py-32 px-6 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2
            data-aos="fade-up"
            className="text-5xl md:text-7xl font-black mb-8 leading-tight"
          >
            Ready to 10x Your Business?
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-2xl mb-12 opacity-90"
          >
            Join 50+ growing businesses who trusted JEETWEB
          </p>
          <div data-aos="fade-up" data-aos-delay="400">
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-black py-6 px-16 rounded-full text-2xl shadow-2xl transition-all transform hover:scale-110 hover:-translate-y-2">
              Let's Talk Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
