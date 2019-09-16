<template>
  <div>
    <Scene v-model="myScene">
      <Camera type="touch"></Camera>

      <PointLight specular="#ffffff" :position="[0,5,-7.4]"></PointLight>

      <!--<Entity :position="[0, -1.5, -8]">-->
      <Entity :position="entityPosition">
         <!-- -->
        <!-- PointLight diffuse="#FFFFFF"></PointLight> -->
        <Asset :src="Imported3DObject" :position="[assetPositionX,assetPositionY,assetPositionZ]" :rotation="[assetRotationX,assetRotationY,assetRotationZ]">
          <!--<Animation property="rotation.y" :duration="5" :end="Math.PI * 2"></Animation> -->


        </Asset>
        <!--<Asset src="http://www.babylonjs-playground.com/scenes/StanfordBunny.obj" :scaling="[50.5, 50.5, 50.5]" :position="[-1, -7.25, -0.5]" :rotation="[0, Math.PI, 0]"></Asset>


         <!--<template v-for="x in [0, 4, -4]">
           <template v-for="y in [0, 4, -4]">
             <Box v-for="z in [0, 4, -4]" :position="[x, y, z]" :key="`${x},${y},${z}`"></Box>
           </template>
         </template>-->
      </Entity>
    </Scene>

    <!--<input type="file" @change="openFile($event)"> -->
<div>
    <ion-button class="smallButton" @click="turnXDown"> X<ion-icon name="undo"></ion-icon> </ion-button>
    <ion-button class="smallButton" @click="turnXUp"> X<ion-icon name="redo"></ion-icon> </ion-button>

    <ion-button class="smallButton" @click="turnLeft"> Y<ion-icon name="undo"></ion-icon> </ion-button>
    <ion-button class="smallButton" @click="turnRight"> Y<ion-icon name="redo"></ion-icon>  </ion-button>

    <ion-button class="smallButton" @click="turnZDown"> Z<ion-icon name="undo"></ion-icon>  </ion-button>
    <ion-button class="smallButton" @click="turnZUp"> Z<ion-icon name="redo"></ion-icon> </ion-button>

  <ion-button color="secondary" @click="nextObj"> Next 3D Model </ion-button>
</div>

    <div><ion-button class="smallButton" @click="moveXDown"> X<ion-icon name="remove"></ion-icon> </ion-button>
      <ion-button class="smallButton" @click="moveXUp"> X<ion-icon name="add"></ion-icon> </ion-button>

      <ion-button class="smallButton" @click="moveYDown"> Y<ion-icon name="remove"></ion-icon> </ion-button>
      <ion-button class="smallButton" @click="moveYUp"> Y<ion-icon name="add"></ion-icon>  </ion-button>

      <ion-button class="smallButton" @click="moveZDown"> Z<ion-icon name="remove"></ion-icon>  </ion-button>
      <ion-button class="smallButton" @click="moveZUp"> Z<ion-icon name="add"></ion-icon> </ion-button>

      <ion-button color="secondary" @click="lastObj"> Last 3D Model </ion-button>

    </div>


    <!--<p v-if="objVisible" :key="objVisible"> {{Imported3DObject}}</p> -->

  </div>
</template>

