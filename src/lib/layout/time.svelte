<script>
  let { timezone } = $props();
  let now = $state(new Date());

  $effect(() => {
    const id = setInterval(() => now = new Date(), 60_000);
    return () => clearInterval(id);
  });

  let formatted = $derived(
    new Intl.DateTimeFormat("en-US", {
      hour: "numeric", minute: "2-digit", hour12: true, timeZone: timezone
    }).format(now)
  );
</script>

<span>{formatted}</span>