import Github from "@site/src/components/Icons/Github";
import Gmail from "@site/src/components/Icons/Gmail";
import LinkedIn from "@site/src/components/Icons/LinkedIn";
import RSS from "@site/src/components/Icons/RSS";
import Teams from "@site/src/components/Icons/Teams";
import TeamsBlack from "@site/src/components/Icons/TeamsBlack";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info & Contact */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">IF</span>
              </div>
              <div>
                <div className="text-xl font-bold">InnovationForge</div>
                <div className="text-sm text-gray-400">Microsoft 365 & Azure Expertise</div>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              ConfigForge is my knowledge & tools hub — <strong>by Opsora</strong>. Booking and commercial work are handled on opsora.io.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-white mb-3">Contact Tobias</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Gmail className="h-4 w-4 text-blue-400" />
                    <a href="mailto:tobias@innovationforge.com" className="hover:text-blue-400 transition-colors">
                      tobias@innovationforge.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <LinkedIn className="h-4 w-4 text-blue-400" />
                    <a
                      href="https://www.linkedin.com/in/tobias-schuele/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-400 transition-colors"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Github className="h-4 w-4 text-blue-400" />
                    <a
                      href="https://github.com/InnovationForge-com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-400 transition-colors"
                    >
                      GitHub Repository
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <TeamsBlack className="h-4 w-4 text-blue-400" />
                    <a
                      href="https://teams.microsoft.com/l/chat/0/0?users=tobias@innovationforge.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-400 transition-colors"
                    >
                      Contact via Teams
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Business Info */}
              <div className="pt-4 border-t border-gray-700">
                <div className="flex items-center space-x-3 text-gray-400 text-sm mb-2">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                  </svg>
                  <span>Serving globally from Germany</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400 text-sm">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Fast response within 24h</span>
                </div>
              </div>
            </div>
          </div>
          {/* Navigation Links */}
          <div>
            <h4 className="font-semibold text-white mb-6">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">
                  About Tobias
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/docs/intro" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Knowledge Base
                </a>
              </li>
              <li>
                <a href="https://innovationforge.com/blog/rss.xml" className="text-gray-300 hover:text-blue-400 transition-colors">
                  RSS Feed
                </a>
              </li>
            </ul>
          </div>

          {/* Key Services */}
          <div>
            <h4 className="font-semibold text-white mb-6">Key Services</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-300 text-sm">Microsoft 365 Architecture & Governance</span>
              </li>
              <li>
                <span className="text-gray-300 text-sm">Endpoint Management with Intune</span>
              </li>
              <li>
                <span className="text-gray-300 text-sm">Azure Architecture & Landing Zones</span>
              </li>
              <li>
                <span className="text-gray-300 text-sm">Hybrid Identity & Directory Modernization</span>
              </li>
              <li>
                <span className="text-gray-300 text-sm">Migrations (M365, Azure, Hybrid)</span>
              </li>
              <li>
                <span className="text-gray-300 text-sm">Security Hardening & Reviews</span>
              </li>
              <li>
                <span className="text-gray-300 text-sm">Project Delivery & Handover</span>
              </li>
              <li className="pt-2">
                <a href="mailto:tobias@innovationforge.com?subject=Architecture Review Request" className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium">
                  → Request Architecture Review
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 ConfigForge · by Opsora – All rights reserved.
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <a href="/privacy" className="hover:text-blue-400 transition-colors">
                Privacy
              </a>
              <a href="/terms" className="hover:text-blue-400 transition-colors">
                Terms
              </a>
            </div>
            
            {/* Trust Signals */}
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>15+ years experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Microsoft certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Enterprise proven</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
