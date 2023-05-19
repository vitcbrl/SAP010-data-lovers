//import porcentagem from '../scr/data.js';
import data from "../src/data/rickandmorty/rickandmorty.js";
import {
  ordenar,
  filterByStatus,
  filterSpecies,
  filterGender,
} from "../src/data.js";

//aqui aliens
describe("testando o filtro de Ordem alfabética", () => {
  it("carregando os personagens a-z", () => {
    const dadosOrdenados = ordenar(data.results, "az");

    expect(dadosOrdenados[0].name).toEqual("Abadango Cluster Princess");
  });

  it("carregando os personagens z-a", () => {
    const dadosOrdenados = ordenar(data.results, "za");

    expect(dadosOrdenados[0].name).toEqual("Zick Zack");
  });
});

describe("testando o filtro de estado de vida", () => {
  it("carregando os personagens vivos", () => {
    const dadosFiltrados = filterByStatus(data.results, "Alive");
    expect(dadosFiltrados[0].name).toEqual("Rick Sanchez");
  });

  it("carregando os personagens mortos", () => {
    const dadosFiltrados = filterByStatus(data.results, "Dead");

    expect(dadosFiltrados[0].name).toEqual("Adjudicator Rick");
  });
});

describe("testando filtro de gênero", () => {
  it("carregando os personagens com gênero masculino", () => {
    const dadosFiltrados = filterGender(data.results, "Male");

    expect(dadosFiltrados[1].name).toEqual("Morty Smith");
  });

  it("carregando personagens de gênero feminino", () => {
    const dadosFiltrados = filterGender(data.results, "Female");

    expect(dadosFiltrados[0].name).toEqual("Summer Smith");
  });
});

describe("testando filtro de espécie", () => {
  it("carregando os personagens de espécie humana", () => {
    const dadosFiltrados = filterSpecies(data.results, "Human");

    expect(dadosFiltrados[0].name).toEqual("Rick Sanchez");
  });

  it("carregando personagens de espécie alienígena", () => {
    const dadosFiltrados = filterSpecies(data.results, "Alien");
    expect(dadosFiltrados[2].name).toEqual("Alien Morty");
  });
});
