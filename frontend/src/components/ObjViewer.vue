<template>
  <div>
  <Scene>
    <Camera type="touch"></Camera>
    <HemisphericLight diffuse="#FFFFFF"></HemisphericLight>
    <Entity :position="[0, 0, 0]">
     <!-- <Animation property="rotation.x" :duration="5" :end="Math.PI * 2"></Animation>
      <Animation property="rotation.y" :duration="5" :end="Math.PI * 2"></Animation>
      <Animation property="rotation.z" :duration="5" :end="Math.PI * 2"></Animation> -->
      <!-- PointLight diffuse="#FFFFFF"></PointLight> -->
      <Asset :src="Imported3DObject"  :position="[0, 0, 1]" :rotation="[0, 0, 0]"></Asset>
      <!--<Asset src="http://www.babylonjs-playground.com/scenes/StanfordBunny.obj" :scaling="[50.5, 50.5, 50.5]" :position="[-1, -7.25, -0.5]" :rotation="[0, Math.PI, 0]"></Asset>


       <!--<template v-for="x in [0, 4, -4]">
         <template v-for="y in [0, 4, -4]">
           <Box v-for="z in [0, 4, -4]" :position="[x, y, z]" :key="`${x},${y},${z}`"></Box>
         </template>
       </template>-->
    </Entity>
  </Scene>
  </div>
</template>

<script>
 // import * as BABYLON from 'vue-babylonjs';
 // let Vue = require('vue');
 // this.use(require('vue-babylonjs'));
  //import '../pep.js'
  import {Scene, Asset, Box, Entity, Camera, HemisphericLight, Animation} from 'vue-babylonjs'
 import Imported3DObject from 'file-loader!../assets/obj/20948_Broken_Amphora_v1_NEW.obj'
    export default {
        name: "ObjViewer",
      data() {
          return {
            Imported3DObject
          }
      },
      //mixins: [Entity],
      components: { Scene, Box },
      created() {
        //BABYLON.SceneLoader.Load("/assets/", "batman.obj", engine, function (newScene) {
          // ...
        //});
      }

    }
</script>

<style scoped>

</style>
