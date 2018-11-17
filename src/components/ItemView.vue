<template>
  <v-container>
    <v-layout align-center justify-space-around column>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
         <v-img
          :src="itemImage"
          height="400"
          width="400"
        ></v-img>
        <v-card-title primary-title>
          <h3 class="headline mb-0">{{itemName}}</h3>
          <v-spacer></v-spacer>
          <v-icon>fas fa-edit</v-icon>
        </v-card-title>
        <v-card-text>
          <h5>Description</h5>
          <p>{{itemLabel}}</p>
        </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      itemName: 'Super Special Stamp My Grandma Gave Me',
      itemLabel: 'This is a description of the stamp the user created',
      itemImage: require('../assets/aleksey-boev-675376-unsplash.jpg'),
      // Photo by Aleksey Boev on Unsplash
    };
  },
};
</script>

<style scoped>
</style>
