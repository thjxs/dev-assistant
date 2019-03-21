<template>
  <div class="row d-flex flex-column">
    <div class="d-flex align-items-center">
      <button class="btn close" @click.prevent="$emit('close')">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="icon">
          <path d=" M10 10 m0 2 l5 5 2 -2 -5 -5 5 -5 -2 -2 -5 5 -5 -5 -2 2 5 5 -5 5 2 2 5 -5z "/>
         </svg>
      </button>
      <button class="btn ml-auto" @click="parseJSON">Parse</button>
    </div>
    <textarea class="inputJSON" spellcheck="false" rows="18" cols="50" v-model="jsonFormatter.raw"></textarea>
    <div v-if="error" class="error">{{ error }}</div>
    <pre class="fade" v-html="jsonFormatter.formatted"></pre>
  </div>
</template>

<script>
export default {
  name: 'JSONFormatter',
  data () {
    return {
      jsonFormatter: {
        raw: '',
        formatted: ''
      },
      error: null
    }
  },
  methods: {
    parseJSON () {
      try {
        var raw = JSON.parse(this.jsonFormatter.raw)
        this.jsonFormatter.formatted = JSON.stringify(raw, null, "  ")
        this.error = null
      } catch (err) {
        this.error = err.toString()
        this.jsonFormatter.formatted = null
      }
    }
  }
}
</script>
