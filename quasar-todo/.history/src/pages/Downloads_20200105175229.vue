<template>
  <q-page class="q-pa-lg">
<h5 class="q-mt-none">Pobierz</h5>
<p>Wywiad żywieniowy do wydruku</p>



<p>Załącz własne pliki</p>
    <div class="q-gutter-sm row items-start">
      <q-uploader
        url="http://localhost:4200/upload"
        color="green"
        flat
        bordered
        style="max-width: 300px"
      />
      </div>
  </q-page>
</template>

<script>
export default {

}
</script>
