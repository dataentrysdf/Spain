// Job data generator - deterministically generates 100,000 jobs for Spain
const TOTAL_JOBS = 100000;

const jobTitles = [
  "Software Engineer", "Frontend Developer", "Backend Developer", "Full Stack Developer",
  "Data Analyst", "Data Scientist", "Machine Learning Engineer", "DevOps Engineer",
  "Cloud Architect", "Mobile Developer", "Android Developer", "iOS Developer",
  "Product Manager", "Project Manager", "Scrum Master", "Business Analyst",
  "UI/UX Designer", "Graphic Designer", "Brand Designer", "Web Designer",
  "Marketing Manager", "Digital Marketing Specialist", "SEO Specialist", "Content Writer",
  "Copywriter", "Social Media Manager", "Community Manager", "Growth Hacker",
  "Sales Manager", "Account Manager", "Business Development Manager", "Sales Executive",
  "Financial Analyst", "Accountant", "Finance Manager", "Auditor",
  "HR Manager", "HR Generalist", "Recruiter", "Talent Acquisition Specialist",
  "Operations Manager", "Supply Chain Manager", "Logistics Coordinator", "Procurement Officer",
  "Customer Success Manager", "Customer Support Specialist", "Technical Support Engineer",
  "Network Engineer", "Cybersecurity Analyst", "Information Security Officer",
  "Database Administrator", "Systems Administrator", "IT Manager", "CTO",
  "Legal Counsel", "Compliance Officer", "Risk Manager", "Contract Manager",
  "Healthcare Administrator", "Clinical Research Associate", "Pharmacist", "Nurse",
  "Teacher", "Education Consultant", "Instructional Designer", "Training Manager",
  "Civil Engineer", "Mechanical Engineer", "Electrical Engineer", "Structural Engineer",
  "Architect", "Urban Planner", "Environmental Consultant", "Safety Officer",
  "Real Estate Agent", "Property Manager", "Facilities Manager", "Construction Manager",
  "Research Analyst", "Policy Analyst", "Communications Manager", "Public Relations Officer",
  "Executive Assistant", "Administrative Officer", "Office Manager", "Receptionist",
  "Video Editor", "Motion Graphics Designer", "Content Strategist", "Brand Manager",
  "Partnerships Manager", "Customer Experience Manager", "Data Engineer", "BI Developer",
  "Scrum Master", "Agile Coach", "Release Manager", "Site Reliability Engineer",
  "Penetration Tester", "Cloud Engineer", "Platform Engineer", "API Developer",
  "Hotel Manager", "Restaurant Manager", "Chef", "Sommelier", "Event Manager",
  "Aerospace Engineer", "Pilot", "Flight Attendant", "Airport Manager",
  "Renewable Energy Engineer", "Solar Energy Specialist", "Wind Energy Technician",
  "Game Developer", "Quality Assurance Engineer", "Security Engineer"
];

