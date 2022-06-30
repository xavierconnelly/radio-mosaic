<script>
	// import data for radio stations
	import { INDEX, HOVER, stations } from './Stations.js'
	
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
<h2>
	{#if clicked == lastStation}
		{stations[0].name}
	{:else}
		{stations[clicked + 1].name}
	{/if}
	</h2>
</button>

<style>
	button {
		writing-mode: vertical-rl;
		margin: 0 auto;
		background: #453939;
		color: #F1EDED;
		border: none;
		height: 100%;
		margin: 0;
		cursor: pointer;
	}
	
		button * {
		margin: 0 auto;
	}
	button h2 {
		writing-mode: vertical-lr;
		height: 50%;
		text-align: center;
		font-size: 16px;
	}
</style>
