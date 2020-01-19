<template>

<q-page class="q-pa-lg">
<p class="text-h5 text-bold">Facebook</p>
<p class="text-subtitle1">Nie zapomnij polubić Nas na facebooku :)</p>
<a href="https://www.facebook.com/dietetykeczarniak" target="_blank" rel="noopener"><q-btn color="blue-9" icon-right="send" label="Facebook"></q-btn></a>

<!-- https://www.facebook.com/dietetykeczarniak -->

<br>

<p class="text-h5 text-bold">Znany lekarz</p>
<p class="text-subtitle1">Oraz pozostaw pozytywną opinię na znanym lekarzu!</p>
<a href="https://www.znanylekarz.pl/magdalena-sniegulska/dietetyk/slupsk" target="_blank" rel="noopener"><q-btn color="teal-13" icon-right="send" label="Znany lekarz"></q-btn></a>

<!-- https://www.znanylekarz.pl/magdalena-sniegulska/dietetyk/slupsk -->

<q-btn :loading="loading4" color="primary" @click="simulateProgress(4)" style="width: 150px">
      Button
      <template v-slot:loading>
        <q-spinner-hourglass class="on-left" />
        Loading...
      </template>
    </q-btn>


</q-page>


</template>

<script>
 data () {
    return {
      loading1: false,
      loading2: false,
      loading3: false,
      loading4: false,
      loading5: false,
      loading6: false,
      progress: false
    }
  },

  methods: {
    simulateProgress (number) {
      // we set loading state
      this[`loading${number}`] = true
      // simulate a delay
      setTimeout(() => {
        // we're done, we reset loading state
        this[`loading${number}`] = false
      }, 3000)
    }
  }
}
</script>
