<template>
  <v-layout
    column
    justify-center
    align-left
  >
    <v-flex
      v-for="project in projects"
      :key="project.title"
      xs12
      sm8
      ma-3
    >
      <v-card nuxt :to="project.route">
        <v-card-title primary-title class="headline">
          {{ project.title }}
        </v-card-title>
        <v-card-text>
          {{ project.descr }}
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>

export default {
  data: () => ({
    projects: [
      { 
        title: "OpenGeode", 
        descr: "Open source platform for representing and manipulating geometric models", 
        route: "opengeode"
      },
      { 
        title: "OpenGeode-IO", 
        descr: "Implementation of input and output formats for OpenGeode", 
        route: "opengeode-io"
      },
      { 
        title: "OpenGeode-Geosciences", 
        descr: "OpenGeode module for Geosciences", 
        route: "opengeode-geosciences"
      },
      { 
        title: "OpenGeode-GeosciencesIO", 
        descr: "Input/Output formats for OpenGeode-Geosciences", 
        route: "opengeode-geosciencesio"
      }
    ]
  })
}
</script>
