import { Elysia, t } from "elysia";
import { supabase } from "libs/supabase";

export const auth = (app: Elysia) =>
  app.group("/auth", (app) =>
    app
      // Login or signup with a magic link
      .post(
        "/login",
        async ({ body }) => {
          const { data, error } = await supabase.auth.signInWithOtp(body);

          if (error) {
            return error;
          }

          return data.user;
        },
        {
          schema: {
            body: t.Object({
              email: t.String({ format: "email" }),
            }),
          },
        }
      )
      // Logout
      .post("/logout", async () => {
        const { error } = await supabase.auth.signOut();

        if (error) {
          return error;
        }

        return new Response("Successfully logged out.");
      })
  );
