// context storing all the data used everywhere throughout the project

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

// hooks
// context
import { createContext, useState } from "react";

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
    // brand assets
    // Little Lemon logo
    logo1: {
      src: logo1,
      alt: 'Little Lemon logo',
      credit: {
        img: {
          url: ''
        },
        author: {
          name: 'Peter Roman',
          url: ''
        },
        source: {
          name: '',
          url: ''
        }
      }
    }
  },
  dishes: {
    // dishes of the restaurant
    greekSalad: {
      // Greek Salad
      src: imgGreekSalad,
      alt: 'Greek Salad',
      credit: {
        img: {
          url: 'https://unsplash.com/photos/sliced-tomato-and-cucumber-on-white-ceramic-plate-JXcgx_U7eh4'
        },
        author: {
          name: 'Loes Klinker',
          url: 'https://unsplash.com/@loeees_'
        },
        source: {
          name: 'Unsplash',
          url: 'https://unsplash.com'
        }
      }
    },
    moussaka: {
      // Moussaka
      src: imgMoussaka,
      alt: 'Moussaka',
      credit: {
        img: {
          url: 'https://unsplash.com/photos/baked-pie-bkXzABDt08Q'
        },
        author: {
          name: 'Danil Aksenov',
          url: 'https://unsplash.com/@nebe3etogo'
        },
        source: {
          name: 'Unsplash',
          url: 'https://unsplash.com'
        }
      }
    },
    pizzaMargherita: {
      // Pizza Margherita
      src: imgPizzaMargherita,
      alt: 'Pizza Margherita',
      credit: {
        img: {
          url: 'https://unsplash.com/photos/pizza-with-green-leaf-vegetable-JspLKUauwSI'
        },
        author: {
          name: 'Inna Gurina',
          url: 'https://unsplash.com/@innagurina'
        },
        source: {
          name: 'Unsplash',
          url: 'https://unsplash.com'
        }
      }
    },
    spaghettiCarbonara: {
      // Spaghetti Carbonara
      src: imgSpaghettiCarbonara,
      alt: 'Spaghetti Carbonara',
      credit: {
        img: {
          url: 'https://unsplash.com/photos/pasta-dish-on-white-ceramic-plate--5FECW242og'
        },
        author: {
          name: 'Zoran Borojevic',
          url: 'https://unsplash.com/@fresh_studio'
        },
        source: {
          name: 'Unsplash',
          url: 'https://unsplash.com'
        }
      }
    },
    veggieCousCous: {
      // Veggie Cous Cous
      src: imgVeggieCousCous,
      alt: 'Veggie cous cous',
      credit: {
        img: {
          url: 'https://unsplash.com/photos/a-blue-bowl-filled-with-food-on-top-of-a-wooden-table-lGQvuvGlp0s'
        },
        author: {
          name: 'Sandie Clarke',
          url: 'https://unsplash.com/@honeypoppet'
        },
        source: {
          name: 'Unsplash',
          url: 'https://unsplash.com'
        }
      }
    },
    crepeWithNutella: {
      // Crepe with Nutella
      src: imgCrepeWithNutella,
      alt: 'Crepe with nutella',
      credit: {
        img: {
          url: 'https://unsplash.com/photos/chocolate-syrup-on-baked-pastry--ssI7gyHDfk'
        },
        author: {
          name: 'Todd Cravens',
          url: 'https://unsplash.com/@toddcravens'
        },
        source: {
          name: 'Unsplash',
          url: 'https://unsplash.com'
        }
      }
    },
  },
  other: {
    // testimonial authors, other
    chefs: {
      // picture of the two chefs in their early days
      src: imgChefs,
      alt: 'Chefs Adrian and Francesco',
      credit: {
        img: {
          url: 'https://unsplash.com/photos/man-in-white-crew-neck-t-shirt-standing-in-front-of-kitchen-sink-qm6yxe7SjWg'
        },
        author: {
          name: 'Dan Rooney',
          url: 'https://unsplash.com/@danliamrooney'
        },
        source: {
          name: 'Unsplash',
          url: 'https://unsplash.com'
        }
      }
    },
    johnSmith: {
      // John Smith - author of a testimonial
      src: imgJohnSmith,
      alt: 'John Smith',
      credit: {
        img: {
          url: 'https://unsplash.com/photos/mens-blue-and-white-button-up-collared-top-DItYlc26zVI'
        },
        author: {
          name: 'Christian Buehner',
          url: 'https://unsplash.com/@christianbuehner'
        },
        source: {
          name: 'Unsplash',
          url: 'https://unsplash.com'
        }
      }
    },
    wojakMleczko: {
      // Wojak Mleczko - author of a testimonial
      src: imgWojakMleczko,
      alt: 'Wojak Mleczko',
      credit: {
        img: {
          url: 'https://unsplash.com/photos/man-crossing-both-arms-KIPqvvTOC1s'
        },
        author: {
          name: 'Jonas Kakaroto',
          url: 'https://unsplash.com/@jkakaroto'
        },
        source: {
          name: 'Unsplash',
          url: 'https://unsplash.com'
        }
      }
    },
    janePeterson: {
      // Jane Peterson - author of a testimonial
      src: imgJanePeterson,
      alt: 'Jane Peterson',
      credit: {
        img: {
          url: 'https://unsplash.com/photos/woman-in-white-crew-neck-shirt-smiling-IF9TK5Uy-KI'
        },
        author: {
          name: 'Jake Nackos',
          url: 'https://unsplash.com/@jakenackos'
        },
        source: {
          name: 'Unsplash',
          url: 'https://unsplash.com'
        }
      }
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
      // Greek salad
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
      // Moussaka
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
      // Pizza Margherita
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
      // Spaghetti Carbonara
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
      // Veggie Cous Cous
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
      // Crepe with nutella
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
      // John Smith
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
      // Wojak Mleczko
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
      // Jane Peterson
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
    // /#home
    title: 'Home',
    href: '/#home',
    className: 'home'
  },
  menu: {
    // /#menu
    title: 'Menu',
    href: '/#menu',
    className: 'menu'
  },
  about: {
    // /#about
    title: 'About',
    href: '/#about',
    className: 'about'
  },
  booking: {
    // /booking
    title: 'Reserve a table',
    href: '/booking',
    className: 'reservation'
  },
  credits: {
    // /booking
    title: 'Credits',
    href: '/credits',
    className: 'credits'
  }
};

