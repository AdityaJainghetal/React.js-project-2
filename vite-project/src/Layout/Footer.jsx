// import React from 'react';

// export default function Footer() {
//   return (
//     <footer className="bg-sky-100 text-gray-800 py-12 px-6">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

//         {/* Column 1 - Logo & Description */}
//         <div className="space-y-6">
//           <div className="flex items-center mb-4">
//             <div className="bg-blue-700 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-3">
//               JW
//             </div>
//             <h3 className="text-2xl font-black">JEETWEB</h3>
//           </div>

//           <p className="text-base leading-relaxed text-gray-700">
//             JeetWeb – We Build Websites & AI Solutions That Grow Your Business.<br />
//             Your trusted partner for Web Development, AI Tools & Branding
//           </p>

//           <div className="text-sm">
//             <p className="font-semibold mb-1">The Location</p>
//             <p className="text-gray-600">Indore, Madhya Pradesh<br />India</p>
//           </div>

//           {/* Social Icons */}
//           <div className="flex gap-6">
//             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
//               className="text-gray-700 hover:text-pink-600 transition transform hover:scale-110">
//               <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
//             </a>

//             <a href="https://github.com/AdityaJainghetal" target="_blank" rel="noopener noreferrer"
//               className="text-gray-700 hover:text-gray-900 transition transform hover:scale-110">
//               <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.04c-5.5 0-9.96 4.47-9.96 9.96 0 4.41 2.86 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1.00.07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.10-.25-.45-1.27.10-2.65 0 0 .84-.27 2.75 1.02.80-.22 1.65-.33 2.50-.33.85 0 1.70.11 2.50.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.20 2.40.10 2.65.64.70 1.03 1.59 1.03 2.68 0 3.85-2.34 4.70-4.57 4.94.36.31.68.92.68 1.86 0 1.34-.01 2.43-.01 2.76 0 .27.18.58.69.48 3.98-1.33 6.83-5.09 6.83-9.49 0-5.49-4.46-9.96-9.96-9.96z"/></svg>
//             </a>

//             <a href="https://www.linkedin.com/in/aditya-jain-9797b5214" target="_blank" rel="noopener noreferrer"
//               className="text-gray-700 hover:text-blue-700 transition transform hover:scale-110">
//               <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
//             </a>

//             <a href="https://x.com" target="_blank" rel="noopener noreferrer"
//               className="text-gray-700 hover:text-black transition transform hover:scale-110">
//               <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
//             </a>
//           </div>
//         </div>

//         {/* Column 2 - IT Services */}
//         <div>
//           <h3 className="text-lg font-bold mb-5 text-gray-900">IT Services</h3>
//           <ul className="space-y-3 text-gray-700">
//             {["Modern Website Development", "Branding & Graphic Design", "Premium UI/UX Design", "Software Development", "Website Maintenance & Security"].map((item) => (
//               <li key={item} className="hover:text-blue-700 transition font-medium text-base">{item}</li>
//             ))}
//           </ul>
//         </div>

//         {/* Column 3 - Support */}
//         <div>
//           <h3 className="text-lg font-bold mb-5 text-gray-900">Support</h3>
//           <ul className="space-y-3 text-gray-700">
//             <li className="hover:text-blue-700 transition font-medium text-base">Optimization</li>
//             <li className="hover:text-blue-700 transition font-medium text-base">24/7 Technical Security</li>
//             <li className="hover:text-blue-700 transition font-medium text-base">Fast Support</li>
//           </ul>
//         </div>

//         {/* Column 4 - Quick Links */}
//         <div>
//           <h3 className="text-lg font-bold mb-5 text-gray-900">Quick Links</h3>
//          <ul className="space-y-4">
//   {/* Normal Menu Links - Real paths ke saath */}
//   {[
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/about" },
//     { name: "Services", path: "/services" },
//     { name: "Portfolio", path: "/portfolio" },
//     { name: "Contact Us", path: "/contact" },
//   ].map((item) => (
//     <li key={item.name}>
//       <a
//         href={item.path}
//         className="text-gray-700 hover:text-blue-700 transition font-medium text-base block"
//       >
//         {item.name}
//       </a>
//     </li>
//   ))}

