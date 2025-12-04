<script>
	let y;

    export let obi;
	export let obiText;
</script>

<svelte:window bind:scrollY={y}/>


<div class="theatre" style="color: #{obiText}; background: #{obi}">
    <div class="scene">
        <div class="cube" style="transform: translateZ(-65em) rotateX({y}deg)">
            <div class="face one red">      
                <p lang="ru">
                    Radio Mosaic — это сообщество, движение, способ объединить прошлое, будущее и настоящее. Хотя мы и живем в разных уголках земного шара, мы все едины. Это сообщество, движение, способ объединить прошлое, будущее и настоящее. Хотя мы и живем в разных уголках земного шара, мы все едины.
                </p>
            </div>
            <div class="face two">
                <p lang="ja">
                    <b>radio mosaic</b> 是一个社区，一个运动，一种将过去、未来与现在同时融合的方式。虽然我们生活在世界各个分散的角落，但我们都是一个整体。
                    是一个社区，一个运动，一种将过去、未来与现在同时融合的方式。虽然我们生活在世界各个分散的角落，但我们都是一个整体。
                </p>
            </div>
            <div class="face three red">
                <p lang="es">
                    <b>radio mosaic</b> es una comunidad, un movimiento, una manera de reunir pasado, futuro y presente al mismo tiempo. Aunque vivamos en rincones fragmentados del mundo, todos somos uno. es una comunidad, un movimiento, una manera de reunir pasado, futuro y presente al mismo tiempo. Aunque vivamos en rincones fragmentados del mundo, todos somos uno. es una comunidad, un movimiento, una manera de reunir pasado, futuro y presente al mismo tiempo. Aunque vivamos en rincones fragmentados del mundo, todos somos uno.
                </p>
            </div>
            <div class="face four">
                <p lang="ar" class="rtl">
                    راديو موزيك هو مجتمع، وحركة، وطريقة لجمع الماضي والمستقبل والحاضر معاً في آن واحد. على الرغم من أننا نعيش في أركان متفرقة من العالم، إلا أننا جميعاً واحد. هو مجتمع، وحركة، وطريقة لجمع الماضي والمستقبل والحاضر معاً في آن واحد. على الرغم من أننا نعيش في أركان متفرقة من العالم، إلا أننا جميعاً واحد.                </p>
            </div>
            <div class="face five red">
                <p lang="en">
                    <b>radio mosaic</b> is a community, a movement a way of bringing the past, future and present together at once. While we may live in fragmented corners of the globe, we are all one. is a community, a movement a way of bringing the past, future and present together at once. While we may live in fragmented corners of the globe, we are all one. 
                </p>
            </div>
            <div class="face six">
                <p lang="pe" class="rtl">
                    ادیو موزاییک یک جامعه، یک جنبش و راهی برای گرد هم آوردن گذشته، آینده و حال در یک زمان است. هرچند ممکن است در گوشه‌های پراکنده جهان زندگی کنیم، اما همه ما یکی هستیم. یک جامعه، یک جنبش و راهی برای گرد هم آوردن گذشته، آینده و حال در یک زمان است. هرچند ممکن است در گوشه‌های پراکنده جهان زندگی کنیم، اما همه ما یکی هستیم.
                </p>
            </div>
            <div class="face seven red">
                <p lang="ch">
                    无线电马赛克是一个社群，一场运动，一种将过去、未来与当下融为一体的方式。纵使我们散居于世界的碎片角落，我们始终同为一体。
                </p>
            </div>
            <div class="face eight">
                <p lang="sw">
                    Radio mosaic ni jamii, harakati, njia ya kuwaleta pamoja yaliyopita, yajayo na sasa kwa wakati mmoja. Ingawa tunaweza kuishi katika pembe zilizogawanyika za dunia, sisi sote ni kimoja. ni jamii, harakati, njia ya kuwaleta pamoja yaliyopita, yajayo na sasa kwa wakati mmoja. Ingawa tunaweza kuishi katika pembe zilizogawanyika za dunia, sisi sote ni kimoja.
                </p>
            </div>
            <div class="face nine red">
                <p lang="he" class="rtl">
                    רדיו מוסאיק הוא קהילה, תנועה, דרך לאחד את העבר, העתיד וההווה בבת אחת. גם אם אנו חיים בפינות מפורדות של העולם, כולנו אחד. הוא קהילה, תנועה, דרך לאחד את העבר, העתיד וההווה בבת אחת. גם אם אנו חיים בפינות מפורדות של העולם, כולנו אחד.
                </p>
            </div>
            <div class="face ten">
                <p lang="fr">
                    Radio Mosaic est une communauté, un mouvement, une façon de réunir à la fois le passé, le futur et le présent. Même si nous vivons dans des coins fragmentés du globe, nous ne formons qu'un. est une communauté, un mouvement, une façon de réunir à la fois le passé, le futur et le présent. Même si nous vivons dans des coins fragmentés du globe, nous ne formons qu'un.
                </p>
            </div>
            <div class="face eleven red">
                <p lang="pt">
                    A Radio Mosaic é uma comunidade, um movimento, uma forma de reunir o passado, o futuro e o presente ao mesmo tempo. Embora vivamos em cantos fragmentados do globo, somos todos um só. É uma comunidade, um movimento, uma forma de reunir o passado, o futuro e o presente ao mesmo tempo. Embora vivamos em cantos fragmentados do globo, somos todos um só.
                </p>
            </div>
            <div class="face twelve">
                <p lang="hi" class="rtl">
                    रेडियो मोज़ेक एक समुदाय है, एक आंदोलन है, अतीत, भविष्य और वर्तमान को एक साथ लाने का एक तरीका है।   हालाँकि हम दुनिया के खंडित कोनों में रहते हों, हम सभी एक हैं।   यह एक समुदाय है, एक आंदोलन है, अतीत, भविष्य और वर्तमान को एक साथ लाने का एक तरीका है।   हालाँकि हम दुनिया के खंडित कोनों में रहते हों, हम सभी एक हैं।
                </p>
            </div>
        </div>
        <!-- <div class="cube" style="transform: translateZ(-65em) rotateX({y}deg)">  
            <p lang="en" class="face one red">
                <b>radio mosaic</b> is a community, a movement a way of bringing the past, future and present together at once. While we may live in fragmented corners of the globe, we are all one. is a community, a movement a way of bringing the past, future and present together at once. While we may live in fragmented corners of the globe, we are all one. 
            </p>
            <p lang="ja" class="face two">
                <b>radio mosaic</b> 是一个社区，一个运动，一种将过去、未来与现在同时融合的方式。虽然我们生活在世界各个分散的角落，但我们都是一个整体。
                是一个社区，一个运动，一种将过去、未来与现在同时融合的方式。虽然我们生活在世界各个分散的角落，但我们都是一个整体。
            </p>
            <p lang="es" class="face three red">
                <b>radio mosaic</b> es una comunidad, un movimiento, una manera de reunir pasado, futuro y presente al mismo tiempo. Aunque vivamos en rincones fragmentados del mundo, todos somos uno. es una comunidad, un movimiento, una manera de reunir pasado, futuro y presente al mismo tiempo. Aunque vivamos en rincones fragmentados del mundo, todos somos uno. es una comunidad, un movimiento, una manera de reunir pasado, futuro y presente al mismo tiempo. Aunque vivamos en rincones fragmentados del mundo, todos somos uno.
            </p>
            <p lang="ar" class="face four rtl">
                <b> فسيفساء الراديو </b>  هي مجتمع، حركة، وطريقة لدمج الماضي والمستقبل والحاضر في وقت واحد. رغم أننا قد نعيش في زوايا متفرقة من العالم، نحن جميعًا واحد  أننا قد نعيش في زوايا متفرقة من العالم، نحن جميعًا واحد.
            </p>
            <p lang="en" class="face five red">
                <b>radio mosaic</b> is a community, a movement a way of bringing the past, future and present together at once. While we may live in fragmented corners of the globe, we are all one. is a community, a movement a way of bringing the past, future and present together at once. While we may live in fragmented corners of the globe, we are all one. 
            </p>
            <p lang="ja" class="face six">
                <b>radio mosaic</b> 是一个社区，一个运动，一种将过去、未来与现在同时融合的方式。虽然我们生活在世界各个分散的角落，但我们都是一个整体。
                是一个社区，一个运动，一种将过去、未来与现在同时融合的方式。虽然我们生活在世界各个分散的角落，但我们都是一个整体。
            </p>
            <p lang="es" class="face seven red">
                <b>radio mosaic</b> es una comunidad, un movimiento, una manera de reunir pasado, futuro y presente al mismo tiempo. Aunque vivamos en rincones fragmentados del mundo, todos somos uno. es una comunidad, un movimiento, una manera de reunir pasado, futuro y presente al mismo tiempo. Aunque vivamos en rincones fragmentados del mundo, todos somos uno. es una comunidad, un movimiento, una manera de reunir pasado, futuro y presente al mismo tiempo. Aunque vivamos en rincones fragmentados del mundo, todos somos uno.
            </p>
            <p lang="ja" class="face eight">
                <b>radio mosaic</b> 是一个社区，一个运动，一种将过去、未来与现在同时融合的方式。虽然我们生活在世界各个分散的角落，但我们都是一个整体。
                是一个社区，一个运动，一种将过去、未来与现在同时融合的方式。虽然我们生活在世界各个分散的角落，但我们都是一个整体。
            </p>
            <p lang="ar"  class="face nine red rtl">
                <b> فسيفساء الراديو </b> هي مجتمع، حركة، وطريقة لدمج الماضي والمستقبل والحاضر في وقت واحد. رغم أننا قد نعيش في زوايا متفرقة من العالم، نحن جميعًا واحد  أننا قد نعيش في زوايا متفرقة من العالم، نحن جميعًا واحد.
            </p>
            <p lang="ja" class="face ten">
                <b>radio mosaic</b> 是一个社区，一个运动，一种将过去、未来与现在同时融合的方式。虽然我们生活在世界各个分散的角落，但我们都是一个整体。
                是一个社区，一个运动，一种将过去、未来与现在同时融合的方式。虽然我们生活在世界各个分散的角落，但我们都是一个整体。
            </p>
            <p lang="es" class="face eleven red">
                <b>radio mosaic</b> es una comunidad, un movimiento, una manera de reunir pasado, futuro y presente al mismo tiempo. Aunque vivamos en rincones fragmentados del mundo, todos somos uno. es una comunidad, un movimiento, una manera de reunir pasado, futuro y presente al mismo tiempo. Aunque vivamos en rincones fragmentados del mundo, todos somos uno. es una comunidad, un movimiento, una manera de reunir pasado, futuro y presente al mismo tiempo. Aunque vivamos en rincones fragmentados del mundo, todos somos uno.
            </p>
            <p lang="ar" class="face twelve rtl">
                <b> فسيفساء الراديو </b> هي مجتمع، حركة، وطريقة لدمج الماضي والمستقبل والحاضر في وقت واحد. رغم أننا قد نعيش في زوايا متفرقة من العالم، نحن جميعًا واحد  أننا قد نعيش في زوايا متفرقة من العالم، نحن جميعًا واحد.
            </p>
        </div> -->
    </div>
