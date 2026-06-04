<script>
  let { accent = '#B9292B', opacity = 1 } = $props();
</script>

<div
  class="accent-filter"
  style="--accent: {accent}; --opacity: {opacity};"
  aria-hidden="true"
></div>

<style>
  .accent-filter {
    position: fixed;
    inset: 0;
    background: var(--accent);
    opacity: var(--opacity);
    pointer-events: none;
    /* z-index: 9999; */
    z-index: 20;
    mix-blend-mode: var(--blend);
    transition: background 600ms ease, opacity 600ms ease;
  }
</style>