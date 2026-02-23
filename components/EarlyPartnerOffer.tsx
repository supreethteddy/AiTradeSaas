
'use client';

import { useState } from 'react';
import Image from 'next/image';

const TELEGRAM_ICON_SRC =
  'https://res.cloudinary.com/dij4v6vtx/image/upload/v1771839988/Telegram-review-removebg-preview_lax1sz.png';

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function EarlyPartnerOffer() {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/early-partner', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="early-partner" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Early Partner License – $999 Per Year
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are currently offering limited early access pricing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Left: Offer details + form */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-10 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                As an early partner, you receive:
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex-shrink-0 mt-1">
                    <i className="ri-check-line text-xl text-white"></i>
                  </div>
                  <p className="text-gray-800 text-lg">Full white-label license</p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex-shrink-0 mt-1">
                    <i className="ri-check-line text-xl text-white"></i>
                  </div>
                  <p className="text-gray-800 text-lg">Technical deployment</p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex-shrink-0 mt-1">
                    <i className="ri-check-line text-xl text-white"></i>
                  </div>
                  <p className="text-gray-800 text-lg">Backend support</p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex-shrink-0 mt-1">
                    <i className="ri-check-line text-xl text-white"></i>
                  </div>
                  <p className="text-gray-800 text-lg">System updates</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-300">
                <p className="text-gray-600 text-base">
                  After public launch, pricing will be revised.
                </p>
              </div>
            </div>

            <form id="early-partner-form" onSubmit={handleSubmit} data-readdy-form className="bg-white rounded-2xl p-8 shadow-lg space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
                  placeholder="+91 98765 43210"
                  pattern="^(\+91[-\s]?)?[6-9]\d{9}$"
                />
                <p className="mt-1 text-xs text-gray-500">Please enter a valid Indian mobile number.</p>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Tell Us About Your Interest
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  maxLength={500}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm resize-none"
                  placeholder="What interests you about this opportunity?"
                />
                <p className="text-xs text-gray-500 mt-1">{formData.message.length}/500 characters</p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-semibold text-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
              >
                {isSubmitting ? 'Submitting...' : 'Secure Early Access'}
              </button>

              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
                  <i className="ri-checkbox-circle-fill text-2xl text-green-600"></i>
                  <p className="text-green-800 font-medium">Application submitted successfully! We'll contact you soon.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
                  <i className="ri-error-warning-fill text-2xl text-red-600"></i>
                  <p className="text-red-800 font-medium">Something went wrong. Please try again.</p>
                </div>
              )}
            </form>
          </div>

          {/* Right: Telegram contact card */}
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 h-full flex flex-col items-center justify-center text-center">
              <div className="mb-4">
                <Image
                  src={TELEGRAM_ICON_SRC}
                  alt="Telegram"
                  width={80}
                  height={80}
                  className="w-16 h-16 md:w-20 md:h-20 object-contain mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Prefer Telegram?</h3>
              <p className="text-gray-600 mb-4">
                Chat with us directly on Telegram for faster responses and questions about the partnership.
              </p>
              <a
                href="https://t.me/aitechsaas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#229ED9] text-white font-semibold shadow-md hover:bg-[#1c8ec4] transition-colors cursor-pointer"
              >
                Open Telegram
              </a>
              <p className="mt-3 text-sm text-gray-500 break-all">
                Username: @aitechsaas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
