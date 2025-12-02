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

<div>

	<button onclick={() => paused = !paused}>
		{paused ? "PLAY" : "STOP"}
	</button>
	<!-- output of the number-->
	{Math.floor(volume * 100)} 
</div>
	
<input type="range" 
			 bind:value={volume}
			 max="1"
			 step="0.01"/>

<style>
	* {
		margin: 0;
	}
	
	div{
		position: fixed;
		left: 100px;
		top: 100px;
	}
	
/*Chrome*/
@media screen and (-webkit-min-device-pixel-ratio:0) {
    input[type='range'] {
      overflow: hidden;
      width: 100vh;
			
      -webkit-appearance: none;
      background-color: white;
			transform: rotate(270deg) translate(calc(-50% + 15px), calc(-50vh + 50%));
			position: fixed;
			top: 0;
			left: 0;
    }
    
    input[type='range']::-webkit-slider-runnable-track {
      height: 30px;
      -webkit-appearance: none;
      color: #13bba4;
      margin-top: -1px;
    }
    
    input[type='range']::-webkit-slider-thumb {
      width: 30px;
      -webkit-appearance: none;
      height: 30px;
      cursor: cursor;
      background: #453939;
      box-shadow: -1000px 0 0 1000px #453939;
    }

}
/** FF*/
input[type="range"]::-moz-range-progress {
  background-color: white; 
}
input[type="range"]::-moz-range-track {  
  background-color: #453939;
}
/* IE*/
input[type="range"]::-ms-fill-lower {
  background-color: white; 
}
input[type="range"]::-ms-fill-upper {  
  background-color: #453939;
}
</style>