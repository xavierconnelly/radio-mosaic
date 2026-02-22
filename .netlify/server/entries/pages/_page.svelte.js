import { Z as attr_style, a0 as ensure_array_like, V as attr, $ as bind_props, _ as stringify, U as store_get, W as unsubscribe_stores } from "../../chunks/index2.js";
import { s as stationData, H as HOVER } from "../../chunks/radioData.js";
/* empty css               */
import { M as MediaQuery } from "../../chunks/mediaQuery.js";
import { f as fallback } from "../../chunks/equality.js";
import { e as escape_html, i as invalid_default_snippet } from "../../chunks/context.js";
import { F as Flyover, O as Obi } from "../../chunks/flyover.js";
function Scroller_IMAGES($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let count, angleStep, radius, angle, activeIndex;
    let items = fallback($$props["items"], () => [], true);
    let onActiveChange = $$props["onActiveChange"];
    const faceWidth = 3;
    let x = 0;
    count = items.length;
    angleStep = 360 / count;
    radius = faceWidth / 2 / Math.tan(Math.PI / count);
    angle = (x % 360 + 360) % 360;
    activeIndex = Math.floor((angle + angleStep / 2) / angleStep) % count;
    items[activeIndex];
    onActiveChange?.(activeIndex);
    $$renderer2.push(`<div id="filler" class="svelte-1qzm4qi"></div> <div data-sveltekit-noscroll="" id="box" class="svelte-1qzm4qi"><div data-sveltekit-noscroll="" class="scene svelte-1qzm4qi"><div data-sveltekit-noscroll="" class="cube svelte-1qzm4qi"${attr_style(`transform: translateZ(-${stringify(radius)}em) rotateY(${stringify(x)}deg)`)}><!--[-->`);
    const each_array = ensure_array_like(items);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let item = each_array[i];
      $$renderer2.push(`<div data-sveltekit-noscroll="" class="face svelte-1qzm4qi"${attr_style(`transform: rotateY(${stringify(i * angleStep)}deg) translateZ(${stringify(radius)}em)`)}><img${attr("src", item.src)}/> ${escape_html(item.name)}</div>`);
    }
    $$renderer2.push(`<!--]--></div></div></div>`);
    bind_props($$props, { items, onActiveChange });
  });
}
function ClockBigHand($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let i = $$props["i"];
    let name = $$props["name"];
    let slug = $$props["slug"];
    let utc = $$props["utc"];
    let tint = $$props["tint"];
    let clockhand = $$props["clockhand"];
    let radius = 360 / stationData.length;
    $$renderer2.push(`<a${attr("href", `./stations/${stringify(slug)}`)} class="hand svelte-k5wled"${attr_style(`transform: rotate(calc(${stringify(i)} * ${stringify(radius)}deg)) translateX(50%); color:#${stringify(clockhand)}`)}><span class="details svelte-k5wled"${attr_style(`background-color: #${stringify(tint)}`)}><span class="name svelte-k5wled">${escape_html(name)}</span> <span class="utc svelte-k5wled">${escape_html(utc)}</span></span></a>`);
    bind_props($$props, { i, name, slug, utc, tint, clockhand });
  });
}
function ClockBigger($$renderer) {
  let y = 0;
  $$renderer.push(`<div id="filler" class="svelte-cocz0"></div> <div id="house" class="svelte-cocz0"><div class="clock svelte-cocz0"${attr_style(`transform: translate(-50%, -50%) rotate(${stringify(y)}deg)`)}><!--[-->`);
  const each_array = ensure_array_like(stationData);
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let station = each_array[i];
    ClockBigHand($$renderer, {
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
            Scroller_IMAGES($$renderer3, { items: stationData, onActiveChange: updateActive });
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]-->`);
        }
      }
    });
    $$renderer2.push(`<!----> `);
    MediaQuery($$renderer2, {
      query: "(min-width: 700px)",
      children: invalid_default_snippet,
      $$slots: {
        default: ($$renderer3, { matches }) => {
          if (matches) {
            $$renderer3.push("<!--[-->");
            Obi($$renderer3, {});
            $$renderer3.push(`<!----> `);
            ClockBigger($$renderer3);
            $$renderer3.push(`<!---->`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]-->`);
        }
      }
    });
    $$renderer2.push(`<!----> <div class="image-wrap svelte-1uha8ag">`);
    if (stationData[moused]) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="local svelte-1uha8ag"><p>${escape_html(stationData[moused].city)}</p> <p>${escape_html(stationData[moused].country)}</p></div> `);
      Flyover($$renderer2, { slug: stationData[moused].slug });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
