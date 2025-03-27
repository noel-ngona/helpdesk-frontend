<script setup lang="ts">
  import api from '@/services/api.ts'
  import { onMounted, reactive } from 'vue'
  import TicketRow from '@/components/TicketRow.vue'

  const state = reactive({
    tickets: []
  });

  onMounted( async () => {
    try {
      const response = await api.get('tickets');
      state.tickets = response.data
      console.log(state.tickets);
    }catch (error){
      console.error(error)
    }
  })
</script>

<template>
  <div class="bg-stone-50 p-6 rounded-lg h-full w-full flex flex-col gap-4">
    <div class="flex">
      <a class="p-2 bg-cyan-600 rounded-xl text-stone-50 text-base" >
        <div>New Ticket</div>
      </a>
    </div>
    <table>
      <thead>
      <tr class="border border-stone-300 ">
        <th class="p-2 text-left">
          ID
        </th>
        <th class="p-2 text-left">
          Title
        </th>
        <th class="p-2 text-left">
          Priority
        </th>
        <th class="p-2 text-left">
          Status
        </th>
        <th class="p-2 text-left">
          Request Date
        </th>
      </tr>
      </thead>
      <tbody>
      <TicketRow v-for="ticket in state.tickets" :key="ticket.id" :ticket="ticket" />
      </tbody>
    </table>
  </div>
</template>


