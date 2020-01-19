<template>
  <q-page class="q-pa-lg">
<p class="text-h5 text-bold">Pobierz</p>
<p class="text-left text-body1 text-bold">Wywiad żywieniowy do wydruku</p>

<a href="/statics/karta_pacjenta_i_wywiad-1.doc" target="_blank">
<q-btn rounded color="blue-6" label="Wywiad do wydruku" icon="img:statics/icons/word.png" icon-right="img:statics/icons/download.png"></q-btn></a>

<br>
<br>

<p class="text-left text-body1 text-bold">Przykładowe diety</p>
<p class="text-body2"> Spójrz jak wyglądają przykładowe diety 



<p class="text-left text-body1 text-bold">Przykładowe diety</p>


<p class="text-left text-body1 text-bold" width="600px">Załącz pliki - diety lub inne.</p>
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
