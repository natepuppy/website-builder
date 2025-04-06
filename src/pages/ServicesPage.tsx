import { Link } from 'react-router-dom';
import { useState } from 'react';

type ServiceCategory = {
  id: string;
  name: string;
  icon: string;
  description: string;
  services: Service[];
};

type Service = {
  id: string;
  title: string;
  description?: string;
};

const servicesData: ServiceCategory[] = [
  {
    id: 'web-presence-marketing',
    name: 'Web Presence & Marketing',
    icon: '🌐',
    description: 'Establish and grow your online presence with our comprehensive web and marketing services.',
    services: [
      {
        id: 'website-design',
        title: 'Website Design & Development',
        description: 'Custom websites tailored to your business needs'
      },
      {
        id: 'landing-pages',
        title: 'Landing Pages',
        description: 'High-converting pages designed to drive action'
      },
      {
        id: 'service-sites',
        title: 'Service Sites',
        description: 'Showcase your offerings with professional service pages'
      },
      {
        id: 'booking-sites',
        title: 'Booking Sites',
        description: 'Enable customers to book appointments directly online'
      },
      {
        id: 'local-seo',
        title: 'Local SEO Optimization',
        description: 'Improve your visibility in local search results'
      },
      {
        id: 'google-business',
        title: 'Google Business Profile Setup',
        description: 'Optimize your Google presence to attract local customers'
      },
      {
        id: 'keyword-optimization',
        title: 'Keyword Optimization',
        description: 'Target the right search terms to reach your audience'
      },
      {
        id: 'reputation-management',
        title: 'Reputation Management',
        description: 'Monitor and improve your online reputation'
      },
      {
        id: 'review-tracking',
        title: 'Review Tracking and Strategy',
        description: 'Collect and leverage positive customer reviews'
      },
      {
        id: 'email-marketing',
        title: 'Email Marketing Setup',
        description: 'Mailchimp, Klaviyo, and other platforms'
      },
      {
        id: 'blog-setup',
        title: 'Blog Setup / Content Strategy',
        description: 'Engage your audience with valuable content'
      },
      {
        id: 'lead-gen',
        title: 'Lead Gen Funnels',
        description: 'Capture pages + automated follow-up systems'
      },
      {
        id: 'crm-setup',
        title: 'CRM Setup',
        description: 'HubSpot, Zoho, Pipedrive — whatever fits your needs'
      }
    ]
  },
  {
    id: 'digital-tools-automation',
    name: 'Digital Tools & Automation',
    icon: '📱',
    description: 'Streamline your business operations with powerful digital tools and automation.',
    services: [
      {
        id: 'form-builders',
        title: 'Form Builders + Conditional Logic',
        description: 'Intake forms, applications, quote requests'
      },
      {
        id: 'automation',
        title: 'Automation with Zapier / Make',
        description: 'When someone submits this form, add them to CRM + send follow-up'
      },
      {
        id: 'booking-systems',
        title: 'Appointment Booking Systems',
        description: 'Calendly, TidyCal, Acuity — integrated with reminders'
      },
      {
        id: 'dashboard-builds',
        title: 'Custom Dashboard Builds',
        description: 'Google Data Studio / Airtable / Notion'
      },
      {
        id: 'internal-tools',
        title: 'Internal Tools with No-Code / Low-Code',
        description: 'Glide, Softr, Retool, Bubble apps'
      },
      {
        id: 'custom-app',
        title: 'Custom App Development',
        description: 'Bespoke applications tailored to your business processes'
      },
      {
        id: 'document-automation',
        title: 'Document Automation',
        description: 'Contracts, proposals, invoices auto-filled'
      }
    ]
  },
  {
    id: 'ecommerce-payments',
    name: 'Ecommerce & Payments',
    icon: '🛒',
    description: 'Set up reliable and secure online selling and payment systems.',
    services: [
      {
        id: 'online-store',
        title: 'Online Store Setup',
        description: 'Shopify, WooCommerce, Squarespace'
      },
      {
        id: 'payment-gateways',
        title: 'Payment Gateways',
        description: 'Stripe, PayPal, Square'
      },
      {
        id: 'pos-inventory',
        title: 'POS + Inventory Sync',
        description: 'For hybrid online/offline businesses'
      },
      {
        id: 'subscription-systems',
        title: 'Subscription/Membership Systems',
        description: 'Recurring revenue models for your business'
      }
    ]
  },
  {
    id: 'it-infrastructure',
    name: 'IT & Infrastructure',
    icon: '🧰',
    description: 'Build a solid technical foundation for your business operations.',
    services: [
      {
        id: 'email-domain',
        title: 'Email & Domain Setup',
        description: 'Google Workspace, Zoho Mail'
      },
      {
        id: 'cloud-storage',
        title: 'Cloud Storage & Backup',
        description: 'Google Drive, Dropbox, OneDrive setups'
      },
      {
        id: 'security-basics',
        title: 'Security Basics',
        description: 'SSL setup, password management tools, 2FA training'
      },
      {
        id: 'device-management',
        title: 'Device & Software Management',
        description: 'Helpful for larger small businesses with teams'
      }
    ]
  },
  {
    id: 'ongoing-support',
    name: 'Ongoing Support & Tech Help',
    icon: '🧑‍💻',
    description: 'Get continuous assistance to keep your digital systems running smoothly.',
    services: [
      {
        id: 'tech-concierge',
        title: 'Tech Concierge Monthly Plan',
        description: 'Ongoing fixes, updates, small projects'
      },
      {
        id: 'digital-strategy',
        title: 'Digital Strategy Consulting',
        description: 'Be their fractional CTO'
      },
      {
        id: 'training',
        title: 'Training & Documentation',
        description: 'Video walkthroughs, SOPs'
      },
      {
        id: 'tech-audit',
        title: 'Tech Stack Review & Audit',
        description: 'Evaluate and optimize your current tools'
      }
    ]
  },
  {
    id: 'ai-new-tech',
    name: 'AI & New Tech',
    icon: '🤖',
    description: 'Leverage cutting-edge AI technology to gain a competitive advantage.',
    services: [
      {
        id: 'chatbot-setup',
        title: 'Chatbot Setup',
        description: 'e.g. AI FAQ Assistant'
      },
      {
        id: 'ai-appointment',
        title: 'AI-Powered Appointment Routing',
        description: 'Smart scheduling and customer routing'
      },
      {
        id: 'custom-gpts',
        title: 'Custom GPTs for internal use',
        description: 'AI assistants tailored to your business needs'
      },
      {
        id: 'ai-image-video',
        title: 'AI Image / Video Tools',
        description: 'Make your social posts from one picture'
      },
      {
        id: 'voice-to-text',
        title: 'Voice-to-Text Workflow Setup',
        description: 'Field workers can send audio > turns into structured text'
      }
    ]
  },
  {
    id: 'bundled-offers',
    name: 'Bundled Offers',
    icon: '🧠',
    description: 'Comprehensive solution packages that address multiple business needs at once.',
    services: [
      {
        id: 'starter-digital',
        title: 'Starter Digital Package',
        description: 'Website + Google Biz + booking + basic email setup'
      },
      {
        id: 'lead-engine',
        title: 'Lead Engine',
        description: 'Lead magnet page + CRM setup + Zapier + email automation'
      },
      {
        id: 'ai-upgrade',
        title: 'AI Upgrade',
        description: 'AI assistant for FAQ + automated customer follow-up'
      },
      {
        id: 'digital-cleanup',
        title: 'Digital Cleanup',
        description: 'Organize your digital mess and make your tech work together'
      }
    ]
  }
];

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState(servicesData[0].id);

  const activeCategory = servicesData.find(category => category.id === activeTab) || servicesData[0];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32 gradient-hero w-full overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 -right-40 w-80 h-80 bg-[rgba(0,102,204,0.03)] rounded-full"></div>
          <div className="absolute bottom-0 -left-20 w-60 h-60 bg-[rgba(172,57,255,0.03)] rounded-full"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4 md:mb-6 text-[#1d1d1f] max-w-4xl mx-auto">
            <span className="text-[#0066cc]">Services</span> We Offer
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-[#86868b]">
            Comprehensive digital solutions to help your business thrive online.
            From web development to AI implementation, we provide end-to-end services.
          </p>
        </div>
      </section>

      <div className="section-divider my-0"></div>

      {/* Services Tab Navigation */}
      <section className="py-16 md:py-24 subtle-pattern bg-[#f5f5f7] w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 md:mb-16 text-[#1d1d1f] max-w-4xl mx-auto">
            Our <span className="text-[#ac39ff]">Services</span>
          </h2>
          
          {/* Tab Navigation */}
          <div className="overflow-x-auto pb-4 mb-8 md:mb-12">
            <div className="flex space-x-1 md:space-x-2 min-w-max mx-auto max-w-fit">
              {servicesData.map((category, index) => {
                // Alternate colors for tab indicators
                const colors = ["#0066cc", "#ac39ff", "#30d158", "#ff9f0a"];
                const color = colors[index % colors.length];
                
                return (
                  <button 
                    key={category.id}
                    onClick={() => setActiveTab(category.id)}
                    className={`px-5 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-base font-medium transition relative ${
                      activeTab === category.id 
                        ? `bg-white text-[#1d1d1f] shadow-sm` 
                        : 'bg-transparent text-[#1d1d1f] hover:bg-white/30'
                    }`}
                  >
                    <span className="mr-1">{category.icon}</span> {category.name}
                    {activeTab === category.id && (
                      <div style={{backgroundColor: color}} className="absolute left-0 bottom-0 w-full h-0.5"></div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
          
          {/* Active Tab Content */}
          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm apple-card">
            <div className="mb-6 md:mb-10">
              <div className="flex flex-col md:flex-row md:items-center">
                <span className="text-4xl md:text-5xl mx-auto md:mx-0 md:mr-6 mb-3 md:mb-0">{activeCategory.icon}</span>
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-2 md:mb-3 text-[#1d1d1f] text-center md:text-left">{activeCategory.name}</h3>
                  <p className="text-base md:text-lg text-[#86868b] text-center md:text-left">{activeCategory.description}</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {activeCategory.services.map((service, index) => {
                // Alternate colors for service cards
                const colors = ["#0066cc", "#ac39ff", "#30d158", "#ff9f0a"];
                const color = colors[index % colors.length];
                const gradients = ["gradient-bg-blue", "gradient-bg-purple", "gradient-bg-green", "gradient-bg-orange"];
                const gradient = gradients[index % gradients.length];
                
                return (
                  <div key={service.id} className={`${gradient} rounded-xl p-5 md:p-6 shadow-sm h-full`}>
                    <h4 className="text-lg md:text-xl font-semibold mb-2 text-[#1d1d1f]">{service.title}</h4>
                    {service.description && (
                      <p className="text-sm md:text-base text-[#1d1d1f]/80">{service.description}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider my-0"></div>

      {/* Service Categories Cards */}
      <section className="py-16 md:py-24 gradient-bg-blue w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 md:mb-16 text-[#1d1d1f] max-w-4xl mx-auto">
            All Our <span className="text-[#0066cc]">Services</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {servicesData.map((category, index) => {
              // Alternate colors for category cards
              const colors = ["#0066cc", "#ac39ff", "#30d158", "#ff9f0a"];
              const color = colors[index % colors.length];
              
              return (
                <div key={category.id} className="bg-white rounded-xl p-6 md:p-8 shadow-sm apple-card border-l-4" style={{borderColor: color}}>
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-[#1d1d1f]">{category.name}</h3>
                  <p className="text-sm md:text-base text-[#86868b] mb-4">{category.description}</p>
                  <button 
                    onClick={() => setActiveTab(category.id)}
                    className="inline-flex items-center text-sm md:text-base transition-colors"
                    style={{color: color}}
                  >
                    View Services
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="section-divider my-0"></div>

      {/* Call to Action */}
      <section className="py-16 md:py-24 gradient-bg-orange w-full">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 md:mb-8 text-[#1d1d1f] max-w-4xl mx-auto">Ready to Transform Your Digital Presence?</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 md:mb-10 text-[#86868b]">
            Let's discuss how our services can help your business grow and thrive in the digital world.
          </p>
          <Link 
            to="/#contact" 
            className="bg-[#ff9f0a] text-white px-8 py-3 md:px-10 md:py-4 rounded-full text-base md:text-lg font-medium hover:bg-[#e98c00] transition"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;