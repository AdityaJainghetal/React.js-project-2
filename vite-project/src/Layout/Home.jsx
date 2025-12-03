import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from "react-router-dom";

export default function Home() {
const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
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
            We Build Websites & AI Solutions<br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
              That Grow Your Business
            </span>
          </h1>
          <p 
            data-aos="fade-up" 
            data-aos-delay="200"
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto font-light"
          >
            Professional web development, automation tools, and AI-powered solutions to take your business to the next level.
          </p>
          <div data-aos="fade-up" data-aos-delay="400">
            {/* <button className="relative group bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 px-12 rounded-full text-lg shadow-2xl transition-all transform hover:scale-105 hover:-translate-y-1">
              <span className="relative z-10">Get Started Now</span>
              <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition"></div>
            </button> */}

            <button 
  onClick={() => navigate("/about")}
  className="relative group bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 px-12 rounded-full text-lg shadow-2xl transition-all transform hover:scale-105 hover:-translate-y-1"
>
  <span className="relative z-10 cursor-pointer">Get Started Now</span>
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
            <h2 className="text-5xl font-black text-gray-900 mb-8">
              About Me
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Founder of <strong>JEETWEB</strong> — with <span className="font-bold text-blue-600">5+ years</span> of experience in full-stack development, AI integration, and digital growth strategies.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              I help businesses launch high-converting websites, automate workflows, and deploy smart AI tools that save time and multiply revenue.
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
          <h2 data-aos="fade-up" className="text-5xl font-black text-center text-gray-900 mb-20">
            What We Do
          </h2>
          
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { 
                title: "Website Development", 
                desc: "Blazing-fast, SEO-optimized websites that convert visitors into customers",
                img: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=800"
              },
              { 
                title: "AI & Automation", 
                desc: "Chatbots, lead generation bots, CRM automation & smart workflows",
                img: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800"
              },
              { 
                title: "App Development", 
                desc: "Custom mobile & web apps with modern tech stack (React, Node, Flutter)",
                img: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800"
              }
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
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{service.desc}</p>
                  <div className="mt-6 text-blue-600 font-bold group-hover:translate-x-2 transition">
                    Learn More →
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 data-aos="fade-up" className="text-5xl font-black text-center text-gray-900 mb-20">
            Client Success Stories
          </h2>
          
      <div className="grid md:grid-cols-3 gap-10">
  {[
    { 
      name: "Aditya Jain", 
      role: "Developer, TechSolutions,C0O, WebMasters,co-founder, BizBoost", 
      text: "Our sales jumped 240% in 3 months after the new website!",
      img: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    { 
          name: "Raj", 
          role: "Specialized in Marketing, BizBoost, founder", 
          text: "Best investment we made. Professional, fast, and result-driven.",
          img: "https://randomuser.me/api/portraits/men/30.jpg"
        },
    { 
      name: "Rohan Verma", 
      role: "Director, GrowFast", 
      text: "Aditya is a genius. Delivered more than promised!",
      img: "https://randomuser.me/api/portraits/men/76.jpg"
    }
  ].map((t, i) => (
    <div
      key={i}
      data-aos="fade-up"
      data-aos-delay={i * 200}
      className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-3"
    >
      <div className="flex mb-6">
        {[...Array(5)].map((_, idx) => (
          <span key={idx} className="text-yellow-500 text-2xl">★</span>
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


          {/* Quote */}
          <div data-aos="zoom-in" className="mt-24 text-center">
            <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-20 py-16 rounded-3xl shadow-2xl transform hover:scale-105 transition">
              <h3 className="text-5xl font-black leading-tight">
                PATIENCE IS THE KEY<br />OF SUCCESS.
              </h3>
              <p className="mt-6 text-2xl opacity-90">— JEETWEB</p>
            </div>
          </div>
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