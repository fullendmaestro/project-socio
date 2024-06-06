import { redirect } from "next/navigation";
import { auth } from "@/edgedb";
import e from "@/dbschema/edgeql-js";

export const { GET, POST } = auth.createAuthRouteHandlers({
  async onBuiltinUICallback({ error, tokenData, isSignUp }) {
    if (error) {
      console.error("sign in failed", error);
    }
    if (!tokenData) {
      console.log("email verification required");
    }
    if (isSignUp) {
      const client = auth.getSession().client;

      const emailData = await client.querySingle<{ email: string }>(`
        SELECT ext::auth::EmailFactor {
          email
        } FILTER .identity = (global ext::auth::ClientTokenIdentity)
      `);

      await client.query(`
        INSERT User {
          name := '',
          email := '${emailData?.email}',
          userRole := 'user',
          identity := (global ext::auth::ClientTokenIdentity)
        }
      `);
    }
    redirect("/home");
  },
  onSignout() {
    redirect("/");
  },
});
