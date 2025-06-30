
import { Link } from 'react-router-dom';
import "../src/layout.css"
// import { Brain, Zap, Shield, Target, ChevronRight, Star, Users, Sparkles, Bot, TrendingUp, CheckCircle } from 'lucide-react';

const Navbarr = () => {

    return (
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                {/* <Brain className="w-5 h-5 text-white" /> */}
              </div>
              <Link to="/">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  PinhasFound 
              </span>
              </Link>

            </div>
            <div className="hidden md:flex items-center space-x-8">
                <Link to="/report">
              <span className="text-gray-600 hover:text-gray-900 transition-colors">Post Services</span>

              </Link>
                <Link to="/match">
              <span href="#solutions" className="text-gray-600 hover:text-gray-900 transition-colors">find service </span>

              </Link>

    
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>


  );

}


export default Navbarr;