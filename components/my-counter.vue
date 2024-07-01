<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Props {
  initialCount?: number
}

const props = withDefaults(defineProps<Props>(), { initialCount: 0 })

const count = ref(props.initialCount)

const increment = () => {
  count.value++
}

onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
  <UButton @click="increment">
    Count is: {{ count }}
  </UButton>
</template>
