import { V as attr, Z as attr_style, _ as stringify, $ as bind_props, U as store_get, a0 as ensure_array_like, Y as attr_class, W as unsubscribe_stores } from "../../chunks/index2.js";
import { s as stationData, H as HOVER } from "../../chunks/radioData.js";
import { w as writable } from "../../chunks/index.js";
/* empty css               */
import { M as MediaQuery } from "../../chunks/mediaQuery.js";
import { s as spring, O as Obi, F as Flyover } from "../../chunks/flyover.js";
import { f as fallback } from "../../chunks/equality.js";
import { e as escape_html, i as invalid_default_snippet } from "../../chunks/context.js";
const HOVEREREDFEATURE = writable(null);
const monthlyShows = [
  {
    "name": "LAVI with BoogzBrown",
    "city": "Ghana",
    "country": "Ghana",
    "station": "Ghana",
    "about": "it's a journey through traditional maloya, from the 70s to today.",
    "url": "https://oroko.live/radio/lavi-1225",
    "slug": "lavi"
  },
  {
    "name": "Xavisphone",
    "city": "Lyon",
    "country": "France",
    "station": "Lyl Radio",
    "about": "Brazilian, french-based Baile Funk producer Xavisphone lands on our stream for one hour of quality Baile, in line with his huuuuge release on DDS. Banger after banger after banger, dive in!",
    "url": "https://lyl.live/episode/xavisphone",
    "slug": "xavisphone"
  },
  {
    "name": "Sonrisita",
    "city": "Los Angeles",
    "country": "USA",
    "station": "Dublab",
    "about": "Coming up as a vinyl collector in her hometown of San Diego, Sonrisita pursued DJing as a means to create space for underground sounds and communities. Now based in Los Angeles, Sonrisita uses her foundation as a record digger to build eclectic sets that weave together both the new and nostalgic.",
    "url": "https://www.dublab.com/djs/sonrisita",
    "slug": "sonrisita"
  },
  {
    "name": "getdizzzy",
    "city": "Tokyo",
    "country": "Japan",
    "station": "Data Fruits",
    "about": "Joined - 2019-05-25 Last here - 2026-02-27",
    "url": "https://datafruits.fm/djs/getdizzzy",
    "slug": "getdizzzy"
  },
  {
    "name": "Breakfast with Flo",
    "city": "London",
    "country": "England",
    "station": "NTS",
    "about": "Lorem",
    "url": "https://www.nts.live/shows/the-breakfast-show-flo",
    "slug": "flo"
  },
  {
    "name": "Verticale",
    "city": "Milan",
    "country": "Italy",
    "station": "Radio Raheem",
    "about": "Verticale significa andare in profondità. Un focus su un artista o una scena ogni volta differente per scoprire parte della sua produzione musicale, passando dai brani conosciuti alle gemme più nascoste.",
    "url": "https://www.radioraheem.it/shows/verticale",
    "slug": "verticale"
  }
];
function Hovered_HOME($$renderer, $$props) {
  let name = $$props["name"];
  let slug = $$props["slug"];
  let city = $$props["city"];
  let country = $$props["country"];
  let tint = $$props["tint"];
  let clockhand = $$props["clockhand"];
  $$renderer.push(`<a class="station svelte-9oqwnm" data-sveltekit-noscroll=""${attr("href", `/stations/${stringify(slug)}`)}${attr_style(`background-color: #${stringify(tint)}; color: #${stringify(clockhand)}`)}><span>${escape_html(city)}</span> <h4>${escape_html(name)}</h4> <span>${escape_html(country)}</span></a>`);
  bind_props($$props, { name, slug, city, country, tint, clockhand });
}
function Grid($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let activeSlug, hoveredSlug, occupiedCells, emptyCells;
    let activeIndex = fallback($$props["activeIndex"], 0);
    const allCells = [];
    for (let row = 1; row <= 11; row++) {
      for (let col = 1; col <= 20; col++) {
        allCells.push({ row, col });
      }
    }
    activeSlug = stationData[activeIndex]?.slug;
    hoveredSlug = store_get($$store_subs ??= {}, "$HOVER", HOVER);
    occupiedCells = /* @__PURE__ */ new Set([
      ...stationData.map((s) => `${s.col}-${s.row}`),
      // UTC label row
      ...Array.from({ length: 20 }, (_, i) => `${i + 1}-9`)
    ]);
    emptyCells = allCells.filter((c) => !occupiedCells.has(`${c.col}-${c.row}`));
    $$renderer2.push(`<div id="timezone-grid" class="svelte-xyo4pr"><div class="utc-label bounds svelte-xyo4pr" style="grid-column: 1; grid-row: 9">-8</div> <div class="utc-label bounds svelte-xyo4pr" style="grid-column: 2; grid-row: 9">-6</div> <div class="utc-label bounds svelte-xyo4pr" style="grid-column: 3; grid-row: 9">-5</div> <div class="utc-label bounds svelte-xyo4pr" style="grid-column: 4; grid-row: 9">-3</div> <div class="utc-label bounds svelte-xyo4pr" style="grid-column: 5; grid-row: 9">0</div> <div class="utc-label bounds svelte-xyo4pr" style="grid-column: 6; grid-row: 9">0</div> <div class="utc-label bounds svelte-xyo4pr" style="grid-column: 7; grid-row: 9">+1</div> <div class="utc-label bounds svelte-xyo4pr" style="grid-column: 8; grid-row: 9">+1</div> <div class="utc-label bounds svelte-xyo4pr" style="grid-column: 9; grid-row: 9">+1</div> <div class="utc-label bounds svelte-xyo4pr" style="grid-column: 10; grid-row: 9">+1</div> <div class="utc-label bounds svelte-xyo4pr" style="grid-column: 11; grid-row: 9">+1</div> <div class="utc-label bounds svelte-xyo4pr" style="grid-column: 12; grid-row: 9">+1</div> <div class="utc-label bounds svelte-xyo4pr" style="grid-column: 13; grid-row: 9">+2</div> <div class="utc-label bounds svelte-xyo4pr" style="grid-column: 14; grid-row: 9">+2</div> <div class="utc-label bounds svelte-xyo4pr" style="grid-column: 15; grid-row: 9">+3</div> <div class="utc-label bounds svelte-xyo4pr" style="grid-column: 16; grid-row: 9">+4</div> <div class="utc-label bounds svelte-xyo4pr" style="grid-column: 17; grid-row: 9">+7</div> <div class="utc-label bounds svelte-xyo4pr" style="grid-column: 18; grid-row: 9">+8</div> <div class="utc-label bounds svelte-xyo4pr" style="grid-column: 19; grid-row: 9">+9</div> <div class="utc-label bounds svelte-xyo4pr" style="grid-column: 20; grid-row: 9">+11</div> <!--[-->`);
    const each_array = ensure_array_like(stationData);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let station = each_array[$$index];
      $$renderer2.push(`<span${attr_class("bounds svelte-xyo4pr", void 0, { "active": station.slug === activeSlug })}${attr_style(`grid-column: ${stringify(station.col)}; grid-row: ${stringify(station.row)}; --tint: #${stringify(station.tint)};`)}><a${attr("href", `/stations/${stringify(station.slug)}`)}${attr_class("dot svelte-xyo4pr", void 0, {
        "active": station.slug === activeSlug,
        "hovered": station.slug === hoveredSlug
      })}${attr_style(`--clockhand: #${stringify(station.clockhand)}`)}${attr("title", station.name)}></a></span>`);
    }
    $$renderer2.push(`<!--]--> <!--[-->`);
    const each_array_1 = ensure_array_like(emptyCells);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let cell = each_array_1[$$index_1];
      $$renderer2.push(`<div class="bounds svelte-xyo4pr"${attr_style(`grid-column: ${stringify(cell.col)}; grid-row: ${stringify(cell.row)}`)}></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { activeIndex });
  });
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
    Grid($$renderer2, { activeIndex });
    $$renderer2.push(`<!----> `);
    Hovered_HOME($$renderer2, {
      name: stationData[(activeIndex + 0) % stationData.length].name,
      slug: stationData[(activeIndex + 0) % stationData.length].slug,
      city: stationData[(activeIndex + 0) % stationData.length].city,
      country: stationData[(activeIndex + 0) % stationData.length].country,
      tint: stationData[(activeIndex + 0) % stationData.length].tint,
      clockhand: stationData[(activeIndex + 0) % stationData.length].clockhand
    });
    $$renderer2.push(`<!----> <div id="box" class="svelte-9dvek7"><div class="scene svelte-9dvek7"><div class="cube svelte-9dvek7"${attr_style(`transform: translateZ(-${stringify(radius)}em) rotateY(-${stringify(store_get($$store_subs ??= {}, "$x", x))}deg)`)}><!--[-->`);
    const each_array = ensure_array_like(items);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let item = each_array[i];
      $$renderer2.push(`<a${attr("href", `/stations/${stringify(item.slug)}`)} class="face svelte-9dvek7"${attr_style(`transform: rotateY(${stringify(i * angleStep)}deg) translateZ(${stringify(radius)}em); background-color: #${stringify(item.tint)}`)}><div class="facepaint svelte-9dvek7"${attr_style(`background-image: url(../images/small/${stringify(item.slug)}1x.webp)`)}><span id="name"${attr_style(`background-color: #${stringify(item.tint)}; color: #${stringify(item.clockhand)}`)} class="svelte-9dvek7">${escape_html(item.name)}</span></div></a>`);
    }
    $$renderer2.push(`<!--]--></div></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { items, onActiveChange });
  });
}
function Hovered_SHOW($$renderer, $$props) {
  let url = $$props["url"];
  let name = $$props["name"];
  let city = $$props["city"];
  let station = $$props["station"];
  let about = $$props["about"];
  $$renderer.push(`<a class="show svelte-1p5664w"${attr("href", url)}><span>${escape_html(city)}</span> <h4>${escape_html(name)}</h4> <span>${escape_html(station)}</span></a> <div id="caption" class="svelte-1p5664w">${escape_html(about)}</div>`);
  bind_props($$props, { url, name, city, station, about });
}
function Featured($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let count, angleStep, radius, angle, showIndex;
    let shows = fallback($$props["shows"], () => [], true);
    let onShowGlipmse = $$props["onShowGlipmse"];
    const faceWidth = 16;
    const x = spring(0, { stiffness: 0.03, damping: 0.7 });
    store_get($$store_subs ??= {}, "$HOVEREREDFEATURE", HOVEREREDFEATURE);
    count = shows.length;
    angleStep = 360 / count;
    radius = faceWidth / 2 / Math.tan(Math.PI / count);
    angle = (store_get($$store_subs ??= {}, "$x", x) % 360 + 360) % 360;
    showIndex = Math.floor((angle + angleStep / 2) / angleStep) % count;
    shows[showIndex];
    onShowGlipmse?.(showIndex);
    $$renderer2.push(`<h2 class="svelte-1706gl1">Featured shows</h2> `);
    Hovered_SHOW($$renderer2, {
      name: monthlyShows[(showIndex + 0) % monthlyShows.length].name,
      url: monthlyShows[(showIndex + 0) % monthlyShows.length].url,
      city: monthlyShows[(showIndex + 0) % monthlyShows.length].city,
      station: monthlyShows[(showIndex + 0) % monthlyShows.length].station
    });
    $$renderer2.push(`<!----> <div id="box" class="svelte-1706gl1"><div class="scene svelte-1706gl1"><div class="cube svelte-1706gl1"${attr_style(`transform: translateZ(-${stringify(radius)}em) rotateY(-${stringify(store_get($$store_subs ??= {}, "$x", x))}deg)`)}><!--[-->`);
    const each_array = ensure_array_like(shows);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let show = each_array[i];
      $$renderer2.push(`<a${attr("href", show.url)} class="face svelte-1706gl1" target="_blank"${attr_style(`transform: rotateY(${stringify(i * angleStep)}deg) translateZ(${stringify(radius)}em);`)}><div class="facepaint svelte-1706gl1"${attr_style(`background-image: url(../images/featuredShows/${stringify(show.slug)}.webp)`)}><span id="name" class="svelte-1706gl1">${escape_html(show.name)}</span></div></a>`);
    }
    $$renderer2.push(`<!--]--></div></div></div> `);
    Hovered_SHOW($$renderer2, {
      about: monthlyShows[(showIndex + 0) % monthlyShows.length].about,
      url: monthlyShows[(showIndex + 0) % monthlyShows.length].url
    });
    $$renderer2.push(`<!----> <p class="svelte-1706gl1">A selection of our favourite presenters from across the globe</p>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { shows, onShowGlipmse });
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
    function showActive(i) {
    }
    moused = store_get($$store_subs ??= {}, "$HOVER", HOVER);
    store_get($$store_subs ??= {}, "$HOVEREREDFEATURE", HOVEREREDFEATURE);
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
            Featured($$renderer3, { shows: monthlyShows, onShowGlipmse: showActive });
            $$renderer3.push(`<!----> <div class="small-print buffer svelte-1uha8ag"><h4 class="svelte-1uha8ag">Contact</h4> <p class="svelte-1uha8ag">email@email.com</p> <p class="svelte-1uha8ag">This project is a labour of love, if you would like to help in any way please get in touch. Whether that's to recommend a show, let me know a link is broken etc.</p> <br class="svelte-1uha8ag"/> <b class="svelte-1uha8ag">Disclaimer</b> <p class="svelte-1uha8ag">If your station is listed and you prefer it wasn't, sorry, please contact me and I'll take it down</p></div>`);
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
