import { a0 as ensure_array_like, V as attr, $ as bind_props, _ as stringify } from "../../../chunks/index2.js";
import { e as escape_html } from "../../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let data = $$props["data"];
    $$renderer2.push(`<div id="stations" class="svelte-10145a"><h6>THIS IS WORKING BUT NOT NEEDED</h6> <div><!--[-->`);
    const each_array = ensure_array_like(data.banana);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let { slug, name } = each_array[$$index];
      $$renderer2.push(`<a${attr("href", `/stations/${stringify(slug)}`)} data-sveltekit-noscroll="">${escape_html(name)}</a><br/> ${escape_html(slug)}`);
    }
    $$renderer2.push(`<!--]--></div></div>`);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
