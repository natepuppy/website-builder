import { useParams } from 'react-router-dom';
import { getNicheContent } from '../data/niches';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const { niche = '' } = useParams<{ niche?: string }>();
  const content = getNicheContent(niche);
  const businessType = niche ? niche.replace('_', ' ') : 'Business';
  
  return (
    <div className="w-full">
      {/* Hero Section with Animated Background */}
      <section className="relative overflow-hidden py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white w-full">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-pink-500 mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-20 right-20 w-60 h-60 rounded-full bg-indigo-500 mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/4 w-80 h-80 rounded-full bg-purple-500 mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            {content.headline.split(' ').map((word, i) => (
              <span key={i} className={i % 3 === 1 ? "text-pink-300" : ""}>{word} </span>
            ))}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-indigo-100">
            {content.description}
          </p>
          <Link 
            to="#contact" 
            className="bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-pink-100 hover:text-pink-600 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
          >
            Get Started
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="white"></path>
          </svg>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white w-full text-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How We Help {businessType}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.benefits.map((benefit: string, index: number) => (
              <div key={index} className="bg-gradient-to-br from-indigo-50 to-pink-50 p-6 rounded-xl shadow-md text-center fun-card">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 fun-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-16 bg-gradient-to-br from-indigo-50 to-pink-50 w-full text-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.features.map((feature: { title: string; description: string }, index: number) => (
              <div key={index} className="flex bg-white p-6 rounded-xl shadow-md fun-card">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 fun-icon">
                  <span className="font-bold text-lg">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link 
              to="/services" 
              className="bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:from-indigo-700 hover:to-pink-700 transition shadow-lg inline-flex items-center"
            >
              View All Services
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 bg-white w-full text-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our {businessType} Website Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300 fun-card">
                <div className="bg-gradient-to-br from-indigo-500 to-pink-500 h-48 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 group-hover:opacity-0 transition-opacity"></div>
                  <span className="text-white text-lg font-bold relative z-10 group-hover:scale-110 transition-transform duration-300">Portfolio {item}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{businessType} Website {item}</h3>
                  <p className="text-gray-600 mb-4">A custom-designed website with all the features a modern {businessType.toLowerCase()} needs.</p>
                  <Link to="#" className="text-indigo-600 hover:text-pink-600 transition-colors font-medium inline-flex items-center">
                    View Details 
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-indigo-600 to-pink-600 text-white w-full relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">What Our Clients Say</h2>
          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg">
            <div className="text-2xl italic mb-6 leading-relaxed">"{content.testimonial.quote}"</div>
            <div className="font-semibold text-xl">{content.testimonial.author}</div>
            <div className="text-indigo-200">{content.testimonial.business}</div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-white w-full text-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{content.callToAction}</h2>
          <Link 
            to="#contact" 
            className="bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:from-indigo-700 hover:to-pink-700 transition shadow-lg inline-block"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-gradient-to-br from-indigo-50 to-pink-50 w-full text-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {content.faqs.map((faq: { question: string; answer: string }, index: number) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md fun-card">
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white w-full text-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Contact Us</h2>
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-indigo-50 to-pink-50 p-8 rounded-xl shadow-lg">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-6 py-4 rounded-full font-bold hover:from-indigo-700 hover:to-pink-700 transition shadow-lg transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 