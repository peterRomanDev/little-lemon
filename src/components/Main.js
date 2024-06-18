// images
import imgGreekSalad from '../images/dishes/greek-salad.jpg';
import imgMoussaka from '../images/dishes/moussaka.jpg';
import imgPizzaMargherita from '../images/dishes/pizza-margherita.jpg';
import imgSpaghettiCarbonara from '../images/dishes/spaghetti-carbonara.jpg';
import imgVeggieCousCous from '../images/dishes/veggie-cous-cous.jpg';
import imgCrepeWithNutella from '../images/dishes/crepe-with-nutells.jpg';
import imgChefs from '../images/other/chefs.jpg';

// components
import DishCards from "./DishCards";
import InfoCard from "./InfoCard";

const colors = {
  black: 'black',
  white: 'white',
  gray: 'gray',
  green: 'green',
  yellow: 'yellow'
};

const imgs = {
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
    }
  }
};

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

const btns = {
  reserveATable: { text: 'Reserve a table' },
  seeMenu: { text: 'See menu' },
  next: { text: '>' },
  prev: { text: '<' },
  add: { text: '+' },
  remove: { text: '-' },
  submit: { text: 'Reserve a table' }
};

const infoCards = {
  hero: {
    card: {
      bgColor: colors.green
    },
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
    btns: {
      isShown: true,
      list: [
        { text: btns.seeMenu.text },
        { text: btns.reserveATable.text }
      ]
    }
  },
  about: {
    card: {
      bgColor: colors.yellow
    },
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
    btns: {
      isShown: false,
      list: []
    }
  },
  cta: {
    card: {
      bgColor: colors.green
    },
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
    btns: {
      isShown: true,
      list: [
        { text: btns.reserveATable.text },
      ]
    }
  }
}

export default function Main() {

  return (
    <main>
      <InfoCard props={infoCards.hero} />
      <DishCards props={dishes} />
      <InfoCard props={infoCards.about} />
      <InfoCard props={infoCards.cta} />
    </main>
  );
}
