<script>
	import Clock from './Clock.svelte';
	import Volume from './Volume.svelte';

	let y;
		import { INDEX, stations } from './Stations.js'
		import Sidebar from './Sidebar.svelte';

	let clicked;	
	const unsubscribe = INDEX.subscribe(value => clicked = value);
</script>

<svelte:window bind:scrollY={y}/>
<div id="filler"></div>

<div id="gradients">
  <div class="one" style="background: #{stations[clicked].hex}"></div>
  <div class="two"></div>
  <div class="three"></div>
  <div class="four"></div>
</div>



<div id="earth">
	<div class="clock"
			 style="transform: rotate({y}deg)">
	{#each stations as station, i}
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
<Sidebar />


<style>
	:global(body) {
			margin: 0;
			padding: 0;
			color: #F4F2EA;
	}
	#filler{
		height: 1000vh;
		width: 50vw;
		left: 0;
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
		height: 550px; 
		width: 550px;  /*border: px solid pink;*/
		border-radius: 50%; 
		position: absolute;
	 /* top: ;
		/*transform: translate(-50%, -50%);*/
}

#gradients {
  height: 100vh;
  width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
}

#gradients div {
  height: 100%;
  width: 100%;
  position: absolute;
  /*mix-blend-mode: multiply;*/
}

.one {
  background: rgb(63, 94, 251);
  background: radial-gradient(
    at 60% 80%,
    rgba(63, 94, 251, 1) 50%,
    rgba(16, 107, 214, 0) 90%
  );
}

.two {
  background: rgb(3, 113, 60);
  background: radial-gradient(
    at 15% 0%,
    rgba(3, 113, 60, 1) 1%,
    rgba(3, 113, 60, 0) 70%
  );
}

.three {
  background: rgb(208, 61, 2);
  background: radial-gradient(
    at 70% 30%,
    rgba(208, 61, 2, 1) 40%,
    rgba(208, 61, 2, 0) 80%
  );
}

.four {
  background: radial-gradient(
    at 0% 80%,
    rgba(3, 113, 60, 1) 10%,
    rgba(3, 113, 60, 0) 90%
  );
}
	
</style>
