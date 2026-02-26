<script>
    import { HOVER, stationData } from '/src/routes/stations/radioData.js';

    export let activeIndex = 0;
    $: activeSlug = stationData[activeIndex]?.slug;
    $: hoveredSlug = $HOVER;

    // generate all 220 cells (13 rows x 20 cols)
    const allCells = [];
    for (let row = 1; row <= 11; row++) {
        for (let col = 1; col <= 20; col++) {
            allCells.push({ row, col });
        }
    }

    // cells that already have content
    $: occupiedCells = new Set([
        ...stationData.map(s => `${s.col}-${s.row}`),
        // UTC label row
        ...Array.from({length: 20}, (_, i) => `${i+1}-9`)
    ]);

    $: emptyCells = allCells.filter(c => !occupiedCells.has(`${c.col}-${c.row}`));
</script>
    
<div id="timezone-grid">

    <!-- UTC labels at row 9 -->
    <div class="utc-label bounds" style="grid-column: 1; grid-row: 9"> -8 </div>
    <div class="utc-label bounds" style="grid-column: 2; grid-row: 9"> -6 </div>
    <div class="utc-label bounds" style="grid-column: 3; grid-row: 9"> -5 </div>
    <div class="utc-label bounds" style="grid-column: 4; grid-row: 9"> -3 </div>
    <div class="utc-label bounds" style="grid-column: 5; grid-row: 9"> 0 </div>
    <div class="utc-label bounds" style="grid-column: 6; grid-row: 9"> 0 </div>
    <div class="utc-label bounds" style="grid-column: 7; grid-row: 9"> +1 </div>
    <div class="utc-label bounds" style="grid-column: 8; grid-row: 9"> +1 </div>
    <div class="utc-label bounds" style="grid-column: 9; grid-row: 9"> +1 </div>
    <div class="utc-label bounds" style="grid-column: 10; grid-row: 9"> +1 </div>
    <div class="utc-label bounds" style="grid-column: 11; grid-row: 9"> +1 </div>
    <div class="utc-label bounds" style="grid-column: 12; grid-row: 9"> +1 </div>
    <div class="utc-label bounds" style="grid-column: 13; grid-row: 9"> +2 </div>
    <div class="utc-label bounds" style="grid-column: 14; grid-row: 9"> +2 </div>
    <div class="utc-label bounds" style="grid-column: 15; grid-row: 9"> +3 </div>
    <div class="utc-label bounds" style="grid-column: 16; grid-row: 9"> +4 </div>
    <div class="utc-label bounds" style="grid-column: 17; grid-row: 9"> +7 </div>
    <div class="utc-label bounds" style="grid-column: 18; grid-row: 9"> +8 </div>
    <div class="utc-label bounds" style="grid-column: 19; grid-row: 9"> +9 </div>
    <div class="utc-label bounds" style="grid-column: 20; grid-row: 9"> +11 </div>

    <!-- dots -->
    {#each stationData as station}
        <span   class="bounds"
                class:active={station.slug === activeSlug}
                style="grid-column: {station.col}; grid-row: {station.row};
                        --tint: #{station.tint};">
            <a  href="/stations/{station.slug}"
                class="dot"
                class:active={station.slug === activeSlug}
                class:hovered={station.slug === hoveredSlug}
                style="--clockhand: #{station.clockhand}"
                title={station.name}>
            </a>
        </span>

    {/each}

    {#each emptyCells as cell}
        <div class="bounds" style="grid-column: {cell.col}; grid-row: {cell.row}"></div>
    {/each}

</div>


<style>
#timezone-grid {
    display: inline-grid;
    align-self: stretch;
    grid-template-rows: repeat(11,fit-content(100%));
    grid-template-columns: repeat(20,fit-content(100%));
    /* padding: 16px; */
    width: 100%;
    box-sizing: border-box;
    transform-origin: top left;
    border-top: 1px solid var(--yang);
    /* background-image: 
        linear-gradient(var(--yang) 1px, transparent 1px),
        linear-gradient(90deg, var(--yang) 1px, transparent 1px);
    background-size: calc(100% / 20) calc(100% / 11); */
}
.bounds {
    height: calc(100vw / 20);
    width: calc(100vw / 20);
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--yang);
    border-left: 1px solid var(--yang);
    background-color: transparent;
    will-change: background-color;
    transition: background-color 2s ; /* slow fade out */
}

.bounds.active {
 background-color: var(--tint);
    transition: background-color 0s ease; /* snap in */
}

.dot {
    width: 60%;
    height: 60%;
    margin: 0 auto;
    border-radius: 50%;
    /* background: var(--yang); */
    opacity: 0.5;
    cursor: pointer;
    /* background: var(--yang); */
    background: var(--clockhand);
    will-change: background-color;
    transition: background 2s ; /* slow fade out */
}

.dot:hover, .dot.hovered {
    opacity: 1;
    /* background: #2c16d4; */
}

.dot.active {
    background: var(--clockhand);
    transition: background 0s ease; /* snap in */
}

.utc-label {
    font-size: 12px;
    color: var(--yang);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: monospace;
}

@media (max-width: 700px) {
    #timezone-grid {
        /* gap: 2px; */
    }
}
</style>