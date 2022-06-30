<script>
	import { INDEX, HOVER, stations } from './Stations.js'
	
	let clicked;	
	const unsubscribe = INDEX.subscribe(value => clicked = value);
	
	let hovered = false;
	let moused;	
	const something = HOVER.subscribe(value => moused = value);
</script>

<header>	
	<h1>
	{#if hovered == true}
		{stations[moused].name}
	{:else}
		{stations[clicked].name}
	{/if}
	</h1>
	<div>
		<h2>{stations[clicked].country}</h2>
		<h2>{stations[clicked].city}</h2>
		<h2>10.42PM</h2>
		</div>
 </header>


<style>
	header {
		position: fixed;
		top: 0;
		height: 100px;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	header h1 {
		height: 100px;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-around;		
	}
	header div {
		height: 50px;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}

</style>
