<template>

  <q-page class="q-pa-lg">
    <p class="text-h5 text-bold text-center">Potwierdź wizytę!</p>
    <p class="text-subtitle2 text-center">Czy jesteś pewny/a, że wybrany przez Ciebie dzień w pełni Ci odpowiada?</p>
    <q-btn type="submit" rounded no-caps color="green-8" >TAK!!!
          <template v-slot:loading>
            <q-spinner-facebook class="on-right"/>
          </template>
        </q-btn>
      


      <q-btn rounded no-caps color="green-8 width="200px">NIE, NIE, NIE, NIE!!!!
          <template v-slot:loading>
            <q-spinner-facebook class="on-right"/>
          </template>
        </q-btn>
  </q-page>
</template>

<script>
export default {

}
</script>