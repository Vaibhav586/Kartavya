import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Heart, Utensils, Users, Truck, BarChart3, Leaf, ArrowRight, ChevronDown, Building2, HandHeart } from 'lucide-react';

function LandingPage() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-screen flex items-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Connecting Surplus Food with Those in Need
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Kartavya is a B2B food redistribution platform bridging the gap between food providers and NGOs, 
              fighting hunger while reducing waste.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center">
                Join as Provider <ArrowRight className="ml-2" size={20} />
              </button>
              <button className="bg-white hover:bg-gray-100 text-green-600 px-8 py-3 rounded-lg font-semibold flex items-center justify-center">
                Partner as NGO <ArrowRight className="ml-2" size={20} />
              </button>
            </div>
          </div>
        </div>
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
          aria-label="Scroll to learn more"
        >
          <ChevronDown size={32} />
        </button>
      </div>

      {/* About Section */}
      <div id="about" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Kartavya</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Every day, tons of perfectly good food goes to waste while millions go hungry. Kartavya bridges this gap by connecting restaurants and food providers with local NGOs and communities in need.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-4">
                    <Building2 className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">For Restaurants</h3>
                    <p className="text-gray-600">Reduce waste, save costs, and make a positive impact in your community</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-4">
                    <HandHeart className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">For NGOs</h3>
                    <p className="text-gray-600">Access reliable food sources and serve more people in need</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-green-600 mb-2">150+</h3>
                <p className="text-gray-600">Active Restaurants</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-green-600 mb-2">50+</h3>
                <p className="text-gray-600">NGO Partners</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-green-600 mb-2">10k+</h3>
                <p className="text-gray-600">Meals Shared</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-green-600 mb-2">2000kg</h3>
                <p className="text-gray-600">Food Saved</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Provider Section */}
      <div className="py-16 bg-green-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Join as Provider</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Every day, countless meals are wasted while many go to bed hungry. Kartavya empowers food providers like restaurants, 
              mess halls, caterers, and event venues to turn their surplus into service.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Why Join Kartavya?</h3>
                <ul className="space-y-3 text-left">
                  <li className="flex items-start">
                    <ArrowRight className="text-green-600 mr-2 mt-1" size={16} />
                    <span>Tech-enabled, socially responsible network</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-green-600 mr-2 mt-1" size={16} />
                    <span>Managed pickup logistics</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-green-600 mr-2 mt-1" size={16} />
                    <span>Verified NGO partners</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-green-600 mr-2 mt-1" size={16} />
                    <span>FSSAI compliant redistribution</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Your Impact</h3>
                <ul className="space-y-3 text-left">
                  <li className="flex items-start">
                    <ArrowRight className="text-green-600 mr-2 mt-1" size={16} />
                    <span>Reduce environmental footprint</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-green-600 mr-2 mt-1" size={16} />
                    <span>Support UN Sustainable Development Goals</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-green-600 mr-2 mt-1" size={16} />
                    <span>Monthly impact reports</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-green-600 mr-2 mt-1" size={16} />
                    <span>Touch lives through food donation</span>
                  </li>
                </ul>
              </div>
            </div>
            <button
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center"
              onClick={() => window.location.href = "https://5cf295ba-a75d-4640-8dee-50002888839d-00-2coxe7mb9v2uz.picard.replit.dev/ngo/cart"}
              >
              Register as Provider <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* User Flow Preview */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Restaurant Flow */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Building2 className="text-green-600 mr-2" size={24} />
                For Restaurants
              </h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center mr-4">1</span>
                  <p>List available surplus food with details and quantity</p>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center mr-4">2</span>
                  <p>Get matched with nearby NGOs automatically</p>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center mr-4">3</span>
                  <p>Schedule pickup and track impact</p>
                </div>
              </div>
            </div>
            {/* NGO Flow */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <HandHeart className="text-green-600 mr-2" size={24} />
                For NGOs
              </h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center mr-4">1</span>
                  <p>Get notified of available food in your area</p>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center mr-4">2</span>
                  <p>Accept donations and arrange collection</p>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center mr-4">3</span>
                  <p>Distribute food to communities in need</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <BarChart3 className="text-green-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Real-time Tracking</h3>
              <p className="text-gray-600">Monitor donations and impact in real-time</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Heart className="text-green-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Verified Partners</h3>
              <p className="text-gray-600">All NGOs are thoroughly verified</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Leaf className="text-green-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Sustainability Impact</h3>
              <p className="text-gray-600">Track your environmental impact</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Kartavya</h3>
              <p className="text-gray-400">Building a hunger-free future through technology and collaboration.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Join As Provider</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partner As NGO</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@kartavya.org</li>
                <li>Phone: +91 XXX XXX XXXX</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Kartavya. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
