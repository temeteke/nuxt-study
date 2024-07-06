<script setup lang="ts">
const props = defineProps<{
  title: string
  completed: boolean
}>()

const emit = defineEmits(['remove', 'changeCompleted'])

const completed = computed({
  get: () => props.completed,
  set: (value) => {
    emit('changeCompleted', value)
  },
})
</script>

<template>
  <div>
    <input
      v-model="completed"
      type="checkbox"
      style="margin-right: 0.5em"
    ><span
      :class="{ completed: completed }"
    >{{ title }}</span>
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
