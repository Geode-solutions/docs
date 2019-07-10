<template>
  <v-layout column fill-height>
    <v-flex text-xs-center>
      <iframe 
        ref="docFrame"
        width="100%"
        style="border: none;"
        scrolling="no"
        :src="src"/>
    </v-flex>
  </v-layout>
</template>


<script>
export default {
  name: "DocFrame",
  data() {
    return {
      src: "about:blank"
    }
  },
  props: {
    project: {
      required: true,
      type: String
    }
  },
  mounted() {
    this.$refs.docFrame.addEventListener("load", ()=>{
      this.$refs.docFrame.style.height = this.$refs.docFrame.contentWindow.document.body.offsetHeight + "px";
    });
    this.src = "docs/" + this.project + "/index.html";
  }
}
</script>