// Spanish companies + global companies with Spain presence
const companies = [
  // Spanish Mega-corporations
  "Banco Santander", "BBVA", "CaixaBank", "Bankia", "Bankinter",
  "Telefónica", "Movistar", "Orange España", "Vodafone España", "MasMovil",
  "Repsol", "Cepsa", "Iberdrola", "Endesa", "Naturgy",
  "Inditex", "Zara", "Mango", "El Corte Inglés", "Carrefour España",
  "Mercadona", "Lidl España", "Aldi España", "Dia", "Consum",
  "Ferrovial", "ACS Group", "Acciona", "FCC", "Sacyr",
  "Iberia", "Aena", "Renfe", "Adif", "Navantia",
  "Abertis", "Ferrovial", "OHL", "Santander", "Mapfre",
  
  // Construction & Real Estate
  "Grupo Santander", "Metrovacesa", "Neinor Homes", "Aedas Homes", "Via Célere",
  "Fomento de Construcciones", "OHL", "Sacyr", "ACS",
  
  // Automotive
  "SEAT", "Volkswagen España", "Mercedes-Benz España", "Renault España",
  "Ford España", "Opel España", "Toyota España", "Nissan España",
  
  // Aviation & Aerospace
  "Airbus España", "Boeing España", "Indra Sistemas", "GMV", "Deimos Space",
  "Gulfstream Aerospace", "CASA (Construcciones Aeronáuticas)",
  
  // Tech & Startups
  "Cabify", "Glovo", "Wallapop", "Lingokids", "Aircash",
  "Coverwallet", "Bnext", "Fintonic", "PayFit España", "Factorial",
  "Z1", "Bizum", "Flywire", "Job&Talent", "Freepik",
  "Socialpoint", "King España", "Ubisoft España", "MercurySteam",
  "Biome Makers", "Carto", "Copado", "Hack the Box",
  
  // Global with Spain presence
  "Google España", "Amazon España", "Microsoft España", "Apple España", "Meta España",
  "Netflix España", "IBM España", "Oracle España", "Cisco España", "Dell España",
  "HP España", "SAP España", "Salesforce España", "Accenture España",
  "Deloitte España", "PwC España", "KPMG España", "EY España",
  "McKinsey España", "Boston Consulting Group España",
  "HSBC España", "Citibank España", "JPMorgan España",
  "Unilever España", "P&G España", "Nestle España", "Coca-Cola España",
  "Shell España", "BP España", "TotalEnergies España",
  "Siemens España", "GE España", "Schneider Electric España",
  "Pfizer España", "Novartis España", "GSK España", "Johnson & Johnson España",
  "Samsung España", "LG España", "Sony España", "Panasonic España",
  "Toyota España", "Honda España", "BMW España", "Mercedes-Benz España",
  "LVMH España", "Chanel España", "Gucci España",
  
  // Tourism & Hospitality
  "Meliá Hotels International", "NH Hotel Group", "Riu Hotels", "Iberostar",
  "Barcelo Hotels", "Paradores", "Puente Romano", "Marriott España",
  "Hilton España", "Four Seasons España", "Mandarin Oriental España"
];

