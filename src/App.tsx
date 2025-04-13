import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Heart, Utensils, Users, Truck, BarChart3, Leaf, ArrowRight } from 'lucide-react';

// Landing page content remains the same as before
function LandingPage() {
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
            <h1 className="text-5xl font-bold text-white mb-6">
              Connecting Surplus Food with Those in Need
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Kartavya is a B2B food redistribution platform bridging the gap between food providers and NGOs, 
              fighting hunger while reducing waste.
            </p>
            <div className="flex gap-4">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center">
                Join as Provider <ArrowRight className="ml-2" size={20} />
              </button>
              <button className="bg-white hover:bg-gray-100 text-green-600 px-8 py-3 rounded-lg font-semibold flex items-center">
                Partner as NGO <ArrowRight className="ml-2" size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="py-16 bg-green-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-green-600 mb-2">10,000+</p>
              <p className="text-gray-600">Meals Redistributed</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-green-600 mb-2">50+</p>
              <p className="text-gray-600">Partner NGOs</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-green-600 mb-2">2,000kg</p>
              <p className="text-gray-600">Food Waste Prevented</p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">How Kartavya Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">List Surplus Food</h3>
              <p className="text-gray-600">Restaurants and food providers can easily list their surplus food</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">NGO Matching</h3>
              <p className="text-gray-600">Our system matches food with nearby verified NGOs</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Distribution</h3>
              <p className="text-gray-600">Efficient pickup and delivery to those in need</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-16 bg-gray-50">
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
                <li>About Us</li>
                <li>How It Works</li>
                <li>Join As Provider</li>
                <li>Partner As NGO</li>
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
                <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
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