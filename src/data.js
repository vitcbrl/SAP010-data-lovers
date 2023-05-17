import data from "./data/rickandmorty/rickandmorty.js"; // pego meus dados de data e trago pra essa página
const resultado = data.results; // aqui estou atribuindo os resultados do meu arquivo data para uma variavel
//oi carolzi

//crio uma function que a finalidade é ver se o personagem ta vivo ou morto.Coloco o export pois essa função vai ser usada no meu arquivoo main.js
export function filterByStatus(status) {
  const filteredStatus = resultado.filter((resultado) => {
    return resultado.status === status;
  });
  return filteredStatus;
}

export function filterSpecies(species) {
  const filteredSpecies = resultado.filter(
    (resultado) => resultado.species === species
  );
  return filteredSpecies;
}

export function filterGender(gender) {
  const filteredGender = resultado.filter((resultado) => {
    return resultado.gender === gender;
  });
  return filteredGender;
}

/*export function filterByOrigin(origin) {
  const filteredOrigin = resultado.filter((resultado) => {
    return resultado.origin.name === origin;
  });
  return filteredOrigin;
}

export function filterByLocation(location) {
  const filteredOrlocation = resultado.filter((resultado) => {
    return resultado.location.name === location;
  });
  return filteredOrlocation;
}*/

export function porcentagem(data) {
  const porcento = (data * 100) / 31;
  const porcentoArredondado = Math.round(porcento);
  return porcentoArredondado;
}

export function ordenar(dadosFiltrados, tipoOrdenacao) {
  const novaArray = [...dadosFiltrados];

  if (tipoOrdenacao === "az") {
    novaArray.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      } else {
        return +1;
      }
    });
  } else if (tipoOrdenacao === "za") {
    //exbibe na ordem inversa
    novaArray.sort(function (a, b) {
      if (a.name > b.name) {
        return -1;
      } else {
        return +1;
      }
    });
  }
  return novaArray;
}
