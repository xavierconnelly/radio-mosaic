<script>
    import { HOVER, stationData } from '/src/routes/stations/radioData.js';
	import Clockhand from './clockBigHand.svelte'; 

    let y = 0;

   function onLoad() {
        window.scrollTo(0, 5000);
	}
</script>

<svelte:window bind:scrollY={y}/>

<div id="filler"></div>

<div id="house">
    <div class="clock" style="transform: translate(-50%, -50%) rotate({y}deg)">
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
	#filler{
		height: 2000vh;
		width: 50vw;
		left: 0;
        z-index: -99;
        user-select: none;
	}
    #house {
        height: calc(100vh - 44px);
        width: calc(100vw - 600px);
        padding: 20px 20px 20px 20px;
        position: fixed;
        right: 0;
        top: 0;
        background-color: var(--yang);
        transform: translateY(44px);
        z-index: 4;
    }
    .clock {
        position: absolute;
        top: 50%;
        left: 50%;
        height: calc(80%);
        width: calc(80%);
        border-radius: 50%;
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
</style>