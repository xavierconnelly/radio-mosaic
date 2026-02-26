import { V as attr, _ as stringify, $ as bind_props, U as store_get, Z as attr_style, a0 as ensure_array_like, W as unsubscribe_stores, Y as attr_class } from "../../chunks/index2.js";
import { H as HOVER, s as stationData, I as INDEX } from "../../chunks/radioData.js";
/* empty css               */
import { M as MediaQuery } from "../../chunks/mediaQuery.js";
import { s as spring, O as Obi, F as Flyover } from "../../chunks/flyover.js";
import { f as fallback } from "../../chunks/equality.js";
import { e as escape_html, i as invalid_default_snippet } from "../../chunks/context.js";
function Hovered_HOME($$renderer, $$props) {
  let name = $$props["name"];
  let slug = $$props["slug"];
  let city = $$props["city"];
  let country = $$props["country"];
  $$renderer.push(`<a class="station svelte-9oqwnm" data-sveltekit-noscroll=""${attr("href", `/stations/${stringify(slug)}`)}><span>${escape_html(city)}</span> <h4>${escape_html(name)}</h4> <span>${escape_html(country)}<spanb></spanb></span></a>`);
  bind_props($$props, { name, slug, city, country });
}
function Scroller_IMAGES_basic($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let count, angleStep, radius, angle, activeIndex;
    let items = fallback($$props["items"], () => [], true);
    let onActiveChange = $$props["onActiveChange"];
    const faceWidth = 8;
    const x = spring(0, { stiffness: 0.03, damping: 0.7 });
    store_get($$store_subs ??= {}, "$HOVER", HOVER);
    count = items.length;
    angleStep = 360 / count;
    radius = faceWidth / 2 / Math.tan(Math.PI / count);
    angle = (store_get($$store_subs ??= {}, "$x", x) % 360 + 360) % 360;
    activeIndex = Math.floor((angle + angleStep / 2) / angleStep) % count;
    items[activeIndex];
    onActiveChange?.(activeIndex);
    Hovered_HOME($$renderer2, {
      name: stationData[(activeIndex + 0) % stationData.length].name,
      slug: stationData[(activeIndex + 0) % stationData.length].slug,
      city: stationData[(activeIndex + 0) % stationData.length].city,
      country: stationData[(activeIndex + 0) % stationData.length].country
    });
    $$renderer2.push(`<!----> <div id="box" class="svelte-9dvek7"><div class="scene svelte-9dvek7"><div class="cube svelte-9dvek7"${attr_style(`transform: translateZ(-${stringify(radius)}em) rotateY(-${stringify(store_get($$store_subs ??= {}, "$x", x))}deg)`)}><!--[-->`);
    const each_array = ensure_array_like(items);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let item = each_array[i];
      $$renderer2.push(`<a${attr("href", `/stations/${stringify(item.slug)}`)} class="face svelte-9dvek7"${attr_style(`transform: rotateY(${stringify(i * angleStep)}deg) translateZ(${stringify(radius)}em); background-color: #${stringify(item.tint)}`)}><div class="facepaint svelte-9dvek7"${attr_style(`background-image: url(../images/small/${stringify(item.slug)}1x.webp)`)}><span id="name"${attr_style(`background-color: #${stringify(item.clockhand)}; color: #${stringify(item.tint)}`)} class="svelte-9dvek7">${escape_html(item.name)}</span></div></a>`);
    }
    $$renderer2.push(`<!--]--></div></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { items, onActiveChange });
  });
}
function Grid($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let activeSlug, hoveredSlug;
    activeSlug = store_get($$store_subs ??= {}, "$INDEX", INDEX) !== null ? stationData[store_get($$store_subs ??= {}, "$INDEX", INDEX)]?.slug : null;
    hoveredSlug = store_get($$store_subs ??= {}, "$HOVER", HOVER);
    $$renderer2.push(`<div id="timezone-grid" class="svelte-xyo4pr"><div class="utc-label bounds svelte-xyo4pr" style="grid-column: 1; grid-row: 9">-8</div> <div class="utc-label bounds svelte-xyo4pr" style="grid-column: 2; grid-row: 9">-6</div> <div class="utc-label bounds svelte-xyo4pr" style="grid-column: 3; grid-row: 9">-5</div> <div class="utc-label bounds svelte-xyo4pr" style="grid-column: 4; grid-row: 9">-3</div> <div class="utc-label bounds svelte-xyo4pr" style="grid-column: 5; grid-row: 9">0</div> <div class="utc-label bounds svelte-xyo4pr" style="grid-column: 6; grid-row: 9">0</div> <div class="utc-label bounds svelte-xyo4pr" style="grid-column: 7; grid-row: 9">+1</div> <div class="utc-label bounds svelte-xyo4pr" style="grid-column: 8; grid-row: 9">+1</div> <div class="utc-label bounds svelte-xyo4pr" style="grid-column: 9; grid-row: 9">+1</div> <div class="utc-label bounds svelte-xyo4pr" style="grid-column: 10; grid-row: 9">+1</div> <div class="utc-label bounds svelte-xyo4pr" style="grid-column: 11; grid-row: 9">+1</div> <div class="utc-label bounds svelte-xyo4pr" style="grid-column: 12; grid-row: 9">+1</div> <div class="utc-label bounds svelte-xyo4pr" style="grid-column: 13; grid-row: 9">+2</div> <div class="utc-label bounds svelte-xyo4pr" style="grid-column: 14; grid-row: 9">+2</div> <div class="utc-label bounds svelte-xyo4pr" style="grid-column: 15; grid-row: 9">+3</div> <div class="utc-label bounds svelte-xyo4pr" style="grid-column: 16; grid-row: 9">+4</div> <div class="utc-label bounds svelte-xyo4pr" style="grid-column: 17; grid-row: 9">+7</div> <div class="utc-label bounds svelte-xyo4pr" style="grid-column: 18; grid-row: 9">+8</div> <div class="utc-label bounds svelte-xyo4pr" style="grid-column: 19; grid-row: 9">+9</div> <div class="utc-label bounds svelte-xyo4pr" style="grid-column: 20; grid-row: 9">+11</div> <!--[-->`);
    const each_array = ensure_array_like(stationData);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let station = each_array[$$index];
      $$renderer2.push(`<span class="bounds svelte-xyo4pr"${attr_style(`background-color: #${stringify(station.obi)}`)}><a${attr("href", `/stations/${stringify(station.slug)}`)}${attr_class("dot svelte-xyo4pr", void 0, {
        "active": station.slug === activeSlug,
        "hovered": station.slug === hoveredSlug
      })}${attr_style(`grid-column: ${stringify(station.col)}; grid-row: ${stringify(station.row)}; background: #${stringify(station.tint)}`)}${attr("title", station.name)}></a></span>`);
    }
    $$renderer2.push(`<!--]--></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Clock_HOME_hand($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let i = $$props["i"];
    let name = $$props["name"];
    let slug = $$props["slug"];
    let utc = $$props["utc"];
    let tint = $$props["tint"];
    let clockhand = $$props["clockhand"];
    let radius = 360 / stationData.length;
    $$renderer2.push(`<a${attr("href", `./stations/${stringify(slug)}`)} class="hand svelte-1qfhjnq"${attr_style(`transform: rotate(calc(${stringify(i)} * ${stringify(radius)}deg)) translateX(50%); color:#${stringify(clockhand)}`)}><span class="details svelte-1qfhjnq"${attr_style(`background-color: #${stringify(tint)}`)}><span class="name svelte-1qfhjnq">${escape_html(name)}</span> <span class="utc svelte-1qfhjnq">${escape_html(utc)}</span></span></a>`);
    bind_props($$props, { i, name, slug, utc, tint, clockhand });
  });
}
function Clock_HOME($$renderer) {
  let y = 0;
  $$renderer.push(`<div id="filler" class="svelte-acjqp8"></div> <div id="house" class="svelte-acjqp8"><div class="clock svelte-acjqp8"${attr_style(`transform: translate(-50%, -50%) rotate(${stringify(y)}deg)`)}><!--[-->`);
  const each_array = ensure_array_like(stationData);
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let station = each_array[i];
    Clock_HOME_hand($$renderer, {
      i,
      name: station.name,
      slug: station.slug,
      utc: station.utc,
      clockhand: station.clockhand,
      tint: station.tint
    });
  }
  $$renderer.push(`<!--]--></div></div>`);
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let moused;
    function updateActive(i) {
    }
    moused = store_get($$store_subs ??= {}, "$HOVER", HOVER);
    MediaQuery($$renderer2, {
      query: "(max-width: 700px)",
      children: invalid_default_snippet,
      $$slots: {
        default: ($$renderer3, { matches }) => {
          if (matches) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<div id="display-font" class="svelte-1uha8ag"><h1 class="medula-one-regular">Radio</h1> <h1 class="medula-one-regular">Mosaic</h1></div> `);
            Clock_HOME($$renderer3);
            $$renderer3.push(`<!----> <p id="tagline" class="svelte-1uha8ag">A collection of online community radio stations from all corners of the world.</p> `);
            Scroller_IMAGES_basic($$renderer3, { items: stationData, onActiveChange: updateActive });
            $$renderer3.push(`<!----> <p class="buffer svelte-1uha8ag">Though is a also community, a movement a way of bringing the past, future and present together at once. This site hopes to connect disparate but connected communities from across the globe.</p> <p class="svelte-1uha8ag">Music naturally brings people together. While we may live in fragmented corners of the globe, we are all one. is a community, a movement a way of bringing the past, future and present together at once. While we may live in fragmented corners of the globe, we are all one.</p> `);
            Grid($$renderer3);
            $$renderer3.push(`<!----> <div class="small-print svelte-1uha8ag"><h4 class="svelte-1uha8ag">Contact</h4> <p class="svelte-1uha8ag">email@email.com</p> <p class="svelte-1uha8ag">This project is a labour of love, if you would like to help in any way please get in touch.</p> <br class="svelte-1uha8ag"/> <b class="svelte-1uha8ag">Disclaimer</b> <p class="svelte-1uha8ag">If your station is listed and you prefer it wasn't, sorry, please contact me and I'll take it down</p></div>`);
          } else {
            $$renderer3.push("<!--[!-->");
            Obi($$renderer3, {});
            $$renderer3.push(`<!----> `);
            Clock_HOME($$renderer3);
            $$renderer3.push(`<!----> <div class="image-wrap svelte-1uha8ag">`);
            if (stationData[moused]) {
              $$renderer3.push("<!--[-->");
              $$renderer3.push(`<div class="local svelte-1uha8ag"><p class="svelte-1uha8ag">${escape_html(stationData[moused].city)}</p> <p class="svelte-1uha8ag">${escape_html(stationData[moused].country)}</p></div> `);
              Flyover($$renderer3, { slug: stationData[moused].slug });
              $$renderer3.push(`<!---->`);
            } else {
              $$renderer3.push("<!--[!-->");
            }
            $$renderer3.push(`<!--]--></div>`);
          }
          $$renderer3.push(`<!--]-->`);
        }
      }
    });
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
