<template>
  <q-page class="q-pa-lg bg-grey-1">
<p class="text-h5 text-bold">Umów się na wizytę już dziś!</p>


<kalendar :configuration="calendar_settings" :events="events"/>

  </q-page>
</template>

<script>
import { Kalendar } from 'kalendar-vue';
import 'kalendar-vue/dist/kalendar-vue.css';

export default {
data: () => ({
  events: [],
  calendar_settings: {
    style: 'material_design',
    view_type: 'week',
    cell_height: 20,
    scrollToNow: true,
    current_day: new Date(),
    read_only: false,
    day_starts_at: 0,
    day_ends_at: 24,
    overlap: true,
    hide_dates: ['2019-10-31'], // Spooky
    hide_days: [6],
    past_event_creation: true
  },
  new_appointment: {
    title: null,
    description: null
  }
  ...
})
}
</script>