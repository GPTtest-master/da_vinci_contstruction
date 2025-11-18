import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { LOCATIONS, SERVICES, PHONE_NUMBER, REVIEWS } from '../constants';
import { MapPin, Star, Phone, CheckCircle, ArrowRight } from 'lucide-react';

const LocationPage: React.FC = () => {
  const { city } = useParams<{ city: string }>();
  const location = LOCATIONS.find(l => l.slug === city);

  if (!location) {
    return <Navigate to="/locations" replace />;
  }

  // Filter reviews to try and match location, or just show general high rated ones
  const localReviews = REVIEWS.filter(r => r.location.includes(location.city));
  const displayReviews = localReviews.length > 0 ? localReviews : REVIEWS.slice(0, 2);

  // Schema for Local Business specific to this city
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Seattle Refinishing Pros - ${location.city}`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": location.city,
      "addressRegion": "WA",
      "addressCountry": "US"
    },
    "telephone": PHONE_NUMBER,
    "areaServed": location.city,
    "priceRange": "$$",
    "description": `Expert bathtub refinishing, tile reglazing, and countertop resurfacing services in ${location.city}, WA.`
  };

  return (
    <Layout>
      <SEO 
        title={`Bathtub Refinishing ${location.city}, WA | Tile & Countertop Resurfacing`} 
        description={`#1 Rated Bathtub Refinishing in ${location.city}, WA. We repair and reglaze tubs, tiles, and sinks. Save 75% vs replacement. Local experts. Free Quote!`}
        schema={schema}
      />

      {/* Localized Hero */}
      <div className="bg-dark text-white py-20 lg:py-24 relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1 rounded-full mb-6 text-sm backdrop-blur-sm border border-white/20">
            <MapPin size={14} className="text-secondary" /> 
            <span className="uppercase tracking-wider font-semibold">Serving {location.city} & Surrounding Areas</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            Bathtub Refinishing & <br className="hidden md:block" />Resurfacing in <span className="text-secondary">{location.city}, WA</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            {location.description} We are your local experts for affordable bathroom and kitchen surface restoration.
          </p>
          <a href="#contact" className="bg-secondary hover:bg-yellow-500 text-dark font-bold px-8 py-4 rounded shadow-lg transition inline-block">
            Get a Free {location.city} Quote
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-dark">Top-Rated Refinishing Experts in {location.city}</h2>
            <p className="text-gray-700 mb-4 leading-relaxed text-lg">
              Homeowners in <strong>{location.city}</strong> know that remodeling allows costs to spiral out of control. That's why Seattle Refinishing Pros offers a smart alternative. 
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Whether you have a vintage clawfoot tub in a historic home or a standard fiberglass unit, our mobile team arrives at your door in {location.city} fully equipped. Our process ensures minimal disruption, with most projects finished in a single day.
            </p>
            
            <div className="grid grid-cols-1 gap-3 mt-6">
                <div className="flex items-center gap-3">
                    <CheckCircle className="text-primary flex-shrink-0" size={20} />
                    <span className="font-semibold">Locally owned and operated</span>
                </div>
                <div className="flex items-center gap-3">
                    <CheckCircle className="text-primary flex-shrink-0" size={20} />
                    <span className="font-semibold">Serving all {location.city} neighborhoods</span>
                </div>
                <div className="flex items-center gap-3">
                    <CheckCircle className="text-primary flex-shrink-0" size={20} />
                    <span className="font-semibold">Fully licensed and insured in WA</span>
                </div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-2xl transform md:rotate-2 border-4 border-white">
            <img src={`https://picsum.photos/seed/${location.id}/800/600`} alt={`Bathtub Refinishing work in ${location.city}`} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Services List for Local SEO */}
        <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4 text-dark">Our Services in {location.city}</h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">We provide a full range of hard surface restoration services.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
                <div key={service.id} className="bg-white p-6 border border-gray-100 rounded-lg hover:shadow-xl transition group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition transform duration-300">{service.icon}</div>
                <h3 className="font-bold text-xl mb-2 text-dark group-hover:text-primary transition">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{service.shortDescription}</p>
                <Link to={`/${service.slug}`} className="text-primary text-sm font-bold hover:underline flex items-center gap-1">
                    Learn More <ArrowRight size={14}/>
                </Link>
                </div>
            ))}
            </div>
        </div>

        {/* Local Reviews */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">What {location.city} Neighbors Are Saying</h2>
            <div className="grid md:grid-cols-2 gap-8">
                {displayReviews.map((review) => (
                    <div key={review.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <div className="flex text-secondary mb-2">
                            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                        </div>
                        <p className="text-gray-700 italic mb-4">"{review.text}"</p>
                        <div className="font-bold text-dark flex justify-between items-center">
                            <span>{review.name}</span>
                            <span className="text-xs text-gray-400 font-normal uppercase flex items-center gap-1"><MapPin size={12}/> {review.location}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* CTA Section */}
        <div id="contact" className="bg-primary text-white rounded-2xl p-8 md:p-16 text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to update your home in {location.city}?</h2>
          <p className="mb-8 max-w-xl mx-auto text-blue-100 text-lg">Don't waste thousands on replacement. Contact us today for a fast, free quote specifically for {location.city} residents.</p>
          <div className="flex justify-center gap-4 flex-col sm:flex-row items-center">
             <div className="bg-white p-1 rounded flex items-center">
                <Phone className="text-secondary ml-3"/>
                <span className="text-dark font-bold px-3">{PHONE_NUMBER}</span>
             </div>
             <span className="font-bold">OR</span>
            <button className="bg-secondary text-dark font-bold py-3 px-8 rounded hover:bg-yellow-500 transition w-full sm:w-auto shadow-lg">
                Get Online Quote
            </button>
          </div>
        </div>
        
        <div className="mt-12 text-center">
             <Link to="/locations" className="text-gray-500 hover:text-primary text-sm font-medium">View All Service Locations</Link>
        </div>
      </div>
    </Layout>
  );
};

export default LocationPage;