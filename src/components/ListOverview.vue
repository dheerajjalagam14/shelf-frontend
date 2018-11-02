<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-list two-line>
          <template v-for="(item, index) in itemName">
            <v-divider
              v-if="item.divider"
              :inset="item.inset"
              :key="index"
            ></v-divider>
            <v-list-tile
              v-else
              :key='item.title'
              avatar
              @click="'/'"
            >
              <v-list-tile-avatar>
                <img :src='item.avatar'>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html='item.title'></v-list-tile-title>
                <v-list-tile-sub-title v-html='item.subtitle'></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
          <v-list-tile to="/list-overview">
            <v-list-tile-avatar>
              <v-icon>fas fa-plus</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-title>Add New Item</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      itemName: [
        {
          avatar: require('../assets/mike-kenneally-599934-unsplash.jpg'),
          title: 'Blueberrry Spoon',
          subtitle: 'This is my blueberry spoon',
        },
        { divider: true, inset: true },
        {
          avatar: require('../assets/tiko-giorgadze-967254-unsplash.jpg'),
          title: 'Wooden Spoons',
          subtitle: 'These are my wooden spoons',
        },
        { divider: true, inset: true },
        {
          avatar: require('../assets/hue12-photography-668091-unsplash.jpg'),
          title: 'Colorful Spoons',
          subtitle: 'These are my colorful spoons',
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>
