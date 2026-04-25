import { Droplets, Wind, Flame, Snowflake, WashingMachine, Refrigerator, Sparkles, Tv, LucideIcon } from "lucide-react"

export const COMPANY_NAME = "ServiceHub Bangalore"
export const COMPANY_PHONE = "+91 98765 43210"
export const COMPANY_EMAIL = "contact@servicehub-bangalore.com"
export const COMPANY_ADDRESS = "123, 100 Feet Road, Koramangala, Bangalore - 560034"

export const COMPANY_INFO = {
  name: COMPANY_NAME,
  phone: COMPANY_PHONE,
  email: COMPANY_EMAIL,
  address: COMPANY_ADDRESS,
}

// Brand-specific services for SEO
export const BRAND_SERVICES = {
  "water-purifier": [
    { brand: "Kent", services: ["Kent RO Service", "Kent Water Purifier Repair", "Kent Filter Replacement", "Kent AMC", "Kent Installation"] },
    { brand: "Aquaguard", services: ["Aquaguard Service", "Aquaguard Repair", "Aquaguard Filter Change", "Aquaguard AMC", "Eureka Forbes Service"] },
    { brand: "Pureit", services: ["Pureit Service", "Pureit RO Repair", "Pureit Filter Replacement", "HUL Pureit AMC"] },
    { brand: "Livpure", services: ["Livpure Service", "Livpure RO Repair", "Livpure Filter Change", "Livpure Installation"] },
    { brand: "Blue Star", services: ["Blue Star Water Purifier Service", "Blue Star RO Repair", "Blue Star Filter Replacement"] },
    { brand: "AO Smith", services: ["AO Smith Service", "AO Smith RO Repair", "AO Smith Filter Change", "AO Smith Installation"] },
    { brand: "Havells", services: ["Havells Water Purifier Service", "Havells RO Repair", "Havells Filter Replacement"] },
    { brand: "LG", services: ["LG Water Purifier Service", "LG RO Repair", "LG Filter Change"] },
  ],
  "chimney": [
    { brand: "Faber", services: ["Faber Chimney Service", "Faber Chimney Repair", "Faber Chimney Cleaning", "Faber Motor Repair", "Faber Filter Cleaning"] },
    { brand: "Elica", services: ["Elica Chimney Service", "Elica Chimney Repair", "Elica Chimney Cleaning", "Elica Motor Replacement"] },
    { brand: "Hindware", services: ["Hindware Chimney Service", "Hindware Chimney Repair", "Hindware Chimney Cleaning", "Hindware Installation"] },
    { brand: "Kaff", services: ["Kaff Chimney Service", "Kaff Chimney Repair", "Kaff Chimney Cleaning", "Kaff Motor Repair"] },
    { brand: "Glen", services: ["Glen Chimney Service", "Glen Chimney Repair", "Glen Chimney Cleaning", "Glen Filter Replacement"] },
    { brand: "Bosch", services: ["Bosch Chimney Service", "Bosch Chimney Repair", "Bosch Chimney Cleaning"] },
    { brand: "IFB", services: ["IFB Chimney Service", "IFB Chimney Repair", "IFB Chimney Cleaning"] },
    { brand: "Kutchina", services: ["Kutchina Chimney Service", "Kutchina Chimney Repair", "Kutchina Chimney Cleaning"] },
    { brand: "Sunflame", services: ["Sunflame Chimney Service", "Sunflame Chimney Repair", "Sunflame Chimney Cleaning", "Sunflame Filter Replacement"] },
    { brand: "Gilma", services: ["Gilma Chimney Service", "Gilma Chimney Repair", "Gilma Chimney Cleaning", "Gilma Motor Repair"] },
    { brand: "Blowhot", services: ["Blowhot Chimney Service", "Blowhot Chimney Repair", "Blowhot Chimney Cleaning", "Blowhot Installation"] },
    { brand: "Prestige", services: ["Prestige Chimney Service", "Prestige Chimney Repair", "Prestige Chimney Cleaning", "Prestige Filter Service"] },
  ],
  "hob": [
    { brand: "Prestige", services: ["Prestige Hob Service", "Prestige Gas Stove Repair", "Prestige Burner Repair", "Prestige Ignition Repair"] },
    { brand: "Pigeon", services: ["Pigeon Hob Service", "Pigeon Gas Stove Repair", "Pigeon Burner Repair", "Pigeon Cooktop Service"] },
    { brand: "Sunflame", services: ["Sunflame Hob Service", "Sunflame Gas Stove Repair", "Sunflame Burner Repair", "Sunflame Installation"] },
    { brand: "Elica", services: ["Elica Hob Service", "Elica Cooktop Repair", "Elica Burner Repair", "Elica Glass Top Replacement"] },
    { brand: "Faber", services: ["Faber Hob Service", "Faber Cooktop Repair", "Faber Burner Repair", "Faber Gas Hob Installation"] },
    { brand: "Bosch", services: ["Bosch Hob Service", "Bosch Cooktop Repair", "Bosch Gas Hob Repair", "Bosch Induction Repair"] },
    { brand: "Gilma", services: ["Gilma Hob Service", "Gilma Gas Stove Repair", "Gilma Cooktop Cleaning", "Gilma Burner Replacement"] },
    { brand: "Hindware", services: ["Hindware Hob Service", "Hindware Cooktop Repair", "Hindware Gas Hob Installation"] },
    { brand: "Kaff", services: ["Kaff Hob Service", "Kaff Cooktop Repair", "Kaff Gas Hob Repair", "Kaff Burner Replacement"] },
    { brand: "Glen", services: ["Glen Hob Service", "Glen Gas Stove Repair", "Glen Cooktop Service", "Glen Burner Repair"] },
    { brand: "Kutchina", services: ["Kutchina Hob Service", "Kutchina Cooktop Repair", "Kutchina Gas Hob Installation"] },
    { brand: "Blowhot", services: ["Blowhot Hob Service", "Blowhot Gas Stove Repair", "Blowhot Cooktop Service", "Blowhot Burner Repair"] },
  ],
  "ac": [
    { brand: "Daikin", services: ["Daikin AC Service", "Daikin AC Repair", "Daikin AC Gas Refill", "Daikin AC Installation", "Daikin AC AMC"] },
    { brand: "LG", services: ["LG AC Service", "LG AC Repair", "LG AC Gas Refill", "LG AC Installation", "LG Dual Inverter AC Service"] },
    { brand: "Samsung", services: ["Samsung AC Service", "Samsung AC Repair", "Samsung AC Gas Refill", "Samsung Wind-Free AC Service"] },
    { brand: "Voltas", services: ["Voltas AC Service", "Voltas AC Repair", "Voltas AC Gas Refill", "Voltas AC Installation", "Voltas AMC"] },
    { brand: "Blue Star", services: ["Blue Star AC Service", "Blue Star AC Repair", "Blue Star AC Gas Refill", "Blue Star AC Installation"] },
    { brand: "Hitachi", services: ["Hitachi AC Service", "Hitachi AC Repair", "Hitachi AC Gas Refill", "Hitachi AC Installation"] },
    { brand: "Carrier", services: ["Carrier AC Service", "Carrier AC Repair", "Carrier AC Gas Refill", "Carrier AC Installation"] },
    { brand: "Godrej", services: ["Godrej AC Service", "Godrej AC Repair", "Godrej AC Gas Refill", "Godrej AC Installation"] },
    { brand: "Panasonic", services: ["Panasonic AC Service", "Panasonic AC Repair", "Panasonic AC Gas Refill"] },
    { brand: "Lloyd", services: ["Lloyd AC Service", "Lloyd AC Repair", "Lloyd AC Gas Refill", "Lloyd AC Installation"] },
    { brand: "Whirlpool", services: ["Whirlpool AC Service", "Whirlpool AC Repair", "Whirlpool AC Gas Refill"] },
    { brand: "O General", services: ["O General AC Service", "O General AC Repair", "O General AC Gas Refill", "O General AC Installation"] },
  ],
  "washing-machine": [
    { brand: "LG", services: ["LG Washing Machine Service", "LG Washing Machine Repair", "LG Front Load Repair", "LG Top Load Service"] },
    { brand: "Samsung", services: ["Samsung Washing Machine Service", "Samsung Washing Machine Repair", "Samsung Front Load Repair"] },
    { brand: "Whirlpool", services: ["Whirlpool Washing Machine Service", "Whirlpool Repair", "Whirlpool Motor Repair"] },
    { brand: "IFB", services: ["IFB Washing Machine Service", "IFB Front Load Repair", "IFB Dryer Repair", "IFB Service Center"] },
    { brand: "Bosch", services: ["Bosch Washing Machine Service", "Bosch Front Load Repair", "Bosch Dryer Service"] },
    { brand: "Godrej", services: ["Godrej Washing Machine Service", "Godrej Semi-Automatic Repair", "Godrej Top Load Service"] },
    { brand: "Haier", services: ["Haier Washing Machine Service", "Haier Front Load Repair", "Haier Top Load Service"] },
    { brand: "Panasonic", services: ["Panasonic Washing Machine Service", "Panasonic Repair", "Panasonic Motor Replacement"] },
  ],
  "refrigerator": [
    { brand: "LG", services: ["LG Refrigerator Service", "LG Fridge Repair", "LG Double Door Repair", "LG Side-by-Side Service"] },
    { brand: "Samsung", services: ["Samsung Refrigerator Service", "Samsung Fridge Repair", "Samsung French Door Repair"] },
    { brand: "Whirlpool", services: ["Whirlpool Refrigerator Service", "Whirlpool Fridge Repair", "Whirlpool Compressor Repair"] },
    { brand: "Godrej", services: ["Godrej Refrigerator Service", "Godrej Fridge Repair", "Godrej Single Door Service"] },
    { brand: "Haier", services: ["Haier Refrigerator Service", "Haier Fridge Repair", "Haier Convertible Fridge Service"] },
    { brand: "Bosch", services: ["Bosch Refrigerator Service", "Bosch Fridge Repair", "Bosch Bottom Freezer Service"] },
    { brand: "Hitachi", services: ["Hitachi Refrigerator Service", "Hitachi Fridge Repair", "Hitachi Big French Repair"] },
    { brand: "Panasonic", services: ["Panasonic Refrigerator Service", "Panasonic Fridge Repair", "Panasonic Frost-Free Service"] },
  ],
  "dishwasher": [
    { brand: "Bosch", services: ["Bosch Dishwasher Service", "Bosch Dishwasher Repair", "Bosch Dishwasher Installation"] },
    { brand: "IFB", services: ["IFB Dishwasher Service", "IFB Dishwasher Repair", "IFB Neptune Repair"] },
    { brand: "LG", services: ["LG Dishwasher Service", "LG Dishwasher Repair", "LG QuadWash Service"] },
    { brand: "Samsung", services: ["Samsung Dishwasher Service", "Samsung Dishwasher Repair", "Samsung WaterWall Service"] },
    { brand: "Siemens", services: ["Siemens Dishwasher Service", "Siemens Dishwasher Repair", "Siemens Installation"] },
    { brand: "Faber", services: ["Faber Dishwasher Service", "Faber Dishwasher Repair", "Faber Countertop Dishwasher"] },
    { brand: "Voltas Beko", services: ["Voltas Beko Dishwasher Service", "Voltas Beko Repair", "Voltas Beko Installation"] },
    { brand: "Elica", services: ["Elica Dishwasher Service", "Elica Dishwasher Repair", "Elica Built-in Service"] },
  ],
  "tv": [
    { brand: "Samsung", services: ["Samsung TV Repair", "Samsung LED TV Service", "Samsung QLED Screen Repair", "Samsung TV Installation"] },
    { brand: "LG", services: ["LG TV Repair", "LG LED TV Service", "LG OLED Screen Repair", "LG TV Installation"] },
    { brand: "Sony", services: ["Sony TV Repair", "Sony LED TV Service", "Sony Bravia Repair", "Sony TV Installation"] },
    { brand: "Panasonic", services: ["Panasonic TV Repair", "Panasonic LED TV Service", "Panasonic Viera Repair", "Panasonic TV Installation"] },
    { brand: "Philips", services: ["Philips TV Repair", "Philips LED TV Service", "Philips Screen Replacement", "Philips TV Installation"] },
    { brand: "Oneplus", services: ["OnePlus TV Repair", "OnePlus LED Service", "OnePlus Screen Replacement", "OnePlus Installation"] },
    { brand: "TCL", services: ["TCL TV Repair", "TCL LED TV Service", "TCL Screen Repair", "TCL TV Installation"] },
    { brand: "MI", services: ["Mi TV Repair", "Mi LED TV Service", "Mi Screen Replacement", "Mi TV Installation"] },
  ]
}

