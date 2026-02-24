<script>
    import { spring } from 'svelte/motion';
    import { onMount } from 'svelte';
    import { HOVER, stationData } from '/src/routes/stations/radioData.js';


    export let items = [];
    export let onActiveChange;

	// export let name;
	// export let city;
	// export let country;

   // variable for current hovered on
    $: moused = $HOVER;

    const faceWidth = 8;

    $: count = items.length;
    $: angleStep = 360 / count;
    $: radius = (faceWidth / 2) / Math.tan(Math.PI / count);

    let rawX = 0;
    const x = spring(0, {
        stiffness: 0.03,
        damping: 0.7
    });

    onMount(() => {
        rawX = Math.random() * 360;
        x.set(rawX, { hard: true });
    });

    $: angle = ($x % 360 + 360) % 360;
    $: activeIndex = Math.floor((angle + angleStep / 2) / angleStep) % count;
    $: activeItem = items[activeIndex];
    $: onActiveChange?.(activeIndex);

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

<div 
    id="box"
    on:wheel|nonpassive={onWheel}
    on:touchstart={onTouchStart}
    on:touchmove|nonpassive={onTouchMove}
>
    <div class="scene">
        <div 
            class="cube"
            style="transform: translateZ(-{radius}em) rotateY({$x}deg)"
        >
            {#each items as item, i}
                <a  
                    href="/stations/{item.slug}"
                    class="face"
                    style="transform: rotateY({i * angleStep}deg) translateZ({radius}em);
                            background-color: #{item.tint}"
                >
                    <div class="facepaint" style="background-image: url(../images/small/{item.slug}1x.webp)">
                        <span id="name"
                            style="background-color: #{item.clockhand};
                                color: #{item.tint}">
                            {item.name}
                        </span>
                    </div>
                </a> 
            {/each}
        </div>
    </div>
</div>

<span class="station">
    <h4>Kiosk Radio</h4>
    <p>Berlin</p>
    <p>Germany</p>
    <!-- <h4>{stationData[moused].name}</h4>
    <p>{stationData[moused].city}</p>
    <p>{stationData[moused].country}</p> -->
</span>



<style>
#box {
    z-index: 99;
	overflow: hidden;
    position: sticky;
    top: 27px;
    width: calc(100vw);
    height: 35vh;
    color: var(--yang);
    background: var(--yin);
    border-top: 1px solid;
    border-bottom: 1px solid;

}

.scene {
    width: 80px;
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
    width: 96px;
    height: 100%;
    font-size: 12px;
    padding-bottom: 10px;
    position: absolute;
    display: flex;
    align-items: center;
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
.station {
    font-size: 12px;
    text-transform: uppercase;
    height: 20px;
    width: 100%;
    padding: 0 8px;
    margin: auto;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: space-evenly;
    border-bottom: 1px solid;
    background-color: var(--yin);
    color: var(--yang);
    z-index: 99;
}
/* img {
    width: 100%;
    height: 100%;
} */
</style>