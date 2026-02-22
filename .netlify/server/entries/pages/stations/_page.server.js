import { s as stationData } from "../../../chunks/radioData.js";
function load() {
  return {
    banana: stationData.map((station) => ({
      name: station.name,
      slug: station.slug,
      url: station.url,
      about: station.about,
      audio: station.audio,
      tint: station.tint,
      clockhand: station.clockhand,
      obi: station.obi,
      obiText: station.obiText,
      title: station.title,
      city: station.city,
      country: station.country
    }))
  };
}
export {
  load
};
