<!-- /* [왜 이렇게 작성하는가?] RouterLink를 사용하는 이유는 a태그와 달리 페이지
새로고침 없이 SPA 방식으로 이동하기 때문. */ -->

<script></script>
<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark rounded">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">이날치(LeeNachi)</RouterLink>
      <!-- 햄버거 버튼 -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNavbar"
        aria-controls="mainNavbar"
        aria-expanded="false"
        aria-label="메뉴 열기"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- 햄버거 아이콘 -->
      <div class="collapse navbar-collapse" id="mainNavbar">
        <!-- pc 메뉴 영역 -->
         <!-- 오른쪽 여백 auto 
            왼쪽 정렬
          -->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">홈</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/about">소개</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/members">멤버</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/videos">영상</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
