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
                    <img src={item.src}/>
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
    z-index: 99;
	overflow: hidden;
    position: fixed;
    bottom: 20px;
    left: 10px;
    width: calc(100vw - 110px);
    height: 120px;
    color: var(--yang);
    background: var(--yin);
    border: 1px solid;
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
    width: 24px;
    height: 120px;
    height: calc(28vh - 32px);
    font-size: 12px;
    padding-bottom: 10px;
    position: absolute;
    display: flex;
    align-items: center;
}
</style>