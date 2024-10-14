<script setup lang="ts">
import { ref } from 'vue'

const input = ref<string>('')
const todos = ref<string[]>([])

const add = () => {
  todos.value.push(input.value)
}
</script>

<template>
  <div id="app">
    <div class="d-flex align-center">
      <v-text-field v-model="input" />
      <v-btn @click="add">
        add
      </v-btn>
    </div>
    <v-row>
      <v-col
        v-for="todo in todos"
        :key="todo"
        cols="4"
      >
        <v-card>
          <v-card-title>{{ todo }}</v-card-title>
          <v-card-text>{{ todo }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
