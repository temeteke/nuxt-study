<script setup>
import { ref } from 'vue'

const drawer = ref(null)
</script>

<template>
  <v-app>
    <v-navigation-drawer v-model="drawer">
      <v-list>
        <v-list-item
          title="Home"
          to="/"
        />
        <v-list-item
          title="Counter"
          to="/counter"
        />
        <v-list-item
          title="ToDo"
          to="/todo"
        />
      </v-list>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-app-bar-title>Application</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>
