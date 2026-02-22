import * as server from '../entries/pages/stations/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/stations/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/stations/+page.server.js";
export const imports = ["_app/immutable/nodes/5.K74mkJWB.js","_app/immutable/chunks/DFAkYZDU.js","_app/immutable/chunks/TbOtGpMn.js","_app/immutable/chunks/BcyD53e9.js","_app/immutable/chunks/Cd8av1_E.js","_app/immutable/chunks/BjZV_fGI.js","_app/immutable/chunks/CLaDiIes.js","_app/immutable/chunks/1KykO8B1.js","_app/immutable/chunks/DjhF7sTm.js","_app/immutable/chunks/B7oUUT89.js"];
export const stylesheets = ["_app/immutable/assets/5.Cm65DF5q.css"];
export const fonts = [];
