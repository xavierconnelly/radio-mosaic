<script>
	export let data;
</script>

<!-- 
not being used right now but
could use this as an overall reference page 
-->

<div id="stations">
	<h6>THIS IS WORKING BUT NOT NEEDED</h6>
	<div>
		<!-- This pulls in data from the +page.server.js file -->
		{#each data.banana as { slug, name }}
			<a href="/stations/{slug}" data-sveltekit-noscroll>{name}</a><br>
			{slug}
		{/each}
	</div>
</div>

<style>
	#stations {
		z-index: 40;
		background: rgba(209, 227, 11, 0.94);
    	min-height: 70dvh;
	}
</style>