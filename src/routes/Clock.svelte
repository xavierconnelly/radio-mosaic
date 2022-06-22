<script context="module">
	let selected;
</script>

<script>
	
	import { INDEX, stations } from './Stations.js'
	
	let clicked;	
	const unsubscribe = INDEX.subscribe(value => clicked = value);
	
	export let src;
	export let name;
	export let i;
	export let hex;
	export let utc;
	
		let radius = 360 / stations.length;
		let Index = stations[0];
	
	let audio;
	let paused = true;

	const handleClick = () => {
		 paused = !paused;
		INDEX.set(i);
	}
	// let INDEX = !paused
		
	function stopOthers() {
		if (selected && selected !== audio) selected.pause();
		selected = audio;
	}
</script>

<!-- height: calc(2 * 3.14px * {radius});-->

<article class="hand"
				 class:playing={!paused}
				 on:click={handleClick}
					style="	transform: rotate(calc({i} * {radius}deg))
									translateX(100px);
									height: 30px;
									font-size: 7px">
	<span class="details">
		<span class="name">
			{name}
		</span>
		<span
			class="band"
			style="background: #{hex}; color: #{hex}">
		</span>		
		<span class="utc">
						{utc}
		</span>	
	</span>
		<audio
			bind:this={audio}
			bind:paused
			on:play={stopOthers}
			{src}>
		</audio>
</article>

<style>

.hand {
		width: 150px; 
		position: absolute;
		left: calc(50% - 1px);
		top: calc(50% - 14px);
		text-align: right;
		cursor: pointer;
		will-change: transform;
		color: #F4F2EA;
	 	transform-origin: center left;
}	
.details .name {
		padding-right: 5px;
}
/*
.details .name:hover  {
		font-size: 16px;
		opacity: 100%;
		transition: .2s;
}
*/
.details .band {
		margin: 0;
		position: absolute;
		top: 50%;
		-ms-transform: translateY(-50%);
		transform: translateY(-50%);
		width: 20px;
		height: 80%;
		z-index: 2;
}
.details .utc {
		margin: 0;
		position: absolute;
		top: 50%;
		-ms-transform: translateY(-50%);
		transform: translateY(-50%);
		width: 50px;
		height: 100%;
	/*	border-top: 1px solid;*/
		z-index: 1;
}

.hand:hover {color: blue;}
.playing {color: #ff3e00;}
</style>
