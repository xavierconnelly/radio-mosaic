<script>
    import { page } from '$app/stores';
    import { INDEX, updateIndexFromSlug } from '$lib/store.js';
    import { HOVER, stationData } from '/src/routes/stations/radioData.js';

    // global components
    import DialControls from '$lib/dial-controls.svelte';
    // import Fab from "$lib/fab.svelte";
    import Flyover from '$lib/flyover.svelte';
	import MediaQuery from '$lib/mediaQuery.svelte';
	import Minus from '$lib/minus.svelte';
    import Obi  from '$lib/obi.svelte';
	import Plus from '$lib/plus.svelte';
    import Scroller from "$lib/scroller-JS.svelte";
    import Time from "$lib/time.svelte";


    // fab hiding
	// let scrollUi = { selected: true };
	// function toggle() {
	// 	scrollUi.selected = !scrollUi.selected;
	// }

    // Keep INDEX synced with the current URL slug
    $: if ($page.params.slug) {
        updateIndexFromSlug($page.params.slug, stationData);
    }

    export let data;
    const station = data.station;

    // scrolling dial
	let activeIndex = 0;

	function updateActive(i) {
		activeIndex = i;
	}
    // variable for current hovered on
    $: moused = $HOVER;

    // flyover
    import { onMount } from 'svelte';

    onMount(() => {
        stationData.forEach(s => {
        const img = new Image();
        img.src = `/images/glimpse/${s.slug}.webp`;
        });
    });
</script>

<!-- current station header -->
<nav style="color: #{stationData[$INDEX].title}">
    <span><Time /></span>
    <b id="city">{stationData[$INDEX].city}</b>
    <span id="country">{stationData[$INDEX].country}</span>
</nav>

 
<MediaQuery query="(max-width: 700px)" let:matches>
    {#if matches}
            <Minus />
            <Plus /> 
            <Scroller data-sveltekit-noscroll items={stationData} onActiveChange={updateActive} />
            <DialControls  
                name={stationData[activeIndex].name}
                slug={stationData[activeIndex].slug}
            />
            <!-- <Fab /> -->
    {:else}
        <Obi 
            obiText={stationData[$INDEX].obiText}
            obi={stationData[$INDEX].obi}/>

        <!-- side glimpse on desktop -->
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


<!-- title and background for both -->
{#if $INDEX !== null}
    <h2 style="color: #{stationData[$INDEX].title};">
        {stationData[$INDEX].name}
    </h2>
    <div class="background" style="background-color: #{stationData[$INDEX].tint}; color: #{stationData[$INDEX].clockhand}">
        <div id="wallpaper"  style="background-image: url(../images/flyover/{stationData[$INDEX].slug}.webp)"></div>
    </div>
{/if}

<style>
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
.background {
    display: block;
    position: fixed;
    z-index: 3;
    top: 32px;
    background: var(--yang);
    left: 0;
    height: calc(100vh - 44px);
    width: calc(100vw);
    border: 0px solid;
}
#wallpaper {
    display: block;
    position: absolute;
    left: 0;
    opacity: 0.8;
    padding: 10px;
    height: 100%;
    width: 100%;
    border-radius: 2px;
    /* filter: grayscale(100%); */
    /* mix-blend-mode: screen; */
    background-size: cover;
    background-position: center;
    z-index: 1;
    object-fit: cover;
    transition: 3s;
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

/* media stylings ~ TABLET */
@media (min-width: 700px) and (max-width: 1280px) {
    h2 {
        left: 330px;
    }
}

/* media stylings ~ MOBILE */
@media (max-width: 700px) {
    h2 {
        /* font-size: 12px; */
        position: fixed;
        display: flex;
        flex-direction: column;
        align-items: baseline;
        justify-content: space-evenly;
        /* writing-mode: sideways-lr; */
        top: 70vh;
        left: 0;
        /* width: 100dvw; */
        text-align: center;
        /* height: 70vh; */
        z-index: 99;
        line-height: unset;
        place-items: center;
    }
    .background {
        top: 0px;
        height: calc(100vh);
        width: 100vw;
    }
    .image-wrap {
        z-index: 1;
        height: calc(100vh - 32px);
        width: 100%;
    }
}
@media (max-width: 500px) {
    h2 {
        top: 38px;
        left: 10px;
        writing-mode: sideways-lr;
        background-color: var(--yin);
        border: 1px solid var(--yang);
        padding: 40px 0px;
        width: 56px;
        height: calc(100dvh - 258px);
        border-radius: 40px;
        z-index: 5;
        opacity: 0.85;
    }
    .background {
        top: 0px;
    }
    .image-wrap {
        top: 28px;
        height: calc(100vh - 28px);
    }
    .local {
        display: none;
    }
    :global(#box:hover + #glimpse) {
        display: none;
    }
}
</style>