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
	function decrement() {
		if (clicked == 0) {
			$INDEX = lastStation;
		} else {
			$INDEX--;
		};	
	}
</script>

<!-- 	use this to find the index of the previous station
 			need to include if statement: is at start 
			though would rather place this inside the component -->
<button on:click={decrement}>
	{#if clicked == 0}
		{lastStation}
	{:else}
		{clicked - 1}
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
