<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />
      </q-toolbar>
        <div class="q-px-lg q-pt-xl q-mb-md">
          <div class="text-h3">Zadania</div>
          <div class="text-subtitle2">{{ todaysDate }}</div>
        </div>
      <q-img src="statics/alpaca.jpg" class="header-image absolute-top"/>
    </q-header>

      <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="250"
        :breakpoint="400"
      >
        <q-scroll-area style="height: calc(100% - 185px); margin-top: 185px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item clickable v-ripple to="/" exact>
              <q-item-section avatar>
                <q-icon name="view_list" />
              </q-item-section>
              <q-item-section>
                Zadania
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/Help" exact>
              <q-item-section avatar>
                <q-icon name="help" />
              </q-item-section>
              <q-item-section>
                Pomoc
              </q-item-section>
            </q-item>

          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="statics/alpaca.jpg" style="height: 186px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="statics/krolik.jpg">
            </q-avatar>
            <div class="text-weight-bold">Dzięcioł Dominiczek</div>
            <div>@dominik15kola</div>
          </div>
        </q-img>
      </q-drawer>

    <q-page-container>
      <keep-alive>
      <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
import { date } from 'quasar'
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false
    }
  },
  computed: {
    todaysDate () {
      let timeStamp = Date.now()
      return date.formatDate(timeStamp, 'dddd D MMMM')
    }
  }
}
</script>
<style lang="scss">
  .header-image {
    height: 100%;
    z-index: -1;
    opacity: .5;
    filter: grayscale(100);
  }
  </style>
