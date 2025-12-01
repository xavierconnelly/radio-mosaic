<svelte:window bind:scrollY={y}/>

<script>
    export let items = [];

    // width of your "face" in CSS units — must match .face width
    const faceWidth = 25.8; // px units

    $: count = items.length;
    $: angleStep = 360 / count;

    // radians
    $: radius = (faceWidth / 2) / Math.tan(Math.PI / count);

    // scroll
    let y;    
</script>

<div class="scene" style="perspective: {radius * 22}em;">
    <div 
        class="cube"
        style="transform: translateZ(-{radius}em) rotateY({y}deg)"
    >
        {#each items as item, i}
            <img 
                src="/src/lib/assets/flyover/{item.slug}.png"
                alt="none"
                class="face"
                style="
                    transform: 
                        rotateY({i * angleStep}deg)
                        translateZ({radius}em);
                "
            />
                
        {/each}
    </div>
</div>

<style>
.scene {
    width: 90vw;
    height: calc(70vh - 28px);
    position: fixed;
    top: 28px;
    left: 0;
    transform: translate(0%, 0%);
    border: 10px solid var(--yin);
    overflow: hidden;
}

.cube {
    width: 100%;
    height: 110%;
    position: relative;
    transform-style: preserve-3d;
}

.face {
    writing-mode: sideways-rl;
    width: 110vw;
    height: 100%;
    position: absolute;
    object-fit: cover;
}
</style>