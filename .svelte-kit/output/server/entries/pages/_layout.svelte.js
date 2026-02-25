import { U as store_get, V as attr, W as unsubscribe_stores, X as slot } from "../../chunks/index2.js";
import { M as MediaQuery } from "../../chunks/mediaQuery.js";
import { u as updateIndexFromSlug, p as page, I as INDEX } from "../../chunks/store.js";
import { s as stationData } from "../../chunks/radioData.js";
import { i as invalid_default_snippet } from "../../chunks/context.js";
function Audio($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let audioEl;
    let volume = 1;
    if (store_get($$store_subs ??= {}, "$page", page).params.slug) {
      updateIndexFromSlug(store_get($$store_subs ??= {}, "$page", page).params.slug, stationData);
    }
    if (store_get($$store_subs ??= {}, "$INDEX", INDEX) !== null && audioEl) ;
    $$renderer2.push(`<audio></audio> <button class="player-btn svelte-ukhf1p">`);
    {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<svg class="icon svelte-ukhf1p" viewBox="0 0 24 24"><polygon points="6,4 20,12 6,20"></polygon></svg>`);
    }
    $$renderer2.push(`<!--]--></button> <input${attr("value", volume)} type="range" max="1" step="0.01" class="svelte-ukhf1p"/>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _layout($$renderer, $$props) {
  MediaQuery($$renderer, {
    query: "(min-width: 700px)",
    children: invalid_default_snippet,
    $$slots: {
      default: ($$renderer2, { matches }) => {
        if (matches) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<header class="svelte-12qhfyh"><a href="/"><h1 class="medula-one-regular svelte-12qhfyh">RADIO MOSAIC</h1></a></header>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]-->`);
      }
    }
  });
  $$renderer.push(`<!----> `);
  Audio($$renderer);
  $$renderer.push(`<!----> <!--[-->`);
  slot($$renderer, $$props, "default", {});
  $$renderer.push(`<!--]-->`);
}
export {
  _layout as default
};
