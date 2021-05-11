<template>
  <v-row>
    <v-col>
      <h2 class="display-1 ma-5">
        {{ title }}
      </h2>
      <v-simple-table class="body-1">
        <template #default>
          <thead>
            <tr>
              <th>File format</th>
              <th>OpenGeode object</th>
              <th v-if="!native">
                Input
              </th>
              <th v-if="!native">
                Output
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="format in formats" :key="format.name">
              <td>{{ format.extension }}</td>
              <td><span v-html="format.cpp" /></td>
              <td v-if="!native">
                <v-icon v-if="format.in" color="primary">
                  fas fa-check
                </v-icon>
              </td>
              <td v-if="!native">
                <v-icon v-if="format.out" color="primary">
                  fas fa-check
                </v-icon>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-col>
  </v-row>
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
    },
    native: {
      type: Boolean,
      default: false
    }
  }
}
</script>