export interface Service {
  id: string
  name: string
  slug: string
  shortDesc: string
  shortDescription: string
  description: string
  icon: LucideIcon
  iconColor: string
  iconBg: string
  image: string
  imageAlt: string
  features: readonly string[]
  brands: readonly string[]
  priceRange: string
  startingPrice: string
}

export const SERVICES: Service[] = [
  {
    id: "water-purifier",
    name: "Water Purifier",
    slug: "water-purifier",
    shortDesc: "Kent, Aquaguard, Pureit RO service & repair in Bangalore",
    shortDescription: "Kent, Aquaguard, Pureit RO service & repair in Bangalore",
    description: "Expert water purifier services for Kent, Aquaguard, Pureit, Livpure, Blue Star, AO Smith & all brands. RO service, UV repair, filter replacement & AMC in Bangalore.",
    icon: Droplets,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100",
    image: "/images/water-purifier.jpg",
    imageAlt: "Kent RO water purifier service and Aquaguard repair in Bangalore - professional installation and filter replacement",
    features: [
      "Kent RO Service & Repair",
      "Aquaguard Service Center",
      "Pureit Filter Replacement",
      "Livpure AMC Service",
      "Blue Star RO Repair",
      "AO Smith Installation"
    ],
    brands: ["Kent", "Aquaguard", "Pureit", "Livpure", "Blue Star", "AO Smith", "Havells", "LG"],
    priceRange: "₹499 - ₹2,999",
    startingPrice: "₹499"
  },
  {
    id: "chimney",
    name: "Kitchen Chimney",
    slug: "chimney",
    shortDesc: "Faber, Elica, Gilma, Kaff, Glen, Sunflame chimney service in Bangalore",
    shortDescription: "Faber, Elica, Gilma, Kaff, Glen, Sunflame chimney service in Bangalore",
    description: "Professional chimney services for Faber, Elica, Gilma, Kaff, Glen, Sunflame, Hindware, Kutchina, Blowhot, Prestige & all brands. Deep cleaning, motor repair, filter replacement & installation in Bangalore.",
    icon: Wind,
    iconColor: "text-orange-600",
    iconBg: "bg-orange-100",
    image: "/images/chimney.jpg",
    imageAlt: "Faber chimney cleaning, Elica chimney repair, Gilma chimney service, Kaff chimney, Glen chimney, Sunflame chimney service in Bangalore - professional deep cleaning and motor repair",
    features: [
      "Faber Chimney Cleaning",
      "Elica Motor Repair",
      "Gilma Chimney Service",
      "Kaff Filter Replacement",
      "Glen Chimney Service",
      "Sunflame Chimney Repair",
      "Hindware Installation",
      "Kutchina Chimney Cleaning",
      "Blowhot Chimney Service",
      "Prestige Chimney Repair"
    ],
    brands: ["Faber", "Gilma", "Elica", "Kaff", "Glen", "Sunflame", "Hindware", "Kutchina", "Blowhot", "Prestige", "Bosch", "IFB"],
    priceRange: "₹399 - ₹1,999",
    startingPrice: "₹399"
  },
  {
    id: "hob",
    name: "Gas Hob & Cooktop",
    slug: "hob",
    shortDesc: "Faber, Gilma, Elica, Kaff, Glen, Sunflame, Prestige hob repair in Bangalore",
    shortDescription: "Faber, Gilma, Elica, Kaff, Glen, Sunflame, Prestige hob repair in Bangalore",
    description: "Expert gas hob services for Faber, Gilma, Elica, Kaff, Glen, Sunflame, Hindware, Kutchina, Blowhot, Prestige, Pigeon & all brands. Burner repair, ignition fix, glass top replacement in Bangalore.",
    icon: Flame,
    iconColor: "text-red-600",
    iconBg: "bg-red-100",
    image: "/images/hob.jpg",
    imageAlt: "Faber hob repair, Gilma cooktop service, Elica hob, Kaff gas stove, Glen hob, Sunflame cooktop, Prestige gas hob service in Bangalore - burner repair and glass top replacement",
    features: [
      "Faber Hob Repair",
      "Gilma Cooktop Cleaning",
      "Elica Hob Installation",
      "Kaff Gas Stove Service",
      "Glen Hob Repair",
      "Sunflame Burner Repair",
      "Hindware Cooktop Service",
      "Kutchina Hob Installation",
      "Blowhot Gas Stove Repair",
      "Prestige Hob Repair"
    ],
    brands: ["Faber", "Gilma", "Elica", "Kaff", "Glen", "Sunflame", "Hindware", "Kutchina", "Blowhot", "Prestige", "Pigeon", "Bosch"],
    priceRange: "₹299 - ₹1,499",
    startingPrice: "₹299"
  },
  {
    id: "ac",
    name: "Air Conditioner",
    slug: "ac",
    shortDesc: "Daikin, LG, Voltas, Blue Star AC service in Bangalore",
    shortDescription: "Daikin, LG, Voltas, Blue Star AC service in Bangalore",
    description: "Complete AC services for Daikin, LG, Samsung, Voltas, Blue Star, Hitachi, Carrier & all brands. Installation, gas refill, compressor repair & AMC in Bangalore.",
    icon: Snowflake,
    iconColor: "text-cyan-600",
    iconBg: "bg-cyan-100",
    image: "/images/ac.jpg",
    imageAlt: "Daikin AC service and LG AC repair in Bangalore - professional installation, gas refill and compressor repair",
    features: [
      "Daikin AC Service & AMC",
      "LG Dual Inverter AC Repair",
      "Samsung Wind-Free AC Service",
      "Voltas AC Gas Refill",
      "Blue Star AC Installation",
      "Hitachi AC Compressor Repair"
    ],
    brands: ["Daikin", "LG", "Samsung", "Voltas", "Blue Star", "Hitachi", "Carrier", "Godrej", "Panasonic", "Lloyd", "Whirlpool", "O General"],
    priceRange: "₹499 - ₹3,999",
    startingPrice: "₹499"
  },
  {
    id: "washing-machine",
    name: "Washing Machine",
    slug: "washing-machine",
    shortDesc: "LG, Samsung, IFB, Bosch washing machine repair in Bangalore",
    shortDescription: "LG, Samsung, IFB, Bosch washing machine repair in Bangalore",
    description: "Expert washing machine services for LG, Samsung, Whirlpool, IFB, Bosch, Godrej & all brands. Front load, top load, semi-automatic repair & installation in Bangalore.",
    icon: WashingMachine,
    iconColor: "text-violet-600",
    iconBg: "bg-violet-100",
    image: "/images/washing-machine.jpg",
    imageAlt: "LG washing machine repair and Samsung front load service in Bangalore - motor repair and drum cleaning",
    features: [
      "LG Front Load Repair",
      "Samsung Washing Machine Service",
      "IFB Dryer Repair",
      "Whirlpool Motor Replacement",
      "Bosch Washer Installation",
      "Godrej Semi-Automatic Service"
    ],
    brands: ["LG", "Samsung", "Whirlpool", "IFB", "Bosch", "Godrej", "Haier", "Panasonic"],
    priceRange: "₹399 - ₹2,999",
    startingPrice: "₹399"
  },
  {
    id: "refrigerator",
    name: "Refrigerator",
    slug: "refrigerator",
    shortDesc: "LG, Samsung, Whirlpool, Godrej fridge repair in Bangalore",
    shortDescription: "LG, Samsung, Whirlpool, Godrej fridge repair in Bangalore",
    description: "Professional refrigerator services for LG, Samsung, Whirlpool, Godrej, Haier, Bosch & all brands. Compressor repair, gas refill, thermostat fix in Bangalore.",
    icon: Refrigerator,
    iconColor: "text-sky-600",
    iconBg: "bg-sky-100",
    image: "/images/refrigerator.jpg",
    imageAlt: "LG refrigerator repair and Samsung fridge service in Bangalore - compressor repair and gas refill",
    features: [
      "LG Double Door Repair",
      "Samsung French Door Service",
      "Whirlpool Compressor Repair",
      "Godrej Single Door Service",
      "Haier Convertible Fridge Repair",
      "Bosch Bottom Freezer Service"
    ],
    brands: ["LG", "Samsung", "Whirlpool", "Godrej", "Haier", "Bosch", "Hitachi", "Panasonic"],
    priceRange: "₹499 - ₹3,499",
    startingPrice: "₹499"
  },
  {
    id: "dishwasher",
    name: "Dishwasher",
    slug: "dishwasher",
    shortDesc: "Bosch, IFB, LG, Samsung dishwasher service in Bangalore",
    shortDescription: "Bosch, IFB, LG, Samsung dishwasher service in Bangalore",
    description: "Expert dishwasher services for Bosch, IFB, LG, Samsung, Siemens, Faber & all brands. Installation, repair, maintenance & AMC in Bangalore.",
    icon: Sparkles,
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-100",
    image: "/images/dishwasher.jpg",
    imageAlt: "Bosch dishwasher service and IFB dishwasher repair in Bangalore - installation and maintenance",
    features: [
      "Bosch Dishwasher Repair",
      "IFB Neptune Service",
      "LG QuadWash Repair",
      "Samsung WaterWall Service",
      "Siemens Installation",
      "Faber Countertop Service"
    ],
    brands: ["Bosch", "IFB", "LG", "Samsung", "Siemens", "Faber", "Voltas Beko", "Elica"],
    priceRange: "₹599 - ₹2,499",
    startingPrice: "₹599"
  },
  {
    id: "tv",
    name: "TV",
    slug: "tv",
    shortDesc: "Samsung, LG, Sony TV repair and sales in Bangalore",
    shortDescription: "Samsung, LG, Sony TV repair and sales in Bangalore",
    description: "Expert TV repair and sales services for Samsung, LG, Sony, Panasonic, Philips & all brands. LED, QLED, OLED screen repair, installation & home delivery in Bangalore.",
    icon: Tv,
    iconColor: "text-indigo-600",
    iconBg: "bg-indigo-100",
    image: "/images/tv.jpg",
    imageAlt: "Samsung and LG TV repair, sales and installation service in Bangalore - LED QLED OLED screen replacement",
    features: [
      "Samsung LED & QLED Repair",
      "LG OLED Screen Replacement",
      "Sony TV Service & Repair",
      "TV Installation & Mounting",
      "Home Delivery Available",
      "Expert Technician Service"
    ],
    brands: ["Samsung", "LG", "Sony", "Panasonic", "Philips", "OnePlus", "TCL", "Mi"],
    priceRange: "₹499 - ₹5,999",
    startingPrice: "₹499"
  }
]

