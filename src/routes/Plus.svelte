<script>
	// import data for radio stations
	import { INDEX, stations } from './Stations.js'
	
	// determine the length
	let lastStation = stations.length - 1;
	
	// variable for current clicked on
	let clicked;
	
	// don't know what this is
	const unsubscribe = INDEX.subscribe(value => clicked = value);
	
	// cycle through stations
	function increment() {		
		//Ind.update(n => n + 1);
		if (clicked == lastStation) {
			$INDEX = 0;
		} else {
			$INDEX++;
		};	
	}
</script>

<button on:click={increment}>
	{#if clicked == lastStation}
		0
	{:else}
		{clicked + 1}
	{/if}
</button>

<style>
	button {
		background: #1F3470;
		color: white;
		border: none;
		height: 50px;
		margin: 0;
	}
</style>