const spainLocations = [
  // Madrid Community
  "Madrid (Centro)", "Madrid (Salamanca)", "Madrid (Chamartín)", "Madrid (Tetúan)",
  "Madrid (Latina)", "Madrid (Carabanchel)", "Madrid (Usera)", "Madrid (Villaverde)",
  "Madrid (Moratalaz)", "Madrid (Ciudad Lineal)", "Madrid (Hortaleza)", "Madrid (Barajas)",
  "Madrid (Fuencarral)", "Madrid (Moncloa)", "Madrid (Argüelles)", "Madrid (Retiro)",
  "Alcalá de Henares, Madrid", "Móstoles, Madrid", "Getafe, Madrid", "Fuenlabrada, Madrid",
  "Leganés, Madrid", "Alcorcón, Madrid", "Torrejón de Ardoz, Madrid", "Parla, Madrid",
  "Rivas-Vaciamadrid, Madrid", "Pozuelo de Alarcón, Madrid", "San Sebastián de los Reyes, Madrid",
  
  // Catalonia
  "Barcelona (Ciutat Vella)", "Barcelona (Eixample)", "Barcelona (Sants-Montjuïc)", "Barcelona (Les Corts)",
  "Barcelona (Sarrià-Sant Gervasi)", "Barcelona (Gràcia)", "Barcelona (Horta-Guinardó)",
  "Barcelona (Nou Barris)", "Barcelona (Sant Andreu)", "Barcelona (Sant Martí)",
  "Barcelona (Vallès)", "Barcelona (Poblenou)", "Barcelona (El Raval)", "Barcelona (Barceloneta)",
  "L'Hospitalet de Llobregat, Barcelona", "Badalona, Barcelona", "Terrassa, Barcelona",
  "Sabadell, Barcelona", "Mataró, Barcelona", "Santa Coloma de Gramenet, Barcelona",
  "Cornellà de Llobregat, Barcelona", "Sant Boi de Llobregat, Barcelona",
  "Girona", "Tarragona", "Lleida", "Figueres", "Reus", "Salou",
  
  // Valencia Community
  "Valencia (Ciutat Vella)", "Valencia (Eixample)", "Valencia (Extramurs)", "Valencia (Campanar)",
  "Valencia (La Saïdia)", "Valencia (El Pla del Real)", "Valencia (L'Olivereta)", "Valencia (Patraix)",
  "Valencia (Jesús)", "Valencia (Quatre Carreres)", "Valencia (Poblats Marítims)",
  "Alicante", "Elche", "Castellón de la Plana", "Benidorm", "Torrevieja",
  "Orihuela", "Gandía", "Alcoi", "Elda", "Ontinyent",
  
  // Andalusia
  "Sevilla (Centro)", "Sevilla (Nervión)", "Sevilla (Triana)", "Sevilla (Los Remedios)",
  "Sevilla (Mairena del Aljarafe)", "Sevilla (Montequinto)",
  "Málaga (Centro)", "Málaga (Este)", "Málaga (Teatinos)", "Málaga (Churriana)",
  "Málaga (Puerto de la Torre)", "Málaga (Carretera de Cádiz)",
  "Granada (Centro)", "Granada (Albaicín)", "Granada (Zaidín)",
  "Córdoba (Centro)", "Córdoba (Norte)", "Córdoba (Sur)",
  "Cádiz", "Jerez de la Frontera", "Algeciras", "San Fernando",
  "Huelva", "Almería", "Jaén", "Marbella", "Torremolinos", "Benalmádena",
  "Estepona", "Mijas", "Fuengirola",
  
  // Basque Country
  "Bilbao (Abando)", "Bilbao (Deusto)", "Bilbao (Ibaiondo)", "Bilbao (Uribarri)",
  "Bilbao (Begoña)", "Vitoria-Gasteiz", "San Sebastián (Donostia)",
  "Barakaldo", "Getxo", "Irun", "Santurtzi", "Basauri",
  
  // Other Regions
  "Zaragoza, Aragón", "Palma de Mallorca, Balearic Islands", "Las Palmas, Canary Islands",
  "Santa Cruz de Tenerife, Canary Islands", "Murcia", "Pamplona, Navarra",
  "Logroño, La Rioja", "Oviedo, Asturias", "Gijón, Asturias", "Avilés, Asturias",
  "Santander, Cantabria", "San Sebastián, Basque Country",
  "León, Castile and León", "Burgos, Castile and León", "Salamanca, Castile and León",
  "Valladolid, Castile and León", "Toledo, Castile-La Mancha", "Albacete, Castile-La Mancha",
  "Ciudad Real, Castile-La Mancha", "Cuenca, Castile-La Mancha", "Guadalajara, Castile-La Mancha",
  "Cáceres, Extremadura", "Mérida, Extremadura", "Badajoz, Extremadura",
  
  // Remote
  "Remote — Spain", "Remote — Madrid", "Remote — Barcelona", "Remote — Valencia",
  "Remote — Sevilla", "Remote — Bilbao", "Remote — Málaga", "Remote — Zaragoza"
];

const salaryRanges = [
  // Entry Level (€18K-€28K)
  { display: "€18,000 – 22,000 per year", min: 18000, max: 22000 },
  { display: "€22,000 – 26,000 per year", min: 22000, max: 26000 },
  { display: "€26,000 – 30,000 per year", min: 26000, max: 30000 },
  // Mid Level (€30K-€50K)
  { display: "€30,000 – 35,000 per year", min: 30000, max: 35000 },
  { display: "€35,000 – 42,000 per year", min: 35000, max: 42000 },
  { display: "€42,000 – 50,000 per year", min: 42000, max: 50000 },
  // Senior Level (€50K-€80K)
  { display: "€50,000 – 60,000 per year", min: 50000, max: 60000 },
  { display: "€60,000 – 70,000 per year", min: 60000, max: 70000 },
  { display: "€70,000 – 85,000 per year", min: 70000, max: 85000 },
  // Executive (€85K+)
  { display: "€85,000 – 100,000 per year", min: 85000, max: 100000 },
  { display: "€100,000 – 150,000 per year", min: 100000, max: 150000 },
  // Hourly (Part-time)
  { display: "€10 – 12 per hour", min: 10, max: 12 },
  { display: "€12 – 15 per hour", min: 12, max: 15 },
  { display: "€15 – 20 per hour", min: 15, max: 20 }
];

const jobTypes = ["FULL_TIME", "CONTRACTOR", "PART_TIME", "INTERN", "TEMPORARY"];
const jobTypeDisplay = { 
  "FULL_TIME": "Full-time", 
  "CONTRACTOR": "Contract", 
  "PART_TIME": "Part-time", 
  "INTERN": "Internship", 
  "TEMPORARY": "Temporary" 
};

