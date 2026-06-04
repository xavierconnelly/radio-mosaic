<svelte:window onkeydown={handleKey} />


<script>
    import { page }                         from '$app/state';
	import { goto } 						from '$app/navigation';
	
    import { INDEX, updateIndexFromSlug } 	from '$lib/utils/store.js';
	import { ui, stationData } 				from '$lib/data/stations.svelte.js';

    import { mediaQuery }                   from '$lib/utils/mediaQuery.svelte.js';


    // Keep INDEX synced with the current URL slug
	$effect(() => {
		if (page.params.slug) {
			updateIndexFromSlug(page.params.slug, stationData);
		}
	});

    const mobile = mediaQuery('(max-width: 700px)');

	const lastStation = stationData.length - 1;

	// reactive previous index
	let nextIndex = $derived($INDEX !== null ? ($INDEX + 1) % stationData.length : null);

	function handleKey(e) {
		console.log('key:', e.key);

		if (e.key === 'F9') {
			e.preventDefault();
			goto(`/stations/${stationData[nextIndex].slug}`);
		}
	}
</script>

{#if $INDEX !== null}
	{#if mobile.matches}
		<a	data-sveltekit-noscroll 
			href="/stations/{stationData[nextIndex].slug}"
			class="scanning plus"
			style="color: var(--yang)"
			aria-label="button"
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 26 21" fill="none">
				<path d="M17.3366 19.5754C16.2925 20.6111 14.6085 20.6111 13.5643 19.5754C12.5081 18.5277 12.5081 16.82 13.5643 15.7723L14.4997 14.8445L16.5278 13.1071C16.5668 13.0737 16.5835 13.0212 16.571 12.9714C16.5552 12.909 16.4976 12.8663 16.4332 12.8695L12.7407 13.0526L2.87648 13.0526C1.28784 13.0526 -1.81386e-06 11.7648 -5.1201e-07 10.1761C7.89836e-07 8.58748 1.28785 7.29964 2.87649 7.29964L12.7407 7.29964L16.4332 7.48277C16.4976 7.48597 16.5552 7.4433 16.571 7.38083C16.5835 7.33109 16.5668 7.27854 16.5278 7.24517L14.4997 5.50773L13.5643 4.57994C12.5081 3.53226 12.5081 1.82455 13.5643 0.77687C14.6085 -0.258849 16.2925 -0.258849 17.3366 0.776872L24.6652 8.04622C25.8483 9.21973 25.8483 11.1325 24.6652 12.306L17.3366 19.5754Z" fill="#372D27"/>
			</svg>
		</a>
	{:else}
		<a	data-sveltekit-noscroll 
			href="/stations/{stationData[nextIndex].slug}"
			class="scanning plus"
		>
			{stationData[nextIndex].name}
		</a>
	{/if}
{/if}

<style>
:global(.scanning) {
    /* text-transform: uppercase; */
	/* position: fixed;
	top: 50%;
	transform: translate(0, -50%);
	height: calc(100% - 24px); */
	height: fit-content;
	padding: 16px 0px;
	width: 24px;
	font-size: 10px;
	line-height: 24px;
	background-color: var(--yin);
	color: var(--yang);
	border-radius: 4px;
	text-align: center;
	z-index: 30;	
	transition: 1.5s;
}	

.plus {
	writing-mode: sideways-rl;
	/* left: calc(100vw - 400px); */
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
			height: 36px;
			width: 56px;
			border-radius: 40px;
			top: unset;
			bottom: 126px;
			bottom: 110px;
			z-index: 99;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: var(--yin);
			border: 1px solid var(--yang);
			opacity: 0.85;
		}
		.plus {
			left: unset;
			right: 10px;
				writing-mode: unset;

		}
    }
</style>