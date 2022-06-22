<script>
	import { INDEX, stations } from './Stations.js'
	import Plus from './Plus.svelte';
	import Minus from './Minus.svelte';
	
	let clicked;	
	const unsubscribe = INDEX.subscribe(value => clicked = value);
</script>

<aside>
	<Minus/>
	
	<!-- Want to include slideout or something here -->
	<a id="info">?</a>
	<!-- Want to include slideout or something here -->
	<h1>{stations[clicked].name}</h1>
		<!-- needs an event dispatcher to work? -->
	<!-- Maybe change to MUTE -->
	<!-- Maybe change to BIND -->
	<Plus/> 
</aside>

<style>
	#info {
		color: inherit;
	}
	
	aside {
		background: white;
		border-left: 1px solid;
		position: fixed;
		top: 0;
		right: 0;
		color: blue;
		height: 100%;
		width: 50px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	aside * {
		margin: 0 auto;
	}
	aside h1 {
		writing-mode: vertical-rl;
		height: 50%;
		text-align: center;
	}

</style>
