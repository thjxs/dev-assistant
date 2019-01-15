<template>
  <div id="app">
    <el-container style="width: 960px; margin: 0 auto; padding-top: 60px;">
      <el-header>
        <h2 style="flex: 1;">{{ currentTab }}</h2>
        <a :href="me.html_url">
          <img :src="me.avatar_url" style="border-radius: 50%" width="32px" :title="me.login">
        </a>
      </el-header>
      <el-container>
        <el-aside style="position: fixed; height: 890px; width: 240px;">
        <ul class="el-menu">
          <li><el-button style="color: #777;" type="text" @click="currentTab = 'BookMarks'">BookMarks</el-button></li>
          <li><el-button style="color: #777;" type="text" @click="currentTab = 'JSONFormatter'">JSONFormatter</el-button></li>
        </ul>
        <el-menu>
          <CustomSubmenu :tree="fileTrees" :key="fileTrees.name" @wahttodo="handleChange"/>
        </el-menu>
        </el-aside>
        <el-main style="max-width: 660px; margin: 0 0 0 auto;">
          <component :is="currentTabComponent" :text="note.text"/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import BookMarks from './components/BookMarks.vue'
import CustomSubmenu from './components/CustomSubmenu.vue'
import JSONFormatter from './components/JSONFormatter.vue'
import Note from './components/Note.vue'
import axios from 'axios'

export default {
  name: 'app',
  components: {
    BookMarks,
    CustomSubmenu,
    JSONFormatter,
    Note
  },
  data () {
    return {
      currentTab: 'BookMarks',
      me: Object,
      fileTrees: {
        name: ''
      },
      note: Object
    }
  },
  computed: {
    currentTabComponent: function () {
      return this.currentTab
    }
  },
  created () {
    this.loadUser()
    this.loadFileTrees()
  },
  methods: {
    loadUser () {
      axios.get('https://api.github.com/users/thjxs').then(response => {
        this.me = response.data
      })
    },
    loadFileTrees () {
      axios.get('http://note.test/files.json').then(response => {
        this.fileTrees = response.data
      })
    },
    fetchNote (target) {
      axios.get(`http://note.test?target=${target}`).then(response => {
        this.note = response.data
      })
    },
    handleChange (path) {
      this.fetchNote(path)
      this.currentTab = 'Note'
    }
  }
}
</script>

<style>
#app {
  font-family: sans-serif;
}
.el-header {
  display: flex;
  align-items: center;
  padding: 0;
  position: fixed;
  width: 990px;
  z-index: 3;
  top: 0;
  background-color: rgba(255,255,255,.4);
}
.el-aside::-webkit-scrollbar {
  width: 5px;
  height: 1px;
}
.el-aside::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: rgba(156,147,147,.6);
}
/*.el-aside::-webkit-scrollbar-track {
}*/

.el-menu {
  border-right: none !important;
}
</style>
