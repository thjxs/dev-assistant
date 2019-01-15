<template>
  <el-submenu v-if="tree.type == 'folder'" :index="tree.name">
    <template slot="title">{{ tree.name }}</template>
    <CustomSubmenu v-for="tree in tree.child" :key="tree.name" :tree="tree" @change="handlechange" @wahttodo="handlechange"/>
  </el-submenu>
  <el-menu-item v-else index="1">
    <el-button style="color: #777;" type="text" @click="$emit('change', tree.path)" :index="tree.path">{{ tree.name }}</el-button>
  </el-menu-item>
</template>

<script>
export default {
  name: 'CustomSubmenu',
  props: {
    tree: Object
  },
  methods: {
    handlechange (path) {
      this.$emit('wahttodo', path)
    }
  }
}
</script>
