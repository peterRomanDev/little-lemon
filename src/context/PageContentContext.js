// images - brand assets
import logo1 from '../images/brand-assets/Logo.svg';

// images - dishes
import imgGreekSalad from '../images/dishes/greek-salad.jpg';
import imgMoussaka from '../images/dishes/moussaka.jpg';
import imgPizzaMargherita from '../images/dishes/pizza-margherita.jpg';
import imgSpaghettiCarbonara from '../images/dishes/spaghetti-carbonara.jpg';
import imgVeggieCousCous from '../images/dishes/veggie-cous-cous.jpg';
import imgCrepeWithNutella from '../images/dishes/crepe-with-nutells.jpg';

// images - others
import imgChefs from '../images/other/chefs.jpg';
import imgJohnSmith from '../images/other/John-Smith.jpg';
import imgWojakMleczko from '../images/other/Wojak-Mleczko.jpg';
import imgJanePeterson from '../images/other/Jane-Peterson.jpg';

// context
import { createContext } from "react";

export const PageContentContext = createContext();

// contact info
const contactInfo = {
    phone: '+99 0000 000000',
    email: 'little@lemon@fake.com',
    address: '126 Bratislava Boulevard, Chicago, IL 12345'
};

// colors
const colors = {
    black: 'black',
    white: 'white',
    gray: 'gray',
    green: 'green',
    yellow: 'yellow'
};

// images
const imgs = {
    brandAssets: {
      logo1: {
        src: logo1,
        alt: 'Little Lemon logo'
      }
    },
    dishes: {
      greekSalad: {
        src: imgGreekSalad,
        alt: 'Greek Salad'
      },
      moussaka: {
        src: imgMoussaka,
        alt: 'Moussaka'
      },
      pizzaMargherita: {
        src: imgPizzaMargherita,
        alt: 'Pizza Margherita'
      },
      spaghettiCarbonara: {
        src: imgSpaghettiCarbonara,
        alt: 'Spaghetti Carbonara'
      },
      veggieCousCous: {
        src: imgVeggieCousCous,
        alt: 'Veggie cous cous'
      },
      crepeWithNutella: {
        src: imgCrepeWithNutella,
        alt: 'Crepe with nutella'
      },
    },
    other: {
      chefs: {
        src: imgChefs,
        alt: 'Adrian and Francesco, the chefs of the Little Lemon restaurant'
      },
      johnSmith: {
        src: imgJohnSmith,
        alt: 'John Smith'
      },
      wojakMleczko: {
        src: imgWojakMleczko,
        alt: 'Wojak Mleczko'
      },
      janePeterson: {
        src: imgJanePeterson,
        alt: 'Jane Peterson'
      }
    }
};

// buttons
const btns = {
    reservation: { text: 'Reserve a table' },
    seeMenu: { text: 'See menu' },
    next: { text: '>' },
    prev: { text: '<' },
    add: { text: '+' },
    remove: { text: '-' },
    submit: { text: 'Reserve a table' },
    backToHomepage: { text: 'Back to homepage' },
  };

// dishes
const dishes = [
    {
      id: 1,
      img: {
        src: imgs.dishes.greekSalad.src,
        alt: imgs.dishes.greekSalad.alt
      },
      title: 'Greek Salad',
      description: 'Savor the Mediterranean with our Greek Salad, featuring crisp romaine, juicy tomatoes, cucumbers, red onions, and Kalamata olives, topped with creamy feta and oregano, and drizzled with olive oil and red wine vinegar.',
      price: 9.99
    },
    {
      id: 2,
      img: {
        src: imgs.dishes.moussaka.src,
        alt: imgs.dishes.moussaka.alt
      },
      title: 'Moussaka',
      description: "Delight in layers of rich, savory flavor with our Moussaka. Succulent ground beef, tender eggplant, and creamy béchamel sauce are baked to perfection, creating a classic Greek dish that's hearty and satisfying.",
      price: 25.99
    },
    {
      id: 3,
      img: {
        src: imgs.dishes.pizzaMargherita.src,
        alt: imgs.dishes.pizzaMargherita.alt
      },
      title: 'Pizza Margherita',
      description: 'Enjoy the simplicity of our Pizza Margherita, featuring a crisp, thin crust topped with tangy tomato sauce, fresh mozzarella, and fragrant basil leaves. Baked to perfection, this classic Italian pizza offers a burst of fresh, vibrant flavors in every slice.',
      price: 12.99
    },
    {
      id: 4,
      img: {
        src: imgs.dishes.spaghettiCarbonara.src,
        alt: imgs.dishes.spaghettiCarbonara.alt
      },
      title: 'Spaghetti Carbonara',
      description: 'Indulge in the creamy, savory goodness of our Spaghetti Carbonara. Al dente spaghetti is tossed with crispy pancetta, rich egg yolk, and freshly grated Parmesan, finished with a touch of black pepper.',
      price: 22.99
    },
    {
      id: 5,
      img: {
        src: imgs.dishes.veggieCousCous.src,
        alt: imgs.dishes.veggieCousCous.alt
      },
      title: 'Veggie cous cous',
      description: 'Savor the wholesome flavors of our Couscous with Vegetables. Fluffy couscous is mixed with a colorful array of roasted seasonal vegetables, lightly seasoned with aromatic herbs and spices. A delightful, healthy, and satisfying dish.',
      price: 19.99
    },
    {
      id: 6,
      img: {
        src: imgs.dishes.crepeWithNutella.src,
        alt: imgs.dishes.crepeWithNutella.alt
      },
      title: 'Crepe with nutella',
      description: 'Indulge in the sweet delight of our Crepe with Nutella. A delicate, thin crepe is generously spread with creamy Nutella and folded to perfection. A simple yet irresistible treat that melts in your mouth.',
      price: 9.99
    }
];

