// Fonction pour afficher le contenu du div correspondant au titre cliqué
function showHxContent(id) {
    document.getElementById("title" + id).style.display = "block";
}


// Fonction pour masquer le contenu de tous les divs
function hideAllDivs() {
    const divs = document.querySelectorAll('div');
    divs.forEach(div => {
        div.style.display = 'none';
    });
}

// Fonction pour afficher une alerte avec le contenu du énième titre
function alertTitle() {
    const titleNumber = document.getElementById("title").value;
    const titre = document.querySelector(`h1[onClick="showHxContent(${titleNumber})"]`);
    if (titre) {
        alert(titre.textContent);
    } else {
        alert("Titre non trouvé");
    }
}

// Fonction pour effacer le contenu du titre défini par le champ title
function deleteTitle() {
    const titleNumber = document.getElementById("title").value;
    const titre = document.querySelector(`h1[onClick="showHxContent(${titleNumber})"]`);
    if (titre && titre.firstChild) {
        titre.removeChild(titre.firstChild);
    } else {
        alert("Titre non trouvé");
    }
}


