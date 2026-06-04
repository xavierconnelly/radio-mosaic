<script>
    import { onMount }              from 'svelte';
    import { gsap }                 from 'gsap';
    import Clockhand                from './clockHand.svelte';
    import { ui, stationData }      from '$lib/data/stations.svelte.js';
    import { mediaQuery }           from '$lib/utils/mediaQuery.svelte.js';

    const mobile = mediaQuery('(max-width: 700px)');

    let hovered = $derived(stationData[ui.hover]);

    let { variant = 'hero' } = $props();
    let houseEl;
    let clockEl;
    let rotation = $state(0);
    let rotateTo;

    const handSpacing = 360 / stationData.length;

    // Find which hand sits closest to 6 o'clock (90° in the 3-o'clock-origin system).
    // Hands start horizontal-right (0°) and rotate clockwise, so 90° = pointing down.
    function stationAt6(rot) {
        let best = 0;
        let bestDiff = Infinity;
        for (let i = 0; i < stationData.length; i++) {
            const angle = ((i * handSpacing + rot) % 360 + 360) % 360;
            const diff = Math.min(Math.abs(angle - 90), 360 - Math.abs(angle - 90));
            if (diff < bestDiff) { bestDiff = diff; best = i; }
        }
        return best;
    }

    let bottomIndex   = $derived(stationAt6(rotation));
    let mobileStation = $derived(stationData[bottomIndex]);

    // Ticking clock for local-time display
    let now = $state(new Date());

    function localTime(timezone) {
        if (!timezone) return '';
        const parts = new Intl.DateTimeFormat('en-US', {
            hour:     'numeric',
            minute:   '2-digit',
            timeZone: timezone,
            hour12:   true
        }).formatToParts(now);
        const h  = parts.find(p => p.type === 'hour').value;
        const m  = parts.find(p => p.type === 'minute').value;
        const ap = parts.find(p => p.type === 'dayPeriod').value.toUpperCase();
        return `${h}:${m} ${ap}`;
    }

    let hoveredTime = $derived(localTime(hovered?.timezone));

    onMount(() => {
        gsap.set(clockEl, { xPercent: -50, yPercent: -50 });

        rotateTo = gsap.quickTo(clockEl, 'rotation', {
            duration: 0.5,
            ease: 'power2.out'
        });

        function onWheel(e) {
            e.preventDefault();
            const rect = clockEl.getBoundingClientRect();
            const centreX = rect.left + rect.width / 2;
            const side = e.clientX < centreX ? 1 : -1;
            rotation += e.deltaY * 0.3 * side;
            rotateTo(rotation);
        }

        // Touch: horizontal drag spins the clock
        let touchStartX = 0;
        let rotationAtTouchStart = 0;

        function onTouchStart(e) {
            touchStartX = e.touches[0].clientX;
            rotationAtTouchStart = rotation;
        }

        function onTouchMove(e) {
            e.preventDefault();
            const dx = e.touches[0].clientX - touchStartX;
            rotation = rotationAtTouchStart + dx * 0.5;
            rotateTo(rotation);
        }

        houseEl.addEventListener('wheel',      onWheel,      { passive: false });
        houseEl.addEventListener('touchstart', onTouchStart, { passive: true  });
        houseEl.addEventListener('touchmove',  onTouchMove,  { passive: false });

        const tick = setInterval(() => { now = new Date(); }, 1000);

        return () => {
            houseEl.removeEventListener('wheel',      onWheel);
            houseEl.removeEventListener('touchstart', onTouchStart);
            houseEl.removeEventListener('touchmove',  onTouchMove);
            clearInterval(tick);
        };
    });
</script>