const experienceLevels = [
  { display: "Entry Level", schema: "no requirements" },
  { display: "Junior", schema: "1 year experience" },
  { display: "Mid Level",   schema: "2-3 years experience" },
  { display: "Senior Level",schema: "5+ years experience" },
  { display: "Lead",        schema: "7+ years experience" },
  { display: "Manager",     schema: "5+ years experience" },
  { display: "Director",    schema: "8+ years experience" },
  { display: "Executive",   schema: "10+ years experience" }
];

const industries = [
  "Technology", "Fintech", "E-commerce", "Banking & Finance", "Renewable Energy",
  "Real Estate", "Healthcare", "Education", "Consulting", "Aviation",
  "Construction", "Logistics & Shipping", "Hospitality & Tourism", "Retail", "Media & Entertainment",
  "Energy", "Automotive", "Telecommunications", "Legal", "Government & Public Sector",
  "Pharmaceuticals", "Biotechnology", "Defense & Aerospace", "Gaming", "Creative Arts",
  "Agriculture & Food", "Wine & Viticulture", "Automotive", "Textiles & Fashion"
];

const jobDescriptions = [
  (title, company, isRemote, location) => `We are seeking a talented ${title} to join the team at ${company} in Spain. ${isRemote ? "This is a fully remote role open to qualified candidates across Spain." : `This role is based in ${location}.`}

You will be responsible for delivering high-quality work that drives business outcomes and contributes to ${company}'s growing operations in Spain and Europe.

Key Responsibilities:
• Lead and execute core ${title.toLowerCase()} functions across the organization
• Collaborate with cross-functional teams to deliver on strategic objectives
• Analyze data and provide actionable insights to improve performance
• Mentor junior team members and contribute to knowledge sharing
• Ensure best practices are followed in all deliverables

Requirements:
• 3–5 years of experience in a similar ${title.toLowerCase()} role
• Strong communication and problem-solving skills
• Experience working in fast-paced global business environment
• Bachelor's degree in a relevant field (or equivalent experience)
• Spanish language ability is a plus
• Proficiency with modern tools and platforms

What We Offer:
• Competitive salary (EUR)
• Private health insurance (Seguro de Salud)
• Pension plan (Plan de Pensiones)
• 22-30 days annual leave + national holidays
• Remote work allowance
• Annual performance bonus
• Professional development budget
• Meals allowance (Tiquets Restaurant)
• Flexible working hours`,

  (title, company, isRemote, location) => `${company} is hiring a ${title}! We are a leading Spain-based company looking for experienced professionals to scale our impact across the country.

${isRemote ? "This remote-first position allows you to work from anywhere in Spain with flexible hours." : `You will work from our ${location} office with a dynamic, ambitious team.`}

About the Role:
As a ${title} at ${company}, you will play a key role in shaping our products and services. You'll work closely with leadership and peers to execute on our mission in one of Europe's most dynamic economies.

What You'll Do:
• Drive key ${title.toLowerCase()} initiatives from planning to execution
• Build and maintain relationships with key stakeholders
• Report on KPIs and contribute to strategic planning
• Stay updated on industry trends globally and in Spain
• Represent ${company} with professionalism and integrity

What You Bring:
• 2–6 years proven experience as a ${title.toLowerCase()}
• Strong analytical and communication skills
• Team player with a growth mindset
• Relevant certification or degree preferred

Compensation & Benefits:
• Competitive EUR salary • Private health insurance • Pension plan • 22+ days annual leave • Meals allowance • Performance bonus • Learning budget`,

  (title, company, isRemote, location) => `Join ${company} as a ${title} and be part of one of Spain's most exciting companies!

${isRemote ? "🌐 Remote | Work from anywhere in Spain" : `📍 ${location}`}

We're building the future of business in Spain and need exceptional talent like you. This is a rare opportunity to work with a world-class brand while enjoying the vibrant Spanish culture and lifestyle.

The Opportunity:
You'll be taking on the ${title} role at a critical growth stage. Your work will directly impact millions of customers across Spain.

Day-to-Day Responsibilities:
• Execute and improve key workflows within the ${title.toLowerCase()} function
• Collaborate with product, engineering, and business teams
• Track metrics and optimize for performance
• Contribute to a culture of excellence and innovation
• Support senior leadership with reporting and strategy

Your Profile:
• 3+ years in ${title.toLowerCase()} or related field
• Comfortable in a fast-moving global business ecosystem
• Strong interpersonal skills and professional work ethic
• Degree in relevant discipline (Master's is a plus)

Perks at ${company}:
Competitive salary | Private health insurance | Pension plan | 22-30 days holiday + holidays | Meals allowance | Performance bonus | Learning budget | Hybrid/remote options | Gym membership in some cases`
];

