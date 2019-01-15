<template>
    <div>
      <el-container class="inputJSON" style="flex-direction: column;">
        <textarea rows="18" cols="50" v-model="jsonFormatter.raw"></textarea>
        <el-button @click="parseJSON" style="margin-top: 1.5rem;">Process</el-button>
      </el-container>
      <el-container style="margin-top: 12px;">
        <div v-if="error" class="error">{{ error }}</div>
        <pre width="100%" v-html="jsonFormatter.formatted"></pre>
      </el-container>
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
