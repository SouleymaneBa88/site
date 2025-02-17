// Fonction pour modifier le contenu de la page HTML
function modifierHtml() {
    // Créer et ajouter le titre principal
    const titre = document.createElement("h1");
    titre.textContent = "Université Virtuelle du Sénégal";
    document.body.appendChild(titre);

    // Créer et ajouter la liste ordonnée
    const liste = document.createElement("ol");

    // Liste des éléments à ajouter
    const elements = ["MAI", "ANG", "MIC", "SEG", "SJP"];

    // Ajouter les éléments à la liste
    elements.forEach(element => {
        const li = document.createElement("li");
        li.textContent = element;
        liste.appendChild(li);
    });

    // Ajouter la liste au corps de la page
    document.body.appendChild(liste);
}

// Appeler la fonction pour modifier la page
modifierHtml();
