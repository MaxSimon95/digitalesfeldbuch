<template>
    <div class="contentWrap">
      <h1>3D Viewer</h1>
      <ObjViewer objSource=""/>

    </div>
</template>

<script>
  import ObjViewer from "./ObjViewer";
    export default {
      components: {ObjViewer},
        name: "Viewer3D"
    }
</script>

<style scoped>
.contentWrap{
  padding: 20px
}
</style>
