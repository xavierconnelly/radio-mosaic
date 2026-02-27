<script>
    import { spring } from 'svelte/motion';
    import { onMount } from 'svelte';
    import { HOVEREREDFEATURE, monthlyShows } from '/src/routes/stations/featured.js';

    // import HoveredHome from '$lib/hovered-HOME.svelte';

    export let shows = [];
    export let onShowGlipmse;

   // variable for current hovered on
    $: show = $HOVEREREDFEATURE;

    const faceWidth = 8;

    $: count = shows.length;
    $: angleStep = 360 / count;
    $: radius = (faceWidth / 2) / Math.tan(Math.PI / count);

    let rawX = 0;
    const x = spring(0, {
        stiffness: 0.03,
        damping: 0.7
    });

    // onMount(() => {
    //     rawX = Math.random() * 360;
    //     x.set(rawX, { hard: true });
    // });

    onMount(() => {
        const randomFace = Math.floor(Math.random() * count);
        rawX = randomFace * angleStep;
        x.set(rawX, { hard: true });
    });

    $: angle = ($x % 360 + 360) % 360;
    $: showIndex = Math.floor((angle + angleStep / 2) / angleStep) % count;
    $: activeShow = shows[showIndex];
    $: onShowGlipmse?.(showIndex);

    let lastTouch = null;

    function onWheel(e) {
        e.preventDefault();
        rawX += e.deltaX || e.deltaY;
        x.set(rawX);
    }

    function onTouchStart(e) {
        lastTouch = e.touches[0].clientX;
    }

    function onTouchMove(e) {
        e.preventDefault();
        const delta = lastTouch - e.touches[0].clientX;
        rawX += delta;
        lastTouch = e.touches[0].clientX;
        x.set(rawX);
    }
</script>


<div    id="box"
        on:wheel|nonpassive={onWheel}
        on:touchstart={onTouchStart}
        on:touchmove|nonpassive={onTouchMove}>
    <div class="scene">
        <div class="cube" style="transform: translateZ(-{radius}em) rotateY(-{$x}deg)">
            {#each shows as show, i}
                <a  href="{show.slug}" class="face"
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
    width: 200px;
    height: 100%;
    perspective: 20000px;
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

.face {
    color: var(--yang);
    background: var(--yin);
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