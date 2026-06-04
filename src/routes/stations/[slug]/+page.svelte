<script>
    import { getStage }                     from '$lib/utils/sunStage.svelte.js';
    import { mediaQuery }                   from '$lib/utils/mediaQuery.svelte.js';

    // DATA
	import { ui, stationData } 				from '$lib/data/stations.svelte.js';

    // GLOBAL COMPONENTS
    import DialControls                     from '$lib/layout/hovered-STATIONS.svelte';
    // import Fab                           from "$lib/layout/fab.svelte";
    import Flyover                          from '$lib/layout/flyover.svelte';
    import Scroller                         from "$lib/layout/scroller-JS.svelte";
    import Time                             from "$lib/layout/time.svelte";
    import AccentFilter                     from '$lib/components/accentFilter.svelte';


    // LOCAL COMPONENTS
    import Minus                            from '$lib/components/minus.svelte';
    import Plus                             from '$lib/components/plus.svelte';

    // fab hiding
    // let scrollUi = $state({ selected: true });
    // function toggle() {
    //     scrollUi.selected = !scrollUi.selected;
    // }
    const mobile = mediaQuery('(max-width: 700px)');

    let { data } = $props();
    let station = $derived(data.station);

    // time + sun stage
    let now = $state(new Date());
    $effect(() => {
        const id = setInterval(() => now = new Date(), 60_000);
        return () => clearInterval(id);
    });

    let stage = $derived(getStage(station.lat, station.lng, now));

    $effect(() => {
        document.documentElement.dataset.stage = stage;
    });

    // mobile scrolling dial
    let activeIndex = $state(0);
    function updateActive(i) {
        activeIndex = i;
    }

    // currently hovered station (desktop glimpse)
    let moused = $derived(ui.hover);

    // reset scroll to top when navigating between stations.
    // #main is its own scroll container (overflow: scroll) on desktop, so
    // SvelteKit's window-level reset can't reach it — do it manually.
    let mainEl = $state();
    $effect(() => {
        station.slug;                  // re-run whenever the station changes
        mainEl?.scrollTo({ top: 0 });
        window.scrollTo({ top: 0 });
    });

    // flyover preload
    // import { onMount } from 'svelte';
    // onMount(() => {
    //     stationData.forEach(s => {
    //         const img = new Image();
    //         img.src = `/images/glimpse/${s.slug}1x.webp`;
    //     });
    // });
</script>


<!-- <AccentFilter accent={station.accent} mode="soft-light" /> -->
<AccentFilter accent="#{station.tint}" mode="soft-light" />

