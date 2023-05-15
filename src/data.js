import data from "./data/rickandmorty/rickandmorty.js"; // pego meus dados de data e trago pra essa página
const resultado = data.results; // aqui estou atribuindo os resultados do meu arquivo data para uma variavel

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


//Ordenação de A-Z
export function sortAll(order, resultado) {
  const charactersCopy = [...resultado];
  //o metodo sort ordena a copia do array de personagens
  charactersCopy.sort((A, Z) => {
    //a função localcompare compara os nomes de personagens e retorna um valor negativo,zero ou positivo.
    if (order) {
      return A.name.localeCompare(Z.name);
    } else {
      return Z.name.localeCompare(A.name);
    }
  });
  return charactersCopy;
}
