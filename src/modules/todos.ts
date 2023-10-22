import { Elysia } from "elysia";

export const todos = (app: Elysia) =>
  app.group("/todos", (app) =>
    app
      // Get all Todos
      .get("/", () => {
        return new Response("Getting all of the Todos");
      })
      // Get Todo using id
      .get("/:id", ({ params: { id } }) => {
        return new Response(`Getting todo with ID: ${id}`);
      })
      // Create a Todo
      .post("/", ({ body }) => {
        return new Response("Creating new Todo");
      })
      // Update a Todo
      .put("/:id", ({ params: { id }, body }) => {
        return new Response(`Updating Todo with ID: ${id}`);
      })
      // Delete a Todo
      .delete("/:id", ({ params: { id } }) => {
        return new Response(`Deleting Todo with ID: ${id}`);
      })
  );
