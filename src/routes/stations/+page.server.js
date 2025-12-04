
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

