<script>
    import { page } from '$app/stores';
    import { INDEX, updateIndexFromSlug } from '$lib/store.js';
    import { stationData } from '/src/routes/stations/radioData.js';

    // Keep INDEX synced with the current URL slug
    $: if ($page.params.slug) {
        updateIndexFromSlug($page.params.slug, stationData);
    }
    
    import flyover from '$lib/assets/flyover.png';
	import Time from '$lib/time.svelte';

    export let data; // or whatever your load function returns
    const station = data.station; // if that's your structure

	import Plus from '/src/lib/plus.svelte';
</script>


{#if $INDEX !== null}
	<container
		style="background-image: url('/src/lib/assets/flowers/{stationData[$INDEX].slug}.png');"
	></container>

	<footer style="background: #{stationData[$INDEX].fill}; color: #{stationData[$INDEX].highlight};">
		<nav style="background: #{stationData[$INDEX].sparkle}; color: #{stationData[$INDEX].fill};">
			<span id="play">play/pause</span>
			<h2>{stationData[$INDEX].name}</h2>
			<span id="origin">
                <Time timezone={station.timezone} />
				<b>{stationData[$INDEX].city}</b>
				<span>{stationData[$INDEX].country}</span>
			</span>
		</nav>

		<div id="bio" style="color: #{stationData[$INDEX].sparkle};">
			<img src="/src/lib/assets/flyover/{stationData[$INDEX].slug}.png" alt="hello" />
			<span>
				<p>{@html stationData[$INDEX].about}</p>
				<br />
				<a
					href="{stationData[$INDEX].url}"
					target="_blank"
					style="background: #{stationData[$INDEX].highlight}; color: #{stationData[$INDEX].fill};"
				>
					view site
				</a>
			</span>
            <span id="about"> 
	            <a href="/">radio mosaic</a> is a community, a movement a way of bringing the past, future and present together at once. While we may live in fragmented corners of the globe, we are all one.
            </span>
            <Plus />
		</div>
	</footer>
{/if}

<style>
    container {
        height: 100vh;
        width: 100vw;
        background-size: 10vw;        
        display: block;
        /* display: none; */
        mix-blend-mode: screen;
        position: fixed;
        top: 0;
        left: 0;
        transition: 2s;
        z-index: 3;
    }

    footer {
        height: 40px;
        width: 100vw;
        position: fixed;
        bottom: 0;
		display: flex;
		flex-direction: column;
        overflow: hidden;
        transition: 1s;
        z-index: 99;
        border-top: inherit;
      /* height: 60vh; */
	}

	footer:hover {
        height: 60vh;
        transition: 1s;
    }

    footer nav {
        height: 40px;
        padding: 0 30px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
        font-size: 20px;
        line-height: 40px;
    }

    #play, #origin {
        width: 45vw;
    }

    #origin {
        text-align: right;
    }

    h2 {
        font-size: 20px;
        line-height: 40px;
        margin: auto 0;
        width: 50vw;
        text-align: center;
    }

    #bio {
        display: flex;
        gap: 20px;
        padding: 10px 30px;

    }
    #bio img {
        width: 33vw;
        height: 50vh;
        object-fit: cover
    }
    #bio span {
        width: 33vw;
    }

    #bio span a {
        border-radius: 30px;
        padding: 4px 20px;
    }
    #about {
        max-width: 10vw;
        font-size: 12px;
    }
</style>