<template>
	<v-container>
	  <v-layout align-center justify-center>
      <v-flex xs12 sm6>
        <v-card>
          <v-carousel hide-delimiters>
            <v-carousel-item
              v-for="(item,i) in items"
              :key="i"
              :src="item.src"
            ></v-carousel-item>
          </v-carousel>
          <v-card-title primary-title>
            <div>
              <div class="headline">Movies</div>
            </div>
          </v-card-title>
        </v-card>
    	</v-flex>
    </v-layout>
	</v-container>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
        }
      ]
    }
  }
};
</script>

<style lang="css" scoped>
</style>
