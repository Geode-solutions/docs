<template>
  <div>
    <h2 class="display-1 ma-5">{{ title }}</h2>
    <v-row>
    <v-col v-for="card in cards" :key="card.title" cols="4">
      <v-card nuxt :to="card.route" style="height: 100%">
        <v-card-title primary-title class="headline">{{ card.title }}</v-card-title>
        <v-card-text>{{ card.descr }}</v-card-text>
      </v-card>
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