// credits
const credits = [
  {
    img: { name: imgs.dishes.greekSalad.alt, url: imgs.dishes.greekSalad.credit.img.url },
    author: { name: imgs.dishes.greekSalad.credit.author.name, url: imgs.dishes.greekSalad.credit.author.url },
    source: { name: imgs.dishes.greekSalad.credit.source.name, url: imgs.dishes.greekSalad.credit.source.url }
  },
  {
    img: { name: imgs.dishes.moussaka.alt, url: imgs.dishes.moussaka.credit.img.url },
    author: { name: imgs.dishes.moussaka.credit.author.name, url: imgs.dishes.moussaka.credit.author.url },
    source: { name: imgs.dishes.moussaka.credit.source.name, url: imgs.dishes.moussaka.credit.source.url }
  },
  {
    img: { name: imgs.dishes.pizzaMargherita.alt, url: imgs.dishes.pizzaMargherita.credit.img.url },
    author: { name: imgs.dishes.pizzaMargherita.credit.author.name, url: imgs.dishes.pizzaMargherita.credit.author.url },
    source: { name: imgs.dishes.pizzaMargherita.credit.source.name, url: imgs.dishes.pizzaMargherita.credit.source.url }
  },
  {
    img: { name: imgs.dishes.spaghettiCarbonara.alt, url: imgs.dishes.spaghettiCarbonara.credit.img.url },
    author: { name: imgs.dishes.spaghettiCarbonara.credit.author.name, url: imgs.dishes.spaghettiCarbonara.credit.author.url },
    source: { name: imgs.dishes.spaghettiCarbonara.credit.source.name, url: imgs.dishes.spaghettiCarbonara.credit.source.url }
  },
  {
    img: { name: imgs.dishes.veggieCousCous.alt, url: imgs.dishes.veggieCousCous.credit.img.url },
    author: { name: imgs.dishes.veggieCousCous.credit.author.name, url: imgs.dishes.veggieCousCous.credit.author.url },
    source: { name: imgs.dishes.veggieCousCous.credit.source.name, url: imgs.dishes.veggieCousCous.credit.source.url }
  },
  {
    img: { name: imgs.dishes.crepeWithNutella.alt, url: imgs.dishes.crepeWithNutella.credit.img.url },
    author: { name: imgs.dishes.crepeWithNutella.credit.author.name, url: imgs.dishes.crepeWithNutella.credit.author.url },
    source: { name: imgs.dishes.crepeWithNutella.credit.source.name, url: imgs.dishes.crepeWithNutella.credit.source.url }
  },
  {
    img: { name: imgs.other.chefs.alt, url: imgs.other.chefs.credit.img.url },
    author: { name: imgs.other.chefs.credit.author.name, url: imgs.other.chefs.credit.author.url },
    source: { name: imgs.other.chefs.credit.source.name, url: imgs.other.chefs.credit.source.url }
  },
  {
    img: { name: imgs.other.johnSmith.alt, url: imgs.other.johnSmith.credit.img.url },
    author: { name: imgs.other.johnSmith.credit.author.name, url: imgs.other.johnSmith.credit.author.url },
    source: { name: imgs.other.johnSmith.credit.source.name, url: imgs.other.johnSmith.credit.source.url }
  },
  {
    img: { name: imgs.other.wojakMleczko.alt, url: imgs.other.wojakMleczko.credit.img.url },
    author: { name: imgs.other.wojakMleczko.credit.author.name, url: imgs.other.wojakMleczko.credit.author.url },
    source: { name: imgs.other.wojakMleczko.credit.source.name, url: imgs.other.wojakMleczko.credit.source.url }
  },
  {
    img: { name: imgs.other.janePeterson.alt, url: imgs.other.janePeterson.credit.img.url },
    author: { name: imgs.other.janePeterson.credit.author.name, url: imgs.other.janePeterson.credit.author.url },
    source: { name: imgs.other.janePeterson.credit.source.name, url: imgs.other.janePeterson.credit.source.url }
  },
];

