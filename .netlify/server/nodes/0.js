import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.c_t_HdVq.js","_app/immutable/chunks/DFAkYZDU.js","_app/immutable/chunks/TbOtGpMn.js","_app/immutable/chunks/BcyD53e9.js","_app/immutable/chunks/std8KckJ.js","_app/immutable/chunks/BjZV_fGI.js","_app/immutable/chunks/nfOT3HFr.js","_app/immutable/chunks/vjeGbw68.js","_app/immutable/chunks/1KykO8B1.js","_app/immutable/chunks/BUZ6P1Rm.js","_app/immutable/chunks/B7oUUT89.js","_app/immutable/chunks/CLvNHZZ6.js","_app/immutable/chunks/DALJQzv9.js","_app/immutable/chunks/BmN0fNHi.js","_app/immutable/chunks/Bd7zuU5O.js"];
export const stylesheets = ["_app/immutable/assets/0.DYrYEg_P.css"];
export const fonts = [];
