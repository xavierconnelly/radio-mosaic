<script>
    import { stationData } from '/src/routes/stations/radioData.js';
	import Clockhand from '/lib/clockBigHand.svelte'; 
</script>

<div class="clock">
    {#each stationData as station, i}
        <Clockhand  
            i={i}	
            name={station.name}
            slug={station.slug}
            utc={station.utc}
            highlight={station.highlight}
            fill={station.fill}
        />
	{/each}
</div>

<style>
    .clock {
        background: #F6F3EF;
        /* height:100%;
        width: 100%; */
        height: 70vh;
        width: 70vh;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        position: absolute;
        bottom: 0;
        z-index: 4;
    }
</style>