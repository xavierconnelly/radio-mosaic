import { writable } from 'svelte/store'

export let stations = writable(
[
 {
   "hex": "10AB26",
   "class": "show",
   "utc": -8,
   "name": "Dublab",
   "audio": "https://dublab.out.airtime.pro/dublab_a"
 },
 {
   "hex": "10AB26",
   "class": "hidden",
   "utc": -8,
   "name": "Lookout FM",
   "audio": "https://radio.mensajito.mx/nopalradio"
 },
 {
   "hex": "D03D02",
   "class": "show",
   "utc": -5,
   "name": "Radio Nopal",
   "audio": "https://radio.mensajito.mx/nopalradio"
 },
 {
   "hex": "D03D02",
   "class": "hidden",
   "utc": -5,
   "name": "Radio Veintiocho",
   "audio": "https://www-radio28-net.filesusr.com/html/ffc736_d1a2c392d0663a4ef7734d41b498afb7.html"
 },
 {
   "hex": "FDBD2B",
   "class": "show",
   "utc": -4,
   "name": "8 Ball Radio",
   "audio": "https://eightball.out.airtime.pro/eightball_a"
 },
 {
   "hex": "FDBD2B",
   "class": "hidden",
   "utc": -4,
   "name": "N10.AS",
   "audio": "https://n10as.out.airtime.pro/n10as_a"
 },
 {
   "hex": "690C1B",
   "class": "show",
   "utc": -3,
   "name": "Dublab Brasil",
   "audio": "https://stream.radiojar.com/64yv74qzb0quv?1650243633"
 },
 {
   "hex": "690C1B",
   "class": "hidden",
   "utc": -3,
   "name": "Veneno",
   "audio": "https://veneno.out.airtime.pro/veneno_b"
 },
 {
   "hex": "96B8E3",
   "class": "hidden",
   "utc": 0,
   "name": "Oroko Radio",
   "audio": "https://s3.radio.co/s27cf5b4e2/listen"
 },
 {
   "hex": "96B8E3",
   "class": "hidden",
   "utc": 0,
   "name": "Clyde Built Radio",
   "audio": "https://s3.radio.co/s27cf5b4e2/listen"
 },
 {
   "hex": "96B8E3",
   "class": "hidden",
   "utc": 0,
   "name": "1020",
   "audio": "https://radio1020.out.airtime.pro/radio1020_a"
 },
 {
   "hex": "96B8E3",
   "class": "hidden",
   "utc": 0,
   "name": "Noods FM",
   "audio": "https://noodsradio.out.airtime.pro/noodsradio_a"
 },
 {
   "hex": "96B8E3",
   "class": "hidden",
   "utc": 0,
   "name": "Reform Radio",
   "audio": "https://testform.out.airtime.pro/testform_a"
 },
 {
   "hex": "96B8E3",
   "class": "hidden",
   "utc": 0,
   "name": "Balamii",
   "audio": "https://balamii.out.airtime.pro/balamii_a"
 },
 {
   "hex": "96B8E3",
   "class": "hidden",
   "utc": 0,
   "name": "Netil Radio",
   "audio": "https://netilradio.out.airtime.pro/netilradio_a"
 },
 {
   "hex": "96B8E3",
   "class": "hidden",
   "utc": 0,
   "name": "Foundation FM",
   "audio": "https://streamer.radio.co/s0628bdd53/listen"
 },
 {
   "hex": "96B8E3",
   "class": "hidden",
   "utc": 0,
   "name": "NTS 1",
   "audio": "http://stream-relay-geo.ntslive.net/stream"
 },
 {
   "hex": "96B8E3",
   "class": "hidden",
   "utc": 0,
   "name": "NTS 2",
   "audio": "https://stream-relay-geo.ntslive.net/stream2"
 },
 {
   "hex": "03713C",
   "class": "show",
   "utc": 1,
   "name": "Kiosk Radio",
   "audio": "https://kioskradiobxl.out.airtime.pro/kioskradiobxl_b"
 },
 {
   "hex": "03713C",
   "class": "hidden",
   "utc": 1,
   "name": "The Word Radio",
   "audio": "https://thewordradio.out.airtime.pro/thewordradio_a"
 },
 {
   "hex": "03713C",
   "class": "hidden",
   "utc": 1,
   "name": "Lyl Radio",
   "audio": "https://icecast.lyl.live/live"
 },
 {
   "hex": "03713C",
   "class": "hidden",
   "utc": 1,
   "name": "Radio Beguin",
   "audio": "https://listen.radioking.com/radio/284398/stream/330307"
 },
 {
   "hex": "03713C",
   "class": "hidden",
   "utc": 1,
   "name": "Radio Flouka",
   "audio": "https://flouka.out.airtime.pro/flouka_a"
 },
 {
   "hex": "03713C",
   "class": "hidden",
   "utc": 1,
   "name": "Ola Radio",
   "audio": "https://www.radioking.com/play/ola-radio"
 },
 {
   "hex": "03713C",
   "class": "hidden",
   "utc": 1,
   "name": "Dia Radio",
   "audio": "https://www.radioking.com/play/dia-radio"
 },
 {
   "hex": "03713C",
   "class": "hidden",
   "utc": 1,
   "name": "Radio Raheem",
   "audio": "https://streams.radio.co/s63f12ebcb/listen"
 },
 {
   "hex": "03713C",
   "class": "hidden",
   "utc": 1,
   "name": "Rocket Radio 1",
   "audio": "https://stream.radiojar.com/nvvyes7gud5tv"
 },
 {
   "hex": "03713C",
   "class": "hidden",
   "utc": 1,
   "name": "Radio Quantica",
   "audio": "https://stream.radioquantica.com:8443/stream"
 },
 {
   "hex": "03713C",
   "class": "hidden",
   "utc": 1,
   "name": "Radio Relativa",
   "audio": "https://streamer.radio.co/sd6131729c/listen"
 },
 {
   "hex": "03713C",
   "class": "hidden",
   "utc": 1,
   "name": "Tesla FM",
   "audio": "https://tesla1.teslafm.net:8443/tesla1"
 },
 {
   "hex": "03713C",
   "class": "hidden",
   "utc": 1,
   "name": "Radyoon",
   "audio": "https://rady00n.out.airtime.pro/rady00n_a"
 },
 {
   "hex": "F8E71C",
   "class": "show",
   "utc": 2,
   "name": "Retreat Radio",
   "audio": "https://retreatradio.out.airtime.pro/retreatradio_a"
 },
 {
   "hex": "F8E71C",
   "class": "hidden",
   "utc": 2,
   "name": "20ft Radio",
   "audio": "https://20ft.ippro.co/live/"
 },
 {
   "hex": "F8E71C",
   "class": "hidden",
   "utc": 2,
   "name": "Callshop Radio",
   "audio": "https://icecast.callshopradio.com/callshopradio"
 },
 {
   "hex": "F8E71C",
   "class": "hidden",
   "utc": 2,
   "name": "Radio 80000",
   "audio": "https://radio80k.out.airtime.pro/radio80k_a"
 },
 {
   "hex": "F8E71C",
   "class": "hidden",
   "utc": 2,
   "name": "EOS Radio",
   "audio": "https://s5.radio.co/s21c5fbf27/listen?i1650264069077"
 },
 {
   "hex": "F8E71C",
   "class": "hidden",
   "utc": 2,
   "name": "Cashmere Radio",
   "audio": "https://cashmereradio.out.airtime.pro/cashmereradio_a"
 },
 {
   "hex": "F8E71C",
   "class": "hidden",
   "utc": 2,
   "name": "THF Radio",
   "audio": "https://thfradio2.out.airtime.pro/thfradio2_b"
 },
 {
   "hex": "F8E71C",
   "class": "hidden",
   "utc": 2,
   "name": "Refuge Worldwide",
   "audio": "https://streaming.radio.co/s3699c5e49/listen"
 },
 {
   "hex": "F8E71C",
   "class": "hidden",
   "utc": 2,
   "name": "Worldwide FM",
   "audio": "https://worldwidefm.out.airtime.pro/worldwidefm_b"
 },
 {
   "hex": "F8E71C",
   "class": "hidden",
   "utc": 2,
   "name": "Hammam Radio",
   "audio": "https://stream.radiojar.com/svbttmf9ztzuv?1650245417"
 },
 {
   "hex": "F8E71C",
   "class": "hidden",
   "utc": 2,
   "name": "Radio Kapital",
   "audio": "https://radiokapitalpl.out.airtime.pro/radiokapitalpl_a"
 },
 {
   "hex": "F8E71C",
   "class": "hidden",
   "utc": 2,
   "name": "Punctum Radio",
   "audio": "https://radiopunctum.cz:8001/radio"
 },
 {
   "hex": "F8E71C",
   "class": "hidden",
   "utc": 2,
   "name": "Res Radio",
   "audio": "https://edge.mixlr.com/channel/zwtuo"
 },
 {
   "hex": "F8E71C",
   "class": "hidden",
   "utc": 2,
   "name": "Loose Antenna",
   "audio": "https://stream.looseantenna.fm:8000/default.mp3"
 },
 {
   "hex": "F8E71C",
   "class": "hidden",
   "utc": 2,
   "name": "Radio Bollwerk",
   "audio": "https://radiobollwerk.out.airtime.pro/radiobollwerk_a"
 },
 {
   "hex": "F8E71C",
   "class": "hidden",
   "utc": 2,
   "name": "Lahmacun",
   "audio": "https://streaming.lahmacun.hu/radio/8000/radio.mp3"
 },
 {
   "hex": "F8E71C",
   "class": "hidden",
   "utc": 2,
   "name": "Radio alHara",
   "audio": "https://stream.radiojar.com/78cxy6wkxtzuv?1650173445"
 },
 {
   "hex": "F8E71C",
   "class": "hidden",
   "utc": 2,
   "name": "Pan African Space Station",
   "audio": "https://pass.airtime.pro/embed/player?stream=auto"
 },
 {
   "hex": "F8E71C",
   "class": "hidden",
   "utc": 2,
   "name": "The Other Radio",
   "audio": "https://embed.radio.co/player/2ff18e6.html"
 },
 {
   "hex": "F8E71C",
   "class": "hidden",
   "utc": 2,
   "name": "Hamshack Radio",
   "audio": "https://s3.radio.co/sc7aeef6c0/listen"
 },
 {
   "hex": "106BD6",
   "class": "show",
   "utc": 3,
   "name": "Radio.Syg.Ma",
   "audio": "https://radio.syg.ma/audio"
 },
 {
   "hex": "106BD6",
   "class": "hidden",
   "utc": 3,
   "name": "New New World Radio",
   "audio": "https://nnw.out.airtime.pro/nnw_a"
 },
 {
   "hex": "106BD6",
   "class": "hidden",
   "utc": 3,
   "name": "Morheus Radio",
   "audio": "https://c4.radioboss.fm:18214/stream"
 },
 {
   "hex": "106BD6",
   "class": "hidden",
   "utc": 3,
   "name": "Movement Radio",
   "audio": "https://movementathens.out.airtime.pro/movementathens_a"
 },
 {
   "hex": "106BD6",
   "class": "hidden",
   "utc": 3,
   "name": "Cannibal Radio",
   "audio": "http://rdst.win:8238/stream"
 },
 {
   "hex": "106BD6",
   "class": "hidden",
   "utc": 3,
   "name": "Fade Radio",
   "audio": "https://stream.radiojar.com/072mdmpbfq8uv?1650262434"
 },
 {
   "hex": "106BD6",
   "class": "hidden",
   "utc": 3,
   "name": "Paranoise Radio",
   "audio": "https://paranoisewebcast.radioca.st/stream"
 },
 {
   "hex": "106BD6",
   "class": "hidden",
   "utc": 3,
   "name": "Root Radio",
   "audio": "https://stream.radiojar.com/q1mgvh4u4yzuv?1650173687"
 },
 {
   "hex": "690C1B",
   "class": "show",
   "utc": 4,
   "name": "East East Radio",
   "audio": "https://listen7.myradio24.com/eastradio"
 },
 {
   "hex": "690C1B",
   "class": "hidden",
   "utc": 4,
   "name": "Mutant Radio",
   "audio": "https://www.radioking.com/play/mutant-radio"
 },
 {
   "hex": "96B8E3",
   "class": "show",
   "utc": 7,
   "name": "Paddygrooves Radio",
   "audio": "https://a12.siar.us/radio/8230/radio.mp3"
 },
 {
   "hex": "10AB26",
   "class": "show",
   "utc": 8,
   "name": "Norrm Radio",
   "audio": "http://radio.norrm.com:8000/stream?cba=0.08943239882315046"
 },
 {
   "hex": "D03D02",
   "class": "show",
   "utc": 9,
   "name": "Data Fruits",
   "audio": "https://streampusher-relay.club/datafruits.mp3"
 },
 {
   "hex": "1F3470",
   "class": "show",
   "utc": 10,
   "name": "Hope St Radio",
   "audio": "http://hopestreetradio.out.airtime.pro:8000/hopestreetradio_a"
 },
 {
   "hex": "1F3470",
   "class": "hidden",
   "utc": 10,
   "name": "Skylab Radio",
   "audio": "https://stream.skylab-radio.com/live"
 },
 {
   "hex": "1F3470",
   "class": "hidden",
   "utc": 10,
   "name": "Area 3000",
   "audio": "https://s2.radio.co/s178905a52/listen"
 }
]

);
