<script setup>
import { ref, onMounted } from 'vue'

// リアクティブな状態
const count = ref(0)

// 状態を変更し更新トリガーする関数
function increment() {
  count.value++
}

// ライフサイクルフック
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
  <button @click="increment">
    Count is: {{ count }}
  </button>
</template>
