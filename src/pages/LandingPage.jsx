import React from "react";
import { useNavigate } from 'react-router-dom';
// Placeholder avatars
const avatars = [
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/men/65.jpg",
];

export default function LandingPage() {
    const navigate = useNavigate();
    const handleGetStarted = () => {
        navigate('/login');
    }
    const handleBrowseProperties = () => {
        navigate('/properties');
    };
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-blue-50 via-white to-gray-50 overflow-hidden">
        {/* Decorative background shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-100 rounded-full opacity-40 blur-3xl"></div>
          <div className="absolute top-1/2 right-0 w-80 h-80 bg-blue-200 rounded-full opacity-30 blur-2xl"></div>
        </div>
        <div className="relative max-w-5xl mx-auto px-6 pt-24 pb-20 flex flex-col items-center text-center z-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6 drop-shadow-sm">
            Smarter, Safer Real Estate{" "}
            <span className="text-blue-600">Matching</span> for Everyone.
          </h1>
          <ul className="flex flex-col sm:flex-row justify-center gap-4 mb-8 text-lg text-gray-600 font-medium">
            <li className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-blue-600 rounded-full"></span>
              Verified Agents
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-blue-600 rounded-full"></span>
              AI-Powered Safety
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-blue-600 rounded-full"></span>
              Escrow Protection
            </li>
          </ul>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <button className="px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition text-lg"
              onClick={handleGetStarted}>
              Get Started
            </button>
            <button className="px-8 py-3 rounded-lg border-2 border-gray-300 text-blue-700 font-semibold bg-white hover:bg-gray-100 transition text-lg" onClick={handleBrowseProperties}>
              Browse Properties
            </button>
          </div>
          {/* Optional hero illustration */}
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
            alt="Cityscape"
            className="w-full max-w-2xl rounded-2xl shadow-xl object-cover opacity-90 mt-4"
            style={{ maxHeight: 320 }}
          />
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-14">
            How It Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 text-blue-600 rounded-full p-5 mb-4 shadow-md">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                </svg>
              </div>
              <span className="font-semibold text-gray-800 text-lg mb-1">
                Search
              </span>
              <span className="text-gray-500 text-sm text-center">
                Find verified listings and agents
              </span>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 text-blue-600 rounded-full p-5 mb-4 shadow-md">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z" />
                </svg>
              </div>
              <span className="font-semibold text-gray-800 text-lg mb-1">
                Chat
              </span>
              <span className="text-gray-500 text-sm text-center">
                AI-monitored, safe messaging
              </span>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 text-blue-600 rounded-full p-5 mb-4 shadow-md">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 9V7a5 5 0 00-10 0v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2z" />
                </svg>
              </div>
              <span className="font-semibold text-gray-800 text-lg mb-1">
                Fund with Escrow
              </span>
              <span className="text-gray-500 text-sm text-center">
                Your money is protected until move-in
              </span>
            </div>
            {/* Step 4 */}
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 text-blue-600 rounded-full p-5 mb-4 shadow-md">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="font-semibold text-gray-800 text-lg mb-1">
                Visit &amp; Approve
              </span>
              <span className="text-gray-500 text-sm text-center">
                Inspect, approve, and finalize
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-14">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center border border-blue-50 hover:shadow-2xl transition">
              <img
                src={avatars[0]}
                alt="Jane Doe"
                className="w-16 h-16 rounded-full object-cover mb-4 border-4 border-blue-100"
              />
              <span className="font-semibold text-gray-800 mb-2">Jane Doe</span>
              <p className="text-gray-600 text-center text-base">
                “The escrow system gave me total peace of mind. I found my
                apartment and felt safe every step of the way!”
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center border border-blue-50 hover:shadow-2xl transition">
              <img
                src={avatars[1]}
                alt="Samuel Lee"
                className="w-16 h-16 rounded-full object-cover mb-4 border-4 border-blue-100"
              />
              <span className="font-semibold text-gray-800 mb-2">
                Samuel Lee
              </span>
              <p className="text-gray-600 text-center text-base">
                “I loved the AI chat monitoring. It made the process smooth and
                transparent. Highly recommended!”
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center border border-blue-50 hover:shadow-2xl transition">
              <img
                src={avatars[2]}
                alt="Amina Yusuf"
                className="w-16 h-16 rounded-full object-cover mb-4 border-4 border-blue-100"
              />
              <span className="font-semibold text-gray-800 mb-2">
                Amina Yusuf
              </span>
              <p className="text-gray-600 text-center text-base">
                “Verified agents and secure payments made my rental experience
                stress-free. Thank you!”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security & AI Escrow Assurance */}
      <section className="w-full py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Security &amp; AI Escrow Assurance
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-10">
            <div className="flex flex-col items-center flex-1 mb-8 md:mb-0">
              <div className="bg-blue-100 text-blue-600 rounded-full p-5 mb-4 shadow-md">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 11c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2z" />
                  <path d="M12 19c-4.418 0-8-3.582-8-8V7l8-4 8 4v4c0 4.418-3.582 8-8 8z" />
                </svg>
              </div>
              <span className="text-gray-800 font-semibold text-lg mb-1">
                AI-monitored Messaging
              </span>
              <span className="text-gray-500 text-sm">
                Conversations are protected and monitored for your safety.
              </span>
            </div>
            <div className="flex flex-col items-center flex-1 mb-8 md:mb-0">
              <div className="bg-blue-100 text-blue-600 rounded-full p-5 mb-4 shadow-md">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3z" />
                  <path d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2" />
                </svg>
              </div>
              <span className="text-gray-800 font-semibold text-lg mb-1">
                Identity Verification
              </span>
              <span className="text-gray-500 text-sm">
                All users and agents are verified for trust and transparency.
              </span>
            </div>
            <div className="flex flex-col items-center flex-1">
              <div className="bg-blue-100 text-blue-600 rounded-full p-5 mb-4 shadow-md">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17v-1m0-4a4 4 0 100-8 4 4 0 000 8zm0 0v1m0 4v1m0 0h.01" />
                </svg>
              </div>
              <span className="text-gray-800 font-semibold text-lg mb-1">
                Escrow-backed Payments
              </span>
              <span className="text-gray-500 text-sm">
                Funds are held securely until you approve the deal.
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
