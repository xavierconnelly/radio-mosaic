<script>
    export let items = [];
    export let onActiveChange; // callback from parent
    // export let y

    // width of your "face" in CSS units — must match .face width
    const faceWidth = 8; // em units

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
                <a    data-sveltekit-noscroll 
                        href="/stations/{item.slug}"
                        class="face"
                        style= "transform:  rotateY({i * angleStep}deg)
                                            translateZ({radius}em);
                                background-image: url(../images/flyover/{item.slug}.webp)">
                    <!-- <img    src="../images/flyover/{item.slug}.webp"                    
                            alt="an aerial landscapr view of {item.city}"/> -->
                    <span id="name"
                            style="background-color: #{item.tint}">{item.name}</span>
                </a>
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
    bottom: 0px;
    left: 0px;
    width: calc(100vw);
    height: 350px;
    color: var(--yang);
    background: var(--yin);
    border: 1px solid;
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
    background-color: red;
    border-right: 0.5px solid;
    width: 96px;
    height: 100%;
    font-size: 12px;
    padding-bottom: 10px;
    position: absolute;
    display: flex;
    align-items: center;
}
#name {
    padding: 8px 2px;
    border-radius: 99px;
    writing-mode: sideways-rl;
    position: absolute;
    bottom: 10px;
    left: 0px;
    margin: 10px;
}
/* img {
    width: 100%;
    height: 100%;
} */
</style>