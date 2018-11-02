<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4 mt-5>
      <v-card class='elevation-5'>
        <v-toolbar color="#D35400">
          <v-toolbar-title>Create New Shelf</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field
              v-model="shelfName"
              label="Name Your Shelf"
              type="text"></v-text-field>
          </v-form>
          <v-select
            :items="iconOptions"
            label="Pick a shelf icon"
          ></v-select>
        </v-card-text>
        <v-card-actions>
          <v-btn color="#D35400" type='submit'>Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="#D35400" type='submit'>Create Shelf</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      shelfName: null,
      iconOptions: [
        'Movies',
        'Books',
        'Games',
        'Toys',
        'Music',
        'Stamps',
      ],
    };
  },
};
</script>

<style>

</style>
