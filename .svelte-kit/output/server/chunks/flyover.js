import { w as writable } from "./index.js";
import { n as noop } from "./equality.js";
import { Z as attr_style, _ as stringify, $ as bind_props, a0 as ensure_array_like, V as attr } from "./index2.js";
const now = () => Date.now();
const raf = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (_) => noop()
  ),
  now: () => now(),
  tasks: /* @__PURE__ */ new Set()
};
function loop(callback) {
  let task;
  if (raf.tasks.size === 0) ;
  return {
    promise: new Promise((fulfill) => {
      raf.tasks.add(task = { c: callback, f: fulfill });
    }),
    abort() {
      raf.tasks.delete(task);
    }
  };
}
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function tick_spring(ctx, last_value, current_value, target_value) {
  if (typeof current_value === "number" || is_date(current_value)) {
    const delta = target_value - current_value;
    const velocity = (current_value - last_value) / (ctx.dt || 1 / 60);
    const spring2 = ctx.opts.stiffness * delta;
    const damper = ctx.opts.damping * velocity;
    const acceleration = (spring2 - damper) * ctx.inv_mass;
    const d = (velocity + acceleration) * ctx.dt;
    if (Math.abs(d) < ctx.opts.precision && Math.abs(delta) < ctx.opts.precision) {
      return target_value;
    } else {
      ctx.settled = false;
      return is_date(current_value) ? new Date(current_value.getTime() + d) : current_value + d;
    }
  } else if (Array.isArray(current_value)) {
    return current_value.map(
      (_, i) => (
        // @ts-ignore
        tick_spring(ctx, last_value[i], current_value[i], target_value[i])
      )
    );
  } else if (typeof current_value === "object") {
    const next_value = {};
    for (const k in current_value) {
      next_value[k] = tick_spring(ctx, last_value[k], current_value[k], target_value[k]);
    }
    return next_value;
  } else {
    throw new Error(`Cannot spring ${typeof current_value} values`);
  }
}
function spring(value, opts = {}) {
  const store = writable(value);
  const { stiffness = 0.15, damping = 0.8, precision = 0.01 } = opts;
  let last_time;
  let task;
  let current_token;
  let last_value = (
    /** @type {T} */
    value
  );
  let target_value = (
    /** @type {T | undefined} */
    value
  );
  let inv_mass = 1;
  let inv_mass_recovery_rate = 0;
  let cancel_task = false;
  function set(new_value, opts2 = {}) {
    target_value = new_value;
    const token = current_token = {};
    if (value == null || opts2.hard || spring2.stiffness >= 1 && spring2.damping >= 1) {
      cancel_task = true;
      last_time = raf.now();
      last_value = new_value;
      store.set(value = target_value);
      return Promise.resolve();
    } else if (opts2.soft) {
      const rate = opts2.soft === true ? 0.5 : +opts2.soft;
      inv_mass_recovery_rate = 1 / (rate * 60);
      inv_mass = 0;
    }
    if (!task) {
      last_time = raf.now();
      cancel_task = false;
      task = loop((now2) => {
        if (cancel_task) {
          cancel_task = false;
          task = null;
          return false;
        }
        inv_mass = Math.min(inv_mass + inv_mass_recovery_rate, 1);
        const elapsed = Math.min(now2 - last_time, 1e3 / 30);
        const ctx = {
          inv_mass,
          opts: spring2,
          settled: true,
          dt: elapsed * 60 / 1e3
        };
        const next_value = tick_spring(ctx, last_value, value, target_value);
        last_time = now2;
        last_value = /** @type {T} */
        value;
        store.set(value = /** @type {T} */
        next_value);
        if (ctx.settled) {
          task = null;
        }
        return !ctx.settled;
      });
    }
    return new Promise((fulfil) => {
      task.promise.then(() => {
        if (token === current_token) fulfil();
      });
    });
  }
  const spring2 = {
    set,
    update: (fn, opts2) => set(fn(
      /** @type {T} */
      target_value,
      /** @type {T} */
      value
    ), opts2),
    subscribe: store.subscribe,
    stiffness,
    damping,
    precision
  };
  return spring2;
}
function Obi($$renderer, $$props) {
  let y;
  let obi = $$props["obi"];
  let obiText = $$props["obiText"];
  $$renderer.push(`<div class="theatre svelte-1uz95ez"${attr_style(`color: #${stringify(obiText)}; background: #${stringify(obi)}`)}><div class="scene svelte-1uz95ez"><div class="cube svelte-1uz95ez"${attr_style(`transform: translateZ(-65em) rotateX(${stringify(y)}deg)`)}><div class="face one red svelte-1uz95ez"><p lang="en" class="svelte-1uz95ez"><b>radio mosaic</b> is a community, a movement a way of bringing the past, future and present together at once. While we may live in fragmented corners of the globe, we are all one. is a community, a movement a way of bringing the past, future and present together at once. While we may live in fragmented corners of the globe, we are all one.</p></div> <div class="face two svelte-1uz95ez"><p lang="ja" class="svelte-1uz95ez"><b>radio mosaic</b> 是一个社区，一个运动，一种将过去、未来与现在同时融合的方式。虽然我们生活在世界各个分散的角落，但我们都是一个整体。
                    是一个社区，一个运动，一种将过去、未来与现在同时融合的方式。虽然我们生活在世界各个分散的角落，但我们都是一个整体。</p></div> <div class="face three red svelte-1uz95ez"><p lang="es" class="svelte-1uz95ez"><b>radio mosaic</b> es una comunidad, un movimiento, una manera de reunir pasado, futuro y presente al mismo tiempo. Aunque vivamos en rincones fragmentados del mundo, todos somos uno. es una comunidad, un movimiento, una manera de reunir pasado, futuro y presente al mismo tiempo. Aunque vivamos en rincones fragmentados del mundo, todos somos uno. es una comunidad, un movimiento, una manera de reunir pasado, futuro y presente al mismo tiempo. Aunque vivamos en rincones fragmentados del mundo, todos somos uno.</p></div> <div class="face four svelte-1uz95ez"><p lang="ar" class="rtl svelte-1uz95ez">راديو موزيك هو مجتمع، وحركة، وطريقة لجمع الماضي والمستقبل والحاضر معاً في آن واحد. على الرغم من أننا نعيش في أركان متفرقة من العالم، إلا أننا جميعاً واحد. هو مجتمع، وحركة، وطريقة لجمع الماضي والمستقبل والحاضر معاً في آن واحد. على الرغم من أننا نعيش في أركان متفرقة من العالم، إلا أننا جميعاً واحد.</p></div> <div class="face five red svelte-1uz95ez"><p lang="ru" class="svelte-1uz95ez">Radio Mosaic — это сообщество, движение, способ объединить прошлое, будущее и настоящее. Хотя мы и живем в разных уголках земного шара, мы все едины. Это сообщество, движение, способ объединить прошлое, будущее и настоящее. Хотя мы и живем в разных уголках земного шара, мы все едины.</p></div> <div class="face six svelte-1uz95ez"><p lang="pe" class="rtl svelte-1uz95ez">ادیو موزاییک یک جامعه، یک جنبش و راهی برای گرد هم آوردن گذشته، آینده و حال در یک زمان است. هرچند ممکن است در گوشه‌های پراکنده جهان زندگی کنیم، اما همه ما یکی هستیم. یک جامعه، یک جنبش و راهی برای گرد هم آوردن گذشته، آینده و حال در یک زمان است. هرچند ممکن است در گوشه‌های پراکنده جهان زندگی کنیم، اما همه ما یکی هستیم.</p></div> <div class="face seven red svelte-1uz95ez"><p lang="ch" class="svelte-1uz95ez">无线电马赛克是一个社群，一场运动，一种将过去、未来与当下融为一体的方式。纵使我们散居于世界的碎片角落，我们始终同为一体。</p></div> <div class="face eight svelte-1uz95ez"><p lang="sw" class="svelte-1uz95ez">Radio mosaic ni jamii, harakati, njia ya kuwaleta pamoja yaliyopita, yajayo na sasa kwa wakati mmoja. Ingawa tunaweza kuishi katika pembe zilizogawanyika za dunia, sisi sote ni kimoja. ni jamii, harakati, njia ya kuwaleta pamoja yaliyopita, yajayo na sasa kwa wakati mmoja. Ingawa tunaweza kuishi katika pembe zilizogawanyika za dunia, sisi sote ni kimoja.</p></div> <div class="face nine red svelte-1uz95ez"><p lang="he" class="rtl svelte-1uz95ez">רדיו מוסאיק הוא קהילה, תנועה, דרך לאחד את העבר, העתיד וההווה בבת אחת. גם אם אנו חיים בפינות מפורדות של העולם, כולנו אחד. הוא קהילה, תנועה, דרך לאחד את העבר, העתיד וההווה בבת אחת. גם אם אנו חיים בפינות מפורדות של העולם, כולנו אחד.</p></div> <div class="face ten svelte-1uz95ez"><p lang="fr" class="svelte-1uz95ez">Radio Mosaic est une communauté, un mouvement, une façon de réunir à la fois le passé, le futur et le présent. Même si nous vivons dans des coins fragmentés du globe, nous ne formons qu'un. est une communauté, un mouvement, une façon de réunir à la fois le passé, le futur et le présent. Même si nous vivons dans des coins fragmentés du globe, nous ne formons qu'un.</p></div> <div class="face eleven red svelte-1uz95ez"><p lang="pt" class="svelte-1uz95ez">A Radio Mosaic é uma comunidade, um movimento, uma forma de reunir o passado, o futuro e o presente ao mesmo tempo. Embora vivamos em cantos fragmentados do globo, somos todos um só. É uma comunidade, um movimento, uma forma de reunir o passado, o futuro e o presente ao mesmo tempo. Embora vivamos em cantos fragmentados do globo, somos todos um só.</p></div> <div class="face twelve svelte-1uz95ez"><p lang="hi" class="rtl svelte-1uz95ez">रेडियो मोज़ेक एक समुदाय है, एक आंदोलन है, अतीत, भविष्य और वर्तमान को एक साथ लाने का एक तरीका है।   हालाँकि हम दुनिया के खंडित कोनों में रहते हों, हम सभी एक हैं।   यह एक समुदाय है, एक आंदोलन है, अतीत, भविष्य और वर्तमान को एक साथ लाने का एक तरीका है।   हालाँकि हम दुनिया के खंडित कोनों में रहते हों, हम सभी एक हैं।</p></div></div></div></div>`);
  bind_props($$props, { obi, obiText });
}
function Flyover($$renderer, $$props) {
  let slug = $$props["slug"];
  let stack = [];
  if (slug) {
    const src = `/images/glimpse/${slug}1x.webp`;
    const id = crypto.randomUUID();
    stack = [...stack, { id, src }];
  }
  $$renderer.push(`<div class="flyover-wrap svelte-1pl8ebu"><!--[-->`);
  const each_array = ensure_array_like(stack);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let item = each_array[$$index];
    $$renderer.push(`<img alt="a overview of the selected city" class="img svelte-1pl8ebu"${attr("src", item.src)}/>`);
  }
  $$renderer.push(`<!--]--></div>`);
  bind_props($$props, { slug });
}
export {
  Flyover as F,
  Obi as O,
  spring as s
};
