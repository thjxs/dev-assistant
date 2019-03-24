<template>
  <div style="font-family: monospace; padding: 1.5rem;">
    <h1 style="margin-bottom: 1rem;text-transform: uppercase;text-align: center;">{{ name }}</h1>
    <div v-html="text"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Prism from 'prismjs'
export default {
  name: 'Note',
  computed: {
    ...mapState({
      name: state => state.note.currentNoteName,
      text: state => state.note.text
    })
  },
  created() {
    this.$nextTick(function() {
      Prism.highlightAll()
    })
  },
  watch: {
    text: function () {
      this.$nextTick(function() {
        Prism.highlightAll()
      })
    }
  }
}
</script>
