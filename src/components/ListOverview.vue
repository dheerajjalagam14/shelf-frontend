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
              :to="'/item-view'"
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
          <v-list-tile to="/new-item">
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
          avatar: 'https://m.media-amazon.com/images/M/MV5BMTg5NTA3NTg4NF5BMl5BanBnXkFtZTcwNTA0NDYzOA@@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
          title: 'Looper',
          subtitle: 'Movie Info',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_.jpg',
          title: 'Avatar',
          subtitle: 'Movie Info',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://m.media-amazon.com/images/M/MV5BMjI0MDMzNTQ0M15BMl5BanBnXkFtZTgwMTM5NzM3NDM@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
          title: 'A Quiet Place',
          subtitle: 'Movie Info',
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>
