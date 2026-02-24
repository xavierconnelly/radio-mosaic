<script>
    import { HOVER, stationData } from '/src/routes/stations/radioData.js';
    
	// Props passed from parent each block
	export let name;
	export let slug;
	export let tint;
	export let clockhand;
	// export let city;
	// export let country;
</script>


<a class="station" data-sveltekit-noscroll href="/stations/{slug}"
		style="background: #{tint}; color: #{clockhand}"
>
    <h4>{name}</h4>
    <!-- <p>{city}</p>
    <p>{country}</p> -->
    <!-- <svg class="icon" viewBox="0 0 24 24">
        <polygon points="6,4 20,12 6,20" />
    </svg> -->
</a>

<style>
h4 {
    font-size: 12px;
}
.station {
    height: 5vh;
    padding: 0 30px;
    position: fixed;
    bottom: calc(17vh - 22px);
    left: 50%;
    width: max-content;
    display: flex;
    margin: auto;
    flex-direction: row;
    gap: 10px;
    transform: translateX(-50%);
    align-items: center;
    border: 1px solid;
    border-radius: 2px;
    justify-content: space-evenly;
    z-index: 99;
    background-color: var(--yin);
    color: var(--yang);
}

/* media stylings ~ TABLET */
@media (max-width: 500px) {
    .station {
        bottom: 126px;
        bottom: 110px;
        height: 36px;
        width: calc(100vw - 152px);
        left: 76px;
        transform: unset;
        border-radius: 111px;
        opacity: 0.85;
    }
    :global(#box:hover + #glimpse) {
        display: none;
    }
}
</style>