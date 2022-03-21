<template>
  <div id="app">
    <button @click="setName">点击</button>
    <TV :url_UDF="url_UDF" :symbolName="symbolName" lang="zh" :toolBar="false" />
  </div>
</template>

<script>
import TV from '@/components/TV/tradingView.vue'
export default {
  components: {
    TV
  },
  name: 'App',
  data() {
    return {
      symbolName: 'QWERTY',
      url_UDF: 'http://localhost:8083'
    }
  },
  methods: {
    setName() {
      this.symbolName = this.symbolName + 'q'
    }
  }
}
</script>

<style></style>
