import { createServer } from "miragejs";

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,
    routes() {
      this.namespace = "api";

      this.get("/search_cities", (keyword) => {
        console.log("keyword", keyword);
        return {
          users: [
            { id: 1, name: "Alice" },
            { id: 2, name: "Bob" },
            { id: 3, name: "Charlie" },
          ],
        };
      });
    },
  });

  return server;
}
