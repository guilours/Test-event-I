var ensembleHTML = document.querySelectorAll(
  ".ensemble .formeCarre , .ensemble .formeRond"
);

var infoHTML = document.querySelector(".info");

for (var i = 0; i < ensembleHTML.length; i++) {
  ensembleHTML[i].addEventListener("mouseover", auSurvol);
  ensembleHTML[i].addEventListener("mouseout", onQuitteLaZone);
  ensembleHTML[i].addEventListener("click", auClic);
}

function auSurvol(event) {
  if (this == ensembleHTML[0]) {
    this.classList.add("formeCarreChange");

    var element = document.createElement("p");
    var texte = document.createTextNode("Cliquez sur la forme bleue");
    var balise = element.appendChild(texte);

    document.querySelector(".info").appendChild(balise);
    infoHTML.style.left = "280px";
  } else {
    this.classList.add("formeRondchange");

    var element = document.createElement("p");
    var texte = document.createTextNode("Cliquez sur la forme rose");
    var balise = element.appendChild(texte);

    document.querySelector(".info").appendChild(balise);
    infoHTML.style.left = "560px";
  }
  this.style.cursor = "pointer";
}

function auClic(event) {
  if (this == ensembleHTML[0]) {
    ensembleHTML[0].style.backgroundColor = "steelBlue";
  } else {
    this.style.backgroundColor = "fireBrick";
  }
}

function onQuitteLaZone(event) {
  ensembleHTML[0].classList.remove("formeCarreChange");
  ensembleHTML[0].style.backgroundColor = "lightSteelBlue";
  // ensembleHTML[0].classList.remove("formeCarreChange");
  // ensembleHTML[0].style.backgroundColor = "lightSteelBlue";

  ensembleHTML[1].classList.remove("formeRondchange");
  ensembleHTML[1].style.backgroundColor = "lightCoral";
  // ensembleHTML[1].classList.remove("formeRondchange");
  // ensembleHTML[1].style.backgroundColor = "lightCoral";

  var element = document.querySelector(".info");

  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
