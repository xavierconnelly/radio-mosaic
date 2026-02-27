import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.DN_u1QUv.js","_app/immutable/chunks/BhPTbT9u.js","_app/immutable/chunks/Bk596e7j.js","_app/immutable/chunks/DBCJt1nL.js","_app/immutable/chunks/C32aeUkg.js","_app/immutable/chunks/DLJXzDQf.js","_app/immutable/chunks/DxquiPgs.js","_app/immutable/chunks/CD2LABzA.js","_app/immutable/chunks/DYWBmJff.js","_app/immutable/chunks/GRHGhhSy.js","_app/immutable/chunks/DdP_FRE3.js","_app/immutable/chunks/ObPvwmso.js","_app/immutable/chunks/DYIqJmc3.js","_app/immutable/chunks/B_20phIv.js","_app/immutable/chunks/CWV6PxT7.js"];
export const stylesheets = ["_app/immutable/assets/0.OH3znb87.css"];
export const fonts = [];
