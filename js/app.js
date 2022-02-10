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

// recupero dal DOM i contenitori del carusel

const slider = document.getElementsByClassName('slider')[0];
console.log(slider);
const slideWrapper = document.querySelector('.slide-wrapper');
//console.log(slideWrapper);

// recupero dal DOM i bottoni per le slide

const arrowUp = document.getElementsByClassName('arrow-up')[0];
const arrowDown = document.getElementsByClassName('arrow-down')[0];
//console.log(arrowUp, arrowDown);

// imposto una variabile contatore per impostare l'active

let activeElement = 0;

// creo il ciclo per le immagini del carusel

for (let i = 0; i < title.length; i++) {

    //console.log(title[i]);

    // creo l'elementi che andranno nel DOM 

    const item = document.createElement('div');
    //console.log(item);
    const img = document.createElement('img');
    //console.log(img);
    const descWrap = document.createElement('div');
    //console.log(descWrap);
    const imgTitle = `<h3 class="title">${title[i]}</h3>`;
    //console.log(imgTitle);
    const imgText = `<p class="subtitle">${text[i]}</p>`;
    //console.log(imgText);

    // aggiungo classi agli elementi

    item.classList.add('item');

    img.src = items[i];
    descWrap.classList.add('desc-wrap');
    
    // metto gli elementi creati nel DOM
    
    slideWrapper.append(item);
    item.append(img, descWrap);
    descWrap.innerHTML = imgTitle + imgText;

}

// recupero dal DOM gli elementi creati e inseriti e li metto in un array

const itemsSlide = [...document.getElementsByClassName('item')];
console.log(itemsSlide);

// aggiungo la classe active all'elemneto corrente

itemsSlide[activeElement].classList.add('active');

// ascoltare l'evento click

arrowDown.addEventListener('click', function() {
    
    if (activeElement < itemsSlide.length - 1) {

        // rimuovere la classe active 
        itemsSlide[activeElement].classList.remove('active');
    
        // incrementare il contatore o diminuire
        activeElement++
    
        // aggiungere la classe active
        itemsSlide[activeElement].classList.add('active');

    }

})

arrowUp.addEventListener('click', function() {

    if (activeElement > 0 ) {

        // rimuovere la classe active 
        itemsSlide[activeElement].classList.remove('active');
        
        // incrementare il contatore o diminuire
        activeElement--
        
        // aggiungere la classe active
        itemsSlide[activeElement].classList.add('active');
        
    }

})

