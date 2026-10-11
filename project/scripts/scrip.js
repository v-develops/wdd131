/* -------------------------------------- */
/*Hamburguer Menu*/
const mainnav = document.querySelector('.navigation')
const hambuttom = document.querySelector('#menu');

hambuttom.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambuttom.classList.toggle('show');
});
/* -------------------------------------- */
/*Footer Time*/
const currentYear = new Date().getFullYear();
document.querySelector("#current-year").textContent = currentYear;

document.getElementById("lastModified").textContent = document.lastModified;
/* -------------------------------------- */
/*Stargazing page object cards*/

/*Array with the objects*/
const celestialObjects = [
    {
        id: "moon",
        name: "The Moon",
        type: "Satellite",
        difficulty: "Easy",
        moons: "It's the Moon!",
        rings: "No",
        description: "Earth's natural satellite. Its craters and surface features can be easily seen with binoculars or a simple telescope.",
        image: "images/fullmoon.webp",
        alt: "Photograph of the full Moon"
    },
    {
        id: "mars",
        name: "Mars",
        type: "Planet",
        difficulty: "Easy",
        moons: "2",
        rings: "No",
        description: "The Red Planet. It can appear as a reddish point of light in the night sky, so pay attention to not miss it!",
        image: "images/mars.webp",
        alt: "Photograph of Mars"
    },
    {
        id: "jupiter",
        name: "Jupiter",
        type: "Planet",
        difficulty: "Easy",
        moons: "95",
        rings: "Yes",
        description: "The largest planet in our solar system. Binoculars may reveal some of its 4 brightest moons.",
        image: "images/jupiter.webp",
        alt: "Photograph of Jupiter"
    },
    {
        id: "polaris",
        name: "Polaris",
        type: "Star",
        difficulty: "Easy",
        moons: "N/A",
        rings: "N/A",
        description: "Known as the North Star, Polaris is located close to the north celestial pole.",
        image: "images/polaris.webp",
        alt: "Composed image of Polaris"
    },
    {
        id: "pleiades",
        name: "Pleiades",
        type: "Star Cluster",
        difficulty: "Easy",
        moons: "N/A",
        rings: "N/A",
        description: "An open star cluster that appears as a small group of stars. It is also known as the Seven Sisters.",
        image: "images/pleiades.webp",
        alt: "Composed Photograph of the Pleiades Star Cluster"
    },
    {
        id: "orion-nebula",
        name: "Orion Nebula",
        type: "Nebula",
        difficulty: "Medium",
        moons: "N/A",
        rings: "N/A",
        description: "A star-forming region in the constellation Orion. Under dark skies, it can be spotted with the naked eye.",
        image: "images/orion-nebula.webp",
        alt: "Composed Photograph of the Orion Nebula"
    },
    {
        id: "andromeda",
        name: "Andromeda Galaxy",
        type: "Galaxy",
        difficulty: "Medium",
        moons: "N/A",
        rings: "N/A",
        description: "A nearby large galaxy that can appear as a faint patch of light under dark skies.",
        image: "images/andromeda.webp",
        alt: "Composed Photograph of the Andromeda Galaxy"
    },
    {
        id: "sun",
        name: "The Sun",
        type: "Star",
        difficulty: "Easy",
        moons: "0",
        rings: "N/A",
        description: "The star at the center of our solar system. NEVER look directly at the Sun without proper certified solar viewing equipment.",
        image: "images/sun.webp",
        alt: "Photograph of the Sun"
    }
];

/*Making the objects*/
const objectsContainer = document.querySelector("#objects-container");
const objectFilter = document.querySelector("#object-filter");
const objectCount = document.querySelector("#object-count");

let favoriteObjects = JSON.parse(localStorage.getItem("stargazingFavorites")) || [];

