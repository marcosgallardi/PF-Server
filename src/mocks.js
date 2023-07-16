const { Dish,Drink,Desert,User,Side } = require("./db");

const platos = [
  {
    name: "Plato 1",
    description: "Descripción del plato 1",
    type: "plato principal",
    subtype: "pastas",
    disabled: false,
    available: true,
    calories: 500,
    glutenfree: false,
    vegetarian: false,
    dailyspecial: false,
    price: 1200,
  },
  {
    name: "Plato 2",
    description: "Descripción del plato 2",
    type: "entrada",
    subtype: "ensaladas",
    disabled: false,
    available: true,
    calories: 300,
    glutenfree: true,
    vegetarian: true,
    dailyspecial: false,
    price: 800,
  },
  {
    name: "Plato 21",
    description: "Descripción del plato 21",
    type: "plato principal",
    subtype: "carnes",
    disabled: false,
    available: true,
    calories: 700,
    glutenfree: false,
    vegetarian: false,
    dailyspecial: false,
    price: 1400,
  },
  {
    name: "Plato 22",
    description: "Descripción del plato 22",
    type: "entrada",
    subtype: "pastas",
    disabled: false,
    available: true,
    calories: 400,
    glutenfree: true,
    vegetarian: true,
    dailyspecial: false,
    price: 900,
  },
  {
    name: "Plato 23",
    description: "Descripción del plato 23",
    type: "plato principal",
    subtype: "arroz",
    disabled: false,
    available: true,
    calories: 600,
    glutenfree: false,
    vegetarian: false,
    dailyspecial: false,
    price: 1350,
  },
  {
    name: "Plato 24",
    description: "Descripción del plato 24",
    type: "entrada",
    subtype: "pescados y mariscos",
    disabled: false,
    available: true,
    calories: 350,
    glutenfree: true,
    vegetarian: false,
    dailyspecial: false,
    price: 1050,
  },
  {
    name: "Plato 25",
    description: "Descripción del plato 25",
    type: "plato principal",
    subtype: "sopas",
    disabled: false,
    available: true,
    calories: 250,
    glutenfree: false,
    vegetarian: true,
    dailyspecial: false,
    price: 800,
  },
  {
    name: "Plato 20",
    description: "Descripción del plato 20",
    type: "entrada",
    subtype: "pescados y mariscos",
    disabled: false,
    available: true,
    calories: 300,
    glutenfree: true,
    vegetarian: false,
    dailypecial: false,
    price: 950,
  },
];

const postres = [
  {
      name: "tiramisu",
      stock: 20,
      price: 2555
  },
  {
      name: "flan con crema",
      stock: 15,
      price: 1500
  },
  {
      name: "torta de chocolinas",
      stock: 220,
      price: 2555
  },
  {
      name: "helado",
      stock: 220,
      price: 2555
  },
  {
      name: "manzana fea",
      stock: 220,
      price: 2555
  },
  {
      name: "naranja seca",
      stock: 220,
      price: 2555
  }
];

const sides =[
  {
      name: "papa fritas con chedar",
      type: "Papas Fritas",
      available: true,
      price: 1500
  },
  {
      name: "pure de calabaza",
      type: "Puré",
      available: true,
      price: 2000
  }
];

const drinks =[
  {
      name: "coca",
      volume: "250ml",
      type: "cerveza",
      alcohol: true,
      stock: 299,
      price: 1500
  },
  {
      name: "coca light",
      volume: "500ml",
      type: "cerveza",
      alcohol: false,
      stock: 15,
      price: 2000
  },
  {
      name: "coca zero",
      volume: "500ml",
      type: "cerveza",
      alcohol: false,
      stock: 15,
      price: 2000
  },
  {
      name: "agua con gas",
      volume: "500ml",
      type: "agua",
      alcohol: false,
      stock: 15,
      price: 2000
  }
];

const users =[
  {
      name: "lenny",
      lastName: "cabeza",
      email: "lennycabeza@henry.com",
      password: "1234",
      birthDate: "1999-01-01",
      phoneNumber: "1166887788"
  },
  {
      name: "tato",
      lastName: "gallardi",
      email: "tatogallardi@henry.com",
      password: "1234",
      birthDate: "1990-12-31",
      phoneNumber: "+1234567890"
  },
  {
      name: "tato",
      lastName: "gallardi",
      email: "lenny@henry.com",
      password: "1234",
      birthDate: "1990-12-31",
      phoneNumber: "+1234567890"
  },
  {
      name: "usuario",
      lastName: "usuario1",
      email: "usuario1@henry.com",
      password: "1234",
      birthDate: "1990-12-31",
      phoneNumber: "+1234567890"
  }
]



const fillDb = async () => {
  await Dish.bulkCreate(platos);
  await Drink.bulkCreate(drinks);
  await Desert.bulkCreate(postres);
  await Side.bulkCreate(sides);
  await User.bulkCreate(users);
};

module.exports = fillDb;
