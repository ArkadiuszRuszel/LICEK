<template>
  <q-page class="q-pa-lg">
<p class="text-h5 text-bold">Pobierz</p>
<h6 class="text-left text-body1 text-bold">Wywiad żywieniowy do wydruku</h6>

<a href="/statics/karta_pacjenta_i_wywiad-1.doc" target="_blank">
<q-btn rounded color="blue-6" label="Wywiad do wydruku" icon="img:statics/icons/word.png" icon-right="img:statics/icons/download.png"></q-btn></a>

<br>

<p class="text-left text-body1 text-bold">Przykładowe diety</p>




<p class="text-body2"> Twoje diety do wydruku </p>


<h6 class="text-left text-body1 text-bold" width="600px">Załącz pliki - diety lub inne.</h6>
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