// testimonials
const testimonials = [
    {
      id: 1,
      img: {
        src: imgs.other.johnSmith.src,
        alt: imgs.other.johnSmith.alt
      },
      rating: 10,
      review: 'Little Lemon is a hidden gem that captures the essence of Mediterranean cuisine. The flavors are fresh and vibrant, from the perfectly grilled seafood to the authentic Greek salads. The warm, inviting atmosphere and attentive service make every visit a delightful experience. Highly recommend for anyone seeking a taste of the Mediterranean!',
      author: 'John Smith',
      jobTitle: 'Mediterranean cuisine connoisseur'
    },
    {
      id: 2,
      img: {
        src: imgs.other.wojakMleczko.src,
        alt: imgs.other.wojakMleczko.alt
      },
      rating: 9,
      review: 'Nestled in the heart of downtown, Little Lemon offers a delightful escape into the vibrant flavors of the Mediterranean. From the moment you step inside, the warm and inviting ambiance, complemented by rustic décor and the tantalizing aroma of freshly prepared dishes, sets the stage for a memorable dining experience.',
      author: 'Wojak Mleczko',
      jobTitle: 'Michelin star chef'
    },
    {
      id: 3,
      img: {
        src: imgs.other.janePeterson.src,
        alt: imgs.other.janePeterson.alt
      },
      rating: 10,
      review: 'Little Lemon is a gem in the city, offering an authentic Mediterranean dining experience. The cozy ambiance and flavorful dishes make it a must-visit. With attentive service and a delightful menu, Little Lemon promises a memorable meal every time.',
      author: 'Jane Peterson',
      jobTitle: 'Author of "Taste of Chicago"'
    },
];

// links
const links = {
  home: {
    title: 'Home',
    href: '/#home'
  },
  menu: {
    title: 'Menu',
    href: '/#menu'
  },
  about: {
    title: 'About',
    href: '/#about'
  },
  booking: {
    title: 'Reserve a table',
    href: '/booking'
  }
};

// sections
const sections = {
  heroLandingPage: {
    id: 'home',
    h2: {
      isShown: false,
      text: '',
      color: ''
    }
  },
  menu: {
    id: 'menu',
    h2: {
      isShown: true,
      text: 'Our menu',
      color: colors.black
    }
  },
  about: {
    id: 'about',
    h2: {
      isShown: true,
      text: 'Who we are',
      color: colors.black
    }
  },
  testimonials: {
    id: 'testimonials',
    h2: {
      isShown: true,
      text: 'Testimonials',
      color: colors.black
    }
  },
  cta: {
    id: 'reserve-a-table',
    h2: {
      isShown: true,
      text: 'Join our oasis of taste',
      color: colors.black
    }
  },
  heroReservationPage: {
    id: 'booking',
    h2: {
      isShown: false,
      text: '',
      color: colors.black
    }
  },
  reservation: {
    id: 'booking-form',
    h2: {
      isShown: true,
      text: 'Booking information',
      color: colors.black
    }
  },
  reservationSuccess: {
    id: 'booking-success',
    h2: {
      isShown: true,
      text: 'You have successfully booked a table',
      color: colors.black
    }
  },
};

