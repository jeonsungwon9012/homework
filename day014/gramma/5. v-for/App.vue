<!--
객체(item)으로 깂들을 선언한다.
선언된 값들을 v-for로 돌면서 가져온다.

-->


<template>
  <div style="width: 200px">
    <ol>
      <li v-for="item in items">{{ item }}</li>
    </ol>
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  // Composition API
  setup() {
    const items = reactive({ 1: '1번 객체', 2: '2번 객체', 3: '3번 객체' })
    return {
      items,
    }
  },
}
</script>
