<script>
  export let slug;

  let stack = [];

  // fade in newest image
  $: if (slug) {
    const src = `/images/glimpse/${slug}1x.webp`;
    const id = crypto.randomUUID();
    stack = [...stack, { id, src }];
  }

  function remove(id) {
    stack = stack.filter(i => i.id !== id);
  }
</script>

<div class="flyover-wrap">
  {#each stack as item (item.id)}
    <img
      alt="a overview of the selected city"
      class="img"
      src={item.src}
      on:load={(e) => e.target.classList.add('visible')}
      on:transitionend={() => remove(item.id)}
    />
  {/each}
  <!-- <div class="local">
    <p>{stationData[moused].city}</p>
    <p>{stationData[moused].country}</p>
  </div> -->
</div>

<style>
  .flyover-wrap {
    position: absolute;
    inset: 0;
    overflow: hidden;
  }

  .img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    opacity: 1;
    /* filter: grayscale(100%);
    mix-blend-mode: screen; */
    transition: opacity 3000ms ease;
  }

  .img.visible {
    opacity: 1;
  }
</style>