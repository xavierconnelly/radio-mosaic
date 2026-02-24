import { U as store_get, Z as attr_style, _ as stringify, a0 as ensure_array_like, V as attr, W as unsubscribe_stores, $ as bind_props } from "../../chunks/index2.js";
import { H as HOVER, s as stationData } from "../../chunks/radioData.js";
/* empty css               */
import { M as MediaQuery } from "../../chunks/mediaQuery.js";
import { s as spring, O as Obi, F as Flyover } from "../../chunks/flyover.js";
import { f as fallback } from "../../chunks/equality.js";
import { e as escape_html, i as invalid_default_snippet } from "../../chunks/context.js";
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
    $$renderer2.push(`<div id="box" class="svelte-9dvek7"><div class="scene svelte-9dvek7"><div class="cube svelte-9dvek7"${attr_style(`transform: translateZ(-${stringify(radius)}em) rotateY(${stringify(store_get($$store_subs ??= {}, "$x", x))}deg)`)}><!--[-->`);
    const each_array = ensure_array_like(items);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let item = each_array[i];
      $$renderer2.push(`<a${attr("href", `/stations/${stringify(item.slug)}`)} class="face svelte-9dvek7"${attr_style(`transform: rotateY(${stringify(i * angleStep)}deg) translateZ(${stringify(radius)}em); background-color: #${stringify(item.tint)}`)}><div class="facepaint svelte-9dvek7"${attr_style(`background-image: url(../images/small/${stringify(item.slug)}1x.webp)`)}><span id="name"${attr_style(`background-color: #${stringify(item.clockhand)}; color: #${stringify(item.tint)}`)} class="svelte-9dvek7">${escape_html(item.name)}</span></div></a>`);
    }
    $$renderer2.push(`<!--]--></div></div></div> <span class="station svelte-9dvek7"><h4>Kiosk Radio</h4> <p>Berlin</p> <p>Germany</p></span>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { items, onActiveChange });
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
            $$renderer3.push(`<div id="display-font" class="svelte-1uha8ag"><h2 class="medula-one-regular">Radio</h2> <h2 class="medula-one-regular">Mosaic</h2></div> `);
            Clock_HOME($$renderer3);
            $$renderer3.push(`<!----> <div id="intro" class="svelte-1uha8ag"><p class="svelte-1uha8ag">A collection of online community radio stations from all corners of the world.</p></div> `);
            Scroller_IMAGES_basic($$renderer3, { items: stationData, onActiveChange: updateActive });
            $$renderer3.push(`<!----> <div class="svelte-1uha8ag"><p>Though is a also community, a movement a way of bringing the past, future and present together at once. This site hopes to connect disparate but connected communities from across the globe.</p> <br/> <p>Music naturally brings people together. While we may live in fragmented corners of the globe, we are all one. is a community, a movement a way of bringing the past, future and present together at once. While we may live in fragmented corners of the globe, we are all one.</p> <p>.</p> <p>.</p> <p>.</p> <p>.</p> <p>.</p></div> <div class="small-print svelte-1uha8ag"><h4>Contact</h4> <p>email@email.com</p> <p>.</p> <p>This project is a labour of love, if you would like to help in any way please get in touch.</p> <p>.</p> <p>.</p></div> <div class="small-print svelte-1uha8ag"><b>Disclaimer</b> <p>If your station is listed and you prefer it wasn't, sorry, please contact me and I'll take it down</p> <p>.</p></div>`);
          } else {
            $$renderer3.push("<!--[!-->");
            Obi($$renderer3, {});
            $$renderer3.push(`<!----> `);
            Clock_HOME($$renderer3);
            $$renderer3.push(`<!----> <div class="image-wrap svelte-1uha8ag">`);
            if (stationData[moused]) {
              $$renderer3.push("<!--[-->");
              $$renderer3.push(`<div class="local svelte-1uha8ag"><p>${escape_html(stationData[moused].city)}</p> <p>${escape_html(stationData[moused].country)}</p></div> `);
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
