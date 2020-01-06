<template>
  <v-row class="flex-column">
    <theme title="Guide" :cards="guides" />
    <theme title="Code documentation" :cards="projects" />
  </v-row>
</template>

<script>
import Theme from '@/components/Theme'

export default {
  components: {
    Theme
  },
  data: () => ({
    guides: [
      {
        title: 'Data model',
        descr: 'OpenGeode data model for representing geometric models',
        route: 'datamodel'
      },
      {
        title: 'Supported file formats',
        descr: 'OpenGeode file formats available',
        route: 'formats'
      },
      {
        title: 'How to use IO file formats',
        descr:
          'How to link with OpenGeode-IO or OpenGeode-GeosciencesIO to use OpenGeode file formats',
        route: 'link-with-io'
      },
      {
        title: 'Attributes (soon)',
        descr: 'OpenGeode attribute usage and implementation',
        route: ''
      },
      {
        title: 'Mesh (soon)',
        descr: 'OpenGeode mesh usage and implementation',
        route: ''
      },
      {
        title: 'Builders (soon)',
        descr: 'OpenGeode way to construct and edit meshes and models',
        route: ''
      }
    ],
    projects: [
      {
        title: 'OpenGeode',
        descr:
          'Open source platform for representing and manipulating geometric models',
        route: 'opengeode'
      },
      {
        title: 'OpenGeode-IO',
        descr: 'Implementation of input and output formats for OpenGeode',
        route: 'opengeode-io'
      },
      {
        title: 'OpenGeode-Geosciences',
        descr: 'OpenGeode module for Geosciences',
        route: 'opengeode-geosciences'
      },
      {
        title: 'OpenGeode-GeosciencesIO',
        descr: 'Input/Output formats for OpenGeode-Geosciences',
        route: 'opengeode-geosciencesio'
      }
    ]
  })
}
</script>
