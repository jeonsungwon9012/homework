<!-- 
 <조건처리>
 조건이 참일때 출력하는 문장과
 거짓일때 출력하는 문장을 처리함
 변수의 값을 조건으로 둔다. 
 버튼을 두어 변수 값이 증가한다.
 증가하다가 변수의 조건이 참이되면 출력을 바뀐다.

-->

<template>
  <p>{{ counter }}</p>
  <!-- 5< -->
  <p v-if="counter < 5">5보다 작습니다.</p>
  <!--5>=-->
  <p v-else>5와 같거나 큽니다.</p>
  <!-- 버튼을 클릭하며 숫자가 조건을 넘는 경우에 바뀐다. -->
  <button @click="counter++">클릭하면 숫자가 올라갑니다.</button>
</template>

<script>
import { ref } from 'vue'

export default {
  // Composition API
  setup() {
    // 기본은 0 5보다 작습니다로 시작해서
    let counter = ref(0)
    return {
      counter,
    }
  },
}
</script>
