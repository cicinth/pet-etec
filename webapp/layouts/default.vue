<template>
  <v-app class="pet-app">
    <toolbar @shareFriend="showDialog = true" />
    <banner />
    <v-content class="page">
      <nuxt />
      <footer-first />
      <dialog-default 
        v-model="showDialog">
        <register-pet 
          @close="showDialog = false"
          @registerPet="registerPet" />
      </dialog-default>
    </v-content>
  </v-app>
</template>

<script>
import { Toolbar } from  '@/components/Partials';
import RegisterPet from '@/components/RegisterPet';
import { FooterFirst, Banner } from '@/components/Main';

import { APIPets } from '@/API/endpoints';
export default {
  components: {
    Toolbar,
    RegisterPet,
    FooterFirst,
    Banner
  },
  data: () => ({
    showDialog: false
  }),
  methods: {
    async registerPet(pet) {
      await APIPets.registerPet(pet)
      .then(res => {
        console.log('pet', res);
        this.showDialog = false;
        this.$nuxt.$emit('setNewPet', pet);
      })
      .catch(error => {

      })
    }
  },
}
</script>
