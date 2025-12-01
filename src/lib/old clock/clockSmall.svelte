<script>
    import { page } from '$app/stores';
    import { INDEX, updateIndexFromSlug } from '$lib/store.js';
    import { stationData } from '/src/routes/stations/radioData.js';

    // Maybe I don't need this here?
    // Keep INDEX synced with the current URL slug
    $: if ($page.params.slug) {
        updateIndexFromSlug($page.params.slug, stationData);
    }

	import Clockhand from './clockSmallHand.svelte';
</script>

<div class="clock" style="background: #{stationData[$INDEX].fill}; color: #{stationData[$INDEX].sparkle}">
    {#each stationData as station, i}

        <!-- could add an if block here to highlight the current station -->

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
        height:100%;
        width: 100%;
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