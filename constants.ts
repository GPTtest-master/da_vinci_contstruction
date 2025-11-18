import { ServiceItem, LocationItem, Testimonial, FAQItem, ProblemItem } from './types';

export const COMPANY_NAME = "Seattle Refinishing Pros";
export const PHONE_NUMBER = "(206) 555-0199";
export const EMAIL_ADDRESS = "hello@seattlerefinishing.com";

export const SERVICES: ServiceItem[] = [
  {
    id: 'bathtub',
    title: 'Bathtub Refinishing',
    slug: 'bathtub-refinishing',
    shortDescription: 'Restore your worn-out porcelain or fiberglass bathtub to factory-new condition in just one day.',
    fullDescription: 'Our professional bathtub refinishing service in Seattle restores the shine and durability of your tub without the mess of removal. We repair chips, cracks, rust spots, and worn enamel on cast iron, steel, and fiberglass tubs. This process, also known as reglazing or resurfacing, extends the life of your bathtub by 10-15 years.',
    icon: '🛁'
  },
  {
    id: 'shower',
    title: 'Shower Refinishing',
    slug: 'shower-refinishing',
    shortDescription: 'Fix cracked pans and stained tile walls. Complete shower resurfacing for a fraction of remodeling costs.',
    fullDescription: 'Don\'t replace your shower stall—refinish it! We specialize in shower reglazing for fiberglass stalls and tiled shower enclosures. We repair cracked shower pans, seal grout lines permanently, and apply a high-gloss, easy-to-clean finish that resists mold and mildew buildup.',
    icon: '🚿'
  },
  {
    id: 'tile',
    title: 'Tile Reglazing',
    slug: 'tile-reglazing',
    shortDescription: 'Seal grout lines and modernize your bathroom or kitchen tiles with a durable new coating.',
    fullDescription: 'Tile reglazing is the ultimate solution for outdated bathroom colors and moldy grout. We apply a specialized coating over your existing ceramic or porcelain tiles, sealing the grout lines forever and creating a seamless, waterproof barrier. Perfect for shower walls, tub surrounds, and vanity backsplashes.',
    icon: '🧱'
  },
  {
    id: 'countertop',
    title: 'Countertop Resurfacing',
    slug: 'countertop-resurfacing',
    shortDescription: 'Transform laminate or cultured marble into a modern stone-look surface without replacement.',
    fullDescription: 'Update your kitchen or bathroom countertops with our stone-fleck resurfacing process. We can transform old laminate, formica, or cultured marble into a modern, granite-like finish. It is heat resistant, scratch-resistant, and significantly cheaper than installing new stone.',
    icon: '🔪'
  },
  {
    id: 'sink',
    title: 'Sink Reglazing',
    slug: 'sink-reglazing',
    shortDescription: 'Repair chips and restore shine to porcelain, cast iron, and fiberglass sinks.',
    fullDescription: 'Whether it is a pedestal sink, a farmhouse kitchen sink, or a standard vanity bowl, we can repair cracks and restore the glossy finish. Sink reglazing is a quick, cost-effective way to brighten up your bathroom or kitchen fixtures.',
    icon: '🚰'
  },
  {
    id: 'local-repair',
    title: 'Local Repair',
    slug: 'local-repair',
    shortDescription: 'Targeted spot repairs for chips, cracks, and rust without resurfacing the entire fixture.',
    fullDescription: 'Our Local Repair service is designed for minor damage that does not require full resurfacing. If you have a dropped tool mark, a rust spot near the drain, or a stress crack in your fiberglass unit, we can fix just that area. We utilize advanced color-matching technology to blend the repair seamlessly with the existing surface. This process is significantly faster and cheaper than a full reglaze. Ideally suited for apartments, hotels, and homeowners looking to fix specific cosmetic issues without remodeling.',
    icon: '🔧'
  }
];

