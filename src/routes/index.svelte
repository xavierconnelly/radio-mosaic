<script>
	import Clock from './Clock.svelte';
	import Plus from './Plus.svelte';
	import Minus from './Minus.svelte';
	
	let y;
	import { INDEX, HOVER, stations } from './Stations.js'
		import Header from './Header.svelte';
			import Footer from './Footer.svelte';

	let view = 'closed';
	let clicked;	
	const unsubscribe = INDEX.subscribe(value => clicked = value);
	
let moused;	
	const something = HOVER.subscribe(value => moused = value);
</script>

<svelte:window bind:scrollY={y}/>

<div id="filler"></div>
<Header />

<aside class="left">	<Minus/></aside>
<aside class="right">	<Plus/></aside>


<div id="bg-fill">

			<div class="image-wrap">
				<div class="image"
						 style="background-image: url({stations[moused].image})">
				</div>
		</div>
	
  <div class="one"
						style="background:
									rgb{stations[clicked].one};
									transition: 2s;">
	</div>
	
	<div class="two" 
		 style="background: 
								 radial-gradient(
								 at -10% 30%, 
								 rgb{stations[clicked].two} 0%,
								 rgba(255, 255, 255, 0) 50%);">
	</div>
	
	  <div class="three" 
			 style="background: 
							radial-gradient(
							at 20% 90%,
							rgb{stations[clicked].three} 0%,
							rgba(255, 255, 255, 0) 40%);
							transition: 2s;">
	</div>
	
  <div class="four"
			 style="background: 
							radial-gradient(
							at 65% 150%,
							rgba{stations[clicked].four} 0%,
							rgba(255, 255, 255, 0) 60%);
							transition: 2s;">
	</div>


	
</div>

<div id="earth">
	<div class="clock"
			 style="transform: rotate({y}deg);
							   translate(-50%, -50%)">
	{#each stations as station, i}
			<Clock 
					i={i}		
					hex={station.hex}
					one={station.one}
					name={station.name}
					utc={station.utc}
					class={station.class}
					src={station.audio}/>
		{/each}
	</div>
</div>

<Footer />


<style>
	:global(body) {
			margin: 0;
			padding: 0;
			color: #F4F2EA;
		background: #453939;
	}
	
:global(#earth:hover + footer) {
		display: flex;
	}
	
* {
  box-sizing: border-box;
}
	#filler{
		height: 1000vh;
		width: 50vw;
		left: 0;
	}
	
#bg-fill {
  height: 90vw;
  width: 90vw;
  position: fixed;
  top: 20vh;
  left: 5vw;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  overflow: hidden;
}
	


#bg-fill div {
  height: 100%;
  width: 100%;
  position: absolute;
}
	/*
	#earth{
    width: 225px;
    height: 225px;
    position: fixed;
    left: 50%;
    bottom: 0;
    border-radius: 50%;
    z-index: 2;
    transform: translate(-50%, -50%)
	}
	*/
	#earth {
  height: 80vh;
  width: 80vh;
  position: fixed;
  background: #453939;
  border-radius: 50%;
  left: 50%;
		top: 20vh;
  transform: translate(-50%);
  transition: 1s;
}
	
.clock {
		background: #453939;
    height:100%;
    width: 100%;
    border-radius: 50%;
    position: absolute;
    bottom: 0;
}


.image-wrap {
		background: #453939;
	}
	
.image {
	background-size: cover;
	background-position: center;
	height: 45vh;
	filter: grayscale(100%);
	color: inherit;
		mix-blend-mode: screen;
		transition: 1s;
	}
	/*
	.one, .two, .three, .four {
			transition: 1s;
	}*/

aside {
		position: fixed;
		top: 0;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	
	}
	
	.left {
		left: 0;
	}
	
	.right {
		right: 0;
	}
	
@media screen and (max-width: 750px) {
  #bg-fill {
    top: unset;
    bottom: 0;
  }
	#earth {
  height: 80%;
  width: 80%;
  transition: 1s;
}
	}

	
</style>
