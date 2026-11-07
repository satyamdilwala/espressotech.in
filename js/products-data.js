// Product database for Espresso Tech Vending Solution (ALINZA / CAFE RICH)
const productsData = [
  // --- PREMIXES: 1 KG RANGE ---
  {
    id: "elaichi-tea-1kg",
    name: "Elaichi Tea Instant Premix 1 KG",
    seoUrl: "elaichi-tea-instant-premix-1kg.html",
    category: "premix",
    subCategory: "1kg-pack",
    brand: "ALINZA / CAFE RICH",
    tagline: "No Artificial Flavour | Just Add Hot Water | Ready in Seconds",
    image: "image/ElaichiTea_1kg_front.png",
    gallery: [
      "image/ElaichiTea_1kg_front.png",
      "image/ElaichiTea_1kg_Back.png",
      "image/Preparation_Elaichi_Chai.jpg"
    ],
    prepGuideImage: "image/Preparation_Elaichi_Chai.jpg",
    badge: "Bestseller Chai",
    netWeight: "1 Kg",
    shelfLife: "6 Months",
    flavour: "Elaichi Tea (Cardamom Chai)",
    storage: "Store in a cool and dry place away from direct sunlight.",
    shortDesc: "Enjoy the authentic taste of aromatic Elaichi Tea anytime with our Instant Tea Premix. Made for convenience and great taste, this premix requires only hot water to prepare a delicious cup of tea in seconds.",
    description: "Enjoy the authentic taste of aromatic Elaichi Tea anytime with our Instant Tea Premix. Made for convenience and great taste, this premix requires only hot water to prepare a delicious cup of tea in seconds. Specially processed for both automated vending machines and manual preparation in offices, homes, cafes, and catering.",
    features: [
      "Rich Elaichi (Cardamom) Tea Taste",
      "No Artificial Flavour Added",
      "No Need to Add Milk or Sugar (All-in-one)",
      "Easy & Quick Preparation – Ready in Seconds",
      "Ideal for Home, Office, Cafes, Vending Machines & Travel",
      "Hygienically Packed for Long-lasting Freshness"
    ],
    preparation: [
      "Add 14g to 15g premix to 100ml hot water.",
      "Stir well and serve hot piping cardamom tea.",
      "Vending Machine: Simply fill the premix canister and press the Elaichi Tea button."
    ],
    packageIncludes: "1 x Elaichi Tea Instant Premix (1 Kg)",
    targetAreas: "Mumbai, Thane, Navi Mumbai & PAN India"
  },
  {
    id: "masala-tea-1kg",
    name: "Masala Tea Instant Premix 1 Kg",
    seoUrl: "masala-tea-instant-premix-1kg.html",
    category: "premix",
    subCategory: "1kg-pack",
    brand: "ALINZA / CAFE RICH",
    tagline: "No Artificial Flavour | Just Add Hot Water | Instant Chai Mix",
    image: "image/Masala Tea_1kg.JPG",
    gallery: [
      "image/Masala Tea_1kg.JPG",
      "image/Preparation_Masala_Chai.jpg"
    ],
    prepGuideImage: "image/Preparation_Masala_Chai.jpg",
    badge: "Traditional Flavour",
    netWeight: "1 Kg",
    shelfLife: "6 Months",
    flavour: "Authentic Indian Masala Chai",
    storage: "Store in a cool, dry place away from direct sunlight.",
    shortDesc: "Enjoy the rich and authentic taste of traditional Masala Tea with our Instant Tea Premix. Specially crafted for convenience, simply add hot water and enjoy.",
    description: "Enjoy the rich and authentic taste of traditional Masala Tea with our Instant Tea Premix. Specially crafted for convenience, this premix delivers a flavorful cup of chai in seconds—simply add hot water and enjoy. Blended with authentic Indian spices including cardamom, ginger, cinnamon, clove, and black pepper.",
    features: [
      "Authentic Masala Tea Taste with Real Spice Notes",
      "No Artificial Flavour Added",
      "Quick & Easy Preparation – Consistent in every cup",
      "No Extra Milk or Sugar Needed",
      "Perfect for Home, Office, Travel, Pantries & Catering",
      "Hygienically Packed for Freshness & Aroma"
    ],
    preparation: [
      "Add 15g of premix to 100ml hot water.",
      "Stir well until completely dissolved.",
      "Serve hot and enjoy authentic roadside-style rich masala chai."
    ],
    packageIncludes: "1 x Masala Tea Instant Premix (1 Kg)",
    targetAreas: "Mumbai, Thane, Navi Mumbai & PAN India"
  },
  {
    id: "ginger-tea-1kg",
    name: "Ginger Tea Instant Premix 1 Kg",
    seoUrl: "ginger-tea-instant-premix-1kg.html",
    category: "premix",
    subCategory: "1kg-pack",
    brand: "ALINZA / CAFE RICH",
    tagline: "No Artificial Flavour | Instant Adrak Chai Mix | Just Add Hot Water",
    image: "image/Ginger Tea_1kg.JPG",
    gallery: [
      "image/Ginger Tea_1kg.JPG",
      "image/Preparation_Elaichi_Ginger_Masala.png"
    ],
    badge: "Energizing Adrak Chai",
    netWeight: "1 Kg",
    shelfLife: "6 Months",
    flavour: "Ginger Tea (Adrak Tea)",
    storage: "Store in a cool and dry place away from direct sunlight.",
    shortDesc: "Experience the refreshing and spicy warmth of Ginger Tea with our Instant Tea Premix. Carefully blended for a rich tea experience.",
    description: "Experience the refreshing and spicy taste of Ginger Tea with our Instant Tea Premix. Carefully blended for a rich tea experience, this premix is quick and convenient—simply add hot water and enjoy a delicious cup of tea anytime. Excellent for rejuvenating corporate teams and tea lovers across India and overseas.",
    features: [
      "Authentic Ginger (Adrak) Tea Taste & Warmth",
      "No Artificial Flavour Added",
      "Quick & Easy to Prepare within 15 Seconds",
      "Ideal for Home, Office, Travel & Cafeterias",
      "Hygienically Packed for Long Lasting Freshness"
    ],
    preparation: [
      "Add 15g premix to 100ml hot water.",
      "Stir well until completely dissolved.",
      "Serve hot and savor the comforting ginger warmth."
    ],
    packageIncludes: "1 x Ginger Tea Instant Premix (1 Kg)",
    targetAreas: "Mumbai, Thane, Navi Mumbai & PAN India"
  },
  {
    id: "premium-coffee-1kg",
    name: "Premium Coffee Instant Premix 1 Kg",
    seoUrl: "premium-coffee-instant-premix-1kg.html",
    category: "premix",
    subCategory: "1kg-pack",
    brand: "ALINZA / CAFE RICH",
    tagline: "No Artificial Flavour | Instant Coffee Mix | Just Add Hot Water",
    image: "image/coffee_1kg_front.png",
    gallery: [
      "image/coffee_1kg_front.png",
      "image/coffee_1kg_back.png",
      "image/Preparation_Coffee_1kg.png"
    ],
    badge: "Café Style Aroma",
    netWeight: "1 Kg",
    shelfLife: "6 Months",
    flavour: "Premium Roasted Coffee",
    storage: "Store in a cool and dry place away from direct sunlight.",
    shortDesc: "Enjoy a rich and refreshing coffee experience with our Premium Coffee Instant Premix. Crafted for convenience and cafe-like rich crema.",
    description: "Enjoy a rich and refreshing coffee experience with our Premium Coffee Instant Premix. Crafted for convenience and great taste, this premix allows you to prepare a delicious cup of coffee in seconds by simply adding hot water. Designed for vending machines as well as manual office pantries.",
    features: [
      "Rich and Premium Roasted Coffee Taste",
      "No Artificial Flavour Added",
      "Pre-blended with high-grade dairy creamer and sugar",
      "Quick and Easy Preparation",
      "Perfect for Home, Office, Cafes, Hotels and Travel",
      "Hygienically Packed for Freshness & Aroma"
    ],
    preparation: [
      "Add 15g premix to 100ml hot water.",
      "Stir well until completely dissolved.",
      "Serve hot and enjoy the silky smooth coffee aroma."
    ],
    packageIncludes: "1 x Premium Coffee Instant Premix (1 Kg)",
    targetAreas: "Mumbai, Thane, Navi Mumbai & PAN India"
  },
  {
    id: "lemon-tea-1kg",
    name: "Lemon Instant Tea Premix 1 Kg",
    seoUrl: "lemon-instant-tea-premix-1kg.html",
    category: "premix",
    subCategory: "1kg-pack",
    brand: "ALINZA / CAFE RICH",
    tagline: "No Artificial Flavour | Hot & Cold Lemon Tea Mix | Just Add Water",
    image: "image/LemonTea_1kg_front.jpeg",
    gallery: [
      "image/LemonTea_1kg_front.jpeg",
      "image/LemonTea_1kg_back.jpeg"
    ],
    badge: "Hot & Iced Versatile",
    netWeight: "1 Kg",
    shelfLife: "6 Months",
    flavour: "Tangy Zesty Lemon Tea",
    storage: "Store in a cool and dry place away from direct sunlight.",
    shortDesc: "Enjoy the refreshing taste of Lemon Tea anytime. Made for convenience and great taste, this versatile premix can be enjoyed both hot and chilled iced.",
    description: "Enjoy the refreshing taste of Lemon Tea anytime with our Lemon Instant Tea Premix. Made for convenience and great taste, this versatile premix can be enjoyed both hot and cold. Simply add water and enjoy a delicious, refreshing beverage in seconds. Loved in corporate pantries across Mumbai & Navi Mumbai.",
    features: [
      "Refreshing Lemon Tea Flavor with real citrus notes",
      "No Artificial Flavour Added",
      "Suitable for Both Hot & Cold Beverages (Iced Lemon Tea)",
      "Quick and Easy Preparation without lemon squeezing hassle",
      "Ideal for Home, Office, Cafes, Travel & Vending Use",
      "Hygienically Packed for Freshness"
    ],
    preparation: [
      "For Hot Lemon Tea: Add 15g premix to 100ml hot water, stir well and serve hot.",
      "For Cold / Iced Lemon Tea: Add 25g premix to 200ml chilled water, stir well until completely dissolved, add ice cubes if desired and enjoy."
    ],
    packageIncludes: "1 x Lemon Instant Tea Premix (1 Kg)",
    targetAreas: "Mumbai, Thane, Navi Mumbai & PAN India"
  },
  {
    id: "alinza-chai-magic-300g",
    name: "ALINZA Chai Magic Formula – 300 gm",
    seoUrl: "alinza-chai-magic-formula-300g.html",
    category: "premix",
    subCategory: "chai-business",
    brand: "ALINZA",
    tagline: "Start Your Own Tea Business Without Any Franchise | 50+ Cups per Pack",
    image: "image/Chai Magic_300.png",
    gallery: [
      "image/Chai Magic_300.png",
      "image/Preparation_Chai Magic_Eng.png"
    ],
    badge: "Business Booster Formula",
    netWeight: "300 gm",
    shelfLife: "12 Months",
    flavour: "Signature Commercial Kadak Chai Formula",
    storage: "Store in an airtight container in a cool, dry place.",
    shortDesc: "Specially developed for entrepreneurs and chai outlets who want to start a successful tea business. Each 300 gm pack makes 50+ cups of rich, creamy, consistent tea.",
    description: "ALINZA Chai Magic Formula is a premium instant tea premix specially developed for entrepreneurs who want to start a successful tea business. Simply add hot water and milk to prepare rich, creamy, and consistently delicious tea within seconds. Each 300 gm pack makes 50+ cups, helping you serve customers with the same great taste every time while saving time, effort, and preparation costs without paying expensive franchise fees.",
    features: [
      "Makes 50+ Cups from one single 300 gm pack",
      "Rich, Creamy & Consistent Taste in every batch",
      "No Need to Measure Tea Leaves, Sugar, Milk or Spices manually",
      "Saves Time, Gas, Wastage and Costly Labor",
      "Ideal for Commercial Tea Stalls, Cafés, Canteens, Office Pantries & Food Kiosks",
      "Empowers Entrepreneurs: Start your own chai brand without franchise royalties"
    ],
    preparation: [
      "Take 2 liters of full cream fresh milk and 1 liter of water in a boiling vessel.",
      "Boil milk and water mixture on full flame.",
      "After first boiling, add the complete 300g ALINZA Chai Magic Formula to the pot.",
      "Continuously stir and boil for 5 minutes.",
      "Your delicious, premium-quality signature tea is ready to serve 50+ customers!"
    ],
    packageIncludes: "1 x ALINZA Chai Magic Formula Pack (300 gm)",
    targetAreas: "Commercial Tea Outlets in Mumbai, Thane, Navi Mumbai & All India"
  },

  // --- PREMIXES: 20 SACHETS BOXES ---
  {
    id: "coffee-sachets-20",
    name: "Premium Instant Coffee Premix – 20 Sachets",
    seoUrl: "coffee-instant-premix-20-sachets.html",
    category: "premix",
    subCategory: "sachets",
    brand: "ALINZA / CAFE RICH",
    tagline: "20 Individual Sachets | Rich Aroma & Smooth Taste | Ready Under 1 Minute",
    image: "image/Coffee_Sachet_20.png",
    gallery: [
      "image/Coffee_Sachet_20.png",
      "image/Preparation_Coffee_Sachet_20.png"
    ],
    badge: "Travel & Desk Friendly",
    netWeight: "20 Sachets Box",
    shelfLife: "9 Months",
    flavour: "Smooth Café Style Coffee",
    storage: "Store in a cool, dry place away from direct sunlight.",
    shortDesc: "Enjoy a rich, café-style coffee experience anytime with this premium instant coffee premix. Made with quality coffee, creamer, and sugar in convenient single-serve sachets.",
    description: "Enjoy a rich, café-style coffee experience anytime with this premium instant coffee premix. Made with quality coffee, creamer, and sugar blended in the right proportions, it delivers a smooth, creamy, and flavorful cup in seconds. Simply empty one sachet into a cup, add hot water, stir well, and enjoy. Ideal for office desks, executive cabins, hotel rooms, and travel bags.",
    features: [
      "20 individual sachets for maximum freshness and zero waste",
      "Rich aroma and velvety smooth coffee taste",
      "Pre-mixed with coffee, creamer, and sugar",
      "Quick and easy preparation – ready in under a minute",
      "Ideal for home, office, executive suites, travel, and outdoor use",
      "Hygienically packed for long-lasting freshness"
    ],
    preparation: [
      "Empty 1 sachet into a cup.",
      "Add 100–150 ml hot water.",
      "Stir well for 10 seconds and serve hot."
    ],
    packageIncludes: "20 x Coffee Premix Sachets (Pack of 1 Box)",
    targetAreas: "Mumbai, Thane, Navi Mumbai & PAN India"
  },
  {
    id: "masala-tea-sachets-20",
    name: "Premium Instant Masala Tea Premix – 20 Sachets",
    seoUrl: "masala-tea-instant-premix-20-sachets.html",
    category: "premix",
    subCategory: "sachets",
    brand: "ALINZA / CAFE RICH",
    tagline: "Authentic Indian Spices | 20 Sachets Box | Pure Desi Chai Anytime",
    image: "image/MasalaTea_Sachet_20.png",
    gallery: [
      "image/MasalaTea_Sachet_20.png",
      "image/Preparation_Masala_Chai.jpg"
    ],
    prepGuideImage: "image/Preparation_Masala_Chai.jpg",
    badge: "Office Pantry Favorite",
    netWeight: "20 Sachets Box",
    shelfLife: "9 Months",
    flavour: "Authentic Masala Chai with Spices",
    storage: "Store in a cool, dry place away from direct sunlight and moisture.",
    shortDesc: "Experience the rich and authentic taste of traditional Indian Masala Chai. Expertly blended with tea extract, milk solids, sugar, and aromatic Indian spices.",
    description: "Experience the rich and authentic taste of traditional Indian Masala Chai with our Premium Instant Masala Tea Premix. Expertly blended with tea extract, milk solids, sugar, and aromatic Indian spices, this instant premix delivers a strong, flavorful, and refreshing cup of tea in seconds. Spices include cardamom, ginger, clove, cinnamon, and black pepper for the quintessential Mumbai chai aroma.",
    features: [
      "Rich and authentic masala chai flavor with real spice warmth",
      "20 individually packed sachets for guaranteed freshness",
      "Just add hot water – ready in under a minute",
      "No need for separate milk, sugar, or tea leaves",
      "Smooth, creamy texture with an invigorating aroma",
      "Hygienically packed for quality and effortless portability"
    ],
    preparation: [
      "Empty 1 sachet into a cup.",
      "Add 90–100 ml hot water.",
      "Stir well for 10–15 seconds.",
      "Serve hot and enjoy fresh Indian masala chai."
    ],
    packageIncludes: "20 x Sachets of Premium Instant Masala Tea Premix",
    targetAreas: "Mumbai, Thane, Navi Mumbai & PAN India"
  },
  {
    id: "ginger-tea-sachets-20",
    name: "Premium Instant Ginger Tea Premix – 20 Sachets",
    seoUrl: "ginger-tea-instant-premix-20-sachets.html",
    category: "premix",
    subCategory: "sachets",
    brand: "ALINZA / CAFE RICH",
    tagline: "Soothing Adrak Flavor | 20 Sachets Box | Comfort in Every Sip",
    image: "image/Ginger_Sachet_20.png",
    gallery: [
      "image/Ginger_Sachet_20.png",
      "image/Preparation_Elaichi_Ginger_Masala.png"
    ],
    badge: "Soothing Warmth",
    netWeight: "20 Sachets Box",
    shelfLife: "9 Months",
    flavour: "Spicy & Soothing Ginger Tea",
    storage: "Store in a cool, dry place away from direct sunlight and moisture.",
    shortDesc: "Enjoy the comforting warmth and refreshing taste of ginger tea. Specially crafted with tea extract, milk solids, sugar, and natural ginger flavor.",
    description: "Enjoy the comforting warmth and refreshing taste of ginger tea with our Premium Instant Ginger Tea Premix. Specially crafted with quality tea extract, milk solids, sugar, and natural ginger flavor, this instant premix delivers a rich, aromatic, and soothing cup of tea in seconds. Just add hot water, stir, and savor the authentic taste of ginger chai anytime.",
    features: [
      "Rich and refreshing ginger tea flavor",
      "20 individually packed sachets for convenience and hygiene",
      "Quick and easy preparation – just add hot water",
      "No separate tea, milk, or sugar required",
      "Smooth, creamy texture with a delightful aroma",
      "Perfect for busy mornings, office breaks, travel, and rainy days"
    ],
    preparation: [
      "Empty 1 sachet into a cup.",
      "Add 90–100 ml hot water.",
      "Stir well until completely dissolved.",
      "Serve hot and enjoy comforting adrak chai."
    ],
    packageIncludes: "20 x Sachets of Premium Instant Ginger Tea Premix",
    targetAreas: "Mumbai, Thane, Navi Mumbai & PAN India"
  },
  {
    id: "lemon-tea-sachets-20",
    name: "Premium Instant Lemon Tea Premix – 20 Sachets",
    seoUrl: "lemon-tea-instant-premix-20-sachets.html",
    category: "premix",
    subCategory: "sachets",
    brand: "ALINZA / CAFE RICH",
    tagline: "Tangy & Invigorating | 20 Sachets Box | Light & Refreshing",
    image: "image/lemontea_sachet_20.png",
    gallery: [
      "image/lemontea_sachet_20.png",
      "image/Preparation_Lemon_Sachet_20.png"
    ],
    badge: "Refreshing Citrus",
    netWeight: "20 Sachets Box",
    shelfLife: "9 Months",
    flavour: "Zesty Lemon Black Tea",
    storage: "Store in a cool, dry place away from direct sunlight and moisture.",
    shortDesc: "Refresh your day with the tangy and invigorating taste of Premium Instant Lemon Tea. Expertly blended to deliver a perfect balance of tea and citrus.",
    description: "Refresh your day with the tangy and invigorating taste of Premium Instant Lemon Tea Premix. Expertly blended to deliver a perfect balance of tea and lemon flavor, this instant premix offers a light, refreshing, and flavorful beverage that can be prepared in seconds. Simply add hot water, stir well, and enjoy a delicious cup of lemon tea anytime.",
    features: [
      "Refreshing lemon flavor with a smooth tea taste",
      "20 individually packed sachets for freshness and zero moisture loss",
      "Quick and easy preparation – just add hot water",
      "Perfect for home, office, travel, wellness routines, and outdoor activities",
      "Consistent taste and citrus aroma in every cup",
      "Hygienically packed for quality and freshness"
    ],
    preparation: [
      "Empty 1 sachet into a cup.",
      "Add 100–120 ml hot water (or cold water with ice cubes for iced lemon tea).",
      "Stir well until completely dissolved and enjoy."
    ],
    packageIncludes: "20 x Sachets of Premium Instant Lemon Tea Premix",
    targetAreas: "Mumbai, Thane, Navi Mumbai & PAN India"
  },
  {
    id: "elaichi-tea-sachets-20",
    name: "Premium Instant Elaichi Tea Premix – 20 Sachets",
    seoUrl: "elaichi-tea-instant-premix-20-sachets.html",
    category: "premix",
    subCategory: "sachets",
    brand: "ALINZA / CAFE RICH",
    tagline: "Royally Aromatic Cardamom Chai | 20 Individual Sachets",
    image: "image/ElaichiTea_Sachet_20.png",
    gallery: [
      "image/ElaichiTea_Sachet_20.png",
      "image/Preparation_Elaichi_Chai.jpg"
    ],
    prepGuideImage: "image/Preparation_Elaichi_Chai.jpg",
    badge: "Royal Aroma",
    netWeight: "20 Sachets Box",
    shelfLife: "9 Months",
    flavour: "Pure Cardamom (Elaichi) Chai",
    storage: "Store in a cool, dry place away from direct sunlight.",
    shortDesc: "Authentic cardamom infused instant chai sachets for tea lovers on the go. Pre-sweetened with milk and tea extract.",
    description: "Crafted for discerning tea connoisseurs, each sachet blends premium Indian tea extract, pure dairy creamer, balanced sugar, and fragrant green cardamom notes. Perfectly proportioned for single cups in office cabins, client meetings, travel, or home relaxation.",
    features: [
      "20 individually sealed nitrogen-flushed sachets",
      "Instant café-quality cardamom chai in 30 seconds",
      "No milk, boiling vessel, or sugar strainer required",
      "Consistent sweetness and creaminess",
      "Easy carry packs for corporate pantries and corporate gifting"
    ],
    preparation: [
      "Empty 1 sachet into a cup.",
      "Pour 100ml steaming hot water.",
      "Stir thoroughly and enjoy rich Elaichi Chai."
    ],
    packageIncludes: "20 x Sachets of Elaichi Tea Premix",
    targetAreas: "Mumbai, Thane, Navi Mumbai & PAN India"
  },
  {
    id: "aam-panna-1kg",
    name: "Aam Panna Instant Premix (1 Kg & Sachets)",
    seoUrl: "aam-panna-instant-premix.html",
    category: "premix",
    subCategory: "specialty",
    brand: "ALINZA / CAFE RICH",
    tagline: "Authentic Raw Mango Cooler | Sweet, Tangy & Refreshing",
    image: "image/Aampanna_1kg.JPG",
    gallery: [
      "image/Aampanna_1kg.JPG",
      "image/Aampanna_Sachet_20.png",
      "image/Preparation_Aam_Panna.jpg"
    ],
    prepGuideImage: "image/Preparation_Aam_Panna.jpg",
    badge: "Summer Special Cooler",
    netWeight: "1 Kg & 20 Sachets Box",
    shelfLife: "12 Months",
    flavour: "Traditional Kairi / Green Raw Mango Panna",
    storage: "Store in a cool dry place.",
    shortDesc: "Traditional Indian raw mango drink loaded with cumin and tangy goodness. Super refreshing chilled beverage for offices, events, and homes.",
    description: "Recharge with our traditional Aam Panna Instant Premix! Infused with tangy raw mango extracts, roasted cumin, and cooling herbs, this premix prepares an instant revitalizing cooler in chilled water. Available in 1kg bulk packs for vending and 20 sachet boxes.",
    features: [
      "Authentic desi Kairi (Raw Mango) tangy sweetness",
      "Instant cooling and hydration",
      "Just add chilled water & ice – ready in seconds",
      "Perfect summer beverage for corporate pantries and cafeterias",
      "Zero hassle of boiling raw mangoes manually"
    ],
    preparation: [
      "Take 20g-25g premix in a glass.",
      "Add 150ml-200ml chilled water.",
      "Stir well, add ice cubes and garnish with mint leaves."
    ],
    packageIncludes: "Available in 1 Kg Pack & 20 Sachets Box",
    targetAreas: "Mumbai, Thane, Navi Mumbai & PAN India"
  },

  // --- VENDING MACHINES & EQUIPMENT ---
  {
    id: "hot-water-kettle-10l",
    name: "ALINZA / CAFE RICH Multi-Purpose Hot Water Kettle (10 Liter)",
    seoUrl: "commercial-hot-water-kettle-10-liter.html",
    category: "vending",
    subCategory: "kettle",
    brand: "CAFE RICH / ALINZA",
    tagline: "Digital Temperature Controller | 10 Liter Large Capacity | Food-Grade Stainless Steel",
    image: "image/Kettle_10L.png",
    gallery: [
      "image/Kettle_10L.png"
    ],
    badge: "Heavy Duty Commercial",
    specs: {
      "Product Type": "Digital Hot Water Kettle / Commercial Beverage Boiler",
      "Brand": "Cafe Rich / ALINZA",
      "Capacity": "10 Liters Large Commercial Capacity",
      "Body Material": "Food-Grade Rust-Resistant Stainless Steel",
      "Control System": "Fully Digital Microprocessor Temperature Controller",
      "Temperature Range": "Adjustable Digital Temperature Control",
      "Display": "Digital LED Temperature Display",
      "Heating Type": "Heavy Duty Electric Heating Element",
      "Power Supply": "220V–240V AC, 50Hz",
      "Usage": "Hot Water, Tea, Coffee, Milk & Other Hot Beverages",
      "Dispensing Type": "Commercial Stainless Steel Tap Dispensing",
      "Installation": "Plug & Play (Quick Setup)",
      "Application": "Offices, Cafes, Restaurants, Hotels & Catering"
    },
    shortDesc: "A multi-purpose 10-liter digital hot water kettle and boiler built with food-grade stainless steel and intelligent LED digital temperature control.",
    description: "The ALINZA / CAFE RICH Multi-Purpose Hot Water Kettle (10 Liter) is engineered for commercial demands. Featuring a robust food-grade stainless steel body, an advanced digital LED temperature controller, and a durable tap dispensing system, this boiler is ideal for boiling water, tea, coffee, and milk with precision temperature holding.",
    features: [
      "10 Liter Large Capacity – Suitable for continuous high-demand hot water and beverage requirements",
      "Fully Digital Temperature Control – Accurately set and hold desired temperature",
      "Multi-Function Programming – Custom settings for tea, coffee, milk, or pure boiling water",
      "Hot Water Dispensing Tap – Quick and smooth dispensing without spillage",
      "Food-Grade Stainless Steel Body – Durable, rust-resistant, and hygienic interior",
      "Energy Efficient Heating Element – Fast thermal ramp-up with optimized power consumption",
      "LED Digital Display – Clear real-time monitoring of current and target temperature",
      "Keep Warm Function & Overheat Protection – Advanced safety controls",
      "Heavy-Duty Commercial Design – Built for Mumbai, Thane, and Navi Mumbai restaurants, corporate pantries, and banquets"
    ],
    applications: [
      "Tea & Coffee Shops / Tapris",
      "Corporate Offices & Pantries",
      "Cafes & Commercial Restaurants",
      "Hotels, Banquets & Catering Services",
      "Hospitals, Waiting Lounges & Canteens"
    ],
    taglineQuote: "ALINZA / CAFE RICH Digital Hot Water Kettle – Smart Heating, Perfect Temperature, Every Time.",
    targetAreas: "Mumbai, Thane, Navi Mumbai & PAN India"
  },
  {
    id: "bean-to-cup-espresso-machine",
    name: "Bean to Cup Automatic Espresso Coffee Machine",
    seoUrl: "bean-to-cup-automatic-espresso-machine.html",
    category: "vending",
    subCategory: "espresso-machine",
    brand: "ALINZA / CAFE RICH",
    tagline: "Fresh Bean Grinding | Up to 8 Beverage Selections | Digital Microprocessor Control",
    image: "image/B2C_Alinza_.png",
    gallery: [
      "image/B2C_Alinza_.png"
    ],
    badge: "Flagship Luxury Coffee",
    specs: {
      "Brewing Technology": "Fresh Bean-to-Cup Grinding & High Pressure Brewing",
      "Beverage Selections": "Up to 8 Beverage Options at One Touch",
      "Beverages": "Espresso, Café Latte, Cappuccino, Black Coffee, Tea, Extra Strong Coffee, Hot Milk, Hot Water",
      "Grinder": "Integrated Precision Conical Burr Coffee Grinder",
      "Control": "Advanced Electronic Digital Microprocessor System",
      "Operation": "One-Touch Push Button Touchpad Interface",
      "Milk Support": "Compatible with external fresh milk supply system for Latte/Cappuccino",
      "Extraction": "Professional Barista-Grade Espresso Extraction with Rich Crema",
      "Maintenance": "Removable drip tray and accessible brewing components for easy daily cleaning",
      "Power": "Energy-efficient commercial smart heating system"
    },
    shortDesc: "A premium commercial coffee solution that grinds fresh coffee beans for every cup, ensuring superior aroma, rich crema, and café-style beverages at the touch of a button.",
    description: "The ALINZA / CAFE RICH Bean to Cup Automatic Espresso Coffee Machine is a premium commercial coffee solution designed for modern offices, executive lounges, cafés, hotels, restaurants, corporate pantries, and hospitality establishments in Mumbai, Thane, and Navi Mumbai. The machine grinds fresh roasted coffee beans for each cup individually, delivering genuine café-style Espresso, Cappuccino, and Latte with authentic crema and rich aroma.",
    features: [
      "Fresh Bean to Cup Brewing – Freshly grounds beans on demand for every single cup",
      "Up to 8 Beverage Options – Espresso, Latte, Cappuccino, Black Coffee, Tea, Hot Milk, Hot Water & Extra Strong Coffee",
      "Automatic Grinding System – Built-in precision grinder ensures optimal particle size and flavor extraction",
      "Digital Microprocessor Control – Precise thermal regulation and water pressure profiling",
      "One-Touch Push-Button Operation – Instant dispensing without requiring skilled baristas",
      "Adjustable Coffee Strength & Volume – Custom profiles to match workplace taste preferences",
      "Compatible with Fresh Milk – Prepares rich froth for lattes and cappuccinos",
      "Energy Efficient Operation & Sleek Modern Commercial Aesthetic"
    ],
    applications: [
      "Corporate Head Offices & Executive Boardrooms",
      "Luxury Hotels, Resorts & Hospitality Suites",
      "Cafés, Quick Service Restaurants (QSR) & Bistros",
      "Hospitals, High-end Clinics & Premium Retail Showrooms",
      "Business Centers & Co-working Spaces across BKC, Lower Parel, Thane & Navi Mumbai"
    ],
    taglineQuote: "Fresh Beans. Rich Aroma. Perfect Coffee Every Time. ☕",
    targetAreas: "Mumbai, Thane, Navi Mumbai & PAN India"
  },
  {
    id: "vending-machine-4-option",
    name: "Digital Fully Automatic 4 Option + Hot Water Vending Machine",
    seoUrl: "tea-coffee-vending-machine-4-option.html",
    category: "vending",
    subCategory: "vending-machine",
    brand: "ALINZA / CAFE RICH",
    tagline: "4 Beverage Selections + Hot Water | High-Power 2000W Heater | RFID & UPI Compatible",
    image: "image/IV opton Send.jpg",
    gallery: [
      "image/IV opton Send.jpg"
    ],
    badge: "High Capacity Office Choice",
    specs: {
      "Machine Type": "Digital Fully Automatic Premix Vending Machine",
      "Selections": "4 Beverage Options + 1 Dedicated Hot Water Option",
      "Compatible Premixes": "Tea, Coffee, Cardamom Tea, Masala Tea, Lemon Tea, Green Tea, Tomato Soup, Sweet Corn Soup",
      "Heater Capacity": "High-Power 2000W Heavy Duty Fast-Heating Element",
      "Water Supply": "20-Litre Bubble Top Water Storage Jar Compatible (No direct plumbing mandatory)",
      "Control System": "Microcontroller-Based Intelligent Control Card with Digital Display",
      "Dispensing Rate": "Continuous fast dispensing for peak office break hours",
      "Payment Integrations": "RFID Card compatible & UPI QR Code payment integration supported",
      "Dispensing System": "Closed hygienic premix canister system with auto-whipper",
      "Power Supply": "220V–240V AC, 50Hz Standard Indian Socket",
      "Maintenance": "Modular design for rapid cleaning and daily replenishment"
    },
    shortDesc: "High-performance 4-canister digital tea, coffee, and soup vending machine. Equipped with a 2000W heater, 20L water bottle support, and smart card / QR payment readiness.",
    description: "ALINZA / CAFE RICH presents a heavy-duty, fully automatic 4 Option + Hot Water Tea & Coffee Vending Machine. Built specifically for high-footfall environments like corporate towers, factories, IT hubs, hospitals, and educational campuses across Mumbai, Thane, and Navi Mumbai. Allows simultaneous loading of 4 premixes (e.g. Cardamom Chai, Masala Chai, Coffee, Lemon Tea/Soup) plus hot water.",
    features: [
      "Fully Automatic One-Touch Operation – Instant dispensing in 8 to 10 seconds",
      "4 Beverage Options + Hot Water – Serve 4 distinct beverages plus boiling water",
      "High-Power 2000W Heater – Instant thermal recovery and rapid back-to-back cup dispensing",
      "20-Litre Bubble Top Bottle Compatibility – Eliminates expensive plumbing constraints",
      "Intelligent Digital Control System – Programmable powder-to-water ratio for consistent taste",
      "RFID & QR Code Payment Ready – Supports cashless employee smart cards and UPI payments",
      "Advanced Premix Dispensing Whippers – Gives rich froth and uniform dissolution every time",
      "Closed Food-Grade Hygienic Enclosure – Prevents contamination and keeps ingredients fresh",
      "Sturdy Compact Powder-Coated Metal Cabinet – Long operational life under rigorous usage"
    ],
    applications: [
      "Corporate Offices & IT Parks (BKC, Powai, Airoli, Vashi, Goregaon)",
      "Manufacturing Units & Industrial Complexes (Thane, Turbhe, Rabale, Taloja)",
      "Multi-Speciality Hospitals & Clinics",
      "Colleges, Universities & Educational Institutes",
      "Commercial Cafeterias, Hotels & Canteens"
    ],
    taglineQuote: "ALINZA / CAFE RICH – Maximum Energy, Maximum Taste",
    targetAreas: "Mumbai, Thane, Navi Mumbai & PAN India"
  },
  {
    id: "vending-machine-3-option",
    name: "Digital Fully Automatic 3 Option + Hot Water Vending Machine",
    seoUrl: "tea-coffee-vending-machine-3-option.html",
    category: "vending",
    subCategory: "vending-machine",
    brand: "ALINZA / CAFE RICH",
    tagline: "3 Beverage Selections + Hot Water | 2000W Heater | 20L Bubble Top Compatible",
    image: "image/III option send.jpg",
    gallery: [
      "image/III option send.jpg"
    ],
    badge: "Popular Commercial Model",
    specs: {
      "Machine Type": "Digital Fully Automatic Premix Vending Machine",
      "Selections": "3 Beverage Options + Dedicated Hot Water Option",
      "Compatible Premixes": "Tea, Coffee, Cardamom Tea, Masala Tea, Lemon Tea, Green Tea, Tomato Soup, Hot Chocolate",
      "Heater Capacity": "High-Power 2000W Heater for continuous service",
      "Water Supply": "20-Litre Bubble Top Water Jar mounting",
      "Control System": "Microcontroller-based intelligent digital control card",
      "Smart Integrations": "RFID Card & UPI QR Code payment compatible",
      "Enclosure": "Compact, durable powder-coated steel body with safety interlocks",
      "Dispensing Consistency": "Electronically calibrated powder and water measurement",
      "Power": "220V AC, 50Hz"
    },
    shortDesc: "The ideal 3-canister commercial vending machine for medium-to-large offices and clinics. Offers three hot beverages plus dedicated hot water.",
    description: "The ALINZA / CAFE RICH 3 Option + Hot Water Vending Machine is the most popular choice for modern workspaces, offering the quintessential trio of Tea, Coffee, and Specialty beverage (Lemon Tea, Ginger Chai, or Soup) alongside pure hot water for tea bags or instant noodles.",
    features: [
      "Fully Automatic Single-Touch Operation",
      "3 Beverage Selections + Hot Water Facility",
      "2000W High Efficiency Heater for lightning quick heating",
      "Direct 20-Litre Bubble Top Mounting on top of machine",
      "Microcontroller calibration ensures zero variation in cup taste",
      "RFID card reader & UPI payment integration support",
      "Hygienic enclosed dispensing chamber",
      "Easy maintenance, quick canister refilling and cleaning"
    ],
    applications: [
      "Corporate Pantries & Mid-sized Offices (20-100 staff)",
      "Hospital OPDs, Patient Lounges & Diagnostic Centers",
      "Automobile Showrooms & Customer Lounges",
      "Hotels, Guest Houses & Breakfast Counters"
    ],
    taglineQuote: "ALINZA / CAFE RICH – Maximum Energy, Maximum Taste",
    targetAreas: "Mumbai, Thane, Navi Mumbai & PAN India"
  },
  {
    id: "vending-machine-2-option",
    name: "Digital Fully Automatic 2 Option + Hot Water Vending Machine",
    seoUrl: "tea-coffee-vending-machine-2-option.html",
    category: "vending",
    subCategory: "vending-machine",
    brand: "ALINZA / CAFE RICH",
    tagline: "2 Beverage Selections (Tea & Coffee) + Hot Water | Compact & Cost-Effective",
    image: "image/II option send.jpg",
    gallery: [
      "image/II option send.jpg"
    ],
    badge: "Compact & Economical",
    specs: {
      "Machine Type": "Digital Fully Automatic 2-Canister Premix Vending Machine",
      "Selections": "2 Beverage Options (e.g. Tea & Coffee) + Dedicated Hot Water",
      "Compatible Premixes": "Tea & Coffee Premixes, Cardamom Chai, Lemon Tea, etc.",
      "Heater Capacity": "2000W Fast-Heating Commercial Element",
      "Water Supply": "20-Litre Bubble Top Jar",
      "Control Card": "Intelligent Microcontroller Unit with Front Status LEDs",
      "Payment Readiness": "RFID Employee Card & QR Code compatible",
      "Dimensions": "Sleek footprint fitting compact pantry counter tops",
      "Power Supply": "220V–240V AC, 50Hz"
    },
    shortDesc: "Compact 2-option automatic vending machine tailored for small-to-medium offices, retail boutiques, and doctor clinics wanting fresh tea and coffee with zero hassle.",
    description: "Designed for space-conscious offices, small business units, retail shops, and clinics across Mumbai, Thane, and Navi Mumbai. The ALINZA / CAFE RICH 2 Option machine dispenses delicious Chai and Coffee at the push of a button with minimal maintenance and zero milk-spoilage hassles.",
    features: [
      "Simple, Reliable One-Touch Dispensing for 2 selections + Hot Water",
      "Compact Space-Saving Footprint",
      "Powerful 2000W Heater for continuous hot cups",
      "20-Liter Standard Water Bottle Mount",
      "Uniform taste and creamy texture every time",
      "Hygienic, spill-free, and easy to clean daily",
      "Low power consumption and maximum operating economy"
    ],
    applications: [
      "Small to Mid Offices & Startups (10-40 employees)",
      "Doctor Clinics & Pathology Labs",
      "Retail Stores, Boutiques & Real Estate Offices",
      "Workshop & Site Offices across Thane & Navi Mumbai"
    ],
    taglineQuote: "ALINZA / CAFE RICH – Maximum Energy, Maximum Taste",
    targetAreas: "Mumbai, Thane, Navi Mumbai & PAN India"
  }
];

// Helper functions for easy access
function getProductById(id) {
  return productsData.find(p => p.id === id);
}

function getProductsByCategory(category) {
  if (!category || category === "all") return productsData;
  return productsData.filter(p => p.category === category);
}

// Generate direct WhatsApp link for any product or general query
function getWhatsAppLink(productName, customQuery) {
  const phone = "919320066767";
  let message = "";
  if (productName) {
    message = `Hello Espresso Tech Vending Solution, I am interested in inquiring about "${productName}". Please share pricing and availability details.`;
  } else if (customQuery) {
    message = `Hello Espresso Tech Vending Solution, ${customQuery}`;
  } else {
    message = "Hello Espresso Tech Vending Solution, I would like to inquire about your Tea/Coffee premixes and vending machines.";
  }
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
