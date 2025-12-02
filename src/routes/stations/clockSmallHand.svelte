<script>
    import { page } from '$app/stores';
    import { INDEX, updateIndexFromSlug } from '$lib/store.js';
    import { stationData } from '/src/routes/stations/radioData.js';

    // Keep INDEX synced with the current URL slug
    $: if ($page.params.slug) {
        updateIndexFromSlug($page.params.slug, stationData);
    }

	// Props passed from parent each block
	export let i;
	export let name;
	export let slug;
	export let utc;
	export let fill;
	export let highlight;

	// Rotation calculation
	let radius = 360 / stationData.length;
</script>

<a  data-sveltekit-noscroll 
	href="./{slug}"
	class="hand"
	class:selected={i === $INDEX}
	style="transform: rotate(calc({i} * {radius}deg)) translateX(50%);"
>
    <span class="station-name">{name}</span>
    <span class="utc" style="color: {fill};">{utc}</span>
</a>

<style>
.hand {
    /* the top must minus half the height ~ maybe better as 6 + 3 */
    height: 28px;
    top: calc(50% - 14px); 
    /* the left must minus half the width  */
    width: 50%;
    left: 25%;
    position: absolute;
    text-align: right;
    transform-origin: center;
    transition: 7s;
}

.hand .station-name {
    display: block;
    padding-right: 6px;
    transition: 1s;
    font-size: 9px;
    opacity: 0.5;
    line-height: 20px;
    border-top: 0.5px solid;
    will-change: transform;
    transition: 2s;

    /* probably not needed by trying to make the un-hovering less janky */
    width: 100%;
    position: absolute;
    top: 50%;
    right: 0;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
}

.hand:hover .station-name {
    opacity: 0.8;
    font-size: 12px;
    font-weight: bold;
    transition: 0s;
}

.hand .utc {
    /* display: none; */
    margin: 0;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 50px;
    height: 100%;
}

.selected {
    font-size: 50px;
    line-height: 14px;
}

/* not working */

.hand.selected::before {
    content: '';
    background-color: inherit;
    display: inline-block;
    position: absolute;
    bottom: 50%;
    margin-left: -10px;
    width: 28px;
    height: 28px;
    border-radius: 14px;
    -moz-border-radius: 14px;
    -webkit-border-radius: 14px;
}
</style>