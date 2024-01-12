import { computeStats, filterData } from "../src/lib/dataFunctions.js";
import data from "../src/data/dataset.js";
import { sortData } from "../src/lib/dataFunctions.js";

describe("filtro por canales", () => {
  it("Debe filtrar por programas de Disney Channel", () => {
    const filterDisney = filterData(data, "channel", "Disney Channel");
    expect(filterDisney.length).toStrictEqual(6);
  });

  it("Debe filtrar por programas de Cartoon", () => {
    const filterCartoon = filterData(data, "channel", "Cartoon Network");
    expect(filterCartoon.length).toStrictEqual(6);
  });

  it("Debe filtrar por programas de Discovery", () => {
    const filterDiscovery = filterData(data, "channel", "Discovery Kids");
    expect(filterDiscovery.length).toStrictEqual(6);
  });

  it("Debe filtrar por programas de Nickelodeon", () => {
    const filterNickelodeon = filterData(data, "channel", "Nickelodeon");
    expect(filterNickelodeon.length).toStrictEqual(6);
  });
});

describe("filtro por público dirigido", () => {
  it("Debe filtrar por programas para niños", () => {
    const filterKids = filterData(data, "targetAudience", "Niños");
    expect(filterKids.length).toBe(7);
  });
  it("Debe filtrar por programas para niños y adolescentes", () => {
    const filterTeenagers = filterData(
      data,
      "targetAudience",
      "Niños y adolescentes"
    );
    expect(filterTeenagers.length).toBe(17);
  });
});

describe("Ordenamiento", () => {
  it("Ordenamiento ascendente", () => {
    const ascendente = sortData(data, "name", "asc");
    expect(ascendente[0]).toStrictEqual(data[12]); 
  });
  it("Ordenamiento descendente", () => {
    const descendente = sortData(data, "name", "desc");
    expect(descendente[0]).toStrictEqual(data[3]);
  });
});

describe("Estadistica Global", () => {
  it("Estadistica General por Canales", () => {
    const channelStatistics = {
      "Cartoon Network": 6,
      "Discovery Kids": 6,
      "Disney Channel": 6,
      Nickelodeon: 6,
    };
    const globalStatictic = computeStats(data);
    expect(globalStatictic).toStrictEqual(channelStatistics);
  });
});
