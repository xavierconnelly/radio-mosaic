import { error } from '@sveltejs/kit';
    import { stationData } from '/src/routes/stations/radioData.js';

export function load({ params }) {
  const station = stationData.find(s => s.slug === params.slug);

	if (!station) throw error(404);

	return {
		station
	};
}