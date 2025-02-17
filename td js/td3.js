class Animal{
    idSet= new Set();
    #id;
    #nom;
    #couleur;
    #age;
    constructor(id, nom, couleur, age){
        if (Animal.idSet.has(id)){

            throw new Error("l'identifient existe déjà")
        } else{
            this.#id = id;
            this.#nom = nom;
            this.#couleur = couleur;
            if ( isNaN(age) || age < 0){
                throw new Error("l'age doit etre une valeur numerique");

            }else{

                this.#age = age;
            }
            Animal.idSet.add(id);
        }
    }

    getId(){
        return this.#id;
    }
    setId(id){
        if (Animal.idSet.has(id)){

            throw new Error("l'identifient existe déjà")
        } else{
            this.#id = id;
        }
    }
    getNom(){
        return this.#nom;
    }
    setNom(nom){
        this.#nom = nom;
    }
    getCouleur(){
        return this.#couleur;
    }
    setCouleur(couleur){
        this.#couleur = couleur;
    }
    getAge(){
        return this.#age;
    }
    setAge(age){
        this.#age = age;
    }
    
    
    cris(){
        throw new Error("La méthode cri() est obligatoire");
    }
    présentation(){
        throw Error("la methode présentateur est obligatoire");
    }
}


class Chien extends Animal {
    #race;
    #estMalade;
    constructor(id, nom, couleur, age, race, estMalade){
        super(id, nom, couleur, age );
        this.#race = race;
        this.#estMalade = estMalade;
    }
    cris(){
        return "Aboyer";
    }
    présentation(){
        return 'Je suis un chien nommé ${this.nom}, de couleur ${this.couleur}, âgé de ${this.age} ans.';
    }
}


class Chat extends Animal {
    #race;
    #estMalade;
    constructor(id, nom, couleur, age, race, estMalade){
        super(id, nom, couleur, age );
        this.#race = race;
        this.#estMalade = estMalade;
    }

    cris(){
        return "Miauler";
    }
    présentation(){
        return 'Je suis un chat nommé ${this.nom}, de couleur ${this.couleur}, âgé de ${this.age} ans.';
    }
}

class Mouton extends Animal{
    constructor(id, nom, couleur, age){
        super(id, nom, couleur, age );
       
    }
    cris(){
        return"beler";
    }


    présentation(){
        return 'Je suis un mouton nommé ${this.nom}, de couleur ${this.couleur}, âgé de ${this.age} ans.';

    }

}


class Vache extends Animal{
    constructor(id, nom, couleur, age){
        super(id, nom, couleur, age , estMalade);
       
    }

    cris(){
        return"meugler"
    }

    présentation(){
        return 'Je suis une vache nommée ${this.nom}, de couleur ${this.couleur}, âgé de ${this.age} ans.';

    }
}

class Ferme {
    #capacite;
    #gardier;
    #animaux;
    #proprietaires;
    constructor(capacite, gardier, animaux, proprietaire){
        this.#capacite = capacite;
        this.#animaux = animaux;
        this.#proprietaires = proprietaire;
    }

    
}


try{
   /* constructor(id, nom, couleur, age, race, estMalade);*/
    let chien = new Chien(1 ,"rex", "Marron",18, "Bergé Allemand ","non" );
    alert("mon chien:" + chien.nom);
  /*  let chat = new Chat();
    let Mouton = new Mouton();
    let vache = new vache();
    let Ferme = new Ferme();*/

} catch (error) {
    console.log("tu affiche l'erreur" + error);
}
