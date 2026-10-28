import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  ArrowUpRight, 
  AlertCircle,
  Sparkles
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isCopied, setIsCopied] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | null

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('gogulrajr2004@gmail.com');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide your name (at least 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      errs.subject = 'Please enter a subject (at least 3 characters).';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide a message with at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Construct mailto link with pre-filled subject and body
    const emailTo = 'gogulrajr2004@gmail.com';
    const emailSubject = encodeURIComponent(`[Portfolio Contact] ${formData.subject}`);
    const emailBody = encodeURIComponent(
      `Hello Gogulraj,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );

    // Open user's email client
    window.location.href = `mailto:${emailTo}?subject=${emailSubject}&body=${emailBody}`;

    setSubmitStatus('ready');
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative bg-[#10131A] overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00E5FF]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-[#00E5FF] tracking-widest uppercase">06 //</span>
            <span className="font-mono text-xs uppercase tracking-widest text-[#00E5FF]">GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight">
            LET'S BUILD <span className="text-gradient-cyan">SOMETHING</span> GREAT.
          </h2>
          <p className="text-base sm:text-lg text-[#A1A7B3] mt-4 font-normal">
            Have a project idea or an opportunity to discuss? Feel free to get in touch.
          </p>
        </motion.div>

        {/* Two Column Layout: Contact Cards & Clean Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Direct Contact Info (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Primary Email Card */}
            <div className="group p-6 rounded-2xl bg-[#08090D] border border-white/[0.08] hover:border-[#00E5FF]/30 transition-all shadow-xl relative overflow-hidden">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[#00E5FF]/10 text-[#00E5FF] flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#A1A7B3] uppercase tracking-wider">Direct Email</span>
                    <h3 className="text-base font-semibold text-white">gogulrajr2004@gmail.com</h3>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 pt-4 border-t border-white/[0.06]">
                <a
                  href="mailto:gogulrajr2004@gmail.com"
                  className="flex-1 text-center py-2 px-3 rounded-lg bg-gradient-to-r from-[#00E5FF] to-[#00B4D8] text-[#08090D] text-xs font-semibold hover:shadow-glow-cyan transition-all"
                >
                  Email Me Directly
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="py-2 px-3 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-xs font-mono text-[#A1A7B3] hover:text-white border border-white/10 flex items-center gap-1.5 transition-colors"
                  aria-label="Copy email address"
                >
                  {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{isCopied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-2xl bg-[#08090D] border border-white/[0.08] flex items-center gap-4 shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-[#8B5CF6]/10 text-[#8B5CF6] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#A1A7B3] uppercase tracking-wider">Location</span>
                <h3 className="text-base font-semibold text-white">Thanjavur, Tamil Nadu, India</h3>
                <p className="text-xs text-[#A1A7B3] mt-0.5">Open to remote and on-site opportunities</p>
              </div>
            </div>

            {/* Social Links Cards */}
            <div className="p-6 rounded-2xl bg-[#08090D] border border-white/[0.08] shadow-xl">
              <span className="text-xs font-mono text-[#A1A7B3] uppercase tracking-wider block mb-4">
                Connect on Developer Platforms
              </span>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://github.com/Gogulraj-r"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#121620] hover:bg-[#161B26] border border-white/[0.06] hover:border-white/20 transition-all text-xs font-medium text-white group"
                >
                  <div className="flex items-center gap-2.5">
                    <GithubIcon className="w-4 h-4 text-[#00E5FF]" />
                    <span>GitHub</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#A1A7B3] group-hover:text-[#00E5FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#121620] hover:bg-[#161B26] border border-white/[0.06] hover:border-white/20 transition-all text-xs font-medium text-white group"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedinIcon className="w-4 h-4 text-[#8B5CF6]" />
                    <span>LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#A1A7B3] group-hover:text-[#8B5CF6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Clean Accessible Contact Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl bg-[#08090D] border border-white/[0.08] p-6 sm:p-10 shadow-2xl relative">
              <h3 className="text-xl font-heading font-bold text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs text-[#A1A7B3] mb-6">
                Fill out the form below. When submitted, it prepares your default email client with all details formatted for instant delivery.
              </p>

              {submitStatus === 'ready' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/50 border border-emerald-500/30 text-emerald-300 text-xs flex items-start gap-3">
                  <Check className="w-4 h-4 shrink-0 text-emerald-400 mt-0.5" />
                  <div>
                    <span className="font-semibold block mb-0.5">Email draft ready!</span>
                    Your default email application was prompted with your message pre-filled. You can also contact directly via{' '}
                    <a href="mailto:gogulrajr2004@gmail.com" className="underline font-mono">
                      gogulrajr2004@gmail.com
                    </a>.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-[#A1A7B3] mb-1.5 uppercase tracking-wide">
                      Your Name <span className="text-[#00E5FF]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: null });
                      }}
                      placeholder="e.g. Alex Smith"
                      className={`w-full px-4 py-3 rounded-xl bg-[#121620] border text-sm text-white placeholder-white/20 focus:outline-none transition-colors ${
                        errors.name
                          ? 'border-rose-500 focus:border-rose-500 ring-1 ring-rose-500/30'
                          : 'border-white/10 focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF]/30'
                      }`}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-[#A1A7B3] mb-1.5 uppercase tracking-wide">
                      Your Email <span className="text-[#00E5FF]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: null });
                      }}
                      placeholder="name@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-[#121620] border text-sm text-white placeholder-white/20 focus:outline-none transition-colors ${
                        errors.email
                          ? 'border-rose-500 focus:border-rose-500 ring-1 ring-rose-500/30'
                          : 'border-white/10 focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF]/30'
                      }`}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-mono text-[#A1A7B3] mb-1.5 uppercase tracking-wide">
                    Subject <span className="text-[#00E5FF]">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (errors.subject) setErrors({ ...errors, subject: null });
                    }}
                    placeholder="Project Inquiry / Job Opportunity / Web Development"
                    className={`w-full px-4 py-3 rounded-xl bg-[#121620] border text-sm text-white placeholder-white/20 focus:outline-none transition-colors ${
                      errors.subject
                        ? 'border-rose-500 focus:border-rose-500 ring-1 ring-rose-500/30'
                        : 'border-white/10 focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF]/30'
                    }`}
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                  />
                  {errors.subject && (
                    <p id="subject-error" className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-[#A1A7B3] mb-1.5 uppercase tracking-wide">
                    Message <span className="text-[#00E5FF]">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: null });
                    }}
                    placeholder="Describe your project, timeline, or inquiry..."
                    className={`w-full px-4 py-3 rounded-xl bg-[#121620] border text-sm text-white placeholder-white/20 focus:outline-none transition-colors resize-none ${
                      errors.message
                        ? 'border-rose-500 focus:border-rose-500 ring-1 ring-rose-500/30'
                        : 'border-white/10 focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF]/30'
                    }`}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-heading font-semibold text-sm bg-gradient-to-r from-[#00E5FF] to-[#00B4D8] text-[#08090D] shadow-glow-cyan hover:shadow-cyan-400/50 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                >
                  <span>Dispatch Message via Email Client</span>
                  <Send className="w-4 h-4 stroke-[2.5]" />
                </button>

                <p className="text-[11px] text-center text-[#A1A7B3]/70 font-mono mt-2">
                  No secret keys exposed • Direct secure communication via standard email protocols
                </p>

              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
