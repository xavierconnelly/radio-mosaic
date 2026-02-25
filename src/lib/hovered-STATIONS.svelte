<script>
    // bringing in the data of all stations and current 'selected'
    import { HOVER, stationData } from '/src/routes/stations/radioData.js';
    
	// Props passed from parent each block
	export let name;
	export let slug;
	export let tint;
	export let clockhand;
</script>



<a class="station" data-sveltekit-noscroll href="/stations/{slug}"
		style="background: #{tint}; color: #{clockhand}">
    <h4>{name}</h4>
</a>



<style>
h4 {
    font-size: 12px;
}
.station {
    position: fixed;
    bottom: calc(17vh - 22px);
    left: 50%;
    height: 5vh;
    width: max-content;
    padding: 0 30px;
    margin: auto;
    display: flex;
    flex-direction: row;
    gap: 10px;
    transform: translateX(-50%);
    align-items: center;
    /* justify-content: space-evenly; */
    border: 1px solid;
    border-radius: 2px;
    background-color: var(--yin);
    color: var(--yang);
    z-index: 99;
}

/* media stylings ~ TABLET */
@media (max-width: 500px) {
    .station {
        bottom: 110px;
        left: 76px;
        height: 36px;
        width: calc(100vw - 152px);
        transform: unset;
        border-radius: 111px;
        opacity: 0.85;
    }
}
</style>