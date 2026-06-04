<script>
    // passing in data
	import { ui, stationData } 				    from '$lib/data/stations.svelte.js';
    import { monthlyShows }                     from '$lib/data/featured.js';

    // shared components
    import { mediaQuery }                       from '$lib/utils/mediaQuery.svelte.js';
    import ScrollerImages                       from "$lib/layout/scroller-IMAGES-basic.svelte"; 
    import FeaturedShows                        from "$lib/layout/featured.svelte"; 
    import Flyover                              from '$lib/layout/flyover.svelte';
    import Clock                                from '$lib/components/clock.svelte';
    // import Grid                              from '$lib/grid.svelte';

    // local components
	// import ClockHome                         from './clock-HOME.svelte';

    const mobile = mediaQuery('(max-width: 700px)');

    // scrolling dial
	let activeIndex = $state(0);

	function updateActive(i) {
		activeIndex = i;
	}

    // Featured shows
    let showIndex = $state(0);

	function showActive(i) {
		showIndex = i;
	}
</script>

{#if mobile.matches}
        <div id="display-font">
            <h1>Radio</h1>
            <h1>Mosaic</h1>
        </div>

        <p id="tagline">
            A collection of online community radio stations from all corners of the world.
        </p>
        <p>
            Over the past decade or more online community radio has blossomed, creating a space outside of traditional channels. This site brings together those stations from each corner of the world.
        </p>
        <p>
            Though is a also community, a movement a way of bringing the past, future and present together at once. This site hopes to connect disparate but connected communities from across the globe. 
        </p>
        <p class="last">
            Music naturally brings people together. While we may live in fragmented corners of the globe, we are all one. is a community, a movement a way of bringing the past, future and present together at once. While we may live in fragmented corners of the globe, we are all one.
        </p>

        <!-- Mobile-only: clock flows here between intro and featured shows.
             On desktop the layout renders the persistent clock instead. -->
        <Clock variant="hero" />

        <!-- <Grid /> -->
        <!-- <ScrollerImages items={stationData} onActiveChange={updateActive} /> -->
        <FeaturedShows shows={monthlyShows} onShowGlipmse={showActive}/>

        <div class="small-print buffer">
            <h4>Contact</h4>
            <p>email@email.com</p>
            <p>This project is a labour of love, if you would like to help in any way please get in touch. Whether that's to recommend a show, let me know a link is broken etc.</p>
            <br>
            <b>Disclaimer</b>
            <p>If your station is listed and you prefer it wasn't, sorry, please contact me and I'll take it down</p>
        </div>
    {:else}
        <div class="image-wrap">
            {#if stationData[ui.hover]}
                <div class="local">
                    <p>{stationData[ui.hover].city}</p>
                    <p>{stationData[ui.hover].country}</p>
                </div>
                <Flyover slug={stationData[ui.hover].slug} />
            {/if}           
        </div>
    {/if}


<style>
    #display-font{
        color: inherit;
        /* margin-top: 30px; */
        padding: 10px 20px;
        padding: 0 10px;
        font-size: 16px;
        line-height: 32px;
        border-bottom: 1px solid;
        font-weight: 800;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
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
    #tagline {
        padding-top: 20vh;
        font-size: 24px;
        line-height: 24px;
        font-weight: 800;
        color: var(--yang);
    }
    .buffer {
        padding-top: 44px;
    }
    p,
    .small-print h4,
    .small-print b {
        padding: 10px;
    }
    p {
        font-size: 14px;
        line-height: 16px;
        font-weight: 500;
        position: relative;
    }
    .last {
        padding-bottom: 40px;
    }
    .small-print {
        padding: 40px 0px 120px 0px;
    }
    .small-print * {
        font-size: 14px;
        line-height: 16px;
        font-weight: 500;
    }
    .small-print h4 {
        font-weight: 600;
    }
    .small-print p {
        padding: 4px 10px 4px 10px;
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