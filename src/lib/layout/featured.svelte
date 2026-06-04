<script>
    import { gsap }                             from 'gsap';
    import { onMount }                          from 'svelte';
    
    import { monthlyShows }                     from '$lib/data/featured.js';
    // import HoveredShow                       from '$lib/hovered-SHOW.svelte';
    import HoveredShow                          from '$lib/layout/hovered-SHOW.svelte';

    let { shows = [], onShowGlipmse } = $props();

    const faceWidth = 16;

    let count = $derived(shows.length);
    let angleStep = $derived(360 / count);
    let radius = $derived((faceWidth / 2) / Math.tan(Math.PI / count));

    // GSAP drives the spinner's rotateY directly on the DOM element — no per-frame
    // Svelte state writes (that reactive flush every frame was the mobile freeze).
    // Only showIndex is reactive, written solely when the centred face changes.
    let spinnerEl;           // the rotating ring (bind:this)
    let target   = 0;        // rotation we're tweening toward (deg)
    let rotateTo;            // gsap.quickTo setter
    let snapTimer;

    let showIndex         = $state(0);
    let activeMonthlyShow = $derived(monthlyShows[showIndex % monthlyShows.length]);

    $effect(() => {
        onShowGlipmse?.(showIndex);
    });

    let lastTouch = null;
    let boxEl = $state();

    // read the live rotation straight off the element; update the index only on change
    function refreshActive() {
        const rot = -gsap.getProperty(spinnerEl, 'rotationY');
        const angle = ((rot % 360) + 360) % 360;
        const idx = Math.floor((angle + angleStep / 2) / angleStep) % count;
        if (idx !== showIndex) showIndex = idx;
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

<h2>
    Featured shows
</h2>

<HoveredShow  
    name={activeMonthlyShow.name}
    url={activeMonthlyShow.url}
    city={activeMonthlyShow.city}
    station={activeMonthlyShow.station}
/>

<div    id="box"
        bind:this={boxEl}
        ontouchstart={onTouchStart}>

    <div class="scene">
        <div class="cube" style="transform: translateZ(-{radius}em)">
            <div class="spinner" bind:this={spinnerEl}>
                {#each shows as show, i}
                    <a  href="{show.url}" class="face" target="_blank"
                        style="transform: rotateY({i * angleStep}deg) translateZ({radius}em);">
                        <div class="facepaint" style="background-image: url(../images/featuredShows/{show.slug}.webp)">
                            <span id="name">
                                {show.name}
                            </span>
                        </div>
                    </a>
                {/each}
            </div>
        </div>
    </div>
</div>

<HoveredShow  
    about={activeMonthlyShow.about}
    url={activeMonthlyShow.url}
/>

<p>
    A selection of our favourite presenters from across the globe
</p>


<style>
h2 {
    padding-top: 80px;
}

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
    width: 200px;
    height: 100%;
    /* perspective: 20000px; */
    perspective: 200px;
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
    background: var(--yang);
    border-right: 0.5px solid;
    width: 200px;
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
    mix-blend-mode: screen;
    filter: grayscale(1);
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

p {
    font-size: 24px;
    line-height: 26px;
    padding: 20px 10px 60px 10px;
    font-weight: 600;
}
</style>