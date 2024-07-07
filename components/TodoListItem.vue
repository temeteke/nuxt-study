<script setup lang="ts">
const props = defineProps<{
  title: string
  date: Date
}>()

const completed = ref(false)

defineEmits(['remove'])

const formattedDate = computed(() => props.date.toISOString())
</script>

<template>
  <div>
    <input
      v-model="completed"
      type="checkbox"
      class="mr-1"
    ><span
      :class="{ completed: completed }"
    >
      <span class="mr-1">{{ title }}</span>
      <span class="mr-1">{{ formattedDate }}</span>
    </span>
    <UButton
      variant="outline"
      @click="$emit('remove')"
    >
      Remove
    </UButton>
  </div>
</template>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
