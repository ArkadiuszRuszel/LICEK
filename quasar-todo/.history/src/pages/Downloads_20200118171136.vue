<template>
  <q-page class="q-pa-lg">
<p class="text-h5 text-bold"> Pobierz </p>
<p class="text-body1 text-bold"> Wywiad żywieniowy do wydruku </p>

<a href="/statics/files/karta_pacjenta_i_wywiad-1.doc" download target="_self">
<q-btn rounded color="blue-6" label="Wywiad do wydruku" icon="img:statics/icons/word2.png" icon-right="img:statics/icons/download.png"></q-btn></a>

<br>
<br>

<p class="text-body1 text-bold"> Przykładowe diety </p>
<p class="text-body2"> Spójrz jak wyglądają przykładowe diety </p>
<div class="q-gutter-xs">
  <a href="/statics/files/dieta_3500.pdf" download target="_self">
  <q-btn rounded color="blue-6" label="Dieta 3500" icon="img:statics/icons/pdf.png" icon-right="img:statics/icons/download.png"></q-btn></a>
  <a href="/statics/files/dieta_3200.pdf" download target="_self">
  <q-btn rounded color="blue-6" label="Dieta 3200" icon="img:statics/icons/pdf.png" icon-right="img:statics/icons/download.png"></q-btn></a>
  <a href="/statics/files/dieta_2500.pdf" download target="_self">
  <q-btn rounded color="blue-6" label="Dieta 2500" icon="img:statics/icons/pdf.png" icon-right="img:statics/icons/download.png"></q-btn></a>
  <a href="/statics/files/dieta_2000.pdf" download target="_self">
  <q-btn rounded color="blue-6" label="Dieta 2000" icon="img:statics/icons/pdf.png" icon-right="img:statics/icons/download.png"></q-btn></a>
  <a href="/statics/files/dieta_1500.pdf" download target="_self">
  <q-btn rounded color="blue-6" label="Dieta 1500" icon="img:statics/icons/pdf.png" icon-right="img:statics/icons/download.png"></q-btn></a>
</div>
<br>
<br>
<br>
<br>
<p class="text-body1 text-bold"> Załącz pliki - np. zdjęcia swoich potraw :)</p>
    <div class="q-gutter-sm row items-start">
      <q-uploader
        url="http://localhost:4444/upload"
        color="green"
        flat
        extensions	
        bordered
        multiple
        batch
        
        label="Dodaj pliki"
        style="max-width: 800px"
      />
      </div>
  </q-page>
</template>

<script>
export default {

}
</script>
