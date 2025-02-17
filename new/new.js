// Initialisation du nombre de commandes
let orderCount = 0;

// Fonction pour ajouter une commande
function addOrder() {
    orderCount++;
    document.getElementById('order-count').textContent = orderCount;
}

// Exemple d'utilisation : Ajout d'une commande lorsque l'utilisateur clique sur un bouton
document.querySelector('.bxs-cart').addEventListener('click', addOrder);

// Afficher un message de bienvenue dans la console
console.log("Bienvenue chez BMW !");

// Initialisation des variables pour la galerie d'images des voitures
let currentImageIndex = 0;
const images = [
    "image1/téléchargement (1).jpg",
    "image1/téléchargement.jpg",
    "image1/téléchargement (3).jpg",
    "image1/téléchargement (2).jpg",
    "image1/téléchargement.jpg"
];

// Fonction pour changer l'image affichée
function nexcar() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    const carImages = document.querySelectorAll("section.sb img");
    carImages.forEach((img, index) => {
        img.src = images[(currentImageIndex + index) % images.length];
    });
}

// Initialiser la galerie d'images au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
    const carImages = document.querySelectorAll("section.sb img");
    carImages.forEach((img, index) => {
        img.src = images[index];
    });
});

// Effets de survol pour le bouton
const button = document.querySelector("section.sb button");

button.addEventListener("mouseover", () => {
    console.log("Prêt à découvrir notre prochaine voiture ?");
});

button.addEventListener("mouseout", () => {
    console.log("Revenez pour voir plus de voitures !");
});

// Fonctionnalité de défilement fluide entre les sections
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetID = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetID);

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
