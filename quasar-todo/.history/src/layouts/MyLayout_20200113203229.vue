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
          <div class="text-h3 text-bold"> Moje zdrowsze życie </div>
          <div class="text-subtitle2 text-right"> Dziś jest {{ todaysDate }} </div>
        </div>
      <q-img src="statics/food.jpg" class="header-image absolute-top"/>
    </q-header>

      <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="250"
        :breakpoint="400"
      >
        <q-scroll-area style="height: calc(100% - 185px); margin-top: 185px; border-right: 1px solid #ddd">
          <q-list padding>

            <q-item clickable v-ripple to="/Home" exact>
              <q-item-section avatar>
                <q-icon name="img:statics/icons/home.png" />
              </q-item-section>
              <q-item-section> 
                Strona główna
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/Account" exact>
              <q-item-section avatar>
                <q-icon name="account_circle" />
              </q-item-section>
              <q-item-section>
                Moje konto
              </q-item-section>
            </q-item>

               <q-item clickable to="/Visit">
              <q-item-section avatar>
                <q-icon checked-icon="strikethrough_s" name="img:statics/icons/calendar.png" />
              </q-item-section>
              <q-item-section>
                Kalendarz wizyt
              </q-item-section>
            </q-item>
           
            <q-item clickable v-ripple to="/Interview" exact>
              <q-item-section avatar>
                <q-icon name="img:statics/icons/checklist.png" />
              </q-item-section>
              <q-item-section>
                Wywiad żywieniowy
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/ChangeLog" exact>
              <q-item-section avatar>
                <q-icon name="img:statics/icons/progress.png" />
              </q-item-section>
              <q-item-section>
                Dziennik postępów
              </q-item-section>
            </q-item>

             <q-item clickable v-ripple to="/Products" exact>
              <q-item-section avatar>
                <q-icon name="img:statics/icons/encyclopedia.png" />
              </q-item-section>
              <q-item-section>
                Encyklopedia produktów
              </q-item-section>
            </q-item>

              <q-item clickable v-ripple to="/Downloads" exact>
              <q-item-section avatar>
                <q-icon name="img:statics/icons/main-download.png" />
              </q-item-section>
              <q-item-section>
                Do pobrania
              </q-item-section>
            </q-item>      

              <q-item clickable v-ripple to="/SocialMedia" exact>
              <q-item-section avatar>
                <q-icon name="img:/statics/icons/social.png"/>
              </q-item-section>
              <q-item-section>
                Portale społecznościowe
              </q-item-section>
            </q-item>      

            <q-item clickable v-ripple to="/Help" exact>
              <q-item-section avatar>
                <q-icon name="img:/statics/icons/info.png" />
              </q-item-section>
              <q-item-section>
                Kim jesteśmy
              </q-item-section>
            </q-item>

          </q-list>
        </q-scroll-area>

        <q-img class="h2-image absolute-top" src="statics/healthy.jpg" style="height: 186px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="60px" class="q-mb-sm avatar text-center">
              <img src="statics/krolik.jpg">
            </q-avatar>
            <div class="text-weight-bold"> Zdrowie+ </div>
            <div> a.ruszel@hotmail.com </div>
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
      return date.formatDate(timeStamp, 'dddd D MMMM YYYY')
    }
  }
}
</script>
<style lang="scss">
  .header-image {
    height: 100%;
    z-index: -1;
    opacity: 0.86;

  }
  .h2-image {
    height: 100%;
    z-index: -1;
    opacity: 0.9; 
  }
  .avatar {
    align-items: middle;
  }
  </style>