<script>
    import { spring } from 'svelte/motion';

    let { items = [], onActiveChange } = $props();

    // width of your "face" in CSS units — must match .face width
    const faceWidth = 3; // em units

    let count = $derived(items.length);
    let angleStep = $derived(360 / count);

    // radians
    let radius = $derived((faceWidth / 2) / Math.tan(Math.PI / count));

    // normalize angle to 0–360
    let angle = $derived(($x % 360 + 360) % 360);

    // deduce which face is forward
    let activeIndex = $derived(Math.floor((angle + angleStep / 2) / angleStep) % count);

    let activeItem = $derived(items[activeIndex]);

    // notify parent
    $effect(() => {
        onActiveChange?.(activeIndex);
    });

    let rawX = 0;
    const x = spring(0, {
        stiffness: 0.03, //how fast it catches up
        damping: 0.7 // springiness when stopping
    });

    let lastTouch = null;
    let boxEl = $state();

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

<div 
    id="box"
    bind:this={boxEl}
    ontouchstart={onTouchStart}
>
    <div class="scene">
        <div 
            class="cube"
            style="transform: translateZ(-{radius}em) rotateY({$x}deg)"
        >
            {#each items as item, i}
                <div 
                    class="face"
                    style="transform: rotateY({i * angleStep}deg) translateZ({radius}em);
                           background-color: #{item.tint};
                           color: #{item.fill}"
                >
                    {item.name}
                </div>
            {/each}
        </div>
    </div>
</div>

<style>

#box {
    width: 100vw;
    height: calc(28vh - 32px);
    z-index: 99;
	overflow: hidden;
    position: fixed;
    bottom: 0;
    left: 0;
    border-top: 1px solid var(--yang);
    background: var(--yin);
}

.scene {
    width: 24px;
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
    writing-mode: sideways-lr;
    width: 24px;
    height: calc(28vh - 32px);
    font-size: 7px;
    padding-bottom: 10px;
    position: absolute;
    display: flex;
    align-items: center;
    opacity: 1;
}

@media (max-width: 500px) {
    #box {
        width: calc(100vw - 110px);
        height: 96px;
        width: calc(100vw - 20px);
        height: 80px;
        bottom: 20px;
        left: 10px;
        border-radius: 28px;
        border-top: unset;
        border: 1px solid var(--yang);
		opacity: 0.9;
    }
    .face {
        height: calc(28vh - 28px);
        width: 21px;
        top: -2px;
        box-shadow: 9px 0px 10px #00000038;
        border-right: unset;
        height: 96px;
        color: #00000000;
    }
}
</style>