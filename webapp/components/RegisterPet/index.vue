<template>
  <v-card class="pa-4">
    <h3 class="px-2 align-center-text font-weight-regular">Novo Animal</h3>
    <h4 class="px-2 font-weight-regular mb-2">Informações do animal</h4>
    <v-form>
      <v-layout
        row
        wrap>
        <v-flex xs6 px-2>
          <v-text-field
            v-model="form.pet_type"
            label="Tipo"
            outline />
        </v-flex>
        <v-flex xs6 px-2>
          <v-text-field
            label="Nome do Animal"
            v-model="form.name"
            outline />
        </v-flex>
        <v-flex xs4 px-2>
          <v-text-field
            label="Idade"
            v-model="form.age"
            outline />
        </v-flex>
        <v-flex xs4 px-2>
          <v-text-field
            label="Porte"
            v-model="form.porte"
            outline />
        </v-flex>
        <v-flex xs4 px-2>
          <v-text-field
            label="Sexo"
            v-model="form.gender"
            outline />
        </v-flex>
        <v-flex xs12 px-2>
          <v-textarea
            label="Descrição"
            v-model="form.pet_description"
            outline />
        </v-flex>
      </v-layout>
    </v-form>
    <h4 class="px-2 font-weight-regular mb-2">Informações do animal</h4>
    <v-form>
      <v-layout
        row
        wrap>
        <v-flex xs4 px-2>
          <v-text-field
            label="Cidade"
            v-model="form.address.city"
            outline />
        </v-flex>
        <v-flex xs4 px-2>
          <v-text-field
            label="estado"
            v-model="form.address.state"
            outline />
        </v-flex>
        <v-flex xs4 px-2>
          <v-text-field
            label="Telefone"
            v-model="form.phone"
            outline
            mask="(##) #####-####" />
        </v-flex>
      </v-layout>
      <div class="align-right-text">
        <v-btn
          @click="$emit('close')">Cancelar</v-btn>
        <v-btn 
          class="primary"
          @click="register(form)">Cadastrar</v-btn>
      </div>
    </v-form>
  </v-card>
</template>

<script type="text/javascript" src="./script.js" />