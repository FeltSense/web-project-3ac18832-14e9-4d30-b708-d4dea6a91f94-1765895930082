export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 overflow-hidden">
  {/* Animated background elements */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-amber-300/20 to-orange-300/20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-rose-300/20 to-pink-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-yellow-300/10 to-orange-300/10 rounded-full blur-3xl animate-pulse delay-500"></div>
  </div>

  {/* Main content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24 sm:pb-20">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      
      {/* Left content */}
      <div className="text-center lg:text-left space-y-8 lg:space-y-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-orange-100 px-5 py-2.5 rounded-full border border-amber-200/50 shadow-sm">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
          </span>
          <span className="text-sm font-semibold text-orange-900">Start Your Week Strong</span>
        </div>

        {/* Main headline */}
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 pb-2">
              Monday
            </span>
            <span className="block text-gray-900">
              Motivation Hub
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Transform every Monday into a launchpad for success. Join thousands who start their week with purpose, positivity, and power.
          </p>
        </div>

        {/* Feature highlights */}
        <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm font-medium">
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-orange-100">
            <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-gray-800">Daily Quotes</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-orange-100">
            <svg className="w-5 h-5 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <span className="text-gray-800">Uplifting Videos</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-orange-100">
            <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="text-gray-800">Weekly Challenges</span>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white font-bold text-lg rounded-2xl shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105 overflow-hidden">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Start Your Journey
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button className="px-8 py-4 bg-white/90 backdrop-blur-sm text-gray-900 font-bold text-lg rounded-2xl shadow-lg border-2 border-gray-200 hover:border-orange-300 hover:bg-white transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
            <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Watch Demo
          </button>
        </div>

        {/* Social proof */}
        <div className="flex items-center gap-6 justify-center lg:justify-start pt-4">
          <div className="flex -space-x-3">
            <div className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold text-sm shadow-md">A</div>
            <div className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center text-white font-bold text-sm shadow-md">M</div>
            <div className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-white font-bold text-sm shadow-md">S</div>
            <div className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold text-sm shadow-md">+</div>
          </div>
          <div className="text-left">
            <p className="text-gray-900 font-bold text-lg">12,000+ Members</p>
            <p className="text-gray-600 text-sm">Started their week right</p>
          </div>
        </div>
      </div>

      {/* Right content - Visual showcase */}
      <div className="relative lg:h-[600px] flex items-center justify-center">
        {/* Main card */}
        <div className="relative w-full max-w-lg mx-auto">
          {/* Floating quote card */}
          <div className="relative z-20 bg-white rounded-3xl shadow-2xl p-8 sm:p-10 transform hover:scale-105 transition-transform duration-300 border border-orange-100">
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl transform rotate-12">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>
            
            <div className="space-y-6">
              <p className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                "Every Monday is a chance to start a new life chapter."
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-400 to-orange-500"></div>
                <div>
                  <p className="font-bold text-gray-900">Sarah Chen</p>
                  <p className="text-sm text-gray-600">Entrepreneur</p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-sm font-semibold text-orange-600">Today&apos;s Motivation</span>
                <div className="flex gap-2">
                  <button className="p-2 rounded-full bg-amber-50 hover:bg-amber-100 transition-colors">
                    <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  </button>
                  <button className="p-2 rounded-full bg-orange-50 hover:bg-orange-100 transition-colors">
                    <svg className="w-5 h-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Floating mini cards */}
          <div className="absolute -right-4 top-12 sm:-right-8 sm:top-16 z-10 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl p-4 shadow-xl transform rotate-6 hover:rotate-12 transition-transform w-32 sm:w-36">
            <p className="text-white font-bold text-sm mb-1">Week 47</p>
            <p className="text-white/90 text-xs font-medium">Challenge Active</p>
            <div className="mt-2 flex items-center gap-1">
              <div className="h-1.5 flex-1 bg-white/30 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="absolute -left-4 bottom-12 sm:-left-8 sm:bottom-16 z-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl p-4 shadow-xl transform -rotate-6 hover:-rotate-12 transition-transform w-32 sm:w-36">
            <div className="flex items-center gap-2 mb-1">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
              </svg>
              <p className="text-white font-bold text-sm">5-Day Streak</p>
            </div>
            <p className="text-white/90 text-xs font-medium">Keep it up!</p>
          </div>
        </div>
      </div>

    </div>

    {/* Bottom stats bar */}
    <div className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
      <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-orange-100 hover:bg-white/80 transition-colors">
        <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">500+</p>
        <p className="text-gray-700 font-semibold mt-2">Daily Quotes</p>
      </div>
      <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-orange-100 hover:bg-white/80 transition-colors">
        <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-rose-600">200+</p>
        <p className="text-gray-700 font-semibold mt-2">Video Talks</p>
      </div>
      <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-orange-100 hover:bg-white/80 transition-colors">
        <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600">52</p>
        <p className="text-gray-700 font-semibold mt-2">Challenges/Year</p>
      </div>
      <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-orange-100 hover:bg-white/80 transition-colors">
        <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600">24/7</p>
        <p className="text-gray-700 font-semibold mt-2">Community</p>
      </div>
    </div>
  </div>
</div>
  );
}