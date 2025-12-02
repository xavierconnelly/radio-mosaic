<script>
    import { HOVER, stationData } from '/src/routes/stations/radioData.js';

	// Props passed from parent each block
	export let name;
	export let slug;
	export let city;
	export let country;

</script>

<div id="glimpse">
<img src="https://radio-mosaic.netlify.app/src/lib/assets/flyover/{slug}.png" alt="" />

</div>

<div class="station">
	<h4>{name}</h4>
	<!-- <p>{city}</p>
	<p>{country}</p> -->
</div>

<style>

#glimpse {
    display: none;
    width: 100dvw;
    height: calc(75dvh);
    position: fixed;
    top: 44px;
    left: 0;
    transform: translate(0%, 0%);
    border: 10px solid var(--yin);
    background-color: var(--yang);
    overflow: hidden;
    z-index: 4;
    transition: 2s;
    opacity: 0;
}

img {
    object-fit: cover;
    filter: grayscale(1);
    mix-blend-mode: screen;
}

:global(#box:hover + #glimpse) {
    display: block;
    transition: 2s;
    opacity: 1;
}

.station {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: space-evenly;
    bottom: calc(25vh - 44px);
    right: 0;
    width: 100dvw;
    z-index: 99;
    height: 5vh;
    background-color: var(--yin);
    color: var(--yang);
    padding: 0 10px;
}

/* media stylings ~ TABLET */
@media (max-width: 500px) {
        #glimpse {
            top: 28px;
        }
        .station {
            bottom: calc(25vh - 28px);
        }
    }
</style>