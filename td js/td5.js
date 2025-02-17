
        // Fonction pour ajouter un nouvel étudiant à la liste
        function ajouterEtudiant() {
            // Récupérer les valeurs des champs du formulaire
            let prenom = document.getElementById("prenom").value;
            let nom = document.getElementById("nom").value;
            let ine = document.getElementById("ine").value;
            let adresse = document.getElementById("adresse").value;

            // Récupérer le tableau où les étudiants sont listés
            let table = document.getElementById("liste");

            // Insérer une nouvelle ligne dans le tableau
            let newRow = table.insertRow();

            // Insérer des cellules dans la nouvelle ligne
            let cellSupprimer = newRow.insertCell(0);
            let cellPrenom = newRow.insertCell(1);
            let cellNom = newRow.insertCell(2);
            let cellINE = newRow.insertCell(3);
            let cellAdresse = newRow.insertCell(4);

            // Ajouter les valeurs des champs du formulaire dans les nouvelles cellules
            cellSupprimer.innerHTML = '<button onclick="supprimerEtudiant(this)">Supprimer</button>';
            cellPrenom.innerHTML = prenom;
            cellNom.innerHTML = nom;
            cellINE.innerHTML = ine;
            cellAdresse.innerHTML = adresse;

            // Réinitialiser le formulaire après l'ajout de l'étudiant
            document.getElementById("formulaire").reset();

            // Empêcher la soumission du formulaire par défaut (éviter le rechargement de la page)
            return false;
        }
        function supprimerEtudiant(button) {  
        button.parentElement.parentElement.remove(); 
        }
    
