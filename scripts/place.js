const currentYear = new Date().getFullYear();
document.querySelector("#current-year").textContent = currentYear;

document.getElementById("lastModified").textContent = document.lastModified;

/* -------------------------------------- */

const temperature = 35;
const windSpeed = 18;

const windChillElement = document.querySelector(".wind-chill");

function calculateWindChill(temperature, windSpeed) {
    return 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
}

if (temperature <= 10 && windSpeed > 4.8) {
    windChillElement.textContent = calculateWindChill(temperature, windSpeed).toFixed(1);
}
else {
    windChillElement.textContent = "N/A"
}