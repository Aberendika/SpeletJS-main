function hideCard(card) {
    const back = card.querySelector('.back-view');
    back.style.display = back.style.display === 'none' ? 'block' : 'none';
}


function clickCard(card) {
    card.addEventListener('click', function () {
        hideCard(card);
    });
}


const cards = document.querySelectorAll('.card');
cards.forEach(clickCard);


Niceselect.bind(document.getElementById("a-select"));



