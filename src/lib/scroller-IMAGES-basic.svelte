<script>
    export let items = [];
    export let onActiveChange;
    import { spring } from 'svelte/motion';

    const faceWidth = 8;

    $: count = items.length;
    $: angleStep = 360 / count;
    $: radius = (faceWidth / 2) / Math.tan(Math.PI / count);

    let rawX = 0;
    const x = spring(0, {
        stiffness: 0.05, //how fast it cactches up
        damping: 0.8 // springiness
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
                           background-image: url(../images/small/{item.slug}.webp)"
                >
                    <span id="name"
                        style="background-color: #{item.clockhand};
                               color: #{item.tint}">
                        {item.name}
                    </span>
                </a>
            {/each}
        </div>
    </div>
</div>


<style>
#box {
    z-index: 99;
	overflow: hidden;
    position: relative;
    bottom: 0px;
    left: 0px;
    width: calc(100vw);
    height: 40vh;
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
    background-size: cover;
    border: 5px solid var(--yin);
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
/* img {
    width: 100%;
    height: 100%;
} */
</style>