<template>

  <q-page class="q-pa-lg">
    <p class="text-h5 text-bold text-center">Potwierdź wizytę!</p>
    <p class="text-subtitle2 text-center">Czy jesteś pewny/a, że wybrany przez Ciebie dzień w pełni Ci odpowiada?</p>
    <q-btn type="submit" rounded no-caps color="green-8" >TAK, TAK
          <template v-slot:loading>
            <q-spinner-facebook class="on-right"/>
          </template>
        </q-btn>
        </a>


      <a href="/#/ForgotPassword"><q-btn rounded no-caps :loading="loading6" color="blue-5" @click="simulateProgress(6)"  width="200px">Nie pamiętam hasła
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