<template>
  <q-page class="q-pa-lg">
<h5 class="q-mt-none">Pobierz</h5>
<h6 class="text-left text-body1">Wywiad żywieniowy do wydruku</h6>

<p></p>

<h6 class="text-center text-body1">Załącz pliki - diety lub inne.</h6>
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
