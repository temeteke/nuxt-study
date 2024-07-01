<script setup lang="ts">
interface Props {
  index: number
}
defineProps<Props>()
</script>

<template>
  <li><span>{{ index }}.</span><span><slot /></span></li>
</template>
