const Footer = () => {
  return (
    <footer className="bg-[#232323] text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Newsletter Section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white">
            Building Your Dreams in Real Estate
          </h3>
          
          <div className="space-y-4">
            <div>
              <p className="text-lg font-medium text-gray-300">Subscribe to Our News</p>
              <p className="text-gray-400 text-sm">Stay informed and never miss a deal</p>
            </div>
            
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-white placeholder-gray-500"
              />
              <button className="px-6 py-2 bg-white text-gray-900 rounded-lg hover:bg-gray-200 transition-colors duration-300 font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">Quick Navigation</h4>
          <nav className="flex flex-col space-y-2">
            <a href="/" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a>
            <a href="/properties" className="text-gray-400 hover:text-white transition-colors duration-300">Our Properties</a>
            <a href="/signup" className="text-gray-400 hover:text-white transition-colors duration-300">Sign Up</a>
            <a href="/login" className="text-gray-400 hover:text-white transition-colors duration-300">Sign In</a>
          </nav>
        </div>

        {/* Contact & Legal */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gray-800 rounded-full">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-400">Founder</p>
              <p className="text-lg font-semibold text-white">Ethan Thompson</p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 space-y-2">
            <p className="text-sm text-gray-400">&copy; 2025 Golden Gate Properties. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;