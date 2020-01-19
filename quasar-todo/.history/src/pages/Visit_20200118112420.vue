<template>
  <q-page class="q-pa-lg bg-grey-1">
<p class="text-h5 text-bold">Umów się na wizytę już dziś!</p>
 <div class="q-pa-md">
    <div class="q-gutter-md">
      <q-date
        v-model="date"
        :events="events"
      />

      <q-date
        v-model="date"
        :events="eventsFn"
      />
    </div>
  </div>


  </q-page>
</template>

<script>
export default {

}
</script>