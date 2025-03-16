<script setup lang="ts">
  import api from '@/services/api.ts'
  import { onMounted, reactive } from 'vue'

  const state = reactive({
    tickets: []
  });

  onMounted( async () => {
    try {
      state.tickets = await api.get('tickets');
      console.log(state.tickets);
    }catch (error){
      console.error(error)
    }
  })
</script>

<template>

</template>


