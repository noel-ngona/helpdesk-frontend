<script setup lang="ts">
import {useAuthStore} from '@/stores/auth.ts'
import { RouterLink} from 'vue-router'

const store = useAuthStore();
const handleLogOut = async () => {
  await store.logout()
}
</script>

<template>
<h1 class="text-3xl text-center">Logged In</h1>
  <button class="bg-red-400 p-2 text-white" @click.prevent="handleLogOut">Log Out</button>
  <RouterLink to="/tickets" class="bg-green-400 p-2 text-white">
    Tickets
  </RouterLink>
</template>
