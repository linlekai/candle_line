# K 线图组件

## a candle line chart based on trandingView and vue2 . 基于 vue2 和 trandingView 的 k 线图。

- 基于 tradingview 封装的 K 线图组件
- 使用 UDF 模式加载数据，使用时对接后端接口
- 组件自动支持 PC 和移动端,无须设置

# 使用方法

1. 外部项目引入 TradingView 库

组件目录结构

```
TV
├─index.js 出口文件
├─tradingView.vue 主文件
├─static 不要动！
| ├─charting_library.js 静态文件
| └dataFeed.js 数据请求
├─config 配置项
| ├─disabled_features.js 禁用配置
| ├─enabled_features.js 启用配置
| ├─index.js 出口文件
| ├─loading_screen.js 样式
| ├─overrides.js 样式
| ├─studies_overrides.js 样式
| └tabs.js 样式
```

## 使用方式

1. 执行 npm run lib
   生成以下目录

   ```
   lib
   ├─demo.html 请忽略
   ├─tvLib.common.js
   ├─tvLib.umd.js
   └tvLib.umd.min.js
   ```

2. 外部项目使用时，请拷贝 lib 文件夹至外部项目
3. 拷贝当前项目的 public/charting_library 文件夹 至外部项目的 public 目录下
4. 定制样式请在 public/charting_library/themed.css 中修改

```js
<TV :url_UDF="url_UDF" :symbolName="symbolName" width="300px" height="300px" />

import { TV } from '../tvLib/tvLib.common.js'


```

- url_UDF :string UDF 地址
- symbolName :string 币名
- lang ?:string 语言 不传默认读取 localStorge.lang
- width ?:string 宽度，请使用 css 单位 默认 100vw
- height ?:string 高度，请使用 css 单位 默认 100vh
- toolBar ?:boolean 是否禁用工具栏
