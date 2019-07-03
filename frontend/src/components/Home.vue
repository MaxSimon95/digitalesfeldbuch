<template>
  <div>
    <ion-content class="ion-content" padding>
      <ion-button @click="openModal">Open Modal</ion-button>
    </ion-content>
  </div>
</template>

<script>
  import Modal from './HelloWorld.vue'

  export default {
    methods: {
      openModal() {
        return this.$ionic.modalController
          .create({
            component: Modal,
            componentProps: {
              data: {
                content: 'New Content',
              },
              propsData: {
                title: 'New title',
              },
            },
          })
          .then(m => m.present())
      },
      dismissModal(){
  console.log("dismissModal called")
  }
  }
  }
</script>
