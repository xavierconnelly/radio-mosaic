
// This calls in the data from the file below
import { stationData } from './radioData.js';

// This takes that data and shortens it just one word
// Seems like this is necessary to talk between parent / children
export function load() {
	return {
		banana: stationData.map((station) => ({
			name: station.name,
			slug: station.slug,
			url: station.url,
			about: station.about,
			audio: station.audio,
			highlight: station.highlight,
			fill: station.fill,
			city: station.city,
			country: station.country,
			hero: station.hero,
			tile: station.tile
		}))
	};
}

