<template>
  <q-page class="q-pa-lg">
<p class="text-h5 text-bold">Pobierz</p>
<h6 class="text-left text-body1">Wywiad żywieniowy do wydruku</h6>

<a href="/statics/karta_pacjenta_i_wywiad-1.doc" target="_blank">
<q-btn rounded color="green-9" icon-right="arrow_down" label="Wywiad do wydruku"><q-icon name="img:statics/icons/download.png"/>
</q-btn>
</a>

<br>

<h6 class="text-left text-body1" width="600px">Załącz pliki - diety lub inne.</h6>
    <div class="q-gutter-sm row items-start">
      <q-uploader
        url="http://localhost:9000/upload"
        color="green"
        flat
        bordered
        multiple
        batch
        style="max-width: auto"
        label="Dodaj pliki"
      />
      </div>
  </q-page>
</template>

<script>
export default {

}
</script>
