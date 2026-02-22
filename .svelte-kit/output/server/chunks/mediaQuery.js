import { X as slot, $ as bind_props } from "./index2.js";
function MediaQuery($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let query = $$props["query"];
    let matches = false;
    $$renderer2.push(`<!--[-->`);
    slot($$renderer2, $$props, "default", { matches });
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { query });
  });
}
export {
  MediaQuery as M
};
