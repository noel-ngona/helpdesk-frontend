<script setup lang="ts">
import helpdeskAssistant from '@/assets/images/helpdesk_assistant.jpg'
import Cliploader from 'vue-spinner/src/ClipLoader.vue'
import { onMounted, reactive } from 'vue'
import {useAuthStore} from '@/stores/auth.ts'

const authStore = useAuthStore()
const state = reactive({
  isLoading : false,
  credentials : {
    username: '',
    password: ''
  }
})
const store = useAuthStore()
const handleLogin = async () => {
  state.isLoading = true;
  await authStore.login(state.credentials);
  state.isLoading = false;
}


</script>

<template>
  <div class="h-screen flex">


    <!-- Right Side (Login Form) -->
    <div class="flex-1 flex items-center justify-center ">
      <div class="w-full max-w-md p-8">
        <h2 class="text-3xl font-semibold text-stone-600 mb-6 text-center">Login</h2>

        <form @submit.prevent="handleLogin">
          <!-- Email Field -->
          <div class="mb-4">
            <label for="email" class="block font-medium mb-2">Email</label>
            <input type="text" id="email" v-model="state.credentials.username" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Enter your email" required>
          </div>

          <!-- Password Field -->
          <div class="mb-4">
            <label for="password" class="block font-medium mb-2">Password</label>
            <input type="password" id="password" v-model="state.credentials.password" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Enter your password" required>
          </div>

          <!-- Login Button -->
          <button type="submit" class="w-full bg-teal-700 text-white py-2 rounded-lg hover:bg-teal-700 transition">
            <Cliploader class="text-white" v-if="state.isLoading" />
            <span v-else >Login</span>
          </button>
        </form>

        <!-- Footer Links -->
        <div class="mt-4 text-center">
          <p class="text-sm text-gray-600">
            Don't have an account?
            <a href="#" class="text-teal-600 hover:underline">Sign up</a>
          </p>
        </div>
      </div>
    </div>

    <!-- Left Side (Image/Welcome Section) -->
    <div class="flex-1 bg-cover bg-center m-6 rounded-xl hidden lg:block" :style="{ backgroundImage: `url(${helpdeskAssistant})` }">

    </div>
  </div>
</template>

<style scoped>

</style>
