<template>
    <div id="headerDiv">
      <div class="bm-burger-button help-burger">
        <span class="bm-burger-bars line-style help-burger" style="top: 0%"></span>
        <span class="bm-burger-bars line-style help-burger" style="top: 40%"></span>
        <span class="bm-burger-bars line-style help-burger" style="top: 80%"></span>
      </div>
      <h1>
        {{ $route.meta.title }}
      </h1>
    </div>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>

  h1{
    position: fixed;
    top: 0;
    width: 100%;
    font-size: 18px;
    margin-top: 25px;
  }

  div#headerDiv{
    height: 64px;
    background-color: var(--ion-color-primary);
    color: var(--ion-color-primary-contrast);
    position: sticky;
    z-index: 40;
    left: 0;
    top: 0;
  }

  .bm-burger-button.help-burger {

    width: 36px;
    height: 30px;
    left: 18px;
    top: 18px;
    cursor: pointer;
    z-index: 50;
    position: sticky;
  }

  .line-style.help-burger {
    position: absolute;
    height: 20%;
    left: 0;
    right: 0;
  }

</style>
