import data from "./data/rickandmorty/rickandmorty.js";
import {
  filterByStatus,
  filterSpecies,
  filterGender,
  sortAll,
} from "./data.js";

//aqui utilizo a sintaxe de objetopara criar e configurar os elementos html
const crearElementosDeCaracteres = (caracteres) => {
  return caracteres.map((element) => {
    //recebe um array de caracteres e uso o metodo map queitera sobre ele e cria um novo array com elementos html
    // cada elemento é criado utilizando uma sintaxe de template string que permite inserir variaveis no meio do html a sintaxe é ${}
    //dessa maneira é possivel concatenar strings com as informações dos personagens diretamente no html sem a necessidade de variaveis auxiliares
    return `
      <div class="caracteres">
        <img src="${element.image}">
        <h1>${element.name}</h1>
        <p>${element.status}</p>
        <p>${element.species}</p>
        <p>${element.gender}</p>
      </div>
    `;
  });
};

//Aqui e para aparecer na tela
const mostrarTodosLosCaracteres = (data) => {
  const contenedor = document.querySelector("#root");
  const todosLosCaracteres = crearElementosDeCaracteres(data.results);
  contenedor.innerHTML = todosLosCaracteres.join("");
};

const estadoVida = document.getElementById("status");
estadoVida.addEventListener("change", () => {
  const card = document.querySelector("#root");

  card.innerHTML = "";

  const personStatus = filterByStatus(estadoVida.value);

  const filtroStatus = personStatus.map((caracter) =>
    criarcardcaracter(caracter)
  );

  filtroStatus.forEach((divCaracter) => {
    card.appendChild(divCaracter);
  });

  if (estadoVida.value === "Status") {
    todosCaracteres.forEach((divCaracter) => {
      card.appendChild(divCaracter);
    });
  }
});

const especie = document.getElementById("species");
especie.addEventListener("change", () => {
  const card = document.querySelector("#root");
  card.innerHTML = "";
  const personEspecie = filterSpecies(especie.value);

  const filtroEspecie = personEspecie.map((caracter) =>
    criarcardcaracter(caracter)
  );

  filtroEspecie.forEach((divCaracter) => {
    card.appendChild(divCaracter);
  });

  if (especie.value === "Specie") {
    todosCaracteres.forEach((divCaracter) => {
      card.appendChild(divCaracter);
    });
  }
});

const genero = document.getElementById("gender");
genero.addEventListener("change", () => {
  const card = document.querySelector("#root");
  card.innerHTML = "";
  const personGenero = filterGender(genero.value);

  const filtroGenero = personGenero.map((caracter) =>
    criarcardcaracter(caracter)
  );

  filtroGenero.forEach((divCaracter) => {
    card.appendChild(divCaracter);
  });

  if (genero.value === "All") {
    todosCaracteres.forEach((divCaracter) => {
      card.appendChild(divCaracter);
    });
  }
});

const ordenar = document.getElementById("ordenar");
ordenar.addEventListener("change", () => {
  const card = document.querySelector("#root");
  card.innerHTML = "";

  let ordem = "";

  if (ordenar.value === "A-Z") {
    ordem = true;
  } else {
    ordem = false;
  }
  const resultado = data.results;
  const resultadoOrdenado = sortAll(ordem, resultado);
  const resultadoPerso = criarcardcaracter(resultadoOrdenado);
  resultadoPerso.forEach((divCaracter) => {
    card.appendChild(divCaracter);
  });
});