export const BANGALORE_AREAS = [
  { name: "Koramangala", slug: "koramangala", zone: "South", popular: true },
  { name: "HSR Layout", slug: "hsr-layout", zone: "South", popular: true },
  { name: "Indiranagar", slug: "indiranagar", zone: "East", popular: true },
  { name: "Whitefield", slug: "whitefield", zone: "East", popular: true },
  { name: "Electronic City", slug: "electronic-city", zone: "South", popular: true },
  { name: "Marathahalli", slug: "marathahalli", zone: "East", popular: true },
  { name: "Jayanagar", slug: "jayanagar", zone: "South", popular: true },
  { name: "JP Nagar", slug: "jp-nagar", zone: "South", popular: true },
  { name: "BTM Layout", slug: "btm-layout", zone: "South", popular: true },
  { name: "Bellandur", slug: "bellandur", zone: "East", popular: true },
  { name: "Sarjapur Road", slug: "sarjapur-road", zone: "East", popular: true },
  { name: "Bannerghatta Road", slug: "bannerghatta-road", zone: "South", popular: true },
  { name: "Rajajinagar", slug: "rajajinagar", zone: "West", popular: false },
  { name: "Malleshwaram", slug: "malleshwaram", zone: "North", popular: false },
  { name: "Basavanagudi", slug: "basavanagudi", zone: "South", popular: false },
  { name: "Hebbal", slug: "hebbal", zone: "North", popular: false },
  { name: "Yelahanka", slug: "yelahanka", zone: "North", popular: false },
  { name: "RT Nagar", slug: "rt-nagar", zone: "North", popular: false },
  { name: "Hennur", slug: "hennur", zone: "North", popular: false },
  { name: "KR Puram", slug: "kr-puram", zone: "East", popular: false },
  { name: "Mahadevapura", slug: "mahadevapura", zone: "East", popular: false },
  { name: "Bommanahalli", slug: "bommanahalli", zone: "South", popular: false },
  { name: "Banashankari", slug: "banashankari", zone: "South", popular: false },
  { name: "Vijayanagar", slug: "vijayanagar", zone: "West", popular: false },
  { name: "Yeshwanthpur", slug: "yeshwanthpur", zone: "North", popular: false },
  { name: "Thanisandra", slug: "thanisandra", zone: "North", popular: false },
  { name: "Varthur", slug: "varthur", zone: "East", popular: false },
  { name: "MG Road", slug: "mg-road", zone: "Central", popular: true },
  { name: "Shivajinagar", slug: "shivajinagar", zone: "Central", popular: false },
  { name: "Ulsoor", slug: "ulsoor", zone: "Central", popular: false },
  { name: "Richmond Town", slug: "richmond-town", zone: "Central", popular: false },
]

