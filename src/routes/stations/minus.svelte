<script>
    import { page } from '$app/stores';
    import { INDEX, updateIndexFromSlug } from '$lib/store.js';
    import { stationData } from '/src/routes/stations/radioData.js';

    // Keep INDEX synced with the current URL slug
    $: if ($page.params.slug) {
        updateIndexFromSlug($page.params.slug, stationData);
    }

		import MediaQuery from '$lib/mediaQuery.svelte';


	const lastStation = stationData.length - 1;

	// reactive previous index
	$: prevIndex = $INDEX === 0 ? lastStation : $INDEX - 1;
</script>

{#if $INDEX !== null}

		<MediaQuery query="(min-width: 700px)" let:matches>
			{#if matches}
	<a	data-sveltekit-noscroll 
		href="/stations/{stationData[prevIndex].slug}"
		class="scanning minus"
		style="background: #{stationData[$INDEX].tint}; color: #{stationData[$INDEX].clockhand}"
	>

{stationData[prevIndex].name}
</a>

			{:else}
	<a	data-sveltekit-noscroll 
		href="/stations/{stationData[prevIndex].slug}"
		class="scanning minus"
		style="color: #{stationData[$INDEX].clockhand}"
	>
			<svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 26 21"  fill="none">
				<path d="M8.21611 0.776668C9.26028 -0.259052 10.9443 -0.259052 11.9884 0.776669C13.0446 1.82435 13.0446 3.53206 11.9884 4.57974L11.0531 5.50753L9.0249 7.24497C8.98594 7.27834 8.96924 7.33089 8.98177 7.38063C8.99752 7.4431 9.05517 7.48577 9.11951 7.48257L12.812 7.29944L22.6763 7.29944C24.2649 7.29944 25.5527 8.58729 25.5527 10.1759C25.5527 11.7646 24.2649 13.0524 22.6762 13.0524L12.812 13.0524L9.11951 12.8693C9.05517 12.8661 8.99752 12.9088 8.98177 12.9712C8.96924 13.021 8.98594 13.0735 9.02489 13.1069L11.0531 14.8443L11.9884 15.7721C13.0446 16.8198 13.0446 18.5275 11.9884 19.5752C10.9443 20.6109 9.26027 20.6109 8.21611 19.5752L0.887509 12.3058C-0.295569 11.1323 -0.295568 9.21952 0.88751 8.04601L8.21611 0.776668Z" fill="#372D27"/>
			</svg>
					</a>
			{/if}
		</MediaQuery>
	
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
	}
}

    /* media stylings ~ MOBILE */
    @media (max-width: 500px) {
		.minus {
			left: 10px;
				writing-mode: unset;

		}
    }
</style>