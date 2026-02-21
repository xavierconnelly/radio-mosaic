<script>
    import { page } from '$app/stores';
    import { INDEX, updateIndexFromSlug } from '$lib/store.js';
    import { HOVER, stationData } from '/src/routes/stations/radioData.js';
	import MediaQuery from '$lib/mediaQuery.svelte';
    import Scroller from "$lib/scroller.svelte";
    import Painting from '$lib/painting.svelte';
	import Plus from './plus.svelte';
	import Minus from './minus.svelte';
    import Time from "$lib/time.svelte";
    import Flyover from '$lib/flyover.svelte';


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

<MediaQuery query="(max-width: 700px)" let:matches>
    {#if matches}
        <Minus/>
        <Plus/> 
        <Scroller data-sveltekit-noscroll items={stationData} onActiveChange={updateActive} />
        <Painting  
            name={stationData[activeIndex].name}
            slug={stationData[activeIndex].slug}
        />
        <span id="fab">
            <!-- {#if matches} -->
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="33" viewBox="0 0 35 33" fill="none">
                <path d="M6 18.0757C6 15.8666 7.79086 14.0757 10 14.0757H30C30 16.2849 28.2091 18.0757 26 18.0757H6Z" fill="#3D2A2A"/>
                <path d="M6 24.0757H30V28.0757H10C7.79086 28.0757 6 26.2849 6 24.0757Z" fill="#3D2A2A"/>
                <path d="M6 4.07574H26C28.2091 4.07574 30 5.8666 30 8.07574H6V4.07574Z" fill="#3D2A2A"/>
                <path d="M10 0L10 12.1506L0 6.07531L10 0Z" fill="#3D2A2A"/>
                <path d="M24.0753 32.1886L24.0753 20.038L34.0753 26.1133L24.0753 32.1886Z" fill="#3D2A2A"/>
                <path d="M10 14.0757L10 28.0757C7.79086 28.0757 6 26.2849 6 24.0757V18.0757C6 15.8666 7.79086 14.0757 10 14.0757Z" fill="#3D2A2A"/>
                <path d="M26 4.07574C28.2091 4.07574 30 5.8666 30 8.07574V14.0757C30 16.2849 28.2091 18.0757 26 18.0757V4.07574Z" fill="#3D2A2A"/>
            </svg>
            <!-- {:else}
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="33" viewBox="0 0 35 33" fill="none">
                <path d="M6 18.0757C6 15.8666 7.79086 14.0757 10 14.0757H30C30 16.2849 28.2091 18.0757 26 18.0757H6Z" fill="#3D2A2A"/>
                <path d="M6 24.0757H30V28.0757H10C7.79086 28.0757 6 26.2849 6 24.0757Z" fill="#3D2A2A"/>
                <path d="M6 4.07574H26C28.2091 4.07574 30 5.8666 30 8.07574H6V4.07574Z" fill="#3D2A2A"/>
                <path d="M10 0L10 12.1506L0 6.07531L10 0Z" fill="#3D2A2A"/>
                <path d="M24.0753 32.1886L24.0753 20.038L34.0753 26.1133L24.0753 32.1886Z" fill="#3D2A2A"/>
                <path d="M10 14.0757L10 28.0757C7.79086 28.0757 6 26.2849 6 24.0757V18.0757C6 15.8666 7.79086 14.0757 10 14.0757Z" fill="#3D2A2A"/>
                <path d="M26 4.07574C28.2091 4.07574 30 5.8666 30 8.07574V14.0757C30 16.2849 28.2091 18.0757 26 18.0757V4.07574Z" fill="#3D2A2A"/>
            </svg>
            {/if} -->
        </span>
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
    </div>
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
    aside {
        height: calc(100vh - 32px);
        width: 300px;
        position: fixed;
        top: 32px;
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
        padding-left: 10px;
		justify-content: center;
        font-size: 20px;
        line-height: 32px;
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
    #fab {
        display: none;
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
    .blurb {
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
            height: calc(100vh - 275px);
            border-radius: 40px;
            z-index: 5;
            opacity: 0.85;
        }
            #fab {
        display: block;
        position: fixed;
        bottom: 20px;
                right: 10px;
                height: 80px;
                width: 80px;
                border: 1px solid;
                border-radius: 40px;
                background-color: var(--yin);
                color: var(--yang);


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