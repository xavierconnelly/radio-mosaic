<script>
  import { onMount } from "svelte";

  export let timezone;

  let now = new Date();
  let interval;
  let formatted = "";

  onMount(() => {
    // initial format
    updateTime();

    // update every minute
    interval = setInterval(updateTime, 60_000);

    return () => clearInterval(interval);
  });

  function updateTime() {
    now = new Date();
    formatted = new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
      timeZone: timezone
    }).format(now);
  }
</script>

<span>{formatted}</span>