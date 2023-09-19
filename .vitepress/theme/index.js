// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style.css'
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from 'vuetify/components'
import '@mdi/font/css/materialdesignicons.css'
import colors from 'vuetify/lib/util/colors'
import 'vuetify/styles'

const dark_theme = {
  colors: {
    primary: colors.teal.darken1,
    secondary: colors.teal.lighten4
  }
}

const vuetify = createVuetify({ 
  components,
  theme: {
    defaultTheme: 'dark_theme',
    themes: {
      dark_theme,
    }
  }, 
})
export default {
  extends: Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.use(vuetify);
  }
}