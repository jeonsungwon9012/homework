<template>
<!-- 
    데이터 결합을 통한 사용자 입력 처리 예제
    v-model, v-bind 컴포넌트에서 선언한 변수와 html태그의 속성을 결합하는 속성이다. 
    v-bind = 보여주기만 (단방향) vue -> 화면
    v-model = 입력반영 (양방향) vue <-> 화면

    
-->
  <p>줄임말과 원래말을 입력하세요.</p>
  <!-- 화면 표시 -->
  <input type="text" v-bind:value="abbr" />
  <!-- 마우스 올렸을때 표시 -->
  <input type="text" v-model="normal" />
  <hr />

  <abbr v-bind:title="normal">{{ abbr }}</abbr>
</template>

<script>
import { ref } from 'vue'

export default {
  // Composition API
  setup() {
    const abbr = ref('kb')
    const normal = ref('kb Project Team')
    return {
      abbr,
      normal,
    }
  },
}
</script>
