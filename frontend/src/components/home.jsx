import React from 'react';
import { Brain, Zap, Shield, Target, ChevronRight, Star, Users, Sparkles, Bot, TrendingUp, CheckCircle , Mic} from 'lucide-react';

const services =[
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Custom ML models that learn from your data to predict outcomes, detect patterns, and automate decision-making processes.",
    features: ["Predictive Analytics", "Pattern Recognition", "Automated Decision Making"]
  },
  {
    icon: Bot,
    title: "Conversational AI",
    description: "Intelligent chatbots and virtual assistants that provide 24/7 customer support and enhance user engagement.",
    features: ["Natural Language Processing", "Multi-language Support", "Context Awareness"]
  },
  {
    icon: Target,
    title: "Computer Vision",
    description: "Advanced image and video analysis capabilities for quality control, security, and automated visual inspection.",
    features: ["Object Detection", "Image Classification", "Real-time Analysis"]
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description: "Forecast future trends and behaviors using historical data to make informed business decisions.",
    features: ["Demand Forecasting", "Risk Assessment", "Performance Optimization"]
  },
  {
    icon: Shield,
    title: "AI Security",
    description: "Protect your AI systems with robust security measures and ensure compliance with data privacy regulations.",
    features: ["Data Encryption", "Anomaly Detection", "Compliance Monitoring"]
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "Streamline operations by automating repetitive tasks and optimizing workflow efficiency.",
    features: ["Workflow Optimization", "Task Automation", "Resource Allocation"]
  },
  {
    icon: Mic,
    title: "Speech Recognition",
    description: "Transform audio into actionable insights using advanced speech-to-text technology and voice understanding.",
    features: ["Voice Transcription", "Speaker Identification", "Real-time Processing"]
  } ,

   {
    icon: Zap,
    title: "Lightning Fast Implementation",
    description: "Get your AI solutions up and running in days, not months, with our streamlined deployment process."
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Bank-level security with end-to-end encryption, ensuring your data remains protected at all times."
  },
  {
    icon: Users,
    title: "Expert Support Team",
    description: "Access to AI specialists and data scientists who guide you through every step of your AI journey."
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description: "Our platform grows with your business, handling everything from startup needs to enterprise scale."
  },
  {
    icon: Plug, // New icon for the new benefit
    title: "Seamless Integration",
    description: "Easily connect our AI platform with your existing tools and infrastructure for a frictionless experience."
  }
]


const Home = () => {
  return (
    <>
      <section className="pt-24 pb-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                <span>Next-Generation AI Solutions</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your Business with
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Intelligent AI</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Unlock the power of artificial intelligence to automate processes, gain insights, and drive innovation. 
                Our cutting-edge AI solutions help businesses scale efficiently and make data-driven decisions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2">
                  <span>Start Free Trial</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-200">
                  Watch Demo
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">500+</div>
                  <div className="text-gray-600">Companies Trust Us</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">99.9%</div>
                  <div className="text-gray-600">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">24/7</div>
                  <div className="text-gray-600">Expert Support</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl transform rotate-6"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">AI Assistant Active</h3>
                      <p className="text-gray-600 text-sm">Processing 1,247 tasks</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="text-green-800 font-medium">Data Analysis Complete</span>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="text-blue-800 font-medium">ML Model Training</span>
                      <div className="w-16 h-2 bg-blue-200 rounded-full">
                        <div className="w-12 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                      <span className="text-purple-800 font-medium">Predictions Generated</span>
                      <TrendingUp className="w-5 h-5 text-purple-600" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive AI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From machine learning to natural language processing, we offer a full suite of AI services
              to meet your business needs and drive digital transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
