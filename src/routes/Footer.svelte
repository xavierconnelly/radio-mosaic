<script>
	import { INDEX, HOVER, stations } from './Stations.js'
	
	let clicked;	
	const unsubscribe = INDEX.subscribe(value => clicked = value);
	
	let hovered = false;
	let moused;	
	const something = HOVER.subscribe(value => moused = value);
</script>

<footer>	
		<h3>{stations[moused].name}</h3>
		<h3>{stations[moused].country}</h3>
		<h3>{stations[moused].city}</h3>
		<h3>10.42PM</h3>
 </footer>


<style>
	footer {
background: #F4F2EA;
		color: #453939;
		position: fixed;
		bottom: 0;
		height: 50px;
		width: 100%;
		z-index: 99;
		display: none;
		flex-direction: row;
		justify-content: space-around;
	}
</style>
