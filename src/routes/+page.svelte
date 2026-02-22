<script>
    // passing in data
    import { HOVER, stationData } from '/src/routes/stations/radioData.js';
    import '../app.css'

    // shared components
	import MediaQuery from '$lib/mediaQuery.svelte';
    import ScrollerImages from "$lib/scroller-IMAGES.svelte";
	import Obi from '$lib/obi.svelte';
    import Flyover from '$lib/flyover.svelte';

    // local components
	import ClockBigger from './clockBigger.svelte';

    // hovering things
    $: moused = $HOVER;

    // scrolling dial
	let activeIndex = 0;

	function updateActive(i) {
		activeIndex = i;
	}

    // flyover
    import { onMount } from 'svelte';

    onMount(() => {
        stationData.forEach(s => {
        const img = new Image();
        img.src = `/images/glimpse/${s.slug}.webp`;
        });
    });
</script>


<MediaQuery query="(max-width: 700px)" let:matches>
    {#if matches}
        <div>
            <p lang="en">
                <b>radio mosaic</b> is a community, a movement a way of bringing the past, future and present together at once. While we may live in fragmented corners of the globe, we are all one. is a community, a movement a way of bringing the past, future and present together at once. While we may live in fragmented corners of the globe, we are all one. 
            </p>
        </div>
        <ScrollerImages items={stationData} onActiveChange={updateActive} />
    {:else if}
        <Obi />
        <ClockBigger />
        <div class="image-wrap">
            {#if stationData[moused]}
                <div class="local">
                    <p>{stationData[moused].city}</p>
                    <p>{stationData[moused].country}</p>
                </div>
                <Flyover slug={stationData[moused].slug} />
            {/if}           
        </div>
    {/if}
</MediaQuery>



<style>
:global(body) {
    background-color: var(--yin);
}
    .local {
        width: 20px;
        padding: 16px 12px 24px 12px;
        position: fixed;
        display: flex;
        bottom: 20px;
        left: 20px;
        gap: 20px;
        font-size: 14px;
        align-items: center;
        border: 1px solid;
        border-radius: 2px;
        z-index: 19999;
        writing-mode: sideways-rl;
        background-color: var(--yang);
        color: var(--yin);
    }
    .image-wrap {
		background: var(--yang);
        display: block;
        position: fixed;
        z-index: 999;
        top: 32px;
        left: 0px;
        height: calc(100vh - 32px);
        width: calc(300px);
	}
@media (max-width: 700px) {
    .image-wrap {
        z-index: 1;
        height: calc(75vh - 32px);
        width: 100%;
	}
}
@media (max-width: 500px) {
    .image-wrap {
        top: 28px;
        height: calc(75vh - 28px);
	}
    .local {
        display: none;
    }
}
</style>