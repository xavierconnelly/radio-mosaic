<script>
    // passing in data
    import { HOVER, stationData } from '/src/routes/stations/radioData.js';
    import '../app.css'

    // shared components
	import MediaQuery from '$lib/mediaQuery.svelte';
    import ScrollerImages from "$lib/scroller-IMAGES-basic.svelte"; 
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
       <div id="intro">
            
            <p>
                <b>RADIO MOSAIC</b> is a collection of online radio community radio stations from all corners of the world.
            </p>
        </div>
        <ScrollerImages items={stationData} onActiveChange={updateActive} />
       <div>
            <p>
                Though is a also community, a movement a way of bringing the past, future and present together at once. This site hopes to connect disparate but connected communities from across the globe. Music naturally brings people together. While we may live in fragmented corners of the globe, we are all one. is a community, a movement a way of bringing the past, future and present together at once. While we may live in fragmented corners of the globe, we are all one. 
            </p>
        
            <p>.</p>
             <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
        </div>
        <div>
            <h4>Contact</h4>
            <p>email@email.com</p>
            <p>This project is a labour of love, if you would like to help in any way please get in touch.</p>
             <p>.</p>
            <p>.</p>
            <p>.</p>
        </div>
        <div>
            <b>Disclaimer</b>
            <p>If your station is listed and you prefer it wasn't, sorry, please contact me and I'll take it down</p>
            <p>.</p>
        </div>
{:else}
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
    div {
        font-size: 14px;
        padding: 10px;
        padding-bottom: 30px;
        font-weight: 500;
        position: relative;
    }

    #intro {
        margin-top: 28px;
    }
    #intro p {
        font-size: 22px;
    }
    .image-wrap {
        top: 28px;
        height: calc(75vh - 28px);
	}
    .local {
        display: none;
    }
}
</style>