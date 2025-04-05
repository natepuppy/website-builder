import { Link } from 'react-router-dom';
import { useState } from 'react';

interface ServiceCategory {
  title: string;
  icon: string;
  description: string;
  services: Array<{
    name: string;
    description?: string;
  }>;
}

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const serviceCategories: ServiceCategory[] = [
    {
      title: "Web Presence & Marketing",
      icon: "🌐",
      description: "Establish and grow your online presence with our comprehensive web and marketing services.",
      services: [
        { name: "Website Design & Development", description: "Custom websites tailored to your business needs" },
        { name: "Landing Pages", description: "High-converting pages designed to drive action" },
        { name: "Service Sites", description: "Showcase your offerings with professional service pages" },
        { name: "Booking Sites", description: "Enable customers to book appointments directly online" },
        { name: "Local SEO Optimization", description: "Improve your visibility in local search results" },
        { name: "Google Business Profile Setup", description: "Optimize your Google presence to attract local customers" },
        { name: "Keyword Optimization", description: "Target the right search terms to reach your audience" },
        { name: "Reputation Management", description: "Monitor and improve your online reputation" },
        { name: "Review Tracking and Strategy", description: "Collect and leverage positive customer reviews" },
        { name: "Email Marketing Setup", description: "Mailchimp, Klaviyo, and other platforms" },
        { name: "Blog Setup / Content Strategy", description: "Engage your audience with valuable content" },
        { name: "Lead Gen Funnels", description: "Capture pages + automated follow-up systems" },
        { name: "CRM Setup", description: "HubSpot, Zoho, Pipedrive — whatever fits your needs" }
      ]
    },
    {
      title: "Digital Tools & Automation",
      icon: "📱",
      description: "Streamline your business operations with powerful digital tools and automation.",
      services: [
        { name: "Form Builders + Conditional Logic", description: "Intake forms, applications, quote requests" },
        { name: "Automation with Zapier / Make", description: "When someone submits this form, add them to CRM + send follow-up" },
        { name: "Appointment Booking Systems", description: "Calendly, TidyCal, Acuity — integrated with reminders" },
        { name: "Custom Dashboard Builds", description: "Google Data Studio / Airtable / Notion" },
        { name: "Internal Tools with No-Code / Low-Code", description: "Glide, Softr, Retool, Bubble apps" },
        { name: "Custom App Development", description: "Bespoke applications tailored to your business processes and workflows" },
        { name: "Document Automation", description: "Contracts, proposals, invoices auto-filled" }
      ]
    },
    {
      title: "Ecommerce & Payments",
      icon: "🛒",
      description: "Set up reliable and secure online selling and payment systems.",
      services: [
        { name: "Online Store Setup", description: "Shopify, WooCommerce, Squarespace" },
        { name: "Payment Gateways", description: "Stripe, PayPal, Square" },
        { name: "POS + Inventory Sync", description: "For hybrid online/offline businesses" },
        { name: "Subscription/Membership Systems", description: "Recurring revenue models for your business" }
      ]
    },
    {
      title: "IT & Infrastructure",
      icon: "🧰",
      description: "Build a solid technical foundation for your business operations.",
      services: [
        { name: "Email & Domain Setup", description: "Google Workspace, Zoho Mail" },
        { name: "Cloud Storage & Backup", description: "Google Drive, Dropbox, OneDrive setups" },
        { name: "Security Basics", description: "SSL setup, password management tools, 2FA training" },
        { name: "Device & Software Management", description: "Helpful for larger small businesses with teams" }
      ]
    },
    {
      title: "Ongoing Support & Tech Help",
      icon: "🧑‍💻",
      description: "Get continuous assistance to keep your digital systems running smoothly.",
      services: [
        { name: "\"Tech Concierge\" Monthly Plan", description: "Ongoing fixes, updates, small projects" },
        { name: "Digital Strategy Consulting", description: "Be their fractional CTO" },
        { name: "Training & Documentation", description: "Video walkthroughs, SOPs" },
        { name: "Tech Stack Review & Audit", description: "Evaluate and optimize your current tools" }
      ]
    },
    {
      title: "AI & New Tech (Edge Services)",
      icon: "🤖",
      description: "Leverage cutting-edge AI technology to gain a competitive advantage.",
      services: [
        { name: "Chatbot Setup", description: "e.g. AI FAQ Assistant" },
        { name: "AI-Powered Appointment Routing", description: "Smart scheduling and customer routing" },
        { name: "Custom GPTs for internal use", description: "AI assistants tailored to your business needs" },
        { name: "AI Image / Video Tools", description: "Make your social posts from one picture" },
        { name: "Voice-to-Text Workflow Setup", description: "Field workers can send audio > turns into structured text" }
      ]
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section with Animated Background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-24 w-full">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-pink-500 mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-20 right-20 w-60 h-60 rounded-full bg-indigo-500 mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/4 w-80 h-80 rounded-full bg-purple-500 mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Our <span className="text-pink-300">Services</span> 
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-indigo-100">
            Comprehensive digital solutions to help your business thrive online
          </p>
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <svg className="relative block w-full h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="currentColor"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-16 bg-white w-full text-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-12 inline-block">Choose Your Digital Solution</h2>
            <p className="text-lg text-gray-600 mb-8">
              From web development to AI implementation, we provide end-to-end digital solutions 
              tailored to your specific business needs.
            </p>
            
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center mb-12 gap-2">
              {serviceCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`py-3 px-5 rounded-full text-sm md:text-base transition-all duration-300 font-medium ${
                    activeTab === index
                      ? 'bg-gradient-to-r from-indigo-600 to-pink-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span> {category.title}
                </button>
              ))}
            </div>
          </div>

          {/* Active Tab Content */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-indigo-50 to-pink-50 rounded-3xl p-8 shadow-xl">
              <div className="flex items-center mb-8">
                <span className="text-6xl mr-6 fun-icon">{serviceCategories[activeTab].icon}</span>
                <div>
                  <h3 className="text-3xl font-bold mb-2">{serviceCategories[activeTab].title}</h3>
                  <p className="text-lg text-gray-600">{serviceCategories[activeTab].description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {serviceCategories[activeTab].services.map((service, serviceIndex) => (
                  <div 
                    key={serviceIndex} 
                    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 fun-card"
                  >
                    <h3 className="text-xl font-semibold mb-3">{service.name}</h3>
                    {service.description && (
                      <p className="text-gray-600">{service.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Cards Grid */}
      <section className="py-16 bg-gray-50 w-full text-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-12">Explore All Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <div 
                key={index} 
                id={category.title.toLowerCase().replace(/\s+/g, '-')}
                className="bg-white rounded-xl overflow-hidden fun-card"
              >
                <div className="p-8">
                  <div className="text-5xl mb-4 fun-icon">{category.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{category.title}</h3>
                  <p className="text-gray-600 mb-6">{category.description}</p>
                  <button
                    onClick={() => setActiveTab(index)}
                    className="text-indigo-600 font-semibold hover:text-pink-600 transition-colors flex items-center"
                  >
                    View Services
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-pink-600 text-white w-full relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10 text-indigo-100">
            Let's discuss how our services can help your business grow and thrive in the digital world.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-pink-100 hover:text-pink-600 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage; 