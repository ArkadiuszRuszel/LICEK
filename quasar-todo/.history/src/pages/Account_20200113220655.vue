<template>
   <q-page class="q-pa-md bg-grey-1">
        <p class="text-h5 text-bold">Twoje konto
            <q-avatar size="60px" class="q-mb-sm avatar">
                <img src="statics/krolik.jpg">
            </q-avatar>
        </p>

        <br>

        <div class="q-gutter-md row items-start">
            <q-input rounded standout v-model="password" filled type="password" hint="Hasło" /> <br><br>
            <q-input v-model="password2" filled type="password" hint="Zmień hasło" />
            <q-input v-model="password3" filled type="password" hint="Powtórz hasło" />
            <q-input v-model="email" filled type="email" hint="Email">
            <template v-slot:before>
            <q-icon name="mail" />
            </template>
            </q-input
            <q-input v-model="tel" filled type="tel" hint="Numer telefonu" mask=""/>
            <q-input v-model="birthdatedate" filled type="date" hint="Data urodzenia" />


    </div>



    <q-btn rounded :loading="loading4" color="green" @click="simulateProgress(4)" style="width: 220px"> Zapisz zmiany
      <template v-slot:loading>
        <q-spinner-hourglass class="on-left" /> Trwa zapisywanie...
      </template>
    </q-btn>
    </q-page>
</template>




<script>
    export default {
        data () {
    return {
      password: '',
      password2: '',
      password3: '',
      loading4: false,
      email: 'a.ruszel@hotmail.com',
      tel: '',
      birthdate: ''
    }
  },
  methods: {
 simulateProgress (number) {
      this[`loading${number}`] = true
      setTimeout(() => {
        this[`loading${number}`] = false
      }, 2000)
    }
  }
     
}

</script>



