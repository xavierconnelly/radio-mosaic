<script>
	let paused = true;
	let volume = 1;
</script>

<body>
  <div>
    <audio 
            src="https://sveltejs.github.io/assets/music/strauss.mp3"
            bind:paused={paused}
            bind:volume
            >
    </audio>
    <button on:click={() => paused = !paused}>
      {paused ? "PLAY" : "STOP"}
    </button>
    {Math.floor(volume * 100)}
  </div>
  <input type="range" 
        bind:value={volume}
        max="1"
        step="0.01"/>
</body>

<style>
	* {
		margin: 0;
	}
	
	div{
		position: fixed;
		left: 100px;
		top: 100px;
	}
	
/*Chrome*/
@media screen and (-webkit-min-device-pixel-ratio:0) {
    input[type='range'] {
    overflow: hidden;
    width: 100vh;
    height: 50px;
    -webkit-appearance: none;
    background-color: white;
    transform: rotate(270deg);
    transform-origin: top;
    position: fixed;
    top: 50vh;
    left: -50vh;
    }
    
    input[type='range']::-webkit-slider-runnable-track {
      height: 30px;
      -webkit-appearance: none;
      color: #13bba4;
      margin-top: -1px;
    }
    
    input[type='range']::-webkit-slider-thumb {
      width: 30px;
      -webkit-appearance: none;
      height: 30px;
      cursor: cursor;
      background: #453939;
      box-shadow: -1000px 0 0 1000px #453939;
    }

}
/** FF*/
input[type="range"]::-moz-range-progress {
  background-color: white; 
}
input[type="range"]::-moz-range-track {  
  background-color: #453939;
}
/* IE*/
input[type="range"]::-ms-fill-lower {
  background-color: white; 
}
input[type="range"]::-ms-fill-upper {  
  background-color: #453939;
}
</style>
