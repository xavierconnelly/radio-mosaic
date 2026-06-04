<script>
    let { url, name, city, station, about } = $props();
</script>


<a class="show" href="{url}">
    <span>{city}</span>
    <h4>{name}</h4>
    <span>{station}</span>

</a>

<!-- need to move this  -->

<div id="caption">
    {about}
</div>



<style>
.show {
    color: var(--yang);
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
#caption {
    /* position: relative; */
    font-size: 11px;
    line-height: 14px;
    padding: 10px 10px;
    /* height: 200px; */
}
</style>
