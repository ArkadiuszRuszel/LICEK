<template>
   <q-page class="q-pa-md bg-grey-1">
        <p class="text-h5 text-bold">Twoje konto
            <q-avatar size="60px" class="q-mb-sm avatar">
                <img src="statics/krolik.jpg">
            </q-avatar>
        </p>

<br>
        <div class="q-gutter-sm row">
            <q-input v-model="name" filled type="name" hint="Imię">
                <template v-slot:prepend>
                    <q-icon name="human" color="black" />
                </template>
            </q-input>

            <q-input v-model="surname" filled type="surname" hint="Nazwisko">
                <template v-slot:prepend>
                    <q-icon name="img:statics/icons/person.png" color="black" />
                </template>
            </q-input>
        </div>
<br>
        <div class="q-gutter-sm row text-left">
            <q-input v-model="email" filled type="email" hint="Email">
                <template v-slot:prepend>
                    <q-icon name="contact_mail" color="black" />
                </template>
            </q-input>

            <q-input v-model="tel" filled type="tel" hint="Numer telefonu">
                <template v-slot:prepend>
                    <q-icon name="contact_phone" color="black" />
                </template>
            </q-input>

            <q-input v-model="birthdate" filled type="date" hint="Data urodzenia">
                <template v-slot:prepend>
                    <q-icon name="cake" color="black" />
                </template>
            </q-input>     
        </div>
<br>
        <div class="q-gutter-sm row">

            <q-input v-model="password"  filled outlined type="password" hint="Hasło" /> <br><br>
            <q-input v-model="password2" filled type="password" hint="Zmień hasło" />
            <q-input v-model="password3" filled type="password" hint="Powtórz hasło" />
    </div>

<br>
     <q-input
      v-model="text"
      filled
      type="textarea"
      hint="Możesz opowiedzieć nam coś o sobie :)"
      height="150px"
      max-width="300px"
    />

<br>

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
        text:'praca licencjacka to moje hobby',
        name:'Arkadiusz',
        surname: 'Ruszel',
        password: '',
        password2: '',
        password3: '',
        loading4: false,
        email: 'a.ruszel@hotmail.com',
        tel: '511-588-527',
         birthdate: {
			dd: '01',
			mm: '01',
			yyyy: '2018'
		        }
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



