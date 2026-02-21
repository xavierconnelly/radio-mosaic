<script>
    import { page } from '$app/stores';
    import { INDEX, updateIndexFromSlug } from '$lib/store.js';
    import { stationData } from '/src/routes/stations/radioData.js';

    // Keep INDEX synced with the current URL slug
    $: if ($page.params.slug) {
        updateIndexFromSlug($page.params.slug, stationData);
    }

	const lastStation = stationData.length - 1;

	// reactive previous index
	$: prevIndex = $INDEX === 0 ? lastStation : $INDEX - 1;
</script>

{#if $INDEX !== null}
	<a	data-sveltekit-noscroll 
		href="/stations/{stationData[prevIndex].slug}"
		class="scanning minus"
		style="background: #{stationData[$INDEX].tint}; color: #{stationData[$INDEX].clockhand}"
	>
		{stationData[prevIndex].name}
	</a>
{/if}

<style>

.minus {
	writing-mode: sideways-lr;
	left: 270px;
	z-index: 9999;
}

/* media stylings ~ TABLET */
@media (min-width: 500px) and (max-width: 1280px) {
	.minus {
		left: 300px;
		left: 20px
	}
}
</style>