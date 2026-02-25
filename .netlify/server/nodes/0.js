import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.CqeP33bn.js","_app/immutable/chunks/Bnc8KOQ8.js","_app/immutable/chunks/Dxy5YEUb.js","_app/immutable/chunks/BvCwoCJJ.js","_app/immutable/chunks/4QvXeXEK.js","_app/immutable/chunks/DFbUpADg.js","_app/immutable/chunks/DdTh4nM5.js","_app/immutable/chunks/BHIDCpfm.js","_app/immutable/chunks/yXlbacBN.js","_app/immutable/chunks/CysAdnkg.js","_app/immutable/chunks/CTefRDDr.js","_app/immutable/chunks/DBiu7rPx.js","_app/immutable/chunks/SWZejBg7.js","_app/immutable/chunks/xQT6DEq5.js","_app/immutable/chunks/-YCGtzIm.js"];
export const stylesheets = ["_app/immutable/assets/0.OH3znb87.css"];
export const fonts = [];
