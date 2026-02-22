<script>
    import { page } from '$app/stores';
    import { INDEX, updateIndexFromSlug } from '$lib/store.js';
    import { HOVER, stationData } from '/src/routes/stations/radioData.js';

    // global components
    import Flyover from '$lib/flyover.svelte';
	import MediaQuery from '$lib/mediaQuery.svelte';
    import Painting from '$lib/painting.svelte';
    import Scroller from "$lib/scroller.svelte";
    import Time from "$lib/time.svelte";
	import Plus from '$lib/plus.svelte';
	import Minus from '$lib/minus.svelte';
    // import Fab from "$lib/fab.svelte";

    // fab hiding
	let scrollUi = { selected: true };
	function toggle() {
		scrollUi.selected = !scrollUi.selected;
	}

    // Keep INDEX synced with the current URL slug
    $: if ($page.params.slug) {
        updateIndexFromSlug($page.params.slug, stationData);
    }

    import Obi  from '$lib/obi.svelte';

    export let data; // or whatever your load function returns
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


<!-- <Fab /> -->
<MediaQuery query="(max-width: 700px)" let:matches>
    {#if matches}
        <!-- {#if scrollUi.selected}
            <button class="fab" on:click={toggle}> 
                open
            </button>
        {:else}
            <button class="fab"  on:click={toggle}>  
                close
            </button>
        {/if} -->
        {#if scrollUi.selected}
            <Minus />
            <Plus /> 
            <Scroller data-sveltekit-noscroll items={stationData} onActiveChange={updateActive} />
            <Painting  
                name={stationData[activeIndex].name}
                slug={stationData[activeIndex].slug}
            />

        {/if}
    {/if}
</MediaQuery>



<MediaQuery query="(min-width: 700px)" let:matches>
    {#if matches}
        <Obi 
            obiText={stationData[$INDEX].obiText}
            obi={stationData[$INDEX].obi}/>
    {/if}
</MediaQuery>

<nav style="color: #{stationData[$INDEX].title}">
    <span><Time /></span>
    <b id="city">{stationData[$INDEX].city}</b>
    <span id="country">{stationData[$INDEX].country}</span>
</nav>

<div class="image-wrap">
    {#if stationData[moused]}
        <div class="local">
            <p>{stationData[moused].city}</p>
            <p>{stationData[moused].country}</p>
        </div>
        <Flyover slug={stationData[moused].slug} />
    {/if}  
</div>

{#if $INDEX !== null}
<h2 style="color: #{stationData[$INDEX].title};">{stationData[$INDEX].name}</h2>
<div class="background" style="background-color: #{stationData[$INDEX].tint}; color: #{stationData[$INDEX].clockhand}">
    <div id="wallpaper"  style="background-image: url(../images/flyover/{stationData[$INDEX].slug}.webp)"></div>

    <!-- place station bio content here -->

    <!-- <aside style="background: #{stationData[$INDEX].tint}; color: #{stationData[$INDEX].tint};">
        <div id="bio" style="color: #{stationData[$INDEX].tint};">
            <span>
                <p>{@html stationData[$INDEX].about}</p>
                <br/>
                <a
                    href="{stationData[$INDEX].url}"
                    target="_blank"
                    style="background: #{stationData[$INDEX].highlight}; color: #{stationData[$INDEX].tint};"
                >
                    view site
                </a>
            </span>
        </div>
    </aside> -->
</div>
{/if}

<!-- <MediaQuery query="(min-width: 1280px)" let:matches>
    {#if matches} -->
        <!-- <div class="image-wrap">
            <div class="local">
                <b>{stationData[moused].city}</b>
                <p>{stationData[moused].country}</p>
            </div> -->
            <!-- <div id="flyover" style="background-image: url(../images/flyover/{stationData[moused].slug}.webp">
                <div class="blurb">
	                <h4>{stationData[moused].name}</h4>
                </div>
            </div> -->
        <!-- </div> -->
    <!-- {/if}
</MediaQuery> -->

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
/* #bio {
    display: flex;
    gap: 20px;
    padding: 10px 10px;
    transition: 3s;
    width: 300px;
}
#bio span a {
    border-radius: 30px;
    padding: 4px 20px;
} */
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
    opacity: .75;
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
#flyover {
    display: block;
    /* opacity: 0; */
    position: absolute;
    left: 0;
    top: 0;
    opacity: 1;
    padding: 10px;
    height: calc(100vh - 32px);
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
    transition-delay: 20ms;
    border-right: 1px solid var(--yang);
}
/* .blurb {
    height: 5vh;
    padding: 0 30px;
    position: fixed;
    bottom: 50%;
    left: calc(50% - 15px);
    width: max-content;
    display: flex;
    margin: auto;
    flex-direction: row;
    gap: 10px;
    transform: translate(-50%, -50%);
    align-items: center;
    border: 1px solid;
    border-radius: 2px;
    justify-content: space-evenly;
    z-index: 9999;
    background-color: var(--yin);
    color: var(--yang);
} */
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
        /* background-color: var(--yin);
        color: var(--yang); */
    }
    .background {
        top: 0px;
        height: calc(100vh);
        width: 100vw;
    }
    #wallpaper {
        /* border: 10px solid var(--yin); */
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
        height: calc(100dvh - 295px);
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