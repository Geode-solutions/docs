<template>
  <v-app>
    <v-toolbar dark app clipped-left color="primary">
      <v-toolbar-side-icon>
        <v-icon large>$vuetify.icons.logo</v-icon>
      </v-toolbar-side-icon>
      <v-toolbar-title>Geode-solutions</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          flat
          nuxt
          :to="item.to"
          :key="index"
          v-for="(item, index) in items"
        >
          <span>{{ item.title }}</span>
        </v-btn>
      </v-toolbar-items>

    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          { title: 'OpenGeode', to: '/OpenGeode' }
        ]
      }
    }
  }
</script>

<style scoped> *{ text-transform: none !important; } </style>
