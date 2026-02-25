import { U as store_get, V as attr, Y as attr_class, Z as attr_style, _ as stringify, W as unsubscribe_stores, $ as bind_props, a0 as ensure_array_like, X as slot } from "../../../chunks/index2.js";
import { p as page, u as updateIndexFromSlug, I as INDEX } from "../../../chunks/store.js";
import { s as stationData } from "../../../chunks/radioData.js";
import { e as escape_html, i as invalid_default_snippet } from "../../../chunks/context.js";
import { M as MediaQuery } from "../../../chunks/mediaQuery.js";
/* empty css                  */
function Clock_STATIONS_hand($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let i = $$props["i"];
    let name = $$props["name"];
    let slug = $$props["slug"];
    let utc = $$props["utc"];
    let tint = $$props["tint"];
    let radius = 360 / stationData.length;
    if (store_get($$store_subs ??= {}, "$page", page).params.slug) {
      updateIndexFromSlug(store_get($$store_subs ??= {}, "$page", page).params.slug, stationData);
    }
    $$renderer2.push(`<a data-sveltekit-noscroll=""${attr("href", `./${stringify(
      // Props passed from parent each block
      // export let clockhand;
      // Rotation calculation
      slug
    )}`)}${attr_class("hand svelte-1n9jyum", void 0, {
      "selected": i === store_get($$store_subs ??= {}, "$INDEX", INDEX)
    })}${attr_style(`transform: rotate(calc(${stringify(i)} * ${stringify(radius)}deg)) translateX(50%);`)}><span class="station-name svelte-1n9jyum">${escape_html(name)}</span> <span class="utc svelte-1n9jyum"${attr_style(`color: ${stringify(tint)};`)}>${escape_html(utc)}</span></a>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { i, name, slug, utc, tint });
  });
}
function Clock_STATIONS($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let y = 0;
    if (store_get($$store_subs ??= {}, "$page", page).params.slug) {
      updateIndexFromSlug(store_get($$store_subs ??= {}, "$page", page).params.slug, stationData);
    }
    $$renderer2.push(`<div id="filler" class="svelte-1dk0g4w"></div> <div id="house" class="svelte-1dk0g4w"><div data-sveltekit-noscroll="" class="clock svelte-1dk0g4w"${attr_style(` color: #${stringify(stationData[store_get($$store_subs ??= {}, "$INDEX", INDEX)].clockhand)}; background: #${stringify(stationData[store_get($$store_subs ??= {}, "$INDEX", INDEX)].tint)}; transform: translate(-50%, -50%) rotate(${stringify(y)}deg)`)}><!--[-->`);
    const each_array = ensure_array_like(stationData);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let station = each_array[i];
      Clock_STATIONS_hand($$renderer2, {
        i,
        name: station.name,
        slug: station.slug,
        utc: station.utc,
        clockhand: station.clockhand,
        tint: station.tint
      });
    }
    $$renderer2.push(`<!--]--></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    if (store_get($$store_subs ??= {}, "$page", page).params.slug) {
      updateIndexFromSlug(store_get($$store_subs ??= {}, "$page", page).params.slug, stationData);
    }
    $$renderer2.push(`<!--[-->`);
    slot($$renderer2, $$props, "default", {});
    $$renderer2.push(`<!--]--> `);
    MediaQuery($$renderer2, {
      query: "(min-width: 700px)",
      children: invalid_default_snippet,
      $$slots: {
        default: ($$renderer3, { matches }) => {
          if (matches) {
            $$renderer3.push("<!--[-->");
            Clock_STATIONS($$renderer3);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--> <header><a href="/"><h1 class="medula-one-regular">RADIO MOSAIC</h1></a></header>`);
        }
      }
    });
    $$renderer2.push(`<!----> <div class="shell highlight svelte-1hwxwyt"${attr_style(`background:#${stringify(stationData[store_get($$store_subs ??= {}, "$INDEX", INDEX)].tint)}`)}></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _layout as default
};