export const SERVICE_TYPES = ["sales", "service", "repair", "installation", "maintenance"] as const

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Koramangala",
    rating: 5,
    service: "Kent RO Service",
    text: "Excellent Kent RO service! The technician arrived on time and fixed my Kent water purifier within an hour. Very professional and reasonable pricing.",
    initials: "PS",
    color: "bg-pink-500"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Whitefield",
    rating: 5,
    service: "Daikin AC Service",
    text: "Best Daikin AC service in Bangalore! They did a complete gas refill and deep cleaning of my 5-year-old Daikin AC. Running like new now!",
    initials: "RK",
    color: "bg-blue-500"
  },
  {
    id: 3,
    name: "Anita Reddy",
    location: "HSR Layout",
    rating: 5,
    service: "Faber Chimney Cleaning",
    text: "My Faber kitchen chimney was barely working. ServiceHub deep cleaning service made it work perfectly. Great value for money!",
    initials: "AR",
    color: "bg-purple-500"
  },
  {
    id: 4,
    name: "Mohammed Farhan",
    location: "Indiranagar",
    rating: 5,
    service: "Prestige Hob Repair",
    text: "Quick and efficient Prestige hob repair service. The technician diagnosed the ignition issue immediately and fixed it on the spot.",
    initials: "MF",
    color: "bg-green-500"
  },
  {
    id: 5,
    name: "Sneha Patel",
    location: "Electronic City",
    rating: 5,
    service: "Aquaguard Installation",
    text: "Got a new Aquaguard RO installed through ServiceHub. Installation was clean and they explained everything about filter maintenance.",
    initials: "SP",
    color: "bg-orange-500"
  },
  {
    id: 6,
    name: "Vikram Rao",
    location: "Marathahalli",
    rating: 5,
    service: "LG AC Installation",
    text: "Professional LG AC installation with proper copper piping. No shortcuts, genuine work. Will definitely use their services again.",
    initials: "VR",
    color: "bg-teal-500"
  },
  {
    id: 7,
    name: "Meera Nair",
    location: "Bellandur",
    rating: 5,
    service: "IFB Washing Machine Repair",
    text: "My IFB front load washer stopped spinning. ServiceHub technician diagnosed it quickly and replaced the motor. Works perfectly now!",
    initials: "MN",
    color: "bg-violet-500"
  },
  {
    id: 8,
    name: "Suresh Menon",
    location: "JP Nagar",
    rating: 5,
    service: "Samsung Refrigerator Service",
    text: "Samsung fridge was not cooling properly. They fixed the gas leak and did a complete service. Very satisfied with the work.",
    initials: "SM",
    color: "bg-sky-500"
  },
  {
    id: 10,
    name: "Rajesh Kumar",
    location: "Indiranagar",
    rating: 5,
    service: "Samsung TV Repair",
    text: "My Samsung TV screen went blank. ServiceHub technician diagnosed the issue and replaced the backlight. Picture quality is perfect now!",
    initials: "RK",
    color: "bg-indigo-500"
  }
]

