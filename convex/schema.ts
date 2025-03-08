import { authTables } from "@convex-dev/auth/server";
import { defineSchema } from "convex/server";

// authTables adds all the 'user, account, session' tables to your schema
const schema = defineSchema({
  ...authTables,
});

export default schema;
