<template>
  <v-tabs v-model="tab" bg-color="primary">
    <v-tab value="one">C++</v-tab>
    <v-tab value="two">Python</v-tab>
  </v-tabs>
  <v-window v-model="tab">
    <v-window-item value="one">
      <slot name="cpp"></slot>
      <div v-html="renderedCppCode"></div>
    </v-window-item>
    <v-window-item value="two">
      <slot name="py"></slot>
    </v-window-item>
  </v-window>
</template>

<script setup>
import tab from '../composables/tab'
</script>
