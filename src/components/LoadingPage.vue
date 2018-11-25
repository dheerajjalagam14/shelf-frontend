<template>
  <v-app>
<!-- <v-container align-center justify-center column> -->

<h1>Loading</h1>
<p></p>
<div class="text-xs-center">
   <v-progress-circular
     :size="200"
     color="primary"
     indeterminate
   ></v-progress-circular>
</div>
<v-btn align-center color = "#D35400"><strong>Retry</strong></v-btn>
<p></p>

<!-- </v-container> -->
</v-app>
</template>

<script>

</script>

 <style scoped>
h1 {
  text-align: center;
}
 </style>
