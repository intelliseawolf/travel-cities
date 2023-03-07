import { createServer } from "miragejs";

import type { City } from "../types";

const allCitiesJSON: Array<[string, number, number]> = require("./cities.json");

const cities: Array<City> = allCitiesJSON.map((city) => ({
  name: city[0],
  latitude: city[1],
  longitude: city[2],
}));

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,
    routes() {
      this.namespace = "api";

      this.get(
        "/search_cities",
        (_, request) => {
          const keyword: string = request.queryParams.keyword;
          let filteredByKeywordCities: City[] = [];

          if (keyword)
            filteredByKeywordCities = cities.filter((city) =>
              city.name.toLowerCase().includes(keyword.toLowerCase())
            );

          return {
            cities: filteredByKeywordCities,
          };
        },
        { timing: 1000 }
      );
    },
  });

  return server;
}
