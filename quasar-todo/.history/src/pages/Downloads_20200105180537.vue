<template>
  <q-page class="q-pa-lg">
<h5 class="q-mt-none">Pobierz</h5>
<h6 class="text-left text-body1">Wywiad żywieniowy do wydruku</h6>

<p></p>

<h6 class="text-left text-body1" width="100">Załącz pliki - diety lub inne.</h6>
    <div class="q-gutter-sm row items-start">
      <q-uploader
        url="http://localhost:9000/upload"
        color="green"
        flat
        bordered
        multiple
        batch
        style="max-width: 300px"
        label="Dodaj pliki"
      />
      </div>
  </q-page>
</template>

<script>
export default {

}
</script>
