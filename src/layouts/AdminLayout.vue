<script setup lang="ts">
import {useAuthStore} from '@/stores/auth.ts'
import { RouterLink} from 'vue-router'
import Sidebar from '@/components/Sidebar.vue'
import Navbar from '@/components/Navbar.vue'


</script>

<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Main Content -->
    <div class="flex-1 flex flex-col">
      <!-- Top Navbar -->
      <Navbar />

      <!-- Page Content -->
      <main class="p-6 flex-1 overflow-auto">
        <slot/>
      </main>
    </div>
  </div>
</template>
