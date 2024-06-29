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

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class App extends Vue{
    input: string = '';
    todos: string[] = [];

    add() {
        this.todos.push(this.input)
    };
}
</script>