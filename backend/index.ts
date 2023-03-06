import { createServer } from "miragejs";

const server = createServer({
  routes() {
    this.namespace = "api";

    this.get("/search_cities", (keyword) => {
      console.log(keyword);
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

export default server;
