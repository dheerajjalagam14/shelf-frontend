<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4 mt-5>
      <v-card class='elevation-5'>
        <v-toolbar dark color="#2e86de">
          <v-toolbar-title>Add New Item</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field
              v-model="itemName"
              label="Name Your Item"
              type="text"></v-text-field>
          </v-form>
        </v-card-text>

        <v-list>
          <template
            v-for="(item, index) in features"
          >
            <div :key="index">
              <template v-if="item.label === null">
                <v-list-tile>
                  <v-list-tile-avatar>
                    <v-icon>fas fa-plus</v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-title>Add New Feature</v-list-tile-title>
                </v-list-tile>
              </template>
              <template v-else>
                <v-list-tile>
                  <v-list-tile-title>{{item.label}}: {{item.value}}</v-list-tile-title>
                </v-list-tile>
                <v-divider></v-divider>
              </template>
            </div>
          </template>
        </v-list>

        <v-card-actions>
          <v-btn dark round color="#2e86de" type='submit' :to="'list-overview'">Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-btn dark round color="#2e86de" type='submit' :to="'/list-overview'">Add Item</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      itemName: null,
      features: [
        {
          label: 'Artist',
          value: 'Neat local painter',
        },
        {
          label: 'Paid',
          value: '$15',
        },
        {
          label: 'Date',
          value: '10/31/2018',
        },
        {
          label: 'Notes',
          value: 'Found at garage sale.',
        },
        {
          label: null,
          value: null,
        },
      ],
    };
  },
};
</script>

<style>

</style>
