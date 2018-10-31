<template>
  <div class="listOverview">
    <v-layout row>
      <v-flex xs12 sm8 md4>
        <v-card>
          <v-toolbar color="cyan"
          dark
          >
          <v-toolbar-side-icon>
        </v-toolbar-side-icon>
            <v-toolbar-title>Movies</v-toolbar-title>

            <v-btn icon>
              <v-icon></v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon></v-icon>
            </v-btn>
          </v-toolbar>

          <v-list three-line>
          <template v-for="(item, index) in itemName">
            <v-subheader
              v-if="item.header"
              :key="item.header"
            >
              {{ item.header }}
            </v-subheader>

            <v-divider
              v-else-if="item.divider"
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
        </v-list>
        <v-btn center
        dark>
        Add New Movie</v-btn>

      </v-card>
    </v-flex>
  </v-layout>
</div>
</template> -->
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
