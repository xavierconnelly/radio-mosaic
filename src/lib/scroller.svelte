<script>
    export let items = [];
    export let onActiveChange; // callback from parent
    // export let y

    // width of your "face" in CSS units — must match .face width
    const faceWidth = 3; // em units

    $: count = items.length;
    $: angleStep = 360 / count;

    // radians
    $: radius = (faceWidth / 2) / Math.tan(Math.PI / count);

    // scroll
    let x = 0;

    // normalize angle to 0–360
    $: angle = (x % 360 + 360) % 360;

    // deduce which face is forward
    $: activeIndex = Math.floor((angle + angleStep / 2) / angleStep) % count;

    $: activeItem = items[activeIndex];
    // notify parent
    $: onActiveChange?.(activeIndex);
</script>

<svelte:window bind:scrollX={x}/>

<div id="filler">
</div>

<div data-sveltekit-noscroll id="box">
    <div    data-sveltekit-noscroll 
            class="scene">
        <div data-sveltekit-noscroll 
            class="cube"
            style="transform: translateZ(-{radius}em) rotateY({x}deg)"
        >
            {#each items as item, i}
                <div    data-sveltekit-noscroll 
                        class="face"
                        style= "transform:  rotateY({i * angleStep}deg)
                                            translateZ({radius}em)">
                    {item.name}
                </div>
            {/each}
        </div>
    </div>
</div>


<style>

#filler{
    height: 100vh;
    width: 5000dvw;
    z-index: -99;
    user-select: none;
    /* background-color: yellowgreen; */
}

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
        height: calc(28vh - 28px);
        width: 80vw;
        height: 80px;
        border-radius: 80px;
    }
    .face {
        height: calc(28vh - 28px);

    }
}
</style>