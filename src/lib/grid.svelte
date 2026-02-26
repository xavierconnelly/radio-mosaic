<script>
    import { INDEX, HOVER, stationData } from '/src/routes/stations/radioData.js';

    $: activeSlug = $INDEX !== null ? stationData[$INDEX]?.slug : null;
    $: hoveredSlug = $HOVER;

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
        <span  class="bounds"
                style="background-color: #{station.obi}">
            <a  href="/stations/{station.slug}"
                class="dot"
                class:active={station.slug === activeSlug}
                class:hovered={station.slug === hoveredSlug}
                style="grid-column: {station.col}; grid-row: {station.row}; background: #{station.tint}"
                title={station.name}>
            </a>
        </span>
    {/each}

</div>


<style>
#timezone-grid {
    display: inline-grid;
    align-self: stretch;
    grid-template-rows: repeat(13,fit-content(100%));
    grid-template-columns: repeat(20,fit-content(100%));
    /* padding: 16px; */
    width: 100%;
    box-sizing: border-box;
    transform-origin: top left;
}
.bounds {
    height: calc(100vw / 20);
    width: calc(100vw / 20);
    display: flex;
    align-items: center;
    border: 1px solid var(--yang);
}
.dot {
    width: 60%;
    height: 60%;
    margin: 0 auto;
    border-radius: 50%;
    /* background: var(--yang); */
    opacity: 0.8;
    transition: opacity 0.2s, transform 0.2s, background 0.2s;
    cursor: pointer;
}

.dot:hover, .dot.hovered {
    opacity: 1;
    background: #2c16d4;
}

.dot.active {
    background: #E84B2A;
    opacity: 1;
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