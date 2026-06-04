// stores.js or utils.js
import { writable } from 'svelte/store';

export const INDEX = writable(null);

export function updateIndexFromSlug(slug, stationsArray) {
    const found = stationsArray.findIndex(s => s.slug === slug);
    if (found !== -1) INDEX.set(found);
}