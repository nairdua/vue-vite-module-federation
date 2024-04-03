<script setup></script>
<template>
  <main class="app-wrapper">
    <div class="top-bar"><h1>Root top bar</h1></div>
    <div class="content-wrapper">
      <nav class="nav-bar">
        <h2>Root nav bar</h2>
      </nav>
      <div class="content">
        <h2><RemoteCounter /></h2>
      </div>
    </div>
  </main>
</template>
<style scoped>
* {
  font-family: Arial, Helvetica, sans-serif;
}

.app-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
}

.top-bar {
  padding: 0.25rem;
  width: 100%;
  border-width: 0px;
  border-bottom-width: 1px;
  border-style: solid;
}

.content-wrapper {
  display: grid;
  grid-template-columns: 0.2fr auto;
  height: 100%;
}

.nav-bar {
  padding: 0.5rem;
  border-width: 0px;
  border-right-width: 1px;
  border-style: solid;
}

.content {
  padding: 0.5rem;
}
</style>
