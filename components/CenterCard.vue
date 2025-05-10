<script setup lang="ts">

</script>

<template>
  <div class="wrapper">
    <provet-card class="card">
      <slot />
    </provet-card>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 80px auto;
}

.card {
  min-width: 0;
  width: 60%;
}
</style>