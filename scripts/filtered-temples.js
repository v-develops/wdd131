const currentYear = new Date().getFullYear();
document.querySelector("#current-year").textContent = currentYear;

document.getElementById("lastModified").textContent = document.lastModified;

const mainnav = document.querySelector('.navigation')
const hambuttom = document.querySelector('#menu');

hambuttom.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambuttom.classList.toggle('show');
});
/* -------------------------------------- */
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/2018/400x250/Payson-Utah-Temple02.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Manaus Brazil",
    location: "Manaus, Brazil",
    dedicated: "2008, June, 20",
    area: 32032,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manaus-brazil/400x250/lds-temple-manaus-brazil-1085299-wallpaper.jpg"
  },
  {
    templeName: "Taipei Taiwan",
    location: "Taipei, Taiwan",
    dedicated: "1982, August, 27",
    area: 9945,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/taipei-taiwan/400x250/taipei-taiwan-temple-lds-1031625-wallpaper.jpg"
  },
  {
    templeName: "Belém Brazil",
    location: "Belém, Brazil",
    dedicated: "2019, August, 17",
    area: 28675,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/belem-brazil/400x250/belem_brazil_temple_exterior.jpg"
  }
]
/* -------------------------------------- */
const templeContainer = document.querySelector(".temple-images");

function displayTemples(templesToBeDisplayed) {

    templeContainer.innerHTML = "";

    templesToBeDisplayed.forEach(temple => {

        const card = document.createElement("figure");

        const isFirstImage = temple === templesToBeDisplayed[0];

        card.innerHTML = `
            <img src="${temple.imageUrl}" width="340" height="215" alt="${temple.templeName}"
            loading="${isFirstImage ? "eager" : "lazy"}"
            fetchpriority="${isFirstImage ? "high" : "auto"}"
            decoding="async">

            <figcaption>
                <h2>${temple.templeName}</h2>
                <p>${temple.location}</p>
                <p>Dedicated: ${temple.dedicated}</p>
                <p>Area: ${temple.area.toLocaleString()} sq ft</p>
            </figcaption>
        `;

        templeContainer.appendChild(card);
    });
}
/* -------------------------------------- */
const navLinks = document.querySelectorAll(".navigation a");

navLinks.forEach(link => {

    link.addEventListener("click", event => {

        event.preventDefault();

        const filter = event.target.textContent;

        if (filter === "Home") {
            displayTemples(temples);
        }

        if (filter === "Old") {
            displayTemples(temples.filter(temple => parseInt(temple.dedicated) < 1900));
        }

        if (filter === "New") {
            displayTemples(temples.filter(temple => parseInt(temple.dedicated) > 2000));
        }

        if (filter === "Large") {
            displayTemples(temples.filter(temple => temple.area > 90000));
        }

        if (filter === "Small") {
            displayTemples(temples.filter(temple => temple.area < 10000));
        }
    });
});
/* -------------------------------------- */
displayTemples(temples);