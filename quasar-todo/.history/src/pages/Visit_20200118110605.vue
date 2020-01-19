<template>
 <kalendar>
   <kalendar :configuration="calendar_settings" :events="events"/>
  <!-- CREATED CARD SLOT -->
  <div slot="created-card" slot-scope="{ event_information }" class="details-card">
    <h4 class="appointment-title">{{event_information.data.title}}</h4>
    <small>
      {{event_information.data.description}}
    </small>
    <span class="time">{{event_information.start_time | formatToHours}} - {{event_information.end_time |
      formatToHours}}</span>
    <button @click="removeEvent(event_information)" class="remove">
      X
    </button>
  </div>
  <!-- CREATING CARD SLOT -->
  <div slot="creating-card" slot-scope="{ event_information }">
    <h4 class="appointment-title" style="text-align: left;">
      New Appointment
    </h4>
    <span class="time">
      {{event_information.start_time | formatToHours}}
      -
      {{event_information.end_time | formatToHours}}
    </span>
  </div>
  <!-- POPUP CARD SLOT -->
  <div slot="popup-form" slot-scope="{ popup_information }" style="display: flex; flex-direction: column;">
    <h4 style="margin-bottom: 10px">
      New Appointment
    </h4>
    <input v-model="new_appointment['title']" type="text" name="title" placeholder="Title">
    <textarea v-model="new_appointment['description']" type="text" name="description" placeholder="Description" rows="2"></textarea>
    <div class="buttons">
      <button class="cancel" @click="closePopups()">
        Cancel
      </button>
      <button @click="addEvent(popup_information)">
        Save
      </button>
    </div>
  </div>
</kalendar>
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
}),\

}
</script>