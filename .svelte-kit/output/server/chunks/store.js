import { g as getContext } from "./context.js";
import "@sveltejs/kit/internal";
import "./exports.js";
import "./utils.js";
import "clsx";
import "@sveltejs/kit/internal/server";
import "./state.svelte.js";
import { w as writable } from "./index.js";
const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const INDEX = writable(null);
function updateIndexFromSlug(slug, stationsArray) {
  const found = stationsArray.findIndex((s) => s.slug === slug);
  if (found !== -1) INDEX.set(found);
}
export {
  INDEX as I,
  page as p,
  updateIndexFromSlug as u
};
