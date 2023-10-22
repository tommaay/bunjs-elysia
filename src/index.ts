import { Elysia } from "elysia";
import { auth } from "modules/auth";

const app = new Elysia().use(auth).listen(9999);

console.log(Bun.env.SUPABASE_URL);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
