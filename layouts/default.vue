<template>
  <v-app>
    <v-navigation-drawer stateless app clipped permanent>
      <v-list nav>
        <template v-for="(item, index) in items">
          <v-subheader v-if="item.divider" :key="index" class="primary--text">
            {{ item.divider }}
          </v-subheader>
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
          <v-icon large>
            $vuetify.icons.logo
          </v-icon>
        </v-app-bar-nav-icon>
        <v-toolbar-title>Geode-solutions</v-toolbar-title>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { divider: 'GUIDES' },
        { title: 'DataModel', to: '/datamodel' },
        { title: 'Meshes', to: '/meshes' },
        { title: 'Attributes', to: '/attributes' },
        { title: 'Supported file formats', to: '/formats' },
        { divider: 'DEVELOPER GUIDES' },
        { title: 'Compile OpenGeode', to: '/how-to-compile' },
        {
          title: 'Create OpenGeode module',
          to: '/how-to-create-module'
        },
        {
          title: 'Compile OpenGeode module',
          to: '/how-to-compile-module'
        },
        { title: 'Use OpenGeode binding', to: '/how-to-use-binding' },
        { title: 'Get OpenGeode code', to: '/where-to-get-code' },
        { title: 'How to link with OpenGeode-IO', to: '/link-with-io' },
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

<style>
* {
  text-transform: none !important;
}
code {
  background-color: #E0F2F1 !important;
  color: var(--v-primary-base) !important;
  white-space: pre;
}
code.example {
  display: block;
}
.v-card__text, .v-card__title {
  word-break: normal; /* maybe !important  */
}
</style> 
