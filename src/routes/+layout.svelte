<script>
    import { page }                         from '$app/state';

    import { mediaQuery }                   from '$lib/utils/mediaQuery.svelte.js';
    import Audio                            from '$lib/layout/audio.svelte';
	import Obi                              from '$lib/layout/obi.svelte';
    import Clock                            from '$lib/components/clock.svelte';

    import '../app.css'

    const mobile = mediaQuery('(max-width: 700px)');

    let { children } = $props();

    let variant = $derived(page.route.id === '/' ? 'hero' : 'corner');

    $effect(() => {
        document.documentElement.dataset.route = 
            page.route.id === '/' ? 'home' : 'station';
    });
</script>

{#if !mobile.matches}
    <header>
        <a href="/">
            <h1>RADIO MOSAIC</h1>
        </a>
    </header>
{/if}

<Audio />

{@render children()}
<!-- <Obi
    obiText={station.obiText}
    obi={station.obi}/> -->
    {#if !mobile.matches}
        <Obi {variant} />
   {/if}  
<Clock {variant} />

    <div class="tbc">
        A Radio Mosaic é uma comunidade, um movimento, uma forma de reunir o passado, o futuro e o presente ao mesmo tempo. Embora vivamos em cantos fragmentados do globo, somos todos um só. É uma comunidade, um movimento, uma forma de reunir o passado, o futuro e o presente ao mesmo tempo. Embora vivamos em cantos fragmentados do globo, somos todos um só.
        A Radio Mosaic é uma comunidade, um movimento, uma forma de reunir o passado, o futuro e o presente ao mesmo tempo. Embora vivamos em cantos fragmentados do globo, somos todos um só. É uma comunidade, um movimento, uma forma de reunir o passado, o futuro e o presente ao mesmo tempo. Embora vivamos em cantos fragmentados do globo, somos todos um só.
    </div>

<style>
header {
    position: fixed;
    top: 0;
    left: 0;
    padding: 0 30px;
    width: 100vw;
    height: 32px;
    color: var(--yang);
    background-color: var(--yin);
    border-bottom: 1px solid;
    transition: 1s;
    z-index: 99;
}
h1 {
    margin: auto 0;
    font-size: 20px;
    line-height: 32px;
}

.tbc{
    display: none;
}

@media (max-width: 700px) {
    header { padding: 0 10px; }
    h1 {
        position: relative;
        padding: 10px;
        font-size: 60px;
        line-height: 72px;
        font-weight: 800;
        border-bottom: unset;
        text-align: justify;
    }
    .tbc {
        padding: 50px 10px 100px 10px;
        display: block;
    }
}
@media (max-width: 500px) {
    header {
        height: 28px;
        font-size: 10px;
    }
}
</style>