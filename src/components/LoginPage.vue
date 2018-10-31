<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <v-card class='elevation-5'>
                <v-toolbar dark color="#D35400">
                <v-toolbar-title align-center>Login</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="fas fa-user-circle" name="login"
                  label="Username" type="text"></v-text-field>
                  <v-text-field id="password" prepend-icon="fas fa-lock" name="password"
                  label="Password" type="text"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>

                <v-btn dark color="#D35400">Login</v-btn>
                  <v-spacer></v-spacer>
                <v-btn dark color="#D35400">Create Account</v-btn>
              </v-card-actions>
              </v-card>
          </v-flex>
        </v-layout>

        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

</script>

<style scoped>

</style>
