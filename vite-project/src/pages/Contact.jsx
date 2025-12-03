import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value || "No name";
    const email = e.target.email.value || "No email";
    const phone = e.target.phone.value || "No phone";
    const city = e.target.city.value || "Not mentioned";
    const message = e.target.message.value || "No message";

    const whatsappText = `New Lead from JEETWEB

Name: ${name}
Email: ${email}
Phone: ${phone}
City: ${city}

Message:
${message}

Sent from Contact Form`;

    window.open(
      `https://wa.me/919399882934?text=${encodeURIComponent(whatsappText)}`,
      "_blank"
    );

    alert("Thank you! Your message has been sent via WhatsApp. We will reply soon!");
    e.target.reset();
  };

  return (
    <>
      
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-100"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-10 left-40 w-80 h-80 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="min-h-screen py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h1 
              data-aos="fade-down"
              className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 leading-tight"
            >
              Let's Build Together
            </h1>
            <p 
              data-aos="fade-up" 
              data-aos-delay="300"
              className="text-2xl md:text-3xl font-bold text-gray-700 mt-6"
            >
              Your Success Is Our Mission
            </p>
            <div 
              data-aos="fade-up" 
              data-aos-delay="500"
              className="w-48 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full shadow-lg"
            ></div>
          </div>

          <div data-aos="fade-up" data-aos-delay="700" className="text-center mb-16">
            <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-5xl mx-auto">
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                JEETWEB
              </span> — India’s First AI-Powered Smart Business Platform
            </p>
            <p className="text-lg text-gray-500 mt-4">
              One platform. All solutions. Zero headache.
            </p>
          </div>

          {/* Main CTA */}
          <div data-aos="zoom-in" data-aos-delay="900" className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">10x Your Business</span>?
            </h2>
            <button className="mt-10 bg-gradient-to-r from-black to-gray-900 text-white px-12 py-6 rounded-full text-2xl font-bold hover:shadow-2xl transform hover:scale-110 transition-all duration-300 shadow-xl hover:shadow-cyan-500/50">
              Start Your Project Now
            </button>
          </div>

         
          <div 
            data-aos="fade-up" 
            data-aos-delay="300"
            className="max-w-5xl mx-auto"
          >
            <div className="backdrop-blur-xl bg-white/80 rounded-3xl shadow-2xl border border-white/20 p-10 md:p-16 relative overflow-hidden">
              
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 opacity-20 blur-xl -z-10"></div>

              <h3 className="text-4xl md:text-5xl font-black text-center mb-4 text-gray-900">
                Drop Us a Message
              </h3>
              <p className="text-center text-gray-600 text-lg mb-12">
                We reply within <span className="font-bold text-blue-600">5 minutes</span> on WhatsApp
              </p>

              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Name */}
                <div data-aos="fade-right" data-aos-delay="100">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    required
                    className="w-full px-6 py-5 bg-white/70 border border-gray-300 rounded-2xl focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition text-lg font-medium placeholder-gray-500"
                  />
                </div>

                {/* Email */}
                <div data-aos="fade-left" data-aos-delay="200">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    required
                    className="w-full px-6 py-5 bg-white/70 border border-gray-300 rounded-2xl focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition text-lg font-medium placeholder-gray-500"
                  />
                </div>

                {/* Phone */}
                <div data-aos="fade-right" data-aos-delay="300">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    required
                    className="w-full px-6 py-5 bg-white/70 border border-gray-300 rounded-2xl focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition text-lg font-medium placeholder-gray-500"
                  />
                </div>

                {/* City */}
                <div data-aos="fade-left" data-aos-delay="400">
                  <input
                    type="text"
                    name="city"
                    placeholder="Your City"
                    className="w-full px-6 py-5 bg-white/70 border border-gray-300 rounded-2xl focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition text-lg font-medium placeholder-gray-500"
                  />
                </div>

                {/* Message */}
                <div data-aos="fade-up" data-aos-delay="500" className="md:col-span-2">
                  <textarea
                    name="message"
                    rows="6"
                    placeholder="Tell us about your project... (Budget, Timeline, Requirements)"
                    required
                    className="w-full px-6 py-5 bg-white/70 border border-gray-300 rounded-2xl focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition text-lg resize-none placeholder-gray-500 font-medium"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div data-aos="zoom-in" data-aos-delay="700" className="md:col-span-2 text-center">
                  <button
                    type="submit"
                    className="relative group bg-gradient-to-r from-green-500 to-emerald-600 text-white px-20 py-6 rounded-full text-2xl font-black shadow-2xl transform hover:scale-110 transition-all duration-300 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      Send Message
                    </span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition"></div>
                  </button>
                  <p className="mt-4 text-gray-600 font-medium">
                    Opens WhatsApp • Reply in <span className="text-green-600 font-bold">5 mins</span>
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Trust Badges */}
          <div data-aos="fade-up" className="text-center mt-20">
            <p className="text-gray-600 text-lg">Trusted by 50+ businesses across India</p>
            <div className="flex justify-center gap-10 mt-8 flex-wrap">
              {["5+ Years", "100+ Projects", "₹15Cr+ Revenue", "24/7 Support"].map((item, i) => (
                <div key={i} className="bg-white/70 backdrop-blur px-8 py-4 rounded-full shadow-lg font-bold text-gray-800">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 20s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </>
  );
}