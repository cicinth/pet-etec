<template>
  <v-toolbar color="transparent" class="pet-header">
    <v-toolbar-items>
      <v-btn flat>Adotar um amiguinho</v-btn>
      <v-btn 
        flat
        @click="$emit('shareFriend')">Divulgar um bichinho</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat>Cadastre-se</v-btn>
      <v-btn flat>Entre</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>