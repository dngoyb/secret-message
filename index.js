document.querySelector('form').addEventListener('submit', (event) => {
	event.preventDefault();

	const input = document.querySelector('#message-input');
	const inputLink = document.querySelector('#link-input');
	document.querySelector('#message-form').classList.add('hide');
	document.querySelector('#link-form').classList.remove('hide');

	const encripted = btoa(input.value);
	inputLink.value = `${window.location}#${encripted}`;
	inputLink.select();
});

const { hash } = window.location;
const message = atob(hash.replace('#', ''));

if (message) {
	document.querySelector('#message-form').classList.add('hide');
	document.querySelector('#message-show').classList.remove('hide');
	document.querySelector('h1').innerHTML = message;
}
console.log(message);
