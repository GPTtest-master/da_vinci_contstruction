import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { PHONE_NUMBER } from '../constants';
import { Sparkles, Wrench, FlaskConical, Layers, SprayCan, CheckCircle, Clock, ShieldCheck, Palette, Footprints } from 'lucide-react';

const OurProcess: React.FC = () => {
  
  // Single source of truth for FAQ data to ensure Schema matches UI exactly
  const faqData = [
    {
      question: "How long does reglazing last?",
      answer: "When professionally applied and properly maintained, our refinishing process lasts 10-15 years. This is comparable to the lifespan of a brand-new fiberglass bathtub."
    },
    {
      question: "Is the refinishing process safe for families?",
      answer: "Yes. We use professional ventilation systems to exhaust fumes outside during the application. Once cured (typically 24 hours), the surface is non-toxic, food-safe, and safe for children and pets."
    },
    {
      question: "What surfaces can you reglaze?",
      answer: "We can successfully reglaze porcelain, cast iron, steel, fiberglass, acrylic, cultured marble, and ceramic tile. This covers bathtubs, sinks, countertops, and shower enclosures."
    }
  ];

  // Construct valid Schema.org JSON-LD
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <Layout>
      <SEO 
        title="Our Refinishing Process – Step-by-Step Bathtub & Tile Restoration in Seattle" 
        description="Learn how our 6-step reglazing process brings your surfaces back to life. Bathtub, tile, sink, and countertop refinishing done right in Seattle."
        schema={schema}
      />

      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Our Refinishing Process – <br/><span className="text-secondary">Step-by-Step</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Discover how we bring old tubs, tiles, and counters back to life with a precise, professional reglazing process used throughout Seattle and nearby areas.
          </p>
        </div>
      </section>

      {/* Main Process Steps */}
      <main className="py-20 bg-white">
        <div className="container mx-auto px-4">
          
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark mb-12 text-center">The 6-Step Restoration System</h2>
            
            <div className="space-y-12 relative before:hidden md:before:block before:absolute before:left-8 before:top-0 before:bottom-0 before:w-1 before:bg-gray-100">
              
              {/* Step 1 */}
              <article className="relative pl-0 md:pl-24 group">
                <div className="hidden md:flex absolute left-0 w-16 h-16 bg-white border-4 border-secondary rounded-full items-center justify-center font-bold text-2xl text-dark z-10 group-hover:bg-secondary group-hover:text-white transition">1</div>
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="md:hidden bg-secondary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">1</div>
                    <h3 className="text-2xl font-bold text-dark flex items-center gap-2">
                      <Sparkles className="text-primary" size={24}/> Surface Cleaning & Preparation
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    The most critical part of the <Link to="/bathtub-refinishing" className="text-primary hover:underline font-medium">bathtub refinishing process</Link> is preparation. We begin by removing all caulk and silicone. Then, we chemically clean the surface using industrial-grade cleaners to strip away years of soap scum, mineral deposits, oils, and contaminants that would prevent adhesion.
                  </p>
                </div>
              </article>

              {/* Step 2 */}
              <article className="relative pl-0 md:pl-24 group">
                <div className="hidden md:flex absolute left-0 w-16 h-16 bg-white border-4 border-secondary rounded-full items-center justify-center font-bold text-2xl text-dark z-10 group-hover:bg-secondary group-hover:text-white transition">2</div>
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="md:hidden bg-secondary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">2</div>
                    <h3 className="text-2xl font-bold text-dark flex items-center gap-2">
                      <Wrench className="text-primary" size={24}/> Repairs & Masking
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Once clean, we repair any imperfections. Deep scratches, rust spots, chips, and cracks are filled with specialized waterproof polyester filler and sanded smooth. We then extensively mask off the bathroom—covering walls, floors, and fixtures with heavy-duty plastic and tape to protect your home from overspray.
                  </p>
                </div>
              </article>

              {/* Step 3 */}
              <article className="relative pl-0 md:pl-24 group">
                <div className="hidden md:flex absolute left-0 w-16 h-16 bg-white border-4 border-secondary rounded-full items-center justify-center font-bold text-2xl text-dark z-10 group-hover:bg-secondary group-hover:text-white transition">3</div>
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="md:hidden bg-secondary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">3</div>
                    <h3 className="text-2xl font-bold text-dark flex items-center gap-2">
                      <FlaskConical className="text-primary" size={24}/> Etching & Bonding Agent
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    To ensure the new coating sticks permanently, we apply a chemical etching solution to create a porous surface profile. This is followed by a molecular bonding agent (silane), which acts as a magnet, fusing the new coating to the old surface at a chemical level. This is why our <Link to="/tile-reglazing" className="text-primary hover:underline font-medium">tile reglazing steps</Link> result in such durability.
                  </p>
                </div>
              </article>

              {/* Step 4 */}
              <article className="relative pl-0 md:pl-24 group">
                <div className="hidden md:flex absolute left-0 w-16 h-16 bg-white border-4 border-secondary rounded-full items-center justify-center font-bold text-2xl text-dark z-10 group-hover:bg-secondary group-hover:text-white transition">4</div>
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="md:hidden bg-secondary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">4</div>
                    <h3 className="text-2xl font-bold text-dark flex items-center gap-2">
                      <Layers className="text-primary" size={24}/> Multiple Primer Layers
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Unlike cheap spray-paint kits, we apply multiple coats of a high-performance epoxy primer. This aerospace-grade undercoat provides an additional layer of adhesion and creates a uniform, sealed base, ensuring the final color is rich and consistent.
                  </p>
                </div>
              </article>

              {/* Step 5 */}
              <article className="relative pl-0 md:pl-24 group">
                <div className="hidden md:flex absolute left-0 w-16 h-16 bg-white border-4 border-secondary rounded-full items-center justify-center font-bold text-2xl text-dark z-10 group-hover:bg-secondary group-hover:text-white transition">5</div>
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="md:hidden bg-secondary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">5</div>
                    <h3 className="text-2xl font-bold text-dark flex items-center gap-2">
                      <SprayCan className="text-primary" size={24}/> Topcoat Application
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Using HVLP (High Volume Low Pressure) spray equipment, we apply 3-4 coats of aliphatic acrylic urethane. This modern coating is incredibly hard, high-gloss, and resistant to UV yellowing. This is the standard for <Link to="/locations/seattle" className="text-primary hover:underline font-medium">professional refinishing in Seattle</Link>, delivering a factory-new look.
                  </p>
                </div>
              </article>

               {/* Step 6 */}
               <article className="relative pl-0 md:pl-24 group">
                <div className="hidden md:flex absolute left-0 w-16 h-16 bg-white border-4 border-secondary rounded-full items-center justify-center font-bold text-2xl text-dark z-10 group-hover:bg-secondary group-hover:text-white transition">6</div>
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="md:hidden bg-secondary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">6</div>
                    <h3 className="text-2xl font-bold text-dark flex items-center gap-2">
                      <CheckCircle className="text-primary" size={24}/> Curing, Inspection & Cleanup
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Once sprayed, we remove the masking materials and perform a final quality inspection. We re-caulk the tub or sink with high-grade mildew-resistant silicone. We leave your bathroom clean, with the new surface ready to dry.
                  </p>
                </div>
              </article>

            </div>
          </div>
        </div>
      </main>

      {/* Optional Upgrades */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-dark mb-12">Optional Upgrades</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:-translate-y-1 transition duration-300">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                <Footprints size={32} />
              </div>
              <h3 className="font-bold text-xl mb-2">Anti-Slip Treatment</h3>
              <p className="text-gray-600 text-sm">A textured additive applied to the bottom of the tub to prevent slips without using dirty rubber mats.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:-translate-y-1 transition duration-300">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                <Palette size={32} />
              </div>
              <h3 className="font-bold text-xl mb-2">Custom Colors</h3>
              <p className="text-gray-600 text-sm">Don't want standard white? We can match any Kohler or American Standard color, or simulate stone finishes.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:-translate-y-1 transition duration-300">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                <ShieldCheck size={32} />
              </div>
              <h3 className="font-bold text-xl mb-2">Commercial Grade</h3>
              <p className="text-gray-600 text-sm">Enhanced thickness options for hotels, apartments, and high-traffic rental properties.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What To Expect */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-dark text-white rounded-2xl p-8 md:p-12 shadow-2xl">
             <h2 className="text-3xl font-bold mb-8 border-b border-gray-700 pb-4">What to Expect</h2>
             <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="flex items-center gap-2 text-secondary font-bold mb-2">
                    <Clock size={20}/> Project Duration
                  </div>
                  <p className="text-gray-300">Most standard bathtub or countertop projects take <strong className="text-white">3 to 5 hours</strong> to complete from start to finish.</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-secondary font-bold mb-2">
                    <Sparkles size={20}/> Drying Time
                  </div>
                  <p className="text-gray-300">The surface becomes tack-free in minutes, but requires <strong className="text-white">24 hours</strong> to cure before light use.</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-secondary font-bold mb-2">
                    <ShieldCheck size={20}/> Care Tips
                  </div>
                  <p className="text-gray-300">Clean with mild soaps or eco-friendly cleaners. Avoid bleach, steel wool, and suction-cup mats.</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* FAQ Section (Schema Optimized) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Common Questions About The Process</h2>
          <div className="space-y-6">
            {faqData.map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold text-dark mb-2">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Restore Your Bathroom?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote on reglazing services in Seattle and nearby areas.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className="bg-secondary hover:bg-yellow-500 text-dark font-bold py-4 px-10 rounded-lg shadow-lg transition transform hover:scale-105">
              Get a Free Estimate
            </a>
            <a href={`tel:${PHONE_NUMBER}`} className="bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white font-bold py-4 px-10 rounded-lg transition">
              Call {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default OurProcess;