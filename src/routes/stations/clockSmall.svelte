<script>
    // shared components
    import { page } from '$app/stores';
    import { INDEX, updateIndexFromSlug } from '$lib/store.js';
    import { stationData } from '/src/routes/stations/radioData.js';

    // local components
	import Clockhand from './clockSmallHand.svelte';

    // Set variable to kick off the scroller
    let y = 0;

    // Keep INDEX synced with the current URL slug
    $: if ($page.params.slug) {
        updateIndexFromSlug($page.params.slug, stationData);
    }
</script>

<svelte:window bind:scrollY={y} />

<div id="filler">
</div>

<div id="house">
    <div    data-sveltekit-noscroll
            class="clock" 
            style=" color: #{stationData[$INDEX].clockhand}; 
                    background: #{stationData[$INDEX].tint}; 
                    transform: translate(-50%, -50%) rotate({y}deg)">
        {#each stationData as station, i}
            <Clockhand  
                i={i}	
                name={station.name}
                slug={station.slug}
                utc={station.utc}
                clockhand={station.clockhand}
                tint={station.tint}
            />
        {/each}
    </div>
</div>

<style>
   #house {
        height: calc(100vh - 44px);
        width: calc(100vw - 600px);
        padding: 20px 20px 20px 20px;
        position: fixed;
        right: 0;
        top: 0;
        transform: translateY(44px);
        z-index: 4;
    }
    .clock {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: calc(100vw - 800px);
        width: calc(100vw - 800px);
        height: 80vmin;
        width: 80vmin;   
        border-radius: 50%;
    }
	#filler{
		height: 2000vh;
		width: 50vw;
		left: 0;
        z-index: -99;
        user-select: none;
	}

    /* media stylings ~ TABLET */
    @media (min-width: 900px) and (max-width: 1280px) {
        #house {
            width: calc(100vw - 300px);
        }
		.clock {
            height: calc(100vw - 600px);
            width: calc(100vw - 600px);
		}
    }

    /* media stylings ~ TABLET */
    @media (min-width: 700px) and (max-width: 900px) {
        #house {
            width: calc(100vw - 300px);
        }
		.clock {
            height: calc(100vw - 400px);
            width: calc(100vw - 400px);
		}
    }

    /* media stylings ~ TABLET */
    @media (min-width: 500px) and (max-width: 700px) {
        #house {
            width: calc(100vw - 300px);
        }
		.clock {
            height: calc(100vw - 200px);
            width: calc(100vw - 200px);
		}
    }

    /* media stylings ~ MOBILE */
    @media (max-width: 500px) {
        #house {
            width: calc(100vw - 0px);
        }
		.clock {
            height: 130vw;
            width: 130vw;
		}
    }
</style>