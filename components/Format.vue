<template>
  <div>
    <h2 class="display-2 ma-5 pa-5">
      {{ title }}
    </h2>
    <v-simple-table class="body-1">
      <template v-slot:default>
        <thead>
          <tr>
            <th>File format</th>
            <th>OpenGeode object</th>
            <th>Input</th>
            <th>Output</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="format in formats" :key="format.name">
            <td>{{ format.extension }}</td>
            <td><span v-html="format.cpp" /></td>
            <td>
              <v-icon v-if="format.in" color="primary">
                fas fa-check
              </v-icon>
            </td>
            <td>
              <v-icon v-if="format.out" color="primary">
                fas fa-check
              </v-icon>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String
    },
    formats: {
      required: true,
      type: Array
    }
  }
}
</script>

<style>
.cpp {
  background-color: #ffffff !important;
}
</style> 