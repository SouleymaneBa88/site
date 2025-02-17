// Sélectionne l'élément <textarea> par son id "my-text"
var myText = document.getElementById("textInput");
// Sélectionne l'élément <p> par son id "result"
var result = document.getElementById("result"); 
// Définit la limite de caractères à 250
var limit = 250;
// Initialise le texte de l'élément <p> à "0/250"
result.textContent = 0 + "/" + limit;

// Ajoute un écouteur d'événement "input" à la zone de texte
myText.addEventListener("input", function() {
    // Récupère la longueur du texte dans la zone de texte
    var textLength = textInput.value.length;
    // Met à jour le texte de l'élément <p> pour afficher le nombre de caractères actuels et la limite
    result.textContent = textLength + "/" + limit;

    // Change la couleur de la bordure de la zone de texte et du texte de l'élément <p> si la limite est dépassée
    if (textLength > limit) {
        textInput.style.borderColor = "#ff2851"; // Couleur de bordure rouge pour la zone de texte
        result.style.color = "#ff2851"; // Couleur de texte rouge pour l'élément <p>
    } else {
        textInput.style.borderColor = "#b2b2b2"; // Couleur de bordure grise pour la zone de texte
        result.style.color = "#737373"; // Couleur de texte grise pour l'élément <p>
    }
});

// Fonction pour insérer un paragraphe dans le <textarea> avec l'id "myTextarea"
function insertParagraph() {
    // Sélectionne la zone de texte par son id "myTextarea"
    const textarea = document.getElementById("textInput");
    // Définition du paragraphe à ajouter
    const paragraph = "<p>Ceci est un paragraphe inséré.</p>";
    // Ajoute le paragraphe à la fin du contenu existant de la zone de texte
    textarea.value += paragraph;
}
let compteur = 0;
function ajouterCommande() {
    compteur++;
    document.getElementById('cart').textContent = compteur;
}
document.getElementById('searchform').addEventListener('submit', function(event) {

    var searchQuery = document.getElementById('search1').value;
    if (searchQuery ==="") {
        event.preventDefault();
        alert("Veuillez entrer un terme de recherche.");
    }

})