export const LOCATIONS: LocationItem[] = [
  { id: 'seattle', city: 'Seattle', slug: 'seattle', description: 'Serving all neighborhoods including Ballard, Queen Anne, West Seattle, and Capitol Hill.' },
  { id: 'bellevue', city: 'Bellevue', slug: 'bellevue', description: 'Expert refinishing services for homes and condos in Downtown Bellevue, Medina, and Somerset.' },
  { id: 'kirkland', city: 'Kirkland', slug: 'kirkland', description: 'Providing top-tier resurfacing solutions to the Kirkland waterfront and Totem Lake communities.' },
  { id: 'renton', city: 'Renton', slug: 'renton', description: 'Affordable bathtub and tile restoration for Renton Highlands and downtown homeowners.' },
  { id: 'everett', city: 'Everett', slug: 'everett', description: 'Professional reglazing services extending North to Everett and Snohomish County.' },
  { id: 'redmond', city: 'Redmond', slug: 'redmond', description: 'High-quality kitchen and bath updates for Redmond and Overlake residents.' },
  { id: 'lynnwood', city: 'Lynnwood', slug: 'lynnwood', description: 'Fast and reliable resurfacing services for Lynnwood and Alderwood areas.' },
  { id: 'issaquah', city: 'Issaquah', slug: 'issaquah', description: 'Serving the Issaquah Highlands and surrounding Eastside communities.' },
  // New Locations Added Below
  { id: 'shoreline', city: 'Shoreline', slug: 'shoreline', description: 'Affordable bathtub and tile refinishing services for homeowners across Shoreline and nearby areas.' },
  { id: 'bothell', city: 'Bothell', slug: 'bothell', description: 'Expert countertop resurfacing and tub reglazing for Bothell and Canyon Park residents.' },
  { id: 'woodinville', city: 'Woodinville', slug: 'woodinville', description: 'High-quality tile reglazing and bathroom restoration serving Woodinville wine country homes.' },
  { id: 'kenmore', city: 'Kenmore', slug: 'kenmore', description: 'Reliable bathtub resurfacing solutions for Kenmore, keeping fixtures out of the landfill.' },
  { id: 'burien', city: 'Burien', slug: 'burien', description: 'Fast and professional sink and shower refinishing services in Burien and Seahurst.' },
  { id: 'tukwila', city: 'Tukwila', slug: 'tukwila', description: 'Commercial and residential surface restoration experts serving the Tukwila area.' },
  { id: 'des-moines', city: 'Des Moines', slug: 'des-moines', description: 'Restore your ocean-view home with premium bathtub refinishing in Des Moines, WA.' },
  { id: 'maple-valley', city: 'Maple Valley', slug: 'maple-valley', description: 'Durable kitchen countertop resurfacing and bathroom updates for Maple Valley families.' },
  { id: 'sammamish', city: 'Sammamish', slug: 'sammamish', description: 'Luxury finish upgrades for bathtubs and tiles in Sammamish and the plateau.' },
  { id: 'federal-way', city: 'Federal Way', slug: 'federal-way', description: 'Complete bathroom surface restoration and repairs for Federal Way homeowners.' },
];

export const REVIEWS: Testimonial[] = [
  { id: 1, name: "Sarah Jenkins", location: "Seattle, WA", text: "Saved me thousands on a bathroom remodel. The cast iron tub looks absolutely brand new!", rating: 5 },
  { id: 2, name: "Mike Ross", location: "Bellevue, WA", text: "Professional, on time, and clean. The countertop resurfacing completely changed our kitchen look.", rating: 5 },
  { id: 3, name: "Emily Chen", location: "Kirkland, WA", text: "I was skeptical about painting tile, but the reglazing process is amazing. Grout lines are sealed and it looks modern.", rating: 5 },
  { id: 4, name: "David P.", location: "Renton, WA", text: "They repaired a crack in my fiberglass shower pan that I thought was unfixable. Highly recommend.", rating: 5 },
];

