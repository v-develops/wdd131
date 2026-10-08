/* -------------------------------------- */
const mainnav = document.querySelector('.navigation')
const hambuttom = document.querySelector('#menu');

hambuttom.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambuttom.classList.toggle('show');
});
/* -------------------------------------- */