<template>
  <v-layout column justify-center align-left>
    <h2 class="display-1 ma-5">Guide</h2>
    <v-flex v-for="guide in guides" :key="guide.title" ma-3>
      <v-card nuxt :to="guide.route">
        <v-card-title primary-title class="headline">{{ guide.title }}</v-card-title>
        <v-card-text>{{ guide.descr }}</v-card-text>
      </v-card>
    </v-flex>

    <h2 class="display-1 ma-5">Code documentation</h2>
    <v-flex v-for="project in projects" :key="project.title" ma-3>
      <v-card nuxt :to="project.route">
        <v-card-title primary-title class="headline">{{ project.title }}</v-card-title>
        <v-card-text>{{ project.descr }}</v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
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
