function f(){
    alert("BOnjour");
}
/*if et else
if(new Date().getHours() > 18) {
    document.getElementById("demo").innerHTML = "Bonsoir!";
}
else{
    document.getElementById("demo").innerHTML = " Bonjour!";
}*/

/* else if
const heure = new Date().getHours();
let message ;

if(heure < 10){
    message="bonjour";
}
else if(heure < 20)
{
    message="bonne journée";
}
else{
    message="bonsoir"
}
 document.getElementById("demo").innerHTML=message; */
  
 let day;
 switch (new Date().getDay()){
     case 0:
             day = "Dimanche";
              break;
         case 1:
              day ="Lundi";
                  break;
          case 2:
                 day ="Mardi";
                 break;
          case 3:
                 day ="Mercredi";
                  break; 
          case 4:
             day ="Jeudi";
                  break; 
          case 5:
             day ="Vendredi";
                 break; 
          case 6:
             day ="Samedi";
                  break;
         default:
             day = "Jour introuvable!";
             break;
 }
 document.getElementById("demo").innerHTML=" Aujourd'hui c'est " + day;