<script>
    import { HOVER, stationData } from '/src/routes/stations/radioData.js';

	// Props passed from parent each block
	export let name;
	export let slug;
	// export let city;
	// export let country;
</script>

<div id="glimpse">
<img src="../images/flyover/{slug}.webp" alt="" />

</div>

<a class="station" data-sveltekit-noscroll href="/stations/{slug}">
    <h4>{name}</h4>
    <!-- <p>{city}</p>
    <p>{country}</p> -->
    <svg class="icon" viewBox="0 0 24 24">
        <polygon points="6,4 20,12 6,20" />
    </svg>
</a>

<style>

#glimpse {
    display: none;
    width: 100dvw;
    height: calc(72dvh);
    position: fixed;
    top: 32px;
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

.icon {
    fill: currentColor;
    width: 1.2em;
    height: 1.2em;
}

/* media stylings ~ TABLET */
@media (max-width: 500px) {
        #glimpse {
            top: 28px;
        }
        .station {
            bottom: calc(17vh - 11px);
        }
        :global(#box:hover + #glimpse) {
            display: none;
        }
    }
</style>