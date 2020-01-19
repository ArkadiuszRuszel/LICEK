<template>
  <q-page class="q-pa-lg bg-grey-1">
<p class="text-h5 text-bold">Umów się na wizytę już dziś!</p>
<p class="text-h text-subtitle2">Wybierz</p>
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