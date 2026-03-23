<!--

  < 이벤트 처리 방식을 이해하자 >
  htnl태그가 발생시키는 이벤트를 캡쳐하여 지정된 스크립트를 수행하거나 
  함수 호출 위해서 v-on 디렉티브를 사용한다.
  사용자가 버튼을 클릭했을때 click이벤트를 발생한다.
  발생한 이벤트를 캡쳐하기 위해 두 가지 방식을 이용한다.
  1. v-on 디렉티브 
    v-on:click = "스크립트 코드 or 함수"
  2. @click = "스크립트 코드 or 함수"
-->

<template>
  <p>{{ counter + counter2 }}</p>
  <!-- 변수를 참조해서 숫자를 증가 -->
  <button @click="counter++">클릭하면 숫자가 올라갑니다.</button>
  <!-- 함수를 호출하여 숫자를 증가 -->
  <button @click="onClick2">클릭하면 숫자가 올라갑니다.</button>
</template>

<script>
import { ref } from 'vue'

export default {
  data() {
    return {
      counter2: 0,
    }
  },
  // 1번 declar와 마찬가지로 Composition API Options API차이 비교
  setup() {
    // ref함수를 통해 선언된 변수는 프록시 객체로 변환되어 관리.
    let counter = ref(0)

    // onclick함수를 통해 
    const onClick = (evt) => {
      if (evt) {
        // 초기화
        evt.preventDefault()
        // 변수의 값 증가
        counter.value++
      }
    }
    
    return {
      counter,
      onClick,
    }
  },
  methods: {
    onClick2: function (evt) {
      if (evt) {
        evt.preventDefault()
      }
      this.counter2++
    },
  },
}
</script>
