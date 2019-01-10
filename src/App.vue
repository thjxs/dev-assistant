<template>
  <div id="app">
    <el-container style="width: 760px; margin: 0 auto;">
      <el-header style="display: flex;">
        <h2 style="flex: 1; text-align: center;">{{ currentTab }}</h2>
        <a :href="me.html_url">
          <img :src="me.avatar_url" style="border-radius: 50%" width="32px" :title="me.login">
        </a>
      </el-header>
      <el-container>
        <el-aside width="120px">
        <ul class="el-menu">
          <li><el-button style="color: #777;" type="text" @click="currentTab = 'BookMarks'">BookMarks</el-button></li>
          <li><el-button style="color: #777;" type="text" @click="currentTab = 'JSONFormatter'">JSONFormatter</el-button></li>
        </ul>
        </el-aside>
        <el-main>
          <component :is="currentTabComponent"/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import BookMarks from './components/BookMarks.vue'
import JSONFormatter from './components/JSONFormatter.vue'
import axios from 'axios'

export default {
  name: 'app',
  components: {
    BookMarks,
    JSONFormatter
  },
  data () {
    return {
      currentTab: 'BookMarks',
      me: Object
    }
  },
  computed: {
    currentTabComponent: function () {
      return this.currentTab
    }
  },
  created () {
    this.loadUser()
  },
  methods: {
    loadUser () {
      axios.get('https://api.github.com/users/thjxs').then(response => {
        this.me = response.data
      })
    }
  }
}
</script>
