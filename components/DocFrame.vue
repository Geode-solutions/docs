<template>
  <v-layout column fill-height>
    <v-flex text-xs-center>
      <iframe 
        ref="docFrame"
        width="100%"
        style="border: none;"
        scrolling="no"
        :src="'/docs/' + project + '/index.html'"/>
    </v-flex>
  </v-layout>
</template>


<script>
export default {
  name: "DocFrame",
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
    this.$refs.docFrame.src = this.$refs.docFrame.src;
    setTimeout(() => {
    this.$refs.docFrame.src = this.$refs.docFrame.src;

    }, 5000);
  }
}
</script>
