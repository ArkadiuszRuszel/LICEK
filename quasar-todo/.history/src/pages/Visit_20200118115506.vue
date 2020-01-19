<template>
  <q-page class="q-pa-lg bg-grey-1">
<p class="text-h5 text-bold">Umów się na wizytę już dziś!</p>
<p class="text-subtitle2 text-center">Wybierz pasującą Ci datę</p>
 <div class="q-pa-md">
   
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