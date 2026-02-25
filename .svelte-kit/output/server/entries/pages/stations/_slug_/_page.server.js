import { error } from "@sveltejs/kit";
import { s as stationData } from "../../../../chunks/radioData.js";
function load({ params }) {
  const station = stationData.find((s) => s.slug === params.slug);
  if (!station) throw error(404);
  return {
    station
  };
}
export {
  load
};
