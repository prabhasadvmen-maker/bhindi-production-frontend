import { ContactForm } from '../components/contact/ContactForm';
import { MapPin, Building2, Phone, Mail, Clock } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="bg-[#fbfaf6] text-[#1c1f24] min-h-screen">

      {/* =========================================
          CONTACT US PAGE HEADER HERO
         ========================================= */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-[#f4f7ef] via-[#fafcf6] to-[#fbfaf6] border-b border-gray-200 overflow-hidden">
        
        {/* Subtle organic background ambient glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#edf4e6] rounded-full blur-3xl pointer-events-none opacity-60" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#e7efdf] rounded-full blur-3xl pointer-events-none opacity-50" />

        <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto space-y-4">
          
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#556f2d]">
            <span className="w-3.5 h-[1.5px] bg-[#556f2d] inline-block" />
            <span>GET IN TOUCH</span>
            <span className="w-3.5 h-[1.5px] bg-[#556f2d] inline-block" />
          </div>

          <h1 className="font-serif-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#181b20] tracking-tight leading-tight">
            Let's Connect & <br />
            <span className="text-[#556f2d]">Collaborate.</span>
          </h1>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Whether you have an upcoming brand commercial, a feature film script, a music video, or a documentary brief, our creative directors and line producers are ready to bring your story to life.
          </p>

        </div>
      </section>

      {/* =========================================
          MAIN CONTACT CONTENT: Direct Channels + Interactive Form
         ========================================= */}
      <section className="py-14 sm:py-20 w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">

          {/* Left Details & Hubs (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#556f2d]">
                PRODUCTION CHANNELS
              </span>
              <h2 className="font-serif-display font-bold text-2xl sm:text-3xl text-[#181b20]">
                Connect Directly With Our Production Hubs
              </h2>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Reach out for initial pitch presentations, line production logistics, budget estimates, or scheduling a visit to our suites.
              </p>
            </div>

            {/* Hub Details Cards */}
            <div className="space-y-3.5 pt-2">
              
              {/* Greater Noida Corporate Office */}
              <div className="p-5 rounded-2xl bg-white border border-[#556f2d]/20 shadow-xs flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-[#eaf1e3] text-[#3c5225] flex items-center justify-center shrink-0 mt-0.5">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#181b20] text-sm">Corporate Office & Creative Hub</h4>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                    Greater Noida West, Uttar Pradesh, 201318
                  </p>
                  <span className="text-[11px] font-semibold text-[#556f2d] block mt-1">
                    Script Development & Executive Direction
                  </span>
                </div>
              </div>

              {/* Mumbai Studio Hub */}
              <div className="p-5 rounded-2xl bg-white border border-[#556f2d]/20 shadow-xs flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-[#eaf1e3] text-[#3c5225] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#181b20] text-sm">Mumbai Studio & Post Facilities</h4>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                    Studio 4B, Film City Road, Goregaon (East), Mumbai 400065
                  </p>
                  <span className="text-[11px] font-semibold text-[#556f2d] block mt-1">
                    DaVinci DI Color Suite & Sound Stage
                  </span>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="p-5 rounded-2xl bg-white border border-[#556f2d]/20 shadow-xs flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-[#eaf1e3] text-[#3c5225] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#181b20] text-sm">Direct Phone & WhatsApp</h4>
                  <a href="tel:+919876543210" className="text-xs text-gray-700 hover:text-[#556f2d] transition-colors mt-0.5 block font-medium">
                    +91 98765 43210 / +91 98200 12345
                  </a>
                  <span className="text-[11px] text-gray-400 block mt-0.5">
                    Mon - Sat, 9:30 AM – 7:30 PM IST
                  </span>
                </div>
              </div>

              {/* Email Inquiries */}
              <div className="p-5 rounded-2xl bg-white border border-[#556f2d]/20 shadow-xs flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-[#eaf1e3] text-[#3c5225] flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#181b20] text-sm">Email Inquiries</h4>
                  <a href="mailto:hello@bhindiproduction.com" className="text-xs text-gray-700 hover:text-[#556f2d] transition-colors mt-0.5 block font-medium">
                    hello@bhindiproduction.com
                  </a>
                  <span className="text-[11px] text-gray-400 block mt-0.5">
                    We reply within 24 hours with project pitch deck
                  </span>
                </div>
              </div>

              {/* Production Hours */}
              <div className="p-5 rounded-2xl bg-white border border-[#556f2d]/20 shadow-xs flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-[#eaf1e3] text-[#3c5225] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#181b20] text-sm">Set Operations & Availability</h4>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Monday – Saturday: 9:30 AM – 7:30 PM IST
                  </p>
                  <span className="text-[11px] font-semibold text-[#556f2d] block mt-1">
                    24/7 On-Call Support for Active Filming Sets
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Interactive Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </section>

    </div>
  );
};
