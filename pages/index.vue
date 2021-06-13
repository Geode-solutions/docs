<template>
  <v-row class="flex-column">
    <theme title="Guides" :cards="guides" />
    <theme title="Developer guides" :cards="devguides" />
    <theme title="Open source code documentation" :cards="projects" />
    <theme title="Proprietary code documentation" :cards="projectsX" />
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
        title: 'Models',
        descr: 'OpenGeode data model for representing geometric models',
        route: 'models'
      },
      {
        title: 'Meshes',
        descr: 'OpenGeode mesh usage and implementation',
        route: 'meshes'
      },
      {
        title: 'Attributes',
        descr: 'OpenGeode attribute usage and implementation',
        route: 'attributes'
      },
      {
        title: 'Supported file formats',
        descr: 'OpenGeode file formats available',
        route: 'formats'
      },
      {
        title: 'Builders',
        descr: 'OpenGeode way to construct and edit meshes and models',
        route: 'builders'
      }
    ],
    devguides: [
      {
        title: 'How to compile OpenGeode',
        descr:
          'Complete guide on configuration and compilation of OpenGeode on Windows, Linux and macOS',
        route: 'how-to-compile'
      },
      {
        title: 'How to create OpenGeode module',
        descr: 'Guide on creation of your own OpenGeode modules',
        route: 'how-to-create-module'
      },
      {
        title: 'How to compile OpenGeode module',
        descr:
          'Configuration and compilation of OpenGeode module on Windows, Linux and macOS',
        route: 'how-to-compile-module'
      },
      {
        title: 'How to use OpenGeode bindings',
        descr:
          'Configuration and execution of OpenGeode Python bindings on Windows, Linux and macOS',
        route: 'how-to-use-binding'
      },
      {
        title: 'Where to get OpenGeode code',
        descr:
          'Two ways to get OpenGeode code: download precompiled binaries or download source code',
        route: 'where-to-get-code'
      },
      {
        title: 'How to use IO file formats',
        descr:
          'How to link with OpenGeode-IO or OpenGeode-GeosciencesIO to use OpenGeode file formats',
        route: 'link-with-io'
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
    ],
    projectsX: [
      {
        title: 'Geode-Common',
        descr: 'Common tools and utils',
        route: 'geode-common'
      },
      {
        title: 'Geode-Conversion',
        descr: 'Conversion between meshes and models',
        route: 'geode-conversion'
      },
      {
        title: 'Geode-Parameterization',
        descr: 'Paramaterization computations',
        route: 'geode-parameterization'
      },
      {
        title: 'Geode-SimplexRemesh',
        descr: 'Simplicial mesh/remeshing of models',
        route: 'geode-simplexremesh'
      },
      {
        title: 'Geode-SimplexRemeshGeosciences',
        descr: 'Simplicial mesh/remeshing of geological models',
        route: 'geode-simplexremeshgeosciences'
      }
    ]
  })
}
</script>
