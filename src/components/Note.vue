<template>
  <div v-html="text" style="padding: 1.5rem;"></div>
</template>

<script>
export default {
  name: 'Note',
  props: {
    text: String
  }
}
</script>

<style type="text/css">
pre,
pre[class*="language-"] {
  font-size: 12px;
  line-height: 2.0;
}

pre,
pre[class*="language-"] {
  background: rgba(238, 238, 238, .35);
  border-radius: 3px;
  padding: .5rem;
  box-shadow: 0 1px 1px rgba(0,0,0,.125);
}
</style>
