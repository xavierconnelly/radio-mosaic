import { error } 						from '@sveltejs/kit';
import { ui, stationData } 				from '$lib/data/stations.svelte.js';

export function load({ params }) {
  const station = stationData.find(s => s.slug === params.slug);

	if (!station) throw error(404);

	return {
		station
	};
}