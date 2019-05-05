<template>
    <div id="headerDiv">
      <div class="bm-burger-button help-burger">
        <span class="bm-burger-bars line-style help-burger" style="top: 0%"></span>
        <span class="bm-burger-bars line-style help-burger" style="top: 40%"></span>
        <span class="bm-burger-bars line-style help-burger" style="top: 80%"></span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>

  div#headerDiv{
    height: 64px;
    background-color: #594743;
    color: #f5f2f2
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
