const news = [
    {
        title: 'Double Cheeseburger',
        description: 'Try our double cheeseburger, an explosion of flavor with juicy meat and melted cheese.',
        image: 'imgs/burger-abob-es.jpg'
    },
    {
        title: 'Delicious Spaghetti Bolognese',
        description: 'Enjoy our spaghetti with homemade bolognese sauce, prepared with fresh and natural ingredients.',
        image: 'imgs/pasta-abob-0.jpeg'
    },
    {
        title: 'Pepperoni and Olive Pizza',
        description: 'Savor our pepperoni and olive pizza, a perfect combination of fresh ingredients and crispy crust.',
        image: 'imgs/pizza-abob-t.webp'
    }
];

const gallery = [
    {
        image: 'imgs/galery-asta-pomodoro.jpg',
        description: 'Imagen de deliciosa Pasta Pomodoro'
    },
    {
        image: 'imgs/galery-hamburguesa.webp',
        description: 'Imagen de deliciosa Hamburguesa con queso'
    },
    {
        image: 'imgs/galery-albóndigas.webp',
        description: 'Imagen de deliciosa Pasta con Albondigas'
    },
    {
        image: 'imgs/gallery-pizza2.webp',
        description: 'Imagen de deliciosa Pizza de Peperoni'
    },
    {
        image: 'imgs/galery-pasta2.jpg',
        description: 'Imagen de deliciosa Pasta con muchos condimentos naturales'
    },
];

const feedbacks = [
    {   
        name: 'Carlos M. Rivera',
        position: 'Food Critic',
        coment: 'A wonderful place with an excellent selection of burgers. The service was exceptional from the moment I walked in until I finished my meal. I tried the Burger Royal and was blown away by the quality of the ingredients and the perfect combination of flavours.',
        image: 'imgs/feedback-pasta.png',
    },
    {   
        name: 'María G. López',
        position: 'Gourmet Enthusiast',
        coment: 'The food here is amazing. Each dish is prepared with meticulous attention to detail and an obvious passion for cooking. I tried the spaghetti alla siciliana, and I can say that it was a delicious experience, full of authentic and fresh flavors. It is perfect.',
        image: 'imgs/feedback-pasta.png',
    }
];

