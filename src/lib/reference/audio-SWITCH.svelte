<script>
	import { INDEX, stationData } from '/src/routes/stations/radioData.js';
	import { onMount } from 'svelte';

	const slotsOrder = ['A','B','C'];
	let audioEls = [];
	let slots = { A:null, B:null, C:null };
	let currentSlot = 'B';
	let ready = false;

	function selectStation(newIndex) {
		if (!ready) return;
		if (slots[currentSlot].stationIndex === newIndex) return;

		const reloadSlot = slotsOrder.find(s => s !== currentSlot && slots[s].stationIndex !== newIndex);

		slots[reloadSlot].audio.src = stationData[newIndex].audio;
		slots[reloadSlot].audio.preload = 'auto';
		slots[reloadSlot].stationIndex = newIndex;

		currentSlot = slotsOrder.find(s => slots[s].stationIndex === newIndex);

		slotsOrder.forEach(s => {
			if (s === currentSlot) {
				slots[s].audio.style.display = 'inline-block';
				slots[s].audio.play().catch(()=>{});
			} else {
				slots[s].audio.style.display = 'none';
				slots[s].audio.pause();
				slots[s].audio.currentTime = 0;
			}
		});
	}

	onMount(() => {
		slotsOrder.forEach((s,i)=>{
			slots[s] = { audio: audioEls[i], stationIndex: i };
			audioEls[i].src = stationData[i].audio;
			audioEls[i].preload = 'auto';
			audioEls[i].style.display = 'none';
		});

		currentSlot = 'B';
		slots[currentSlot].audio.style.display = 'inline-block';
		slots[currentSlot].audio.play().catch(()=>{});

		ready = true;
	});

	$: if (ready && typeof $INDEX !== 'undefined') {
		selectStation($INDEX);
	}
</script>

<div>
	{#each Array(3) as _, i}
		<audio bind:this={audioEls[i]} controls></audio>
	{/each}
</div>