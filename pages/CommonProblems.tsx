import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { COMMON_PROBLEMS, PHONE_NUMBER } from '../constants';
import { Layers, Droplets, AlertTriangle, Eraser, Palette, Sun, Hammer, Wrench, ArrowRight } from 'lucide-react';

const CommonProblems: React.FC = () => {
  
  const getIcon = (id: string) => {
    switch(id) {
      case 'peeling': return <Layers size={32} />;
      case 'discolored': return <Palette size={32} />;
      case 'water': return <Droplets size={32} />;
      case 'cracks': return <AlertTriangle size={32} />;
      case 'dull': return <Eraser size={32} />;
      case 'mold': return <Sun size={32} />; // Using Sun as "Clean/Bright" metaphor or biological
      case 'yellow': return <Sun size={32} />;
      case 'diy': return <Hammer size={32} />;
      default: return <Wrench size={32} />;
    }
  };

  return (
    <Layout>
      <SEO 
        title="Common Surface Problems We Fix | Bathtub & Tile Issues" 
        description="Identify common bathroom and kitchen surface problems like peeling tubs, cracked sinks, and moldy grout. We provide professional refinishing solutions in Seattle."
      />

      <div className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">Signs You Need Refinishing</h1>
            <p className="text-xl text-gray-600">
              Don't let worn-out fixtures ruin the look of your home. We solve these common bathroom and kitchen nightmares without the cost of replacement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {COMMON_PROBLEMS.map((problem) => (
              <div key={problem.id} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition border border-gray-100 flex flex-col">
                <div className="flex items-start gap-6">
                  <div className="bg-blue-50 text-primary p-4 rounded-lg flex-shrink-0">
                    {getIcon(problem.iconId)}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-dark mb-3">{problem.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {problem.description}
                    </p>
                    <Link 
                      to={`/${problem.relatedServiceSlug}`} 
                      className="inline-flex items-center text-secondary font-bold uppercase tracking-wide text-sm hover:text-yellow-600 transition"
                    >
                      {problem.ctaText} <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-dark rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
            <h2 className="text-3xl font-bold mb-4">Dealing with one of these issues?</h2>
            <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
              Our Seattle-based team can assess the damage and restore your surfaces in just one day.
            </p>
            <a 
              href={`tel:${PHONE_NUMBER}`} 
              className="inline-block bg-secondary text-dark font-bold py-4 px-8 rounded-lg hover:bg-yellow-500 transition shadow-lg"
            >
              Get a Free Assessment
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CommonProblems;