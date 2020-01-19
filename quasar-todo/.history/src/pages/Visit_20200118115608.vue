<template>
  <q-page class="q-pa-lg bg-grey-1">
<p class="text-h5 text-bold">Umów się na wizytę już dziś!</p>
 <div class="q-pa-md">
   <p class="text-subtitle2 text-center">Wybierz pasującą Ci datę</p>
    <div class="q-gutter-md">
      <q-date
        label="Wybierz interesujący Cię dzień"
        color="green"
        v-model="date"
        :events="eventsFn"
        class="kalendarz"
        event-color="teal"
      />
    </div>
  </div>
<p class="text-subtitle2 text-center">Wybierz pasującą Ci godzinę</p>

<q-input filled v-model="date">
      <template v-slot:prepend>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy transition-show="scale" transition-hide="scale">
            <q-date v-model="date" mask="YYYY-MM-DD HH:mm" />
          </q-popup-proxy>
        </q-icon>
      </template>

      <template v-slot:append>
        <q-icon name="access_time" class="cursor-pointer">
          <q-popup-proxy transition-show="scale" transition-hide="scale">
            <q-time v-model="date" mask="YYYY-MM-DD HH:mm" format12h />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>

</q-page>
</template>

<style scoped>
  .kalendarz {
    width:100%;
}
</style>



<script>
export default {
  data () {
    return {
      date: '',
      events:'',
    }
  }
}
</script>