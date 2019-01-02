# vue-button-best

开发时间：2019年1月2日

vue-best-ui 中的按钮组件，目前主要用来日常测试使用

## 安装

```
npm i -S vue-button-best
```

## 使用

全局引入：

```
import Vue from 'vue'
import BestButton from 'vue-button-best'

Vue.use(BestButton)

// some template
<template>
  <div id="root">
    <best-button @click="handleClick" :loading="loading" :disabled="false">信息按钮</best-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false
    }
  },
  methods: {
    handleClick () {
      this.loading = !this.loading
    }
  }
}
</script>
```

局部引入：

```
import { BestButton } from 'vue-button-best'
```

## 日志

2019-01-02
  - 原型开发完毕，初次测试

## 最后

感谢使用～
