const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];
//console.log(items, title, text);

// recupero dal DOM il contenitore delle immagini

const slideWrapper = document.querySelector('.slide-wrapper');
//console.log(slideWrapper);

// creo il ciclo per le immagini del carusel

for (let i = 0; i < items.length; i++) {

    // creo l'elemento che andrà nel DOM 

    const item = document.createElement('div');
    console.log(item);
    const img = document.createElement('img');
    console.log(img);

    item.classList.add('item');


}