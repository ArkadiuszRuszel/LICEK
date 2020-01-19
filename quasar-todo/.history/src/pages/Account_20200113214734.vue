<template>
   <q-page class="q-pa-md bg-grey-1">
        <p class="text-h5 text-bold">Twoje konto
            <q-avatar size="60px" class="q-mb-sm avatar">
                <img src="statics/krolik.jpg">
            </q-avatar>
        </p>

        <br>

        <div class="q-gutter-md row items-start">
      <q-input v-model="password" filled type="password" hint="Password" />

      <q-input v-model="email" filled type="email" hint="Email" />

      <q-input v-model="search" filled type="search" hint="Search">
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>

      <q-input v-model="tel" filled type="tel" hint="Telephone number" />

      <q-input v-model="url" filled type="url" hint="URL" />

      <q-input v-model="time" filled type="time" hint="Native time" />

      <q-input v-model="date" filled type="date" hint="Native date" />
    </div>




    </q-page>
</template>




<script>
    export default {
        data () {
    return {
      password: '',
      isPwd: true,

      email: '',
      search: '',
      tel: '',
      url: '',
      time: '',
      date: ''
    }
  }
        
    }
</script>