export const GENERAL_FAQ: FAQItem[] = [
  { question: "How long does bathtub refinishing take?", answer: "Most projects, like a standard bathtub refinishing, are completed in 3-5 hours. You can use the surface again in 24-48 hours." },
  { question: "How long will the new finish last?", answer: "With proper care, our professional refinishing lasts 10-15 years. We offer a written 5-year warranty on all residential work." },
  { question: "Is there a strong odor during the process?", answer: "We use an industrial ventilation system to exhaust fumes outside your home during the process. Any lingering smell typically dissipates within a few hours." },
  { question: "Is refinishing cheaper than replacement?", answer: "Yes, refinishing typically costs 70-80% less than the total cost of tearing out, disposing, and replacing a fixture, not to mention the plumbing costs." },
  { question: "Can you repair chips and cracks?", answer: "Absolutely. We repair chips, cracks, rust, and other surface damage before applying the new coating. The repairs become invisible under the new finish." },
];

export const COMMON_PROBLEMS: ProblemItem[] = [
  {
    id: 'peeling-coating',
    title: 'Peeling or Flaking Bathtub Coating',
    description: 'If your tub has started peeling, flaking, or chipping, it is a clear sign that the previous coating has worn off or wasn\'t applied correctly. Our bathtub reglazing services in Seattle restore a smooth, durable surface that lasts.',
    relatedServiceSlug: 'bathtub-refinishing',
    ctaText: 'Fix Peeling Tubs',
    iconId: 'peeling'
  },
  {
    id: 'discolored-tiles',
    title: 'Discolored or Stained Tiles',
    description: 'Years of use can lead to tile discoloration and grime build-up that is impossible to clean. We offer tile refinishing in Seattle that makes old tile look brand new — without replacement.',
    relatedServiceSlug: 'tile-reglazing',
    ctaText: 'Restore Your Tile',
    iconId: 'discolored'
  },
  {
    id: 'water-drainage',
    title: 'Water Pooling or Improper Drainage',
    description: 'Water collecting in low spots is not only annoying but can lead to serious mold issues. We fix uneven surfaces and restore proper slope through resurfacing, preventing long-term damage.',
    relatedServiceSlug: 'shower-refinishing',
    ctaText: 'Fix Shower Floors',
    iconId: 'water'
  },
  {
    id: 'surface-damage',
    title: 'Cracks and Surface Damage',
    description: 'Small cracks, chips, or hairline fractures are more than cosmetic — they can worsen over time. Our sink and tub refinishing services fill and smooth damage for a like-new finish.',
    relatedServiceSlug: 'local-repair',
    ctaText: 'Repair Cracks Now',
    iconId: 'cracks'
  },
  {
    id: 'dull-surfaces',
    title: 'Dull, Worn, or Outdated Surfaces',
    description: 'Old countertops and tubs often just look tired and matte. Refinishing offers a cost-effective solution for updating the look to a modern high-gloss or stone finish without full replacement.',
    relatedServiceSlug: 'countertop-resurfacing',
    ctaText: 'Modernize Surfaces',
    iconId: 'dull'
  },
  {
    id: 'grout-mold',
    title: 'Grout Mold & Mildew Problems',
    description: 'Tile grout is porous and can harbor mold and stains forever. Reglazing tile seals porous surfaces completely, making cleaning easier and reducing health risks.',
    relatedServiceSlug: 'tile-reglazing',
    ctaText: 'Seal Old Grout',
    iconId: 'mold'
  },
  {
    id: 'yellowing-finish',
    title: 'Paint or Coating Yellowing Over Time',
    description: 'Older finishes often yellow due to UV exposure and chemicals. We use modern aliphatic acrylic coatings that resist yellowing and stay bright white for years.',
    relatedServiceSlug: 'bathtub-refinishing',
    ctaText: 'Whiten Your Tub',
    iconId: 'yellow'
  },
  {
    id: 'failed-diy',
    title: 'Previous DIY or Bad Refinishing Jobs',
    description: 'Did a past reglazing job start peeling in a year? Our professional resurfacing in Seattle corrects failed coatings with proper stripping, prep, and industry-grade materials.',
    relatedServiceSlug: 'bathtub-refinishing',
    ctaText: 'Correct Bad Jobs',
    iconId: 'diy'
  }
];