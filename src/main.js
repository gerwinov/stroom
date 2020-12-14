import './style.css';

var names = [
    'Boris van der Ham, 2020',
    'Michline Plukker, 2020',
    'Hugo de Haas van Dorsser, 2020',
    'Rikko Voorberg, 2018',
    'Erno Eskens, 2019',
    'Tim Vreugdenhil, 2019',
    'Tinkebel, 2020',
    'Michiel van Elk, 2017',
    'Linda Polman, 2019',
    'Don Ceder, 2019',
    'Daan Borrel, 2019',
    'Ewald Engelen, 2018',
    'Bram Bakker, 2016',
    'Simon(e) van Saarloos, 2016',
];

function nameShuffle(currentIndex) {
    var newIndex;

    while(true) {
        newIndex = Math.floor(Math.random() * Math.floor(14));
        if (currentIndex !== newIndex) break;
    }

    nameEl.textContent = names[newIndex];
    setTimeout(function() {
        nameShuffle(newIndex)
    }, 7000);
}

var nameEl = document.querySelector('.name-shuffle');
if (nameEl) nameShuffle();
