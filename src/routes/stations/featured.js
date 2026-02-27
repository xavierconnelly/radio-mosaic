import { writable } from 'svelte/store';

// will help later
export const HOVEREREDFEATURE = writable(null);
export const showIndex = writable(null);

export const monthlyShows = [
 {
   "name": "LAVI with BoogzBrown",
   "city": "Ghana",
   "country": "Ghana",
   "stations": "Ghana",
   "about-original": "it's a journey through traditional maloya, from the 70s to today.",
   "url": "https://oroko.live/radio/lavi-1225",
   "slug": "lavi",
 },
 {
   "name": "Xavisphone",
   "city": "Lyon",
   "country": "France",
   "stations": "Lyl Radio",
   "about-original": "Brazilian, french-based Baile Funk producer Xavisphone lands on our stream for one hour of quality Baile, in line with his huuuuge release on DDS. Banger after banger after banger, dive in!",
   "url": "https://lyl.live/episode/xavisphone",
   "slug": "xavisphone",
 },
 {
   "name": "Sonrisita",
   "city": "Los Angeles",
   "country": "USA",
   "stations": "Dublab",
   "about-original": "Coming up as a vinyl collector in her hometown of San Diego, Sonrisita pursued DJing as a means to create space for underground sounds and communities. Now based in Los Angeles, Sonrisita uses her foundation as a record digger to build eclectic sets that weave together both the new and nostalgic. Sonrisita’s played in various cities across the U.S., Mexico and Canada and has opened up for artists like Quantic, Durand Jones and the Indications, and Dam-Funk. Over the years her dedication to music has also extended outside of the booth. Most notably she is working on a book that chronicles the history of the iconic East Side Story compilations based on her original research. She has also been a Researcher on the award-winning music podcast KCRW’s Lost Notes. Sonrisita’s passion and curiosity for music in all of its rich diversity is evident in everything she does.",
   "url": "https://www.dublab.com/djs/sonrisita",
   "slug": "sonrisita",
 },
 {
   "name": "getdizzzy",
   "city": "Tokyo",
   "country": "Japan",
   "stations": "Data Fruits",
   "about-original": "Joined - 2019-05-25 Last here - 2026-02-27",
   "url": "https://datafruits.fm/djs/getdizzzy",
   "slug": "getdizzzy",
 },
  {
   "name": "Breakfast with Flo",
   "city": "London",
   "country": "England",
   "stations": "NTS",
   "about-original": "Lorem",
   "url": "https://www.nts.live/shows/the-breakfast-show-flo",
   "slug": "flo",
},
  {
   "name": "Verticale",
   "city": "Milan",
   "country": "Italy",
   "stations": "Radio Raheem",
   "about-original": "Verticale significa andare in profondità. Un focus su un artista o una scena ogni volta differente per scoprire parte della sua produzione musicale, passando dai brani conosciuti alle gemme più nascoste.",
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
