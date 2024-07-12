<script setup lang="ts">
const links = [
  [{
    label: 'Home',
    to: '/',
  }, {
    label: 'ToDo',
    to: '/todo',
  }, {
    label: 'Counter',
    to: '/counter',
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
    <UHorizontalNavigation
      :links="links"
      class="mb-1"
    />
    <UContainer>
      <slot />
    </UContainer>
  </div>
</template>
