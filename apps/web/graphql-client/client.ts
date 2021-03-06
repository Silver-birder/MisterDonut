import { createClient } from "urql";

export const client = createClient({
  url: "http://localhost:4000/graphql",
  suspense: true,
  requestPolicy: "network-only",
});
