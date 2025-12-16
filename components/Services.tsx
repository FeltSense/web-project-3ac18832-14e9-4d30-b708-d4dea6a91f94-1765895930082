import Image from 'next/image';

export default function Services() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
  {/* Animated background elements */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-300/20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-rose-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
  </div>

  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {/* Header */}
    <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
      <div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-orange-500 to-rose-500 text-white rounded-full text-sm font-semibold shadow-lg transform hover:scale-105 transition-transform">
        ✨ Transform Your Mondays
      </div>
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
        Fuel Your Week with
        <span className="block mt-2 bg-gradient-to-r from-orange-600 via-rose-500 to-pink-600 bg-clip-text text-transparent">
          Purpose & Energy
        </span>
      </h2>
      <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
        Four powerful ways to ignite your motivation and achieve your goals, week after week
      </p>
    </div>

    {/* Services Grid - Unique Layout */}
    <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
      
      {/* Service 1 - Large Feature Card */}
      <div className="lg:row-span-2 group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-rose-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
        <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
          <Image 
            src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&h=600&fit=crop" 
            width={800} 
            height={600} 
            alt="Person reading motivational quotes on tablet with coffee"
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-full px-5 py-2 shadow-lg">
            <span className="text-orange-600 font-bold text-sm">📖 Daily Inspiration</span>
          </div>
        </div>
        <div className="p-8 lg:p-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-rose-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg transform group-hover:rotate-12 transition-transform duration-500">
              ✍️
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Curated Daily Quotes
            </h3>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Hand-selected motivational quotes tailored to your industry and personal journey. Each morning, receive wisdom from thought leaders, entrepreneurs, and visionaries who&apos;ve walked your path.
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-orange-500 text-xl mt-0.5">→</span>
              <span className="text-gray-700">Industry-specific quotes for professionals, creatives & entrepreneurs</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 text-xl mt-0.5">→</span>
              <span className="text-gray-700">Save favorites to your personal inspiration library</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 text-xl mt-0.5">→</span>
              <span className="text-gray-700">Share with your team or social networks</span>
            </li>
          </ul>
          <div className="inline-flex items-center gap-2 text-orange-600 font-semibold group-hover:gap-4 transition-all">
            Start your day right
            <span className="text-xl">→</span>
          </div>
        </div>
      </div>

      {/* Service 2 - Medium Card */}
      <div className="group relative bg-gradient-to-br from-rose-500 to-pink-600 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative p-8 lg:p-10 text-white h-full flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-2xl shadow-lg transform group-hover:rotate-12 transition-transform duration-500">
              🎥
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold">
              Uplifting Videos
            </h3>
          </div>
          <p className="text-white/95 text-lg leading-relaxed mb-6 flex-grow">
            Energizing video content that sparks action. From 60-second motivational shorts to powerful TED-style talks and real success stories from people just like you.
          </p>
          <div className="relative h-48 rounded-2xl overflow-hidden mb-6 border-4 border-white/30">
            <Image 
              src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800&h=600&fit=crop" 
              width={800} 
              height={600} 
              alt="Motivational speaker on stage inspiring audience"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <span className="text-3xl text-rose-600">▶</span>
              </div>
            </div>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-yellow-300 text-xl mt-0.5">★</span>
              <span className="text-white/95">Quick motivation shots for busy schedules</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-300 text-xl mt-0.5">★</span>
              <span className="text-white/95">In-depth success story documentaries</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Service 3 - Medium Card */}
      <div className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-bl-full opacity-10"></div>
        <div className="relative p-8 lg:p-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg transform group-hover:rotate-12 transition-transform duration-500">
              🏆
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Weekly Challenges
            </h3>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Join a vibrant community tackling achievable goals together. From fitness sprints to creative projects, each challenge builds momentum and accountability.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-4 border-2 border-orange-200">
              <div className="text-3xl font-bold text-orange-600 mb-1">2,847</div>
              <div className="text-sm text-gray-700 font-medium">Active Members</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-4 border-2 border-orange-200">
              <div className="text-3xl font-bold text-orange-600 mb-1">156</div>
              <div className="text-sm text-gray-700 font-medium">Weekly Challenges</div>
            </div>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-orange-500 text-xl mt-0.5">✓</span>
              <span className="text-gray-700">Track progress with visual milestone boards</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 text-xl mt-0.5">✓</span>
              <span className="text-gray-700">Celebrate wins with the community</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 text-xl mt-0.5">✓</span>
              <span className="text-gray-700">Unlock achievement badges & rewards</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Service 4 - Wide Feature Card */}
      <div className="lg:col-span-2 group relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-rose-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative p-8 lg:p-12 text-white">
            <div className="inline-flex items-center gap-2 mb-6 bg-gradient-to-r from-orange-500 to-rose-500 px-4 py-2 rounded-full text-sm font-semibold">
              <span>🎯</span>
              <span>Premium Feature</span>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              Personalized Motivation Plans
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Your goals are unique, and your motivation should be too. Our AI-powered system creates a custom roadmap based on your interests, challenges, and aspirations.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-400 text-xl">🎨</span>
                </div>
                <div>
                  <div className="font-semibold text-white mb-1">Adaptive Content</div>
                  <div className="text-gray-400 text-sm">Evolves with your progress and changing goals</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-rose-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-rose-400 text-xl">📊</span>
                </div>
                <div>
                  <div className="font-semibold text-white mb-1">Progress Analytics</div>
                  <div className="text-gray-400 text-sm">Visual insights into your motivation journey</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-pink-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-pink-400 text-xl">💌</span>
                </div>
                <div>
                  <div className="font-semibold text-white mb-1">Smart Reminders</div>
                  <div className="text-gray-400 text-sm">Perfectly timed nudges when you need them most</div>
                </div>
              </div>
            </div>
            <button className="bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Get Your Custom Plan
            </button>
          </div>
          <div className="relative h-full min-h-[300px] lg:min-h-[400px]">
            <Image 
              src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop" 
              width={800} 
              height={600} 
              alt="Person planning goals in modern workspace with laptop and notebook"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent lg:bg-gradient-to-r"></div>
          </div>
        </div>
      </div>

    </div>

    {/* Bottom CTA */}
    <div className="text-center mt-16 lg:mt-24">
      <p className="text-gray-700 text-lg mb-6">
        Ready to transform your Mondays from mundane to magnificent?
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button className="bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white font-bold px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
          Start Free Trial
        </button>
        <button className="bg-white hover:bg-gray-50 text-gray-900 font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-xl border-2 border-gray-200 transform hover:scale-105 transition-all duration-300">
          Explore Plans
        </button>
      </div>
    </div>
  </div>
</section>
  );
}