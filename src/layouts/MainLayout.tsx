import { ReactNode } from 'react';
import { Link, useParams } from 'react-router-dom';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const { niche = '' } = useParams<{ niche?: string }>();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link to="/" className="text-2xl font-bold mb-4 md:mb-0">
              WebsiteBuilder<span className="text-blue-300">Pro</span>
            </Link>
            <nav>
              <ul className="flex space-x-6">
                <li><a href="#services" className="hover:text-blue-200 transition">Services</a></li>
                <li><a href="#portfolio" className="hover:text-blue-200 transition">Portfolio</a></li>
                <li><a href="#testimonials" className="hover:text-blue-200 transition">Testimonials</a></li>
                <li><a href="#faq" className="hover:text-blue-200 transition">FAQ</a></li>
                <li><a href="#contact" className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 transition">Contact Us</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">WebsiteBuilderPro</h3>
              <p className="text-gray-300">
                Specialized in creating professional websites for {niche ? niche.replace('_', ' ') : 'businesses'}.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition">Website Design</a></li>
                <li><a href="#" className="hover:text-white transition">SEO Optimization</a></li>
                <li><a href="#" className="hover:text-white transition">Content Management</a></li>
                <li><a href="#" className="hover:text-white transition">Website Maintenance</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Our Team</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <address className="not-italic text-gray-300 space-y-2">
                <p>123 Web Street</p>
                <p>Digital City, DC 10101</p>
                <p>Email: info@websitebuilderpro.com</p>
                <p>Phone: (555) 123-4567</p>
              </address>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} WebsiteBuilderPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout; 