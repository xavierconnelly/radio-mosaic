<script>
    // passing in data
    import { HOVER, stationData } from '/src/routes/stations/radioData.js';
    import '../app.css'

    // shared components
	import MediaQuery from '$lib/mediaQuery.svelte';
    import Scroller from "$lib/scroller.svelte";
	import Intro from '$lib/intro.svelte';
    import Painting from '$lib/painting.svelte';

    // local components
	import ClockBigger from './clockBigger.svelte';

    // hovering things
    $: moused = $HOVER;

    // scrolling dial
	let activeIndex = 0;

	function updateActive(i) {
		activeIndex = i;
	}
</script>

<MediaQuery query="(max-width: 700px)" let:matches>
    {#if matches}
        <Scroller items={stationData} onActiveChange={updateActive} />
        <Painting  
            name={stationData[activeIndex].name}
            slug={stationData[activeIndex].slug}
            city={stationData[activeIndex].city}
            country={stationData[activeIndex].country}
        />
        <!-- <a data-sveltekit-noscroll id="play-me" href="/stations/{stationData[activeIndex].slug}">play</a> -->
    {/if}
</MediaQuery>

<MediaQuery query="(min-width: 700px)" let:matches>
    {#if matches}
        <Intro />
        <ClockBigger />
    {/if}
</MediaQuery>

<MediaQuery query="(min-width: 1280px)" let:matches>
    {#if matches}
        <div class="image-wrap">
            <div class="local">
                <p>{stationData[moused].city}</p>
                <p>{stationData[moused].country}</p>
            </div>
            <div class="flyover"  style="background-image: url(../images/flyover/{stationData[moused].slug}.webp">
            </div>
            <!-- <div class="flyover mosaic"  style="background-image: url(../images/mosaic.png">
            </div> -->
        </div>
    {/if}
</MediaQuery>

<style>
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
        top: 44px;
        left: 0px;
        height: calc(100vh - 44px);
        width: calc(300px);
	}
    .flyover {
        display: block;
        /* opacity: 0; */
        position: absolute;
        left: 0;
        top: 0;
        opacity: 1;
        padding: 10px;
        height: calc(100vh - 44px);
        width: calc(300px);
        /* background-color: #F6F3F0; */
        filter: grayscale(100%);
        mix-blend-mode: screen;
        color: inherit;
        background-size: cover;
        background-position: center;
        z-index: 199;
        object-fit: cover;
        transition: 3s;
        /* transition-delay: 20ms; */
        border-right: 1px solid var(--yang);
    }
    .mosaic {
        background-size: 300px;
    }
</style>