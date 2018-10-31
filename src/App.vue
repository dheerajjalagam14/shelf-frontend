<template>
  <v-app>
    <v-card>

    <v-toolbar color ="#D35400" dark>

    <v-tooltip bottom>
    <v-btn icon
    slot="activator"
    dark
    to="/"
    >
      <v-icon>fa fa-home</v-icon>
    </v-btn>
    <span>Home</span>
    </v-tooltip>

    <v-tooltip bottom>
    <v-btn icon
    slot="activator">
      <v-icon>fas fa-arrow-left</v-icon>
    </v-btn>
    <span>Back</span>
  </v-tooltip>

  <v-spacer></v-spacer>

      <v-toolbar-title center>Shelves</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu open-on-hover
        :nudge-width="100"
        dark
        transition="slide-y-transition">

          <v-btn icon
          dark
          slot="activator">

            <v-icon dark>fa fa-cog</v-icon>

            </v-btn>
          <v-list>
            <v-list-tile
              v-for="item in items"
              :key="item"
              @click=""
              >
              <v-list-tile-title v-text="item"></v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </v-toolbar>
      <v-content>
        <router-view/>
      </v-content>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      items: [
        'Settings', 'My Account', 'Help', 'Logout',
      ],
    };
  },
};
</script>