export const FAQS = [
  {
    question: "Which water purifier brands do you service in Bangalore?",
    answer: "We service all major water purifier brands including Kent, Aquaguard (Eureka Forbes), Pureit (HUL), Livpure, Blue Star, AO Smith, Havells, and LG. Our technicians are trained for RO, UV, and UF purifiers of all brands."
  },
  {
    question: "Do you provide Faber and Elica chimney service?",
    answer: "Yes, we are experts in Faber chimney service, Elica chimney cleaning, Hindware chimney repair, Kaff, Glen, and Bosch chimney services. We provide deep cleaning, motor repair, and filter replacement for all chimney brands."
  },
  {
    question: "Which AC brands do you repair in Bangalore?",
    answer: "We service all AC brands including Daikin, LG, Samsung, Voltas, Blue Star, Hitachi, Carrier, Godrej, Panasonic, Lloyd, Whirlpool, and O General. Our services include AC installation, gas refill, compressor repair, and AMC."
  },
  {
    question: "Do you repair Prestige and Pigeon gas hobs?",
    answer: "Yes, we provide repair services for Prestige hob, Pigeon gas stove, Sunflame cooktop, Gilma hob, Elica, Faber, and Bosch cooktops. Services include burner repair, ignition fix, and glass top replacement."
  },
  {
    question: "Which washing machine brands do you service?",
    answer: "We service all washing machine brands including LG, Samsung, Whirlpool, IFB, Bosch, Godrej, Haier, and Panasonic. We repair front load, top load, and semi-automatic washers."
  },
  {
    question: "Do you repair LG and Samsung refrigerators?",
    answer: "Yes, we provide expert repair services for LG, Samsung, Whirlpool, Godrej, Haier, Bosch, and Hitachi refrigerators. Services include compressor repair, gas refill, and thermostat fix."
  },
  {
    question: "Do you provide Bosch and IFB dishwasher service?",
    answer: "Yes, we service Bosch, IFB, LG, Samsung, Siemens, and Faber dishwashers. Our services include installation, repair, drainage fix, and annual maintenance."
  },
  {
    question: "What are your service charges for Kent RO service?",
    answer: "Kent RO service charges start from ₹499 for basic servicing. Filter replacement and repairs are charged separately based on the parts required. We provide a detailed quote before starting any work."
  },
  {
    question: "Do you provide TV repair and sales services?",
    answer: "Yes, we provide TV repair, installation, and home delivery services for Samsung, LG, Sony, Panasonic, Philips, OnePlus, TCL, and Mi TVs. Services include LED/QLED/OLED screen repair, backlight replacement, and wall mounting."
  },
  {
    question: "What are your service charges for TV repair?",
    answer: "TV repair charges start from ₹499 for basic diagnostics and inspection. Screen replacement, backlight repair, and other component replacements are charged based on parts and complexity. We provide a detailed quote before starting any work."
  }
]

export const STATS = [
  { value: "50,000+", label: "Happy Customers" },
  { value: "100+", label: "Expert Technicians" },
  { value: "30+", label: "Areas Covered" },
  { value: "4.8★", label: "Customer Rating" }
]
