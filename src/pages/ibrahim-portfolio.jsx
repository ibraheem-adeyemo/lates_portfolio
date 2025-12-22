import React, { useState, useEffect } from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';

export default function IbrahimPortfolio() {
  const [text, setText] = useState('');
  const fullText = 'I build FULLSTACK applications.';
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Inter', sans-serif;
        }
        
        .font-mono {
          font-family: 'JetBrains Mono', monospace;
        }
        
        .hero-gradient {
          background: linear-gradient(135deg, #f5f7fa 0%, #f0f2f5 100%);
        }
        
        .fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .delay-1 { animation-delay: 0.1s; opacity: 0; }
        .delay-2 { animation-delay: 0.2s; opacity: 0; }
        .delay-3 { animation-delay: 0.3s; opacity: 0; }
        .delay-4 { animation-delay: 0.4s; opacity: 0; }
        
        .btn-primary {
          background: #000000;
          color: white;
          padding: 14px 36px;
          border: none;
          border-radius: 4px;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .btn-primary:hover {
          background: #1a1a1a;
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(0,0,0,0.15);
        }
        
        .btn-secondary {
          background: transparent;
          color: #000000;
          padding: 14px 36px;
          border: 2px solid #000000;
          border-radius: 4px;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .btn-secondary:hover {
          background: #000000;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(0,0,0,0.15);
        }
        
        .illustration-float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .cursor-blink {
          animation: blink 1s step-end infinite;
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>

      {/* Top Contact Bar */}
      <div className="bg-black text-white py-3 px-6">
        <div className="max-w-7xl mx-auto flex justify-end items-center gap-8 text-sm">
          <a href="tel:+2347035853137" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
            <Phone size={16} />
            <span>+234 70 3585 3137</span>
          </a>
          <a href="mailto:aderemilibrahim11@gmail.com" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
            <Mail size={16} />
            <span>aderemilibrahim11@gmail.com</span>
          </a>
          <a href="https://wa.me/2347035853137" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
            <MessageCircle size={16} />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center py-20 px-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-light text-gray-800 fade-in delay-1">
                  Hi,
                </h2>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black fade-in delay-2">
                  I'm Ibrahim Adeyemo
                </h1>
              </div>

              <div className="font-mono text-xl md:text-2xl text-gray-700 fade-in delay-3">
                {text}
                {showCursor && <span className="cursor-blink">|</span>}
              </div>

              <div className="flex flex-wrap gap-4 pt-4 fade-in delay-4">
                <button className="btn-primary">
                  Hire Me
                </button>
                <button className="btn-secondary">
                  Book a Meeting
                </button>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="relative illustration-float fade-in delay-4 bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl shadow-lg">
              <div className="bg-white p-6 rounded-lg mb-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">👨‍💻 Developer Workspace</h3>
                <p className="text-gray-600 text-sm">Interactive illustration coming soon!</p>
              </div>
              <svg viewBox="0 0 800 600" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                {/* Vibrant background */}
                <rect width="800" height="600" fill="#f0f4f8"/>

                {/* Floating Icons - Made more visible */}
                <g className="floating-icons">
                  {/* Lock Icon */}
                  <circle cx="150" cy="120" r="20" fill="#FF6B9D"/>
                  <path d="M145 115 L155 115 L155 110 C155 107 152 105 150 105 C148 105 145 107 145 110 Z M143 115 L143 125 L157 125 L157 115" fill="#FF6B9D" stroke="#D63369" strokeWidth="2"/>

                  {/* Email Icon */}
                  <rect x="680" y="130" width="40" height="30" rx="4" fill="#4A9EFF"/>
                  <path d="M680 135 L700 150 L720 135" fill="none" stroke="white" strokeWidth="3"/>

                  {/* Cloud Icon */}
                  <ellipse cx="760" cy="200" rx="25" ry="15" fill="#FFD93D"/>
                  <ellipse cx="745" cy="205" rx="20" ry="12" fill="#FFC93D"/>

                  {/* Star */}
                  <path d="M490 90 L495 100 L505 100 L497 107 L500 117 L490 110 L480 117 L483 107 L475 100 L485 100 Z" fill="#A8E6CF"/>

                  {/* Lightning */}
                  <path d="M500 370 L490 390 L495 390 L485 410 L500 390 L495 390 Z" fill="#FFD93D"/>

                  {/* Message Bubble */}
                  <circle cx="730" cy="320" r="25" fill="#B4E7CE"/>
                  <path d="M725 310 L735 310 L730 320 Z" fill="#B4E7CE"/>

                  {/* Circle decoration */}
                  <circle cx="120" cy="200" r="8" fill="none" stroke="#4A9EFF" strokeWidth="3"/>
                </g>

                {/* Desk Setup */}
                <g className="desk-setup">
                  {/* Plant */}
                  <ellipse cx="650" cy="530" rx="45" ry="25" fill="#CCCCCC"/>
                  <rect x="630" y="480" width="40" height="50" rx="2" fill="#FFFFFF" stroke="#999999" strokeWidth="3"/>
                  {/* Leaves */}
                  <ellipse cx="640" cy="460" rx="30" ry="40" fill="#7FB069"/>
                  <ellipse cx="660" cy="450" rx="35" ry="45" fill="#6FAF5F"/>
                  <ellipse cx="650" cy="470" rx="25" ry="35" fill="#8FC77F"/>

                  {/* Desk */}
                  <rect x="250" y="450" width="350" height="15" rx="4" fill="#E8A87C"/>
                  <rect x="255" y="465" width="8" height="100" fill="#8B6F47"/>
                  <rect x="587" y="465" width="8" height="100" fill="#8B6F47"/>
                  
                  {/* Chair Seat */}
                  <ellipse cx="350" cy="480" rx="40" ry="15" fill="#4A5568"/>
                  <rect x="310" y="465" width="80" height="15" rx="8" fill="#5A6B7F"/>
                  
                  {/* Chair Back */}
                  <rect x="325" y="410" width="50" height="60" rx="25" fill="#5A6B7F"/>
                  
                  {/* Chair Leg */}
                  <rect x="345" y="480" width="10" height="50" fill="#4A5568"/>
                  <ellipse cx="350" cy="535" rx="30" ry="8" fill="#3A4558"/>

                  {/* Person Body */}
                  <ellipse cx="390" cy="400" rx="45" ry="55" fill="#5B7C99"/>
                  
                  {/* Person Arms */}
                  <ellipse cx="430" cy="420" rx="15" ry="45" fill="#E8B899" transform="rotate(-20 430 420)"/>
                  <ellipse cx="420" cy="440" rx="12" ry="35" fill="#5B7C99" transform="rotate(-30 420 440)"/>
                  
                  {/* Person Head */}
                  <circle cx="390" cy="340" r="35" fill="#E8B899"/>
                  
                  {/* Hair */}
                  <path d="M360 330 Q365 310 390 310 Q415 310 420 330 Q420 340 415 345 Q390 325 365 345 Q360 340 360 330 Z" fill="#4A3A2A"/>
                  
                  {/* Coffee Cup */}
                  <rect x="540" y="440" width="25" height="30" rx="3" fill="#4A9EFF"/>
                  <ellipse cx="552.5" cy="440" rx="12.5" ry="5" fill="#4A9EFF"/>
                  <path d="M565 450 Q575 450 575 460 Q575 465 565 465" fill="none" stroke="#4A9EFF" strokeWidth="3"/>

                  {/* Laptop */}
                  <rect x="420" y="425" width="120" height="8" rx="2" fill="#2D3748"/>
                  <rect x="425" y="360" width="110" height="65" rx="3" fill="#1A202C" stroke="#4A5568" strokeWidth="2"/>
                  
                  {/* Laptop Screen Content */}
                  <rect x="430" y="365" width="100" height="55" fill="#0F1419"/>
                  <text x="435" y="380" fill="#4A9EFF" fontSize="8" fontFamily="monospace">{"<div>"}</text>
                  <text x="445" y="390" fill="#7FB069" fontSize="8" fontFamily="monospace">{"const App"}</text>
                  <text x="435" y="400" fill="#FFD93D" fontSize="8" fontFamily="monospace">{"function"}</text>
                  <text x="445" y="410" fill="#FF6B9D" fontSize="8" fontFamily="monospace">{"return"}</text>
                  <text x="435" y="420" fill="#4A9EFF" fontSize="8" fontFamily="monospace">{"</div>"}</text>

                  {/* Monitor 1 - Left */}
                  <rect x="280" y="280" width="140" height="100" rx="4" fill="#2C3E50" transform="rotate(-5 350 330)"/>
                  <rect x="285" y="285" width="130" height="90" fill="#1A252F" transform="rotate(-5 350 330)"/>
                  
                  {/* Monitor 1 Content - Chart */}
                  <circle cx="330" cy="330" r="30" fill="none" stroke="#FF6B9D" strokeWidth="3" strokeDasharray="60 130" transform="rotate(-90 330 330) rotate(-5 330 330)"/>
                  <circle cx="330" cy="330" r="25" fill="none" stroke="#4A9EFF" strokeWidth="3" strokeDasharray="80 78" transform="rotate(-90 330 330) rotate(-5 330 330)"/>
                  <path d="M290 350 Q310 330 330 345 T370 340" fill="none" stroke="#7FB069" strokeWidth="2" transform="rotate(-5 330 330)"/>
                  
                  {/* Monitor 1 Stand */}
                  <rect x="345" y="380" width="10" height="40" fill="#34495E" transform="rotate(-5 350 400)"/>
                  <ellipse cx="350" cy="425" rx="30" ry="8" fill="#2C3E50" transform="rotate(-5 350 425)"/>

                  {/* Monitor 2 - Right */}
                  <rect x="430" y="260" width="160" height="110" rx="4" fill="#2C3E50" transform="rotate(8 510 315)"/>
                  <rect x="435" y="265" width="150" height="100" fill="#1A252F" transform="rotate(8 510 315)"/>
                  
                  {/* Monitor 2 Content - Code */}
                  <rect x="442" y="272" width="136" height="86" fill="#0F1419" transform="rotate(8 510 315)"/>
                  {/* Code lines */}
                  <line x1="450" y1="285" x2="560" y2="285" stroke="#4A9EFF" strokeWidth="2" transform="rotate(8 510 315)"/>
                  <line x1="450" y1="295" x2="540" y2="295" stroke="#7FB069" strokeWidth="2" transform="rotate(8 510 315)"/>
                  <line x1="450" y1="305" x2="570" y2="305" stroke="#FFD93D" strokeWidth="2" transform="rotate(8 510 315)"/>
                  <line x1="450" y1="315" x2="530" y2="315" stroke="#FF6B9D" strokeWidth="2" transform="rotate(8 510 315)"/>
                  <line x1="450" y1="325" x2="555" y2="325" stroke="#4A9EFF" strokeWidth="2" transform="rotate(8 510 315)"/>
                  <line x1="450" y1="335" x2="545" y2="335" stroke="#7FB069" strokeWidth="2" transform="rotate(8 510 315)"/>
                  <line x1="450" y1="345" x2="565" y2="345" stroke="#FFD93D" strokeWidth="2" transform="rotate(8 510 315)"/>
                  
                  {/* Circles decoration on monitor */}
                  <circle cx="480" cy="295" r="8" fill="none" stroke="#4ECDC4" strokeWidth="2" transform="rotate(8 510 315)"/>
                  <circle cx="500" cy="295" r="8" fill="none" stroke="#FF6B9D" strokeWidth="2" transform="rotate(8 510 315)"/>
                  <circle cx="520" cy="295" r="8" fill="none" stroke="#95E1D3" strokeWidth="2" transform="rotate(8 510 315)"/>
                  <circle cx="540" cy="295" r="8" fill="none" stroke="#FFD93D" strokeWidth="2" transform="rotate(8 510 315)"/>
                  
                  {/* Monitor 2 Stand */}
                  <rect x="505" y="370" width="10" height="50" fill="#34495E" transform="rotate(8 510 395)"/>
                  <ellipse cx="510" cy="425" rx="35" ry="8" fill="#2C3E50" transform="rotate(8 510 425)"/>
                </g>

                {/* Shadow under desk */}
                <ellipse cx="425" cy="570" rx="200" ry="30" fill="#000000" opacity="0.05"/>
              </svg>
            </div>
          </div>

          {/* About Me Section Indicator */}
          <div className="text-center mt-20 fade-in delay-4">
            <h3 className="text-lg font-semibold">
              <span className="text-gray-400 mr-4">01</span>
              <span className="text-orange-500">About Me</span>
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
}