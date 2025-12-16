import Image from 'next/image';

export default function Testimonials() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 overflow-hidden">
  {/* Decorative background elements */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-300/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
  
  <div className="max-w-7xl mx-auto relative z-10">
    {/* Section Header */}
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full mb-4">
        <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <span className="text-sm font-semibold text-orange-700">Community Stories</span>
      </div>
      <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
        Real Transformations,
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-rose-600">
          Real People
        </span>
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        See how our community is crushing their goals and starting every Monday with purpose
      </p>
    </div>

    {/* Testimonials Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {/* Testimonial 1 - Featured Large Card */}
      <div className="md:col-span-2 lg:col-span-1 bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-orange-200 relative group">
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
        
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <Image 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" 
              width={64} 
              height={64} 
              alt="Sarah Chen"
              className="rounded-full ring-4 ring-orange-100"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white"></div>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-lg">Sarah Chen</h3>
            <p className="text-sm text-gray-500">Marketing Director</p>
          </div>
        </div>
        
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        
        <p className="text-gray-700 leading-relaxed mb-4">
          "I used to dread Mondays. Now I wake up excited! The weekly challenges helped me <strong className="text-orange-600">complete 52 personal projects</strong> in a year – including finishing my first marathon and launching my side business. The personalized motivation plans keep me accountable."
        </p>
        
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full">52 weeks streak</span>
          <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">Premium Member</span>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative group overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-rose-300 to-orange-300 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
        
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <Image 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
              width={64} 
              height={64} 
              alt="Marcus Johnson"
              className="rounded-full ring-4 ring-rose-100"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white"></div>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-lg">Marcus Johnson</h3>
            <p className="text-sm text-gray-500">Software Engineer</p>
          </div>
        </div>
        
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        
        <p className="text-gray-700 leading-relaxed mb-4">
          "The community support is incredible. I&apos;ve shared <strong className="text-rose-600">89 weekly wins</strong> and received thousands of encouragements. The exclusive motivational videos at 6 AM every Monday have become my sacred ritual. Worth every penny!"
        </p>
        
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-rose-100 text-rose-700 text-xs font-medium rounded-full">Top Contributor</span>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative group overflow-hidden">
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-amber-300 to-yellow-300 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
        
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <Image 
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" 
              width={64} 
              height={64} 
              alt="Emily Rodriguez"
              className="rounded-full ring-4 ring-amber-100"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white"></div>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-lg">Emily Rodriguez</h3>
            <p className="text-sm text-gray-500">Small Business Owner</p>
          </div>
        </div>
        
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        
        <p className="text-gray-700 leading-relaxed mb-4">
          "My productivity skyrocketed! I&apos;ve consistently hit <strong className="text-amber-600">all 12 quarterly goals</strong> this year using the goal-setting framework. The curated quotes get me in the zone, and the accountability partners feature is a game-changer."
        </p>
        
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">Goal Crusher</span>
        </div>
      </div>

      {/* Testimonial 4 */}
      <div className="md:col-span-2 lg:col-span-1 bg-gradient-to-br from-orange-500 to-rose-500 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-white relative group overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
        
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <Image 
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop" 
              width={64} 
              height={64} 
              alt="David Park"
              className="rounded-full ring-4 ring-white/30"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-4 border-orange-500"></div>
          </div>
          <div>
            <h3 className="font-bold text-white text-lg">David Park</h3>
            <p className="text-sm text-orange-100">Fitness Coach</p>
          </div>
        </div>
        
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-300 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        
        <p className="text-white/95 leading-relaxed mb-4">
          "I recommend this to all my clients now. The personalized motivation plans adapt to your interests – mine focuses on fitness and entrepreneurship. I&apos;ve watched <strong className="text-yellow-300">over 200 motivational videos</strong> and each one hits different. My client retention is up 40% since I started using this myself!"
        </p>
        
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">200+ Videos Watched</span>
          <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">Early Adopter</span>
        </div>
      </div>

      {/* Stats Card */}
      <div className="md:col-span-2 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-orange-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-rose-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-white mb-2">Join 50,000+ Motivated Members</h3>
          <p className="text-gray-300 mb-8">Transform your Mondays, transform your life</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mb-1">2.3M+</div>
              <div className="text-sm text-gray-400">Weekly Goals Set</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400 mb-1">98%</div>
              <div className="text-sm text-gray-400">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400 mb-1">450K+</div>
              <div className="text-sm text-gray-400">Achievements Shared</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-1">24/7</div>
              <div className="text-sm text-gray-400">Community Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom CTA */}
    <div className="text-center mt-16">
      <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-rose-500 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
        <span>Start Your Monday Transformation</span>
        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </button>
      <p className="text-sm text-gray-500 mt-4">Join free for 14 days • No credit card required</p>
    </div>
  </div>
</section>
  );
}