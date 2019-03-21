<template>
<ul v-if="fileTree.type === 'folder'">
  <div :level="level" class="tree-name d-flex align-items-center" @click.prevent="opened = !opened"><base-folder-icon/><span class="title">{{ fileTree.name }}</span></div>
  <folders v-for="fileTree in fileTree.child" :level="level+1" :key="fileTree.name" :fileTree="fileTree" v-show="opened"/>
</ul>
<li v-else>
  <a :level="level" :href="fileTree.path" class="d-flex align-items-center tree-name">
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
    fileTree: Object
  },
  data() {
    return {
      opened: false
    }
  }
}
</script>

<style type="text/css">
  ul {
    list-style: none;
    padding-left: 0rem;
  }
  div[level="2"] {
    padding-left: 1rem;
  }
  div[level="3"] {
    padding-left: 2rem;
  }
  a[level="2"] {
    padding-left: 1rem;
  }
  a[level="3"] {
    padding-left: 2rem;
  }
  a[level="4"] {
    padding-left: 3rem;
  }
  .tree-name {
    cursor: pointer;
    padding: .5rem 0;
  }
  .tree-name:hover {
    background-color: #eee;
  }
</style>
