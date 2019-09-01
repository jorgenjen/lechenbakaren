window.onload = function () {
  //ord endrer
  var slagOrd = document.getElementById("slagOrd");
  var slagOrdene = ["mat", "lidenskap", "smaken av Norge", "harmoni", "sammhold", "delikatesse"];
  var skrivTid; // setter den her slik at den blir global og tilgjennelig i alle funksjoner
  setTimeout(slett, 600);
  var ordTeller = 0;
  var bokstavTeller = 0;
  function slett() {
    slagOrd.style.backgroundColor = "rgba(63, 78, 217, 0.94)";
    slagOrd.style.color = "#eee";
    setTimeout(ordDanner, 200);
  }
  function ordDanner(){
    slagOrd.innerHTML = " ";
    slagOrd.style.backgroundColor = "rgba(63, 78, 217, 0) ";
    slagOrd.style.color = "black";
    if (ordTeller >= slagOrdene.length) {
      ordTeller = 0;
    }
    skrivTid = setInterval(skriv, 150);
  }
  function skriv() {
    var e = slagOrdene[ordTeller].length;
    if (bokstavTeller == e) {
      clearInterval(skrivTid);
      ordTeller++;
      bokstavTeller = 0;
      setTimeout(slett, 1400);
    }
    else {
      slagOrd.innerHTML += slagOrdene[ordTeller][bokstavTeller];
      bokstavTeller++;
    }
  }
// cursor

  var cursorTid = setInterval(cursor, 600);
  var bort = true;
  function cursor() {
    //console.log("gogogo");
    if (bort) {
      slagOrd.style.borderRight = "0.1vw solid rgba(54, 53, 53, 0)";
      bort = false;
    }
    else {
      slagOrd.style.borderRight = "0.1vw solid rgba(54, 53, 53, 1)";
      bort = true;
    }
  }
  // bakgrunnsbilde bytter
  var hoyde = window.innerHeight;
  var bytteDiff = window.innerHeight*0.18; //settes til 0.18 for å ha litt å gå på det er egentlig 0.2
  var bakgrunn = document.getElementById("bakgrunn");
  var om = document.getElementsByClassName("om")[0];
  var video = true;
  window.onscroll = function(){

  var omTopp = om.getBoundingClientRect().top;
  if (omTopp > -(bytteDiff/2) && !video) {
    bakgrunn.innerHTML = '<video class="bak" src="video/kokker.mp4" autoplay loop muted></video>';
    bakgrunn.style.height = "70vh";
    video = true;
  }
  else if(omTopp < -(bytteDiff/2) && video){
    bakgrunn.innerHTML = '<img src="bilder/resturant.jpg" class="bak"/>';
    bakgrunn.style.height = "110vh";
    //bakgrunn.style.marginTop = "-20vh";
    video = false;
  }
 }

// person bytter
var bildeNavn = [["erika.jpg", "hans.jpg", "lars.jpg", "lin.jpg", "dean.jpg", "marius.jpg", "anders.jpg", "shriki.jpg", "Ingvild.jpg", "rune.jpg"], ["Erika", "Hans", "Lars", "Lin", "Dean", "Marius", "Anders", "Shriki", "Ingvild", "Rune"]];

var portrettBak = document.getElementById("portrettBak");
var portrettFrem = document.getElementById("portrettFrem");
var navnBak = document.getElementById("navnBak");
var navnFrem = document.getElementById("navnFrem");

var indexFrem = 0;
var byttTimer = setInterval(bytt, 3000);
function bytt(){
  portrettFrem.style.transition = "1.2s";
  portrettBak.style.transition = "1.2s";
  navnBak.style.transition = "1.2s";
  navnFrem.style.transition = "1.2s";
  portrettBak.style.opacity = 1;
  portrettFrem.style.opacity = 0;
  navnBak.style.opacity = 1;
  navnFrem.style.opacity = 0;
  setTimeout(sourceEndrer, 1300);
}
function sourceEndrer(){
  portrettFrem.style.transition = "0s";
  portrettBak.style.transition = "0s";
  navnBak.style.transition = "0s";
  navnFrem.style.transition = "0s";
  indexFrem++
  navnFrem.innerHTML = bildeNavn[1][indexFrem]
  portrettFrem.src = "bilder/portrett/" + bildeNavn[0][indexFrem];
  portrettFrem.style.opacity = 1;
  portrettBak.style.opacity = 0;
  navnBak.style.opacity = 0;
  navnFrem.style.opacity = 1;
  portrettBak.src = "bilder/portrett/" + bildeNavn[0][(indexFrem + 1)];
  navnBak.innerHTML = bildeNavn[1][(indexFrem + 1)];
  if ((indexFrem + 1) == bildeNavn[0].length) {
    indexFrem = -1;
    portrettBak.src = "bilder/portrett/" + bildeNavn[0][(indexFrem + 1)];
    navnBak.innerHTML = bildeNavn[1][(indexFrem + 1)]
  }
}

//logo flytting GJøR OM TID
// var pos;
// document.onscroll = function flytt(){
//
// }



//resturant meny



// var venstre = document.getElementById("venstre");
// venstre.onclick = flytt(20);
// document.getElementById("hoyre").onclick = flytt(-20);


// var alle = document.getElementsByClassName("alle")[0];
// var en = document.getElementsByClassName("en")[0];
// var to = document.getElementsByClassName("to")[0];
// var meny = [["Pasta", "Entrecote", "Pizza Margarita", "Pizza Bufalala", "Pizza Focosa", "Pizza Napolenta", "Pizza Vesuvio", "Pizza Capricciosa", "Pizza Ventricina", "Pizza Parma", "Burger", "Fiskesuppe", "sushi", "laksefilet", "Sardiner", "Brownies"],
//            [130, 220, 120, 240, 230, 220, 160, 150, 130, 135, 180, 100, 220, 190, 170, 180, 30]];
// var sideNr = 1;

// document.getElementsByClassName("hoyre")[0].onclick = test();
// document.getElementsByClassName("venstre")[0].onclick = test();

// document.getElementById("venstre").onclick = test();
// function test(){
//   console.log("dett");
// }
//
//
// function print(e){
//   for (var i = e; i < (e + 6); i++) {
//     en.innerHTML += meny[0][i] + meny[1][i] + "<br>";
//     to.innerHTML += meny[0][(i + 6)] + meny[1][(i + 6)] + "<br>"
//   }
// }

//form
var bekreftet = false;
var top = document.getElementsByClassName("top")[0];
document.getElementById("form").onsubmit = function(evt){
   evt.preventDefault();
   if (!bekreftet) {
     document.getElementById("bekreft").innerHTML = "Oppdater!";
     bekreftet = true;
     top.innerHTML += "<p>Navn: " + document.getElementById("navn").value + "<br>Kontaktinfo: " + document.getElementById("mail").value + ", " + document.getElementById("tlf").value + "<br>Levering til: " + document.getElementById("adresse").value + "<br>Leveringsdato: " + document.getElementById("dato").value + " klokken: " + document.getElementById("tid").value + "</p>";
   }
   else{

     var ned = document.getElementById("ned").value;
     console.log("gr");
     console.log(ned);
     top.innerHTML = "";
     top.innerHTML += "<h1>Lechnbakaren</h1><p>Tlf: 73 82 54 32</p><p>Navn: " + document.getElementById("navn").value + "<br>Kontaktinfo: " + document.getElementById("mail").value + ", " + document.getElementById("tlf").value + "<br>Levering til: " + document.getElementById("adresse").value + "<br>Leveringsdato: " + document.getElementById("dato").value + " klokken: " + document.getElementById("tid").value + "</p>";
     if (bekreftet && rettEksisterer) {
       //set button farge til green og cursor til pinter
     }
   }
}
var catering = [["fiskesuppe", "Fiskesuppe", "tapas", "Tapas", "sushi", "Sushi", "kylingsalat", "Kylingsalat", "foccacia", "Foccaia"], [600, 950, 550, 700, 250]]
var varer = document.getElementsByClassName("varer")[0];
var rettEksisterer = false;
document.getElementById("legTil").onclick = function(){
  rett = document.getElementById("rett").value; //global
  for (var i = 0; i < catering[0].length; i++) {
    if(rett == catering[0][i]){
      rettEksisterer = true;
      print(Math.floor(i/2));
      break;
    }
    // console.log(i);
  }
}
var pris = [];
function print(e){
  var antall = document.getElementById("antall").value;
  varer.innerHTML += "<v>" + antall +  "x" + rett + "<v/><span>" + (catering[1][e]*antall) + " nok</span><br>" ;
  for (var z = 0; z < antall; z++) {
    pris.push(catering[1][e]);
    console.log(catering[1][e]);
  }
  sum();
}
function sum(){
  var totalt = 0;
  for (var f = 0; f < pris.length; f++) {
    totalt = (totalt +  pris[f]);
  }
  document.getElementsByClassName("total")[0].innerHTML = "<v/>Sum " + pris.length + " varer<v/><span>" + totalt + " nok<span/>"
}

}
var noPos = -20.5;
var menyAlle = document.getElementById("menyAlle");
var MenyTeller = document.getElementById("menyTeller");
function flytt(e){
  noPos = noPos + e;
  console.log(noPos);
  menyAlle.style.marginLeft = noPos + "vw";
  if (noPos == 0) {
    menyTeller.innerHTML = "5/5";
    console.log("går");
    noPos = (-102.5);
    setTimeout(function(){
      flyttYtter(noPos)
    }, 500)
  }
  else if (noPos == -123) {
    menyTeller.innerHTML = "1/5";
    noPos = (-20.5);
    setTimeout(function(){
      flyttYtter(noPos)
    }, 500)

  }
  menyTeller.innerHTML = (noPos/-20.5) + "/5";
//sang

}
function flyttYtter(b){
  console.log("halla");
  menyAlle.style.transition = "0s";
  menyAlle.style.marginLeft = b + "vw";
  setTimeout(reset, 40);
  console.log(b);
}
function reset(){
  menyAlle.style.transition = " margin-left 0.5s";
}




var sang = document.getElementById("sang");
var lyd = document.getElementById("lyd");
sang.onclick = function start(){
  console.log("hopsasa");
  if (sang.checked) {
      lyd.play()
      console.log("nu");
  }
  else {
    lyd.pause()
  }
}












//bunn
