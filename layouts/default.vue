<template>
  <v-app>
    <v-navigation-drawer
      stateless
      app
      clipped
      permanent
    >
      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          nuxt
          :to="item.to"
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar dark app clipped-left color="primary">
      <v-btn text active-class="" nuxt to="/">
        <v-app-bar-nav-icon>
          <v-icon large>$vuetify.icons.logo</v-icon>
        </v-app-bar-nav-icon>
        <v-toolbar-title>Geode-solutions</v-toolbar-title>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
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
          { title: 'OpenGeode', to: '/opengeode' },
          { title: 'OpenGeode-IO', to: '/opengeode-io' },
          { title: 'OpenGeode-Geosciences', to: '/opengeode-geosciences' },
          { title: 'OpenGeode-GeosciencesIO', to: '/opengeode-geosciencesio' }
        ]
      }
    }
  }
</script>

<style scoped> *{ text-transform: none !important; } </style>
