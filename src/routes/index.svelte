<script>
	import Clock from './Clock.svelte';
	import Volume from './Volume.svelte'
	import {stations} from './Stations.js';

	let y;
</script>

<svelte:window bind:scrollY={y}/>
<div id="filler"></div>

<div id="earth">
	<div class="clock"
			 style="transform: rotate({y}deg)">
		{#each $stations as station, i}
			<Clock 
					i={i}		
					hex={station.hex}
					name={station.name}
					utc={station.utc}
					class={station.class}
					src={station.audio}/>
		{/each}
	</div>
</div>

<Volume />

<style>
	:global(body) {
			margin: 0;
			padding: 0;
			background: #F4F2EA;
			color: #1F3470;
	}
	
	#filler{
		height: 1000vh;
	}
	
	#earth{
		width: 500px;
		height: 500px;
    position: fixed;
    left: 50vw;
    top: 50vh;
    border-radius: 50%;
    z-index: 2;
    transform: translate(-50%, -50%);
}
	
.clock {
		background: #F2F0EA;
		height: 550px; 
		width: 550px;  /*border: px solid pink;*/
		border-radius: 50%; 
		position: absolute;
	 /* top: ;
		/*transform: translate(-50%, -50%);*/
}
	

</style>
