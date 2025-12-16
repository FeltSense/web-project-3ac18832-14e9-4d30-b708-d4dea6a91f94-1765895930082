export default function Pricing() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-4">
  <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
    {/* Header */}
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-8 text-center">
      <h2 className="text-3xl font-bold text-white mb-2">Tech Business</h2>
      <p className="text-blue-100">Everything you need to succeed</p>
    </div>

    {/* Price */}
    <div className="px-8 py-8 text-center border-b border-gray-200">
      <div className="text-5xl font-bold text-gray-900 mb-2">$29</div>
      <p className="text-gray-600">one-time payment</p>
    </div>

    {/* Features */}
    <div className="px-8 py-8">
      <ul className="space-y-4">
        <li className="flex items-start gap-3">
          <span className="text-blue-600 font-bold text-lg mt-0.5">✓</span>
          <span className="text-gray-700">Curated daily motivational quotes (hand-selected and industry-specific)</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-blue-600 font-bold text-lg mt-0.5">✓</span>
          <span className="text-gray-700">Uplifting video content (shorts, talks, success stories)</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-blue-600 font-bold text-lg mt-0.5">✓</span>
          <span className="text-gray-700">Weekly community challenges (achievable, engaging, accountability)</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-blue-600 font-bold text-lg mt-0.5">✓</span>
          <span className="text-gray-700">Personalized motivation plans (based on user interests and goals)</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-blue-600 font-bold text-lg mt-0.5">✓</span>
          <span className="text-gray-700">Goal-setting and achievement tracking tools</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-blue-600 font-bold text-lg mt-0.5">✓</span>
          <span className="text-gray-700">Community features (share wins, celebrate others, build accountability partnerships)</span>
        </li>
      </ul>
    </div>

    {/* Button */}
    <div className="px-8 pb-8">
      <button onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00?client_reference_id=3ac18832-14e9-4d30-b708-d4dea6a91f94'} className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors">
        Get Your Website - $29
      </button>
    </div>
  </div>
</section>
  );
}