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
  <div class="flex gap-1">
    <input
      v-model="completed"
      type="checkbox"
    ><div
      :class="{ completed: completed }"
      class="flex-auto"
    >
      {{ title }}
    </div>
    <div>{{ formattedDate }}</div>
    <UButton
      variant="outline"
      size="2xs"
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
