import { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ChevronDown,
  CheckCircle2
} from 'lucide-react';

export const ContactPanoramicSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    details: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', service: '', details: '' });
      }, 5000);
    }
  };

  return (
    <section className="relative w-full bg-[#faf8f4] text-[#1c1f24] overflow-hidden border-t border-gray-200">

      {/* 100% Full-Width Edge-to-Edge and Balanced-Height Cinematic Panoramic Section */}
      <div className="w-full min-h-[420px] lg:min-h-[460px] xl:min-h-[480px] grid grid-cols-1 lg:grid-cols-12 items-stretch">

        {/* =========================================
            LEFT COLUMN (~42%): Real High-Res On-Set Cinema Production with Feathered Fade
           ========================================= */}
        <div className="relative lg:col-span-5 min-h-[340px] sm:min-h-[380px] lg:min-h-full flex flex-col justify-center px-8 py-8 sm:px-12 lg:px-14 xl:px-16 z-10 overflow-hidden">

          {/* High-Resolution On-Set ARRI Camera & Clapperboard with Smooth CSS Feather Mask Dissolving to Cream */}
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              maskImage: 'linear-gradient(to right, black 0%, black 50%, rgba(0,0,0,0.85) 75%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, black 0%, black 50%, rgba(0,0,0,0.85) 75%, transparent 100%)'
            }}
          >
            <img
              src="/images (3).jpg"
              alt="Bhindi Production 8K Cinema Camera and Clapperboard on Set"
              className="w-full h-full object-cover object-[center_35%]"
            />
          </div>

          {/* Localized Subtle Text Legibility Scrim */}
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent pointer-events-none" />

          {/* Left Overlay Content */}
          <div className="relative z-10 space-y-3 sm:space-y-4 max-w-md">

            {/* Tagline: — GET IN TOUCH — */}
            <div className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#d4c185] uppercase">
              — GET IN TOUCH —
            </div>

            {/* Main Headline (Exact Serif 3-Line Title) */}
            <h2 className="font-serif-display font-bold text-2xl sm:text-3xl lg:text-[2.4rem] text-white tracking-tight leading-[1.14] drop-shadow-md">
              Let's Create <br />
              Something Amazing <br />
              Together.
            </h2>

            <p className="text-gray-200 text-xs sm:text-sm leading-relaxed max-w-sm drop-shadow-sm font-light">
              Collaborate with India's leading cinema production studio. From concept to 8K final mastering, we bring your vision to life.
            </p>

            {/* Pill Button: Learn More -> */}
            <div className="pt-1">
              <a
                href="#contact-middle-info"
                className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md border border-[#c6b47c]/50 text-white text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg group"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#c6b47c] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

        </div>

            {/* =========================================
                MIDDLE COLUMN (~28%): Direct Contact Badges & Social Icons
               ========================================= */}
            <div id="contact-middle-info" className="lg:col-span-3 flex flex-col justify-center px-6 py-6 sm:px-8 lg:py-6 lg:px-5 space-y-3.5 bg-[#faf8f4]">

              {/* 1. Phone Item */}
              <div className="flex items-start gap-3.5 group">
                <div className="w-9 h-9 rounded-full bg-[#dfe8d9] text-[#24361c] group-hover:bg-[#48633b] group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-300 shadow-xs">
                  <Phone className="w-4 h-4 stroke-[2.2]" />
                </div>
                <div className="min-w-0">
                  <a
                    href="tel:+919289377759"
                    className="font-bold text-xs sm:text-sm text-[#181b1f] hover:text-[#48633b] transition-colors block leading-tight"
                  >
                    +91 9289377759
                  </a>
                  <a
                    href="tel:+919289377758"
                    className="font-semibold text-[11px] sm:text-xs text-[#556f2d] hover:underline block leading-tight mt-0.5"
                  >
                    +91 9289377758
                  </a>
                  <p className="text-[10px] sm:text-[11px] text-[#7b838c] mt-0.5 leading-tight">
                    Mon - Sat, 9:30 AM – 7:30 PM
                  </p>
                </div>
              </div>

              {/* 2. Email Item */}
              <div className="flex items-start gap-3.5 group">
                <div className="w-9 h-9 rounded-full bg-[#dfe8d9] text-[#24361c] group-hover:bg-[#48633b] group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-300 shadow-xs">
                  <Mail className="w-4 h-4 stroke-[2.2]" />
                </div>
                <div className="min-w-0">
                  <a
                    href="mailto:info@bhindiproduction.com"
                    className="font-bold text-xs sm:text-sm text-[#181b1f] hover:text-[#48633b] transition-colors block leading-tight truncate"
                  >
                    info@bhindiproduction.com
                  </a>
                  <p className="text-[10px] sm:text-[11px] text-[#7b838c] mt-0.5 leading-tight">
                    We reply within 24 hours with project pitch deck
                  </p>
                </div>
              </div>

              {/* 3. Location Item */}
              <div className="flex items-start gap-3.5 group">
                <div className="w-9 h-9 rounded-full bg-[#dfe8d9] text-[#24361c] group-hover:bg-[#48633b] group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-300 shadow-xs">
                  <MapPin className="w-4 h-4 stroke-[2.2]" />
                </div>
                <div className="min-w-0">
                  <span className="font-bold text-xs sm:text-sm text-[#181b1f] block leading-tight">
                    T-4B-506, NX One Plot no.17, Techzone-4
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-[#5f6874] block leading-tight mt-0.5">
                    Greater Noida West, GAUTAM BUDDHA NAGAR, Pin 201308
                  </span>
                </div>
              </div>

              {/* 4. Social Media Minimalist Vector Icons */}
              <div className="pt-1 flex items-center gap-3 text-[#202327]">

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-7 h-7 rounded-full bg-[#e8efe4] hover:bg-[#48633b] text-[#24361c] hover:text-white flex items-center justify-center transition-colors shadow-xs"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.13-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="w-7 h-7 rounded-full bg-[#e8efe4] hover:bg-[#48633b] text-[#24361c] hover:text-white flex items-center justify-center transition-colors shadow-xs"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-7 h-7 rounded-full bg-[#e8efe4] hover:bg-[#48633b] text-[#24361c] hover:text-white flex items-center justify-center transition-colors shadow-xs"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                {/* X (Twitter) */}
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X (Twitter)"
                  className="w-7 h-7 rounded-full bg-[#e8efe4] hover:bg-[#48633b] text-[#24361c] hover:text-white flex items-center justify-center transition-colors shadow-xs"
                >
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

              </div>

            </div>

            {/* =========================================
                RIGHT COLUMN (~30%): Floating Dark Green Form Card
               ========================================= */}
            <div className="lg:col-span-4 p-4 sm:p-5 lg:p-6 flex items-center justify-center lg:justify-end bg-[#faf8f4]">

              <div className="w-full max-w-[390px] rounded-3xl bg-[#092212] border border-[#1e3c28] p-5 sm:p-6 shadow-2xl relative">

                {/* Form Title */}
                <h3 className="font-serif-display font-bold text-lg sm:text-xl text-[#e8f2dd] mb-3">
                  Start Your Project
                </h3>

                {submitted ? (
                  <div className="py-8 px-4 text-center space-y-2 bg-black/40 rounded-2xl border border-white/10">
                    <div className="w-10 h-10 rounded-full bg-[#18391f] text-[#a3c772] flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-white text-xs sm:text-sm">Message Sent Successfully!</h4>
                    <p className="text-[11px] text-gray-300">
                      Our production directors will reach out within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3">

                    {/* Row 1: Your Name & Your Email */}
                    <div className="grid grid-cols-2 gap-2.5">
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-[#04140a] border border-[#193721] focus:border-[#7ca553] text-xs text-white placeholder-[#647d6e] focus:outline-none transition-colors"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-[#04140a] border border-[#193721] focus:border-[#7ca553] text-xs text-white placeholder-[#647d6e] focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Row 2: Select Service Dropdown */}
                    <div className="relative">
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-[#04140a] border border-[#193721] focus:border-[#7ca553] text-xs text-white focus:outline-none transition-colors appearance-none pr-8 cursor-pointer"
                      >
                        <option value="" className="bg-[#092212] text-[#647d6e]">Select Service</option>
                        <option value="Feature Film Production" className="bg-[#092212] text-white">Feature Film Production</option>
                        <option value="Commercials & TV Ads" className="bg-[#092212] text-white">Commercials & TV Ads</option>
                        <option value="Music Videos" className="bg-[#092212] text-white">Music Videos</option>
                        <option value="Corporate Documentaries" className="bg-[#092212] text-white">Corporate Documentaries</option>
                        <option value="Post Production & Color" className="bg-[#092212] text-white">Post Production & Color</option>
                      </select>
                      <ChevronDown className="w-3.5 h-3.5 text-[#647d6e] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>

                    {/* Row 3: Project Details Textarea */}
                    <div>
                      <textarea
                        rows={2}
                        required
                        placeholder="Project Details (Script, timeline, scale)"
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-[#04140a] border border-[#193721] focus:border-[#7ca553] text-xs text-white placeholder-[#647d6e] focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    {/* Row 4: Submit Button */}
                    <div className="pt-0.5">
                      <button
                        type="submit"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-[#658744] hover:bg-[#749950] text-white text-xs font-semibold tracking-wide transition-all duration-300 shadow-md hover:shadow-lg active:scale-98 cursor-pointer group"
                      >
                        <span>Send Message</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#d8ebba] group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>

                  </form>
                )}

              </div>

            </div>

      </div>

      {/* Floating WhatsApp Quick Action Button */}
      <a
        href="https://wa.me/919289377759?text=Hello%20Bhindi%20Production,%20I%20have%20a%20project%20in%20mind!"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl transform hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>

  </section>
);
};
