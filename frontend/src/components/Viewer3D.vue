<template>
    <div class="contentWrap">
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
  padding: 20px 0
}
</style>
