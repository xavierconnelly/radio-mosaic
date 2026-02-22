import { V as attr, Z as attr_style, _ as stringify, $ as bind_props, a0 as ensure_array_like, U as store_get, W as unsubscribe_stores } from "../../../../chunks/index2.js";
import { p as page, u as updateIndexFromSlug, I as INDEX } from "../../../../chunks/store.js";
import { s as stationData, H as HOVER } from "../../../../chunks/radioData.js";
import { F as Flyover, O as Obi } from "../../../../chunks/flyover.js";
import { M as MediaQuery } from "../../../../chunks/mediaQuery.js";
import { e as escape_html, i as invalid_default_snippet } from "../../../../chunks/context.js";
import { f as fallback } from "../../../../chunks/equality.js";
import "clsx";
function Painting($$renderer, $$props) {
  let name = $$props["name"];
  let slug = $$props["slug"];
  let tint = $$props["tint"];
  let clockhand = $$props["clockhand"];
  $$renderer.push(`<div id="glimpse" class="svelte-txub1z"><img${attr("src", `../images/flyover/${stringify(
    // export let city;
    // export let country;
    slug
  )}.webp`)} alt="" class="svelte-txub1z"/></div> <a class="station svelte-txub1z" data-sveltekit-noscroll=""${attr("href", `/stations/${stringify(slug)}`)}${attr_style(`background: #${stringify(tint)}; color: #${stringify(clockhand)}`)}><h4 class="svelte-txub1z">${escape_html(name)}</h4></a>`);
  bind_props($$props, { name, slug, tint, clockhand });
}
function Scroller($$renderer, $$props) {
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
    $$renderer2.push(`<div id="filler" class="svelte-uq7f89"></div> <div data-sveltekit-noscroll="" id="box" class="svelte-uq7f89"><div data-sveltekit-noscroll="" class="scene svelte-uq7f89"><div data-sveltekit-noscroll="" class="cube svelte-uq7f89"${attr_style(`transform: translateZ(-${stringify(radius)}em) rotateY(${stringify(x)}deg)`)}><!--[-->`);
    const each_array = ensure_array_like(items);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let item = each_array[i];
      $$renderer2.push(`<div data-sveltekit-noscroll="" class="face svelte-uq7f89"${attr_style(`transform: rotateY(${stringify(i * angleStep)}deg) translateZ(${stringify(radius)}em)`)}>${escape_html(item.name)}</div>`);
    }
    $$renderer2.push(`<!--]--></div></div></div>`);
    bind_props($$props, { items, onActiveChange });
  });
}
function Time($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let timezone = $$props["timezone"];
    let formatted = "";
    $$renderer2.push(`<span>${escape_html(formatted)}</span>`);
    bind_props($$props, { timezone });
  });
}
function Plus($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let nextIndex;
    stationData.length - 1;
    if (store_get($$store_subs ??= {}, "$page", page).params.slug) {
      updateIndexFromSlug(store_get($$store_subs ??= {}, "$page", page).params.slug, stationData);
    }
    nextIndex = store_get($$store_subs ??= {}, "$INDEX", INDEX) !== null ? (store_get($$store_subs ??= {}, "$INDEX", INDEX) + 1) % stationData.length : null;
    console.log("$INDEX", store_get($$store_subs ??= {}, "$INDEX", INDEX), "nextIndex", nextIndex);
    console.log(store_get($$store_subs ??= {}, "$page", page).params.slug);
    if (store_get($$store_subs ??= {}, "$INDEX", INDEX) !== null) {
      $$renderer2.push("<!--[-->");
      MediaQuery($$renderer2, {
        query: "(min-width: 700px)",
        children: invalid_default_snippet,
        $$slots: {
          default: ($$renderer3, { matches }) => {
            if (matches) {
              $$renderer3.push("<!--[-->");
              $$renderer3.push(`<a data-sveltekit-noscroll=""${attr("href", `/stations/${stringify(stationData[nextIndex].slug)}`)} class="scanning plus svelte-13614oj"${attr_style(`background: #${stringify(stationData[store_get($$store_subs ??= {}, "$INDEX", INDEX)].tint)}; color: #${stringify(stationData[store_get($$store_subs ??= {}, "$INDEX", INDEX)].clockhand)}`)}></a> ${escape_html(stationData[nextIndex].name)}`);
            } else {
              $$renderer3.push("<!--[!-->");
              $$renderer3.push(`<a data-sveltekit-noscroll=""${attr("href", `/stations/${stringify(stationData[nextIndex].slug)}`)} class="scanning plus svelte-13614oj"${attr_style(`color: #${stringify(stationData[store_get($$store_subs ??= {}, "$INDEX", INDEX)].clockhand)}`)}><svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 26 21" fill="none"><path d="M17.3366 19.5754C16.2925 20.6111 14.6085 20.6111 13.5643 19.5754C12.5081 18.5277 12.5081 16.82 13.5643 15.7723L14.4997 14.8445L16.5278 13.1071C16.5668 13.0737 16.5835 13.0212 16.571 12.9714C16.5552 12.909 16.4976 12.8663 16.4332 12.8695L12.7407 13.0526L2.87648 13.0526C1.28784 13.0526 -1.81386e-06 11.7648 -5.1201e-07 10.1761C7.89836e-07 8.58748 1.28785 7.29964 2.87649 7.29964L12.7407 7.29964L16.4332 7.48277C16.4976 7.48597 16.5552 7.4433 16.571 7.38083C16.5835 7.33109 16.5668 7.27854 16.5278 7.24517L14.4997 5.50773L13.5643 4.57994C12.5081 3.53226 12.5081 1.82455 13.5643 0.77687C14.6085 -0.258849 16.2925 -0.258849 17.3366 0.776872L24.6652 8.04622C25.8483 9.21973 25.8483 11.1325 24.6652 12.306L17.3366 19.5754Z" fill="#372D27"></path></svg></a>`);
            }
            $$renderer3.push(`<!--]-->`);
          }
        }
      });
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Minus($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let prevIndex;
    const lastStation = stationData.length - 1;
    if (store_get($$store_subs ??= {}, "$page", page).params.slug) {
      updateIndexFromSlug(store_get($$store_subs ??= {}, "$page", page).params.slug, stationData);
    }
    prevIndex = store_get($$store_subs ??= {}, "$INDEX", INDEX) === 0 ? lastStation : store_get($$store_subs ??= {}, "$INDEX", INDEX) - 1;
    if (store_get($$store_subs ??= {}, "$INDEX", INDEX) !== null) {
      $$renderer2.push("<!--[-->");
      MediaQuery($$renderer2, {
        query: "(min-width: 700px)",
        children: invalid_default_snippet,
        $$slots: {
          default: ($$renderer3, { matches }) => {
            if (matches) {
              $$renderer3.push("<!--[-->");
              $$renderer3.push(`<a data-sveltekit-noscroll=""${attr("href", `/stations/${stringify(stationData[prevIndex].slug)}`)} class="scanning minus svelte-1rud2pb"${attr_style(`background: #${stringify(stationData[store_get($$store_subs ??= {}, "$INDEX", INDEX)].tint)}; color: #${stringify(stationData[store_get($$store_subs ??= {}, "$INDEX", INDEX)].clockhand)}`)}>${escape_html(stationData[prevIndex].name)}</a>`);
            } else {
              $$renderer3.push("<!--[!-->");
              $$renderer3.push(`<a data-sveltekit-noscroll=""${attr("href", `/stations/${stringify(stationData[prevIndex].slug)}`)} class="scanning minus svelte-1rud2pb"${attr_style(`color: #${stringify(stationData[store_get($$store_subs ??= {}, "$INDEX", INDEX)].clockhand)}`)}><svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 26 21" fill="none"><path d="M8.21611 0.776668C9.26028 -0.259052 10.9443 -0.259052 11.9884 0.776669C13.0446 1.82435 13.0446 3.53206 11.9884 4.57974L11.0531 5.50753L9.0249 7.24497C8.98594 7.27834 8.96924 7.33089 8.98177 7.38063C8.99752 7.4431 9.05517 7.48577 9.11951 7.48257L12.812 7.29944L22.6763 7.29944C24.2649 7.29944 25.5527 8.58729 25.5527 10.1759C25.5527 11.7646 24.2649 13.0524 22.6762 13.0524L12.812 13.0524L9.11951 12.8693C9.05517 12.8661 8.99752 12.9088 8.98177 12.9712C8.96924 13.021 8.98594 13.0735 9.02489 13.1069L11.0531 14.8443L11.9884 15.7721C13.0446 16.8198 13.0446 18.5275 11.9884 19.5752C10.9443 20.6109 9.26027 20.6109 8.21611 19.5752L0.887509 12.3058C-0.295569 11.1323 -0.295568 9.21952 0.88751 8.04601L8.21611 0.776668Z" fill="#372D27"></path></svg></a>`);
            }
            $$renderer3.push(`<!--]-->`);
          }
        }
      });
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Fab($$renderer) {
  $$renderer.push(`<button id="banana" title="controls" class="svelte-156upb8"><svg xmlns="http://www.w3.org/2000/svg" width="56" height="47" viewBox="0 0 56 47" fill="none"><rect x="6.36401" y="1.5" width="30" height="30" rx="3" stroke="black" stroke-width="3"></rect><rect x="16.364" y="12.5" width="30" height="30" rx="3" fill="white"></rect><rect x="19.364" y="15.5" width="30" height="30" rx="3" fill="white" stroke="black" stroke-width="3"></rect><path d="M47.6569 12.7071C48.0474 13.0976 48.6806 13.0976 49.0711 12.7071L55.4351 6.34315C55.8256 5.95262 55.8256 5.31946 55.4351 4.92893C55.0446 4.53841 54.4114 4.53841 54.0209 4.92893L48.364 10.5858L42.7072 4.92893C42.3166 4.53841 41.6835 4.53841 41.2929 4.92893C40.9024 5.31946 40.9024 5.95262 41.2929 6.34315L47.6569 12.7071ZM39.364 1V2H43.364V1V0H39.364V1ZM48.364 6H47.364V12H48.364H49.364V6H48.364ZM43.364 1V2C45.5732 2 47.364 3.79086 47.364 6H48.364H49.364C49.364 2.68629 46.6777 0 43.364 0V1Z" fill="black"></path><path d="M8.07112 33.7929C7.6806 33.4024 7.04743 33.4024 6.65691 33.7929L0.292946 40.1569C-0.0975776 40.5474 -0.0975777 41.1805 0.292946 41.5711C0.68347 41.9616 1.31664 41.9616 1.70716 41.5711L7.36401 35.9142L13.0209 41.5711C13.4114 41.9616 14.0446 41.9616 14.4351 41.5711C14.8256 41.1805 14.8256 40.5474 14.4351 40.1569L8.07112 33.7929ZM16.364 45.5L16.364 44.5L12.364 44.5L12.364 45.5L12.364 46.5L16.364 46.5L16.364 45.5ZM7.36401 40.5L8.36401 40.5L8.36401 34.5L7.36401 34.5L6.36401 34.5L6.36401 40.5L7.36401 40.5ZM12.364 45.5L12.364 44.5C10.1549 44.5 8.36401 42.7091 8.36401 40.5L7.36401 40.5L6.36401 40.5C6.36401 43.8137 9.05031 46.5 12.364 46.5L12.364 45.5Z" fill="black"></path><path d="M30.1421 23.2217L40.864 30.9998L30.1421 38.778L30.1421 23.2217Z" fill="black"></path></svg></button>`);
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let moused;
    let data = $$props["data"];
    data.station;
    let activeIndex = 0;
    function updateActive(i) {
      activeIndex = i;
    }
    if (store_get($$store_subs ??= {}, "$page", page).params.slug) {
      updateIndexFromSlug(store_get($$store_subs ??= {}, "$page", page).params.slug, stationData);
    }
    moused = store_get($$store_subs ??= {}, "$HOVER", HOVER);
    Fab($$renderer2);
    $$renderer2.push(`<!----> `);
    MediaQuery($$renderer2, {
      query: "(max-width: 700px)",
      children: invalid_default_snippet,
      $$slots: {
        default: ($$renderer3, { matches }) => {
          if (matches) {
            $$renderer3.push("<!--[-->");
            {
              $$renderer3.push("<!--[-->");
              Minus($$renderer3);
              $$renderer3.push(`<!----> `);
              Plus($$renderer3);
              $$renderer3.push(`<!----> `);
              Scroller($$renderer3, {
                "data-sveltekit-noscroll": true,
                items: stationData,
                onActiveChange: updateActive
              });
              $$renderer3.push(`<!----> `);
              Painting($$renderer3, {
                name: stationData[activeIndex].name,
                slug: stationData[activeIndex].slug
              });
              $$renderer3.push(`<!---->`);
            }
            $$renderer3.push(`<!--]-->`);
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
            Obi($$renderer3, {
              obiText: stationData[store_get($$store_subs ??= {}, "$INDEX", INDEX)].obiText,
              obi: stationData[store_get($$store_subs ??= {}, "$INDEX", INDEX)].obi
            });
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]-->`);
        }
      }
    });
    $$renderer2.push(`<!----> <nav${attr_style(`color: #${stringify(stationData[store_get($$store_subs ??= {}, "$INDEX", INDEX)].title)}`)} class="svelte-1r1gk1s"><span>`);
    Time($$renderer2, {});
    $$renderer2.push(`<!----></span> <b id="city">${escape_html(stationData[store_get($$store_subs ??= {}, "$INDEX", INDEX)].city)}</b> <span id="country">${escape_html(stationData[store_get($$store_subs ??= {}, "$INDEX", INDEX)].country)}</span></nav> <div class="image-wrap svelte-1r1gk1s">`);
    if (stationData[moused]) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="local svelte-1r1gk1s"><p>${escape_html(stationData[moused].city)}</p> <p>${escape_html(stationData[moused].country)}</p></div> `);
      Flyover($$renderer2, { slug: stationData[moused].slug });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div> `);
    if (store_get($$store_subs ??= {}, "$INDEX", INDEX) !== null) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<h2${attr_style(`color: #${stringify(stationData[store_get($$store_subs ??= {}, "$INDEX", INDEX)].title)};`)} class="svelte-1r1gk1s">${escape_html(stationData[store_get($$store_subs ??= {}, "$INDEX", INDEX)].name)}</h2> <div class="background svelte-1r1gk1s"${attr_style(`background-color: #${stringify(stationData[store_get($$store_subs ??= {}, "$INDEX", INDEX)].tint)}; color: #${stringify(stationData[store_get($$store_subs ??= {}, "$INDEX", INDEX)].clockhand)}`)}><div id="wallpaper"${attr_style(`background-image: url(../images/flyover/${stringify(stationData[store_get($$store_subs ??= {}, "$INDEX", INDEX)].slug)}.webp)`)} class="svelte-1r1gk1s"></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
