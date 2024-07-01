<template>
  <div>
    <TodoList />
    <div>
      <MyCounter />
      <MyCounter :initial-count="1" />
      <MyCounter :initial-count="2" />
    </div>
  </div>
</template>
