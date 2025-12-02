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

<button onclick={() => paused = !paused}>
	{paused ? "PLAY" : "STOP"}
</button>
<!-- output of the number
{Math.floor(volume * 100)} -->
	
<input 	bind:value={volume}
		type="range" 
		max="1"
		step="0.01"/>

<style>

button {
	position: fixed;
	top: 0;
	right: 100px;
	height: 44px;
	border: none;
	z-index: 999;
}

/*Chrome*/
@media screen and (-webkit-min-device-pixel-ratio:0) {
    input[type='range'] {
      overflow: hidden;
      width: calc(100vh - 44px);
			
      -webkit-appearance: none;
      background-color: var(--yin);
		/* transform: rotate(270deg) translate(calc(-50% + 15px), calc(-50vh + 50%)); */
		transform: rotate(270deg) translate(calc(50% - 15px), calc(50vh - 50%));
		position: fixed;
		top: 44px;
		right: 0;
		z-index: 999;
    }
    
    input[type='range']::-webkit-slider-runnable-track {
      height: 30px;
      -webkit-appearance: none;
      color: red;
      margin-top: -1px;
    }
    
    input[type='range']::-webkit-slider-thumb {
      width: 30px;
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
</style>