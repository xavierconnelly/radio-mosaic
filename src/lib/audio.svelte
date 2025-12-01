<script>
    import { page } from '$app/stores';
    import { INDEX, updateIndexFromSlug } from '$lib/store.js';
    import { stationData } from '/src/routes/stations/radioData.js';

    // Keep INDEX synced with the current URL slug
    $: if ($page.params.slug) {
        updateIndexFromSlug($page.params.slug, stationData);
    }

	import { onMount } from 'svelte';

	let audioEl;

	//Play the audio matching the current $INDEX
	$: if ($INDEX !== null && audioEl) {
		audioEl.src = stationData[$INDEX].audio;
		audioEl.load();
		audioEl.play().catch(() => {}); // ignore play errors
	}
</script>

<audio bind:this={audioEl} controls></audio>