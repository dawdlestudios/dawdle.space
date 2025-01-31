import { type NormalizeOAS, createClient } from "fets";
import type spec from "./spec";

export const api = createClient<NormalizeOAS<typeof spec>>({
	globalParams: { credentials: "same-origin" },
});
