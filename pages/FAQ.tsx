import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { PHONE_NUMBER } from '../constants';
import { HelpCircle, Info, AlertTriangle, Shield, Clock, PenTool } from 'lucide-react';

const FAQ: React.FC = () => {
  const detailedFAQ = [
    {
      category: "Technical Process & Materials",
      icon: <PenTool className="text-secondary" size={24} />,
      questions: [
        {
          q: "What specific chemicals and bonding agents do you use?",
          a: "Our refinishing process utilizes a proprietary silane-based bonding agent which creates a molecular bond between the original surface (porcelain, fiberglass, or acrylic) and the new coating. We do not use simple acid etching alone, as that can be inconsistent. Our topcoat is an aliphatic acrylic urethane system, specifically engineered for wet environments. It is highly resistant to moisture, impact, and UV degradation, ensuring the color does not yellow over time."
        },
        {
          q: "How does the refinishing process actually work?",
          a: "The process involves several critical stages: 1) Extensive cleaning with industrial degreasers to remove soap scum, oils, and silicone residues. 2) Mechanical abrasion to create a surface profile for adhesion. 3) Repairing imperfections like chips, rust, or cracks using waterproof polyester fillers. 4) Application of the bonding agent. 5) Spraying of a primer coat followed by multiple layers of the high-gloss topcoat using HVLP (High Volume Low Pressure) spray equipment to ensure a smooth, glass-like finish."
        },
        {
          q: "Will there be dust in my bathroom?",
          a: "We take significant precautions to minimize dust. We mask off the surrounding walls, floor, and fixtures with plastic sheeting and tape. We also utilize high-velocity exhaust fans with ducting to vent fumes and overspray directly outside your home. While a small amount of surface dust is possible in any renovation, we aim to leave the area as clean as we found it."
        }
      ]
    },
    {
      category: "Durability & Maintenance",
      icon: <Shield className="text-secondary" size={24} />,
      questions: [
        {
          q: "How long does the finish actually last?",
          a: "When properly maintained, a refinished bathtub or tile surface can last between 10 to 15 years. This lifespan is comparable to the finish on a brand new fiberglass tub. The key factors affecting longevity are the use of non-abrasive cleaners and avoiding standing water caused by leaky faucets."
        },
        {
          q: "What cleaning products should I avoid?",
          a: "You must avoid abrasive cleaners (like Comet, Ajax, or scrubbing powders), steel wool, and scouring pads, as these will dull the glossy finish over time. Do not use products containing bleach or strong acids. We recommend using eco-friendly liquid cleaners, mild dish soap, or products specifically labeled as safe for acrylic or refinished surfaces. A soft sponge or microfiber cloth is all that is needed to keep the surface clean."
        },
        {
          q: "Can I use a bathmat?",
          a: "We strongly advise against using bathmats with suction cups. The suction creates a vacuum that can pull at the new coating, potentially causing delamination over time. If you require a non-slip surface, we can apply a permanent non-slip texture to the bottom of the tub during the refinishing process. Alternatively, you can use a non-suction mat that is removed after each use."
        }
      ]
    },
    {
      category: "Scheduling & Preparation",
      icon: <Clock className="text-secondary" size={24} />,
      questions: [
        {
          q: "How should I prepare for your arrival?",
          a: "Please remove all personal items from the bathroom, including shower curtains, soaps, shampoos, and countertop items. The bathtub or shower should be dry. If you have a dripping faucet, please have it repaired before our arrival, as water interferes with the curing process. We will require access to a working electrical outlet and a window or door for ventilation purposes."
        },
        {
          q: "How long until I can use the tub?",
          a: "The standard cure time for our coatings is 24 hours. We recommend waiting a full 24 hours before removing the masking tape around the drain and faucet, and 48 hours before filling the tub with water or using the shower. This ensures the coating has reached full hardness and durability."
        },
        {
          q: "Do you fix cracks in fiberglass?",
          a: "Yes, we specialize in fiberglass structural repairs. If your shower pan or tub floor feels spongy or has a visible crack, we can reinforce the area with fiberglass mesh and resin before resurfacing. This restores the structural integrity of the unit, preventing leaks and further damage to the subfloor."
        }
      ]
    },
    {
      category: "Warranty & Policies",
      icon: <AlertTriangle className="text-secondary" size={24} />,
      questions: [
        {
          q: "What does the 5-year warranty cover?",
          a: "Our 5-year residential warranty covers failure of adhesion, bubbling, peeling, or flaking of the coating that is due to workmanship or material defects. It does not cover accidental damage (such as dropping a heavy object in the tub), rust recurring from the underside of the drain, or damage caused by using abrasive cleaners or suction-cup mats. The warranty is non-transferable unless discussed prior to service."
        },
        {
          q: "Are you licensed and insured?",
          a: "Yes, Seattle Refinishing Pros is fully licensed, bonded, and insured in the State of Washington. We carry general liability insurance to protect your property during our work. Our technicians are trained in safety protocols regarding ventilation and chemical handling."
        }
      ]
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Frequently Asked Questions | Refinishing Process & Care" 
        description="Detailed information about our bathtub refinishing process, materials, curing times, warranty, and care instructions. Learn more about how we restore surfaces in Seattle."
      />

      {/* Header */}
      <div className="bg-gray-50 py-16 border-b border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-dark mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Everything you need to know about the technical process, maintenance, and longevity of our hard surface restoration services.
          </p>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          {detailedFAQ.map((section, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-3 mb-6 border-b border-gray-200 pb-2">
                {section.icon}
                <h2 className="text-2xl font-bold text-dark">{section.category}</h2>
              </div>
              <div className="grid gap-8">
                {section.questions.map((item, qIdx) => (
                  <div key={qIdx} className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition">
                    <h3 className="font-bold text-lg text-dark mb-3 flex items-start gap-2">
                      <HelpCircle className="text-primary mt-1 flex-shrink-0" size={18} />
                      {item.q}
                    </h3>
                    <p className="text-gray-600 leading-relaxed ml-7">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Box */}
        <div className="max-w-4xl mx-auto mt-16 bg-blue-50 border border-blue-100 rounded-xl p-8">
            <div className="flex items-start gap-4">
                <Info className="text-primary mt-1" size={32} />
                <div>
                    <h3 className="text-xl font-bold text-dark mb-2">Still have questions?</h3>
                    <p className="text-gray-700 mb-4">
                        Every project is unique. If you have a specific concern about a unique fixture, a custom color request, or commercial project requirements, please don't hesitate to reach out.
                    </p>
                    <a href={`tel:${PHONE_NUMBER}`} className="font-bold text-primary hover:underline">
                        Call us at {PHONE_NUMBER}
                    </a>
                </div>
            </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;
