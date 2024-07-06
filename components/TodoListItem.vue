<script setup lang="ts">
import { ref } from 'vue'

const completed = ref(false)
</script>

<template>
  <div>
    <input
      v-model="completed"
      type="checkbox"
      style="margin-right: 0.5em"
    ><span
      :class="{ completed: completed }"
    ><slot /></span>
  </div>
</template>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