function seededRandom(seed) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

function getJobData(id) {
  const seed = id * 7919;
  const r = (offset = 0) => seededRandom(seed + offset);

  const isRemote = id <= TOTAL_JOBS / 2;

  const companyIndex = Math.floor((id - 1) / Math.ceil(TOTAL_JOBS / companies.length)) % companies.length;

  const titleIndex   = Math.floor(r(1) * jobTitles.length);
  const locationIndex= Math.floor(r(3) * spainLocations.length);
  const salaryIndex  = Math.floor(r(4) * salaryRanges.length);
  const jobTypeIndex = Math.floor(r(5) * jobTypes.length);
  const expIndex     = Math.floor(r(6) * experienceLevels.length);
  const industryIndex= Math.floor(r(7) * industries.length);
  const descIndex    = Math.floor(r(8) * jobDescriptions.length);

  const title    = jobTitles[titleIndex];
  const company  = companies[companyIndex];
  const location = isRemote ? "Remote — Spain" : spainLocations[locationIndex];
  const salary   = salaryRanges[salaryIndex];
  const jobType  = jobTypes[jobTypeIndex];
  const exp      = experienceLevels[expIndex];
  const industry = industries[industryIndex];
  const description = jobDescriptions[descIndex](title, company, isRemote, spainLocations[locationIndex]);

  const daysAgo = Math.floor(r(9) * 60);
  const postedDate = new Date();
  postedDate.setDate(postedDate.getDate() - daysAgo);
  const validThrough = new Date(postedDate);
  validThrough.setDate(validThrough.getDate() + 90);

  return {
    id,
    title,
    company,
    location,
    salary: salary.display,
    salaryMin: salary.min,
    salaryMax: salary.max,
    jobType,
    jobTypeDisplay: jobTypeDisplay[jobType],
    experience: exp.display,
    experienceSchema: exp.schema,
    industry,
    isRemote,
    description,
    postedDate: postedDate.toISOString().split('T')[0],
    validThrough: validThrough.toISOString().split('T')[0],
    slug: `${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${company.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${id}`
  };
}

function getJobSchema(job) {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    "title": job.title,
    "description": job.description,
    "identifier": {
      "@type": "PropertyValue",
      "name": job.company,
      "value": `JOB-ES-${String(job.id).padStart(6, '0')}`
    },
    "datePosted": job.postedDate,
    "validThrough": `${job.validThrough}T00:00:00Z`,
    "employmentType": job.jobType,
    "hiringOrganization": {
      "@type": "Organization",
      "name": job.company,
      "sameAs": `https://www.google.com/search?q=${encodeURIComponent(job.company)}`
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": job.isRemote ? "Madrid" : job.location.split(',')[0],
        "addressCountry": "ES"
      }
    },
    "applicantLocationRequirements": {
      "@type": "Country",
      "name": "Spain"
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "EUR",
      "value": {
        "@type": "QuantitativeValue",
        "minValue": job.salaryMin,
        "maxValue": job.salaryMax,
        "unitText": "YEAR"
      }
    },
    "experienceRequirements": {
      "@type": "OccupationalExperienceRequirements",
      "monthsOfExperience": job.experienceSchema === "no requirements" ? 0
        : parseInt(job.experienceSchema) * 12
    },
    "industry": job.industry,
    "url": `/jobs/${job.id}`,
    "directApply": true
  };

  if (job.isRemote) {
    schema.jobLocationType = "TELECOMMUTE";
  }

  return schema;
}

module.exports = { getJobData, getJobSchema, TOTAL_JOBS, jobTitles, companies, spainLocations, industries };
