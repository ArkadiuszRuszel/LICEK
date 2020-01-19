<template>
  <q-page class="q-pa-lg">
<h5 class="q-mt-none">Pobierz</h5>
<h7>Wywiad żywieniowy do wydruku</h7>



<h6>Załącz pliki - diety lub inne</h6>
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
