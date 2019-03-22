<template>
<ul v-if="fileTree.type === 'folder'" class="list-unstyled file-tree">
  <div :level="level" class="tree-name d-flex align-items-center" @click.prevent="opened = !opened"><base-folder-icon/><span class="title">{{ fileTree.name }}</span></div>
  <folders v-for="fileTree in fileTree.child" :level="level+1" :key="fileTree.name" :fileTree="fileTree" v-show="opened"/>
</ul>
<li v-else>
  <a :level="level" @click.prevent="loadNote()" :href="fileTree.path" class="d-flex align-items-center tree-name">
    <base-md-file-icon/>
    <span>{{ fileTree.name }}</span>
  </a>
</li>
</template>

<script>
export default {
  name: 'Folders',
  props: {
    level: Number,
    fileTree: {
      path: 'readme.md'
    }
  },
  data() {
    return {
      opened: false
    }
  },
  methods: {
    loadNote () {
      const payload = { path:this.fileTree.path, name: this.fileTree.name }
      this.$store.dispatch('note/fetchNote', payload)
      this.$store.dispatch('setCurrentTab', 'Note')
    }
  }
}
</script>
