<script setup lang="ts">
import {defineProps} from 'vue'

const props = defineProps({
  ticket: {
    type : Object
  }
})
const priorityFormating = {
  High : 'bg-rose-400 text-rose-600',
  Medium : 'bg-amber-400 text-amber-600',
  Low : 'bg-emerald-400 text-emerald-600',
}

console.log(props.ticket)
</script>

<template>
  <tr  >
    <td class="px-2 text-left border border-stone-300 ">
      {{ props.ticket.id}}
    </td>
    <td class="px-2 text-left border border-stone-300 ">
      {{ props.ticket.title}}
    </td>
    <td class="p-2 text-left border border-stone-300 ">
      <div class="px-2 rounded-lg flex w-fit h-fit" :class="priorityFormating[props.ticket.priority]">
        {{ props.ticket.priority }}
      </div>

    </td>
    <td class="px-2 text-left border border-stone-300  ">
      {{props.ticket.status}}
    </td>
    <td class="px-2 text-left border border-stone-300 ">
      {{props.ticket.formated_created_at}}
    </td>
  </tr>
</template>

<style scoped>

</style>
