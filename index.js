btnAmerica = document.getElementById("btn-america");
btnAranha = document.getElementById("btn-aranha");
btnFerro = document.getElementById("btn-ferro");


let nome, xp, nivel;

btnAmerica.addEventListener("click", () => {
  nome = "Capitão America";
  xp = 5000;

  condicao();
})

btnAranha.addEventListener("click", () => {
  nome = "Homem Aranha";
  xp = 8000;

  condicao();
})

btnFerro.addEventListener("click", () => {
  nome = "Homem de Ferro";
  xp = 14000;

  condicao();
})

function condicao() {
  if (xp < 1000) {
     nivel = "Ferro";
  } else if (xp > 1000 && xp <= 2000) {
     nivel = "Bronze";
  } else if (xp > 2000 && xp <= 5000) {
     nivel = "Prata";
  } else if (xp > 5000 && xp <= 7000) {
     nivel = "Ouro";
  } else if (xp > 7000 && xp <= 8000) {
     nivel = "Platina";
  } else if (xp > 8000 && xp <= 9000) {
     nivel = "Ascendente";
  } else if (xp > 9000 && xp <= 10000) {
     nivel = "Imortal";
  } else {
     nivel = "Radiante";
  }

  alert(`O Herói de nome ${nome} está no nível de ${nivel}`);
}



  










