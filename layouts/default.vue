<template>
  <v-app>
    <v-navigation-drawer stateless app clipped permanent>
      <v-list nav>
        <template v-for="(item, index) in items">
          <v-subheader v-if="item.divider" :key="index">{{ item.divider }}</v-subheader>
          <v-list-item v-else :key="index" link nuxt :to="item.to" color="primary">
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar dark app clipped-left color="primary">
      <v-btn text active-class nuxt to="/">
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
        { divider: 'GUIDE' },
        { title: 'DataModel', to: '/datamodel' },
        { title: 'Supported file formats', to: '/formats' },
        { divider: 'CODE DOCUMENTATION' },
        { title: 'OpenGeode', to: '/opengeode' },
        { title: 'OpenGeode-IO', to: '/opengeode-io' },
        { title: 'OpenGeode-Geosciences', to: '/opengeode-geosciences' },
        { title: 'OpenGeode-GeosciencesIO', to: '/opengeode-geosciencesio' }
      ]
    }
  }
}
</script>

<style scoped>
* {
  text-transform: none !important;
}
</style>
