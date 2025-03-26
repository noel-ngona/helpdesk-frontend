<script setup lang="ts">
import {useAuthStore} from '@/stores/auth.ts'
import { RouterLink} from 'vue-router'
import Sidebar from '@/components/Sidebar.vue'
import Navbar from '@/components/Navbar.vue'

const store = useAuthStore();
const handleLogOut = async () => {
  await store.logout()
}
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
                <div class="bg-white p-6 rounded shadow">
                    <h2 class="text-lg font-semibold">Welcome to the Admin Dashboard</h2>
                    <p class="text-gray-600 mt-2">Manage users, tickets, and reports from here.</p>
                </div>
            </main>
        </div>
    </div>
</template>
