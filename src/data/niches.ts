export interface NicheContent {
  title: string;
  headline: string;
  description: string;
  benefits: string[];
  testimonial: {
    quote: string;
    author: string;
    business: string;
  };
  features: {
    title: string;
    description: string;
  }[];
  callToAction: string;
  faqs: {
    question: string;
    answer: string;
  }[];
}

interface NichesData {
  [key: string]: NicheContent;
}

// Default content for niches not specifically defined
const defaultContent: NicheContent = {
  title: "Professional Website Design",
  headline: "Transform Your Business with a Professional Website",
  description: "We specialize in creating stunning, high-converting websites tailored specifically to your business needs.",
  benefits: [
    "Increase online visibility and attract more customers",
    "Showcase your products and services professionally",
    "Convert visitors into loyal customers",
    "Establish credibility in your industry"
  ],
  testimonial: {
    quote: "Working with this team transformed our online presence completely. The website they built has increased our inquiries by 45%.",
    author: "Alex Johnson",
    business: "Business Owner"
  },
  features: [
    {
      title: "Custom Design",
      description: "Websites designed specifically for your brand and business goals"
    },
    {
      title: "Mobile Optimization",
      description: "Responsive designs that work perfectly on all devices"
    },
    {
      title: "SEO Features",
      description: "Built-in optimization to help customers find you online"
    },
    {
      title: "Easy Updates",
      description: "User-friendly content management system"
    }
  ],
  callToAction: "Ready to elevate your online presence? Contact us today for a free consultation!",
  faqs: [
    {
      question: "How long does it take to build a website?",
      answer: "Most projects are completed within 2-4 weeks, depending on complexity and specific requirements."
    },
    {
      question: "Do you provide hosting services?",
      answer: "Yes, we offer reliable hosting solutions with regular backups and maintenance included."
    },
    {
      question: "Can I update the website myself?",
      answer: "Absolutely! We build all our websites with user-friendly content management systems."
    },
    {
      question: "What's included in your website packages?",
      answer: "Our packages include custom design, mobile optimization, basic SEO setup, content management system, and training."
    }
  ]
};