// info cards
const infoCards = {
  heroLandingPage: {
    card: {
      bgColor: colors.green
    },
    hs: {
        isShown: true,
        h1: {
            isShown: true,
            text: 'Little Lemon',
            color: colors.yellow
        },
        h2: {
            isShown: true,
            text: 'Chicago',
            color: colors.black
        },
    },
    ps: {
      isShown: true,
      list: [
        'A family owned restaurant specializing in Mediterranean cuisine, and providing summer vibes all year round.'
      ],
      color: colors.white
    },
    img: {
      isShown: true,
      src: imgs.dishes.greekSalad.src,
      alt: imgs.dishes.greekSalad.alt
    },
    links: {
      isShown: true,
      list: [
        { title: btns.seeMenu.text, href: links.menu.href },
        { title: btns.reservation.text, href: links.booking.href }
      ]
    }
  },
  about: {
    card: {
      bgColor: colors.yellow
    },
    hs: {
        isShown: true,
        h1: {
            isShown: false,
            text: '',
            color: colors.yellow
        },
        h2: {
            isShown: false,
            text: '',
            color: colors.black
        }
    },
    ps: {
      isShown: true,
      list: [
        'The story of Little Lemon begins all the way back in 1998 when a Greek chef Adrian has settled in Chicago in pursuit of a better life.',
        'Being short on money and wanting to pursue his dream of opening a restaurant of his own, Adrian was lucky enough to stumble upon Francesco, an Italian-American from Chicago, and they both decided to start a restaurant.',
        'The beginnings of Little Lemon were humble, but Adrian and Francesco have slowly but surely managed to accumulate a stable following of guests who fell in love with the fresh taste of their produce and an authentically Mediterranean atmosphere of this restaurant.',
        'Little Lemon has seen a nation-wide growth ever since, currently having restaurants open in 37 states and 15 countries (mainly in East Asia and eastern Europe), and the two chefs are more than ever determined to deliver a phenomenal culinary experience for their customers.'
      ],
      color: colors.black
    },
    img: {
      isShown: true,
      src: imgs.other.chefs.src,
      alt: imgs.other.chefs.alt
    },
    links: {
      isShown: false,
      list: []
    }
  },
  cta: {
    card: {
      bgColor: colors.green
    },
    hs: {
        isShown: true,
        h1: {
            isShown: false,
            text: '',
            color: colors.yellow
        },
        h2: {
            isShown: false,
            text: '',
            color: colors.black
        },
    },
    ps: {
      isShown: true,
      list: [
        "We are very grateful to be able to host you and provide you the best of what the Mediterranean cuisine has to offer. Don't hesitate and spend an unforgettable moment at Little Lemon with your loved ones!"
      ],
      color: colors.white
    },
    img: {
      isShown: true,
      src: imgs.dishes.veggieCousCous.src,
      alt: imgs.dishes.veggieCousCous.alt
    },
    links: {
      isShown: true,
      list: [
        { title: btns.reservation.text, href: links.booking.href },
      ]
    }
  },
  heroReservationPage: {
    card: {
      bgColor: colors.green
    },
    hs: {
        isShown: true,
        h1: {
            isShown: true,
            text: 'Reserve a table',
            color: colors.yellow
        },
        h2: {
            isShown: false,
            text: '',
            color: colors.black
        }
    },
    ps: {
      isShown: true,
      list: [
        'Secure your spot out our lovely restaurant by filling out the form below. You will get a confirmation once the form is filled.'
      ],
      color: colors.white
    },
    img: {
      isShown: true,
      src: imgs.dishes.pizzaMargherita.src,
      alt: imgs.dishes.pizzaMargherita.alt
    },
    links: {
      isShown: false,
      list: []
    }
  },
};

// header details
const headerDets = {
  imgs: {
      logo: {
          src: imgs.brandAssets.logo1.src,
          alt: imgs.brandAssets.logo1.alt
      }
  },
  links: [
      { title: links.home.title, href: links.home.href },
      { title: links.menu.title, href: links.menu.href },
      { title: links.about.title, href: links.about.href },
      { title: links.booking.title, href: links.booking.href }
  ]
};

// footer details
const footerDets = {
  img: {
    src: imgs.brandAssets.logo1.src,
    alt: imgs.brandAssets.logo1.alt
  },
  cols: [
    {
      title: 'Little Lemon',
      links: [
        { title: links.menu.title, href: links.menu.href },
        { title: links.about.title, href: links.about.href },
        { title: links.booking.title, href: links.booking.href }
      ]
    },
    {
      title: "Let's get in touch",
      ps: [
        { text: contactInfo.phone },
        { text: contactInfo.email }
      ]
    },
    {
      title: 'Find us here',
      ps: [
        { text: contactInfo.address },
      ]
    }
  ]
};

export function PageContentProvider({ children }) {
    return (
        <PageContentContext.Provider value={{ contactInfo, colors, imgs, btns, dishes, testimonials, links, sections, infoCards, headerDets, footerDets }}>
            {children}
        </PageContentContext.Provider>
    );
}
