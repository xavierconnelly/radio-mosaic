<script>
  export let data;
</script>

{#key data.url} 
	<slot />
{/key}

<style>
nav {
  position: fixed;
  top: 0;
  right: 0;
  height: 44px;
  padding-right: 30px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  font-size: 24px;
  line-height: 44px;
  z-index: 99;
}

/* media stylings ~ TABLET */
@media (min-width: 700px) and (max-width: 1280px) {
}

/* media stylings ~ MOBILE */
@media (max-width: 700px) {
    nav {
        display: none;
  }
}
</style>