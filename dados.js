const cards = document.querySelector('main');
const btnLista = document.getElementById('btn-lista');
const btnCards = document.getElementById('btn-cards');

let produtos = [];

fetch('./dados.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        produtos = data; 
        exibirLista();
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

function exibirLista() {
    cards.innerHTML = ''; 
    const ul = document.createElement('ul');
    produtos.forEach(p => {
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="${p.imagem}" alt="${p.nome}">
            <div>
                <h3>${p.nome}</h3>
                <p>${p.descricao}</p>
                <p>Preço: R$ ${p.preco.toFixed(2)}</p>
            </div>
        `;
        ul.appendChild(li);
    });
    cards.appendChild(ul);
}

function exibirCards() {
    cards.innerHTML = ''; 
    produtos.forEach(p => {
        const card = document.createElement('div');
        card.classList.add('card'); 
        card.innerHTML = `
            <img src="${p.imagem}" alt="${p.nome}">
            <div>
                <h3>${p.nome}</h3>
                <p>${p.descricao}</p>
                <p>Preço: R$ ${p.preco.toFixed(2)}</p>
            </div>
        `;
        cards.appendChild(card);
    });
}

btnLista.addEventListener('click', exibirLista);
btnCards.addEventListener('click', exibirCards);