<!-- <script>
    import { fly } from 'svelte/transition';
    import { page } from '$app/state';
</script> -->

<header>
    <h1>
        <a href="/">RADIO MOSAIC </a>
    </h1>
</header>

<slot />

<style>
    header {
        position: fixed;
        padding: 0 30px;
        top: 0;
        left: 0;
        z-index: 99;
        background-color: var(--yin);
        height: 44px;
        color: var(--yang);
        border-bottom: 1px solid;
        width: 100vw;
        transition: 1s;
    }
    h1 {
        margin: auto 0;
    }
	@media (max-width: 700px) {
		header {
            padding: 0 10px;
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