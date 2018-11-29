<template>
  <v-layout column wrap>
    <v-list one-line>
      <template v-for="(item, index) in shelves">
        <v-list-tile
          :key="index"
          avatar
          to="/list-overview"
        >
          <v-list-tile-avatar>
            <v-icon>{{ item.shelfIcon }}</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.shelfName }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
      <v-list-tile :to="'/new-shelf'">
        <v-list-tile-avatar>
          <v-icon>fas fa-plus</v-icon>
        </v-list-tile-avatar>
        <v-list-tile-title>Create New Shelf</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      shelves: [
        {
          shelfIcon: 'fas fa-film',
          shelfName: 'Movies',
        },
        {
          shelfIcon: 'fas fa-book',
          shelfName: 'Books',
        },
        {
          shelfIcon: 'fas fa-gamepad',
          shelfName: 'Videogames',
        },
        {
          shelfIcon: 'far fa-envelope',
          shelfName: 'Stamps',
        },
        {
          shelfIcon: 'fas fa-music',
          shelfName: 'Music',
        },
      ],
    };
  },
};
</script>

<style lang="css" scoped>
</style>