//   {/* WhatsApp Direct Chat Button */}
//   <li className="pt-4">
//     <a
//       href="https://wa.me/919399882934?text=नमस्ते%20आदित्य%20सर%2C%20मैं%20आपके%20कोर्स%20के%20बारे%20में%20जानना%20चाहता/चाहती%20हूँ।%20Demo%20या%20fees%20की%20जानकारी%20चाहिए।"
//       target="_blank"
//       rel="noopener noreferrer"
//       className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-4 rounded-xl transition transform hover:scale-105 shadow-lg w-full justify-center"
//     >
//       <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
//         <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099.198.05.372-.025.521-.075.149-.05.174-.099.223-.198.049-.099.124-.248.099-.397-.025-.149-.174-.869-.347-1.417-.173-.547-.372-1.18-.571-1.607-.198-.428-.595-.347-.819-.347-.223 0-.446.05-.67.149-.223.099-.595.347-.893 1.042-.297.695-.074 1.342.223 1.788.297.447 1.315 1.73 2.847 2.458 1.531.728 2.158.876 2.854.624.695-.252.893-.99 1.116-1.438.223-.447.372-.62.62-.62.248 0 .447.174.67.347.223.174.446.546.521.893.074.347.074.744-.099 1.017-.173.273-.62.422-1.017.422z"/>
//         <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.5 19.25c-3.037 0-5.5-2.463-5.5-5.5s2.463-5.5 5.5-5.5 5.5 2.463 5.5 5.5-2.463 5.5-5.5 5.5z"/>
//       </svg>
//       Chat on WhatsApp
//     </a>
//   </li>
// </ul>
//         </div>

//       </div>

//       {/* Copyright */}
//       <div className="mt-12 pt-8 border-t border-gray-300 text-center">
//         <p className="text-sm text-gray-600">
//           © 2025 JeetWeb. All rights reserved. Proudly crafted with love in India
//         </p>
//       </div>
//     </footer>
//   );
// }

import React from "react";
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-sky-100 text-gray-800 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Column 1 - Logo & Description */}
        <div className="space-y-6">
          <div className="flex items-center mb-4">
            <div className="bg-blue-700 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-3">
              JW
            </div>
            <h3 className="text-2xl font-black">JEETWEB</h3>
          </div>

          <p className="text-base leading-relaxed text-gray-700">
            JeetWeb – We Build Websites & AI Solutions That Grow Your Business.
            <br />
            Your trusted partner for Web Development, AI Tools & Branding
          </p>

          <div className="text-sm">
            <p className="font-semibold mb-1">The Location</p>
            <p className="text-gray-600">
              Indore, Madhya Pradesh
              <br />
              India
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 text-2xl">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-pink-600 transition transform hover:scale-110"
            >
              <FaInstagram />
            </a>

            <a
              href="https://github.com/AdityaJainghetal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition transform hover:scale-110"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/aditya-jain-9797b5214"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-700 transition transform hover:scale-110"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black transition transform hover:scale-110"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Column 2 - IT Services */}
        <div>
          <h3 className="text-lg font-bold mb-5 text-gray-900">IT Services</h3>
          <ul className="space-y-3 text-gray-700">
            {[
              "Modern Website Development",
              "Branding & Graphic Design",
              "Premium UI/UX Design",
              "Software Development",
              "Website Maintenance & Security",
            ].map((item) => (
              <li
                key={item}
                className="hover:text-blue-700 transition font-medium text-base"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 - Support */}
        <div>
          <h3 className="text-lg font-bold mb-5 text-gray-900">Support</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="hover:text-blue-700 transition font-medium text-base">
              Optimization
            </li>
            <li className="hover:text-blue-700 transition font-medium text-base">
              24/7 Technical Security
            </li>
            <li className="hover:text-blue-700 transition font-medium text-base">
              Fast Support
            </li>
          </ul>
        </div>

        {/* Column 4 - Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-5 text-gray-900">Quick Links</h3>

          <ul className="space-y-4">
            {/* Normal Links */}
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Services", path: "/services" },
              { name: "Portfolio", path: "/portfolio" },
              { name: "Contact Us", path: "/contact" },
            ].map((item) => (
              <li key={item.name}>
                <a
                  href={item.path}
                  className="text-gray-700 hover:text-blue-700 transition font-medium text-base block"
                >
                  {item.name}
                </a>
              </li>
            ))}

            {/* WhatsApp Button */}
            <li className="pt-4">
              <a
                href="https://wa.me/919399882934?text=नमस्ते%20आदित्य%20सर%2C%20मैं%20आपके%20कोर्स%20के%20बारे%20में%20जानना%20चाहता/चाहती%20हूँ।%20Demo%20या%20fees%20की%20जानकारी%20चाहिए।"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-4 rounded-xl transition transform hover:scale-105 shadow-lg w-full justify-center"
              >
                <FaWhatsapp className="text-2xl" />
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 pt-8 border-t border-gray-300 text-center">
        <p className="text-sm text-gray-600">
          © 2025 JeetWeb. All rights reserved. Proudly crafted with love in
          India
        </p>
      </div>
    </footer>
  );
}
