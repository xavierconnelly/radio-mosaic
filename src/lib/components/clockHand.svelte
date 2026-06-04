<script>
	import { ui, stationData } 				from '$lib/data/stations.svelte.js';

    let { i, name, slug, utc, variant, tint } = $props();

    // Rotation calculation
    let radius = 360 / stationData.length;

    const mouseOver = () => { ui.hover = i; }
</script>

<a  href="/stations/{slug}"
    class="hand hand-{variant}"
    onmouseenter={mouseOver}
    style="transform: rotate(calc({i} * {radius}deg)) translateX(50%); background: #{tint}">
    <span class="details">
        <span class="name">{name}</span>
        <span class="utc">{utc}</span>
    </span>
</a>

<style>
.hand {
    /* the left must minus half the width  */
    width: 50%;
    left: 25%;
    position: absolute;
    text-align: right;
    cursor: pointer;
    transform-origin: center;
    border: none;
    opacity: 50%;
    transition: 5s;
}

.hand-hero {
    /* the top must minus half the height ~ maybe better as 6 + 3 */
    height: 32px;
    top: calc(50% - 16px); 
    border-bottom-left-radius: 32px;
    /* border-radius: 3px; */
    color: var(--yang);
    border-top: 0.5px solid var(--yin);
}

.hand-corner {
    /* the top must minus half the height ~ maybe better as 6 + 3 */
    height: 12px;
    top: calc(50% - 6px); 
    border-bottom-left-radius: 0px;
    /* border-radius: 3px; */
    color: var(--bg);
    border-top: 0.5px solid var(--fg);
}

.details {
    border-radius: 3px;
    border-top-left-radius: 28px;
    border-bottom-left-radius: 28px;
    transition: 10s;
    display: block;
    filter: grayscale(1);
    mix-blend-mode: screen;
    opacity: .8;
}

.details .name {
    display: block;
    transition: 1s;
    will-change: transform;
}

.hand-hero .details .name {
    padding-right: 10px;
    color: var(--yin);
    font-size: 9px;
    line-height: 21px;
}

.hand-corner .details .name {
    padding-right: 2px;
    color: var(--fg);
    font-size: 5px;
    line-height: 10px;
}

/* Orbit dot — sits just outside the clock rim at the hovered hand's angle */
.hand::after {
    content: '';
    position: absolute;
    right: -16px;
    top: 50%;
    transform: translateY(-50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--fg);
    opacity: 0;
    /* transition: opacity .1s ease; */
    pointer-events: none;
}

.hand:hover::after {
    opacity: 0.5;
    transition: opacity 0s;
}

@media (max-width: 800px) {
    .hand::after { display: none; }
}

.hand:hover {
    opacity: 100%;
    transition: 0s;
}

.hand:hover .details {
    transition: 0s;
    filter: grayscale(0);
    mix-blend-mode: unset;
    opacity: 1;
}

.hand-hero:hover .name  {
	transition: 0s;
    font-size: 14px;
    line-height: 28px;
    font-weight: bold;
}

.hand-corner:hover .name  {
	transition: 0s;
    font-size: 8px;
    line-height: 12px;
    font-weight: bold;
}

.details .utc {
    margin: 0;
    color:  var(--yin);
    position: absolute;
    top: 50%;
    font-size: 10px;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 30px;
    height: 100%;
    z-index: 1;
}

.hand-corner .details .utc {
    display: none;
}

@media (max-width: 800px) {
    .hand {
        height: 14px;
        top: calc(50% - 7px); 
        border-bottom-left-radius: 14px;
    }
    .details .name {
        font-size: 5px;
        line-height: 14px;
    }
    .hand-corner .details .name {
       color:  var(--yang);
    }    

    .hand-corner {
        border-top: 0.5px solid var(--bg);
    }
    .hand-hero .details .name {
        padding-right: 0px;
        font-size: 5px;
        line-height: 11px;
    }
    .details {
        border-top-left-radius: 14px;
        border-bottom-left-radius: 14px;
    }
    .details .utc {
        color:  var(--yang);
    }
}
</style>