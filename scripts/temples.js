const currentYear = new Date().getFullYear();
document.querySelector("#current-year").textContent = currentYear;

document.getElementById("lastModified").textContent = document.lastModified;

const mainnav = document.querySelector('.navigation')
const hambuttom = document.querySelector('#menu');

hambuttom.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambuttom.classList.toggle('show');
});