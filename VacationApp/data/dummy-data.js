import Country from "../models/country";
import Destination from "../models/destination";

export const COUNTRIES = [
  new Country("c1", "USA", "#f5428d"),
  new Country("c2", "France", "#f54242"),
  new Country("c3", "Japan", "#f5a442"),
  new Country("c4", "Italy", "#f5d142"),
  new Country("c5", "Brazil", "#368dff"),
  new Country("c6", "Canada", "#41d95d"),
  new Country("c7", "Australia", "#9eecff"),
  new Country("c8", "Germany", "#b9ffb0"),
  new Country("c9", "Spain", "#ffc7ff"),
  new Country("c10", "Greece", "#47fced"),
];

export const DESTINATIONS = [

  // USA
  new Destination("d1", "c1", "New York City", 2200, 1624, 4.8,
    "The Big Apple, known for Times Square and Central Park.",
    "https://i.natgeofe.com/k/5b396b5e-59e7-43a6-9448-708125549aa1/new-york-statue-of-liberty.jpg"),

  new Destination("d2", "c1", "Los Angeles", 2000, 1781, 4.6,
    "Famous for Hollywood and sunny beaches.",
    "https://res.klook.com/image/upload/fl_lossy.progressive,q_60/v1755071475/destination/zkmjal6ohhft1cdmvnni.jpg"),

  new Destination("d3", "c1", "Las Vegas", 1800, 1905, 4.5,
    "Entertainment capital with casinos and nightlife.",
    "https://www.readyforboardingblog.com/wp-content/uploads/2025/08/las-vegas-nevada-usa-20-202502-readyforboarding_pl.jpg"),


  // France
  new Destination("d4", "c2", "Paris", 2300, 508, 4.9,
    "City of Light, home of the Eiffel Tower.",
    "https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/bltfbb238bc19bcccc5/65afe0ca9b1ffef007e0f50d/BCC-2023-EXPLORER-MAGAZINE_UPDATES-PARIS_FACTS-HEADER_Mobile.jpg?fit=crop&disable=upscale&auto=webp&quality=60&crop=smart"),

  new Destination("d5", "c2", "Nice", 1900, 350, 4.5,
    "Beautiful beaches on the French Riviera.",
    "https://media.cntravellerme.com/photos/6867b3bfa32522272f28b960/4:3/w_2744,h_2058,c_limit/062325-Nice-France-Lede-GettyImages-1248448159_1.jpg"),

  new Destination("d6", "c2", "Lyon", 1700, 43, 4.4,
    "Historic city known for cuisine and culture.",
    "https://www.leshuttle.com/media-library/media/leshuttle/articles/france/lyon/4-architectural-houses-along-the-saone-riverbank.jpeg?width=1536&height=824&rmode=crop&format=webp&quality=60&v=202503281330"),


  // Japan
  new Destination("d7", "c3", "Tokyo", 2400, 1603, 4.9,
    "A bustling metropolis blending tradition and technology.",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/03/b5/9b/tokyo-tower.jpg?w=900&h=-1&s=1"),

  new Destination("d8", "c3", "Kyoto", 2000, 794, 4.8,
    "Famous for temples, shrines, and cherry blossoms.",
    "https://www.touristjapan.com/wp-content/uploads/2025/01/map-of-kyoto-japan-travel-1024x683.jpg"),

  new Destination("d9", "c3", "Osaka", 1900, 1889, 4.6,
    "Known for street food and nightlife.",
    "https://photos.smugmug.com/Osaka/Osaka-Travel-Guide/i-4mhQ4s9/0/L/must-see-osaka-1-day-itinerary-osaka-dotombori-canal-L.jpg"),


  // Italy
  new Destination("d10", "c4", "Rome", 2100, -753, 4.9,
    "Historic capital with the Colosseum.",
    "https://tourismmedia.italia.it/is/image/mitur/20220127150143-colosseo-roma-lazio-shutterstock-756032350-1?wid=1600&hei=900&fit=constrain,1&fmt=webp"),

  new Destination("d11", "c4", "Venice", 2200, 421, 4.8,
    "Famous canals and gondolas.",
    "https://thattravelista.com/wp-content/uploads/2020/07/Italy-Venice-217.jpg"),

  new Destination("d12", "c4", "Florence", 2000, 59, 4.7,
    "Birthplace of the Renaissance.",
    "https://tourismmedia.italia.it/is/image/mitur/20210401173629-firenze-toscana-gettyimages-1145040590-2?wid=1600&hei=900&fit=constrain,1&fmt=webp"),


  // Brazil
  new Destination("d13", "c5", "Rio de Janeiro", 1800, 1565, 4.8,
    "Home of Christ the Redeemer and beaches.",
    "https://www.ytravelblog.com/wp-content/uploads/2022/09/christ-the-redeemer-rio-de-janeiro.jpg"),

  new Destination("d14", "c5", "São Paulo", 1700, 1554, 4.5,
    "Largest city in Brazil with vibrant culture.",
    "https://cdn.britannica.com/19/115519-050-D2B15CF0/view-Sao-Paulo.jpg"),

  new Destination("d15", "c5", "Salvador", 1600, 1549, 4.6,
    "Historic coastal city with colorful buildings.",
    "https://media.worldnomads.com/explore/brazil/pelourinho-salvador-brazil-istock-filipefrazao.jpg"),


  // Canada
  new Destination("d16", "c6", "Toronto", 1900, 1793, 4.7,
    "Modern city with CN Tower.",
    "https://static.independent.co.uk/2024/10/14/16/10029_CrothersWoods_RTO5-OntarioByBikeCycling-Shoot_Sept2022-Retouched_IMG_103-large.jpg"),

  new Destination("d17", "c6", "Vancouver", 2000, 1886, 4.8,
    "Coastal city with mountains and nature.",
    "https://ca-times.brightspotcdn.com/dims4/default/cf6d1ed/2147483647/strip/true/crop/1366x683+0+0/resize/1200x600!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F45%2F0a%2Ff7b7ae7444debbc2d4fd312b21bc%2Fvancouver-skyline.jpg"),

  new Destination("d18", "c6", "Montreal", 1800, 1642, 4.6,
    "French-speaking city with rich culture.",
    "https://s1.it.atcdn.net/wp-content/uploads/2018/02/46190-Credit-FR-%C2%A9-Eva-Blue-Tourisme-Montreal-EN-Credit-%C2%A9-Eva-Blue-Tourisme-Montreal.jpg"),


  // Australia
  new Destination("d19", "c7", "Sydney", 2200, 1788, 4.9,
    "Famous for Opera House and Harbour Bridge.",
    "https://www.downunderendeavours.com/wp-content/uploads/2019/05/sydney-things-to-do-800x500-Sydney-Opera-House-8.jpg"),

  new Destination("d20", "c7", "Melbourne", 2000, 1835, 4.7,
    "Known for arts and coffee culture.",
    "https://upload.wikimedia.org/wikipedia/commons/7/74/Melbourne_skyline_sor.jpg"),

  new Destination("d21", "c7", "Brisbane", 1900, 1825, 4.5,
    "Warm climate and outdoor lifestyle.",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/d5/22/ca/brisbane-sign.jpg?w=1200&h=-1&s=1"),


  // Germany
  new Destination("d22", "c8", "Berlin", 1800, 1237, 4.7,
    "Capital with rich history and nightlife.",
    "https://cdn.prod.website-files.com/63b7026306af943f8e01771f/686d3013da520454c9c6da37_682f31a5c7de1f19b5546534_Viagem%2520para%2520Berlim.webp"),

  new Destination("d23", "c8", "Munich", 1900, 1158, 4.8,
    "Home of Oktoberfest.",
    "https://images.trvl-media.com/place/508534/3fd219ce-b6f4-4c8a-b862-cf0153fe5f12.jpg"),

  new Destination("d24", "c8", "Hamburg", 1700, 808, 4.5,
    "Major port city with canals.",
    "https://www.smartluxury.com/_next/image?url=https%3A%2F%2Fstweb-cdn.shermanstravel.com%2Fgettyimages-1607743055.jpg&w=1440&q=75"),


  // Spain
  new Destination("d25", "c9", "Barcelona", 2100, 15, 4.9,
    "Known for Gaudí architecture.",
    "https://www.royalcaribbean.com/media-assets/pmc/content/dam/shore-x/barcelona-bcn/br05-barcelona-city-and-city-center-transfer/stock-photo-view-of-barcelona-from-the-park-at-sunrise-734963035.jpg?w=1920"),

  new Destination("d26", "c9", "Madrid", 2000, 860, 4.7,
    "Spain’s capital with royal palaces.",
    "https://idsb.tmgrup.com.tr/ly/uploads/images/2024/12/22/360455.jpg"),

  new Destination("d27", "c9", "Seville", 1800, 712, 4.6,
    "Famous for flamenco dancing.",
    "https://v9q2n5w7.delivery.rocketcdn.me/wp-content/uploads/2022/04/seville.jpg"),


  // Greece
  new Destination("d28", "c10", "Santorini", 2300, 1500, 4.9,
    "Iconic white buildings and sunsets.",
    "https://media.cntraveller.com/photos/611be9bb69410e829d87e0c2/16:9/w_2560%2Cc_limit/Blue-domed-church-along-caldera-edge-in-Oia-Santorini-greece-conde-nast-traveller-11aug17-iStock.jpg"),

  new Destination("d29", "c10", "Athens", 2000, -3000, 4.7,
    "Ancient city with the Acropolis.",
    "https://cdn.britannica.com/66/102266-050-FBDEFCA1/acropolis-city-state-Greece-Athens.jpg"),

  new Destination("d30", "c10", "Mykonos", 2200, 1000, 4.8,
    "Famous island for beaches and nightlife.",
    "https://www.civitatis.com/f/grecia/mykonos/crucero-sur-mykonos-589x392.jpg"),
];