const products = [
    {
        id: 1,
        name: 'Frenchy Fry',
        details: 'Get a 20% Discount On First Order',
        price: 10.90,
        image: 'imgs/papas.webp',
        category: 'burger'
    },
    {
        id: 2,
        name: 'Fusilli',
        details: 'Get a 20% Discount On First Order',
        price: 14.90,
        image: 'imgs/pasta-removebg-preview.png',
        category: 'pasta'
    },
    {
        id: 3,
        name: 'Sandwich Clásico',
        details: 'Get a 20% Discount On First Order',
        price: 7.90,
        image: 'imgs/sandwich.png',
        category: 'sandwich'
    },
    {
        id: 4,
        name: 'Spicy Burger',
        details: 'Get a 20% Discount On First Order',
        price: 11.90,
        image: 'imgs/hamburguesa-removebg-preview.png',
        category: 'burger'
    },
    {
        id: 5,
        name: 'Coca Cola',
        details: 'Get a 20% Discount On First Order',
        price: 8.90,
        image: 'imgs/food-cola-removebg-preview.png',
        category: 'drinks'
    },
    {
        id: 6,
        name: 'Combo 1',
        details: 'Get a 20% Discount On First Order',
        price: 15.90,
        image: 'imgs/popular-combo1.png',
        category: 'combo'
    },
    {
        id: 7,
        name: 'Combo 2',
        details: 'Get a 20% Discount On First Order',
        price: 14.90,
        image: 'imgs/popular-combo2.jpg',
        category: 'combo'
    },
    {
        id: 8,
        name: 'Combo 3',
        details: 'Get a 20% Discount On First Order',
        price: 16.90,
        image: 'imgs/popular-combo3.webp',
        category: 'combo'
    },
    {
        id: 9,
        name: 'Batido Caramelo',
        details: 'Get a 20% Discount On First Order',
        price: 10.90,
        image: 'imgs/bebidafria1-removebg-preview.png',
        category: 'drinks'
    },
    {
        id: 10,
        name: 'Tallarines',
        details: 'Get a 20% Discount On First Order',
        price: 15.90,
        image: 'imgs/pasta2-removebg-preview.png',
        category: 'pasta'
    },
    {
        id: 11,
        name: 'Ravioli',
        details: 'Get a 20% Discount On First Order',
        price: 10.90,
        image: 'imgs/pasta3-removebg-preview.png',
        category: 'pasta'
    },
    {
        id: 12,
        name: 'Spaghetti',
        details: 'Get a 20% Discount On First Order',
        price: 12.90,
        image: 'imgs/pasta4-removebg-preview.png',
        category: 'pasta'
    },
    {
        id: 13,
        name: 'Pizza de Quezo',
        details: 'Get a 20% Discount On First Order',
        price: 25.90,
        image: 'imgs/pizza1-removebg-preview.png',
        category: 'pizza'
    },
    {
        id: 14,
        name: 'Pizza Napolitana',
        details: 'Get a 20% Discount On First Order',
        price: 17.90,
        image: 'imgs/pizza2-removebg-preview.png',
        category: 'pizza'
    },
    {
        id: 16,
        name: 'Pizza Hawaiana',
        details: 'Get a 20% Discount On First Order',
        price: 24.90,
        image: 'imgs/pizza3-removebg-preview.png',
        category: 'pizza'
    },
    {
        id: 17,
        name: 'Pizza Marinara',
        details: 'Get a 20% Discount On First Order',
        price: 20.90,
        image: 'imgs/pizza4-removebg-preview.png',
        category: 'pizza'
    },
    {
        id: 18,
        name: 'Burger de Pollo',
        details: 'Get a 20% Discount On First Order',
        price: 10.90,
        image: 'imgs/burger3-removebg-preview.png',
        category: 'burger'
    },
    {
        id: 19,
        name: 'Burger Clásica',
        details: 'Get a 20% Discount On First Order',
        price: 9.90,
        image: 'imgs/burger4-removebg-preview.png',
        category: 'burger'
    },
    {
        id: 20,
        name: 'Burger de Pavo',
        details: 'Get a 20% Discount On First Order',
        price: 8.90,
        image: 'imgs/burger5-removebg-preview.png',
        category: 'burger'
    },
    {
        id: 21,
        name: 'Burger BBQ',
        details: 'Get a 20% Discount On First Order',
        price: 10.90,
        image: 'imgs/burger2jpg-removebg-preview.png',
        category: 'burger'
    },
    {
        id: 22,
        name: 'Combo 4',
        details: 'Get a 20% Discount On First Order',
        price: 23.90,
        image: 'imgs/combo1-removebg-preview.png',
        category: 'combo'
    },
    {
        id: 23,
        name: 'Combo 5',
        details: 'Get a 20% Discount On First Order',
        price: 9.90,
        image: 'imgs/combo2-removebg-preview.png',
        category: 'combo'
    },
    {
        id: 24,
        name: 'Batido Mixto',
        details: 'Get a 20% Discount On First Order',
        price: 10.90,
        image: 'imgs/bebidafria4-removebg-preview.png',
        category: 'drinks'
    },
    {
        id: 25,
        name: 'Batido Fresa',
        details: 'Get a 20% Discount On First Order',
        price: 8.90,
        image: 'imgs/bebidafria2-removebg-preview.png',
        category: 'drinks'
    },
    {
        id: 25,
        name: 'Sandwich Cubano',
        details: 'Get a 20% Discount On First Order',
        price: 10.90,
        image: 'imgs/sandwich1-removebg-preview.png',
        category: 'sandwich'
    },
    {
        id: 26,
        name: 'Sandwich Montadito',
        details: 'Get a 20% Discount On First Order',
        price: 13.90,
        image: 'imgs/sandwich2-removebg-preview.png',
        category: 'sandwich'
    },
    {
        id: 27,
        name: 'Sandwich Mixto',
        details: 'Get a 20% Discount On First Order',
        price: 11.90,
        image: 'imgs/sandwich3-removebg-preview.png',
        category: 'sandwich'
    },
    {
        id: 27,
        name: 'Sandwich Milanesa',
        details: 'Get a 20% Discount On First Order',
        price: 8.90,
        image: 'imgs/sandwich4-removebg-preview.png',
        category: 'sandwich'
    },
];
