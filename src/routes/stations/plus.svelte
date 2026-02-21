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
	// $: nextIndex = $INDEX === 0 ? lastStation : $INDEX + 1;
	$: nextIndex = $INDEX !== null ? ($INDEX + 1) % stationData.length : null;


$: console.log('$INDEX', $INDEX, 'nextIndex', nextIndex);
$: console.log($page.params.slug);
</script>

    <!-- not working -->

{#if $INDEX !== null}
	<a	data-sveltekit-noscroll 
		href="/stations/{stationData[nextIndex].slug}"
		class="scanning plus"
		style="background: #{stationData[$INDEX].tint}; color: #{stationData[$INDEX].clockhand}"
	>

		<MediaQuery query="(min-width: 700px)" let:matches>
		{#if matches}
			{stationData[nextIndex].name}
		{:else}
			⬅️
		{/if}
		</MediaQuery>
	</a>
{/if}

<style>
:global(.scanning) {
    text-transform: uppercase;
	position: fixed;
	top: 32px;
	height: calc(100% - 32px);
	width: 30px;
	line-height: 30px;
	text-align: center;
	z-index: 5;	
	transition: 1.5s;
}	

.plus {
	writing-mode: sideways-rl;
	left: 600px;
}

    /* media stylings ~ TABLET */
    @media (min-width: 500px) and (max-width: 1280px) {
        :global(.scanning) {
			transition: 1.5s;
        }
		.plus {
			left: unset;
			right: 0;
		}
    }

    /* media stylings ~ MOBILE */
    @media (max-width: 500px) {
        :global(.scanning) {
			/* display: none; */
			height: 80px;
			width: 80px;
			border-radius: 40px;
			top: unset;
			bottom: 100px;
			z-index: 99;
		}
		.plus {
			left: unset;
			right: 20px;
		}
    }
</style>