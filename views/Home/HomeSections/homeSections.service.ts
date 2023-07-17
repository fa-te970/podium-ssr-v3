import { api } from "utils";
import { HomeSections } from ".";

export async function fetchHomeSections() {
  const res = await api.get<{ result: HomeSections }>("/sections");
  return res.result;
}