<script>
  // import * as BABYLON from 'vue-babylonjs';
  // let Vue = require('vue');
  // this.use(require('vue-babylonjs'));
  //import '../pep.js'
  import VueCookies from 'vue-cookies'
  import {Scene, Asset, Box, Entity, Camera, HemisphericLight, Animation} from 'vue-babylonjs'
  import Imported3DObject from 'file-loader!../assets/obj/Trachyt5.obj'
  import fake3DObject from 'file-loader!../assets/obj/amphoratest.obj'
  console.log("mudamudamuda")
  console.log(Imported3DObject)

  let PouchDB = require('pouchdb-browser').default
  let db = new PouchDB('obj_database') // creates new database or opens existing one
  let reader = new FileReader();

  export default {
    name: "ObjViewer",
    data() {
      return {
        Imported3DObject,
        fake3DObject,
        myScene: null,
        myEntity: null,
        myBox: null,
        objVisible: false,

        assetPosition: [0, 0, 0],
        assetRotation:[-0.8, 135, 0],
        assetRotationX: -0.8,
        assetRotationY: 135,
        assetRotationZ: 0,
        entityPosition: [0, 0, 0],
        assetPositionX: 1.4,
        assetPositionY: -0.6,
        assetPositionZ: -9,
      }
    },
    //mixins: [Entity],
    components: {Scene, Box},
    watch: {
      myScene() {
        // myScene is now available from the component
        // do something with it here or call a method to use it from here
        console.log("myScene is now available from the component")
      },

      myEntity() {
        // myEntity is now available from the component
        // do something with it here or call a method to use it from here
      },

      myBox() {
        // myBox is now available from the component
        // do something with it here or call a method to use it from here
      },
    },
    created() {

      var file = btoa(this.Imported3DObject)
/*
      db.put({
        _id: 'mydoc',
        _attachments: {
          filename: {
            type: 'obj',
            data: file
          }
        }
      }).catch(function (err) {
        console.log(err);
      });
*/

    },
    methods: {
      turnLeft(){
        this.assetRotationY -= 0.1
        console.log("assetRotationY = " + this.assetRotationY)
      },
      turnRight(){
        this.assetRotationY += 0.1
        console.log("assetRotationY = " + this.assetRotationY)
      },
      turnXUp(){
        this.assetRotationX += 0.1
        console.log("assetRotationX = " + this.assetRotationX)
      },
      turnXDown(){
        this.assetRotationX -= 0.1
        console.log("assetRotationX = " + this.assetRotationX)
      },
      turnZUp(){
        this.assetRotationZ += 0.1
        console.log("assetRotationZ = " + this.assetRotationZ)
      },
      turnZDown(){
        this.assetRotationZ -= 0.1
        console.log("assetRotationZ = " + this.assetRotationZ)
      },
      moveYUp(){
        this.assetPositionY -= 0.1
        console.log("assetPositionY = " + this.assetPositionY)
      },
      moveYDown(){
        this.assetPositionY += 0.1
        console.log("assetPositionY = " + this.assetPositionY)
      },
      moveXUp(){
        this.assetPositionX += 0.1
        console.log("assetPositionX = " + this.assetPositionX)
      },
      moveXDown(){
        this.assetPositionX -= 0.1
        console.log("assetPositionX = " + this.assetPositionX)
      },
      moveZUp(){
        this.assetPositionZ += 0.1
        console.log("assetPositionZ = " + this.assetPositionZ)
      },
      moveZDown(){
        this.assetPositionZ -= 0.1
        console.log("assetPositionZ = " + this.assetPositionZ)
      },
      nextObj () {
        this.Imported3DObject = this.fake3DObject//URL.createObjectURL(event.target.files[0])
      },
      lastObj () {
        this.Imported3DObject = this.fake3DObject//URL.createObjectURL(event.target.files[0])
      },
      processFile(event) {
        console.log(event.target.files[0])
        console.log(reader.readAsDataURL(event.target.files[0]))
      },
      openFile (event) {




        console.log(event.target.files[0])
        console.log(URL.createObjectURL(event.target.files[0]))
        this.Imported3DObject = this.fake3DObject//URL.createObjectURL(event.target.files[0])
        var context = this
        console.log(this.objVisible)

        var input = event.target;
/*
        var reader = new FileReader();
        reader.onload = function(){
          var dataURL = reader.result;
          context.Imported3DObject = dataURL;
          //context.Imported3DObject = event.target.files[0]
          //console.log(context.Imported3DObject);
          //var output = document.getElementById('output');
          //output.src = dataURL;


          context.objVisible = true;
          context.$forceUpdate();
        };
        reader.readAsText(input.files[0]); */
      }
    }


  }
</script>

<style scoped>

  .smallButton button{
    padding: 0 10px
  }

</style>
