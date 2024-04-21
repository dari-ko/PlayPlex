// "use strict";

// CARD BLOCK

const cardItem = document.querySelector('#cardItem');

async function loadCard(e) {
    cardItem.innerHTML = `
        <h5 class="card-title">Card title</h5>
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    `;

    const server = 'https://boardgamegeek.com/xmlapi/collection/mkgray/';
    const response = await fetch(server, {
        method: 'GET',
    });

    const responseResult = await response.json();

    if(response.ok){
        getCard(responseResult);
    } else{
        cardItem.innerHTML = responseResult.message;
    }
}

function getCard(data){
    console.log(data);
}

if (cardItem) {
    loadCard();
}
