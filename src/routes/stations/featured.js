import { writable } from 'svelte/store';

// will help later
export const HOVEREREDFEATURE = writable(null);
export const showIndex = writable(null);

export const monthlyShows = [
 {
   "name": "LAVI with BoogzBrown",
   "city": "Ghana",
   "country": "Ghana",
   "station": "Ghana",
   "about": "it's a journey through traditional maloya, from the 70s to today.",
   "url": "https://oroko.live/radio/lavi-1225",
   "slug": "lavi",
 },
 {
   "name": "Xavisphone",
   "city": "Lyon",
   "country": "France",
   "station": "Lyl Radio",
   "about": "Brazilian, french-based Baile Funk producer Xavisphone lands on our stream for one hour of quality Baile, in line with his huuuuge release on DDS. Banger after banger after banger, dive in!",
   "url": "https://lyl.live/episode/xavisphone",
   "slug": "xavisphone",
 },
 {
   "name": "Sonrisita",
   "city": "Los Angeles",
   "country": "USA",
   "station": "Dublab",
   "about": "Coming up as a vinyl collector in her hometown of San Diego, Sonrisita pursued DJing as a means to create space for underground sounds and communities. Now based in Los Angeles, Sonrisita uses her foundation as a record digger to build eclectic sets that weave together both the new and nostalgic.",
   "url": "https://www.dublab.com/djs/sonrisita",
   "slug": "sonrisita",
 },
 {
   "name": "getdizzzy",
   "city": "Tokyo",
   "country": "Japan",
   "station": "Data Fruits",
   "about": "Joined - 2019-05-25 Last here - 2026-02-27",
   "url": "https://datafruits.fm/djs/getdizzzy",
   "slug": "getdizzzy",
 },
  {
   "name": "Breakfast with Flo",
   "city": "London",
   "country": "England",
   "station": "NTS",
   "about": "Lorem",
   "url": "https://www.nts.live/shows/the-breakfast-show-flo",
   "slug": "flo",
},
  {
   "name": "Verticale",
   "city": "Milan",
   "country": "Italy",
   "station": "Radio Raheem",
   "about": "Verticale significa andare in profondità. Un focus su un artista o una scena ogni volta differente per scoprire parte della sua produzione musicale, passando dai brani conosciuti alle gemme più nascoste.",
   "url": "https://www.radioraheem.it/shows/verticale",
   "slug": "verticale",
 }
]
//  {
//    "name": "title",
//    "city": "",
//    "country": "",
//    "stations": "",
//    "about-original": "",
//    "url": "",
//    "slug": "",
//  }
