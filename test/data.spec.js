import data from "../src/data/rickandmorty/rickandmorty.js";
import {
  filterByStatus,
  filterSpecies,
  filterGender,
  ordenar,
} from "../src/data.js";

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
    const dadosOrdenados = filterByStatus(data.results, "Alive");

    expect(dadosOrdenados).toBe([{ name: "Baby Ricky", status: "Alive" }]);
  });

  it("carregando os personagens mortos", () => {
    const dadosOrdenados = filterByStatus(data.results, "Dead");

    expect(dadosOrdenados).toBe([{ name: "Adjudicator Rick", status: "Dead" }]);
  });
});

describe("testando filtro de gênero", () => {
  it("carregando os personagens com gênero masculino", () => {
    const dadosOrdenados = filterGender(data.results, "Male");

    expect(dadosOrdenados[1].name).toEqual("Morty Smith");
  });

  it("carregando personagens de gênero feminino", () => {
    const dadosOrdenados = filterGender(data.results, "Female");

    expect(dadosOrdenados[0].name).toEqual("Summer Smith");
  });
});

describe("testando filtro de espécie", () => {
  it("carregando os personagens de espécie humana", () => {
    const dadosOrdenados = filterSpecies(data.results, "Human");

    expect(dadosOrdenados[0].name).toEqual("Rick Sanchez");
  });

  it("carregando personagens de espécie alienígena", () => {
    const dadosOrdenados = filterSpecies(data.results, "Alien");

    expect(dadosOrdenados[2].name).toEqual("Alien Morty");
  });

  it("carregando personagens de espécie vampiro", () => {
    const dadosOrdenados = filterSpecies(data.results, "Vampire");

    expect(dadosOrdenados[1].name).toEqual("Vampire Master");
  });
});
