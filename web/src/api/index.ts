import { type NormalizeOAS, type OASModel, createClient } from "fets";
import type spec from "./spec";

type Spec = NormalizeOAS<typeof spec>;

export const api = createClient<Spec>({
	globalParams: { credentials: "same-origin" },
});

export type Site = OASModel<Spec, "SiteResponse">;
