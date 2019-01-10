<template>
    <div>
      <el-container class="inputJSON" style="display: flex;">
        <input v-model="jsonFormatter.raw" style="flex: 1;">
        <el-button @click="parseJSON" style="margin-left: 1.5rem;">Process</el-button>
      </el-container>
      <el-container>
        <div class="formatter-result">
          <pre v-html="jsonFormatter.formatted"></pre>
        </div>
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
    }
  },
  methods: {
    parseJSON () {
      try {
        var raw = JSON.parse(this.jsonFormatter.raw)
        this.jsonFormatter.formatted = JSON.stringify(raw, null, "  ")
      } catch (e) {
        alert(e.name+': '+e.message)
      }
    }
  }
}
</script>
