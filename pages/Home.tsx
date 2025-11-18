import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { SERVICES, REVIEWS, LOCATIONS, PHONE_NUMBER, COMMON_PROBLEMS } from '../constants';
import { CheckCircle, Star, ArrowRight, ShieldCheck, Clock, DollarSign, MapPin, Phone, AlertTriangle } from 'lucide-react';

const Home: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Seattle Refinishing Pros",
    "image": "https://picsum.photos/1200/630",
    "telephone": PHONE_NUMBER,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Seattle",
      "addressRegion": "WA",
      "addressCountry": "US"
    },
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    }
  };

  return (
    <Layout>
      <SEO 
        title="Bathtub Refinishing & Tile Reglazing Seattle" 
        description="#1 Rated Bathtub Refinishing, Tile Reglazing & Countertop Resurfacing in Seattle. Save 75% vs Replacement. 10-Year Warranty. Get a Free Quote!"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="relative bg-dark text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img src="https://picsum.photos/id/155/1920/1080" alt="Modern Bathroom Background" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block bg-secondary text-dark font-bold px-3 py-1 rounded mb-4 text-sm uppercase tracking-wider">
              Seattle's Best Refinishers
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Don't Replace It. <br/>
              <span className="text-secondary">Refinish It.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light">
              Professional bathtub refinishing, tile reglazing, and countertop resurfacing in Seattle. Restore your fixtures in just one day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-secondary hover:bg-yellow-500 text-dark text-lg font-bold px-8 py-4 rounded shadow-lg transition text-center">
                Get Free Estimate
              </a>
              <Link to="/our-process" className="bg-transparent border-2 border-white hover:bg-white hover:text-dark text-white text-lg font-bold px-8 py-4 rounded transition text-center">
                How It Works
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-4 text-sm text-gray-300">
              <div className="flex gap-1 text-secondary">
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
              </div>
              <span>5.0 Star Rating based on 150+ Reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-gray-100 py-8 border-b border-gray-200">
        <div className="container mx-auto px-4 flex flex-wrap justify-center md:justify-around gap-6 text-gray-600 font-semibold uppercase text-sm tracking-wide">
          <div className="flex items-center gap-2"><ShieldCheck className="text-primary" /> 5 Year Warranty</div>
          <div className="flex items-center gap-2"><Clock className="text-primary" /> Done in 1 Day</div>
          <div className="flex items-center gap-2"><DollarSign className="text-primary" /> Save 75% Cost</div>
          <div className="flex items-center gap-2"><CheckCircle className="text-primary" /> Licensed & Insured</div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Professional Surface Restoration Services</h2>
            <p className="text-gray-600 text-lg">We specialize in hard surface refinishing for residential and commercial properties throughout the Greater Seattle area. From tubs to tiles, we make it new again.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <Link key={service.id} to={`/${service.slug}`} className="group block bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition duration-300 flex flex-col">
                <div className="h-48 bg-gray-200 overflow-hidden relative">
                   <img src={`https://picsum.photos/seed/${service.id}/600/400`} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                   <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/60 to-transparent w-full h-20"></div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                     <div className="text-3xl">{service.icon}</div>
                     <ArrowRight size={20} className="text-gray-300 group-hover:text-secondary transition" />
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-primary transition">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">{service.shortDescription}</p>
                  <span className="text-primary font-bold text-sm uppercase tracking-wide">Learn More</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Fix Section - NEW */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Common Problems We Fix</h2>
              <p className="text-gray-600 text-lg">
                Is your bathroom showing its age? These are the most common issues we solve every day for Seattle homeowners.
              </p>
            </div>
            <Link to="/surface-problems" className="hidden md:flex items-center gap-2 text-primary font-bold hover:text-secondary transition">
              View All Problems <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMMON_PROBLEMS.slice(0, 4).map((problem) => (
              <div key={problem.id} className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-secondary transition group">
                <div className="mb-4 text-secondary group-hover:scale-110 transition transform">
                  <AlertTriangle size={28} />
                </div>
                <h3 className="font-bold text-lg text-dark mb-3">{problem.title}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">{problem.description}</p>
                <Link to={`/${problem.relatedServiceSlug}`} className="text-primary font-bold text-sm flex items-center gap-1 group-hover:underline">
                  {problem.ctaText} <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
             <Link to="/surface-problems" className="btn-primary inline-block text-primary font-bold">View All Surface Problems</Link>
          </div>
        </div>
      </section>

      {/* Before / After (Static Visuals) */}
      <section className="py-20 bg-dark text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Incredible Transformations</h2>
              <p className="text-gray-300 text-lg mb-8">
                See the difference reglazing makes. We take stained, chipped, and outdated fixtures and make them look factory-new for a fraction of the price of replacement.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <strong className="block text-white">No Demolition Mess</strong>
                    <span className="text-sm text-gray-400">We don't tear anything out. No dust, no debris.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <strong className="block text-white">Custom Colors</strong>
                    <span className="text-sm text-gray-400">Choose from pure white, almond, or stone finishes.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <strong className="block text-white">Eco-Friendly Option</strong>
                    <span className="text-sm text-gray-400">Keeping bathtubs out of landfills is better for the environment.</span>
                  </div>
                </li>
              </ul>
              <Link to="/our-process" className="bg-white text-dark font-bold px-6 py-3 rounded hover:bg-gray-200 transition inline-block">
                View Our Gallery
              </Link>
            </div>
            <div className="md:w-1/2 relative">
              {/* Comparison Visual Placeholder */}
              <div className="relative rounded-lg overflow-hidden shadow-2xl border-4 border-white/10">
                <img src="https://picsum.photos/id/250/800/600" alt="Before and After Refinishing" className="w-full h-auto" />
                <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 text-xs font-bold rounded uppercase">Before</div>
                <div className="absolute bottom-4 right-4 bg-secondary text-dark px-3 py-1 text-xs font-bold rounded uppercase">After</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-12">Why Seattle Chooses Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">5-Year Warranty</h3>
              <p className="text-gray-600 text-sm">We stand behind our work. Our adhesion process is industrial grade, ensuring no peeling or bubbling for years to come.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <DollarSign size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Affordable Quality</h3>
              <p className="text-gray-600 text-sm">Replacement costs $3,000+. Refinishing costs a fraction of that. Keep your money for other renovations.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <MapPin size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Local Experts</h3>
              <p className="text-gray-600 text-sm">We are locally owned and operated in Seattle. We treat your home like it's our own, with respect and care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Neighbors Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {REVIEWS.slice(0,3).map((review) => (
              <div key={review.id} className="bg-white border border-gray-100 p-8 rounded-xl shadow-lg relative">
                <div className="flex text-secondary mb-4">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-700 italic mb-6">"{review.text}"</p>
                <div className="font-bold text-dark">{review.name}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">{review.location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section (ID for scrolling) */}
      <section id="contact" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">Get Started</span>
              <h2 className="text-4xl font-bold mb-6">Request a Free Quote</h2>
              <p className="text-blue-100 mb-8 text-lg">
                Fill out the form or give us a call. We usually respond within 2 hours with a preliminary estimate.
              </p>
              <div className="space-y-4 text-lg">
                <p className="flex items-center gap-3"><Phone className="text-secondary" /> {PHONE_NUMBER}</p>
                <p className="flex items-center gap-3"><MapPin className="text-secondary" /> Serving Seattle, Bellevue, Everett & Tacoma</p>
              </div>
            </div>
            <form className="bg-white rounded-xl p-8 shadow-2xl text-gray-800">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-500 mb-1">First Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-300 rounded p-3 focus:border-primary outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Last Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-300 rounded p-3 focus:border-primary outline-none" />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Phone</label>
                <input type="tel" className="w-full bg-gray-50 border border-gray-300 rounded p-3 focus:border-primary outline-none" />
              </div>
              <div className="mb-4">
                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Service Needed</label>
                <select className="w-full bg-gray-50 border border-gray-300 rounded p-3 focus:border-primary outline-none">
                  <option>Bathtub Refinishing</option>
                  <option>Tile Reglazing</option>
                  <option>Countertop Resurfacing</option>
                  <option>Sink Repair</option>
                  <option>Shower Refinishing</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Message</label>
                <textarea rows={3} className="w-full bg-gray-50 border border-gray-300 rounded p-3 focus:border-primary outline-none"></textarea>
              </div>
              <button type="button" className="w-full bg-secondary hover:bg-yellow-500 text-dark font-bold py-4 rounded transition shadow-md">
                Send Request
              </button>
              <p className="text-xs text-center text-gray-400 mt-4">No spam. Your info is safe with us.</p>
            </form>
          </div>
        </div>
      </section>

      {/* Locations Links */}
      <section className="py-12 bg-dark border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-gray-400 text-sm uppercase font-bold tracking-widest mb-6">Locations We Serve</h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {LOCATIONS.map(loc => (
              <Link key={loc.id} to={`/locations/${loc.slug}`} className="text-gray-500 hover:text-white transition text-sm">
                {loc.city} Refinishing
              </Link>
            ))}
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Home;