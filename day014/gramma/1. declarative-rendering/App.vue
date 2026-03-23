<!--
Mon Mar 23 2026 17:30:11 GMT+0900 (한국 표준시)
Mon Mar 23 2026 17:30:11 GMT+0900 (한국 표준시)
년월일 시간을 표현하는 기능을 하는 코드이다.
코드에서는 두가지 방식으로 기능을 구현하는데
https://velog.io/@l__chwon/VueOptions-API-vs-Composition-API
https://bedecked-breakfast-910.notion.site/API-2b0419369e5f80c188f4e783903dc730

1. Composition API 방식
  setup함수 내부에서 값을 생성하고 리턴한다.
  유지보수가 쉽고 기능이 떨어지지 않아 편리함!
2. Options API 방식
  data()함수 내에서 값을 생성하고 리턴한다.
  
-->

<template>
  <div id="date">
    {{ date }}
  </div>
  <div id="date2">
    {{ date2 }}
  </div>
</template>

<script>
export default {
  // Composition API
  setup() {
    // date 선언 하여 문자열로 받아오기
    const date = Date().toString()
    return {
      date,
    }
  },

  // Option API
  data() {
    return {
      date2: Date().toString(),
    }
  },
}
</script>