function displayObjects(objects) {

    if (!objectsContainer || !objectCount) {
        return;
    }

    objectCount.textContent = `${objects.length} objects found`;

    if (objects.length === 0) {
        objectsContainer.innerHTML = `<p class="empty-message">No objects found in this category. Try selecting another one!</p>`;
        return;
    }

    objectsContainer.innerHTML = objects.map(object => `
        <article class="object-card">
        <img src="${object.image}" alt="${object.alt}" width="500" height="500" loading="lazy">

            <div class="object-card-content">
                <h4>${object.name}</h4>
                <p><strong>Category:</strong> ${object.type}</p>
                <p><strong>Difficulty:</strong> ${object.difficulty}</p>
                <p><strong>Number of Moons:</strong> ${object.moons}</p>
                <p><strong>Ring System:</strong> ${object.rings}</p>
                <p>${object.description}</p>

                <button type="button" class="favorite-button" data-object-id="${object.id}">
                    ${favoriteObjects.includes(object.id)
                        ? "★ Saved to My List"
                        : "☆ Add to My List"}
                </button>
            </div>
        </article>
    `).join("");
}

function filterObjects() {
    if (!objectFilter) {
        return;
    }

    const selectedCategory = objectFilter.value;

    const filteredObjects = selectedCategory === "all"
        ? celestialObjects
        : celestialObjects.filter(object => object.type === selectedCategory);

    displayObjects(filteredObjects);
}

/*Keep track*/
if (objectFilter) {
    objectFilter.addEventListener("change", filterObjects);
}

if (objectsContainer) {
    objectsContainer.addEventListener("click", event => {const button = event.target.closest(".favorite-button");

        if (!button) {
            return;
        }

        const objectId = button.dataset.objectId;
        const alreadySaved = favoriteObjects.includes(objectId);

        if (alreadySaved) {
            favoriteObjects = favoriteObjects.filter(id => id !== objectId);
        } 
        else {
            favoriteObjects.push(objectId);
        }

        localStorage.setItem("stargazingFavorites",JSON.stringify(favoriteObjects));

        filterObjects();
    });
}

filterObjects();
/* -------------------------------------- */
/* Favorites page cards */

const favoritesContainer = document.querySelector("#favorites-container");
const clearListButton = document.querySelector("#clear-list");

function displayFavoriteObjects() {
    if (!favoritesContainer) {
        return;
    }

    const savedObjects = celestialObjects.filter(object =>favoriteObjects.includes(object.id));

    if (savedObjects.length === 0) {
        favoritesContainer.innerHTML = `<p class="empty-message">Your list is empty! Explore the night sky and add objects you would like to observe.<a href="stargazing.html">Explore celestial objects</a></p>`;

        if (clearListButton) {
            clearListButton.hidden = true;
        }

        return;
    }

    if (clearListButton) {
        clearListButton.hidden = false;
    }

    favoritesContainer.innerHTML = savedObjects.map(object => `
        <article class="object-card">
            <img src="${object.image}" alt="${object.alt}" width="500" height="500" loading="lazy">

            <div class="object-card-content">
                <h4>${object.name}</h4>
                <p><strong>Category:</strong> ${object.type}</p>
                <p><strong>Difficulty:</strong> ${object.difficulty}</p>
                <p><strong>Number of Moons:</strong> ${object.moons}</p>
                <p><strong>Ring System:</strong> ${object.rings}</p>
                <p>${object.description}</p>

                <button type="button" class="favorite-button remove-favorite" data-object-id="${object.id}">Remove from My List</button>
            </div>
        </article>
    `).join("");
}

if (favoritesContainer) {
    favoritesContainer.addEventListener("click", event => {
        const button = event.target.closest(".remove-favorite");

        if (!button) {
            return;
        }

        const objectId = button.dataset.objectId;

        favoriteObjects = favoriteObjects.filter(id => id !== objectId);

        localStorage.setItem("stargazingFavorites",JSON.stringify(favoriteObjects));

        displayFavoriteObjects();
    });
}

if (clearListButton) {
    clearListButton.addEventListener("click", () => {
        favoriteObjects = [];

        localStorage.setItem("stargazingFavorites",JSON.stringify(favoriteObjects));

        displayFavoriteObjects();
    });
}

displayFavoriteObjects();
/* -------------------------------------- */