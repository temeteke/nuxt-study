<template>
  <div class="flex flex-col gap-1">
    <TodoList />
    <div class="flex flex-wrap gap-1">
      <MyCounter />
      <MyCounter :initial-count="1" />
      <MyCounter :initial-count="2" />
    </div>
  </div>
</template>
