<template>
  <div>

      <ion-text >Willkommen im Digitalen Feldbuch.</ion-text>

      <ion-text>Wählen Sie über das Menu oben links aus, was Sie tun möchten!</ion-text>

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
<style scoped>
  div{
    padding: 50px
  }
  </style>
