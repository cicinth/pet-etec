<template>
  <div class="pet-card">
    <div class="pet-card-image">
      <img src="@/assets/img/doguinho.png" />
    </div>
    <div class="pet-card-content pa-3">
      <h4 class="pet-primary--text pet-text-h6 mb-1">{{ name }}</h4>
      <h4 class="font-weight-regular grey--text pet-text-h6 mb-2">{{ state }}/{{ city }}</h4>
      <h4 class="font-weight-regular pet-text-h7">{{ age }}, {{ porte }}, {{ gender }}</h4>
    </div>
  </div> 
</template>

<script type="text/javascript" src="./script.js" />