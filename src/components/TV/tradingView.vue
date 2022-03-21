<template>
  <div class="sTradingviewContent">
    <div :id="domId" :style="{ width: width, height: height }"></div>
  </div>
</template>
<script>
import * as Chart from './static/charting_library.js'

import * as DataFeed from './static/dataFeed.js'
import config from './config'
export default {
  name: 'TV',
  props: {
    //Dom元素id
    domId: {
      type: String,
      default: function () {
        return 'tradeView'
      }
    },
    url_UDF: {
      type: String,
      required: true
    },
    symbolName: {
      type: String,
      required: true
    },
    width: {
      type: String,
      default: '100vw'
    },
    height: {
      type: String,
      default: '100vh'
    },
    lang: {
      type: String
    },
    toolBar: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    symbolName(v) {
      if (v) {
        this.chart = null
        this.datafeeds = null
        this.$nextTick(() => {
          this.initDataFeed()
          this.loadChart()
        })
      }
    },
    lang(v) {
      if (v) {
        this.chart = null
        this.datafeeds = null
        this.$nextTick(() => {
          this.initDataFeed()
          this.loadChart()
        })
      }
    }
  },
  data() {
    return {
      interval: '60', //默认显示规则
      chart: null,
      datafeeds: null
    }
  },
  computed: {
    getLang() {
      return this.lang || localStorage.getItem('lang') || 'zh'
    }
  },
  mounted() {
    this.initDataFeed()
    this.loadChart()
  },
  methods: {
    initDataFeed() {
      //加载K线图
      if (!this.url_UDF) {
        console.error('请输入UDF地址')
        return new Error('请输入UDF地址')
      }
      this.datafeeds = new DataFeed.UDFCompatibleDatafeed(this.url_UDF)
    },
    //卸载K线
    removeChart() {
      if (this.chart) {
        this.chart.remove()
        this.chart = null
      }
    },

    //加载K线图插件
    loadChart() {
      if (!this.symbolName) {
        console.error('请输入货币名称')
        return new Error('请输入货币名称')
      }
      console.log('config', config)
      if (!this.toolBar) {
        // 移动端禁用工具栏、导航栏
        config.disabled_features.push('left_toolbar')
        config.disabled_features.push('header_widget')
      }
      let self = this
      this.chart = new Chart.widget({
        container: self.domId, //`id`属性为指定要包含widget的DOM元素id。
        symbol: self.symbolName,
        interval: self.interval,
        locale: this.getLang, //  语言
        autosize: true,
        fullscreen: false, //是否占用视图所有空间
        // preset: 'mobile',
        datafeed: this.datafeeds,
        timezone: 'Asia/Shanghai', //默认时区
        library_path: '/charting_library/', //默认脚本核心文件存储位置
        indicators_file_name: 'custom-study(MACD红绿).js',
        // drawings_access: {
        //   type: 'black',
        //   tools: [{ name: 'Regression Trend' }]
        // },
        //配置项
        ...config,
        custom_css_url: './themed.css'
      })
    }
  },
  //销毁之前
  beforeDestroy() {
    this.removeChart()
  }
}
</script>
<style lang="less" scoped>
.sTradingviewContent {
  height: 100%;
  width: 100%;
  .tabsWrap {
    height: 88px;
  }
}
</style>
