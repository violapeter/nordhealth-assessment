<template>
  <provet-input v-bind="$attrs" :type="showPassword ? 'text' : 'password'">
    <provet-button slot="end" aria-describedby="password-tooltip" square @click="togglePasswordVisibility">
      <provet-icon name="interface-edit-on"></provet-icon>
      <provet-icon name="interface-edit-off"></provet-icon>
    </provet-button>
  </provet-input>
</template>

<style>
[type="password"] provet-icon[name="interface-edit-off"],
[type="text"] provet-icon[name="interface-edit-on"] {
  display: none;
}
</style>

<script setup lang="ts">
const showPassword = ref(false);

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};
</script>