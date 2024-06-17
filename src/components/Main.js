import InfoCard from "./InfoCard";

const colors = {
  black: 'black',
  white: 'white',
  gray: 'gray',
  green: 'green',
  yellow: 'yellow'
};

const imgs = {
  dog: {
    src: 'https://images.unsplash.com/photo-1718301166305-421b59a63acf?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'A dog on the field on a gloomy day'
  }
};

const btns = {
  reserveATable: {
    text: 'Reserve a table'
  },
  seeMenu: {
    text: 'See menu'
  },
  next: {
    text: '>'
  },
  prev: {
    text: '<'
  },
  add: {
    text: '+'
  },
  remove: {
    text: '-'
  },
  submit: {
    text: 'Reserve a table'
  }
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
      src: imgs.dog.src,
      alt: imgs.dog.alt
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
      src: imgs.dog.src,
      alt: imgs.dog.alt
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
      src: imgs.dog.src,
      alt: imgs.dog.alt
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
      <InfoCard props={infoCards.about} />
      <InfoCard props={infoCards.cta} />
    </main>
  );
}
