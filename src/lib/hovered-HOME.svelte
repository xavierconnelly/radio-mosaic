<script>
    // bringing in the data of all stations and current 'selected'
    import { HOVER, stationData } from '/src/routes/stations/radioData.js';
    
	// Props passed from parent each block
	export let name;
	export let slug;
	export let city;
	export let country;
    export let i
</script>


<a class="station" data-sveltekit-noscroll href="/stations/{slug}">
    <b>{city}</b>
    <h4>{name}{i}</h4>
    <b>{country}</b>
</a>


<style>
.station {
    font-size: 11px;
    text-transform: uppercase;
    height: 20px;
    width: 100%;
    padding: 0 8px;
    margin: auto;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    gap: 1px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid;
    background-color: var(--yin);
    color: var(--yang);
    z-index: 99;
}
</style>