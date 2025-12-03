<script>
    import { page } from '$app/stores';
    import { HOVER, INDEX, updateIndexFromSlug } from '$lib/store.js';
    import { stationData } from '/src/routes/stations/radioData.js';
	import MediaQuery from '$lib/mediaQuery.svelte';
    import Scroller from "$lib/scroller.svelte";
    import Painting from '$lib/painting.svelte';

    // Keep INDEX synced with the current URL slug
    $: if ($page.params.slug) {
        updateIndexFromSlug($page.params.slug, stationData);
    }

    import Intro  from '$lib/intro.svelte';

    export let data; // or whatever your load function returns
    const station = data.station; // if that's your structure

    // scrolling dial
	let activeIndex = 0;

	function updateActive(i) {
		activeIndex = i;
	}
    // variable for current hovered on
	let moused;	
	
	// something to do with above
	const something = HOVER.subscribe(value => moused = value);
</script>

<MediaQuery query="(max-width: 700px)" let:matches>
    {#if matches}
        <Scroller data-sveltekit-noscroll items={stationData} onActiveChange={updateActive} />
        <Painting  
            name={stationData[activeIndex].name}
            slug={stationData[activeIndex].slug}
        />
    {/if}
</MediaQuery>

<MediaQuery query="(min-width: 700px)" let:matches>
    {#if matches}
        <Intro style="color: #{stationData[$INDEX].mosaicBg};"/>
    {/if}

    <nav style="color: #{stationData[$INDEX].mosaicBg}">
      <span id="city">{stationData[activeIndex].city}</span>
      <span id="country">{stationData[activeIndex].country}</span>
    </nav>
</MediaQuery>

{#if $INDEX !== null}
    <h2 style="color: #{stationData[$INDEX].mosaicBg};">{stationData[$INDEX].name}</h2>
    <div class="background" style="background-color: #{stationData[$INDEX].mosaicBg}; color: #{stationData[$INDEX].fill}">
        <div id="wallpaper"  style="background-image: url(../images/flyover/{stationData[$INDEX].slug}.webp)"></div>
    </div>
    <!-- <aside style="background: #{stationData[$INDEX].fill}; color: #{stationData[$INDEX].sparkle};">
        <div id="bio" style="color: #{stationData[$INDEX].sparkle};">
            <span>
                <p>{@html stationData[$INDEX].about}</p>
                <br/>
                <a
                    href="{stationData[$INDEX].url}"
                    target="_blank"
                    style="background: #{stationData[$INDEX].highlight}; color: #{stationData[$INDEX].fill};"
                >
                    view site
                </a>
            </span>
        </div>
    </aside> -->
{/if}

<MediaQuery query="(min-width: 1280px)" let:matches>
    {#if matches}
        <div class="image-wrap">
            <div id="flyover"  style="background-image: url(../images/flyover/{stationData[moused].slug}.webp">
            </div>
        </div>
    {/if}
</MediaQuery>

<style>
    nav {
        position: fixed;
        top: 0;
        right: 44px;
        height: 44px;
        padding-right: 10px;
        display: flex;
        flex-direction: row;
        gap: 20px;
        font-size: 24px;
        line-height: 44px;
        z-index: 99;
    }
    aside {
        height: calc(100vh - 44px);
        width: 300px;
        position: fixed;
        top: 44px;
        left: 300px;
        font-size: 13px;
        line-height: 1.4em;
		display: flex;
		flex-direction: column;
        overflow: hidden;
        transition: 3s;
        z-index: 80;
        border-top: inherit;
        display: none;
	}
    h2 {
        position: fixed;
        top: 0px;
        left: 630px;
        height: 44px;
        padding-left: 10px;
		justify-content: center;
        font-size: 32px;
        line-height: 44px;
        margin: auto 0;
        z-index: 99;
    }
    #bio {
        display: flex;
        gap: 20px;
        padding: 10px 10px;
        transition: 3s;
        width: 300px;
    }
    #bio span a {
        border-radius: 30px;
        padding: 4px 20px;
    }
    .background {
        display: block;
        position: fixed;
        z-index: 3;
        top: 44px;
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
        opacity: .8;
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
        top: 44px;
        left: 0px;
        height: calc(100vh - 44px);
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
        transition-delay: 20ms;
        border-right: 1px solid var(--yang);
    }
	/* media stylings ~ TABLET */
	@media (min-width: 700px) and (max-width: 1280px) {

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
            top: 44px;
            height: calc(72vh);
            width: 100vw;
        }
        #wallpaper {
            border: 10px solid var(--yin);
		}
	}
    @media (max-width: 500px) {
        h2 {
            top: calc(28px);
        }
		.background {
            top: 28px;
        }
    }
</style>