<template>
    <div id="app">
        <h1 class="title">ToDo</h1>
        <input type="text" v-model="input">
        <button @click="add">add</button>
        <li v-for="todo in todos">
            {{ todo }}
        </li>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const input = ref<string>('')
const todos = ref<string[]>([])

const add = () => {
    console.log(input.value)
    todos.value.push(input.value)
}
</script>