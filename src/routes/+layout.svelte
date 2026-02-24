<script>
    // import { fly } from 'svelte/transition';
    // import { page } from '$app/state';
    	import MediaQuery from '$lib/mediaQuery.svelte';
    
    import Audio from '$lib/audio.svelte';
</script>


<MediaQuery query="(min-width: 700px)" let:matches>
    {#if matches}
        <header>
            <a href="/">
                <h1 class="medula-one-regular">
                    RADIO MOSAIC
                </h1>
            </a>
        </header>
    {/if}
</MediaQuery>

<Audio/>


<slot />

<style>
    header {
        position: fixed;
        padding: 0 30px;
        top: 0;
        left: 0;
        z-index: 99;
        background-color: var(--yin);
        height: 32px;
        color: var(--yang);
        border-bottom: 1px solid;
        width: 100vw;
        transition: 1s;
    }
    h1 {
        margin: auto 0;
        font-size: 20px;
        line-height: 32px;
    }
	@media (max-width: 700px) {
		header {
            padding: 0 10px;
        }
        h1{
            position: relative;
            padding: 10px 10px 10px 10px;
            font-size: 60px;
            line-height: 72px;
            font-weight: 800;
            border-bottom: unset;
            text-align: justify;
        }
    }

	/* media stylings ~ MOBILE */
	@media (max-width: 500px) {
		header {
            height: 28px;
            font-size: 10px;
            transition: 1s;
		}
	}
</style>