<script>
    import { page } from '$app/stores';
    import { INDEX, updateIndexFromSlug } from '$lib/store.js';
    import { stationData } from '/src/routes/stations/radioData.js';

    // Keep INDEX synced with the current URL slug
    $: if ($page.params.slug) {
        updateIndexFromSlug($page.params.slug, stationData);
    }

</script>


<footer>
    <nav>
        {#if $INDEX !== null}
            <h2>
                You are now listening to {$INDEX}: {stationData[$INDEX].name}
            </h2>
        {/if}
        <span>time</span>
        <span>location</span>
    </nav>
</footer> 

{#if $INDEX !== null}
<div
    style="background-image: url('/src/lib/assets/flowers/{stationData[$INDEX].slug}.png')">
    hello stranger
</div>
{/if}



<style>
	footer {
        height: 50px;
        position: fixed;
        bottom: 0;
		display: flex;
		flex-direction: column;
        overflow: hidden;
        transition: 1s;
        background-color: pink;
        z-index: 99;
	}

	footer:hover {
        height: 50vh;
        transition: 1s;
    }

    footer nav {
        height: 50px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
        line-height: 50px;
    }

    h2 {
        margin: auto 0;
    }
</style>