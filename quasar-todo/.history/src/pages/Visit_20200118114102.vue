<template>
  <q-page class="q-pa-lg bg-grey-1">
<p class="text-h5 text-bold">Umów się na wizytę już dziś!</p>
 <div class="q-pa-md">
    <div class="q-gutter-md">

      <q-date 
        color="green"
        v-model="date"
        :events="eventsFn"
        class="kalendarz"
        :options="options"
      />
              <q-icon name="access_time" class="cursor-pointer">
          <q-popup-proxy transition-show="scale" transition-hide="scale">
            <q-time v-model="date" mask="YYYY-MM-DD HH:mm" format24h />
          </q-popup-proxy>
                  </q-icon>
    </div>
  </div>


  </q-page>
</template>

<style>

    .kalendarz {
        width: 100%;
    }

</style>

<script>
export default {
   data () {
    return {
      date: '',
      events: [ '2019/03/02'],
      options: [ '1', '2019/02/05', '2019/02/06', '2019/02/09', '2019/02/23' ]
    }
  },

  methods: {
    eventsFn (date) {
      const parts = date.split('/')
      return parts['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek'] === 0
    }
  }
}
</script>