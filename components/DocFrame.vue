<template>
  <v-row fill-height>
    <v-col align="center">
      <v-btn @click="goIndex">
        Back to index
      </v-btn>
      <span class="display-1 ml-5">{{ project }} documentation</span>
      <v-col />
      <iframe 
        ref="docFrame"
        width="100%"
        style="border: none;"
        scrolling="no"
        :src="index"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "DocFrame",
  props: {
    project: {
      required: true,
      type: String
    },
    private: {
      default: false,
      type: Boolean
    }
  },
  computed: {
    path() {
      if(this.private) {
        return '/docs/' + this.project +'_private'
      }
      return '/docs/' + this.project
    },
    index() {
      return this.path +'/genindex.html'
    }
  },
  mounted() {
    if(this.$route.query.page) {
      this.$refs.docFrame.src = this.path + '/'+this.$route.query.page
    }
    this.$refs.docFrame.addEventListener("load", ()=>{
      this.$refs.docFrame.style.height = this.$refs.docFrame.contentWindow.document.body.offsetHeight + "px"
    })
  },
  methods: {
    goIndex() {
      this.$refs.docFrame.src = this.index
    }
  }
}
</script>
