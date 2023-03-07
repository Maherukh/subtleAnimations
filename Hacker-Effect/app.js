let h1 = document.querySelector('h1');
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

h1.onmouseover = event => {
    event.target.innerText = letters[Math.floor(Math.random() * 26)];
}