<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <v-card class='elevation-5'>
        <v-toolbar dark color="#2e86de">
          <v-toolbar-title>Signup</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                prepend-icon="fas fa-user-alt"
                v-model="name"
                label="Enter your Name"
                type="text"></v-text-field>
              <v-text-field
                prepend-icon="fas fa-envelope"
                v-model="email"
                label="Enter your Email"
                type="email"></v-text-field>
              <v-text-field
                id="password"
                prepend-icon="fas fa-lock"
                v-model="password"
                label="Enter password"
                type="password"></v-text-field>
              <v-text-field
                id="confirmedPassword"
                prepend-icon="fas fa-lock"
                v-model="confirmedPassword"
                label="Confirm password"
                type="password"></v-text-field>
            </v-form>
          </v-card-text>
        <v-card-actions>
          <v-btn round dark color="#2e86de" type='submit' @click="registerUser" >Signup</v-btn>
          <v-spacer></v-spacer>
          <v-btn round dark color="#2e86de" type='submit' to="/login">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      name: null,
      password: null,
      confirmedPassword: null,
    };
  },
};
</script>

<style scoped>
</style>
