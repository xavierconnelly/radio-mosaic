<script>
    let { name, slug, city, country, tint } = $props();
</script>


<a class="station" data-sveltekit-noscroll href="/stations/{slug}" style="background-color: #{tint}">
    <span>{city}</span>
    <h4>{name}</h4>
    <span>{country}</span>
</a>


<style>
.station {
    font-size: 11px;
    text-transform: uppercase;
    height: 28px;
    width: 100%;
    padding: 0 8px;
    margin: auto;
    padding: 10px 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    /* border-top: 1px solid; */
    /* background-color: var(--yin);
    color: var(--yang); */
    z-index: 99;
}
</style>