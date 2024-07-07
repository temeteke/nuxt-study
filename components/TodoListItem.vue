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
  <div class="flex justify-between">
    <div>
      <input
        v-model="completed"
        type="checkbox"
        class="mr-1"
      ><span
        class="mr-1"
        :class="{ completed: completed }"
      >
        {{ title }}
      </span>
    </div>
    <div>
      <span class="mr-1">{{ formattedDate }}</span>
      <UButton
        variant="outline"
        size="2xs"
        @click="$emit('remove')"
      >
        Remove
      </UButton>
    </div>
  </div>
</template>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
