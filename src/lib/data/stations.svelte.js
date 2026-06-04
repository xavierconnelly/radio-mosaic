import { writable } from 'svelte/store';

// export const INDEX = writable(0);

// Reactive shared state (runes)
export const ui = $state({
    index: null,
    hover: null,
    active: null
});

export const stationData = [
 {
   "name": "Dublab",
   "city": "Los Angeles",
   "country": "USA",
   "utc": "-8",
   "col": 1,
   "row": 8,
   "timezone": "America/Los_Angeles",
   "lat": "34.0522",
   "lng": -118.2437,
   "about": "dublab is a non-profit, radio station dedicated to the growth of music, arts, and culture.Since 1999, we have been broadcasting wide-spectrum music from around the world. Our programming has expanded to include the production of original art exhibits, films, events record releases and educational programs related to health, youth, development, education and creative processes. dublab is a platform for discovery and the cultivation of next-wave music, arts and culture.",
   "slug": "dublab",
   "url": [
      "https://www.dublab.com/",
      "https://www.dublab.com/"
   ],
   "audio": "https://dublab.out.airtime.pro/dublab_a",
   "status": "",
   "tint": "D954D7"
},
 {
   "name": "Lookout FM",
   "city": "Los Angeles",
   "country": "USA",
   "utc": "·",
   "col": 1,
   "row": 7,
   "timezone": "America/Los_Angeles",
   "lat": "34.0522",
   "lng": -118.2437,
   "about": "<p>LOOKOUT FM is a West Coast terrestrial radio home for the broadcast of \"transmission art:\" experimental audio composition, modern serials, data sonification, radio plays, multi-day compositions, and radio-centric performances. Our fully licensed stations in Burbank, Hollywood, and Pacific Palisades function as FM exhibition spaces where radio art is presented without regard to constraints of time, structure, or commercial consideration.</p>\n\n<p>Radio is a public utility, and as such should be a platform for public art. We aim to foster an interest in artistic and abstract uses of the public airwaves among the diverse communities of Southern California and beyond. Our goal is to encourage artists to create and broadcast original works on the FM electromagnetic spectrum in Los Angeles by providing the necessary context and support for transmission-based projects.</p>",
   "slug": "lookout-fm",
   "url": [
      "http://lookout.fm/",
      "http://lookout.fm/"
   ],
   "audio": "https://radio.mensajito.mx/nopalradio",
   "status": "",
   "tint": "7A8671"
},
 {
   "name": "Kchung",
   "city": "Los Angeles",
   "country": "USA",
   "utc": "·",
   "col": 1,
   "row": 6,
   "timezone": "America/Los_Angeles",
   "lat": "34.0522",
   "lng": -118.2437,
   "about": "KCHUNG Radio is an artist run co-operative and community radio station based in Chinatown, Los Angeles.\n\nSince 2011, KCHUNG has pursued a distributed, affinity-based structure that promotes open participation and curatorial collaboration. Round-the-clock broadcasts and site-specific projects implemented by more than 200 contributing members reflect the diversity of the Los Angeles extensive music, arts, and social justice movements. KCHUNG Radio broadcasts cultural and political discourse, music, sound, art, and performance-based programs through low-powered and internet broadcasts, expanding on the history of radio as an empowering and creative medium.\n\nKCHUNG Radio has collaborated with cultural organizations at all scales, including the UCLA Hammer Museum's Made in LA 2012 biennial, Ooga Booga, Thank You For Coming, Perform Chinatown, MOCA, Human Resources, LA Zine Fest, Night Gallery, The Smell, Pehrspace, and LACMA. KCHUNG Radio is a Creative Capital awardee.",
   "slug": "kchung",
   "url": [
      "https://www.kchungradio.org/stream",
      "https://www.kchungradio.org/stream"
   ],
   "audio": "https://kchungradio.out.airtime.pro/kchungradio_a",
   "status": "not strictly an online station... has a frequency",
   "tint": "C53283"
},
 {
   "name": "Kchung",
   "city": "Los Angeles",
   "country": "USA",
   "utc": "·",
   "col": 1,
   "row": 5,
   "timezone": "America/Los_Angeles",
   "lat": "34.0522",
   "lng": -118.2437,
   "about": "KCHUNG Radio is an artist run co-operative and community radio station based in Chinatown, Los Angeles.\n\nSince 2011, KCHUNG has pursued a distributed, affinity-based structure that promotes open participation and curatorial collaboration. Round-the-clock broadcasts and site-specific projects implemented by more than 200 contributing members reflect the diversity of the Los Angeles extensive music, arts, and social justice movements. KCHUNG Radio broadcasts cultural and political discourse, music, sound, art, and performance-based programs through low-powered and internet broadcasts, expanding on the history of radio as an empowering and creative medium.\n\nKCHUNG Radio has collaborated with cultural organizations at all scales, including the UCLA Hammer Museum's Made in LA 2012 biennial, Ooga Booga, Thank You For Coming, Perform Chinatown, MOCA, Human Resources, LA Zine Fest, Night Gallery, The Smell, Pehrspace, and LACMA. KCHUNG Radio is a Creative Capital awardee.",
   "slug": "kchung-public",
   "url": [
      "https://www.kchungradio.org/stream",
      "https://www.kchungradio.org/stream"
   ],
   "audio": "https://kchungpublic.out.airtime.pro/kchungpublic_a",
   "status": "",
   "tint": "F69413"
},
 {
   "name": "BFF.fm",
   "city": "San Francisco",
   "country": "USA",
   "utc": "·",
   "col": 1,
   "row": 4,
   "timezone": "America/Los_Angeles",
   "lat": "37.7749",
   "lng": -122.4194,
   "about": "BFF.fm is a rare gem. In this era of homogenized commercial radio, where only a handful of corporations own the majority of the airwaves and algorithms dominate streaming platforms, BFF.fm has paved our own way online. Best Frequencies Forever is a community radio station, broadcasting online from the heart of San Francisco's Mission District. BFF.fm’s mission is to create powerful community radio for San Francisco. We want to grow a vibrant community of DJs, artists, and listeners all working together to uplift the underground music scene, because music has the power to unite people and inspire positive change. We aim to serve the community through a combination of live radio magic, new music discovery, and local engagement.",
   "slug": "bff-fm",
   "url": [
      "https://bff.fm/",
      "https://bff.fm/"
   ],
   "audio": "https://ais-sa2.cdnstream1.com/2053_128.mp3",
   "status": "",
   "tint": "BA8A4C"
},
 {
   "name": "Internet Public Radio",
   "city": "Guadalajara",
   "country": "Mexico",
   "utc": "-6",
   "col": 2,
   "row": 8,
   "timezone": "America/Mexico_City",
   "lat": "20.6597",
   "lng": -103.3496,
   "about": "Internet Public Radio is an independent cultural platform and radio station curated by local and international DJs, musicians and visual artists.\n",
   "slug": "internet-public-radio",
   "url": [
      "https://www.internetpublicradio.live/",
      "https://www.internetpublicradio.live/"
   ],
   "audio": "https://stream-relay-geo.internetpublicradio.live/stream/main",
   "status": "",
   "tint": "B0D965"
},
 {
   "name": "Radio Nopal",
   "city": "Mexico City",
   "country": "Mexico",
   "utc": "·",
   "col": 2,
   "row": 7,
   "timezone": "America/Mexico_City",
   "lat": "19.4326",
   "lng": -99.1332,
   "about": "Shared Frequencies is a collaborative radio station for all. We operate out of Austin and Madrid, and host artists from around the world.",
   "slug": "radio-nopal",
   "url": [
      "https://radionopal.com/",
      "https://radionopal.com/"
   ],
   "audio": "https://radio.mensajito.mx/nopalA",
   "status": "",
   "tint": "FCCF94"
},
 {
   "name": "Radio Nopal",
   "city": "Mexico City",
   "country": "Mexico",
   "utc": "·",
   "col": 2,
   "row": 6,
   "timezone": "America/Mexico_City",
   "lat": "19.4326",
   "lng": -99.1332,
   "about": "Shared Frequencies is a collaborative radio station for all. We operate out of Austin and Madrid, and host artists from around the world.",
   "slug": "radio-nopal-2",
   "url": [
      "https://radionopal.com/",
      "https://radionopal.com/"
   ],
   "audio": "https://radio.mensajito.mx/nopalVentana",
   "status": "",
   "tint": "9DB6E5"
},
 {
   "name": "Radio Veintiocho",
   "city": "San Andrés Cholula",
   "country": "Mexico",
   "utc": "·",
   "col": 2,
   "row": 5,
   "timezone": "America/Mexico_City",
   "lat": "19.0413",
   "lng": -98.2783,
   "about": "Radio Veintiocho: a platform that seeks to promote emerging musical talent through live broadcasts and radio shows where music and culture are shared, broadcasting from San Andrés Cholula, Mexico.\n",
   "slug": "radio-veintiocho",
   "url": [
      "https://www.radio28.net/",
      "https://www.radio28.net/"
   ],
   "audio": "https://www-radio28-net.filesusr.com/html/ffc736_d1a2c392d0663a4ef7734d41b498afb7.html",
   "status": "",
   "tint": "C1A156"
},
 {
   "name": "8 Ball Radio",
   "city": "New York",
   "country": "USA",
   "utc": "-5",
   "col": 3,
   "row": 8,
   "timezone": "America/New_York",
   "lat": "40.7128",
   "lng": -74.006,
   "about": "8-Ball is an independent not-for-profit organization that — through free, open-access platforms and events — nurtures and supports a community of artists. We provide virtual and physical meeting sites for people of all ages and backgrounds. Our mission is to generate collaborative and educational exchange through public access television and radio stations, an imprint, a self publishing fair, a public library, an internship program, a residency and series of workshops in art-related trades. 8-Ball Community operates free of elitism and is governed by its participants.",
   "slug": "8-ball-radio",
   "url": [
      "https://8ballradio.nyc/",
      "https://8ballradio.nyc/"
   ],
   "audio": "https://eightball.out.airtime.pro/eightball_a",
   "status": "website active, stream link but no sound",
   "tint": "B3323C"
},
 {
   "name": "Half Moon",
   "city": "New York",
   "country": "USA",
   "utc": "·",
   "col": 3,
   "row": 7,
   "timezone": "America/New_York",
   "lat": "40.7128",
   "lng": -74.006,
   "about": "A new age cultural institution founded In Brooklyn.\nWe are an independent music and media company that covers and reinforces emerging culture around the world through radio, events, editorial, and educational workshops with headquarters in New York City and Los Angeles.",
   "slug": "half-moon",
   "url": [
      "https://www.halfmoonbk.com/",
      "https://www.halfmoonbk.com/"
   ],
   "audio": "https://half-moon.radiocult.fm/stream",
   "status": "",
   "tint": "CD2525"
},
 {
   "name": "N10.AS",
   "city": "Montreal",
   "country": "Canada",
   "utc": "·",
   "col": 3,
   "row": 6,
   "timezone": "America/Toronto",
   "lat": "45.5017",
   "lng": -73.5673,
   "about": "We are an internet radio station broadcasting from Montreal, Quebec.",
   "slug": "n10-as",
   "url": [
      "https://n10.as/",
      "https://n10.as/"
   ],
   "audio": "https://n10as.radiocult.fm/stream",
   "status": "",
   "tint": "3A6FCA"
},
 {
   "name": "Veneno",
   "city": "Sao Paulo",
   "country": "Brazil",
   "utc": "-3",
   "col": 4,
   "row": 10,
   "timezone": "America/Sao_Paulo",
   "lat": "-23.5505",
   "lng": -46.6333,
   "about": "Created in 2018, Veneno was born from the idea of ​​unifying and solidifying the most diverse cultural initiatives. Based in downtown São Paulo, the radio today broadcasts a wide range of programs, dialoguing with different aesthetics and concepts.\n\nShowcasing content 24 hours a day, 7 days a week, the radio is also responsible for creating gigs and events, always aiming to promote our resident creators.",
   "slug": "veneno",
   "url": [
      "https://veneno.live/",
      "https://veneno.live/"
   ],
   "audio": "https://veneno.out.airtime.pro/veneno_b",
   "status": "",
   "tint": "A8A990"
},
 {
   "name": "Oroko Radio",
   "city": "Accra",
   "country": "Ghana",
   "utc": "0",
   "col": 5,
   "row": 10,
   "timezone": "Africa/Accra",
   "lat": "5.6037",
   "lng": -0.187,
   "about": "Empowering through conversation, collaboration and community.\nOroko is a not-for-profit independent internet radio station based in Accra, Ghana. We aim to connect, inspire and empower through conversation, collaboration and community.\n\nRecentering narratives\n\nWe seek to reclaim and recenter narratives from the African and Diasporic artistic communities with a particular focus on local perspectives in Accra, in addition to cultivating and nurturing relationships with like-minded projects across the globe. Oroko Radio shines a spotlight on alternative sounds and thoughts coming from and influenced by the African continent.\n\nProviding a stage and fostering relationships\n\nOroko Radio provides a stage for local musicians, DJs, thinkers, moderators, and content creators: an independent hub for expression of self and thought through sound. The station intends to foster relationships with visiting artists and community projects in Accra, Ghana as well as other community projects around the globe, exchanging ideas, organizing workshops, co-creating programming, and much more. These collaborations will further strengthen the interconnectedness between Accra and the rest of the globe, leaving space for the radio to potentially expand its reach. \n\nBuilding bridges\n\nWe want to further develop and foster the connections between the youth of Africa and the Diaspora, with programming that is curated for us, by us. Our founding team is a group of industry professionals/artists with roots in West Africa (Ghana, Nigeria) and Europe (Germany, UK), with a wealth of experience and an extensive network in music, radio, visual arts, film and dance.",
   "slug": "oroko-radio",
   "url": [
      "https://oroko.live/",
      "https://oroko.live/"
   ],
   "audio": "https://oroko-radio.radiocult.fm/stream",
   "status": "",
   "tint": "657EBD"
},
 {
   "name": "Seyðisfjörður Community Radio",
   "city": "Seyðisfjörður",
   "country": "Iceland",
   "utc": "·",
   "col": 5,
   "row": 8,
   "timezone": "Atlantic/Reykjavik",
   "lat": "65.2627",
   "lng": -14.0096,
   "about": "Seydisfjordur Community Radio 107.1 is a shared digital and analogue broadcasting platform located in the village of Seyðisfjörður on the east-coast of Iceland – hosted, nurtured and initiated by an open-ended international community inhabiting different conditions and positions, often somewhat distributed in various locations on the planetary surface. From these places and timezones we share, we inquire and we keep in touch – over and through radio.\n\nThe community of listeners, broadcasters and hiding places morphs changes with time – some could say quite the foggy operation. Please consider this fog an open invitation to get in touch if you are interested in holding the radio in some way, even if just for a short while. We will do our best to include everyone who is interested in contributing and/ or listening in.\n\nSeydisfjordur Community Radio 107.1 is as well the home of the LungA Radio School - an ongoing experiment around an open arts-program holding and facilitating itself through and via radio-transmission. A school community and work-group geographically dispersed, connected and collaborating within the radio as medium. A chrome ear singing to an open palm.",
   "slug": "seyoisfjorour-community-radio",
   "url": [
      "https://seydisfjordurcommunityradio.net/",
      "https://seydisfjordurcommunityradio.net/"
   ],
   "audio": "https://seyisfjorur-community-radio.radiocult.fm/stream",
   "status": "",
   "tint": "5396CD"
},
 {
   "name": "Dublin Digital Radio",
   "city": "Dublin",
   "country": "Ireland",
   "utc": "·",
   "col": 5,
   "row": 7,
   "timezone": "Europe/Dublin",
   "lat": "53.3498",
   "lng": -6.2603,
   "about": "Dublin Digital Radio (ddr.) is an award-winning, online community radio station representing a wealth of alternative music, art and politics across Ireland, since 2016. ddr. is wholly funded by its members (via Patreon subscriptions), composed of listeners and broadcasters alike, ensuring that it remains independent of corporate influence and is run democratically by its growing community.\n\nddr. aims to provide a radical alternative to established media, a station supported by and for its community. ddr's programming reflects this aim, having run radio events in support of International Women's Day & Pride (Queering the Airwaves); while hosting participatory youth programs in: Dabbledoo, Young ddr & Atomic.\n\nddr. is an avid supporter of experimental and left-of-field music & creatives, supporting local scenes directly through our events and programming.\n\nddr. wishes to empower its members to use radio as a tool for collective collaboration & cooperation, horizontal skill share and support. The station holds Open Studio events as an introduction to radio making, contributing to this collaborative culture.\n\nddr. is based in Dublin city centre but is open to all; however, the station nurtures connections with collectives across the island and internationally to further its aims and values. Read the ddr. Guiding Principles below.\n\nddr. Guiding Principles\nddr. seeks to provide a platform and advocate for music, artists and conversations that are not given voice in the established media.\nddr. champions Irish-based artists, DJs and music makers. We want to expose you to the quality of those working on this island and the sound of Ireland’s underground.\nddr. is an alternative radio space for music lovers. We favour the live and interactive.\nddr. believes in an open and free internet & rejects the logic of surveillance capitalism.\nddr. is member owned and controlled, not run for profit. We are independent and work outside of commercial, institutional and political influences; this allows us to be uncompromising in the ideas and music we put on air.\nddr. seeks to operate transparently, encouraging the community to understand the practices and structures of the station, and discouraging hierarchical power structures.\nddr. is based in Dublin but not limited by geography. We want to participate in and foster connections with organisations and platforms both in Ireland and internationally.\nddr. wants to build an open, inclusive and diverse community where differing points of view and opinions are respected. We do not tolerate sexism, homophobia, transphobia, racism, classism or other forms of discrimination.",
   "slug": "dublin-digital-radio",
   "url": [
      "https://listen.dublindigitalradio.com/",
      "https://listen.dublindigitalradio.com/"
   ],
   "audio": "https://dublin-digital-radio.radiocult.fm/stream",
   "status": "",
   "tint": "795971"
},
 {
   "name": "EHFM",
   "city": "Glasgow ",
   "country": "Scotland",
   "utc": "·",
   "col": 5,
   "row": 6,
   "timezone": "Europe/London",
   "lat": "55.8642",
   "lng": -4.2518,
   "about": "Founded in 2018, EHFM was set up as a digital platform for local creative souls to express themselves. Since then, we’ve built up a loving community of presenters and volunteers who allow us to broadcast 24 hours a day, seven days a week.\nOur programming approach is broad. We’ll play anything from club to Scottish traditional music; spoken word to panel discussions.\nFor six years EHFM broadcast from multi-arts venue Summerhall, until recently moving to a new purpose-built studio space housed within our new Leith-based cafe, Ground Floor. All proceeds from the cafe go towards powering our radio station.",
   "slug": "eh-fm",
   "url": [
      "https://www.ehfm.live/",
      "https://www.ehfm.live/"
   ],
   "audio": "https://ehfm.out.airtime.pro/ehfm_a",
   "status": "",
   "tint": "996242"
},
 {
   "name": "Sub City",
   "city": "Glasgow ",
   "country": "Scotland",
   "utc": "·",
   "col": 5,
   "row": 5,
   "timezone": "Europe/London",
   "lat": "55.8642",
   "lng": -4.2518,
   "about": "Subcity Radio (est. 1995) is a non-profit, volunteer-run freeform radio station, arts collective, and events promoter based at the University of Glasgow. Our team applications are open twice a year to the local community, and show applications are open year round.\n\nFreeform means that contributors have complete editorial freedom; one of the station's founding principles was the lack of any prescribed playlist. We endeavour to platform as diverse a range of shows as possible, no genre or concept is off-limits.\n\nHistory\nThe story of Subcity begins in 1993, with a Restricted Service Licence FM station named \"Sweet FM\" broadcasting from an unused Murano flat. In October 1995, the station became SubCity (the capitalisation and spacing has varied over the years) and in 2000 the station found a permanent home in the McIntyre building of UofG. In 2002 the station was granted a 5-year AM license, but this was discontinued soon after it as the university complained it was causing interference on their phone lines. Since 2003 the station has broadcast online. 2023 brings the long awaited revamp of subcity.org, the latest iteration of Subcity's ever evolving web presence. Read more about the station's activities through the years on the Archive page\n\nPersonnel\nSubcity is staffed entirely by volunteers, and the team tends largely made up of mostly students. Being a student is not a requirement however, and anyone is welcome to apply for a role. The team is loosely structured and non-hierarchical; the only official position is that of manager. This role is taken on by a new team member (or pair of team members) for each academic year. Our current manager is Skyler, previously our design team's coordinator. Our current assistant manager is Daphne, who also serves as our archives coordinator. There are many sub-teams within Subcity, including programmes, support, comms, tech, web, and archives. People on the team tend to gravitate towards one of these as their main area of contribution, but are free to help out with any of the other teams as they please. Most of these teams have a designated coordinator. This is someone who takes on additional responsibility to make sure that the team works effectively, and meets directly with the manager(s) to coordinate the actions of each team towards common goals. When Subcity is organising an event everyone in the team is encouraged to pitch in. This means that there is no distinct events team.\n\nThe station has over 100 active contributors; these are the people that run the shows broadcast on Subcity. Many of these contributors are also team members. Some people start out as a contributor, then join the team. Many ex-team members continue to play a show on Subcity, some remain contributors for years after leaving the team.\n\nContact Us",
   "slug": "sub-city",
   "url": [
      "https://www.subcity.org/",
      "https://www.subcity.org/"
   ],
   "audio": "https://stream.subcity.org/listen",
   "status": "",
   "tint": "C04920"
},
 {
   "name": "Noods FM",
   "city": "Bristol",
   "country": "England",
   "utc": "·",
   "col": 5,
   "row": 4,
   "timezone": "Europe/London",
   "lat": "51.4545",
   "lng": -2.5879,
   "about": "Noods Radio is an independent radio station broadcasting from Bristols Stokes Croft. Founded in 2015 and born from Sunday morning music sessions, the station has grown to become the home of faces from around the globe. Tune in with open ears for daily shows from our misfits, dancers, collectors and selectors. No playlists, no ads, just the people.",
   "slug": "noods-fm",
   "url": [
      "https://noodsradio.com/",
      "https://noodsradio.com/"
   ],
   "audio": "https://noods-radio.radiocult.fm/stream",
   "status": "",
   "tint": "68AC34"
},
 {
   "name": "Reform Radio",
   "city": "Manchester",
   "country": "England",
   "utc": "·",
   "col": 5,
   "row": 3,
   "timezone": "Europe/London",
   "lat": "53.4808",
   "lng": -2.2426,
   "about": "Reform Radio broadcasts the best in music, arts and culture from Manchester to the World. We’re a multi-award winning online radio station and arts organisation working with local creatives, DJs and young people to develop and showcase new work via our online platforms. This large active community works together to create all the content on Reform Radio, supported by regular outside broadcasts within the city, as well as specially recorded shows from artists across the globe.",
   "slug": "reform-radio",
   "url": [
      "https://www.reformradio.co.uk/",
      "https://www.reformradio.co.uk/"
   ],
   "audio": "https://testform.out.airtime.pro/testform_a",
   "status": "",
   "tint": "D4C8ED"
},
 {
   "name": "Do You",
   "city": "London",
   "country": "England",
   "utc": "·",
   "col": 5,
   "row": 2,
   "timezone": "Europe/London",
   "lat": "51.5074",
   "lng": -0.1278,
   "about": "Do!!You!!!Radio 10am - 12 every week day at www.doyou.world",
   "slug": "do-you",
   "url": [
      "https://doyou.world/",
      "https://doyou.world/"
   ],
   "audio": "https://doyouworld.out.airtime.pro/doyouworld_a",
   "status": "",
   "tint": "B98CB8"
},
 {
   "name": "Sister Midnight",
   "city": "London",
   "country": "England",
   "utc": "·",
   "col": 5,
   "row": 2,
   "timezone": "Europe/London",
   "lat": "51.5074",
   "lng": -0.1278,
   "about": "Sister Midnight is a not-for-profit co-operative organisation based in south east London. Since 2021, we've been campaigning to create Lewisham's first community owned music venue, bringing a much needed cultural community hub to our local area.\n\n\n",
   "slug": "sister-midnight",
   "url": [
      "https://radio.sistermidnight.org/",
      "https://www.hopestradio.community/"
   ],
   "audio": "https://stream.radio.co/s35e4926a1/listen\n",
   "status": "",
   "tint": "A79BF7"
},
 {
   "name": "Bloop",
   "city": "London",
   "country": "England",
   "utc": "·",
   "col": 6,
   "row": 8,
   "timezone": "Europe/London",
   "lat": "51.5074",
   "lng": -0.1278,
   "about": "Online Underground Radio Station based in the heart of Central London. We specialise in Electronic Music and otherworldly sounds from around the globe.",
   "slug": "bloop",
   "url": [
      "https://blooplondon.com/",
      "https://blooplondon.com/"
   ],
   "audio": "http://radio.canstream.co.uk:8058/live.mp3",
   "status": "",
   "tint": "F3FF06"
},
 {
   "name": "Netil Radio",
   "city": "London",
   "country": "England",
   "utc": "·",
   "col": 6,
   "row": 7,
   "timezone": "Europe/London",
   "lat": "51.5074",
   "lng": -0.1278,
   "about": "Community broadcasting from Hackney, London. London's community voice broadcasting live from a converted shipping container atop of Netil Market.",
   "slug": "netil-radio",
   "url": [
      "https://netilradio.com/",
      "https://netilradio.com/"
   ],
   "audio": "https://netilradio.out.airtime.pro/netilradio_a",
   "status": "",
   "tint": "AA8194"
},
 {
   "name": "Foundation FM",
   "city": "London",
   "country": "England",
   "utc": "·",
   "col": 6,
   "row": 6,
   "timezone": "Europe/London",
   "lat": "51.5074",
   "lng": -0.1278,
   "about": "With an uprising in the industry of communities trying to find safe spaces to play, create and grow, foundation.fm’s mission is to showcase the hottest emerging talent in the underground music scene led by a diverse group of women, LGTBQI+ person’s and talented creatives who support our values – with women at the forefront.",
   "slug": "foundation-fm",
   "url": [
      "https://foundation.fm/",
      "https://foundation.fm/"
   ],
   "audio": "https://streamer.radio.co/s0628bdd53/listen",
   "status": "",
   "tint": "C18DD0"
},
 {
   "name": "NTS 1",
   "city": "London",
   "country": "England",
   "utc": "·",
   "col": 6,
   "row": 5,
   "timezone": "Europe/London",
   "lat": "51.5074",
   "lng": -0.1278,
   "about": "NTS is a global family of music lovers. We strive to broadcast diverse and unique music that excites, inspires and moves you. NTS is where eclecticism is celebrated and niche music takes centre stage. It’s where passionate people, not algorithms, play exceptional music that is hard to find anywhere else. All without on-air advertising.",
   "slug": "nts-1",
   "url": [
      "https://www.nts.live/",
      "https://www.nts.live/"
   ],
   "audio": "https://stream-relay-geo.ntslive.net/stream",
   "status": "",
   "tint": "DE7A41"
},
 {
   "name": "NTS 2",
   "city": "London",
   "country": "England",
   "utc": "·",
   "col": 6,
   "row": 4,
   "timezone": "Europe/London",
   "lat": "51.5074",
   "lng": -0.1278,
   "about": "NTS is a global family of music lovers. We strive to broadcast diverse and unique music that excites, inspires and moves you. NTS is where eclecticism is celebrated and niche music takes centre stage. It’s where passionate people, not algorithms, play exceptional music that is hard to find anywhere else. All without on-air advertising.",
   "slug": "nts-2",
   "url": [
      "https://www.nts.live/",
      "https://www.nts.live/"
   ],
   "audio": "https://stream-relay-geo.ntslive.net/stream2",
   "status": "",
   "tint": "EEF566"
},
 {
   "name": "Worldwide FM",
   "city": "London",
   "country": "England",
   "utc": "·",
   "col": 6,
   "row": 3,
   "timezone": "Europe/London",
   "lat": "51.5074",
   "lng": -0.1278,
   "about": "Worldwide FM curates and champions underground music, stories and culture from around the world. We showcase diverse and emerging talent. We build connections between artists, listeners and music communities.\n\nOur mission is to support and encourage the development of music cultures that originate from local, independent and community-driven moments around the world. Our radio programming, content production and special projects explore and connect the evolving diversity of global creativity across music. Founded in 2016 by internationally renowned DJ and broadcaster Gilles Peterson, we’re an independent community of music lovers, creators and organisers in nearly every corner of the world.",
   "slug": "worldwide-fm",
   "url": [
      "https://worldwidefm.net/",
      "https://worldwidefm.net/"
   ],
   "audio": "https://worldwide-fm.radiocult.fm/stream",
   "status": "",
   "tint": "CB96B4"
},
 {
   "name": "Radio Quantica",
   "city": "Lisbon",
   "country": "Portugal",
   "utc": "·",
   "col": 6,
   "row": 2,
   "timezone": "Europe/Lisbon",
   "lat": "38.7223",
   "lng": -9.1393,
   "about": "RÁDIO QUANTICA IS A LISBON-BASED COMMUNITY RADIO STATION ESTABLISHED IN 2015, AND DEVELOPED WITH A DIVERSE GROUP OF ARTISTS AND CREWS – A SAFE HAVEN WHERE THE VOICES OF UNDERGROUND ARTISTS AND ACTIVISTS CAN BE HEARD.",
   "slug": "radio-quantica",
   "url": [
      "https://www.radioquantica.com/",
      "https://www.radioquantica.com/"
   ],
   "audio": "https://libretime.radioquantica.com/main.mp3",
   "status": "",
   "tint": "51B874"
},
 {
   "name": "Kiosk Radio",
   "city": "Brussels",
   "country": "Belgium",
   "utc": "+1",
   "col": 7,
   "row": 8,
   "timezone": "Europe/Brussels",
   "lat": "50.8503",
   "lng": 4.3517,
   "about": "Our society is increasingly dominated by mainstream culture and its industry. The current coronavirus pandemic struck a heavy blow to an already fragile counterculture ecosystem, rendering the survival of underground artists virtually impossible. In this context, we believe it is time to reimagine the role of independent online radios. Only through closer cooperation we will we be able to achieve a wider impact.",
   "slug": "kiosk-radio",
   "url": [
      "https://kioskradio.com/",
      "https://kioskradio.com/"
   ],
   "audio": "https://kioskradiobxl.out.airtime.pro/kioskradiobxl_b",
   "status": "",
   "tint": "BAD28D"
},
 {
   "name": "Radio Panik",
   "city": "Brussels",
   "country": "Belgium",
   "utc": "·",
   "col": 7,
   "row": 7,
   "timezone": "Europe/Brussels",
   "lat": "50.8503",
   "lng": 4.3517,
   "about": "Radio Panik is a free radio station that defines itself as a community radio station for expression and creation, and as a multi- and intercultural radio station. It was created in 1983 by a group of people campaigning against racism and for human rights.\n\nTheir motivations, which remain relevant today, are well summarized in its statutes:\n\n\"The association's purpose is to contribute – primarily through broadcasting – to the socio-cultural development of the population in the Brussels region. Its aim is the genuine emancipation of individuals while respecting cultural differences and democratic procedures.\"\n\nRadio Panik was therefore part of that first generation of free radio stations considered \"committed\" for their activist work promoting a critical approach to information. While its involvement at the local level, both socially and culturally, gradually became one of its priority objectives, it never lost sight of its \"generalist\" mission and remains, within an increasingly uniform media landscape, a communication tool whose marginal position fosters freedom, independence, and diversity.\n\nHaving occupied several addresses in Saint-Josse and Schaerbeek, Radio Panik has managed to reconcile local and international news, information and creation, opening up to the various communities that make Brussels a true cultural crossroads, a space \"without borders\", open to the expression of \"parallel voices\" that invite us to hear, between the airwaves, another sound of the bell.\n\nToday, Radio Panik has been supported by the Ministry of the French Community since 2006, and since 2011 has been recognized as a Continuing Education association. Since 2008 it has also benefited from the status of \"community radio station with a cultural or continuing education focus\".",
   "slug": "radio-panik",
   "url": [
      "https://www.radiopanik.org/",
      "https://www.radiopanik.org/"
   ],
   "audio": "https://streaming.domainepublic.net/radiopanik.ogg",
   "status": "",
   "tint": "7D56D3"
},
 {
   "name": "Lyl Radio",
   "city": "Lyon",
   "country": "France",
   "utc": "·",
   "col": 7,
   "row": 6,
   "timezone": "Europe/Paris",
   "lat": "45.764",
   "lng": 4.8357,
   "about": "LYL is a cultural project that has elected music as its main ethic, or paradigm. We aim at suggesting a global comprehension of the world and its cultures, through the promotion and exploration of sound. The webradio has been created for this purpose, and so gathers activists, record store owners, label founders, djs, musicians, specialists, geeks, weirdos and amateurs, who all continue to expand the scope of our project with daily broadcasts produced either in our three studios, here and there in the world or in special locations.",
   "slug": "lyl-radio",
   "url": [
      "https://lyl.live/",
      "https://lyl.live/"
   ],
   "audio": "https://icecast.lyl.live/live",
   "status": "",
   "tint": "8391B8"
},
 {
   "name": "Radio Beguin",
   "city": "Lyon",
   "country": "France",
   "utc": "·",
   "col": 7,
   "row": 5,
   "timezone": "Europe/Paris",
   "lat": "45.764",
   "lng": 4.8357,
   "about": "A 24/7 online music radio based in Lyon, showing the best of emerging artists",
   "slug": "radio-beguin",
   "url": [
      "https://radiobeguin.com/",
      "https://radiobeguin.com/"
   ],
   "audio": "https://stream.radiobeguin.com/listen/radio_b%C3%A9guin/radio.mp3",
   "status": "",
   "tint": "38D27B"
},
 {
   "name": "Radio DY10",
   "city": "Nantes",
   "country": "France",
   "utc": "·",
   "col": 7,
   "row": 4,
   "timezone": "Europe/Paris",
   "lat": "47.2184",
   "lng": -1.5536,
   "about": "A worldwide radio based in Nantes, focused on the local scene & with some guests. Balearic, tropical sounds, dance music & trippy electronic. Keep dreaming awake with us !\n\nLa musique est un art qui combine sons et silences au cours du temps. La musique appartient à la nature, et ainsi occupe l’homme depuis toujours. Elle fait partie de lui et permet l’expression individuelle ou collective de sentiments personnels ou communs.\n\nÀ l’image de la richesse du monde, la musique est comme autant d’individus liés par leurs sensibilités. Elle devient alors source de rassemblement, d’unité d’un collectif, et peut ainsi conduire au plaisir. C'est ce plaisir que nous souhaitons partager par-dessus tout.\n\nC’est ainsi que naît la passion, de l’expérience profonde et bouleversante que chacun fait de la musique. La musique, perçue comme une machine à générer des émotions se doit d’être partagée avec autant d’amour que possible … Arrive alors Radio DY10, comme une envie de diffuser ce message qui n’en est pas un : la Musique. ☯",
   "slug": "radio-dy10",
   "url": [
      "https://radiody10.com/",
      "https://radiody10.com/"
   ],
   "audio": "https://flux.radiody10.com/airtime_128",
   "status": "",
   "tint": "966BC2"
},
 {
   "name": "Radio Flouka",
   "city": "Paris",
   "country": "France",
   "utc": "·",
   "col": 7,
   "row": 3,
   "timezone": "Europe/Paris",
   "lat": "48.8566",
   "lng": 2.3522,
   "about": "FROM MASHRIQ TO MAGHREB. Radio Flouka is an online radio station and event promoter based in Paris, founded in 2018. The radio station is known for hosting a large number of DJ shows, covering a variety of musical genres, including electronic club music, hip-hop, raï, reggae, experimental music, and many more.\n\nRadio Flouka is renowned for its commitment to independent and emerging music, promoting grassroot & upcoming musicians and DJs from the Global South and the SWANA region.",
   "slug": "radio-flouka",
   "url": [
      "https://radioflouka.com/",
      "https://radioflouka.com/"
   ],
   "audio": "https://flouka.out.airtime.pro/flouka_a",
   "status": "",
   "tint": "D4B995"
},
 {
   "name": "Le Mellotron",
   "city": "Paris",
   "country": "France",
   "utc": "·",
   "col": 7,
   "row": 2,
   "timezone": "Europe/Paris",
   "lat": "48.8566",
   "lng": 2.3522,
   "about": "Like the instrument from which it takes its name, Le Mellotron is a demanding yet accessible music box, whose inexhaustible content is in perpetual motion.\n\nTo the rhythm of different eras, countries and styles, Le Mellotron explores without limits, guided by a single goal: to share with you the essence of music.",
   "slug": "le-mellotron",
   "url": [
      "https://www.lemellotron.com/",
      "https://www.lemellotron.com/"
   ],
   "audio": "https://play.radioking.io/lemellotron-stream",
   "status": "not sure whether to include or not, whether is similar enough to the others https://listen.radioking.com/radio/477719/stream/534044\n",
   "tint": "DE9A41"
},
 {
   "name": "*Duuu",
   "city": "Paris",
   "country": "France",
   "utc": "·",
   "col": 7,
   "row": 1,
   "timezone": "Europe/Paris",
   "lat": "48.8566",
   "lng": 2.3522,
   "about": "Duuu est un espace d’art radiophonique dédié à la création contemporaine, mettant en circulation les voix des artistes et des penseurs d’aujourd’hui. La structure fonctionne comme une plateforme de production et de diffusion de projets artistiques, sonores et radiophoniques.\n\nFondée en 2012 par 4 artistes (Laëtitia Badaut Haussmann, Julie Bena, Simon Nicaise et Simon Ripoll-Hurier), *Duuu est née du désir de faire entendre des situations de réflexion et de travail. Depuis sa création, elle invente ce que peut être une radio d’art aujourd’hui.\n\n*Duuu est installée dans la Folie N4 au coeur du Parc de la Villette, Paris 19ème, où elle a créé un studio d’enregistrement dédié aux artistes et à la création contemporaine.\n\n*Duuu est aussi un espace de diffusion, qui propose un flux d’émissions tout au long de l’année et un programme d’évènements publics, concerts, poésies, lectures, performances.\n*Duuu est par­te­naire de l’asso­cia­tion Souffleurs d’Images afin de proposer à l’attention du public en situation de handicap visuel un accès aux événements.\n\n*Duuu déploie ses programmes depuis des antennes en coopération avec d’autres structures artistiques, culturelles et sociales. Elle expérimente des modes de paroles et élabore des programmes pour croiser des voix et susciter des rencontres.\n\nDepuis 2019, *Duuu engage un travail d’édition et de diffusion en initiant la production de vinyles, affiches et fanzines qui accompagnent et prolongent les projets qu’elle produit et diffuse. Le site editions.duuuradio.fr réunit les éditions sonores et imprimées réalisées.",
   "slug": "duuu",
   "url": [
      "https://duuuradio.fr/",
      "https://duuuradio.fr/"
   ],
   "audio": "https://duuu.out.airtime.pro/duuu_a",
   "status": "",
   "tint": "F1D5B1"
},
 {
   "name": "Ola Radio",
   "city": "Bordeaux",
   "country": "France",
   "utc": "·",
   "col": 8,
   "row": 8,
   "timezone": "Europe/Paris",
   "lat": "44.8378",
   "lng": -0.5792,
   "about": "A diverse, multifaceted, and singular community.\nOla Radio is the Marseille-based cultural online radio specializing in electronic music and avant-garde aesthetics. It brings together over 80 residents from Marseille, France, and around the world. Established in 2019, Ola aims to unite actors from various musical scenes and provide a creative platform for emerging artists. With a diverse and sophisticated program, Ola strives to be both cutting-edge and accessible. It nurtures a diverse and unique community that grows stronger with each passing year. Always evolving, the Ola team continually explores new ways to delve into music, pushing the boundaries of sound creation, and fostering artistic audacity.",
   "slug": "ola-radio",
   "url": [
      "https://olaradio.fr/",
      "https://olaradio.fr/"
   ],
   "audio": "https://ola-radio.radiocult.fm/stream",
   "status": "",
   "tint": "F3561F"
},
 {
   "name": "Dia Radio",
   "city": "Saint-Jean-de-Luz",
   "country": "France",
   "utc": "·",
   "col": 8,
   "row": 7,
   "timezone": "Europe/Paris",
   "lat": "43.3895",
   "lng": -1.6605,
   "about": "DIA! is an independent web radio station based in the bay of Saint Jean de Luz in the Basque Country.\n\nLaunched in August 2019 on the initiative of the Moï Moï collective during the last edition of the Baleapop festival, it now has more than 50 residents. DIA! aims to become a sounding board for local energy and create emulation between the structures of Iparralde and Hegoalde in order to convey the dynamism of the region and echo it beyond our borders.\n\nA space for discussion and expression for those who frequent it, DIA! welcomes DJs, selectors, musicians, journalists, activists and free thinkers every week in a lively and harmonious atmosphere. ",
   "slug": "dia-radio",
   "url": [
      "https://www.diaradio.live/",
      "https://www.diaradio.live/"
   ],
   "audio": "https://livestream.diaradio.live/main",
   "status": "",
   "tint": "9F5B59"
},
 {
   "name": "Radio Raheem",
   "city": "Milan",
   "country": "Italy",
   "utc": "·",
   "col": 8,
   "row": 6,
   "timezone": "Europe/Rome",
   "lat": "45.4642",
   "lng": 9.19,
   "about": "Radio Raheem is a web radio located now in the iconic Museum of Design Triennale Milano. An independent digital media that, starting from music, explores the world of contemporary culture.",
   "slug": "radio-raheem",
   "url": [
      "http://www.radioraheem.it/",
      "http://www.radioraheem.it/"
   ],
   "audio": "http://radioraheem.out.airtime.pro:8000/radioraheem_a",
   "status": "",
   "tint": "3C824F"
},
 {
   "name": "Rocket Radio",
   "city": "Verona",
   "country": "Italy",
   "utc": "·",
   "col": 8,
   "row": 5,
   "timezone": "Europe/Rome",
   "lat": "45.4384",
   "lng": 10.9916,
   "about": "Rocket Radio is a community web radio devoted to music culture and promotion of independent artists. Founded in Verona, Italy, in 2014, along the years RR have become a crossroads for creative people keen to participate in a community project that supports and gives voice to emerging artists through a network of local and international partnerships. We keep our doors open to the public and to new collaborations, broadcasting original series and special in-studio events. Connecting local djs and producers to international guests, collaborating with high profile brands and festivals while supporting town based cultural projects and events: this is how we work to enhance the creative potential of our community. With two more studios, in Bologna and Milan, regular contributions from Berlin and Ibiza, and a video streaming project called RRTV, Rocket Radio channels diverse and unique music realities, exploring all the potentials of a modern web radio.",
   "slug": "rocket-radio-1",
   "url": [
      "https://rocketradiolive.com/",
      "https://rocketradiolive.com/"
   ],
   "audio": "https://n05.radiojar.com/nvvyes7gud5tv?rj-ttl=5&rj-tok=AAABhCHWLvoAQ2webGfiqIjQfA",
   "status": "",
   "tint": "B6A083"
},
 {
   "name": "Radio Relativa",
   "city": "Madrid",
   "country": "Spain",
   "utc": "·",
   "col": 8,
   "row": 3,
   "timezone": "Europe/Madrid",
   "lat": "40.4168",
   "lng": -3.7038,
   "about": "Radio Relativa presents itself as a community, independent and experimental platform dedicated to promoting and connecting diverse artists and cultural initiatives from Madrid to the world.\n\nSince its founding in 2018, our work has been to support, develop and give voice to less commercial projects and artists that star on the fringes, reflecting the broad, idiosyncratic and multi-faceted cultural and musical fabric that makes up our generation.\n\nIn a context saturated by content production, RR aims to humanize the experience of discovering and sharing culture directly and through its own protagonists.\n\nRadio Relativa operates as a non-profit association, backed by the support of numerous national and international cultural promoters, as well as our loyal radio friends. We surround ourselves with hundreds of music lovers and cultural pioneers, and thank to all who support us.\n\nIf you like the content and want to keep the station alive, you can make a one-off donation or become a member of Relativa Family from €3.5/month. Any help is much appreciated. Money will be dedicated to supporting radio work in general, including web/software/studio maintenance. You can check what you can get from becoming a Relativa member [].\n\nTo participate at Radio Relativa you can do so our radio residencies, designed for long-term projects that take place over a whole season (approximately 5 months) or as a guest. We are open to all kinds of artistic and cultural proposals. For any queries or suggestions, you can contact us here: info@radiorelativa.eu\n\nRadio Relativa, Madrid's very own experimental radio.\nC/ Monederos 12, bajo 4\n28026 Madrid\nEspaña",
   "slug": "radio-relativa",
   "url": [
      "https://radiorelativa.eu/",
      "https://radiorelativa.eu/"
   ],
   "audio": "https://streamer.radio.co/sd6131729c/listen",
   "status": "",
   "tint": "82B759"
},
 {
   "name": "Tesla FM",
   "city": "Barcelona",
   "country": "Spain",
   "utc": "·",
   "col": 8,
   "row": 2,
   "timezone": "Europe/Madrid",
   "lat": "41.3851",
   "lng": 2.1734,
   "about": "An on-line radio for culturally restless people looking for non-commercial music, experimentation and countercultural information. From experimental electronics to electroacoustic and sound art; from improvisation to jazz and classical music; from old melodies from the 19th century to current compositions; from unknown artifacts from the 80s to sounds inspired by that decade; cultural archives..., an eclectic journey.",
   "slug": "tesla-fm",
   "url": [
      "https://teslafm.net/",
      "https://teslafm.net/"
   ],
   "audio": "https://tesla1.teslafm.net:8443/tesla1",
   "status": "",
   "tint": "AF676D"
},
 {
   "name": "Ness Radio",
   "city": "Marrakesh",
   "country": "Morocco",
   "utc": "·",
   "col": 8,
   "row": 1,
   "timezone": "Africa/Casablanca",
   "lat": "31.6295",
   "lng": -7.9811,
   "about": "Ness Radio is first and foremost a desire, not to say a need: to offer alternative music programming to share, introduce, and foster connections. It was with this idea in mind that Younes and Omar created Ness Radio in 2008. The former, a French-Moroccan living in Marrakech, and the latter, a French-Algerian living in Paris, lamented that \"alternative\" or \"underground\" musical styles remain underrepresented in Morocco and, more broadly, in the world. It was this observation that led them to embark on the Ness Radio adventure, without really knowing where it would take them.\n\nMany years later, Ness Radio has far surpassed its initial ambitions and broadcasts its eclectic programming to an ever-growing audience from all corners of the globe. Alongside Younes and Omar, nearly 30 passionate individuals have now joined the Ness Crew : DJs, writers, programmers, presenters… A wealth of talent and enthusiasm tirelessly explores the latest trends in house, electro, jazz, soul, and hip-hop, keeping a close eye on the newest releases from the most prestigious labels, and diligently (re)discovering forgotten gems to share with you. With members based in Marrakech, London, Paris, Vienna, Brussels, and even California, the Ness Crew is now a true dream team, bringing together both big names in today's independent music scene and passionate individuals, all eager for the freshest sounds.\n\nToday a music blog and web radio with a cutting-edge program , also available on TuneIn , Radio Garden , and iTunes Radio, Ness Radio is proud to be one of the new faces of the music experience in the digital age. With a focus on quality and a strong editorial line, Ness Radio brings together music lovers from all over the world. Free from advertising, it champions respect for both listeners and artists by purchasing their original tracks to introduce them to a new audience. Ness Radio exists only thanks to the passionate individuals who dedicate themselves to keeping it alive. Beyond musical and geographical boundaries, Ness Radio's primary goal is to unite music lovers around a carefully curated selection of tracks, both old and new, well-known and rare, in their original versions or rearranged. Listen, comment, participate: sharing and exchange are the cornerstones of Ness Radio!\n\nDisclaimer\nNess Radio is a non-commercial radio station dedicated to promoting and broadcasting talented artists through a carefully curated musical selection. We want to emphasize that we do not generate any profit from the music we broadcast. Every track played on our platform is accompanied by all relevant information and credits to ensure proper recognition of the artists and rights holders.\n\nOur primary goal is to broaden artists' reach, raise awareness of their work, and stimulate interest in their music. We firmly believe in promoting often-overlooked talent and providing a platform for voices that might otherwise go unnoticed.\n\n",
   "slug": "ness-radio",
   "url": [
      "http://nessradio.com/",
      "http://nessradio.com/"
   ],
   "audio": "https://radio.nessradio.net:8212/nessradio",
   "status": "",
   "tint": "C36D99"
},
 {
   "name": "Radio Aparat",
   "city": "Belgrade ",
   "country": "Serbia",
   "utc": "·",
   "col": 9,
   "row": 6,
   "timezone": "Europe/Belgrade",
   "lat": "44.7866",
   "lng": 20.4489,
   "about": "radioAPARAT is an internet radio station founded in November 2016 in the Kolektiv gallery space on Karađorđeva Street in Belgrade's Savamala district. Since January 2020, it has been broadcasting its programme from Drinčićeva Street in Dorćol.\nThe programme consists of socially-engaged, music, cultural-educational and entertainment programmes, which you can listen to on demand at https://www.mixcloud.com/RADIO_APARAT/\n\nAddress: Drinčićeva 20, Belgrade",
   "slug": "radio-aparat",
   "url": [
      "https://radioaparat.rs/",
      "https://radioaparat.rs/"
   ],
   "audio": "https://stream4.rcast.net/72355/",
   "status": "",
   "tint": "D12B6B"
},
 {
   "name": "The Lake Radio",
   "city": "Copenhagen",
   "country": "Denmark",
   "utc": "·",
   "col": 9,
   "row": 5,
   "timezone": "Europe/Copenhagen",
   "lat": "55.6761",
   "lng": 12.5683,
   "about": "The Lake is a place for music and sounds. The radio stream runs at all hours of the day and is randomized. No one knows what The Lake plays next.\n\n",
   "slug": "the-lake-radio",
   "url": [
      "https://thelakeradio.com/",
      "https://thelakeradio.com/"
   ],
   "audio": "https://thelakeradio.radioca.st/stream",
   "status": "",
   "tint": "DF1A80"
},
 {
   "name": "Operator Radio",
   "city": "Rotterdam",
   "country": "Netherlands",
   "utc": "·",
   "col": 9,
   "row": 4,
   "timezone": "Europe/Amsterdam",
   "lat": "51.9244",
   "lng": 4.4777,
   "about": "Operator is an online station and cultural platform spotlighting alternative music and underrepresented scenes in Rotterdam. Broadcasting from its blue shipping container studio since 2017, it runs a mix of live shows, talks, and curated programs featuring local and international artists. The station focuses on talent development, collaboration, and community-driven culture, with an emphasis on safe, inclusive creative spaces.",
   "slug": "operator-radio",
   "url": [
      "https://www.operator-radio.com/",
      "https://www.operator-radio.com/"
   ],
   "audio": "https://origin.streamnerd.nl/operator/operator/icecast.audio",
   "status": "",
   "tint": "F88FB4"
},
 {
   "name": "Callshop Radio",
   "city": "Düsseldorf",
   "country": "Germany",
   "utc": "·",
   "col": 9,
   "row": 2,
   "timezone": "Europe/Berlin",
   "lat": "51.2277",
   "lng": 6.7735,
   "about": "Callshop Radio is an independently operating community radio station based in Düsseldorf, Leipzig and Paris. Focusing on local artists of each city we operate in, we try to leave rules and boundaries behind. This way we give our guests the maximum freedom to express themselves as they take us along on their journey. Experience more than 40 residents as well as our guests live Monday through Friday evenings or dig into the happenings of the last month whenever you want. Get in touch for ideas, collaborations and inquiries.",
   "slug": "callshop-radio",
   "url": [
      "https://callshopradio.com/",
      "https://callshopradio.com/"
   ],
   "audio": "https://icecast.callshopradio.com/callshopradio",
   "status": "",
   "tint": "8B55FF"
},
 {
   "name": "Dublab DE",
   "city": "Cologne",
   "country": "Germany",
   "utc": "·",
   "col": 10,
   "row": 6,
   "timezone": "Europe/Berlin",
   "lat": "50.9375",
   "lng": 6.9603,
   "about": "dublab promotes curiosity, experimentation, inclusivity, and connection.\ndublab is a non-profit radio station founded in Los Angeles in 1999, being one of the defining voices of online radio as a medium ever since. dublab DE is the German branch of dublab.com and has been broadcasting from Cologne since 2015. Through our radio broadcasts, myriad public events and cultural projects, dublab has fostered a community in Cologne and around the world that places creativity, enrichment, diversity, inclusivity and equality as valued priorities. Keeping music as the organization’s main focus, the dublab community continues to grow and use its voice to bring positive change.\n\ndublab’s airwaves allow space for diverse styles, eras, genres and music cultures to co-exist, and our DJs are empowered to freely play sounds they are passionate about, making each show distinct. We take pride in featuring a genre bending music policy, and partner with likeminded initiatives, record shops, labels or festivals.\n\nCommunity radio projects have a special place in our heart, and we have been fortunate to realize a few of those (1/2/3/4) over the last years. Besides our musical programming we occasionally host educational programs related to participation, public space, art or creative processes.",
   "slug": "dublab-de",
   "url": [
      "https://dublab.de/",
      "https://dublab.de/"
   ],
   "audio": "https://dublabde.out.airtime.pro/dublabde_a",
   "status": "",
   "tint": "9E7FE1"
},
 {
   "name": "Cashmere Radio",
   "city": "Wedding",
   "country": "Germany",
   "utc": "·",
   "col": 10,
   "row": 4,
   "timezone": "Europe/Berlin",
   "lat": "52.5429",
   "lng": 13.369,
   "about": "Celebrating community and experimental broadcasting live aus dem Wedding",
   "slug": "cashmere-radio",
   "url": [
      "https://cashmereradio.com/",
      "https://cashmereradio.com/"
   ],
   "audio": "https://cashmereradio.out.airtime.pro/cashmereradio_a",
   "status": "not a 24/7 stream",
   "tint": "5D7891"
},
 {
   "name": "THF Radio",
   "city": "Berlin",
   "country": "Germany",
   "utc": "·",
   "col": 10,
   "row": 3,
   "timezone": "Europe/Berlin",
   "lat": "52.52",
   "lng": 13.405,
   "about": "THF Radio is the radio station in the former porters house at Tempelhof Airport. Experiment room and mouthpiece for citizens, artists, musicians, creatives and initiatives. We are part of the TORHAUS at Tempelhof Airport. THF Radio is intended as an experimental forum: We want to address the airport and its history and give artists in the city a platform.",
   "slug": "thf-radio",
   "url": [
      "https://thfradio.de/",
      "https://thfradio.de/"
   ],
   "audio": "https://thf-radio-7ec0e6ee.radiocult.fm/stream",
   "status": "",
   "tint": "3E8930"
},
 {
   "name": "Refuge Worldwide",
   "city": "Berlin",
   "country": "Germany",
   "utc": "·",
   "col": 10,
   "row": 2,
   "timezone": "Europe/Berlin",
   "lat": "52.52",
   "lng": 13.405,
   "about": "Refuge Worldwide commits to striving for a gender balanced station, representative of minorities. The station is focused on community-building and creating space / visibility for underrepresented artists.",
   "slug": "refuge-worldwide",
   "url": [
      "https://refugeworldwide.com/",
      "https://refugeworldwide.com/"
   ],
   "audio": "https://streaming.radio.co/s3699c5e49/listen",
   "status": "",
   "tint": "D6E2FB"
},
 {
   "name": "[sic]nal",
   "city": "Hamburg",
   "country": "Germany",
   "utc": "·",
   "col": 11,
   "row": 8,
   "timezone": "Europe/Berlin",
   "lat": "53.5511",
   "lng": 9.9937,
   "about": "[sic]nal is an online radio and platform for contemporary music live from the bunker in Hamburg. It aims at building an community-oriented infrastructure for fostering and interconnecting artists and music professionals.\n\nOur Mission:\nIndependent, online radio maintaining DIY enthusiasm with the quality of FM.\nAmplifying the sounds and all that Hamburg offers through a programme of music, talk shows and takeovers.\nDelivering a diverse and curated radio experience from a variety of cultural enthusiasts, DJs and musicians.\nBuilding a community-oriented infrastructure as starting point for new formats, mentorings and alliances.\nIn which our present is inscribed and strengthening the musical communities behind them.",
   "slug": "sicnal",
   "url": [
      "https://sicnal.de/",
      "https://sicnal.de/"
   ],
   "audio": "https://v2202011132974131848.ultrasrv.de:8000/radio.mp3",
   "status": "not a 24/7 stream. website active, stream link but no sound",
   "tint": "66A6DF"
},
 {
   "name": "Radio Kapital",
   "city": "Warsaw",
   "country": "Poland",
   "utc": "·",
   "col": 11,
   "row": 7,
   "timezone": "Europe/Warsaw",
   "lat": "52.2297",
   "lng": 21.0122,
   "about": "Radio Kapitał is a social internet radio station that broadcasts 24 hours a day, 7 days a week. It is a modern platform for social and artistic dialogue, presenting original programs about culture, society, history, literature, art and music in various genres. Radio Kapitał is also a response to the need to create an independent and non-commercial space of expression, grassroots activity - not for profit, but for personal satisfaction and social benefit. It is also an innovative nationwide cultural project, which, based on the rich tradition of radio broadcasting, at the same time sets new horizons for the radio medium.",
   "slug": "radio-kapital",
   "url": [
      "https://radiokapital.pl/",
      "https://radiokapital.pl/"
   ],
   "audio": "https://radiokapitalpl.out.airtime.pro/radiokapitalpl_a",
   "status": "",
   "tint": "878A47"
},
 {
   "name": "Radio Rudina",
   "city": "Vienna",
   "country": "Austria",
   "utc": "·",
   "col": 11,
   "row": 5,
   "timezone": "Europe/Vienna",
   "lat": "48.2082",
   "lng": 16.3738,
   "about": "A continuous radio stream, broadcasting from our studio in Vienna with rotating shows, changing moods and contributions from across the Radio Rudina community. Whether you drop in for a moment or stay all day, the programmes invite you to listen and connect.",
   "slug": "radio-rudina",
   "url": [
      "https://www.radiorudina.com/",
      "https://www.radiorudina.com/"
   ],
   "audio": "https://azuracast.datea.services:8000/radio.mp3",
   "status": "",
   "tint": "A3A425"
},
 {
   "name": "Loose Antenna",
   "city": "Lausanne",
   "country": "Switzerland",
   "utc": "·",
   "col": 11,
   "row": 4,
   "timezone": "Europe/Zurich",
   "lat": "46.5197",
   "lng": 6.6323,
   "about": "In accordance with the long heritage of pirate and community radio, Loose Antenna is a polyphonic platform, giving a voice to otherwise lesser-represented minorities, alternate and/or marginalized people. It wages a war on stereotypes while championning plural manifestations.",
   "slug": "loose-antenna",
   "url": [
      "https://looseantenna.fm/",
      "https://looseantenna.fm/"
   ],
   "audio": "https://stream.looseantenna.fm:8000/default.mp3",
   "status": "",
   "tint": "636ED0"
},
 {
   "name": "Radio Bollwerk",
   "city": "Bern",
   "country": "Switzerland",
   "utc": "·",
   "col": 11,
   "row": 2,
   "timezone": "Europe/Zurich",
   "lat": "46.948",
   "lng": 7.4474,
   "about": "A community radio station with avant-garde club music in its DNA. With satellites, but on a wide variety of stages and in as many genres as possible.\n\nMaking quality audible, fanning out the spectrum of underground music, music on the net – 24/7. That's Radio Bollwerk.\nA community radio station with avant-garde club music in its DNA, overflowing onto different scenes to capture the depth of underground music.",
   "slug": "radio-bollwerk",
   "url": [
      "https://www.radio-bollwerk.ch/",
      "https://www.radio-bollwerk.ch/"
   ],
   "audio": "https://radio.radio-bollwerk.ch/listen/radio_bollwerk/radio.mp3",
   "status": "",
   "tint": "D1D58D"
},
 {
   "name": "Periszkóp Radio",
   "city": "Budapest",
   "country": "Hungary",
   "utc": "·",
   "col": 12,
   "row": 8,
   "timezone": "Europe/Budapest",
   "lat": "47.4979",
   "lng": 19.0402,
   "about": "About us | Periszkóp Radio was launched in 2006 in downtown Pécs as a small community radio station broadcasting on terrestrial frequencies. Its primary goal is to represent peripheral music genres. Since 2011, it has been broadcasting exclusively online. Currently, our linear, hourly themed programs can be listened to in a 24-hour broadcast stream. The radio station is operated by the Moiré Cultural Association in cooperation with the Department of Electronic Music and Media at the Faculty of Arts of the University of Pécs. The logo was designed by Csató Csenge. The thematic programs are edited by Ferenci Erazmus. The website is coded by Kovács Balázs. | periszkóp fb group | our email address",
   "slug": "periszkop-radio",
   "url": [
      "http://periszkopradio.hu/periweb/?lang=en/",
      "http://periszkopradio.hu/periweb/?lang=en/"
   ],
   "audio": "https://mumia.art.pte.hu:8443/;stream.mp3",
   "status": "",
   "tint": "524DB2"
},
 {
   "name": "Lahmacun",
   "city": "Budapest",
   "country": "Hungary",
   "utc": "·",
   "col": 12,
   "row": 7,
   "timezone": "Europe/Budapest",
   "lat": "47.4979",
   "lng": 19.0402,
   "about": "Lahmacun.hu is an online music & more radio from Budapest.",
   "slug": "lahmacun",
   "url": [
      "https://lahmacun.hu/",
      "https://lahmacun.hu/"
   ],
   "audio": "https://streaming.lahmacun.hu/radio/8000/radio.mp3",
   "status": "",
   "tint": "B4BB25"
},
 {
   "name": "Retreat Radio",
   "city": "Malmö",
   "country": "Sweden",
   "utc": "·",
   "col": 12,
   "row": 6,
   "timezone": "Europe/Stockholm",
   "lat": "55.605",
   "lng": 13.0038,
   "about": "Retreat Radio is an independent, non-commercial radio station, broadcasting from Malmö, Scandinavia and beyond.",
   "slug": "retreat-radio",
   "url": [
      "https://www.retreatradio.net/",
      "https://www.retreatradio.net/"
   ],
   "audio": "https://retreatradio.out.airtime.pro/retreatradio_b",
   "status": "",
   "tint": "ADC5FF"
},
 {
   "name": "103 Инфо ",
   "city": "Skopje",
   "country": "Macedonia",
   "utc": "·",
   "col": 12,
   "row": 5,
   "timezone": "Europe/Skopje",
   "lat": "41.9981",
   "lng": 21.4254,
   "about": "Music Radio - Kanal 103 is the only alternative (non-commercial) radio station in Macedonia which have achieved a cult status and a passionately devoted following among the audience. Transmitting since 1991, its mission is to promote avant-garde music and ideas, and is responsible for some of the most important cultural transformations in the region.",
   "slug": "kanal-103",
   "url": [
      "http://www.kanal103.com.mk/",
      "http://www.kanal103.com.mk/"
   ],
   "audio": "https://radiostream.neotel.mk/kanal103",
   "status": "",
   "tint": "AC2C72"
},
 {
   "name": "20ft Radio",
   "city": "Kiev",
   "country": "Ukraine",
   "utc": "·",
   "col": 12,
   "row": 4,
   "timezone": "Europe/Kiev",
   "lat": "50.4501",
   "lng": 30.5234,
   "about": "Kyiv-based radio station that broadcasts music from the former ribbon-weaving factory “Strichka”. Since 2017 we recorded over 1000 mixes in different genres and moods. Spreading of music and information is carried out for informational purposes. 20ft Radio is non-commercial and free from advertising. Since 2017 we’ve been sharing music from DJs, selectors and artists from Ukraine and all over the world. Running by a small team of enthusiasts led by the idea of creating a platform for self-expression of those who are in love with music.\n\nWe take care of information hygiene & cleanliness of the audio space. 20ft Radio is ad-free and dependent on donations and the support of its listeners.",
   "slug": "20ft-radio",
   "url": [
      "https://www.20ftradio.net/",
      "https://www.20ftradio.net/"
   ],
   "audio": "https://20ft-radio.radiocult.fm/stream",
   "status": "",
   "tint": "818CAD"
},
 {
   "name": "Tīrkultūra ",
   "city": "Riga",
   "country": "Latvia",
   "utc": "+2",
   "col": 13,
   "row": 8,
   "timezone": "Europe/Riga",
   "lat": "56.9496",
   "lng": 24.1052,
   "about": "Tīrkultūra is an interdisciplinary contemporary culture platform working mainly through the medium of sound. that is a listener-powered, non-commercial, and non-profit online radio station, based in Riga, Latvia.\n\nTīrkultura started in 2015 as a radio show founded by fashion designer Rolands Pēterkops, sound artist Reinis Semēvics and musician, composer Jānis Šipkēvics and from March 2020 became available as an independent and listener-supported 24/7 radio station, which means no ads or sponsored content.\n\nTīrkultura does not belong to any existing public radio networks, but you can hear us on LR3 weekly as a Tirkultūra Radio Show. Their streaming radio platform is available live, free of charge, over the web, 24/7. You can tune-in anytime, and find unexpected sounds, curated mix-tapes, poetry readings, sound collages, curated interviews with 21st-century composers, artists, and personalities from contemporary art, field recordings, and live streams from Tirkultūra and our partner’s events, etc.\n\nTīrkultūra covers a broad spectrum of music genres – classical, electronic, spoken-word, soundscapes, contemporary, rap, ambient, rock, experimental, folk, drone. Their mission is to enrich and inspire the development of culture in latvia and showcase the art of sound in the context of contemporary art.\n\nTirkultūra is also recognised as a producer of live visual sound sessions in the form of white wall concert sessions presented at partnership venues in Latvia, as well as a biannual series of unexpected sources. both events aim to merge visual art with the art of sound opening up the platform to local and international artists.",
   "slug": "tirkultura",
   "url": [
      "https://www.tirkultura.lv/",
      "https://www.tirkultura.lv/"
   ],
   "audio": "https://s3.radio.co/s216811754/listen",
   "status": "",
   "tint": "F3C81C"
},
 {
   "name": "Palanga Street Radio",
   "city": "Vilnius ",
   "country": "Lithuania ",
   "utc": "·",
   "col": 13,
   "row": 7,
   "timezone": "Europe/Vilnius",
   "lat": "54.6872",
   "lng": 25.2797,
   "about": "PSR is an independent community radio based in Vilnius, Lithuania. Established in 2017 in a flat on Palanga Street, we embraced a DIY philosophy that continues to inspire us to this day and fuels the engagement of our community. As a voluntary team we strive to foster a safe and inclusive environment for the creation of free cultural expression locally and online.\n\nThe main focus of the radio is music and sound art, as well as interviews and talk shows exploring different cultural and artistic topics. Over the years the name Palanga, a nostalgic seaside resort on the Baltic coast, has been literally embraced through resort aesthetics and amateur artworks that have become the known visual identity of PSR.\n\nThroughout the life of PSR, we have created over 100 public live-streamed events ranging music performances, roller discos, daytime raves and mini-FM gatherings, as well as collaborated with artist projects in Lithuania and abroad.",
   "slug": "palanga-street-radio",
   "url": [
      "https://palanga.live/",
      "https://palanga.live/"
   ],
   "audio": "https://stream.palanga.live/palanga128.mp3",
   "status": "",
   "tint": "C72BC4"
},
 {
   "name": "Radio alHara",
   "city": "Bethlehem",
   "country": "Palestine, State Of",
   "utc": "·",
   "col": 13,
   "row": 6,
   "timezone": "Asia/Hebron",
   "lat": "State Of\"",
   "lng": 31.7054,
   "about": "Radio Alhara emerges in a time of isolation and boredom, a time where the future of the world as we know it remains unknown.",
   "slug": "radio-alhara",
   "url": [
      "https://www.radioalhara.net/",
      "https://www.radioalhara.net/"
   ],
   "audio": "https://n12.radiojar.com/78cxy6wkxtzuv?1650173445=&rj-tok=AAABhCHWLZsAq4KnIDjI52_CAA&rj-ttl=5",
   "status": "",
   "tint": "A1589F"
},
 {
   "name": "Pan African Space Station",
   "city": "Johannesburg",
   "country": "South Africa",
   "utc": "·",
   "col": 13,
   "row": 10,
   "timezone": "Africa/Johannesburg",
   "lat": "-26.2041",
   "lng": 28.0473,
   "about": "Founded by Chimurenga in collaboration with musician and composer Neo Muyanga in 2008, the Pan African Space Station (PASS) is a periodic, pop-up live radio studio; a performance and exhibition space; a research platform and living archive, as well as an ongoing, internet based radio station.\n\nWorking in transitory spaces and at the intersections between different fields, organising sound, music and words into new forms of knowledge, PASS is a machine for travelling at the speed of thought – it borrows its slogan “There are other worlds out there they never told you about” from the philosopher, composer and bandleader Sun Ra.\n\nPASS seeks to challenge the concepts this present has of Africa and to excite new transitory and transient communities with each journey, bringing focus to collective experience and targeting an investigation into how we locate ourselves and how we mediate our human and historic commonality. Method\n\nTaking advantage of both the intimacy and unpredictability of the live studio and the reach and scope of the internet, PASS seeks to forge new collaborations across time and space. The live studio becomes one for entangling different realities and experiences – with participants and listeners prompted by ideas of utopia and oppression, history and the future, borders, time, art and technology, and, more importantly, community. A combination of live conversations, travelogues, discussion sessions and performances, together with exhibitions of new and archival material interrogate our shared histories.\n\nPASS landings may be connected to larger events – festivals, conferences, exhibitions – or as independent interventions. The programming of each pop-up studio is curated by Chimurenga in collaboration with local cultural producers and thinkers.\n\nPASS has landed in and transmitted from Johannesburg, Paris, London, New York, Lagos, Amsterdam, Helsinki, Cairo, Dakar, Mexico City and Harare featuring over 150 artists, musicians, writers, activists and more.\n\nAt the end of each live event, recordings are recirculated via the livestream, and uploaded as podcasts to Chimurenga’s Mixcloud page, culminating in an ongoing archive of conversations and experiences. Thus, through a single event, the PASS pop-up studio aims to bring together the processes of creation and production; documentation and archiving, and, finally, dissemination and broadcasting.\n\nOther PASS projects include a series of intimate performance-lectures titled “Stories About Music in Africa”, and stand-alone live events featuring the likes of Floating Points, Ayetoro, Studio Kabako, Cindy Blackman, Anthony Joseph, Philip Tabane, Georgia Anne Muldrow, Toumani Diabate, Netsayi and many, many more.",
   "slug": "pan-african-space-station",
   "url": [
      "https://panafricanspacestation.org.za/",
      "https://panafricanspacestation.org.za/"
   ],
   "audio": "https://pass.out.airtime.pro/pass_a",
   "status": "",
   "tint": "B26A0B"
},
 {
   "name": "Ida Radio",
   "city": "Helsinki",
   "country": "Finland",
   "utc": "·",
   "col": 13,
   "row": 4,
   "timezone": "Europe/Helsinki",
   "lat": "60.1699",
   "lng": 24.9384,
   "about": "IDA is an online community radio based in Tallinn & Helsinki.",
   "slug": "ida-radio-helsinki",
   "url": [
      "https://idaidaida.net/",
      "https://idaidaida.net/"
   ],
   "audio": "https://broadcast.idaidaida.net:8000/stream",
   "status": "",
   "tint": "9F699E"
},
 {
   "name": "Ida Radio",
   "city": "Tallinn",
   "country": "Estonia",
   "utc": "·",
   "col": 13,
   "row": 3,
   "timezone": "Europe/Tallinn",
   "lat": "59.437",
   "lng": 24.7536,
   "about": "IDA is an online community radio based in Tallinn & Helsinki.",
   "slug": "ida-radio-tallinn",
   "url": [
      "https://idaidaida.net/",
      "https://idaidaida.net/"
   ],
   "audio": "https://broadcast.idaidaida.net:8000/stream",
   "status": "Same as above",
   "tint": "676FE1"
},
 {
   "name": "Stegi Radio (A)",
   "city": "Athens",
   "country": "Greece",
   "utc": "·",
   "col": 14,
   "row": 8,
   "timezone": "Europe/Athens",
   "lat": "37.9838",
   "lng": 23.7275,
   "about": "movement radio is an international online radio station based in Athens. It explores the cross-cultural interactions, political and theoretical discourses and reflections of movement of people from the Mediterranean and beyond, through a series of commissioned pieces, thematic mixtapes, interviews, DJ sets and more. STEGI.RADIO is Onassis Stegi’s online radio station, broadcasting 24 hours a day, 7 days a week. Based in Athens but looking beyond geographical borders and boundaries, STEGI.RADIO focuses on musical and cultural communities and music creation; it seeks novel ideas and sounds that reflect the new musical production as well as its historical course, creating an ever-expanding network between the cities of the Mediterranean and the rest of the globe.\n\nThe station curates Onassis Stegi’s musical activities (the festivals TAKEOVER and Borderline) and reaches out into the city with events, talks, and workshops. At the same time, it continues research into the musical and cultural movements of the Mediterranean, traveling across an imaginary archipelago that reaches beyond geography and chronology.",
   "slug": "stegi-radio-a",
   "url": [
      "https://stegi.radio/",
      "https://stegi.radio/"
   ],
   "audio": "https://movementathens.out.airtime.pro/movementathens_a",
   "status": "",
   "tint": "80C175"
},
 {
   "name": "Cannibal Radio",
   "city": "Athens",
   "country": "Greece",
   "utc": "·",
   "col": 14,
   "row": 6,
   "timezone": "Europe/Athens",
   "lat": "37.9838",
   "lng": 23.7275,
   "about": "Cannibal Radio is an internet-based radio station rooted in Athens, Greece, spotlighting the underground electronic music scene since 2009.\nIt offers a blend of live DJ sets, exclusive interviews, and curated playlists spanning genres like techno, house, and drum and bass, connecting listeners with the pulsating heart of Athens’ electronic culture.",
   "slug": "cannibal-radio",
   "url": [
      "http://cannibalradio.com/",
      "http://cannibalradio.com/"
   ],
   "audio": "https://rdst.win:48238/stream",
   "status": "Working website but broken audio link",
   "tint": "FF366F"
},
 {
   "name": "Fade Radio",
   "city": "Athens",
   "country": "Greece",
   "utc": "·",
   "col": 14,
   "row": 5,
   "timezone": "Europe/Athens",
   "lat": "37.9838",
   "lng": 23.7275,
   "about": "FADE RADIO IS A MULTICULTURAL COMMUNITY OF LIKE-MINDED INDIVIDUALS WHO ARE PASSIONATE FOR ALL GENRES OF MUSIC.\n‍\nWE FOCUS ON SHOWCASING THE VARIETY OF ART FORMS THROUGH MUSIC SHOWS, PODCASTS, ONLINE EXHIBITIONS AND EVENTS.\n‍\nTHE PURPOSE OF THIS PLATFORM IS TO COLLECT AN ARCHIVE OF MUSIC AND ARTS DEDICATED TO SUPPORTING\nINDEPENDENT ARTISTS. ​\n",
   "slug": "fade-radio",
   "url": [
      "https://www.fade.radio/",
      "https://www.fade.radio/"
   ],
   "audio": "https://n02.radiojar.com/072mdmpbfq8uv?1650262434=&rj-tok=AAABhCHWLZ4ACLCFTyyawUpmVg&rj-ttl=5",
   "status": "",
   "tint": "8C96AE"
},
 {
   "name": "Paranoise Radio",
   "city": "Thessaloniki",
   "country": "Greece",
   "utc": "·",
   "col": 14,
   "row": 4,
   "timezone": "Europe/Athens",
   "lat": "40.6401",
   "lng": 22.9444,
   "about": "OUR STORY\nTHESSALONIKI, GREECE 2008\nA group of friends, university students back then, start a pirate radio. A lone computer streaming 24/7 on a shoutcast server. Residents take over streaming from their home. More locals and non locals get involved with radio DJs broadcasting from all major Greek cities.\n\nFor the next decade, Paranoise will evolve in a reference for forward thinking music in Greece, following closely the underground currents across the world , exposing our audience to then unknown genres like dubstep & footwork. We also have been throwing parties and events in Thessaloniki, Athens and Xanthi.\n\nINSANE IN THE BRAIN DRAIN\nFollowing the Greek brain drain, a lot of our residents spread across Europe, adding cities like Copenhagen, Brussels, Manchester, Barcelona and Zurich in our broadcasting locations\n\nEMBRACING THE GLOBAL UNDERGROUND\nSince 2020, we actively started to approach more non-greek DJs and initiatives for a slot in our schedule, with the ambition to evolve in a truly international collective.",
   "slug": "paranoise-radio",
   "url": [
      "https://www.paranoiseradio.com/",
      "https://www.paranoiseradio.com/"
   ],
   "audio": "https://paranoisewebcast.radioca.st/stream",
   "status": "",
   "tint": "66C156"
},
 {
   "name": "Teder FM",
   "city": "Tel Aviv",
   "country": "Israel",
   "utc": "·",
   "col": 14,
   "row": 3,
   "timezone": "Asia/Jerusalem",
   "lat": "32.0853",
   "lng": 34.7818,
   "about": "This is where it all began. Tedar is an internet radio station that was founded in 2010 and landed at Beit Romano in 2016 after a whirlwind wander around the city. The radio is broadcast live to the Tedar plaza, and you can listen throughout Beit Romano every day or here on the website.",
   "slug": "teder-fm",
   "url": [
      "https://www.teder.fm/",
      "https://www.teder.fm/"
   ],
   "audio": "https://storage.googleapis.com/teder/2025/02/22.02.25_-_ziv.mp3",
   "status": "The audio looks to rotate through mixes as opposed to a stream",
   "tint": "9ED6A3"
},
 {
   "name": "Radio.Syg.Ma",
   "city": "Moscow",
   "country": "Russia",
   "utc": "+3",
   "col": 15,
   "row": 8,
   "timezone": "Europe/Moscow",
   "lat": "55.7558",
   "lng": 37.6173,
   "about": "radio.syg.ma is a curated label and broadcasting platform with mixes and podcasts contributed by independent musicians, sound artists and communities.",
   "slug": "radio-syg-ma",
   "url": [
      "https://radio.syg.ma/",
      "https://radio.syg.ma/"
   ],
   "audio": "https://radio.syg.ma/audio",
   "status": "",
   "tint": "62F593"
},
 {
   "name": "Mutant Radio",
   "city": "Tbilisi",
   "country": "Georgia",
   "utc": "+4",
   "col": 16,
   "row": 8,
   "timezone": "Asia/Tbilisi",
   "lat": "41.7151",
   "lng": 44.8271,
   "about": "Mutant Radio is a community platform for music and culture, streaming everything from mixes and live performances to interviews, talks, and educational shows. It’s a space where artists, DJs, and cultural voices come together to share sounds, ideas, and stories.\n\nHome to more than 90 residents and 50 weekly guests, Mutant Radio thrives on collaborations with festivals, labels, record stores, and cultural spaces worldwide. \n\nWhat makes it unique is a fully equipped studio caravan housed at a former electro station in Tbilisi - a bar, cultural venue, and broadcast hub that also hosts events, exhibitions, and workshops.\n\nSince April 2025, Mutant Radio has expanded to Berlin with a compact studio, opening fresh connections for local and international communities.",
   "slug": "mutant-radio",
   "url": [
      "https://mutantradio.net/",
      "https://mutantradio.net/"
   ],
   "audio": "https://listen.radioking.com/radio/282820/stream/328621",
   "status": "",
   "tint": "993262"
},
 {
   "name": "Hanoi Community Radio",
   "city": "Hanoi",
   "country": "Vietnam",
   "utc": "+7",
   "col": 16,
   "row": 10,
   "timezone": "Asia/Ho_Chi_Minh",
   "lat": "21.0285",
   "lng": 105.8542,
   "about": "Hà Nội Community Radio is established to  bring communities together. With shows from local artists', musicians and creatives.",
   "slug": "hanoi-community-radio",
   "url": [
      "https://www.hanoicommunityradio.com/",
      "https://www.hanoicommunityradio.com/"
   ],
   "audio": "https://ha-noi-community-radio.radiocult.fm/stream\n",
   "status": "",
   "tint": "94A9B5"
},
 {
   "name": "Norrm Radio",
   "city": "Bandung",
   "country": "Indonesia",
   "utc": "+7",
   "col": 17,
   "row": 10,
   "timezone": "Asia/Jakarta",
   "lat": "-6.9175",
   "lng": 107.6191,
   "about": "Norrm Radio exists to explore, curate, communicate and define our contemporary alternative culture and identity. A platform for creating networks through music; a place for discussion, promoting art and culture — Broadcast diverse music, the unique art, and culture that grew out of our environment and its surroundings",
   "slug": "norrm-radio",
   "url": [
      "https://www.norrm.com/",
      "https://www.norrm.com/"
   ],
   "audio": "https://listen.norrm.com/default",
   "status": "",
   "tint": "FCB2D9"
},
 {
   "name": "Paddygrooves Radio",
   "city": "Denpasar",
   "country": "Indonesia",
   "utc": "+8",
   "col": 18,
   "row": 10,
   "timezone": "Asia/Makassar",
   "lat": "-8.6705",
   "lng": 115.2126,
   "about": "Paddy Grooves is the imaginary home away from home for lovers, record collectors, music enthusiasts, party kids, hustlers & dealers, and all our brother and sisters from all walks of life.",
   "slug": "paddygrooves-radio",
   "url": [
      "https://paddygrooves.radio/",
      "https://paddygrooves.radio/"
   ],
   "audio": "https://a12.siar.us/radio/8230/radio.mp3",
   "status": "",
   "tint": "A88C6C"
},
 {
   "name": "Hong Kong Community Radio",
   "city": "Hong Kong",
   "country": "Hong Kong",
   "utc": "·",
   "col": 18,
   "row": 8,
   "timezone": "Asia/Hong_Kong",
   "lat": "22.3193",
   "lng": 114.1694,
   "about": "Founded in 2016, HKCR (Hong Kong Community Radio) is a community platform and independent radio station based in Wan Chai. Founded in 2016, Hong Kong Community Radio (HKCR) is a community platform and independent radio station comprised of creators, musicians, artists and fans with aims to broadcast and support independent works as an open platform.\n\n",
   "slug": "hong-kong-community-radio",
   "url": [
      "https://www.hkcr.live/",
      "https://www.hkcr.live/"
   ],
   "audio": "https://stream-test.hkcr.live/hls/main.m3u8",
   "status": "",
   "tint": "74F296"
},
 {
   "name": "Data Fruits",
   "city": "Tokyo",
   "country": "Japan",
   "utc": "·",
   "col": 19,
   "row": 6,
   "timezone": "Asia/Tokyo",
   "lat": "35.6762",
   "lng": 139.6503,
   "about": "Independent radio made for and by the international music community. Open source. Breaking down borders and genres. We play any song. We are dedicated to putting the spotlight and sharing music from underserved and marginalized communities. We believe that the only platform that can *truely* serve its users is one that is owned and operated by the people using the platform, the DJs and the listeners!",
   "slug": "data-fruits",
   "url": [
      "https://datafruits.fm/",
      "https://datafruits.fm/"
   ],
   "audio": "https://streampusher-relay.club/datafruits.mp3",
   "status": "",
   "tint": "94A7B1"
},
 {
   "name": "Skylab Radio",
   "city": "Melbourne",
   "country": "Australia",
   "utc": "+11",
   "col": 20,
   "row": 10,
   "timezone": "Australia/Melbourne",
   "lat": "-37.8136",
   "lng": 144.9631,
   "about": "An online radio station based in Melbourne, Australia. At the core we are motivated to giving a platform to presenters that dont already have one. Skylab celebrates the eclectic music, artistic flair and cultural inclusiveness canvassing this city and abroad.",
   "slug": "skylab-radio",
   "url": [
      "https://skylab-radio.com/pages/",
      "https://skylab-radio.com/pages/"
   ],
   "audio": "https://stream.skylab-radio.com/live",
   "status": "",
   "tint": "E4DA4D"
},
 {
   "name": "Area 3000",
   "city": "Melbourne",
   "country": "Australia",
   "utc": "·",
   "col": 20,
   "row": 11,
   "timezone": "Australia/Melbourne",
   "lat": "-37.8136",
   "lng": 144.9631,
   "about": "Area 3000 is a digital radio and media platform dedicated to amplifying local voices, fostering community, and showcasing underground music.\n\nBorn during Melbourne’s 2020 lockdowns, when the future of live music and nightclubbing was uncertain, Area 3000 was created to give artists—especially emerging and underrepresented voices—a platform to share their music and stories. We connect our local dance music scene to the wider community through 24/7 broadcasting, storytelling podcasts, live events, and artist development.\n\nOur mission is to bring people together through the power of music by delivering diverse, innovative, and immersive experiences. Our studio is based in Revolver Lane, a creative co-working space in Prahran, Melbourne, on Wurundjeri land.\n\nWe acknowledge the Traditional Owners of the land on which we broadcast and pay our respects to their Elders—past, present, and emerging.",
   "slug": "area-3000",
   "url": [
      "https://www.area3000.radio/",
      "https://www.area3000.radio/"
   ],
   "audio": "https://area-3000.radiocult.fm/stream",
   "status": "",
   "tint": "A03434"
  }
// },
//  {
//    "name": "",
//    "city": "",
//    "country": "",
//    "utc": "",
//    "col": null,
//    "row": null,
//    "timezone": "",
//    "lat": "",
//    "lng": null,
//    "about": "",
//    "slug": "",
//    "url": [
//       "",
//       ""
//    ],
//    "audio": "",
//    "status": "",
//    "tint": ""
// },
//  {
//    "name": "",
//    "city": "",
//    "country": "",
//    "utc": "",
//    "col": null,
//    "row": null,
//    "timezone": "",
//    "lat": "",
//    "lng": null,
//    "about": "",
//    "slug": "",
//    "url": [
//       "",
//       ""
//    ],
//    "audio": "",
//    "status": "",
//    "tint": ""
// },
//  {
//    "name": "Hope St Radio",
//    "city": "Melbourne",
//    "country": "Australia",
//    "utc": "+10",
//    "col": null,
//    "row": null,
//    "timezone": "Australia/Melbourne",
//    "lat": "-37.8136",
//    "lng": 144.9631,
//    "about": "Live broadcast radio from Melbournes finest.",
//    "slug": "hope-st-radio",
//    "url": [
//       "https://www.hopestradio.community/",
//       "https://www.hopestradio.community/"
//    ],
//    "audio": "https://hope-st-radeio.radiocult.fm/stream",
//    "status": "website active, stream link but no sound",
//    "tint": ""
// },
//  {
//    "name": "Radio Gufan",
//    "city": "Reykjavík",
//    "country": "Iceland",
//    "utc": "0",
//    "col": null,
//    "row": null,
//    "timezone": "??",
//    "lat": "64.1466",
//    "lng": -21.9426,
//    "about": "Radio Gufan launched on the shores of Gufunes in June 2022 as a gathering space for listening enjoyers who appreciate the seaside, the island glow, a sunset here and there. We don’t actually broadcast on the radio, but the idea of being a radio station really puts us in the right frame of mind. Born out on a pier, always grounded in conversation with the precious nature of our surrounding landscape - the water below us as much as the mountains in the distance.\n\nAbove, you might be able to listen into a wave or two lapping against the shore, though not always. Sort of like the ocean, you never really know what will come up from the depths. We're always casting our line, so do stay in touch. As we like to say around the radio (our spin on an old fisherman's classic)…\n\nA bad day spent listening is better than a good day at work.",
//    "slug": "radio-gufan",
//    "url": [
//       "https://radiogufan.is/",
//       "https://radiogufan.is/"
//    ],
//    "audio": "",
//    "status": "website active but audio wasn't playing",
//    "tint": ""
// },
//  {
//    "name": "Groove Cafe",
//    "city": "Chicago",
//    "country": "USA",
//    "utc": "-5",
//    "col": null,
//    "row": null,
//    "timezone": "America/Chicago",
//    "lat": "41.8781",
//    "lng": -87.6298,
//    "about": "Groove Café is a project building community in underground music, and helping underground music build the community within and around it.\n\nWe publish compiled knowledge, distribute helpful materials, run a benefit record label, throw shows, and really enjoy good parties.",
//    "slug": "groove-cafe",
//    "url": [
//       "https://groove.cafe/",
//       "https://groove.cafe/"
//    ],
//    "audio": "",
//    "status": "website active but no stream. video not audio also",
//    "tint": ""
// },
//  {
//    "name": "The Lot Radio",
//    "city": "New York",
//    "country": "USA",
//    "utc": "·",
//    "col": null,
//    "row": null,
//    "timezone": "America/New_York",
//    "lat": "40.7128",
//    "lng": -74.006,
//    "about": "We are an independent, non-profit, online radio station live streaming 24/7 from a reclaimed shipping container on an empty lot in NYC. Expect a continuous stream of the best and most varied music New York City has to offer.",
//    "slug": "the-lot-radio",
//    "url": [
//       "https://www.thelotradio.com/",
//       "https://www.thelotradio.com/"
//    ],
//    "audio": "",
//    "status": "website active but no stream",
//    "tint": ""
// },
//  {
//    "name": "East Side Radio",
//    "city": "Lisbon",
//    "country": "Portugal",
//    "utc": "·",
//    "col": null,
//    "row": null,
//    "timezone": "Europe/Lisbon",
//    "lat": "38.7223",
//    "lng": -9.1393,
//    "about": "In 2018 we started flirting with the idea of building our own radio station. While looking for a studio we made some friends along the way and found the perfect spot, located in the heart of East Lisbon, back then an overlooked area of the city.\n\nWhile we waited for construction in the studio-to-be, the first shows were broadcast from the backroom of a Mexican mercado, running 4-hour daily sessions until August 2019.\n\nIn April 2021 we made a foodtruck our studio and parked it at Arroz Estudios first and then in Beato Island, an outdoors pop-up by Foodriders.\n\nWe started the works in the studio in 2023 and our regular programme got finally back on air, now with 12 hours of live radio a day, from monday to friday. Our schedule got heavier on regulars, including daily shows with hosts going on air at the same time every week.\n\nAll the visual identity, still or moving posters, and this very website were designed by V-A Studio.\nThe studio furniture and desk pedestal were crafted by the good people from Built Different.\n\nThe studio sits at the back of Duro De Matar, the third-wave taqueria by our Foodriders family, who keep fueling our craziest ideas with totopos and mezcal.",
//    "slug": "east-side-radio",
//    "url": [
//       "https://www.eastsideradio.live/",
//       "https://www.eastsideradio.live/"
//    ],
//    "audio": "https://rstrmr.esr.li/memfs/8b108293-859b-4ba6-b0ad-e1b09c508ac7.m3u8",
//    "status": "plays a video on the site, not audio so not sure how to hack around this",
//    "tint": ""
// },
//  {
//    "name": "Radio Buena Vida",
//    "city": "Glasgow",
//    "country": "Scotland",
//    "utc": "",
//    "col": null,
//    "row": null,
//    "timezone": "Europe/London",
//    "lat": "55.8642",
//    "lng": -4.2518,
//    "about": "Radio Buena Vida (RBV) is a community arts and cultural organisation in Govanhill, Glasgow, using internet radio to platform the creative output of under-represented voices in music & culture.\n\nWe broadcast 7 days a week with community-produced and led programming. Our 200+ resident presenters have 100% creative control of their own shows, choosing music, setting tone, shaping content: a grassroots model ensuring the voices & priorities of our community are reflected.\n\nWe started out in October 2020, from the window of our local record shop and In November 2022, we opened the doors to Cafe Buena Vida, where Radio Buena Vida now broadcasts from its location in the street-facing window, which brought together the original idea of a different kind of radio station, set in an accessible community space, serving up quality snacks and drinks to an ever changing soundtrack of shows.\n\nWe feature independent Scottish artists overlooked by mainstream radio, experimental audio, interviews, new music & remote broadcasts from festivals/events.\n\nWe work with people facing structural barriers to the cultural sector — including ethnic minorities, working-class, LGBTQIA+, disabled, neurodivergent, women and non-binary creatives. Our mission is to make Scotland’s cultural landscape richer, more inclusive and representative.\n\nWe deliver on this through:\nCommunity-led internet radio content\nSkill-building creative workshops led by those with lived experience\nEvents in our own space/partners venues\nCollaborations\nOur accessible café-bar/studio which offers an inclusive creative hub to hang out and connect\n\nWith a radio schedule as diverse as the DJs and presenters, you can expect to hear every genre of music from experimental to disco, punk to ambient, jungle to soul, as well as occasional special guest appearances, interviews and discussions on topics that really matter to you.\n\nBoth the Cafe & radio station are wheelchair accessible. The cafe is ground level with accessible WC facilities while the DJ booth and fully adjustable desk mean no-one is excluded from applying for or presenting a show.",
//    "slug": "radio-buena-vida",
//    "url": [
//       "https://buenavida.co.uk/",
//       "https://buenavida.co.uk/"
//    ],
//    "audio": "",
//    "status": "working website, and audio players but no stream when i checked",
//    "tint": ""
// },
//  {
//    "name": "Out of Office Radio",
//    "city": "Helsinki",
//    "country": "Finland",
//    "utc": "",
//    "col": null,
//    "row": null,
//    "timezone": "Europe/Helsinki",
//    "lat": "60.1699",
//    "lng": 24.9384,
//    "about": "OOO (Out of Office) Radio is a mobile community radio station for experimental sound and curious ears.\n\nOriginating in Helsinki, it is a broadcast platform and set of tools that fit in a rucksack or bike trailer and that anyone can borrow to make their own radio. Simple to use and battery powered, everywhere becomes a studio or broadcast site.\n\nOOO Radio has a focus on experimental sound and music, art, talks, conversation and things that do not find a place on conventional radio. Anyone can borrow the radio equipment or digital tools to produce their own transmissions.\n\nOOO Radio was set up in 2023 by Samantha Lippett and James Prevett, broadcasting everyday for one month as part of the 'Together With' exhibition at Forum Box, Helsinki. Currently, OOO Radio broadcasts sporadically and is actively seeking new show hosts.",
//    "slug": "out-of-office-radio",
//    "url": [
//       "https://oooradio.live/",
//       "https://oooradio.live/"
//    ],
//    "audio": "",
//    "status": "working website, but no audio playing",
//    "tint": ""
// },
//  {
//    "name": "Strandard FM",
//    "city": "Utrecht",
//    "country": "Netherlands",
//    "utc": "",
//    "col": null,
//    "row": null,
//    "timezone": "Europe/Amsterdam",
//    "lat": "52.0907",
//    "lng": 5.1214,
//    "about": "Unconventional online radio\nHi there! Internet radio-platform Stranded FM desires for a Utrecht that is more radical, experimental and connected. \n\nShows are most-often one to two hours in length – regularly conducted at our radio studio. Requests to do prerecorded or on-distance shows is possible. Our space is not wheelchair-friendly due to the concrete stairwell we are situated in. For other types of event collaboration or on-site streaming send us an inquiry via the above too. \n\nVolunteering and hosting:\nStranded FM lives and thrives because of the lovely input many volunteers provide with studio hosting – welcoming the artists, guiding them, and taking care of the shows, archive and studio. For most hosts counts that you do one day per month, or more, depending on you! Are you interested in joining us? Mail Alice at hosting@stranded.fm\n\nAddress:\nKroonstraat 9 (Paardenveld 5bis via maps – behind the palm tree!)\n3511 RC Utrecht\nThe Netherlands",
//    "slug": "strandard-fm",
//    "url": [
//       "https://stranded.fm/",
//       "https://stranded.fm/"
//    ],
//    "audio": "https://origin.streamnerd.nl/strandedfm/strandedfm/playlist.m3u8",
//    "status": "plays a video on the site, not audio so not sure how to hack around this",
//    "tint": ""
// },
//  {
//    "name": "Res Radio",
//    "city": "Vienna",
//    "country": "Austria",
//    "utc": "·",
//    "col": null,
//    "row": null,
//    "timezone": "Europe/Vienna",
//    "lat": "48.2082",
//    "lng": 16.3738,
//    "about": "Res.Radio is a non-commercial community webradio based in Vienna to strengthen and display subcultural genres. From its founding in 2019, the radio grew into a multicultural community/platform featuring artists with many different backgrounds. Within this platform people connect, exchange ideas and create content around music across all genres and talks, which addresses topics like contemporary culture, social injustice and other phenomena. Res.Radio is a space of diverse artistic freedom and is made from people for people.",
//    "slug": "res-radio",
//    "url": [
//       "https://res.radio/",
//       "https://res.radio/"
//    ],
//    "audio": "https://edge.mixlr.com/channel/zwtuo",
//    "status": "website active, stream link but no sound",
//    "tint": ""
// },
//  {
//    "name": "Lilies Radio",
//    "city": "Johannesburg",
//    "country": "South Africa",
//    "utc": "·",
//    "col": null,
//    "row": null,
//    "timezone": "Africa/Johannesburg",
//    "lat": "-26.2041",
//    "lng": 28.0473,
//    "about": "Lilies is a Johannesburg-based studio and platform - dedicated to celebrating and nurturing independent creative culture, and the people that make it. \n\nexpanding from our roots in the local online radio scene - we champion a free-form, interdisciplinary approach to our projects, and collaborate with artists, creative practitioners and others to explore, experiment, innovate and play with our ideas.\n \nwe aim to foster a unique digital and IRL space to inspire and facilitate meaningful collaboration and dialogue(s) between diverse creative practices and communities.",
//    "slug": "lilies-radio",
//    "url": [
//       "https://www.wearelilies.com/",
//       "https://www.wearelilies.com/"
//    ],
//    "audio": "",
//    "status": "Couldn't see a stream, maybe only available on the weekend",
//    "tint": ""
// },
//  {
//    "name": "Room 404",
//    "city": "Batu",
//    "country": "Indonesia",
//    "utc": "·",
//    "col": null,
//    "row": null,
//    "timezone": "Asia/Jakarta",
//    "lat": "-7.8718",
//    "lng": 112.5239,
//    "about": "Radio 404 is a radio show based on Batu, Indonesia.\nStarted broadcast on December 2018 inviting local host, artist, collective, dj’s and open for everyone who shared the vibes.\nThe radio show weekly schedule with selected host.",
//    "slug": "room-404",
//    "url": [
//       "https://radioof404.wordpress.com/",
//       "https://radioof404.wordpress.com/"
//    ],
//    "audio": "",
//    "status": "video not audio. more effort to get audio, maybe defunct",
//    "tint": ""
// },
//  {
//    "name": "HOR",
//    "city": "Berlin",
//    "country": "Germany",
//    "utc": "·",
//    "col": null,
//    "row": null,
//    "timezone": "Europe/Berlin",
//    "lat": "52.52",
//    "lng": 13.405,
//    "about": "",
//    "slug": "hor",
//    "url": [
//       "https://hoer.live/",
//       "https://hoer.live/"
//    ],
//    "audio": "",
//    "status": "video not audio. more effort to get audio, maybe defunct",
//    "tint": ""
// },
//  {
//    "name": "Moth Radio",
//    "city": "Hong Kong",
//    "country": "Hong Kong",
//    "utc": "",
//    "col": null,
//    "row": null,
//    "timezone": "",
//    "lat": "22.3193",
//    "lng": 114.1694,
//    "about": "",
//    "slug": "moth-radio",
//    "url": [
//       "https://soundcloud.com/moth-radio",
//       ""
//    ],
//    "audio": "",
//    "status": "",
//    "tint": ""
// },
//  {
//    "name": "Kiss.fm",
//    "city": "Brooklyn",
//    "country": "USA",
//    "utc": "",
//    "col": null,
//    "row": null,
//    "timezone": "",
//    "lat": "40.6782",
//    "lng": -73.9442,
//    "about": "",
//    "slug": "kiss-fm",
//    "url": [
//       "https://kpiss.fm/",
//       ""
//    ],
//    "audio": "",
//    "status": "",
//    "tint": ""
// },
//  {
//    "name": "Baihui",
//    "city": "",
//    "country": "China",
//    "utc": "",
//    "col": null,
//    "row": null,
//    "timezone": "",
//    "lat": "",
//    "lng": null,
//    "about": "",
//    "slug": "",
//    "url": [
//       "https://baihui.live/",
//       ""
//    ],
//    "audio": "",
//    "status": "",
//    "tint": ""
// },
//  {
//    "name": "Bangkok Community Radio",
//    "city": "Bangkok",
//    "country": "Thailand",
//    "utc": "",
//    "col": null,
//    "row": null,
//    "timezone": "",
//    "lat": "13.7563",
//    "lng": 100.5018,
//    "about": "",
//    "slug": "",
//    "url": [
//       "https://www.bangkokcommunityradio.com/",
//       ""
//    ],
//    "audio": "",
//    "status": "",
//    "tint": ""
// },
//  {
//    "name": "Toha Radio",
//    "city": "Taipei City",
//    "country": "Taiwan",
//    "utc": "",
//    "col": null,
//    "row": null,
//    "timezone": "",
//    "lat": "25.033",
//    "lng": 121.5654,
//    "about": "",
//    "slug": "",
//    "url": [
//       "https://www.youtube.com/channel/UCB1uSWw2fMrJymFn8CY97MQ/about",
//       ""
//    ],
//    "audio": "",
//    "status": "",
//    "tint": ""
// },
//  {
//    "name": "Tokyo Community Radio",
//    "city": "Tokyo",
//    "country": "Japan",
//    "utc": "",
//    "col": null,
//    "row": null,
//    "timezone": "",
//    "lat": "35.6762",
//    "lng": 139.6503,
//    "about": "",
//    "slug": "",
//    "url": [
//       "http://tokyocommunityradio.jp/",
//       ""
//    ],
//    "audio": "",
//    "status": "",
//    "tint": ""
// },
//  {
//    "name": "Chercán radio",
//    "city": "Quilpué",
//    "country": "Chile",
//    "utc": "",
//    "col": null,
//    "row": null,
//    "timezone": "",
//    "lat": "-33.0476",
//    "lng": -71.4421,
//    "about": "",
//    "slug": "",
//    "url": [
//       "https://chercanradio.org/",
//       ""
//    ],
//    "audio": "",
//    "status": "",
//    "tint": ""
// },
//  {
//    "name": "Dark Wave Radomir",
//    "city": "Dolni Pasarel",
//    "country": "Bulgaria",
//    "utc": "",
//    "col": null,
//    "row": null,
//    "timezone": "",
//    "lat": "42.5667",
//    "lng": 23.5333,
//    "about": "",
//    "slug": "",
//    "url": [
//       "https://dwr.radio/",
//       ""
//    ],
//    "audio": "",
//    "status": "",
//    "tint": ""
// },
//  {
//    "name": "NoFM Radio",
//    "city": "Mexico City",
//    "country": "Mexico",
//    "utc": "",
//    "col": null,
//    "row": null,
//    "timezone": "",
//    "lat": "19.4326",
//    "lng": -99.1332,
//    "about": "",
//    "slug": "",
//    "url": [
//       "https://nofm-radio.com/",
//       ""
//    ],
//    "audio": "",
//    "status": "",
//    "tint": ""
// }
]
//  {
//    "name": "•",
//    "city": "",
//    "country": "",
//    "utc": "·",
//    "timezone": "",
//    "about": "Area 3000 is a digital radio and media platform dedicated to amplifying local voices, fostering community, and showcasing underground music.\n\nBorn during Melbourne’s 2020 lockdowns, when the future of live music and nightclubbing was uncertain, Area 3000 was created to give artists—especially emerging and underrepresented voices—a platform to share their music and stories. We connect our local dance music scene to the wider community through 24/7 broadcasting, storytelling podcasts, live events, and artist development.\n\nOur mission is to bring people together through the power of music by delivering diverse, innovative, and immersive experiences. Our studio is based in Revolver Lane, a creative co-working space in Prahran, Melbourne, on Wurundjeri land.\n\nWe acknowledge the Traditional Owners of the land on which we broadcast and pay our respects to their Elders—past, present, and emerging.",
//    "slug": "",
//    "url": "",
//    "audio": "https://area-3000.radiocult.fm/stream",
//    "highlight": "",
//    "fill": "",
//    "sparkle": ""
//  }
;