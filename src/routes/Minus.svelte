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
	<h2>
{#if clicked == 0}
		{stations[lastStation].name}
	{:else}
		{stations[clicked - 1].name}
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
		transform: rotate(-180deg);		
	}
		button * {
		margin: 0 auto;
	}
	button h2 {
		writing-mode: vertical-rl;
		height: 50%;
		text-align: center;
		font-size: 1em;
	}
</style>
