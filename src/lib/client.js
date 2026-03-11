import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "w3v332qs",
  dataset: "production",
  apiVersion: "2026-01-01",
  useCdn: false,
});