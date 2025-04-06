import { useParams } from 'react-router-dom';
import { getNicheContent } from '../data/niches';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const { niche = '' } = useParams<{ niche?: string }>();
  const content = getNicheContent(niche);
  const businessType = niche ? niche.replace('_', ' ') : 'Business';
  
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="section-lg gradient-light pattern-dots w-full overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 md:mb-8 tracking-tight max-w-4xl mx-auto animate-fadeIn">
            {content.headline.split(' ').map((word, i) => (
              <span key={i} className={i % 3 === 1 ? "text-[var(--primary-color)]" : ""}>{word} </span>
            ))}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 md:mb-12 text-[var(--gray-600)] animate-slideUp animation-delay-100">
            {content.description}
          </p>
          <Link 
            to="#contact" 
            className="btn btn-primary px-7 py-3 text-base md:text-lg inline-block animate-slideUp animation-delay-200"
          >
            Get Started
          </Link>
        </div>
      </section>

      <div className="divider-center"></div>

      {/* Benefits Section */}
      <section id="benefits" className="section bg-light w-full">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="bg-[var(--primary-color)]/10 text-[var(--primary-color)] text-sm font-medium px-4 py-1.5 rounded-lg inline-block mb-4">BENEFITS</span>
            <h2 className="text-3xl md:text-4xl font-semibold max-w-4xl mx-auto">How We Help {businessType}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {content.benefits.map((benefit: string, index: number) => {
              return (
                <div key={index} className="card p-6 md:p-8 text-center">
                  <div className="bg-primary w-12 h-12 text-white rounded-full flex items-center justify-center mx-auto mb-4 md:mb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-base md:text-lg font-normal">{benefit}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="divider-center"></div>

      {/* Features Section */}
      <section id="services" className="section bg-dark pattern-dots-dark w-full">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="bg-white/10 text-white text-sm font-medium px-4 py-1.5 rounded-lg inline-block mb-4">SERVICES</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-white max-w-4xl mx-auto">Our Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {content.features.map((feature: { title: string; description: string }, index: number) => {
              return (
                <div key={index} className="bg-[var(--gray-800)] p-6 md:p-8 rounded-xl shadow-lg hover:bg-[var(--gray-700)] transition-colors flex">
                  <div className="bg-primary w-10 h-10 text-white rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="font-medium">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                    <p className="text-base text-[var(--gray-400)]">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-12 md:mt-16 text-center">
            <Link 
              to="/services" 
              className="btn btn-outline-white px-7 py-3 inline-flex items-center"
            >
              View All Services
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <div className="divider-center"></div>

      {/* Portfolio Section */}
      <section id="portfolio" className="section gradient-light w-full">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="bg-[var(--primary-color)]/10 text-[var(--primary-color)] text-sm font-medium px-4 py-1.5 rounded-lg inline-block mb-4">PORTFOLIO</span>
            <h2 className="text-3xl md:text-4xl font-semibold max-w-4xl mx-auto">Our {businessType} Website Portfolio</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="card overflow-hidden interactive-item">
                <div className={`bg-primary h-40 md:h-48 flex items-center justify-center`}>
                  <span className="text-white text-base md:text-lg font-medium">Portfolio {item}</span>
                </div>
                <div className="card-content">
                  <h3 className="text-lg md:text-xl font-semibold mb-2">{businessType} Website {item}</h3>
                  <p className="text-[var(--gray-600)] mb-4">A custom-designed website with all the features a modern {businessType.toLowerCase()} needs.</p>
                  <Link to="#" className="text-[var(--primary-color)] hover:text-[var(--primary-dark)] transition-colors inline-flex items-center text-sm md:text-base">
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

      <div className="divider-center"></div>

      {/* Testimonial Section */}
      <section id="testimonials" className="section gradient-blue-to-indigo pattern-dots-dark w-full">
        <div className="container mx-auto px-4 text-center">
          <div className="text-center mb-16">
            <span className="bg-white/10 text-white text-sm font-medium px-4 py-1.5 rounded-lg inline-block mb-4">TESTIMONIALS</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-white max-w-4xl mx-auto">What Our Clients Say</h2>
          </div>
          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm p-10 md:p-12 rounded-xl relative border border-white/20">
            <svg className="w-12 h-12 text-white opacity-20 absolute top-6 left-6" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 8v6c0 2.2-1.8 4-4 4h-2v2c0 3.3 2.7 6 6 6v-2c-2.2 0-4-1.8-4-4v-2h4v-10h-6v6h2c1.1 0 2-0.9 2-2v-4h2zM26 8v6c0 2.2-1.8 4-4 4h-2v2c0 3.3 2.7 6 6 6v-2c-2.2 0-4-1.8-4-4v-2h4v-10h-6v6h2c1.1 0 2-0.9 2-2v-4h2z"></path>
            </svg>
            <div className="text-xl md:text-2xl italic mb-6 md:mb-8 leading-relaxed text-white">"{content.testimonial.quote}"</div>
            <div className="font-semibold text-lg md:text-xl text-white">{content.testimonial.author}</div>
            <div className="text-base text-white/70">{content.testimonial.business}</div>
          </div>
        </div>
      </section>

      <div className="divider-center"></div>

      {/* Call to Action Section */}
      <section id="cta" className="section bg-light pattern-grid w-full">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 max-w-3xl mx-auto">{content.callToAction}</h2>
          <Link 
            to="#contact" 
            className="btn btn-primary px-8 py-3 md:px-10 md:py-4 text-base md:text-lg shadow-lg"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

      <div className="divider-center"></div>

      {/* FAQ Section */}
      <section id="faq" className="section bg-dark w-full">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="bg-white/10 text-white text-sm font-medium px-4 py-1.5 rounded-lg inline-block mb-4">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-white max-w-4xl mx-auto">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
            {content.faqs.map((faq: { question: string; answer: string }, index: number) => (
              <div key={index} className="bg-[var(--gray-800)] p-6 md:p-8 rounded-xl border border-white/5 hover:bg-[var(--gray-700)] transition-colors">
                <h3 className="text-lg md:text-xl font-semibold mb-3 text-white">{faq.question}</h3>
                <p className="text-base text-[var(--gray-400)]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-center"></div>

      {/* Contact Section */}
      <section id="contact" className="section gradient-light w-full">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="bg-[var(--primary-color)]/10 text-[var(--primary-color)] text-sm font-medium px-4 py-1.5 rounded-lg inline-block mb-4">CONTACT</span>
            <h2 className="text-3xl md:text-4xl font-semibold max-w-4xl mx-auto">Contact Us</h2>
          </div>
          <div className="max-w-2xl mx-auto card p-8 md:p-10">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--gray-600)] mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 border border-[var(--gray-300)] rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--gray-600)] mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 border border-[var(--gray-300)] rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] transition"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div className="mb-8">
                <label htmlFor="subject" className="block text-sm font-medium text-[var(--gray-600)] mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 border border-[var(--gray-300)] rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] transition"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-[var(--gray-600)] mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-3 border border-[var(--gray-300)] rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] transition"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full btn btn-primary py-3 md:py-4"
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