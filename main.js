// Sample charity data - i would use an API but im broke
const charities = [
  {
    name: "African Wildlife Foundation",
    description: "Conservation of Africa's wildlife and natural habitats",
    continent: "africa",
    website: "https://www.awf.org"
  },
  {
    name: "African Wildlife Foundation",
    description: "Conservation of Africa's wildlife and natural habitats",
    continent: "africa",
    website: "https://www.awf.org"
  },
  {
    name: "Stand Up For Africa",
    description: "Supports and creates opportunities to eradicate poverty and suffering across Africa",
    continent: "africa",
    website: "https://www.standupforafrica.org"
  },
  {
    name: "Temwa",
    description: "Helps build a sustainable future for the people of Malawi through community-based projects",
    continent: "africa",
    website: "https://www.temwa.org"
  },
  {
    name: "International Charity for Africa (ICAfrica)",
    description: "Relieves poverty by providing economic development assistance to impoverished communities in Africa",
    continent: "africa",
    website: "https://www.icafrica.org"
  },
  {
    name: "Faraja Orphans Rescue Ministry (FORM)",
    description: "A Tanzanian non-profit organization recognized by the government, focusing on orphan rescue and care",
    continent: "africa",
    website: "https://www.form.or.tz"
  },
  {
    name: "African Parks",
    description: "Manages national parks and protected areas across Africa to ensure their sustainability",
    continent: "africa",
    website: "https://www.africanparks.org"
  },
  {
    name: "Self Help Africa",
    description: "Combats climate change through tree planting and supports sustainable agricultural practices",
    continent: "africa",
    website: "https://www.selfhelpafrica.org"
  },
  {
    name: "Médecins Sans Frontières (MSF)",
    description: "Provides emergency medical care in over 70 countries affected by conflicts and disasters",
    continent: "africa",
    website: "https://www.msf.org"
  },
  {
    name: "ForAfrika",
    description: "Empowers African communities through education, healthcare, and economic development",
    continent: "africa",
    website: "https://www.forafrika.org"
  },
  {
    name: "Self Help Africa",
    description: "Dedicated to ending hunger and poverty in rural Africa through agricultural development",
    continent: "africa",
    website: "https://www.selfhelpafrica.org"
  },
  {
    name: "Junior Achievement Africa",
    description: "Prepares youth for the future of jobs by providing economic empowerment programs",
    continent: "africa",
    website: "https://www.ja-africa.org"
  },
  {
    name: "Space for Giants",
    description: "Focuses on protecting Africa's ecosystems and improving local livelihoods",
    continent: "africa",
    website: "https://www.spaceforgiants.org"
  },
  {
    name: "GEANCO Foundation",
    description: "Empowers young women in Nigeria through creative arts and leadership programs",
    continent: "africa",
    website: "https://www.geanco.org"
  },
  {
    name: "Child Rights and You (CRY)",
    description: "Works to restore children's rights to education, healthcare, and protection in India.",
    continent: "asia",
    website: "https://www.cry.org"
  },
  {
    name: "Asia Foundation",
    description: "Promotes peace, prosperity, and social justice across Asia.",
    continent: "asia",
    website: "https://asiafoundation.org"
  },
  {
    name: "SOS Children's Village India",
    description: "Provides children with a stable home environment and educational support.",
    continent: "asia",
    website: "https://www.soschildrensvillages.in"
  },
  {
    name: "Save the Children India",
    description: "Works to improve the lives of children through education, healthcare, and protection.",
    continent: "asia",
    website: "https://www.savethechildren.in"
  },
  {
    name: "The Leprosy Mission India",
    description: "Dedicated to treating and rehabilitating people with leprosy in India.",
    continent: "asia",
    website: "https://www.leprosymission.in"
  },
  {
    name: "WaterAid India",
    description: "Focuses on providing clean water, sanitation, and hygiene to underserved communities.",
    continent: "asia",
    website: "https://www.wateraid.org/in"
  },
  {
    name: "Pratham",
    description: "Provides quality education to underprivileged children in India.",
    continent: "asia",
    website: "https://www.pratham.org"
  },
  {
    name: "Handicap International India",
    description: "Supports people with disabilities and promotes their rights to live independently.",
    continent: "asia",
    website: "https://www.handicap-international.org"
  },
  {
    name: "Greenpeace Southeast Asia",
    description: "Focuses on environmental conservation and climate change advocacy across Southeast Asia.",
    continent: "asia",
    website: "https://www.greenpeace.org/seasia/"
  },
  {
    name: "Teach For India",
    description: "Aims to provide quality education to children in low-income communities in India.",
    continent: "asia",
    website: "https://www.teachforindia.org"
  },
  {
    name: "The Hunger Project India",
    description: "Works to end hunger and poverty through sustainable development programs.",
    continent: "asia",
    website: "https://www.thp.org"
  },
  {
    name: "Doctors Without Borders (MSF) Asia",
    description: "Provides medical care in areas affected by conflict and natural disasters in Asia.",
    continent: "asia",
    website: "https://www.msf.org"
  },
  {
    name: "Asian Development Bank (ADB)",
    description: "Works to reduce poverty and improve the quality of life across Asia.",
    continent: "asia",
    website: "https://www.adb.org"
  },
  {
    name: "Nepal Youth Foundation",
    description: "Supports youth development, education, and healthcare initiatives in Nepal.",
    continent: "asia",
    website: "https://www.nepalyouthfoundation.org"
  },
  {
    name: "Save the Children UK",
    description: "Works to protect children in the UK and around the world through education, healthcare, and protection.",
    continent: "europe",
    website: "https://www.savethechildren.org.uk"
  },
  {
    name: "Oxfam International",
    description: "Fights inequality and poverty worldwide, including Europe, through development programs and advocacy.",
    continent: "europe",
    website: "https://www.oxfam.org"
  },
  {
    name: "Doctors Without Borders (MSF) Europe",
    description: "Provides medical care to those in need across Europe and the world in areas affected by conflict and natural disasters.",
    continent: "europe",
    website: "https://www.msf.org"
  },
  {
    name: "European Cancer Research Fund",
    description: "Supports research and projects focused on the prevention, treatment, and cure of cancer in Europe.",
    continent: "europe",
    website: "https://www.ecrf.org"
  },
  {
    name: "Amnesty International Europe",
    description: "Campaigns to end human rights abuses and fights for justice and freedom for people in Europe and beyond.",
    continent: "europe",
    website: "https://www.amnesty.org"
  },
  {
    name: "The Red Cross Europe",
    description: "Provides emergency aid, disaster relief, and health services across Europe and around the world.",
    continent: "europe",
    website: "https://www.redcross.org"
  },
  {
    name: "The Nature Conservancy Europe",
    description: "Works to protect nature and fight climate change through science, advocacy, and partnerships across Europe.",
    continent: "europe",
    website: "https://www.nature.org"
  },
  {
    name: "The British Council",
    description: "Supports cultural exchange, education, and global partnerships to enhance mutual understanding between people in the UK and the rest of the world.",
    continent: "europe",
    website: "https://www.britishcouncil.org"
  },
  {
    name: "European Refugee Council",
    description: "Supports refugees and displaced persons across Europe through legal and social assistance.",
    continent: "europe",
    website: "https://www.europeanrefugeecouncil.org"
  },
  {
    name: "The European Foundation for the Improvement of Living and Working Conditions (Eurofound)",
    description: "Promotes the improvement of working and living conditions for people across Europe.",
    continent: "europe",
    website: "https://www.eurofound.europa.eu"
  },
  {
    name: "UNICEF Europe",
    description: "Works to improve the lives of children in Europe and worldwide by providing education, healthcare, and protection.",
    continent: "europe",
    website: "https://www.unicef.org/europe"
  },
  {
    name: "World Wildlife Fund (WWF) Europe",
    description: "Focuses on environmental conservation, climate change action, and the protection of wildlife across Europe.",
    continent: "europe",
    website: "https://www.worldwildlife.org"
  },
  {
    name: "European Food Banks Federation",
    description: "Works to reduce food waste and hunger in Europe by organizing food donations to those in need.",
    continent: "europe",
    website: "https://www.eurofoodbank.org"
  },
  {
    name: "ActionAid International",
    description: "Fights poverty and injustice, particularly focusing on women’s rights, across Europe and other parts of the world.",
    continent: "europe",
    website: "https://www.actionaid.org"
  },
  {
    name: "American Red Cross",
    description: "Provides emergency assistance, disaster relief, and education in the United States.",
    continent: "northAmerica",
    website: "https://www.redcross.org"
  },
  {
    name: "Feeding America",
    description: "Works to end hunger in the U.S. by distributing food to communities in need.",
    continent: "northAmerica",
    website: "https://www.feedingamerica.org"
  },
  {
    name: "United Way Worldwide",
    description: "Supports global and local initiatives to advance education, financial stability, and health in North America.",
    continent: "northAmerica",
    website: "https://www.unitedway.org"
  },
  {
    name: "The Nature Conservancy (USA)",
    description: "Works to conserve the lands and waters on which all life depends, protecting nature in the U.S. and worldwide.",
    continent: "northAmerica",
    website: "https://www.nature.org"
  },
  {
    name: "The Salvation Army USA",
    description: "Provides social services, shelter, and disaster relief to vulnerable people across North America.",
    continent: "northAmerica",
    website: "https://www.salvationarmyusa.org"
  },
  {
    name: "American Cancer Society",
    description: "Funds cancer research, provides support for cancer patients, and promotes prevention efforts across the U.S.",
    continent: "northAmerica",
    website: "https://www.cancer.org"
  },
  {
    name: "Habitat for Humanity USA",
    description: "Helps families build and improve places to call home by providing affordable housing solutions.",
    continent: "northAmerica",
    website: "https://www.habitat.org"
  },
  {
    name: "American Heart Association",
    description: "Funds cardiovascular research and provides education on heart disease prevention and treatment.",
    continent: "northAmerica",
    website: "https://www.heart.org"
  },
  {
    name: "Doctors Without Borders (MSF) North America",
    description: "Provides medical care in areas affected by conflict, disease outbreaks, and natural disasters in North America and worldwide.",
    continent: "northAmerica",
    website: "https://www.doctorswithoutborders.org"
  },
  {
    name: "Environmental Defense Fund (EDF)",
    description: "Focuses on environmental conservation, climate change action, and wildlife protection across North America.",
    continent: "northAmerica",
    website: "https://www.edf.org"
  },
  {
    name: "National Wildlife Federation",
    description: "Works to protect wildlife and wild places in North America through education, advocacy, and habitat restoration.",
    continent: "northAmerica",
    website: "https://www.nwf.org"
  },
  {
    name: "Lupus Foundation of America",
    description: "Raises awareness and funds for research on lupus, a chronic autoimmune disease.",
    continent: "northAmerica",
    website: "https://www.lupus.org"
  },  
  {
    name: "Make-A-Wish Foundation",
    description: "Grants wishes to children with critical illnesses in the U.S. and North America.",
    continent: "northAmerica",
    website: "https://www.wish.org"
  },
  {
    name: "The Carter Center",
    description: "Promotes human rights, democracy, and health care initiatives in North America and around the world.",
    continent: "northAmerica",
    website: "https://www.cartercenter.org"
  },{
    name: "Brazilian Red Cross",
    description: "Provides humanitarian aid, disaster relief, and health services across Brazil and South America.",
    continent: "southAmerica",
    website: "https://www.crb.org.br"
  },
  {
    name: "Amnesty International Brazil",
    description: "Campaigns for human rights and against human rights abuses in South America and beyond.",
    continent: "southAmerica",
    website: "https://www.amnesty.org.br"
  },
  {
    name: "Techo",
    description: "Works to overcome poverty in South America by building housing and creating social change programs.",
    continent: "southAmerica",
    website: "https://www.techo.org"
  },
  {
    name: "Fundación Avina",
    description: "Focuses on sustainable development and the protection of human rights across South America.",
    continent: "southAmerica",
    website: "https://www.avina.net"
  },
  {
    name: "Greenpeace Latin America",
    description: "Works on environmental issues including deforestation, pollution, and climate change across Latin America.",
    continent: "southAmerica",
    website: "https://www.greenpeace.org/latinamerica"
  },
  {
    name: "Socios por el Clima",
    description: "Supports climate change mitigation efforts and promotes environmental sustainability in South America.",
    continent: "southAmerica",
    website: "https://www.sociosporelclima.org"
  },
  {
    name: "The Andes Amazon Fund",
    description: "Protects the rainforests of the Andes and Amazon region through conservation and sustainable development projects.",
    continent: "southAmerica",
    website: "https://www.andesamazonfund.org"
  },
  {
    name: "Fundación Proacceso",
    description: "Provides education, training, and employment opportunities to low-income populations in Chile and South America.",
    continent: "southAmerica",
    website: "https://www.proacceso.org"
  },
  {
    name: "World Wildlife Fund (WWF) Brazil",
    description: "Focuses on protecting wildlife, preserving ecosystems, and advocating for climate change solutions in Brazil and South America.",
    continent: "southAmerica",
    website: "https://www.wwf.org.br"
  },
  {
    name: "Pro Mujer",
    description: "Empowers women in South America by providing access to financial services, healthcare, and education.",
    continent: "southAmerica",
    website: "https://www.promujer.org"
  },
  {
    name: "Fundación Argentina de Nanotecnología (FAN)",
    description: "Promotes scientific research and development in nanotechnology to address global challenges, including healthcare and the environment.",
    continent: "southAmerica",
    website: "https://www.fan.org.ar"
  },
  {
    name: "Cáritas Argentina",
    description: "Provides emergency aid, food, and shelter, as well as long-term solutions to poverty and social inequality in Argentina.",
    continent: "southAmerica",
    website: "https://www.caritas.org.ar"
  },
  {
    name: "The Latin American Association",
    description: "Supports Latino immigrants and promotes social justice, education, and economic empowerment in the U.S. and Latin America.",
    continent: "southAmerica",
    website: "https://www.thelaa.org"
  },
  {
    name: "Fundación Paraguaya",
    description: "Works to reduce poverty by promoting microfinance, education, and sustainable agriculture in Paraguay and South America.",
    continent: "southAmerica",
    website: "https://www.fundacionparaguaya.org.py"
  },
  {
    name: "Australian Red Cross",
    description: "Provides emergency relief, social services, and healthcare in Australia and across the Pacific region.",
    continent: "oceania",
    website: "https://www.redcross.org.au"
  },
  {
    name: "World Vision Australia",
    description: "Focuses on child welfare, poverty alleviation, and humanitarian aid in Australia and throughout the Pacific.",
    continent: "oceania",
    website: "https://www.worldvision.com.au"
  },
  {
    name: "Greenpeace Australia Pacific",
    description: "Works to protect the environment, combat climate change, and promote sustainability in Oceania.",
    continent: "oceania",
    website: "https://www.greenpeace.org.au"
  },
  {
    name: "Oxfam Australia",
    description: "Tackles global poverty and inequality through humanitarian aid and development programs in Oceania and beyond.",
    continent: "oceania",
    website: "https://www.oxfam.org.au"
  },
  {
    name: "Australian Conservation Foundation",
    description: "Advocates for environmental protection and sustainable development in Australia and the Pacific region.",
    continent: "oceania",
    website: "https://www.acf.org.au"
  },
  {
    name: "Royal Flying Doctor Service of Australia",
    description: "Provides emergency medical and health services across remote and rural areas in Australia.",
    continent: "oceania",
    website: "https://www.flyingdoctor.org.au"
  },
  {
    name: "Save the Children Australia",
    description: "Supports children’s rights and provides emergency relief, education, and healthcare across Oceania and globally.",
    continent: "oceania",
    website: "https://www.savethechildren.org.au"
  },
  {
    name: "The Smith Family",
    description: "Supports disadvantaged children and families in Australia through educational programs and community support.",
    continent: "oceania",
    website: "https://www.thesmithfamily.com.au"
  },
  {
    name: "Australian Indigenous Mentoring Experience (AIME)",
    description: "Helps Indigenous Australian students succeed in education through mentoring and support programs.",
    continent: "oceania",
    website: "https://www.aimementoring.com"
  },
  {
    name: "Pacific Islands Forum Fisheries Agency (FFA)",
    description: "Promotes sustainable fishing practices and the conservation of marine resources across the Pacific Islands.",
    continent: "oceania",
    website: "https://www.ffa.int"
  },
  {
    name: "The Fred Hollows Foundation",
    description: "Helps restore eyesight to those in need in Australia and throughout the Pacific region through eye surgeries and medical support.",
    continent: "oceania",
    website: "https://www.hollows.org"
  },
  {
    name: "Australian Marine Conservation Society",
    description: "Works to protect Australia's oceans, marine life, and coral reefs from environmental threats.",
    continent: "oceania",
    website: "https://www.amcs.org.au"
  },
  {
    name: "Act for Peace",
    description: "Works to bring peace and justice to communities affected by conflict and poverty in Oceania and around the world.",
    continent: "oceania",
    website: "https://www.actforpeace.org.au"
  },
  {
    name: "Cure Brain Cancer Foundation",
    description: "Funds brain cancer research and supports families affected by brain cancer in Australia.",
    continent: "oceania",
    website: "https://www.curebraincancer.org.au"
  },
  {
    name: "World Vision",
    description: "Focuses on child welfare, poverty alleviation, and humanitarian aid globally.",
    continent: "christian",
    website: "https://www.worldvision.org"
  },
  {
    name: "Catholic Relief Services",
    description: "Works on humanitarian issues, focusing on relief, development, and emergency response.",
    continent: "christian",
    website: "https://www.crs.org"
  },
  {
    name: "Operation Blessing International",
    description: "Focuses on disaster relief, medical care, and clean water for impoverished areas.",
    continent: "christian",
    website: "https://www.ob.org"
  },
  {
    name: "Lutheran World Relief",
    description: "Supports sustainable development and relief efforts in impoverished regions.",
    continent: "christian",
    website: "https://www.lwr.org"
  },
  {
    name: "Samaritan's Purse",
    description: "Provides emergency relief, medical care, and support for communities in need.",
    continent: "christian",
    website: "https://www.samaritanspurse.org"
  },
  {
    name: "The Salvation Army",
    description: "Provides social services, shelter, and disaster relief across the world.",
    continent: "christian",
    website: "https://www.salvationarmy.org"
  },
  {
    name:: "Christian Aid",
    description: "Fights poverty and injustice globally by supporting vulnerable communities and advocating for systemic change.",
    continent: "christian",
    website: "https://www.christianaid.org.uk"
  },
  {
    name: "Compassion International",
    description: "Provides children with sponsorships, education, healthcare, and a path out of poverty.",
    continent: "christian",
    website: "https://www.compassion.com"
  },
  {
    name: "Hope International",
    description: "Works to alleviate poverty by providing access to microfinance, loans, and savings programs.",
    continent: "christian",
    website: "https://www.hopeinternational.org"
  },
  {
    name: "Tearfund",
    description: "Helps relieve poverty and promote justice through various global projects and partnerships.",
    continent: "christian",
    website: "https://www.tearfund.org"
  }
];


