<template>
  <div style="padding: 1.5rem;">
    <h1 style="margin-bottom: 1rem;text-transform: uppercase;text-align: center;">{{ name }}</h1>
    <div v-html="text"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Note',
  computed: {
    ...mapState({
      name: state => state.note.currentNoteName,
      text: state => state.note.text
    })
  }
}
</script>
