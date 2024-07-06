<script setup lang="ts">
const props = defineProps<{
  title: string
  date: Date
}>()

const completed = ref(false)

defineEmits(['remove'])

const formattedDate = computed(() => props.date.toLocaleString())
</script>

<template>
  <div>
    <input
      v-model="completed"
      type="checkbox"
      style="margin-right: 0.5em"
    ><span
      :class="{ completed: completed }"
    >
      <span style="margin-right: 0.5em">{{ title }}</span>
      <span style="margin-right: 0.5em">{{ formattedDate }}</span>
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