</div>

<style>

.theatre {
    width: 300px;
    height: calc(100vh - 44px);
    padding: 10px 0px;
    position: fixed;
    top: 44px;
    left: 300px;
    background-color: var(--yin);
    z-index: 80;
    border-right: 2px solid var(--yang);
}

.scene {
    width: 300px;
    height: 235px;
    perspective: 10000em;
    position: absolute;
    top: 50%;
    left: 0px;
    transform: translate(0%, -50%);
}

.cube {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    backface-visibility: hidden;
}

.face {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    display: inline-block;
    justify-content: center;
    align-items: center;
    /* background-color: #F6F3F0; */
    padding: 10px 0px;
    font-size: 14px;
    font-weight: 500;
    /* background-color: rgba(3, 121, 255, 0.2);
    background-color: #F6F3F0; */
    border-bottom: 1px solid;
    backface-visibility: hidden;
}

.face p {
    padding: 10px;
}

  /* color: #fff; */
  /* line-height: 10em; */
  /* text-align: center; */


/* .red {
    background-color: rgba(226, 101, 47, 0.2);
    background-color: #F6F3F0;
} */

p:lang(en) {
    font-size: 16px;
}

p:lang(es) {
    font-size: 11px;
    line-height: calc(235px / 12.5);
}

p:lang(ar) {
  font-size: 17.7px;
}

