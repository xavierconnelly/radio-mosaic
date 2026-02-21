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

	let paused = true;
	let volume = 1;
</script>

<!-- <audio bind:this={audioEl} controls></audio> -->

<audio bind:this={audioEl} 
	bind:paused={paused}
	bind:volume></audio>

<!-- <audio 
	src="https://sveltejs.github.io/assets/music/strauss.mp3"
	bind:paused={paused}
	bind:volume
	>
</audio> -->

<button class="player-btn" on:click={() => paused = !paused}>
    {#if paused}
        <!-- PLAY -->
        <svg class="icon" viewBox="0 0 24 24">
            <polygon points="6,4 20,12 6,20" />
        </svg>
    {:else}
        <!-- STOP -->
        <svg class="icon" viewBox="0 0 24 24">
            <rect x="6" y="6" width="12" height="12" />
        </svg>
    {/if}
</button>
<!-- output of the number
{Math.floor(volume * 100)} -->
	
<input 	bind:value={volume}
		type="range" 
		max="1"
		step="0.01"/>

<style>

    .player-btn {
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
		position: fixed;
		top: 0;
		right: 0px;
		height: 32px;
		font-size: 24px;
		background-color: unset;
		color: var(--yang);
		width: 32px;
		display: flex;
    	justify-content: center;
    	align-items: center;
		z-index: 999;
    }

    /* default desktop size */
    .icon {
        width: 32px;
        height: 32px;
        display: block;
		fill: currentColor;
    }

button {

}

/*Chrome*/
@media screen and (-webkit-min-device-pixel-ratio:0) {
    input[type='range'] {
      overflow: hidden;
      width: calc(100vh - 32px);
			
      -webkit-appearance: none;
      background-color: var(--yin);
		/* transform: rotate(270deg) translate(calc(-50% + 15px), calc(-50vh + 50%)); */
		transform: rotate(270deg) translate(calc(-50% + 22px),calc(50vh - 100%));
		position: fixed;
		top: 45px;
		right: 0;
		z-index: 999;
    }
    
    input[type='range']::-webkit-slider-runnable-track {
      height: 44px;
      -webkit-appearance: none;
      color: red;
      margin-top: -1px;
    }
    
    input[type='range']::-webkit-slider-thumb {
      width: 44px;
      -webkit-appearance: none;
      height: 10px;
      cursor: cursor;
      background: var(--yang);
      box-shadow: -1000px 0 0 1000px var(--yang);
    }

}
/** FF*/
input[type="range"]::-moz-range-progress {
      background-color: var(--yin);
}
input[type="range"]::-moz-range-track {  
      background: var(--yang);
}
/* IE*/
input[type="range"]::-ms-fill-lower {
      background-color: var(--yin);
}
input[type="range"]::-ms-fill-upper {  
      background: var(--yang);
}


    /* mobile breakpoint — scale up */
    @media (max-width: 600px) {
    
    }

	/* media stylings ~ TABLET */
	@media (max-width: 700px) {
		input {
			display:none;
		}
		.player-btn  {
			height: 200px;
			width: 200px;
			/* font-size: 200px; */
			position: fixed;
			top: calc(36vh + 32px);
			right: unset;
			left: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			transform: translate(-50%, -50%);
			background-color: unset;
			border: none;
			z-index: 999;
			color: var(--yin);
		}
		.icon {
            width: 200px;
            height: 200px;
        }
	}
		/* media stylings ~ TABLET */
	@media (max-width: 500px) {
		input {
			display:none;
		}
		/* big one */
		button {
			top: calc(36vh + 28px);
		}
		.player-btn {
			top: unset;
			bottom: 20px;
			background: var(--yin);
			border: 1px solid var(--yang);
			border-radius: 56px;
			width: 56px;
			height: 56px;
			transform: unset;
        	left: 20px;
		}
		.icon {
			fill: var(--yang);
			width: 32px;
			height: 32px;
		}
	}
</style>