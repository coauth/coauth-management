<script setup>
import { RouterView } from 'vue-router'
import { useDarkModeStore } from '@/stores/darkMode.js'

const darkModeStore = useDarkModeStore()

darkModeStore.set(true)
</script>



<template>
  <RouterView />
</template>