p:lang(ja) {
    font-size: 15px;
    line-height: calc(235px / 8);
}

p:lang(ch) {
    font-size: 25px;
    line-height: 35px;
}

p:lang(pe) {
    font-size: 17px;
    line-height: calc(235px / 10.5);
}

p:lang(pt) {
    font-size: 14px;
    line-height: 20px;
}

p:lang(he) {
    font-size: 15px;
    line-height: calc(235px / 8);
}

p:lang(fr) {
    font-size: 15px;
    line-height: 20.5px;
}

p:lang(ru) {
    font-size: 18px;
    text-align: justify;
    line-height: calc(235px / 12.5);
}

p:lang(sw) {
    font-size: 15px;
    line-height: 19px;
    text-align: justify;
}

p:lang(hi) {
    font-size: 18px;
    line-height: calc(235px / 9.5);
    font-weight: 100;
}

.one {
  transform: rotateX(0deg) translateZ(30em);
}
.two {
  transform: rotateX(30deg) translateZ(30em);
}
.three {
  transform: rotateX(60deg) translateZ(30em);
}
.four {
  transform: rotateX(90deg) translateZ(30em);
}
.five {
  transform: rotateX(120deg) translateZ(30em);
}
.six {
  transform: rotateX(150deg) translateZ(30em);
}
.seven {
  transform: rotateX(180deg) translateZ(30em);
}
.eight {
  transform: rotateX(210deg) translateZ(30em);
}
.nine {
  transform: rotateX(240deg) translateZ(30em);
}
.ten {
  transform: rotateX(270deg) translateZ(30em);
}
.eleven {
  transform: rotateX(300deg) translateZ(30em);
}
.twelve {
  transform: rotateX(330deg) translateZ(30em);
}


/* media stylings ~ TABLET */
@media (min-width: 500px) and (max-width: 1280px) {
    .theatre {
        left: 0;
    }
}

</style>