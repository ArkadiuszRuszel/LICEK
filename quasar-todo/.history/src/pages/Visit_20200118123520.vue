<template>
  <q-page class="q-pa-lg bg-grey-1">
<p class="text-h5 text-bold">Umów się na wizytę już dziś!</p>
 <div class="q-pa-md">
   <p class="text-subtitle2 text-center">Wybierz pasujący Ci dzień</p>
    <div class="q-gutter-md">
      <q-date
        color="green"
        v-model="date"
        :events="eventsFn"
        class="calendar"
        event-color="teal"
      />
    </div>
  </div>
<p class="text-subtitle2 text-center">Wybierz pasującą Ci godzinę</p>

<q-input filled v-model="datetime">
      <template v-slot:prepend>
          <q-popup-proxy transition-show="scale" transition-hide="scale">
            <q-date v-model="date" mask="dddd, DD MMMM YYYY HH:mm"/>
          </q-popup-proxy>
      </template>

      <template v-slot:append>
        <q-icon name="access_time" class="cursor-pointer">
          <q-popup-proxy transition-show="scale" transition-hide="scale">
            <q-time v-model="date" mask="dddd, DD MMMM YYYY HH:mm" format24h/>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
<br>
<div class="text-center">
  <a href="/#/ConfirmVisit"><q-btn type="submit" rounded no-caps color="green" class="confirm">Potwierdź</q-btn></a>
</div>
</q-page>
</template>

<style scoped>
  .calendar {
    width:100%;
}
  .confirm {
    width:300px;
}
</style>



<script>
export default {
  data () {
    return {
      date: '',
      events:'',
      time:''
    }
  }
}
</script>