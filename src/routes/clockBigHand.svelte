<script>
    import { HOVER, stationData } from '/src/routes/stations/radioData.js';

	// Props passed from parent each block
	export let i;
	export let name;
	export let slug;
	export let utc;
	export let fill;
	export let highlight;

	// Rotation calculation
	let radius = 360 / stationData.length;

    // hovering things
	let hovered = false;

	const mouseOver = () => {
		hovered = true;
		HOVER.set(i);
	}
	
	const mouseOut = () => {
		hovered = true;
		HOVER[i] = INDEX;
	}
</script>

<a  href="./stations/{slug}"
	class="hand"
    on:mouseenter={mouseOver}
	style="transform: rotate(calc({i} * {radius}deg)) translateX(50%);  color:#{highlight}">
	<span   class="details" 
    	    style="background-color: #{fill}">
		<span class="name">{name}</span>
		<span class="utc">{utc}</span>
	</span>
</a>

<style>
.hand {
    /* the top must minus half the height ~ maybe better as 6 + 3 */
    height: 28px;
    top: calc(50% - 14px); 
    border-bottom-left-radius: 28px;
    border-radius: 3px;
    /* the left must minus half the width  */
    width: 50%;
    left: 25%;
    position: absolute;
    text-align: right;
    cursor: pointer;
    transform-origin: center;
    border: none;
    border-top: 0.5px solid rgba(255, 255, 255, 0.579);
    opacity: 60%;
    transition: 5s;
}

.hand:hover {
    opacity: 100%;
    transition: 0s;
}

.details .name {
    display: block;
    padding-right: 10px;
    transition: 1s;
    font-size: 9px;
    line-height: 21px;
    will-change: transform;
}

.details {
    background-color: none;
    border-radius: 3px;
    border-top-left-radius: 28px;
    border-bottom-left-radius: 28px;
    transition: 10s;
    display: block;
    filter: grayscale(1);
    mix-blend-mode: screen;
    opacity: .8;
}

.hand:hover .details {
    transition: 0s;
    filter: grayscale(0);
    mix-blend-mode: unset;
    opacity: 1;
}

.hand:hover .name  {
	transition: 0s;
    font-size: 14px;
    line-height: 28px;
    font-weight: bold;
}

.details .utc {
    margin: 0;
    color:  #F6F3F0;
    position: absolute;
    top: 50%;
    font-size: 10px;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 30px;
    height: 100%;
    z-index: 1;
}

@media (max-width: 700px) {
    .hand {
        height: 14px;
        top: calc(50% - 7px); 
        border-bottom-left-radius: 14px;
    }
    .details .name {
        font-size: 9px;
        line-height: 14px;
    }
    .details {
        border-top-left-radius: 14px;
        border-bottom-left-radius: 14px;
    }
}
</style>