<script>
	import { INDEX, stationData } from '/src/routes/stations/radioData.js';
</script>

<div id="radioplayer">
	{#each stationData as station, i}
		<button
			class:selected={i === $INDEX}
			on:click={() => $INDEX = i}
		>
			{station.name}
		</button>
	{/each}
</div>

<style>
#radioplayer {
    display: flex;
    flex-direction: row;
    width: 100vw;
    justify-content: center;
    height: 100%;
    overflow: scroll;
    margin-top: 5vh;
}

button {
    padding: 20px;
    min-width: 150px;
    font-size: 12px;
	cursor: pointer;
    border: none;
    border-right: 1px solid;
}

button.selected {
	background: #453939;
	color: #F1EDED;
	font-weight: bold;
}
</style>


