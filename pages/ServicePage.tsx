import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { SERVICES, PHONE_NUMBER, LOCATIONS } from '../constants';
import { CheckCircle, HelpCircle, ArrowRight, Phone, ShieldCheck, Layers, Sparkles, Wrench, FlaskConical, SprayCan, Eye } from 'lucide-react';

const ServicePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.title,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Seattle Refinishing Pros",
      "telephone": PHONE_NUMBER,
      "priceRange": "$$"
    },
    "areaServed": {
      "@type": "City",
      "name": "Seattle"
    },
    "description": service.fullDescription
  };

  // Helper to get the noun for the surface based on slug for dynamic text generation
  const getTargetSurface = (slug: string) => {
    if (slug.includes('bathtub')) return 'bathtub';
    if (slug.includes('tile')) return 'tile surface';
    if (slug.includes('countertop')) return 'countertop';
    if (slug.includes('sink')) return 'sink';
    if (slug.includes('shower')) return 'shower enclosure';
    return 'fixture';
  };

  const target = getTargetSurface(service.slug);

  // Step-by-step process data
  const processSteps = [
    {
      title: "Surface Cleaning & Prep",
      description: `We rigorously clean the ${target} to remove soap scum, mineral deposits, and oils using industrial-grade cleaners. This ensures a contaminant-free base.`,
      icon: <Sparkles className="text-white" size={20} />,
      alt: `Cleaning ${target} surface before refinishing`
    },
    {
      title: "Repairs and Masking",
      description: `We repair chips, cracks, and rust spots on the ${target} with waterproof fillers. We also mask off the surrounding walls and floor to protect your home.`,
      icon: <Wrench className="text-white" size={20} />,
      alt: `Repairing chips and masking ${target} area`
    },
    {
      title: "Etching & Bonding Agent",
      description: `A chemical etching solution is applied to roughen the surface, followed by our proprietary silane bonding agent to permanently fuse the new coating to the ${target}.`,
      icon: <FlaskConical className="text-white" size={20} />,
      alt: `Applying bonding agent to ${target} for adhesion`
    },
    {
      title: "Multiple Primer Layers",
      description: `We spray high-performance epoxy primer layers. This aerospace-grade barrier seals repairs and provides the ultimate foundation for the topcoat.`,
      icon: <Layers className="text-white" size={20} />,
      alt: `Spraying primer coating layers on ${target}`
    },
    {
      title: "Topcoat Application",
      description: `Using HVLP spray equipment, we apply the aliphatic acrylic urethane topcoat. This creates a durable, high-gloss finish that looks factory-new.`,
      icon: <SprayCan className="text-white" size={20} />,
      alt: `Applying final glossy topcoat to ${target}`
    },
    {
      title: "Final Cure & Inspection",
      description: `After the coating is applied, we remove masking materials and perform a detailed quality check. We re-caulk seams to ensure the ${target} is ready for use.`,
      icon: <Eye className="text-white" size={20} />,
      alt: `Final inspection of refinished ${target}`
    }
  ];

  return (
    <Layout>
      <SEO 
        title={`Professional ${service.title} in Seattle, WA | Top Rated`} 
        description={`Expert ${service.title.toLowerCase()} in Seattle. ${service.shortDescription} Save 75% vs replacement. 5-Year Warranty. Call ${PHONE_NUMBER} for a free quote!`}
        schema={schema}
      />

      {/* Hero Section - Optimized H1 for SEO */}
      <div className="bg-primary text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 text-sm text-blue-200 mb-4 uppercase tracking-wider font-semibold">
             <Link to="/" className="hover:text-white">Home</Link> / <span className="text-white">{service.title}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Professional {service.title} <br/><span className="text-secondary">in Seattle, WA</span>
          </h1>
          <p className="text-xl max-w-3xl text-blue-100 mb-8">
            Don't replace your worn-out fixtures. We restore {service.title.toLowerCase().replace('refinishing', '')} surfaces to factory-new condition in just one day.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="bg-secondary hover:bg-yellow-500 text-dark font-bold px-6 py-3 rounded shadow-md transition">
              Get a Free Quote
            </a>
            <div className="flex items-center gap-2 text-white font-semibold">
               <ShieldCheck className="text-secondary"/> 5-Year Warranty
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          
          {/* Main Content Column */}
          <div className="md:col-span-2">
            <div className="prose prose-lg max-w-none text-gray-700">
              
              {/* SEO Text Block 1: Problem & Solution */}
              <h2 className="text-3xl font-bold text-dark mb-4">Restore, Don't Replace Your {service.title.split(' ')[0]}</h2>
              <p className="mb-6">
                If you are dealing with chips, rust, discoloration, or hard-to-clean surfaces, you might think replacement is your only option. 
                However, <strong>{service.title.toLowerCase()}</strong> is a superior alternative for Seattle homeowners.
              </p>
              <p className="mb-6">
                {service.fullDescription} Using advanced adhesion technology and industrial-grade coatings, we create a durable, high-gloss finish that looks and feels like new porcelain or stone.
              </p>

              {/* Benefits Section */}
              <div className="my-10 p-8 bg-gray-50 rounded-xl border-l-4 border-secondary">
                <h3 className="text-xl font-bold text-dark mb-4">Why Choose {service.title}?</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex gap-3 items-start">
                    <CheckCircle size={20} className="text-primary mt-1 flex-shrink-0"/> 
                    <span className="text-sm font-medium">Save up to 75% over replacement costs</span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle size={20} className="text-primary mt-1 flex-shrink-0"/> 
                    <span className="text-sm font-medium">Completed in just 3-5 hours</span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle size={20} className="text-primary mt-1 flex-shrink-0"/> 
                    <span className="text-sm font-medium">Extends fixture life by 10-15 years</span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle size={20} className="text-primary mt-1 flex-shrink-0"/> 
                    <span className="text-sm font-medium">No demolition mess or plumbing costs</span>
                  </div>
                </div>
              </div>

              {/* Visual Process Block */}
              <div className="not-prose my-16 border-t border-gray-100 pt-12">
                <h2 className="text-2xl font-bold text-dark mb-2">Our Refinishing Process</h2>
                <p className="text-gray-600 mb-8">How we restore your {target} in 6 professional steps:</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {processSteps.map((step, idx) => (
                    <div key={idx} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300 flex flex-col h-full">
                      {/* Image Placeholder Area */}
                      <div className="h-40 bg-gray-200 relative overflow-hidden group">
                        <img 
                          src={`https://picsum.photos/seed/${service.id}${idx}/600/400`} 
                          alt={step.alt}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                          loading="lazy"
                        />
                        <div className="absolute top-0 left-0 bg-primary text-white font-bold px-3 py-1 rounded-br-lg z-10 text-xs uppercase tracking-wide">
                          Step {idx + 1}
                        </div>
                      </div>
                      
                      {/* Content Area */}
                      <div className="p-4 flex-grow flex flex-col">
                        <h3 className="font-bold text-base text-dark mb-2 flex items-center gap-2">
                           <div className="p-1 bg-blue-50 rounded-full text-primary">
                             {React.cloneElement(step.icon as React.ReactElement<any>, { className: "text-primary", size: 16 })}
                           </div>
                          {step.title}
                        </h3>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* FAQ Schema Block */}
              <h2 className="text-2xl font-bold text-dark mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                  <h3 className="flex gap-3 font-bold text-dark items-center text-lg"><HelpCircle size={20} className="text-primary"/> How long does {service.title} take?</h3>
                  <p className="mt-2 text-gray-600">Most projects are completed in 3-5 hours. You can typically use the fixture again within 24 to 48 hours after the coating cures.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                  <h3 className="flex gap-3 font-bold text-dark items-center text-lg"><HelpCircle size={20} className="text-primary"/> Is there a warranty?</h3>
                  <p className="mt-2 text-gray-600">Yes, we offer a comprehensive 5-year warranty against peeling, bubbling, or loss of adhesion for all residential work in Seattle.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                  <h3 className="flex gap-3 font-bold text-dark items-center text-lg"><HelpCircle size={20} className="text-primary"/> How do I clean it?</h3>
                  <p className="mt-2 text-gray-600">We recommend using non-abrasive, eco-friendly cleaners. Avoid steel wool or harsh acids to maintain the high-gloss shine for years.</p>
                </div>
              </div>

              {/* Final CTA in Content */}
              <div className="mt-12 p-6 bg-primary text-white rounded-xl text-center">
                <h3 className="text-2xl font-bold mb-2">Ready to update your bathroom?</h3>
                <p className="mb-6">Get a fast, free quote for {service.title.toLowerCase()} today.</p>
                <a href="#contact" className="inline-block bg-white text-primary font-bold py-3 px-8 rounded hover:bg-gray-100 transition">
                  Call {PHONE_NUMBER}
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar CTA & Nav */}
          <div>
            <div className="bg-white shadow-xl rounded-xl p-6 border-t-4 border-secondary sticky top-24">
              <h3 className="text-xl font-bold mb-2">Get A Free Quote</h3>
              <p className="text-sm text-gray-600 mb-6">Enter your details for a fast estimate on {service.title.toLowerCase()}.</p>
              <form className="space-y-3" id="contact">
                <input type="text" placeholder="Name" className="w-full p-3 border border-gray-300 rounded bg-gray-50 text-sm focus:border-primary outline-none" />
                <input type="text" placeholder="Phone" className="w-full p-3 border border-gray-300 rounded bg-gray-50 text-sm focus:border-primary outline-none" />
                <select className="w-full p-3 border border-gray-300 rounded bg-gray-50 text-sm focus:border-primary outline-none">
                    <option value={service.title}>{service.title}</option>
                    <option value="Other">Other Service</option>
                </select>
                <button className="w-full bg-secondary hover:bg-yellow-500 text-dark font-bold py-3 rounded transition">Request Quote</button>
              </form>
              <div className="mt-4 text-center">
                 <a href={`tel:${PHONE_NUMBER}`} className="flex items-center justify-center gap-2 text-primary font-bold hover:underline">
                    <Phone size={18} /> {PHONE_NUMBER}
                 </a>
              </div>

              <div className="mt-8 pt-8 border-t">
                <h4 className="font-bold text-sm uppercase text-gray-400 mb-4">Other Services</h4>
                <ul className="space-y-2">
                  {SERVICES.filter(s => s.id !== service.id).map(s => (
                    <li key={s.id}>
                      <Link to={`/${s.slug}`} className="flex items-center justify-between text-gray-700 hover:text-primary transition text-sm font-medium">
                        <span>{s.title}</span>
                        <ArrowRight size={14} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-8 border-t">
                <h4 className="font-bold text-sm uppercase text-gray-400 mb-4">Serving Near You</h4>
                <div className="flex flex-wrap gap-2">
                    {LOCATIONS.slice(0, 6).map(loc => (
                        <Link key={loc.id} to={`/locations/${loc.slug}`} className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded text-gray-600">
                            {loc.city}
                        </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default ServicePage;