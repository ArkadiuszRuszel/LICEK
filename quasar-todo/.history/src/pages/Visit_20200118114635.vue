<template>
  <q-page class="q-pa-lg bg-grey-1">
<p class="text-h5 text-bold">Umów się na wizytę już dziś!</p>
 <div class="q-pa-md">
    <div class="q-gutter-md">

      <q-date 
        color="green"
        v-model="date"
        :events="eventsFn"
        class="kalendarz"
        :options="options"
      />

    </div>
  </div>
</q-page>
</template>

<style>
  .kalendarz {
    width=100%;

}
</style>



<script>
export default {

}
</script>