// const creditsList = credits.map(credit => <p key={credit.author.name}>Photo of "<Link to={credit.img.url}>{credit.img.name}</Link>" by <Link to={credit.author.url}>{credit.author.name}</Link> from <Link to={credit.source.url}>{credit.source.name}</Link></p>);

// sections
const sections = {
  heroLandingPage: {
    // landing page - hero section
    id: 'home',
    h2: {
      isShown: false,
      text: '',
      color: ''
    }
  },
  menu: {
    // menu
    id: 'menu',
    h2: {
      isShown: true,
      text: 'Our menu',
      color: colors.black
    }
  },
  about: {
    // about
    id: 'about',
    h2: {
      isShown: true,
      text: 'Who we are',
      color: colors.black
    }
  },
  testimonials: {
    // testimonials
    id: 'testimonials',
    h2: {
      isShown: true,
      text: 'Testimonials',
      color: colors.black
    }
  },
  cta: {
    // call to action
    id: 'reserve-a-table',
    h2: {
      isShown: true,
      text: 'Join our oasis of taste',
      color: colors.black
    }
  },
  heroReservationPage: {
    // reservation page - hero section
    id: 'booking',
    h2: {
      isShown: false,
      text: '',
      color: colors.black
    }
  },
  reservation: {
    // reservation page - booking form
    id: 'booking-form',
    h2: {
      isShown: true,
      text: 'Booking information',
      color: colors.black
    }
  },
  bookingConfirmed: {
    // booking confirmed page
    id: 'booking-success',
    h2: {
      isShown: true,
      text: 'You have successfully booked a table',
      color: colors.black
    }
  },
  notFound: {
    // booking confirmed page
    id: 'not-found',
    h2: {
      isShown: false,
      text: '',
      color: colors.black
    }
  },
  credits: {
    // credits page
    id: 'credits',
    h2: {
      isShown: false,
      text: '',
      color: colors.black
    }
  },
};

