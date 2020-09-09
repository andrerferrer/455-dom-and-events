// Posso selecionar o UL com id Players usando qualquer um dos abaixo
document.querySelector('ul');
document.querySelector('#players');
const players = document.querySelector('ul#players');

// Posso selecionar um elemento com ID players usando qualquer um dos abaixo
document.querySelector('#players');
document.getElementById('players');

// Se eu tentar selecionar um elemento que não existe,
const banana = document.querySelector('banana');
// Isso me retorna null

// console.log(`players é:`);
// console.log(players);
// console.log(`banana é:`);
// console.log(banana);

document.querySelector('ul')
const ul = document.querySelector('ul');
// console.log(ul);

// Adicionar HTML adjacente, usamos:
ul.insertAdjacentHTML('beforeend', '<li>Tanise</li>');
ul.insertAdjacentHTML('beforeend', "<li>Lourdes</li>");


// Para selecionar vários, querySelectorAll
const winners = document.querySelectorAll('ol li');
winners.forEach((winner) => {
	// console.log(winner.innerText);
});

// Assim que anexamos França no nosso OL
const ol = document.querySelector('#fifa-wins');
ol.insertAdjacentHTML('beforeend', '<li>France (2 wins)</li>');

// Selecionei meu H2
const h2 = document.querySelector('h2');

// remover a classe red desse h2
h2.classList.remove('red');

// Podemos manipular classes com:
// element.classList.add("red");
// element.classList.remove("red");
// element.classList.toggle("red");

// Manipulando INPUTS
const email = document.getElementById('email');

// Ler de um input
// console.log(email.value);

// Alterar esse input
email.value = 'lourdes_costa@donadaPtoda.com.br';


// Altera texto e HTML de elementos
const home = document.getElementById('home');
// podemos ler o texto
console.log(home.innerText);
// podemos ler o HTML
console.log(home.innerHTML);

home.innerHTML = "Le Wagon <strong>rocks</strong> <a href='http://www.pudim.com.br'>PUDIM</a>";

console.log(home.attributes.href.value)

// Trabalhando com datasets!
// 1. seleciona o elemento
const antonio = document.getElementById('user');

// 2. acessar o dataset (que é um JSON)
console.log(antonio.dataset);

// 3. acessar o favoriteFood dentro do dataset
console.log(antonio.dataset.favoriteFood);

////////////
// EVENTS //
////////////

// // 1. Selecionar o elemento
// const romain = document.getElementById('romain');

// // 2. add event listener
// // element.addEventListener('tipo do evento', callback)

// romain.addEventListener('click', (event) => {

// 	// 3. realizar o comportamento após o evento
// 	event.currentTarget.classList.toggle('img-circle');

// 	// WARNING: event is the click itself
// 	// console.log(event);

// 	// // Posso me referenciar ao objeto do click
// 	// console.log(event.currentTarget);
// 	// console.log(romain);
// });

// 1. Selecionar o elemento
const imgs = document.querySelectorAll('.roundable');

// 2. add event listener
// element.addEventListener('tipo do evento', callback)

imgs.forEach((img) => {
	img.addEventListener('click', (event) => {
		// 3. realizar o comportamento após o evento
		event.currentTarget.classList.toggle('img-circle');
	});
});

