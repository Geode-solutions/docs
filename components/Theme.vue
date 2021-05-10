<template>
  <div class="my-5">
    <h2 class="display-1 ma-5">
      {{ title }}
    </h2>
    <v-row>
      <v-col v-for="card in cards" :key="card.title" cols="5" lg="4">
        <v-hover v-slot="{ hover }">
          <v-card nuxt :to="card.route" :elevation="hover ? 10 : 2" style="height: 100%">
            <v-card-title primary-title class="headline">
              {{ card.title }}
            </v-card-title>
            <v-card-text>{{ card.descr }}</v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String
    },
    cards: {
      required: true,
      type: Array
    }
  }
}
</script>
