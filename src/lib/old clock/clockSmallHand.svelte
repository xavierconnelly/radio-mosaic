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


<a
	href="./{slug}"
	class="hand"
	class:selected={i === $INDEX}
	style="transform: rotate(calc({i} * {radius}deg)) translateX(50%); background: #{stationData[$INDEX].fill};"
>
<!-- <a
	href="./{slug}"
	class="hand"
	class:selected={i === $INDEX}
	style="transform: rotate(calc({i} * {radius}deg)) translateX(50%); background: #{fill}; color:#{highlight}"
> -->
	<span class="details">
		<span class="name">{name}</span>
		<span class="utc">{utc}</span>
	</span>
</a>

<!-- height: calc(2 * 3.14px * {radius});-->

<!-- 
	<span class="details">
		<span class="name">{name}</span>
		<span class="utc">{utc}</span>	
	</span>
</a> -->

<style>
	
/* :global(.clock:last-child .hand) {
    mix-blend-mode: lighten;
} */

.hand {
    /* the top must minus half the height ~ maybe better as 6 + 3 */
    height: 20px;
    top: calc(50% - 10px); 
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    /* the left must minus half the width  */
    width: 50%;
    left: 25%;
    /* background: #453939; */
    position: absolute;
    text-align: right;
    cursor: pointer;
    color: inherit;
    /* color: rgba(127, 118, 118, 0.689); */
    transform-origin: center;
    border: none;
    /* border-top: 0.5px solid black; */
    /* border-top: 1px solid white; */
    /* border-radius: 10px; */
}

.hand .name {
    opacity: 60%;
}

.hand:hover .name {
	/* background: #F4F2EA; */
    opacity: 100%;
    transition: 0s;
}

.details .name {
    display: block;
    padding-right: 3px;
    transition: 1s;
    font-size: 6px;
    line-height: 20px;
    will-change: transform;
}

.hand:hover .name  {
	transition: 0s;
    font-size: 12px;
    line-height: 20px;
	/* color: #453939; */
    font-weight: bold;
}
	
:global(.hand:hover + .hand) {
    /* background: #453939;
    mix-blend-mode: darken; */
}

a.selected::after {
    content: '.';
    background-color: inherit;
    display: inline-block;
    position: absolute;
    bottom: 6px;
    margin-left: 10px;
    width: 12px;
    height: 12px;
    border-radius: 6px;
     -moz-border-radius: 6px;
       -webkit-border-radius: 6px;
}

.details .utc {
    display: none;
    margin: 0;
    color:  #453939;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 50px;
    height: 100%;
/*border-top: 1px solid;*/
    z-index: 1;
}

/* .playing {color: #453939} */

</style>