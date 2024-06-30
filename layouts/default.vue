<script setup lang="ts">
const links = [
  [{
    label: 'ToDo',
    to: 'todo',
  }, {
    label: 'Counter',
    to: 'counter',
  }], [{
    label: 'Examples',
    icon: 'i-heroicons-light-bulb',
  }, {
    label: 'Help',
    icon: 'i-heroicons-question-mark-circle',
  }],
]
</script>

<template>
  <div>
    <UHorizontalNavigation :links="links" />
    <UContainer>
      <slot />
    </UContainer>
  </div>
</template>
