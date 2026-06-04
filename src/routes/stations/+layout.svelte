<script>
    import { page }                         from '$app/state';
    import { INDEX, updateIndexFromSlug }   from '$lib/utils/store.js';
	import { ui, stationData } 				from '$lib/data/stations.svelte.js';
	// import Audio                         from '$lib/audio.svelte';

    let { children } = $props();

    // Syncs INDEX to the URL slug.
    // Revisit once you've decided whether INDEX means "viewed" or "playing" —
    // if "playing", this shouldn't run on navigation.
    $effect(() => {
        if (page.params.slug) {
            updateIndexFromSlug(page.params.slug, stationData);
        }
    });
</script>

{@render children()}