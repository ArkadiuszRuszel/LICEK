<template>
  <q-page class="q-pa-lg bg-grey-1">
<p class="text-h5 text-bold">Umów się na wizytę już dziś!</p>
 <div class="q-pa-md">
   <p class="text-subtitle2 text-center">Wybierz pasujący Ci dzień</p>
    <div class="q-gutter-md">
      <q-date
        color="green"
        v-model="date"
        :events="events"
        class="calendar"
        event-color="red"
        mask="dddd, DD MMMM YYYY" 
      />
    </div>
<br>
<p class="text-subtitle2 text-center">Wybrałeś następujący dzień:</p>
  <q-input filled v-model="date" class="visitdate">
    <template v-slot:prepend>
      <q-popup-proxy transition-show="scale" transition-hide="scale">
        <q-date v-model="date" mask="dddd, DD MMMM YYYY HH:mm" />
      </q-popup-proxy>        
    </template>
 </q-input>
</div>

<p class="text-subtitle2 text-center">Wybierz pasującą Ci godzinę</p>
  <q-input filled v-model="time" class="visittime" mask="time" :rules="['time']" placeholder="Wybierz godzinę">
        <template v-slot:append>
          <q-icon name="access_time" class="cursor-pointer">
            <q-popup-proxy transition-show="scale" transition-hide="scale">
              <q-time v-model="time" />
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
  .visitdate {
    width:220px;
    margin:auto;
  }
  .visittime {
    width:200px;
    margin:auto;
  }
</style>



<script>
export default {
  data () {
    return {
      date: '',
      time:'',
      events: [ '2020/02/01', '2020/02/05', '2020/01/31', '2020/01/27', '2020/01/28','2020/01/29','2020/01/30' ]
    }
  }
}
</script>