// info cards
const infoCards = {
  heroLandingPage: {
    // card presenting the Little Lemon restaurant
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
    // card presenting the back story of the Little Lemon restaurant
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
    // card inviting users to take action (reserve a table)
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
    // card presenting instructions on how to book a table
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
  bookingConfirmed: {
    // card confirming that a table has been successfully booked
    card: {
      bgColor: colors.green
    },
    hs: {
        isShown: false,
        h1: {
            isShown: false,
            text: '',
            color: ''
        },
        h2: {
            isShown: false,
            text: '',
            color: ''
        }
    },
    ps: {
      isShown: true,
      list: [
        'Thank you for choosing Little Lemon. We are looking forward to hosting you and we hope you will have an otherworldly experience!'
      ],
      color: colors.white
    },
    img: {
      isShown: false,
      src: '',
      alt: ''
    },
    links: {
      isShown: true,
      list: [
        { title: btns.backToHomepage.text, href: links.home.href },
      ]
    }
  },
  notFound: {
    // card confirming that a table has been successfully booked
    card: {
      bgColor: colors.green
    },
    hs: {
        isShown: true,
        h1: {
            isShown: true,
            text: '404 Not Found',
            color: colors.yellow
        },
        h2: {
            isShown: false,
            text: '',
            color: ''
        }
    },
    ps: {
      isShown: false,
      list: [],
      color: colors.white
    },
    img: {
      isShown: false,
      src: '',
      alt: ''
    },
    links: {
      isShown: true,
      list: [
        { title: btns.backToHomepage.text, href: links.home.href },
      ]
    }
  },
  credits: {
    // card confirming that a table has been successfully booked
    card: {
      bgColor: colors.green
    },
    hs: {
        isShown: true,
        h1: {
            isShown: true,
            text: 'Credits',
            color: colors.yellow
        },
        h2: {
            isShown: true,
            text: '',
            color: ''
        }
    },
    ps: {
      isShown: true,
      list: [],
      color: colors.white
    },
    img: {
      isShown: false,
      src: '',
      alt: ''
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
      { title: links.home.title, href: links.home.href, className: links.home.className },
      { title: links.menu.title, href: links.menu.href, className: links.menu.className },
      { title: links.about.title, href: links.about.href, className: links.about.className },
      { title: links.booking.title, href: links.booking.href, className: links.booking.className }
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
        { title: links.booking.title, href: links.booking.href },
        { title: links.credits.title, href: links.credits.href }
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
    },
  ]
};

// scroll the specified section into view
const scrollIntoView = href => {
  if (href.includes('#')) {
    const hash = href.slice(href.indexOf('#'));
    const section = document.querySelector(hash);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  if (href === '/booking') {
    const section = document.querySelector('#booking');

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  if (href === '/credits') {
    const section = document.querySelector('#credits');

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

export function PageContentProvider({ children }) {
  // indicate whether the booking is confirmed (whether the form has been filled out correctly and submitted)
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);

  return (
    <PageContentContext.Provider value={{ contactInfo, colors, imgs, btns, dishes, testimonials, links, sections, infoCards, headerDets, footerDets, scrollIntoView, isBookingConfirmed, setIsBookingConfirmed, credits }}>
      {children}
    </PageContentContext.Provider>
  );
};
