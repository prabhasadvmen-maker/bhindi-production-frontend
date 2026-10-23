import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'Ad Films & Commercials',
    budget: '₹5L - ₹15L',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#556f2d]/30 text-center space-y-4 shadow-lg">
        <div className="w-16 h-16 rounded-full bg-[#edf4e6] text-[#556f2d] flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-serif-display font-bold text-2xl text-[#181b20]">Thank You for Reaching Out!</h3>
        <p className="text-gray-600 max-w-md mx-auto text-sm leading-relaxed">
          Our executive producers have received your project details. We will review your vision and respond within 24 hours with a production deck.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 px-6 py-2.5 rounded-full bg-[#23351d] hover:bg-[#344b2c] text-xs font-semibold text-white tracking-wider uppercase transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-white border border-[#556f2d]/20 shadow-lg space-y-5 sm:space-y-6">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs uppercase tracking-wider font-bold text-gray-700 mb-2">
            Your Name *
          </label>
          <input
            type="text"
            required
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Rahul Mehta"
            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 focus:border-[#556f2d] focus:bg-white text-gray-800 text-sm focus:outline-none transition-colors shadow-sm"
          />
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider font-bold text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            required
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="rahul@company.com"
            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 focus:border-[#556f2d] focus:bg-white text-gray-800 text-sm focus:outline-none transition-colors shadow-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs uppercase tracking-wider font-bold text-gray-700 mb-2">
            Phone / WhatsApp
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 "
            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 focus:border-[#556f2d] focus:bg-white text-gray-800 text-sm focus:outline-none transition-colors shadow-sm"
          />
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider font-bold text-gray-700 mb-2">
            Project Category
          </label>
          <select
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 focus:border-[#556f2d] focus:bg-white text-gray-800 text-sm focus:outline-none transition-colors shadow-sm"
          >
            <option>Film Production</option>
            <option>Ad Films & Commercials</option>
            <option>Corporate Films</option>
            <option>Music Videos</option>
            <option>Events & Live Production</option>
            <option>Post-Production & Creative</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-wider font-bold text-gray-700 mb-2">
          Estimated Production Budget
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {['< ₹5 Lakhs', '₹5L - ₹15L', '₹15L - ₹50L', '₹50L+'].map((tier) => (
            <button
              type="button"
              key={tier}
              onClick={() => setFormData(prev => ({ ...prev, budget: tier }))}
              className={`py-2 px-3 rounded-xl text-xs font-mono font-bold border transition-all ${
                formData.budget === tier 
                  ? 'border-[#556f2d] bg-[#edf4e6] text-[#24361e]' 
                  : 'border-gray-200 bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tier}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-wider font-bold text-gray-700 mb-2">
          Project Brief / Vision *
        </label>
        <textarea
          required
          rows={4}
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your story, timeline, deliverables, or target audience..."
          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 focus:border-[#556f2d] focus:bg-white text-gray-800 text-sm focus:outline-none transition-colors shadow-sm"
        />
      </div>

      <button
        type="submit"
        className="w-full py-4 rounded-full bg-[#23351d] hover:bg-[#344b2c] text-white font-serif-display font-bold text-sm tracking-wider uppercase transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
      >
        <span>Send Inquiry</span>
        <Send className="w-4 h-4 text-[#c5db82]" />
      </button>

    </form>
  );
};
