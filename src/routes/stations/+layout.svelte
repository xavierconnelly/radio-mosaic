<script>
    // local components
	import ClockSmall from './clockSmall.svelte';
	import Plus from './lib/plus.svelte';
	import Minus from './lib/minus.svelte';

    // shared components
	import Audio from '$lib/audio.svelte';
	import MediaQuery from '$lib/mediaQuery.svelte';

    // padding in data
	import '/src/app.css'
    import { page } from '$app/stores';
    import { INDEX, updateIndexFromSlug } from '$lib/store.js';
    import { stationData } from '/src/routes/stations/radioData.js';

    // Keep INDEX synced with the current URL slug
    $: if ($page.params.slug) {
        updateIndexFromSlug($page.params.slug, stationData);
    }
</script>

<Audio/>
<slot />

<MediaQuery query="(min-width: 700px)" let:matches>
    {#if matches}
        <Minus/>
        <ClockSmall/>
        <Plus/> 
    {/if}
</MediaQuery>

<div class="shell highlight" style="background:#{stationData[$INDEX].highlight}"> 
</div>

<style>
.shell {
    height: calc(40vh + 28px);
    width: 100vw;
    transition: background 2s ease;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
}
</style>