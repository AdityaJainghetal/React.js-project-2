import React from 'react';

// Robot image directly from Google search (transparent PNG)
const robotImg = "https://sparkvisioninfo.tech/assets/robo.png"

const SupportBanner = () => {
  return (
    <div className="support-banner w-full bg-white rounded-3xl shadow-lg p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-16">
      <div className="robot-section">
        <img src={robotImg} alt="Support Robot" className="zigzag-robot" />
        {/* Local fallback: src={robotImg} */}
      </div>

      <div className="content-section">
        <div className="rating">
          <h2>4.9/5.0</h2>
          <div className="stars">
            ⭐⭐⭐⭐⭐
          </div>
          <p>by 700+ customers for 3200+ clients</p>
        </div>

        <div className="contact-info">
          <div className="call">
            <span className="phone-icon">📞</span>
            <div>
              <p>CALL FOR ADVICE NOW!</p>
              <h3>+91 9399882934</h3>
            </div>
          </div>

          <div className="email">
            <span className="mail-icon">✉️</span>
            <div>
              <p>SAY HELLO</p>
              <a href="mailto:support@sparkvisioninfo.tech">
                adityajainghetal@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportBanner;