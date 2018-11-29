<template>
  <v-app>
    <v-card>
      <v-toolbar dark color ="#2e86de">
        <v-tooltip bottom>
        <v-btn icon
          slot="activator"
          :to="'/'"
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
        transition="slide-y-transition">
        <v-btn icon slot="activator">
          <v-icon>fas fa-cog</v-icon>
        </v-btn>
          <v-list>
            <v-list-tile
              v-for="item in items"
              :key="item.label"
              @click=""
              :to="item.value"
            >
                <v-list-tile-title v-text="item.label" ></v-list-tile-title>
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
        { label: 'Settings', value: '/settings' },
        { label: 'My Account', value: '/account' },
        { label: 'Help', value: '/help' },
        { label: 'Logout', value: '/login' },
      ],
    };
  },
};
</script>
