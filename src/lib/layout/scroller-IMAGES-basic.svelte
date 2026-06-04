<script>
    import { gsap }                 from 'gsap';
    import { onMount }              from 'svelte';
	import { ui, stationData } 		from '$lib/data/stations.svelte.js';
    
    import HoveredHome              from '$lib/layout/hovered-HOME.svelte';
    import Grid                     from '$lib/layout/grid.svelte';

    let { items = [], onActiveChange } = $props();

    // variable for current hovered on
    // let moused = $derived($HOVER);

    const faceWidth = 8;

    let count = $derived(items.length);
    let angleStep = $derived(360 / count);
    let radius = $derived((faceWidth / 2) / Math.tan(Math.PI / count));

    // GSAP drives the spinner's rotateY directly on the DOM element — no per-frame
    // Svelte state writes (that reactive flush every frame was the mobile freeze).
    // Only activeIndex is reactive, written solely when the centred face changes.
    let spinnerEl;           // the rotating ring (bind:this)
    let target   = 0;        // rotation we're tweening toward (deg)
    let rotateTo;            // gsap.quickTo setter
    let snapTimer;

    let activeIndex   = $state(0);
    let activeStation = $derived(stationData[activeIndex % stationData.length]);

    $effect(() => {
        onActiveChange?.(activeIndex);
    });

    let lastTouch = null;
    let boxEl = $state();

    // read the live rotation straight off the element; update the index only on change
    function refreshActive() {
        const rot = -gsap.getProperty(spinnerEl, 'rotationY');
        const angle = ((rot % 360) + 360) % 360;
        const idx = Math.floor((angle + angleStep / 2) / angleStep) % count;
        if (idx !== activeIndex) activeIndex = idx;
    }

    onMount(() => {
        // start on a random face
        target = Math.floor(Math.random() * count) * angleStep;
        gsap.set(spinnerEl, { rotationY: -target });
        refreshActive();

        rotateTo = gsap.quickTo(spinnerEl, 'rotationY', {
            duration: 0.6,
            ease: 'power3.out',
            onUpdate: refreshActive
        });

        return () => {
            gsap.killTweensOf(spinnerEl);
            clearTimeout(snapTimer);
        };
    });

    // settle onto the nearest face shortly after input stops
    function scheduleSnap() {
        clearTimeout(snapTimer);
        snapTimer = setTimeout(() => {
            target = Math.round(target / angleStep) * angleStep;
            rotateTo?.(-target);
        }, 140);
    }

    function onWheel(e) {
        e.preventDefault();
        target += e.deltaX || e.deltaY;
        rotateTo?.(-target);
        scheduleSnap();
    }

    function onTouchStart(e) {
        lastTouch = e.touches[0].clientX;
    }

    function onTouchMove(e) {
        e.preventDefault();
        const delta = lastTouch - e.touches[0].clientX;
        target += delta;
        lastTouch = e.touches[0].clientX;
        rotateTo?.(-target);
        scheduleSnap();
    }

    // wheel/touchmove must be non-passive to preventDefault.
    // Svelte 5 removed the |nonpassive modifier, so attach manually.
    $effect(() => {
        if (!boxEl) return;
        boxEl.addEventListener('wheel', onWheel, { passive: false });
        boxEl.addEventListener('touchmove', onTouchMove, { passive: false });
        return () => {
            boxEl.removeEventListener('wheel', onWheel);
            boxEl.removeEventListener('touchmove', onTouchMove);
        };
    });
</script>


<Grid activeIndex={activeIndex} />

<HoveredHome  
    name={activeStation.name}
    slug={activeStation.slug}
    city={activeStation.city}
    country={activeStation.country}
    tint={activeStation.tint}
/>

<div    id="box"
        bind:this={boxEl}
        ontouchstart={onTouchStart}>
    <div class="scene">
        <div class="cube" style="transform: translateZ(-{radius}em)">
            <div class="spinner" bind:this={spinnerEl}>
                {#each items as item, i}
                    <a  href="/stations/{item.slug}" class="face"
                        style="transform: rotateY({i * angleStep}deg) translateZ({radius}em); background-color: #{item.tint}">
                        <div class="facepaint" style="background-image: url(../images/small/{item.slug}1x.webp)">
                            <span id="name" style="background-color: #{item.tint}; color: var(--yang)">
                                {item.name}
                            </span>
                        </div>
                    </a>
                {/each}
            </div>
        </div>
    </div>
</div>

<style>
#box {
    z-index: 99;
	overflow: hidden;
    position: sticky;
    top: -10vh;
    width: 100vw;
    height: 40vh;
    color: var(--yang);
    background: var(--yin);
    border-top: 1px solid;
    border-bottom: 1px solid;
}

.scene {
    width: 80px;
    height: 100%;
    /* perspective: 20000px; */
    perspective: 240px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0%);
}

.cube {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
}

.spinner {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
}

.face {
    color: var(--yang);
    background: var(--yin);
    border-right: 0.5px solid;
    width: 96px;
    height: 100%;
    font-size: 12px;
    padding-bottom: 10px;
    position: absolute;
    display: flex;
    align-items: center;
    will-change: transform;
    border: 5px solid var(--yin);
}
.facepaint {
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    margin-top: 10px;
    background-size: cover;
    object-fit: cover;
    opacity: 0.8;
    background-position: center;
}
#name {
    padding: 8px 2px;
    border-radius: 99px;
    writing-mode: sideways-rl;
    position: absolute;
    bottom: 0px;
    left: 0px;
    margin: 10px;
    font-family: monospace;
}
</style>