// Récupération des éléments HTML5
const footerYear = document.querySelector(".year");

// Récupéartion de la date actuelle et de l'année en cours
const today = new Date();
const currentYear = today.getFullYear();

// Affichage dynamique de l'année en cours
footerYear.textContent = `${currentYear}`;
