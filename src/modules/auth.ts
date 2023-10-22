import { Elysia, t } from "elysia";
import { supabase } from "libs/supabase";

export const auth = (app: Elysia) =>
  app.group("/auth", (app) =>
    app
      .setModel({
        credentials: t.Object({
          email: t.String({ format: "email" }),
          password: t.String({ minLength: 8 }),
        }),
      })
      .post(
        "sign-up",
        async ({ body }) => {
          const { data, error } = await supabase.auth.signUp(body);

          if (error) return error;

          return data.user;
        },
        {
          schema: {
            body: "credentials",
          },
        }
      )
      .post(
        "/sign-in",
        async ({ body }) => {
          const { data, error } = await supabase.auth.signInWithPassword(body);

          if (error) return error;

          return data.user;
        },
        {
          schema: {
            body: "credentials",
          },
        }
      )
  );
