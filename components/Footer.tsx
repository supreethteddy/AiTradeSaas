import Link from 'next/link';
import Image from 'next/image';

const LOGO_SRC =
  'https://res.cloudinary.com/dij4v6vtx/image/upload/v1771838976/Gemini_Generated_Image_ro5ow2ro5ow2ro5o-removebg-preview_pmroh6.png';

const TELEGRAM_ICON_SRC =
  'https://res.cloudinary.com/dij4v6vtx/image/upload/v1771839988/Telegram-review-removebg-preview_lax1sz.png';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8 items-start">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="relative h-20 w-auto">
                <Image
                  src={LOGO_SRC}
                  alt="AI Trade SaaS Logo"
                  width={350}
                  height={120}
                  className="h-full w-auto object-contain"
                />
              </div>
            </div>
            <h3 className="font-bold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#opportunity" className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">About</a></li>
              <li><a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">Features</a></li>
              <li><a href="#early-partner" className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">Support</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-blue-100 rounded-lg transition-colors cursor-pointer">
                <i className="ri-linkedin-fill text-xl text-gray-700"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-blue-100 rounded-lg transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-xl text-gray-700"></i>
              </a>
              <a
                href="https://t.me/aitechsaas"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-blue-100 rounded-lg transition-colors cursor-pointer"
              >
                <Image
                  src={TELEGRAM_ICON_SRC}
                  alt="Telegram"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © 2024 AITradingSaaS. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
