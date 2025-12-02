<script>
    import { HOVER, stationData } from '/src/routes/stations/radioData.js';

	// Props passed from parent each block
	export let name;
	export let slug;
	export let city;
	export let country;

</script>

<div id="glimpse">
<img src="../images/flyover/{slug}.webp" alt="" />

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
    height: calc(70dvh);
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
    height: 5vh;
    padding: 0 10px;
    position: fixed;
    bottom: calc(15vh - 22px);
    left: 50%;
    display: flex;
    margin: auto;
    flex-direction: column;
    transform: translateX(-50%);
    align-items: baseline;
    justify-content: space-evenly;
    z-index: 99;
    background-color: var(--yang);
    color: var(--yin);
}

/* media stylings ~ TABLET */
@media (max-width: 500px) {
        #glimpse {
            top: 28px;
        }
        .station {
            /* not sitting correctly */
            bottom: calc(25vh - 28px);
        }
    }
</style>