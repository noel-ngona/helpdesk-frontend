<script setup lang="ts">
import Avatar from '@/assets/images/Leonardo_Kino_XL_A_professional_picture_of_a_black_person_1.jpg'
</script>

<template>
  <header class="bg-slate-50  px-6 py-4 flex justify-between items-center">
    <h1 class="text-xl font-semibold">Welcome, User</h1>
    <div class="flex items-center space-x-4">
      <div class="text-cyan-600">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
        </svg>
        <span  class="absolute top-0 right-0 inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full">
      10
    </span>
      </div>
      <div class="flex items-center space-x-4">
        <img :src="Avatar" class="h-12 w-12 rounded-full" />
        <div class="flex flex-col">

          <div>
            John Doe
          </div>
          <div class="text-stone-400 text-sm">
            25th March 2025
          </div>

        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>
