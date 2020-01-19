<template>

  <q-page class="q-pa-lg">
    <p class="text-h5 text-bold text-center">Potwierdź wizytę!</p>
    <p class="text-subtitle2 text-center">Czy jesteś pewny/a, że wybrany przez Ciebie dzień w pełni Ci odpowiada?</p>
<br>

<div class="text-center">
    <q-btn push type="submit" rounded no-caps color="blue-5">TAK!!!
      <q-popup-proxy>
        <q-banner>
          <template v-slot:avatar>
            <q-icon name="mood" color="green" />
          </template>
          <p class="text-bold color-green" Wizyta umówiona
          <br>
          Zapraszamy do naszej poradni!
        </q-banner>
      </q-popup-proxy>

    </q-btn>

    <a href="/#/Visit"><q-btn rounded no-caps color="red" width="200px">NIE, chcę zmienić</q-btn></a>
</div>
  </q-page>
</template>

<script>
export default {

}
</script>