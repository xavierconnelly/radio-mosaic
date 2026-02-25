import * as server from '../entries/pages/stations/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/stations/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/stations/+page.server.js";
export const imports = ["_app/immutable/nodes/5.CItYHc8S.js","_app/immutable/chunks/Bnc8KOQ8.js","_app/immutable/chunks/Dxy5YEUb.js","_app/immutable/chunks/BvCwoCJJ.js","_app/immutable/chunks/pA6d0shC.js","_app/immutable/chunks/CTefRDDr.js","_app/immutable/chunks/Euy4m7U_.js","_app/immutable/chunks/DBiu7rPx.js","_app/immutable/chunks/CysAdnkg.js"];
export const stylesheets = ["_app/immutable/assets/5.Cm65DF5q.css"];
export const fonts = [];
