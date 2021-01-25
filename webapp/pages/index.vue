<template>
  <v-container class="page">
    <div class="align-center-text">
      <img src="@/assets/img/icon.png" />
    </div>
    <h2 class="align-center-text pet-primary--text pet-text-h4">Animais cadastrados</h2>
    <h4 class="align-center-text font-weight-regular pet-text-h6">Esses são os animais cadastrados em nosso site. Encontre um amigo perfeito para você:</h4>
    <v-layout
      row
      wrap
      py-2>
      <v-flex 
        v-for="(pet, index) in pets"
        :key="index"
        xs4 
        md3
        py-4>
        <card-pet
        :name="pet.name"
        :state="pet.address.state" 
        :city="pet.address.city"
        :porte="pet.porte"
        :gender="pet.gender"
        :age="pet.age" />
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
import { APIPets } from '@/API/endpoints';

export default {
  data: () => ({
    pets: [
      {
        name: 'Frangolino',
        address: {
          state: 'Minas',
          city: 'SP'     
        },
        porte: '200Kg',
        gender: 'Homão'
      }
    ]
  }),
  mounted() {
    this.$nuxt.$on('setNewPet', item => {
      this.pets.push(item);
    });
    this.loadPage();
  },
  methods: {
    async loadPage() {
      this.pets = await this.getPets();
      console.log('teste', this.pets);
    },
    getPets() {
      return APIPets.getPets();
    }
  },
}
</script>
