import { Elysia } from "elysia";
import { auth } from "modules/auth";
import { todos } from "modules/todos";

const app = new Elysia().use(auth).use(todos).listen(9999);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