{#if mobile.matches}
    <!-- <Scroller data-sveltekit-noscroll items={stationData} onActiveChange={updateActive} /> -->
    <!-- <DialControls
        name={stationData[activeIndex].name}
        slug={stationData[activeIndex].slug}
        tint={stationData[activeIndex].tint}
    /> -->
    <!-- <Fab /> -->

    <!-- current station header -->
    <nav style="background-color: #{station.tint}">
        <h4>{station.name}</h4>
        <span id="geo">
            <Time timezone={station.timezone} />
            <b id="city">{station.city}</b>
            <span id="country">{station.country}</span>
        </span>
    </nav>

    <div id="main" bind:this={mainEl}>
        <div id="wallpaper" style="background-image: url(../images/flyover/{station.slug}.webp)">
            <Minus />
            <Plus />
        </div>
        <div id="info">
            <span class="titles">
                <h3>{station.name}</h3>
                <a href="{station.url}" target="blank">View site</a>
            </span>
            <p>{station.about}</p>
        </div>
    </div>
{:else}

<!-- current station header -->
<nav style="background-color: #{station.tint}">
    <Time timezone={station.timezone} />
    <b id="city">{station.city}</b>
    <span id="country">{station.country}</span>
</nav>
    <!-- title and main view -->
    <h2 style="color: #{station.title};">{station.name}</h2>

    <div id="main" bind:this={mainEl}>
        <div id="wallpaper" style="background-image: url(../images/flyover/{station.slug}.webp)">
            <Minus />
            <Plus />
        </div>
        <div id="info">
            <span class="titles">
                <h3>{station.name}</h3>
                <a href="{station.url}" target="blank">View site</a>
            </span>
            <p>{station.about}</p>
        </div>
    </div>
    <!-- side glimpse on desktop -->
    <!-- <div class="image-wrap">
        {#if stationData[moused]}
            <div class="local">
                <p>{stationData[moused].city}</p>
                <p>{stationData[moused].country}</p>
            </div>
            <Flyover slug={stationData[moused].slug} />
        {/if}
    </div> -->
{/if}

<style>
#main {
    position: relative;
    top: var(--header-h);
    right: var(--clock-w);
    left: 300px;
    padding: 10px 10px 50px 10px;
    height: calc(100vh - var(--header-h));
    overflow: scroll;
    width: calc(100vw - 700px);
    background-color: var(--bg);
    color: var(--fg);
}

/* #main {
    position: fixed;
    top: 32px;
    left: 0;
    height: calc(100vh - 32px);
    width: 100vw;
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding: 20px;
    z-index: 5;
    box-sizing: border-box;
} */

nav {
    position: fixed;
    top: 0;
    right: 32px;
    height: 32px;
    padding-right: 10px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    font-size: 20px;
    line-height: 32px;
    z-index: 99;
}

h2 {
    position: fixed;
    top: 0px;
    left: 630px;
    padding-left: 10px;
    justify-content: center;
    font-size: 20px;
    line-height: 32px;
    margin: auto 0;
    z-index: 99;
}

/* .background {
    display: flex;
    position: fixed;
    z-index: 10;
    top: 32px;
    background: var(--bg);
    left: 0;
    height: calc(100vh - 44px);
    width: calc(100vw);
    border: 0px solid;
} */

#wallpaper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: anchor-center;
    padding: 10px;
    flex: 1;
    border-radius: 4px;
    height: 80vh;
    width: 100%;
    object-fit: cover;
    background-size: cover;
    background-position: center;
    opacity: 0.8;
    mix-blend-mode: luminosity;
    filter: contrast(.8);
    transition: 3s;
}

#wallpaper:hover {
    filter: contrast(.8);
    opacity: 1;
    mix-blend-mode: unset;
    transition: 2s;
}

#info {
    padding-top: 20px;
    display: flex;
    flex-direction: row;
    font-size: 24px;
    gap: 20px;
    position: relative;
    z-index: 60;
    opacity: var(--tx);
}

#info .titles {
    font-size: 24px;
    width: 50%;
}

#info p {
    font-size: 24px;
    width: 50%;
}

/* TABLET */
@media (min-width: 700px) and (max-width: 1280px) {
    h2 { left: 330px; }
}

/* MOBILE */
@media (max-width: 700px) {
    nav {
        position: fixed;
        bottom: 0;
        top: unset;
        left: 0;
        width: 100vw;
        line-height: unset;
        gap: 0;
        justify-content: center;
        padding: 10px;
        height: 50px;
        display: flex;
        border-top: 1px solid;
        flex-direction: column;
    }
    #geo {
        font-size: 10px;
    }
    h2 {
        position: fixed;
        display: flex;
        flex-direction: column;
        align-items: baseline;
        justify-content: space-evenly;
        top: 70vh;
        left: 0;
        text-align: center;
        z-index: 99;
        line-height: unset;
        place-items: center;
    }
    #wallpaper {
        height: 60vh;
    }
    #main {
    top: unset;
    right: unset;
    left: unset;
    height: unset;
    width: unset;
    }
    #info {
        flex-direction: column;
    }
    #info .titles {
        width: 100%;
    }
    #info p {
        font-size: 16px;
        width: 100%;
    }
}

@media (max-width: 500px) {
    h2 {
        top: 38px;
        left: 10px;
        writing-mode: sideways-lr;
        background-color: var(--bg);
        border: 1px solid var(--bg);
        padding: 40px 0px;
        width: 56px;
        height: calc(100dvh - 258px);
        border-radius: 40px;
        z-index: 5;
        opacity: 0.85;
    }
    :global(#box:hover + #glimpse) {
        display: none;
    }
}
</style>