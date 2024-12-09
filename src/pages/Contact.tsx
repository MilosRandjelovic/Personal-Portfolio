import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-gray-800 bg-clip-text text-transparent">
          Get in Touch
        </h2>
        <p className="text-center text-gray-600 mb-12">
          "Communication is the key to great collaboration and amazing results."
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <Mail className="text-blue-600" size={24} />
              <div>
                <h3 className="text-xl font-semibold mb-1">Email</h3>
                <a
                  href="mailto:milosrandjelovic1979@gmail.com"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  milosrandjelovic1979@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Phone className="text-blue-600" size={24} />
              <div>
                <h3 className="text-xl font-semibold mb-1">Phone</h3>
                <a
                  href="tel:+381642087645"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  +381 64 208 7645
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <MapPin className="text-blue-600" size={24} />
              <div>
                <h3 className="text-xl font-semibold mb-1">Location</h3>
                <p className="text-gray-600">Nis, Serbia</p>
              </div>
            </div>
          </div>

          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg bg-white p-8 flex items-center justify-center">
            <div className="web-dev-logo">
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full animate-pulse"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Outer Circle */}
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  stroke="url(#gradient)"
                  strokeWidth="4"
                  className="animate-spin-slow"
                />
                
                {/* Code Brackets */}
                <path
                  d="M60 70L40 100L60 130"
                  stroke="url(#gradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="animate-pulse"
                />
                <path
                  d="M140 70L160 100L140 130"
                  stroke="url(#gradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="animate-pulse"
                />
                
                {/* Central Element */}
                <path
                  d="M90 60L110 140"
                  stroke="url(#gradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  className="animate-pulse"
                />
                
                {/* Gradient Definition */}
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0"
                    y1="0"
                    x2="200"
                    y2="200"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#1f2937" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;