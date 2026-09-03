export interface ProjectBlock {
  id?: string;
  type?: string;
  caption?: string;
  image?: {
    url: string;
    alt?: string;
    width?: number;
    height?: number;
  };
  video?: {
    url: string;
  };
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  meta: string;
  featured: boolean;
  device: string;
  featuredImage: string;
  colors: {
    primary?: string;
    secondary?: string;
    tertiary?: string;
  };
  client: string;
  year: string;
  roles: string[];
  copy: string;
  content: ProjectBlock[];
  url?: string;
  typeOfProject?: string[];
}

export const BUTTERMAX_HERO = {
  titleLines: ["The Gold", "Standard", "In Buttery"],
  subtitleLines: ["Smooth Digital", "Production"],
  tagline: "We melt for lovingly crafted design, motion and technology.",
  ctaText: "Explore Selected Works",
  contactHeading: "Let's create something buttery smooth together.",
  stats: [
    { label: "Awwwards Won", value: "32+" },
    { label: "Global Clients", value: "50+" },
    { label: "FWA of the Day", value: "18+" },
    { label: "Butter Level", value: "100%" }
  ]
};

export const BUTTERMAX_PROJECTS: Project[] = [
  {
    "id": "6646b97ec1721c08a6f57f2a",
    "title": "Spotify 2023 Wrapped",
    "slug": "2023wrapped",
    "meta": "Infused with vibrant energy, 2023 Wrapped takes a playful twist on data viz. Made in collab with Spotify\u2019s in-house creative team.",
    "featured": true,
    "device": "desktop",
    "featuredImage": "https://storage.googleapis.com/bx-site-cms/media/Frame 1191.png",
    "colors": {
      "primary": "#FF5B49",
      "secondary": "#000000",
      "tertiary": "#ffffff"
    },
    "client": "Spotify",
    "year": "2023",
    "roles": [
      "Design",
      "Development",
      "WebGL",
      "Creative Direction"
    ],
    "copy": "For the 7th year in a row, we teamed up with Spotify\u2019s in-house creative team to celebrate the creators that power the platform. Artists, songwriters, and podcasters are invited to explore a series of bespoke, immersive data stories breaking down their biggest milestones. Infused with vibrant energy, 2023 Wrapped brings a playful twist to data visualization.",
    "content": [
      {
        "id": "6646b72bb5556d756f591a37",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/mobile1.jpg",
          "alt": "loader view",
          "width": 375,
          "height": 650
        }
      },
      {
        "id": "6646b7fab5556d756f591a38",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/desktop1.jpg",
          "alt": "landing view",
          "width": 1154,
          "height": 650
        }
      },
      {
        "id": "6646b813b5556d756f591a39",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/mobile2.jpg",
          "alt": "time spent listening view",
          "width": 375,
          "height": 650
        }
      },
      {
        "id": "6646b83ab5556d756f591a3a",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/desktop2.jpg",
          "alt": "saved songs view",
          "width": 1154,
          "height": 650
        }
      },
      {
        "id": "6646b84cb5556d756f591a3b",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/desktop3.jpg",
          "alt": "listened times view",
          "width": 1154,
          "height": 650
        }
      },
      {
        "id": "6646b88cb5556d756f591a3c",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/desktop4.jpg",
          "alt": "cursor view",
          "width": 1154,
          "height": 650
        }
      },
      {
        "id": "6646b898b5556d756f591a3d",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/mobile3.jpg",
          "alt": "streams view",
          "width": 376,
          "height": 650
        }
      },
      {
        "id": "6646b917b5556d756f591a3e",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/desktop5-1.jpg",
          "alt": "countries view",
          "width": 1154,
          "height": 651
        }
      },
      {
        "id": "6646b933b5556d756f591a3f",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/desktop6-1.jpg",
          "alt": "pie chart",
          "width": 1154,
          "height": 651
        }
      },
      {
        "id": "6646b942b5556d756f591a40",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/desktop7.jpg",
          "alt": "saves percentages view",
          "width": 1154,
          "height": 651
        }
      },
      {
        "id": "6646b94db5556d756f591a41",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/desktop8.jpg",
          "alt": "seen so many times view",
          "width": 1154,
          "height": 650
        }
      },
      {
        "id": "6646b95db5556d756f591a42",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/desktop9.jpg",
          "alt": "the 0.001% fans view",
          "width": 1154,
          "height": 650
        }
      },
      {
        "id": "6646b96bb5556d756f591a43",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/mobile4.jpg",
          "alt": "share view",
          "width": 375,
          "height": 650
        }
      }
    ],
    "url": "",
    "typeOfProject": [
      "Digital Experience",
      "WebGL"
    ]
  },
  {
    "id": "65ae9423a451e5814b0f44d3",
    "title": "Patreon.com",
    "slug": "patreon-website-redesign",
    "meta": "Patreon helps people around the globe turn their online passion into a full-time career",
    "featured": true,
    "device": "desktop",
    "featuredImage": "https://storage.googleapis.com/bx-site-cms/media/HP1_Module1_2-1.png",
    "colors": {
      "primary": "#B7FF95",
      "secondary": "#5259FF",
      "tertiary": "#000000"
    },
    "client": "Patreon",
    "year": "2023",
    "roles": [
      "Design",
      "Development",
      "WebGL",
      "Creative Direction"
    ],
    "copy": "The digital world is changing fast, and more and more folks around the globe are turning their online passion into a full-time career. Buttermax teamed up with Patreon to give their website a new look, but also to show off all the smart new app features built specifically for creators, making them feel right at home.\n\nPatreon is all about celebrating its creators and making sure they feel appreciated and heard when they\u2019re exploring the site. We've accomplished this by using vibrant, full-bleed imagery, interactions inspired by creators, and non-conforming typographic layouts.",
    "content": [
      {
        "id": "65ae954ed95a3bc7e6641e91",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/HP1_Module1_2-1.png",
          "alt": "Patreon.com",
          "width": 2328,
          "height": 1376
        }
      },
      {
        "id": "65ae95fcd95a3bc7e6641e92",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/image 2800-tiny.png",
          "alt": "Patreon.com",
          "width": 330,
          "height": 650
        }
      },
      {
        "id": "65ae9619d95a3bc7e6641e93",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/Frame 215347425-1.png",
          "alt": "Patreon.com",
          "width": 2328,
          "height": 1376
        }
      },
      {
        "id": "65ae962dd95a3bc7e6641e94",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/HP1_Module2_3-1.png",
          "alt": "Patreon.com",
          "width": 2328,
          "height": 1376
        }
      },
      {
        "id": "65ae9651d95a3bc7e6641e95",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/image 281-resized.png",
          "alt": "Patreon.com",
          "width": 334,
          "height": 579
        }
      },
      {
        "id": "65ae9663d95a3bc7e6641e96",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/Frame 215347426.png",
          "alt": "Patreon.com",
          "width": 2328,
          "height": 1376
        }
      },
      {
        "id": "65ae9671d95a3bc7e6641e97",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/Scroll V1-1.png",
          "alt": "Patreon.com",
          "width": 2328,
          "height": 1376
        }
      },
      {
        "id": "65ae9690d95a3bc7e6641e98",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/image 281-resize.png",
          "alt": "Patreon.com",
          "width": 660,
          "height": 1144
        }
      }
    ],
    "url": "https://www.patreon.com/",
    "typeOfProject": [
      "Digital Experience",
      "WebGL"
    ]
  },
  {
    "id": "64ee5773ad8cbde0317a8e9b",
    "title": "GDK.com",
    "slug": "gdk",
    "meta": "German Doner Kebab: Spinning tradition into the future with a tasteful twist. Explore GDK.com\u2019s WebGL wonderland, serving up delectable kebabs with animated flair. Get a taste of what\u2019s to come, even if there\u2019s no GDK near you!",
    "featured": true,
    "device": "desktop",
    "featuredImage": "https://storage.googleapis.com/bx-site-cms/media/GDK_BXCaseStudy_007.jpg",
    "colors": {
      "primary": "#FF6600",
      "secondary": "#000000",
      "tertiary": "#FFFFFF"
    },
    "client": "GDK",
    "year": "2023",
    "roles": [
      "Design",
      "Development",
      "WebGL",
      "Creative Direction"
    ],
    "copy": "Humankind has been cooking meat on a rotating stick for hundreds of thousands of years. But if anyone can bring this age-old practice into the future, it\u2019s German Doner Kebab. They just needed our help making a website for it.\n<br /><br />\nBuilt with WebGL and plenty of animated UI, visitors to the new GDK.com scroll through the streets of a stylized London and land at a counter ready to serve up some delicious kebab. We\u2019ve even included some to-go boxes for diners on the go.\n<br /><br />\nGDK might not have a location in your city yet, but this site will take you so close you can almost taste it.",
    "content": [
      {
        "id": "6509cb9a72eda1961924c1d5",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/GDK_BXCaseStudy_001.jpg",
          "alt": "GDK.com",
          "width": 3840,
          "height": 2160
        }
      },
      {
        "id": "6509cba672eda1961924c1d6",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/GDK_BXCaseStudy_002.jpg",
          "alt": "GDK.com",
          "width": 3840,
          "height": 2160
        }
      },
      {
        "id": "6509cba972eda1961924c1d7",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/GDK_BXCaseStudy_003.jpg",
          "alt": "GDK.com",
          "width": 3840,
          "height": 2160
        }
      },
      {
        "id": "6509cbac72eda1961924c1d8",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/GDK_BXCaseStudy_004.jpg",
          "alt": "GDK.com",
          "width": 3840,
          "height": 2160
        }
      },
      {
        "id": "6509cbae72eda1961924c1d9",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/GDK_BXCaseStudy_005.jpg",
          "alt": "GDK.com",
          "width": 3840,
          "height": 2160
        }
      },
      {
        "id": "6509cbb172eda1961924c1da",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/GDK_BXCaseStudy_006.jpg",
          "alt": "GDK.com",
          "width": 3840,
          "height": 2160
        }
      },
      {
        "id": "6509cbb472eda1961924c1db",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/GDK_BXCaseStudy_007.jpg",
          "alt": "GDK.com",
          "width": 3840,
          "height": 2160
        }
      },
      {
        "id": "6509cbb672eda1961924c1dc",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/GDK_BXCaseStudy_008.png",
          "alt": "GDK.com",
          "width": 1166,
          "height": 656
        }
      },
      {
        "id": "6509cbb972eda1961924c1dd",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/GDK_BXCaseStudy_009.jpg",
          "alt": "GDK.com",
          "width": 3840,
          "height": 2160
        }
      },
      {
        "id": "6509cbbf72eda1961924c1de",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/GDK_BXCaseStudy_010.jpg",
          "alt": "GDK.com",
          "width": 3840,
          "height": 2160
        }
      }
    ],
    "url": "",
    "typeOfProject": [
      "Digital Experience",
      "WebGL"
    ]
  },
  {
    "id": "64c394df6d4c0b5333a881b1",
    "title": "Spotify Rap UK",
    "slug": "spotify-rapuk",
    "meta": "Spotify\u2019s Day 1 Club: Uniting fans and artists, driving social buzz, and amplifying Hip-Hop\u2019s heart. Discover the fan-first journey.",
    "featured": true,
    "device": "desktop",
    "featuredImage": "https://storage.googleapis.com/bx-site-cms/media/RapUK_BXCaseStudy_006.jpg",
    "colors": {
      "primary": "#101010",
      "secondary": "#00B764",
      "tertiary": "#FFFFFF"
    },
    "client": "Spotify",
    "year": "2022",
    "roles": [
      "Design",
      "Development",
      "WebGL",
      "Creative Direction"
    ],
    "copy": "Spotify\u2019s Day 1 Club interactive experience allows listeners to prove which artists they\u2019ve been supporting since day one, introducing a unique fan-first experience that connects artists and fans, drives buzz on social media, engages the community and amplifies Spotify as the ultimate destination for fans of Hip-Hop and Rap.",
    "content": [
      {
        "id": "6509bcb98041740c0c03ba59",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/RapUK_BXCaseStudy_001.jpg",
          "alt": "Spotify Rap UK",
          "width": 3840,
          "height": 2160
        }
      },
      {
        "id": "6509bcbe8041740c0c03ba5a",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/RapUK_BXCaseStudy_002.jpg",
          "alt": "Spotify Rap UK",
          "width": 1179,
          "height": 1993
        }
      },
      {
        "id": "6509bcc38041740c0c03ba5b",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/RapUK_BXCaseStudy_003.jpg",
          "alt": "Spotify Rap UK",
          "width": 3840,
          "height": 2160
        }
      },
      {
        "id": "6509bcca8041740c0c03ba5c",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/RapUK_BXCaseStudy_004.jpg",
          "alt": "Spotify Rap UK",
          "width": 1179,
          "height": 1993
        }
      },
      {
        "id": "6509bce28041740c0c03ba5d",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/RapUK_BXCaseStudy_005.jpg",
          "alt": "Spotify Rap UK",
          "width": 3840,
          "height": 2160
        }
      },
      {
        "id": "6509bce88041740c0c03ba5e",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/RapUK_BXCaseStudy_006.jpg",
          "alt": "Spotify Rap UK",
          "width": 3840,
          "height": 2160
        }
      },
      {
        "id": "6509bceb8041740c0c03ba5f",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/RapUK_BXCaseStudy_007.jpg",
          "alt": "Spotify Rap UK",
          "width": 1179,
          "height": 1993
        }
      },
      {
        "id": "6509bcf18041740c0c03ba60",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/RapUK_BXCaseStudy_008.jpg",
          "alt": "Spotify Rap UK",
          "width": 3840,
          "height": 2160
        }
      },
      {
        "id": "6509bd008041740c0c03ba61",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/RapUK_BXCaseStudy_009.jpg",
          "alt": "Spotify Rap UK",
          "width": 3840,
          "height": 2160
        }
      },
      {
        "id": "6509bd038041740c0c03ba62",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/RapUK_BXCaseStudy_010.jpg",
          "alt": "Spotify Rap UK",
          "width": 1179,
          "height": 1993
        }
      },
      {
        "id": "6509bd0b8041740c0c03ba63",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/RapUK_BXCaseStudy_011.jpg",
          "alt": "Spotify Rap UK",
          "width": 3840,
          "height": 2160
        }
      }
    ],
    "url": "https://day1club-uk.byspotify.com/",
    "typeOfProject": [
      "Digital Experience",
      "WebGL"
    ]
  },
  {
    "id": "64ba7ee5c7619810e7414e2f",
    "title": "Dreamwave 2.0",
    "slug": "dreamwave",
    "meta": "Buttermax crafted Dreamwave\u2019s web presence for immersive 3D experiences. Explore Dreamwave's real-time webxr product through the carefully crafted dreamwave.tech website.",
    "featured": true,
    "device": "tablet",
    "featuredImage": "https://storage.googleapis.com/bx-site-cms/media/Dreamwave_BXCaseStudy_002.jpg",
    "colors": {
      "primary": "#d4b4ed",
      "secondary": "#8A43FF",
      "tertiary": "#70547a"
    },
    "client": "Dreamwave",
    "year": "2022",
    "roles": [
      "Design",
      "Development",
      "WebGL",
      "Creative Direction"
    ],
    "copy": "Dreamwave is Active Theory\u2019s in-house technology solution for building immersive 3D experiences, from concerts to conferences. But who do the website people come to when they need a website for their website platform? Buttermax, of course.\n<br /><br />\nWorking with Dreamwave strategy and product leads, we built a site to outline the product features through a clean UI and fun microinteractions and animations powered by WebGL. There\u2019s a custom CMS under the hood too, so the Dreamwave team can keep everything up to date as they continue to innovate in the world of microverses, metaverses, or whatever the next -verse is.",
    "content": [
      {
        "id": "6509befd8041740c0c03ba64",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/Dreamwave_BXCaseStudy_001.jpg",
          "alt": "Dreamwave 2.0",
          "width": 3840,
          "height": 2160
        }
      },
      {
        "id": "6509bf068041740c0c03ba65",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/Dreamwave_BXCaseStudy_002.jpg",
          "alt": "Dreamwave 2.0",
          "width": 3840,
          "height": 2160
        }
      },
      {
        "id": "6509bf098041740c0c03ba66",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/Dreamwave_BXCaseStudy_003.jpg",
          "alt": "Dreamwave 2.0",
          "width": 3840,
          "height": 2160
        }
      },
      {
        "id": "6509bf0d8041740c0c03ba67",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/Dreamwave_BXCaseStudy_004.jpg",
          "alt": "Dreamwave 2.0",
          "width": 1179,
          "height": 1993
        }
      },
      {
        "id": "6509bf118041740c0c03ba68",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/Dreamwave_BXCaseStudy_005.jpg",
          "alt": "Dreamwave 2.0",
          "width": 3840,
          "height": 2160
        }
      },
      {
        "id": "6509bf148041740c0c03ba69",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/Dreamwave_BXCaseStudy_006.jpg",
          "alt": "Dreamwave 2.0",
          "width": 1179,
          "height": 1993
        }
      },
      {
        "id": "6509bf1b8041740c0c03ba6a",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/Dreamwave_BXCaseStudy_007.jpg",
          "alt": "Dreamwave 2.0",
          "width": 3840,
          "height": 2160
        }
      }
    ],
    "url": "https://dreamwave.tech/",
    "typeOfProject": [
      "Digital Experience",
      "WebGL"
    ]
  },
  {
    "id": "64ba7ea9c7619810e7414dd1",
    "title": "Chrome Pit Crew",
    "slug": "chrome-pit-crew",
    "meta": "Chrome & McLaren F1's speed synergy: Pit Crew minigames. Test Chrome\u2019s power while fine-tuning your timing, speed, and balance.",
    "featured": true,
    "device": "gameboy",
    "featuredImage": "https://storage.googleapis.com/bx-site-cms/media/ChromePitCrew_BXCaseStudy_010.jpg",
    "colors": {
      "primary": "#FB7A01",
      "secondary": "#1C53C8",
      "tertiary": "#FFFFFF"
    },
    "client": "Google",
    "year": "2022",
    "roles": [
      "Design",
      "Development",
      "WebGL",
      "Creative Direction"
    ],
    "copy": "Google Chrome and McLaren F1\u2019s partnership is built for speed - Chrome\u2019s technology is a big contributor to what makes the McLaren F1 team so fast and keeps them safe.\n<br /><br />\nTo celebrate the 2022 US Grand Prix, we teamed up to create Chrome Pit Crew, a series of minigames that highlight the browser\u2019s features while testing your timing, speed, and balance.",
    "content": [
      {
        "id": "6509c024d627f809db1aa429",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/ChromePitCrew_BXCaseStudy_001.jpg",
          "alt": "Chrome Pit Crew",
          "width": 1179,
          "height": 1993
        }
      },
      {
        "id": "6509c02ad627f809db1aa42a",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/ChromePitCrew_BXCaseStudy_002.jpg",
          "alt": "Chrome Pit Crew",
          "width": 3840,
          "height": 2160
        }
      },
      {
        "id": "6509c02ed627f809db1aa42b",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/ChromePitCrew_BXCaseStudy_003.jpg",
          "alt": "Chrome Pit Crew",
          "width": 1179,
          "height": 1993
        }
      },
      {
        "id": "6509c035d627f809db1aa42c",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/ChromePitCrew_BXCaseStudy_004.jpg",
          "alt": "Chrome Pit Crew",
          "width": 3840,
          "height": 2160
        }
      },
      {
        "id": "6509c03ad627f809db1aa42d",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/ChromePitCrew_BXCaseStudy_005.jpg",
          "alt": "Chrome Pit Crew",
          "width": 1179,
          "height": 1993
        }
      },
      {
        "id": "6509c03fd627f809db1aa42e",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/ChromePitCrew_BXCaseStudy_006.jpg",
          "alt": "Chrome Pit Crew",
          "width": 3840,
          "height": 2160
        }
      },
      {
        "id": "6509c043d627f809db1aa42f",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/ChromePitCrew_BXCaseStudy_007.jpg",
          "alt": "Chrome Pit Crew",
          "width": 1179,
          "height": 1993
        }
      },
      {
        "id": "6509c05ad627f809db1aa430",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/ChromePitCrew_BXCaseStudy_006.jpg",
          "alt": "Chrome Pit Crew",
          "width": 3840,
          "height": 2160
        }
      },
      {
        "id": "6509c060d627f809db1aa431",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/ChromePitCrew_BXCaseStudy_009.jpg",
          "alt": "Chrome Pit Crew",
          "width": 1179,
          "height": 1993
        }
      },
      {
        "id": "6509c066d627f809db1aa432",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/ChromePitCrew_BXCaseStudy_010.jpg",
          "alt": "Chrome Pit Crew",
          "width": 3840,
          "height": 2160
        }
      },
      {
        "id": "6509c06cd627f809db1aa433",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/ChromePitCrew_BXCaseStudy_011.jpg",
          "alt": "Chrome Pit Crew",
          "width": 1179,
          "height": 1993
        }
      },
      {
        "id": "6509f30cd2c257038e16a8b5",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/ChromePitCrew_BXCaseStudy_012.jpg",
          "alt": "Chrome Pit Crew",
          "width": 3840,
          "height": 2160
        }
      },
      {
        "id": "6509f315d2c257038e16a8b6",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/ChromePitCrew_BXCaseStudy_013.jpg",
          "alt": "Chrome Pit Crew",
          "width": 1179,
          "height": 1993
        }
      }
    ],
    "url": "https://chromepitcrew.withgoogle.com/",
    "typeOfProject": [
      "Digital Experience",
      "WebGL"
    ]
  },
  {
    "id": "64ba7e24c7619810e7414d55",
    "title": "Reliable Robotics",
    "slug": "reliable-robotics",
    "meta": "Reliable Robotics soars in aviation safety. Explore their world via 3D storytelling. Get ready to take flight with this groundbreaking company.",
    "featured": true,
    "device": "laptop",
    "featuredImage": "https://storage.googleapis.com/bx-site-cms/media/ReliableRobotics_BXCastStudy_002.jpg",
    "colors": {
      "primary": "#5793D0",
      "secondary": "#283350",
      "tertiary": "#FFFFFF"
    },
    "client": "Reliable Robotics",
    "year": "2022",
    "roles": [
      "Design",
      "Development",
      "WebGL",
      "Creative Direction"
    ],
    "copy": "Reliable Robotics is building advanced automation systems that make aviation safer. But how do you represent such complex, important work in a way that is easily digestible and fun to interact with?\n<br /><br />\nWe swooped in to help RR build a new website, using 3D animations to tell the story of their product through a sequence of stylized vignettes. By scrolling along, users move from one 3D scene to the next to learn about this groundbreaking company.\n<br /><br />\nCheck out the site for yourself, and get ready to take flight.",
    "content": [
      {
        "id": "6509c99772eda1961924c1ca",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/ReliableRobotics_BXCastStudy_001.jpg",
          "alt": "Reliable Robotics",
          "width": 3840,
          "height": 2160
        }
      },
      {
        "id": "6509c99b72eda1961924c1cb",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/ReliableRobotics_BXCastStudy_002.jpg",
          "alt": "Reliable Robotics",
          "width": 3840,
          "height": 2160
        }
      },
      {
        "id": "6509c9a072eda1961924c1cc",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/ReliableRobotics_BXCastStudy_003.jpg",
          "alt": "Reliable Robotics",
          "width": 1179,
          "height": 1993
        }
      },
      {
        "id": "6509c9a672eda1961924c1cd",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/ReliableRobotics_BXCastStudy_004.jpg",
          "alt": "Reliable Robotics",
          "width": 3840,
          "height": 2160
        }
      },
      {
        "id": "6509c9a872eda1961924c1ce",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/ReliableRobotics_BXCastStudy_005.jpg",
          "alt": "Reliable Robotics",
          "width": 3840,
          "height": 2160
        }
      },
      {
        "id": "6509c9ad72eda1961924c1cf",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/ReliableRobotics_BXCastStudy_006.jpg",
          "alt": "Reliable Robotics",
          "width": 1179,
          "height": 1993
        }
      },
      {
        "id": "6509c9c272eda1961924c1d0",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/ReliableRobotics_BXCastStudy_007.jpg",
          "alt": "Reliable Robotics",
          "width": 3840,
          "height": 2160
        }
      },
      {
        "id": "6509c9c472eda1961924c1d1",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/ReliableRobotics_BXCastStudy_008.jpg",
          "alt": "Reliable Robotics",
          "width": 3840,
          "height": 2160
        }
      },
      {
        "id": "6509c9c772eda1961924c1d2",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/ReliableRobotics_BXCastStudy_009.jpg",
          "alt": "Reliable Robotics",
          "width": 3840,
          "height": 2160
        }
      },
      {
        "id": "6509c9ca72eda1961924c1d3",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/ReliableRobotics_BXCastStudy_010.jpg",
          "alt": "Reliable Robotics",
          "width": 3840,
          "height": 2160
        }
      },
      {
        "id": "6509c9d372eda1961924c1d4",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/ReliableRobotics_BXCastStudy_011.jpg",
          "alt": "Reliable Robotics",
          "width": 3840,
          "height": 2160
        }
      }
    ],
    "url": "https://reliable.co/",
    "typeOfProject": [
      "Digital Experience",
      "WebGL"
    ]
  },
  {
    "id": "64ba7d3bff0c2be876e29ff4",
    "title": "The Dreamkeeper",
    "slug": "dream-keeper",
    "meta": "The Dreamkeeper turns dreams into reality using AI and Stable Diffusion. Explore dreams, create your own, and join our dream team.",
    "featured": true,
    "device": "tablet",
    "featuredImage": "https://storage.googleapis.com/bx-site-cms/media/Dreamkeeper_BXCastStudy_004.jpg",
    "colors": {
      "primary": "#a6e1f5",
      "secondary": "#0E67FA",
      "tertiary": "#E38DC5"
    },
    "client": "Atlassian",
    "year": "2023",
    "roles": [
      "Design",
      "Development",
      "WebGL",
      "Creative Direction"
    ],
    "copy": "Have you ever woken up from a dream and wished you could make it reality? With The Dreamkeeper, you can do exactly that thanks to the power of AI.\n<br /><br />\nThe AI tool leverages multiple models including a ChatGPT powered \"Dream Assistant\" to help you recall your dreams, Stable Diffusion to visualize them, and a gallery that uses classical ML and LLM embeddings to allow you to experience other people's dreams. Hopefully all those acronyms didn\u2019t put you to sleep.\n<br /><br />\nThe project was a collaboration with Atlassian, Droga5, and Addition Technologies - truly the dream team!",
    "content": [
      {
        "id": "6509f6f4d2c257038e16a8bf",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/Dreamkeeper_BXCastStudy_001.jpg",
          "alt": "The Dreamkeeper",
          "width": 1179,
          "height": 1993
        }
      },
      {
        "id": "6509f719d2c257038e16a8c0",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/Dreamkeeper_BXCastStudy_002.jpg",
          "alt": "The Dreamkeeper",
          "width": 3840,
          "height": 2160
        }
      },
      {
        "id": "6509f71cd2c257038e16a8c1",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/Dreamkeeper_BXCastStudy_003.jpg",
          "alt": "The Dreamkeeper",
          "width": 1179,
          "height": 1993
        }
      },
      {
        "id": "6509f728d2c257038e16a8c2",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/Dreamkeeper_BXCastStudy_004.jpg",
          "alt": "The Dreamkeeper",
          "width": 3840,
          "height": 2160
        }
      },
      {
        "id": "6509f72bd2c257038e16a8c3",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/Dreamkeeper_BXCastStudy_005.jpg",
          "alt": "The Dreamkeeper",
          "width": 3840,
          "height": 2160
        }
      },
      {
        "id": "6509f72ed2c257038e16a8c4",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/Dreamkeeper_BXCastStudy_006.jpg",
          "alt": "The Dreamkeeper",
          "width": 3840,
          "height": 2160
        }
      },
      {
        "id": "6509f730d2c257038e16a8c5",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/Dreamkeeper_BXCastStudy_007.jpg",
          "alt": "The Dreamkeeper",
          "width": 1179,
          "height": 1993
        }
      },
      {
        "id": "6509f735d2c257038e16a8c6",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/Dreamkeeper_BXCastStudy_008.jpg",
          "alt": "The Dreamkeeper",
          "width": 3840,
          "height": 2160
        }
      }
    ],
    "url": "https://thedreamkeeper.co/",
    "typeOfProject": [
      "Digital Experience",
      "WebGL"
    ]
  },
  {
    "id": "649ea96248f4a8bf9f417654",
    "title": "Google Search Through Time",
    "slug": "search-through-time",
    "meta": "Explore the evolution of web search with Google\u2019s interactive timeline. Discover how Google Search transformed your online journey.",
    "featured": true,
    "device": "printer",
    "featuredImage": "https://storage.googleapis.com/bx-site-cms/media/GoogleSearch_BXCaseStudy_008.jpg",
    "colors": {
      "primary": "#EFEFEF",
      "secondary": "#0E67FA",
      "tertiary": "#F8AF0A"
    },
    "client": "Google",
    "year": "2023",
    "roles": [
      "Design",
      "Development",
      "WebGL",
      "Creative Direction"
    ],
    "copy": "Nowadays, you don\u2019t even have to say the phrase \"search the internet\" \u2013 just say \"Google it.\" It\u2019s hard to imagine, but there was a time before!\n<br /><br />\nAlongside the Google team, we built this interactive timeline to visualize how Google Search has transformed the way we explore the web.\n<br /><br />\nWith a mixture of interactive 3D objects and hand drawn illustrations, you can move seamlessly through the lifetime of Search since its birth in 1997. You\u2019ll spot vital tools like Google Maps, and even some fun stuff like the first Google Doodle.\n<br /><br />\nBet you didn\u2019t know all the ways that Google Search has touched your life!",
    "content": [
      {
        "id": "6509a9e114048e83ab1dac35",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/GoogleSearch_BXCaseStudy_001.jpg",
          "alt": "Google Search Through Time",
          "width": 3840,
          "height": 2160
        }
      },
      {
        "id": "6509a9f714048e83ab1dac36",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/GoogleSearch_BXCaseStudy_002.jpg",
          "alt": "Google Search Through Time",
          "width": 3840,
          "height": 2160
        }
      },
      {
        "id": "6509aa2d14048e83ab1dac37",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/GoogleSearch_BXCaseStudy_003.jpg",
          "alt": "Google Search Through Time",
          "width": 1179,
          "height": 1993
        }
      },
      {
        "id": "6509aa3714048e83ab1dac38",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/GoogleSearch_BXCaseStudy_004.jpg",
          "alt": "Google Search Through Time",
          "width": 3840,
          "height": 2160
        }
      },
      {
        "id": "6509aa3d14048e83ab1dac39",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/GoogleSearch_BXCaseStudy_005.jpg",
          "alt": "Google Search Through Time",
          "width": 3840,
          "height": 2160
        }
      },
      {
        "id": "6509aa4014048e83ab1dac3a",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/GoogleSearch_BXCaseStudy_006.jpg",
          "alt": "Google Search Through Time",
          "width": 3840,
          "height": 2160
        }
      },
      {
        "id": "6509bbd8a2cd2f9f68f7e302",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/GoogleSearch_BXCaseStudy_007.jpg",
          "alt": "Google Search Through Time",
          "width": 1179,
          "height": 1993
        }
      },
      {
        "id": "6509bc02a2cd2f9f68f7e303",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/GoogleSearch_BXCaseStudy_008.jpg",
          "alt": "Google Search Through Time",
          "width": 3840,
          "height": 2160
        }
      },
      {
        "id": "6509bc07a2cd2f9f68f7e304",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/GoogleSearch_BXCaseStudy_09.jpg",
          "alt": "Google Search Through Time",
          "width": 1179,
          "height": 1993
        }
      },
      {
        "id": "6509bc0ca2cd2f9f68f7e305",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/GoogleSearch_BXCaseStudy_010.jpg",
          "alt": "Google Search Through Time",
          "width": 3840,
          "height": 2160
        }
      },
      {
        "id": "6509bc15a2cd2f9f68f7e306",
        "type": "media",
        "caption": "",
        "image": {
          "url": "https://storage.googleapis.com/bx-site-cms/media/GoogleSearch_BXCaseStudy_011.jpg",
          "alt": "Google Search Through Time",
          "width": 3840,
          "height": 2160
        }
      }
    ],
    "url": "https://www.google.com/search/howsearchworks/our-history/",
    "typeOfProject": [
      "Digital Experience",
      "WebGL"
    ]
  }
];

export const BUTTERMAX_STUDIO = {
  title: "Who we are",
  heading: "Buttermax is a digital studio founded on a culture of collaboration. We melt for lovingly crafted design, motion and technology.",
  description: "We are an elite team of designers, creative technologists, and 3D artists building award-winning web experiences for the world's most ambitious brands.",
  services: [
    {
      category: "Design & Identity",
      items: ["Art Direction", "UI/UX Design", "Design Systems", "Interactive Prototyping", "Brand Motion"]
    },
    {
      category: "Creative Technology",
      items: ["WebGL & Three.js", "Creative Development", "Interactive Shaders", "Next.js & React Apps", "Headless CMS"]
    },
    {
      category: "Motion & 3D",
      items: ["3D Modeling & Animation", "Micro-interactions", "Sound Design Integration", "Realtime Simulations", "Visual Storytelling"]
    }
  ],
  capabilities: [
    "Digital Production",
    "WebGL Experiential",
    "High-Performance Frontends",
    "Brand Flagships",
    "Generative Interactive Art",
    "E-commerce Experiences"
  ]
};
