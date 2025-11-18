import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { SERVICES, COMPANY_NAME, PHONE_NUMBER } from '../constants';
import { ShieldCheck, Target, Phone, MapPin } from 'lucide-react';

const AboutUs: React.FC = () => {
  const TEAM_MEMBERS = [
    {
      name: "James Wilson",
      role: "Founder & Lead Technician",
      img: "1005",
      bio: "With over 15 years of hands-on experience in the refinishing industry, James started Seattle Refinishing Pros to offer homeowners a high-quality, honest alternative to replacement. He specializes in exact color matching and complex porcelain repairs, having restored thousands of bathtubs across the Pacific Northwest."
    },
    {
      name: "Sarah Miller",
      role: "Operations Manager",
      img: "1011",
      bio: "Sarah is the voice you'll likely hear when you call. She manages all scheduling, customer logistics, and project estimates, ensuring your renovation happens on time and without stress. She brings 8 years of home improvement management experience to the team."
    },
    {
      name: "David Chen",
      role: "Senior Refinisher",
      img: "1027",
      bio: "David is our go-to expert for fiberglass shower repairs and detailed tile work. Certified in advanced safety protocols and ventilation systems, he ensures every job is done safely and to the highest standard of durability. He has been with the company for 6 years."
    }
  ];

  return (
    <Layout>
      <SEO
        title="About Us | Seattle Refinishing Pros"
        description="Learn about Seattle Refinishing Pros, our history, our team, and our mission to provide affordable, high-quality surface restoration in Seattle."
      />

      {/* Hero Section */}
      <section className="bg-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
            <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">Our Story</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Restoring Excellence in Seattle</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We are a locally owned team of experts dedicated to saving you money and revitalizing your home.
            </p>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-dark mb-6">More Than Just Refinishing</h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                        {COMPANY_NAME} was founded on the belief that you shouldn't have to gut your bathroom to make it beautiful. 
                        For over a decade, we have been serving the Greater Seattle area, helping homeowners transform their spaces without the mess, cost, and headache of traditional remodeling.
                    </p>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Our technicians are certified experts in surface restoration. We use eco-friendly coatings and industrial-grade adhesion promoters to ensure your <Link to="/bathtub-refinishing" className="text-primary font-medium hover:underline">bathtub</Link>, <Link to="/tile-reglazing" className="text-primary font-medium hover:underline">tile</Link>, or <Link to="/countertop-resurfacing" className="text-primary font-medium hover:underline">countertop</Link> lasts for years.
                    </p>
                    
                    <div className="space-y-4 mt-8">
                        <div className="flex gap-4">
                            <div className="bg-blue-50 p-3 rounded-full h-fit text-primary"><Target size={24}/></div>
                            <div>
                                <h3 className="font-bold text-lg">Our Mission</h3>
                                <p className="text-sm text-gray-600">To provide affordable, high-quality alternatives to replacement, reducing construction waste and saving our clients money.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="bg-blue-50 p-3 rounded-full h-fit text-primary"><ShieldCheck size={24}/></div>
                            <div>
                                <h3 className="font-bold text-lg">Our Guarantee</h3>
                                <p className="text-sm text-gray-600">We stand behind every project with a comprehensive 5-year warranty. If it peels, we fix it. Simple as that.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
                     <img src="https://picsum.photos/id/314/800/1000" alt="Our Team Working" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-dark mb-12">Meet The Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {TEAM_MEMBERS.map((member, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition flex flex-col items-center">
                        <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-6 border-4 border-blue-50 relative bg-gray-200">
                            {/* Placeholder Image - Replace src with actual team photo */}
                            <img 
                                src={`https://picsum.photos/id/${member.img}/400/400`} 
                                alt={`${member.name} - ${member.role}`} 
                                className="w-full h-full object-cover" 
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-dark mb-1">{member.name}</h3>
                        <p className="text-secondary font-bold uppercase text-sm tracking-wide mb-4">{member.role}</p>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                            {member.bio}
                        </p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Ready to Restore Your Bathroom?</h2>
              <p className="text-blue-100 mb-8 text-lg">
                Our team is ready to answer your questions and provide a fast, free estimate.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                 <a href={`tel:${PHONE_NUMBER}`} className="bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition flex items-center gap-2 shadow-md">
                   <Phone size={20} /> Call {PHONE_NUMBER}
                 </a>
                 <a href="#contact" className="bg-secondary text-dark font-bold py-3 px-8 rounded-lg hover:bg-yellow-500 transition shadow-md">
                   Get a Free Quote
                 </a>
              </div>
            </div>
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-secondary opacity-10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Services Links */}
      <section className="py-16">
         <div className="container mx-auto px-4">
            <div className="bg-white border border-gray-100 shadow-lg rounded-2xl p-8 md:p-16 text-center">
                <h2 className="text-3xl font-bold mb-6 text-dark">Explore Our Services</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">We offer specialized solutions for every part of your bathroom and kitchen.</p>
                <div className="flex flex-wrap justify-center gap-4">
                    {SERVICES.map(s => (
                        <Link key={s.id} to={`/${s.slug}`} className="bg-gray-50 hover:bg-primary hover:text-white border border-gray-200 px-6 py-3 rounded-full transition font-semibold text-gray-700">
                            {s.title}
                        </Link>
                    ))}
                </div>
            </div>
         </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">Get In Touch</span>
              <h2 className="text-4xl font-bold mb-6">Contact Us Today</h2>
              <p className="text-blue-100 mb-8 text-lg">
                Have questions about our team or process? We're here to help. Reach out for a free estimate on your refinishing project.
              </p>
              <div className="space-y-4 text-lg">
                <p className="flex items-center gap-3"><Phone className="text-secondary" /> <span className="font-bold">{PHONE_NUMBER}</span></p>
                <p className="flex items-center gap-3"><MapPin className="text-secondary" /> Serving Seattle & Surrounding Areas</p>
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
    </Layout>
  );
};

export default AboutUs;