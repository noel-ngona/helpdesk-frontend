<script setup lang="ts">
import {useAuthStore} from '@/stores/auth.ts'
import { RouterLink} from 'vue-router'
import Sidebar from '@/components/Sidebar.vue'

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
            <header class="bg-slate-50  px-6 py-4 flex justify-between items-center">
                <h1 class="text-xl font-semibold">Dashboard</h1>
                <div class="flex items-center space-x-4">
                    <span class="text-gray-700">Admin</span>
                    <button class="bg-gray-800 text-white px-4 py-2 rounded">Profile</button>
                </div>
            </header>

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
