<template>
  <q-page class="q-pa-lg bg-grey-1">
<p class="text-h5 text-bold">Umów się na wizytę już dziś!</p>
<kalendar>
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


  </q-page>
</template>

<script>
export default {

}
</script>