function createCharityCard(charity) {
  return `
    <div class="charity-card" data-continent="${charity.continent}">
      <h3>${charity.name}</h3>
      <p>${charity.description}</p>
      <a href="${charity.website}" class="donate-btn" target="_blank">Donate Now</a>
    </div>
  `;
}

function filterCharities(continent, searchTerm = '') {
  const charitiesContainer = document.getElementById('charitiesContainer');
  const filteredCharities = charities.filter(charity => {
    const matchesContinent = continent === 'all' || charity.continent === continent;
    const matchesSearch = charity.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         charity.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesContinent && matchesSearch;
  });
  
  charitiesContainer.innerHTML = filteredCharities.map(createCharityCard).join('');
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  // Initialize with all charities
  filterCharities('all');
  
  // Continent navigation
  const continentNav = document.getElementById('continentNav');
  continentNav.addEventListener('click', (e) => {
    if (e.target.classList.contains('continent-btn')) {
      // Update active button
      document.querySelectorAll('.continent-btn').forEach(btn => btn.classList.remove('active'));
      e.target.classList.add('active');
      
      // Filter charities
      const continent = e.target.dataset.continent;
      const searchTerm = document.getElementById('searchInput').value;
      filterCharities(continent, searchTerm);
    }
  });
  
  // Search functionality
  const searchInput = document.getElementById('searchInput');
  let debounceTimeout;
  
  searchInput.addEventListener('input', (e) => {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      const activeContinent = document.querySelector('.continent-btn.active').dataset.continent;
      filterCharities(activeContinent, e.target.value);
    }, 300);
  });
});