<div id="house" class="house-{variant}">
    <div class="alessi" bind:this={houseEl}>
        <div bind:this={clockEl} class="clock clock-{variant}">
            {#each stationData as station, i}
                <Clockhand  
                    {variant}
                    {i}
                    name={station.name}
                    slug={station.slug}
                    utc={station.utc}
                    tint={station.tint}
                />
            {/each}
        </div>
    </div>

<!-- Mobile: mark then data sit below the clock in natural flow -->
{#if mobile.matches && mobileStation}
    <div class="mobile-station">
        <div class="six-mark"></div>
        <div class="stationHoverDetails">
            <span class="city">{mobileStation.city}</span>
            <span class="name">{mobileStation.name}</span>
            <span class="country">{mobileStation.country}</span>
        </div>
    </div>
{:else}
    {#if hovered}
        <div class="stationHoverDetails">
            <span class="city">{hovered.city} <span class="time">{hoveredTime}</span></span>
            <span class="name">{hovered.name}</span>
            <span class="country">{hovered.country}</span>
        </div>
    {/if}
{/if}
    <div class="tbc">
        A Radio Mosaic é uma comunidade, um movimento, uma forma de reunir o passado, o futuro e o presente ao mesmo tempo. Embora vivamos em cantos fragmentados do globo, somos todos um só. É uma comunidade, um movimento, uma forma de reunir o passado, o futuro e o presente ao mesmo tempo. Embora vivamos em cantos fragmentados do globo, somos todos um só.
    </div>
</div>

<style>
    #house {
        position: fixed;
        top: 32px;
        right: 0;
        display: flex;
        flex-direction: column;
        z-index: 10;
        /* padding: 20px; */
        transition: 
            width 0.8s cubic-bezier(0.4, 0, 0.2, 1),
            height 0.8s cubic-bezier(0.4, 0, 0.2, 1),
            right 0.8s cubic-bezier(0.4, 0, 0.2, 1),
            background-color 0.8s ease;
    }

    .house-hero {
        height: calc(100vh - 32px);
        width: calc(100vw - 600px);
        background-color: var(--yang);
    }

    .house-corner {
        height: calc(100vh - 32px);
        width: 400px;
        background-color: var(--bg);
        border-left: 1px solid var(--fg);
    }

    .alessi {
        width: 100%;
    }

    .house-corner .alessi {
        min-height: 400px;
        width: 400px;
        display: flex;
        align-items: center;
        background-color: var(--bg);
        position: relative;
    }

    .clock {
        /* border-radius: 50%; */
        transition: 
            height 0.8s cubic-bezier(0.4, 0, 0.2, 1),
            width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        will-change: transform;
    }

    .clock-hero {
        position: absolute;
        top: 50%;
        left: 50%;
        height: 80vmin;
        width: 80vmin;
    }

    .clock-corner { 
        position: relative;
        top: 45%;
        left: 50%;
        height: 90%;
        width: 90%;
    }

    .house-hero .tbc {
        height: 0;
        background-color: var(--yang);
    }

    .house-corner .tbc {
        height: calc(100vh - 400px);
        border-top: 1px solid;
        background-color: var(--fg);
        padding: 10px;
    }

    .stationHoverDetails {
        display: flex;
        flex-direction: row;
        font-size: 10px;
        justify-content: space-between;
        /* position: absolute; */
        bottom: 10px;
        width: 100%;
        color: var(--fg);
        padding: 0px 10px 15px 10px;
    }

    .stationHoverDetails .name {
        font-weight: 600;
        width: 10%;
        flex-grow: 1;
        text-align: center;
    }

    .stationHoverDetails .time {
        opacity: 0.6;
    }

    .stationHoverDetails .city {
        width: 10%;
        flex-grow: 1;
        padding-left: 10px;
    }

    .stationHoverDetails .country {
        width: 10%;
        flex-grow: 1;
        padding-right: 10px;
        text-align: right;
    }


    @media (min-width: 900px) and (max-width: 1280px) {
        #house { width: calc(100vw - 300px); }
        .clock {
            height: calc(100vw - 600px);
            width: calc(100vw - 600px);
        }
    }

    @media (min-width: 700px) and (max-width: 900px) {
        #house { width: calc(100vw - 300px); }
        .clock {
            height: calc(100vw - 400px);
            width: calc(100vw - 400px);
        }
    }

    @media (max-width: 700px) {
        #house {
            width: 100vw;
            top: 0;
            /* height: 100vw; */
            position: relative;
            display: flex;
            align-items: center;
            border-left: unset;
            /* top: -40px; */
            /* background-color: unset; */
        }
        .house-corner {
            height: auto;
        }
        .house-corner .alessi {
            min-height: calc(100vw - 40px);
            width: calc(100vw - 40px);
            min-height: 70vw;
            width: 70vw;
            /* background-color: unset; */
        }
        .clock-corner {
            top: 50%;
        }
        .tbc {
            display: none;
        }
        .clock {
            height: 95%;
            width: 95%;
        }

    }

    @media (max-width: 700px) {
        .mobile-station {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            padding: 4px 0 16px;
            width: 100%;
            color: var(--fg);
            font-size: 10px;
        }

        /* Subtle tick at 6 o'clock — sits between clock edge and station label */
        .six-mark {
            width: 10px;
            height: 10px;
            background: currentColor;
            opacity: .8;
            border-radius: 10px;
        }
    }
</style>