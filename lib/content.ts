/** Exact content & assets sourced from https://www.heliumsolar.in/ — do not invent copy. */

const ORIGIN = "https://www.heliumsolar.in";

export function media(path: string): string {
  if (path.startsWith("http")) return path;
  return `${ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;
}

export const SITE = {
  name: "Helium Solar",
  url: ORIGIN,
  email: "sales@heliumsolar.in",
  emailHref: "mailto:sales@heliumsolar.in",
  phone: "+91 9194700477",
  phoneHref: "tel:+919194700477",
  hours: "Mon - Sat: 09:00 AM - 06:30 PM",
  address: "Helium Tower, Plot No 16, Amritpuram, New Azad Nagar, Kanpur, UP",
  copyright: "©2026 Helium Solar",
  social: {
    facebook: "https://www.facebook.com/heliumrenewablesenergy",
    instagram: "https://www.instagram.com/helium_solar/",
    linkedin: "https://in.linkedin.com/company/heliumsolar",
    youtube: "https://youtube.com/@heliumsolarsolution?si=vf8VKG0i-e_LJUtn",
  },
  video: "https://www.youtube.com/watch?v=zzcW_CZCoB4",
} as const;

export const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: pageUrl("/About") },
  { label: "Services", href: pageUrl("/Service") },
  { label: "Products", href: pageUrl("/Product") },
  { label: "Projects", href: pageUrl("/Project") },
  { label: "Our Blog", href: pageUrl("/Updates") },
  { label: "Franchise", href: pageUrl("/Franchise") },
] as const;

export const NAV_REGIONAL = [
  { label: "Solar In Agra", href: pageUrl("/Solar-In-Agra") },
  { label: "Solar In Bareilly", href: pageUrl("/Solar-In-Bareilly") },
  { label: "Solar In Gurugram", href: pageUrl("/Solar-In-Gurugram") },
  { label: "Solar In Kannauj", href: pageUrl("/Solar-In-Kannauj") },
  { label: "Solar In Lucknow", href: pageUrl("/Solar-In-Lucknow") },
  { label: "Solar In Noida", href: pageUrl("/Solar-In-Noida") },
] as const;

export const FOOTER_LINKS = {
  residential: { label: "RESIDENTIAL", href: pageUrl("/Residential") },
  industrial: { label: "INDUSTRIAL", href: pageUrl("/Industrial") },
  services: { label: "SERVICES", href: pageUrl("/Service") },
  product: { label: "PRODUCT", href: pageUrl("/Product") },
  customer: [
    { label: "Customer Service", href: pageUrl("/Contact") },
    { label: "Installation Process", href: pageUrl("/Service") },
    { label: "Maintenance Plans", href: pageUrl("/Service") },
    { label: "Contact Us", href: pageUrl("/Contact") },
  ],
  legal: [
    { label: "Terms & Conditions", href: pageUrl("/PrivacyPolicy.pdf") },
    { label: "Privacy Policy", href: pageUrl("/PrivacyPolicy.pdf") },
  ],
  careers: { label: "Solar Careers", href: pageUrl("/Career") },
  enquire: { label: "For Enquiry", href: pageUrl("/Enquire") },
} as const;

export const ASSETS = {
  logo: media("/UploadDoc/company/20251203025137_0.png"),
  logoWhite: media("/Content/assets/My-image/logo-white.png"),
  favicon: media("/Content/assets/My-image/favicon.png"),
  check: media("/Content/assets/My-image/check3.svg"),
  heroSlides: [
    media("/UploadDoc/slider/20260618102251_0.jpeg"),
    media("/UploadDoc/slider/20260618102746_0.jpeg"),
  ],
  usp: media("/Content/Website-Image-new/Home Page/helium solar usp.jpeg"),
  installation: media(
    "/Content/Website-Image-new/Home Page/Solar Installation.jpg",
  ),
  loan: {
    app: media("/Content/assets/My-image/loanapp.jpg"),
    form: media("/Content/assets/My-image/loanform.jpg"),
    img2: media("/Content/assets/My-image/loanimg2.jpg"),
  },
  gallery: [
    media("/Content/assets/My-image/img4.jpg"),
    media("/Content/assets/My-image/img1.jpg"),
    media("/Content/assets/My-image/img2.jpg"),
  ],
} as const;

export const PARTNERS = [
  media("/UploadDoc/partner/20251129043314_0.png"),
  media("/UploadDoc/partner/20251018170448_0.png"),
  media("/UploadDoc/partner/20251018170421_0.png"),
  media("/UploadDoc/partner/20251018170355_0.png"),
  media("/UploadDoc/partner/20251018170332_0.png"),
  media("/UploadDoc/partner/20251018165142_0.png"),
  media("/UploadDoc/partner/20251018165345_0.png"),
  media("/UploadDoc/partner/20251018165459_0.png"),
  media("/UploadDoc/partner/20251018165913_0.jpeg"),
  media("/UploadDoc/partner/20251128224248_0.png"),
  media("/UploadDoc/partner/20251018170148_0.png"),
] as const;

export const HERO = {
  slides: [
    {
      title: "India's Trusted Solar EPC Company Since 2012",
      body: "Delivering high-performance rooftop solar systems, commercial solar installations, and industrial solar power solutions across India since 2012.",
      image: ASSETS.heroSlides[0],
    },
    {
      title: "Your Trusted Solar Energy Partner",
      body: "Delivering high-performance solar solutions for homes, businesses, and industries since 2012.",
      image: ASSETS.heroSlides[1],
    },
  ],
  ctaPrimary: {
    label: "Get Your Free Solar Site Survey",
    href: pageUrl("/Enquire"),
  },
  ctaSecondary: { label: "Get Free Quote", href: pageUrl("/Enquire") },
  ctaVideo: { label: "Play Video", href: SITE.video },
} as const;

export const SOLUTIONS = {
  eyebrow: "WHAT WE OFFER",
  title: "Customized Solar Solutions for Every Energy Need",
  items: [
    {
      title: "Residential Solar",
      description:
        "Residential Solar Solutions for Homes, Villas & Housing Societies",
      image: media(
        "/Content/Website-Image-new/Home Page/Residential Solar Solutions.jpg",
      ),
      href: pageUrl("/Residential"),
    },
    {
      title: "Commercial Solar",
      description:
        "Commercial Solar Solutions for Hospitals, Colleges, Hotels & Corporate Buildings",
      image: media(
        "/Content/Website-Image-new/Home Page/Commercial Solar Solutions.jpg",
      ),
      href: pageUrl("/ProductDetails"),
    },
    {
      title: "Industrial Solar",
      description:
        "Industrial Solar Solutions for Manufacturing, Food Processing & More",
      image: media(
        "/Content/Website-Image-new/Home Page/Industrial Solar Solutions.jpg",
      ),
      href: pageUrl("/Industrial"),
    },
    {
      title: "Solar Machinery",
      description: "Solar Aata Chakki, Solar Pumps & Oil Expeller Solutions",
      image: media(
        "/Content/Website-Image-new/Home Page/Solar Atta Chakki.jpg",
      ),
      href: pageUrl("/Product"),
    },
    {
      title: "Solar Kits",
      description:
        "Complete Solar Kits from 1KW to 10KW for Homes & Businesses",
      image: media("/Content/Website-Image-new/Home Page/Solar Kits.jpg"),
      href: pageUrl("/ProductDetails#SolarKit"),
    },
    {
      title: "Solar O&M",
      description: "O&M Asset Management of Solar Plant",
      image: media(
        "/Content/Website-Image-new/Home Page/Solar O&M Asset Management.jpg",
      ),
      href: pageUrl("/Service"),
    },
  ],
} as const;

export const WHY_CHOOSE = {
  eyebrow: "WHY CHOOSE US",
  title: "Why Helium Solar is Your Best Choice for Solar Energy",
  body: "At Helium Solar, we provide end-to-end Solar Installation Services focused on efficiency, savings, and long-term performance. Whether you are a homeowner, business owner, or industrial unit, our customized solar power solutions are designed to meet your specific energy requirements. As a trusted Solar EPC Company in India, Helium Solar delivers reliable solutions, including site surveys, system design, installation, and long-term maintenance. From Rooftop Solar Installation to commercial and industrial projects, we ensure smooth execution, premium-grade components, and dependable performance for every solar energy system.",
  cta: { label: "Know More", href: pageUrl("/About") },
  benefits: [
    {
      title: "Impressive Return on Investment (ROI)",
      body: "Efficient solar power solutions for maximum savings.",
      href: pageUrl("/About"),
    },
    {
      title: "Significant Cost Reductions",
      body: "Reduce electricity bills with efficient solar energy.",
      href: pageUrl("/About"),
    },
    {
      title: "Government Benefits",
      body: "Leverage subsidies, incentives, and solar policies.",
      href: pageUrl("/About"),
    },
    {
      title: "Energy Stability",
      body: "Ensure uninterrupted and reliable solar power.",
      href: pageUrl("/About"),
    },
    {
      title: "Low Maintenance",
      body: "Enjoy low-maintenance solar systems with easy upkeep.",
      href: pageUrl("/About"),
    },
    {
      title: "Enhanced Brand Reputation",
      body: "Showcase your commitment to renewable and green energy.",
      href: pageUrl("/About"),
    },
    {
      title: "Environmental Impact",
      body: "Reduce carbon footprint and support clean energy goals.",
      href: pageUrl("/About"),
    },
  ],
} as const;

export const USP = {
  eyebrow: "Our USP",
  title: "Helium Solar - Your Trusted Partner for Complete Solar Solutions",
  image: ASSETS.usp,
  items: [
    {
      title:
        "Your One-Stop Destination for Solar Solutions in Kanpur & Across India.",
      body: "From consultation and system planning to installation and maintenance, we provide end-to-end solar services for homes, commercial spaces, and industrial units.",
      href: pageUrl("/Franchise"),
    },
    {
      title: "Affordable Solar Financing Solutions",
      body: "Our flexible financing options make Solar Energy for Homes and businesses more accessible without compromising on product quality or long-term performance.",
      href: pageUrl("/Franchise"),
    },
    {
      title: "Customized Solar Design for Maximum Efficiency",
      body: "Our experienced team combines technical expertise and innovation to deliver high-performance solutions for residential, commercial, and industrial requirements.",
      href: pageUrl("/Franchise"),
    },
    {
      title: "Reliable Performance with Long-Term Expert Support",
      body: "Our dedicated team ensures consistent performance through professional maintenance services and dependable support for every solar power project.",
      href: pageUrl("/Franchise"),
    },
  ],
} as const;

export const PROCESS = {
  eyebrow: "READY TO GO SOLAR ?",
  title: "Start Saving Today with Helium Solar",
  body: "Getting a solar power system for your home, commercial establishment, or industrial facility is now easier and more affordable than ever. At Helium Solar, we simplify your transition to solar energy with a hassle-free process designed for maximum energy savings and long-term efficiency.",
  image: ASSETS.installation,
  steps: [
    {
      number: "01",
      title: "Connect With Our Experts",
      href: pageUrl("/Enquire"),
    },
    {
      number: "02",
      title: "Free Solar Site Assessment",
      href: pageUrl("/Enquire"),
    },
    {
      number: "03",
      title: "Customized Solar Design & System Planning",
      href: pageUrl("/Enquire"),
    },
    {
      number: "04",
      title: "Documentation & Project Approval",
      href: pageUrl("/Enquire"),
    },
    {
      number: "05",
      title: "Fast Solar Installation",
      href: pageUrl("/Enquire"),
    },
  ],
} as const;

export const FINANCING = {
  eyebrow: "EASY SOLAR FINANCING",
  title: "Helium Collateral-Free Solar Loan",
  body: "Go solar without financial stress. Get access to clean, renewable energy with our easy, collateral-free financing options.",
  cta: { label: "Apply Now", href: pageUrl("/Enquire") },
  image: ASSETS.loan.img2,
  steps: [
    {
      title: "Submit Loan form",
      body: "“Fill out a simple form with your details to start your solar journey.”",
      cta: { label: "Step 1", href: pageUrl("/Enquire") },
      image: ASSETS.loan.form,
    },
    {
      title: "Credit Assessment & Site visit",
      body: "“We evaluate your eligibility and conduct a site visit to plan your solar setup.”",
      cta: { label: "Step 2", href: pageUrl("/Enquire") },
      image: ASSETS.loan.app,
    },
    {
      title: "Loan Approved",
      body: "“Get quick approval and start enjoying clean, renewable energy at your home or business.”",
      cta: { label: "Step 3", href: pageUrl("/Enquire") },
      image: ASSETS.loan.img2,
    },
  ],
} as const;

export const TESTIMONIALS = {
  eyebrow: "TESTIMONIALS",
  title: "Our Customers Speak For Us",
  items: [
    {
      name: "Deepak Agarwal",
      role: "Shiv Krishna Polytex, Managing Director",
      quote:
        "Choosing Helium Solar for our industrial solar project was definitely the right decision. Their commitment, technical knowledge, and after-sales support have been excellent. The plant is running smoothly and delivering exactly the savings we were promised.",
      image: media("/UploadDoc/Testimonial/20260622080134_0.png"),
    },
    {
      name: "Amit Deshmukh",
      role: "Cold Storage Owner – Nagpur, India",
      quote:
        "Before installing solar, our factory electricity bills were very high every month. After connecting with Helium Solar, the entire process became very easy for us. Their team guided us properly from design to installation, and now we are getting excellent savings. The plant performance has been very good.",
      image: media("/UploadDoc/Testimonial/20260622080029_0.png"),
    },
    {
      name: "Atul Singh",
      role: "Small Business Owner – Lucknow, India",
      quote:
        "What I liked most was their professional approach and support throughout the project. The installation work was completed smoothly without affecting our factory operations. We are happy with the quality and overall service provided by Helium Solar.",
      image: media("/UploadDoc/Testimonial/20260622075930_0.png"),
    },
    {
      name: "Balvir Singh",
      role: "Environmental Advocate – Delhi, India",
      quote:
        "Helium Solar’s team was very responsive whenever we had questions. They handled the project professionally and kept everything transparent from start to finish. The solar plant is performing efficiently and helping us save a good amount every month.",
      image: media("/UploadDoc/Testimonial/20260622075820_0.png"),
    },
  ],
} as const;

export const PROJECTS = {
  title:
    "Helium Solar — proven installations from rooftop homes to MW solar farms powering India.",
  href: pageUrl("/Project"),
  items: [
    {
      title: "1 MW DC Solar Plant, Kanpur Plastipack Limited (KPL)",
      image: media("/UploadDoc/product/20261008083416_0.jpeg"),
    },
    {
      title: "200kWp Solar Plant, Shri Baleshwar ji International Pvt.Ltd.",
      image: media("/UploadDoc/product/20260429021428_0.png"),
    },
    {
      title:
        "250 KWp rooftop solar power plant, Rajeshwari Foods & Spices Pvt. Ltd. (Waah India)",
      image: media("/UploadDoc/product/20260429020905_0.png"),
    },
    {
      title: "200kWp Solar Plant, Vikash sortex industries",
      image: media("/UploadDoc/product/20260414224950_0.png"),
    },
    {
      title: "150MW solar plant, NTPC",
      image: media("/UploadDoc/product/20251219025947_0.jpg"),
    },
    {
      title: "6MW Solar Plant, JSW",
      image: media("/UploadDoc/product/20251219025645_0.jpeg"),
    },
    {
      title: "100MW Solar Plant, NTPC",
      image: media("/UploadDoc/product/20251219025516_0.jpeg"),
    },
    {
      title: "56MW Solar plant, NTPC",
      image: media("/UploadDoc/product/20251219020643_0.jpeg"),
    },
    {
      title: "155kWp Solar Plant, Siliguri Bardana Company",
      image: media("/UploadDoc/product/20251219015739_0.jpeg"),
    },
    {
      title: "150kWp Solar Plant, Gitanjali Cold Store",
      image: media("/UploadDoc/product/20251219015531_0.jpeg"),
    },
    {
      title: "500kWp Solar Plant Narayan & Sons Rice Mill",
      image: media("/UploadDoc/product/20251219014928_0.jpeg"),
    },
    {
      title: "800kWp Solar Plant, JSW Steel",
      image: media("/UploadDoc/product/20251219014223_0.jpeg"),
    },
    {
      title: "600kWp Solar Plant, Blue Dart Express Limited,",
      image: media("/UploadDoc/product/20251219013654_0.jpeg"),
    },
    {
      title: "200kWp solar Plant, Modern Snacks Pvt. Ltd.",
      image: media("/UploadDoc/product/20251212222156_0.jpeg"),
    },
    {
      title: "200kWp solar project, Bajrangbali Snacks Pvt.Ltd",
      image: media("/UploadDoc/product/20251207020648_0.jpeg"),
    },
    {
      title: "200kWp Solar Plant, Bajaj Plasto",
      image: media("/UploadDoc/product/20251211210410_0.jpeg"),
    },
    {
      title: "485kWp Solar Plant, Jhunjhunwala polyplast Pvt.Ltd.",
      image: media("/UploadDoc/product/20251211211307_0.jpeg"),
    },
    {
      title: "200kWp Solar Power G.D. Cold Storage",
      image: media("/UploadDoc/product/20251207023653_0.jpeg"),
    },
    {
      title: "624kWp Solar Power ANMOL INDUSTRIES LIMITED",
      image: media("/UploadDoc/product/20251207234558_0.jpeg"),
    },
    {
      title: "500kWp Solar Plant Ganga Devi Roller Flour Mill",
      image: media("/UploadDoc/product/20251129012016_0.png"),
    },
    {
      title: "400kWp Solar Plant Metal Cans And Closures Pvt.Ltd.",
      image: media("/UploadDoc/product/20251129010334_0.png"),
    },
    {
      title: "400kWp Solar Plant,Tube Investments of India Limited",
      image: media("/UploadDoc/product/20251207021244_0.jpeg"),
    },
    {
      title: "5MW Solar Plant",
      image: media("/UploadDoc/product/20251207020910_0.jpeg"),
    },
    {
      title: "540kWp Solar Plant",
      image: media("/UploadDoc/product/20251207021414_0.jpeg"),
    },
    {
      title: "485kWp Solar Plant MODI PROTECTARP Pvt.Ltd.",
      image: media("/UploadDoc/product/20251212221546_0.jpeg"),
    },
  ],
} as const;

export const INSIGHTS = {
  title: "Insights on Solar Energy and Sustainable Living",
  viewAll: { label: "View All Blog", href: pageUrl("/Updates") },
  items: [
    {
      title:
        "1 MW Solar Project in Kanpur: Helium Solar Commissions Kanpur Plastipack Plant",
      excerpt:
        "Helium Solar has successfully commissioned a 1 MW DC industrial rooftop solar project at Kanpur Plastipack Limited in Rania, Kanpur Dehat. Explore this project milestone and key considerations for factory owners planning industrial solar in Uttar Pradesh.",
      date: "Oct 09 2026",
      author: "Admin",
      image: media("/UploadDoc/Blog/20261009081008_0.jpeg"),
      href: pageUrl(
        "/UpdatesDetails/168/1-mw-solar-project-in-kanpur-helium-solar-commissions-kanpur-plastipack-plant",
      ),
    },
    {
      title:
        "Solar Panels Installed but Electricity Bill Still High? 7 Reasons & Solutions in India (2026)",
      excerpt:
        "Installed rooftop solar but still receiving a high electricity bill? Discover seven common reasons, from low solar generation to missing net metering credits, and practical solutions for Indian homes with Helium Solar.",
      date: "Oct 08 2026",
      author: "Admin",
      image: media("/UploadDoc/Blog/20261008122429_0.jpeg"),
      href: pageUrl(
        "/UpdatesDetails/167/solar-panels-installed-but-electricity-bill-still-high-7-reasons-solutions-in-india-2026",
      ),
    },
    {
      title:
        "3 kW Solar System Price in Uttar Pradesh 2026: Subsidy & Savings",
      excerpt:
        "Planning rooftop solar for your home in Uttar Pradesh? Explore 3 kW solar system costs, eligible subsidy support of up to ₹1.08 lakh, electricity savings and installation requirements with Helium Solar—your solar partner since 2012.",
      date: "Oct 07 2026",
      author: "Admin",
      image: media("/UploadDoc/Blog/20261007061828_0.jpeg"),
      href: pageUrl(
        "/UpdatesDetails/166/3-kw-solar-system-price-in-uttar-pradesh-2026-subsidy-savings",
      ),
    },
  ],
} as const;

export const CONTACT = {
  title: "Contact Us",
  address: SITE.address,
  phone: SITE.phone,
  email: SITE.email,
  cta: { label: "For Enquiry", href: pageUrl("/Enquire") },
  survey: {
    label: "Get Your Free Solar Site Survey",
    href: pageUrl("/Enquire"),
  },
} as const;
