import { ContactForm } from '../components/contact/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="bg-[#fbfaf6] text-[#1c1f24] min-h-screen">
      
      {/* Contact Header Banner (Olive & White Theme with Organic Backdrop) */}
      <section className="relative py-20 sm:py-28 bg-[#f5f4ed] border-b border-gray-200 overflow-hidden">
        
        {/* Organic leaves artistic backdrop design (Matching Services) */}
        <div className="absolute top-1/2 right-12 -translate-y-1/2 w-80 h-96 pointer-events-none hidden lg:block opacity-65">
          <div className="relative w-full h-full">
            <div className="absolute -top-6 -left-4 w-52 h-64 bg-[#dbe6cf] rounded-[45%_55%_70%_30%/30%_60%_40%_70%] transform rotate-[-12deg] opacity-80" />
            <div className="absolute -bottom-8 -right-4 w-60 h-60 bg-[#6b8543] rounded-[50%_50%_40%_60%/40%_60%_50%_50%] transform rotate-[20deg] opacity-85 shadow-sm" />
            <div className="absolute -left-6 top-1/4 w-36 h-52 bg-[#465a29] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] transform rotate-[-40deg] opacity-90" />
          </div>
        </div>

        {/* Subtle decorative leaf graphics in corners */}
        <div className="absolute top-0 right-0 w-72 h-72 text-[#556f2d]/10 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="currentColor">
            <path d="M10 90 Q40 50 80 40 Q50 70 10 90 Z" />
            <path d="M15 95 Q55 60 90 60 Q60 85 15 95 Z" />
          </svg>
        </div>

        <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#556f2d] mb-3">
            <span className="w-3.5 h-[1.5px] bg-[#556f2d] inline-block" />
            <span>GET IN TOUCH</span>
            <span className="w-3.5 h-[1.5px] bg-[#556f2d] inline-block" />
          </div>

          <h1 className="font-serif-display font-bold text-4xl sm:text-6xl text-[#181b20] tracking-tight leading-tight">
            Have a Project in Mind? <br />
            <span className="text-[#556f2d]">Let's Talk.</span>
          </h1>

          <p className="text-gray-600 max-w-2xl mt-4 text-base sm:text-lg leading-relaxed">
            Whether you have a fully formed script or just the spark of an idea, we're ready to collaborate and bring it to the big screen.
          </p>
        </div>
      </section>

      {/* Main Grid: Studio Hub Info + Form */}
      <section className="py-20 w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Details (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#556f2d]">
                DIRECT CHANNELS
              </span>
              <h2 className="font-serif-display font-bold text-2xl sm:text-3xl text-[#181b20]">
                Connect Directly With Our Producers
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Reach out for initial pitch presentations, budget quotes, or scheduling a visit to our Mumbai post-production suites.
              </p>
            </div>

            {/* Hub Details Cards (Clean White with Olive Badges) */}
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-white border border-[#556f2d]/20 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#23351d] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#181b20] text-sm">Headquarters & Studios</h4>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    Studio 4B, Film City Road, Goregaon (East), Mumbai, Maharashtra 400065
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#556f2d]/20 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#23351d] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#181b20] text-sm">Call & WhatsApp</h4>
                  <p className="text-xs text-gray-500 mt-1">+91 98200 12345 / +91 98765 43210</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#556f2d]/20 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#23351d] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#181b20] text-sm">Email Inquiries</h4>
                  <p className="text-xs text-gray-500 mt-1">hello@bhindiproduction.com</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#556f2d]/20 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#23351d] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#181b20] text-sm">Production Operating Hours</h4>
                  <p className="text-xs text-gray-500 mt-1">Monday – Saturday: 9:30 AM – 7:30 PM IST</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </section>

    </div>
  );
};
