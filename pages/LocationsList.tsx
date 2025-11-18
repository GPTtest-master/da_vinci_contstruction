import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { LOCATIONS } from '../constants';
import { MapPin } from 'lucide-react';

const LocationsList: React.FC = () => {
  return (
    <Layout>
      <SEO 
        title="Service Areas | Seattle Refinishing Pros" 
        description="View all areas we serve in the Greater Seattle area for bathtub refinishing, tile reglazing, and countertop resurfacing."
      />

      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4 text-dark">Our Service Areas</h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            We are based in Seattle but our mobile crews service the entire Puget Sound region. Find your city below.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOCATIONS.map((loc) => (
              <Link key={loc.id} to={`/locations/${loc.slug}`} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition border border-gray-100 flex items-start gap-4 group">
                <div className="bg-blue-50 p-3 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-dark mb-1 group-hover:text-primary transition">{loc.city}</h3>
                  <p className="text-sm text-gray-500">{loc.description}</p>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <p className="text-gray-500">Don't see your city? Give us a call, we likely travel to you!</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LocationsList;