<script>
    import { page } from '$app/stores';
    import { INDEX, updateIndexFromSlug } from '$lib/store.js';
    import { stationData } from '/src/routes/stations/radioData.js';

	import MediaQuery from '$lib/mediaQuery.svelte';


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
		<MediaQuery query="(min-width: 700px)" let:matches>
			{#if matches}
	<a	data-sveltekit-noscroll 
		href="/stations/{stationData[nextIndex].slug}"
		class="scanning plus"
		style="background: #{stationData[$INDEX].tint}; color: #{stationData[$INDEX].clockhand}"
	>
</a>

				{stationData[nextIndex].name}
			{:else}

	<a	data-sveltekit-noscroll 
		href="/stations/{stationData[nextIndex].slug}"
		class="scanning plus"
		style="color: #{stationData[$INDEX].clockhand}"
	>
			<svg xmlns="http://www.w3.org/2000/svg" width="26" height="21" viewBox="0 0 26 21" fill="none">
				<path d="M17.3366 19.5754C16.2925 20.6111 14.6085 20.6111 13.5643 19.5754C12.5081 18.5277 12.5081 16.82 13.5643 15.7723L14.4997 14.8445L16.5278 13.1071C16.5668 13.0737 16.5835 13.0212 16.571 12.9714C16.5552 12.909 16.4976 12.8663 16.4332 12.8695L12.7407 13.0526L2.87648 13.0526C1.28784 13.0526 -1.81386e-06 11.7648 -5.1201e-07 10.1761C7.89836e-07 8.58748 1.28785 7.29964 2.87649 7.29964L12.7407 7.29964L16.4332 7.48277C16.4976 7.48597 16.5552 7.4433 16.571 7.38083C16.5835 7.33109 16.5668 7.27854 16.5278 7.24517L14.4997 5.50773L13.5643 4.57994C12.5081 3.53226 12.5081 1.82455 13.5643 0.77687C14.6085 -0.258849 16.2925 -0.258849 17.3366 0.776872L24.6652 8.04622C25.8483 9.21973 25.8483 11.1325 24.6652 12.306L17.3366 19.5754Z" fill="#372D27"/>
			</svg>
			</a>
			{/if}
		</MediaQuery>
	
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
			height: 56px;
			width: 56px;
			border-radius: 40px;
			top: unset;
			bottom: 196px;
			z-index: 99;
		display: flex;
    	justify-content: center;
    	align-items: center;
		background-color: var(--yin);
		border: 1px solid var(--yang);
		}
		.plus {
			left: unset;
			right: 20px;
				writing-mode: unset;

		}
    }
</style>