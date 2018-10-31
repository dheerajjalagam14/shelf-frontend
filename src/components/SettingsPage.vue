<template>
<v-app>
<h1>Settings</h1>
<v-radio-group v-model="radios">
  <div slot="label"><strong>Select Theme</strong></div>
  <v-radio value="Light">
    <div slot="label"><strong>Light</strong></div>
      </v-radio>
  <v-radio value="Dark"> 
    <div slot="label"><strong>Dark</strong></div>
      </v-radio>
  </v-radio-group>
</v-app>
</template>

<script>
  export default {
    data() {
      return {
        dark: false,
        light: false,
      }
    }
  }
</script>

<style scoped>
* {
  margin: 10px 10px 10px 10px
}

</style>