// Niche-specific content
const nichesData: NichesData = {
  dentists: {
    ...defaultContent,
    title: "Dental Practice Website Design",
    headline: "Grow Your Dental Practice with a Professional Website",
    description: "We specialize in creating stunning, high-converting websites tailored specifically for dental practices.",
    benefits: [
      "Attract new patients to your dental practice",
      "Showcase your dental services professionally",
      "Build trust with potential patients before they visit",
      "Streamline appointment booking process"
    ],
    testimonial: {
      quote: "Since launching our new website, we've seen a 60% increase in new patient inquiries. The online booking feature has reduced our administrative workload significantly.",
      author: "Dr. Sarah Mitchell",
      business: "Mitchell Dental Care"
    },
    features: [
      {
        title: "Online Appointment Booking",
        description: "Allow patients to schedule appointments 24/7"
      },
      {
        title: "Service Galleries",
        description: "Showcase your dental procedures with before/after galleries"
      },
      {
        title: "Patient Resources",
        description: "Educational content and downloadable forms"
      },
      {
        title: "Practice Tour",
        description: "Virtual tour of your facilities to ease patient anxiety"
      }
    ],
    callToAction: "Ready to attract more patients to your dental practice? Contact us today for a free consultation!",
    faqs: [
      {
        question: "Can patients book appointments through the website?",
        answer: "Yes, we can integrate online booking systems that connect with your practice management software."
      },
      {
        question: "Will my website be HIPAA compliant?",
        answer: "Absolutely. We ensure all dental websites meet HIPAA requirements for patient information security."
      },
      {
        question: "Can you showcase our before/after dental work?",
        answer: "Yes, we create beautiful galleries to showcase your successful cases and procedures."
      },
      {
        question: "Do you integrate with dental practice management software?",
        answer: "Yes, we can integrate with most major dental practice management systems."
      }
    ]
  },
  
  lawyers: {
    ...defaultContent,
    title: "Law Firm Website Design",
    headline: "Establish Authority with a Professional Law Firm Website",
    description: "We create sophisticated, conversion-focused websites specifically tailored for legal practices.",
    benefits: [
      "Project professionalism and establish credibility",
      "Generate qualified client leads",
      "Showcase your expertise and case results",
      "Differentiate your firm from competitors"
    ],
    testimonial: {
      quote: "Our website redesign has transformed our firm's digital presence. We're now generating high-quality leads consistently, and our conversion rate has increased by 75%.",
      author: "Jennifer Harrington",
      business: "Harrington Legal Partners"
    },
    features: [
      {
        title: "Practice Area Pages",
        description: "Detailed pages for each of your legal specialties"
      },
      {
        title: "Attorney Profiles",
        description: "Professional profiles highlighting credentials and expertise"
      },
      {
        title: "Case Results",
        description: "Showcase your successful cases and settlements"
      },
      {
        title: "Client Intake Forms",
        description: "Secure online forms to streamline client onboarding"
      }
    ],
    callToAction: "Ready to elevate your law firm's online presence? Contact us today for a free consultation!",
    faqs: [
      {
        question: "Can you help with legal content writing?",
        answer: "Yes, we work with legal content specialists who understand your practice areas and can create authoritative content."
      },
      {
        question: "Will my website be secure for sensitive client information?",
        answer: "Absolutely. We implement strong security measures to protect all data transmitted through your website."
      },
      {
        question: "Can you integrate with our case management software?",
        answer: "Yes, we can integrate with most legal case management systems to streamline your workflow."
      },
      {
        question: "Do you understand attorney advertising rules?",
        answer: "Yes, we ensure all content adheres to your state's specific rules regarding attorney advertising."
      }
    ]
  },
  
  mechanics: {
    ...defaultContent,
    title: "Auto Repair Shop Website Design",
    headline: "Drive More Business to Your Auto Repair Shop",
    description: "We build professional websites designed to bring more customers to your auto repair business.",
    benefits: [
      "Attract local customers searching for auto repairs",
      "Showcase your services and expertise",
      "Build trust with potential customers",
      "Streamline appointment booking process"
    ],
    testimonial: {
      quote: "Our website has become our best marketing tool. We're getting new customers every day who found us online, and our online booking system has simplified our scheduling process.",
      author: "Mike Rodriguez",
      business: "Rodriguez Auto Care"
    },
    features: [
      {
        title: "Service Listings",
        description: "Detailed pages for all your auto repair services"
      },
      {
        title: "Online Appointment Booking",
        description: "Allow customers to schedule service appointments 24/7"
      },
      {
        title: "Before/After Gallery",
        description: "Showcase your quality work with visual examples"
      },
      {
        title: "Specials and Promotions",
        description: "Easily update special offers to attract new customers"
      }
    ],
    callToAction: "Ready to bring more customers to your auto repair shop? Contact us today for a free consultation!",
    faqs: [
      {
        question: "Can customers schedule appointments online?",
        answer: "Yes, we can integrate appointment booking systems that connect with your shop management software."
      },
      {
        question: "Will my website show up in local searches?",
        answer: "Absolutely. We optimize your site for local SEO so nearby customers can find you easily."
      },
      {
        question: "Can I showcase my certifications and specialties?",
        answer: "Yes, we create dedicated sections to highlight your team's certifications and technical specialties."
      },
      {
        question: "Do you integrate with auto shop management software?",
        answer: "Yes, we can integrate with most major automotive shop management systems."
      }
    ]
  },
  
  sports_clubs: {
    ...defaultContent,
    title: "Sports Club Website Design",
    headline: "Grow Your Sports Club with a Professional Website",
    description: "We create engaging websites designed specifically for sports clubs and athletic organizations.",
    benefits: [
      "Attract new members to your sports club",
      "Showcase your facilities and programs",
      "Streamline registration and payment processes",
      "Keep members updated with events and news"
    ],
    testimonial: {
      quote: "Our new website has revolutionized how we manage our club. Online registrations have increased by 85%, and the member portal has significantly improved communication.",
      author: "Chris Thompson",
      business: "Riverside Athletic Club"
    },
    features: [
      {
        title: "Online Registration",
        description: "Allow members to sign up and pay for programs online"
      },
      {
        title: "Event Calendar",
        description: "Interactive calendar displaying all club events and activities"
      },
      {
        title: "Member Portal",
        description: "Secure area for members to access exclusive content"
      },
      {
        title: "Team/League Management",
        description: "Tools to manage teams, schedules, and results"
      }
    ],
    callToAction: "Ready to take your sports club to the next level? Contact us today for a free consultation!",
    faqs: [
      {
        question: "Can members register and pay for programs online?",
        answer: "Yes, we integrate secure payment systems and registration forms for seamless member onboarding."
      },
      {
        question: "Can coaches update team information?",
        answer: "Absolutely. We can set up different access levels allowing coaches to update their team's information."
      },
      {
        question: "Will the website work well on mobile devices?",
        answer: "Yes, all our websites are fully responsive and work perfectly on all devices, which is essential for members checking schedules on the go."
      },
      {
        question: "Can you integrate with sports management software?",
        answer: "Yes, we integrate with popular sports management platforms to handle scheduling, registration, and communications."
      }
    ]
  }
};

// Helper function to get content for a specific niche
export const getNicheContent = (niche: string): NicheContent => {
  // Convert to lowercase and remove any special characters for consistent matching
  const normalizedNiche = niche.toLowerCase().replace(/[^\w]/g, '_');
  return nichesData[normalizedNiche] || defaultContent;
};

export default nichesData; 