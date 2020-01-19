<template>
  <q-page class="q-pa-lg bg-grey-1">
    <p class="text-h5 text-bold">Utwórz nowe konto poniżej:</p>
<br>
<p class="text-subtitle2">Dodaj swój avatar</p>
   
     <q-uploader>
    <button id="pick-avatar">Wybierz zdjęcie</button>
    <avatar-cropper
      @uploaded="handleUploaded"
      trigger="#pick-avatar"
      upload-url="/files/upload" />
     </q-uploader>

<br>
<br>
        <div class="q-gutter-sm row">
            <q-input v-model="name" filled type="name" hint="Imię">
                <template v-slot:prepend>
                    <q-icon name="img:statics/icons/person.png"/>
                </template>
            </q-input>

            <q-input v-model="surname" filled type="surname" hint="Nazwisko">
                <template v-slot:prepend>
                    <q-icon name="img:statics/icons/person.png" />
                </template>
            </q-input>
        </div>
<br>
        <div class="q-gutter-sm row text-left">
            <q-input v-model="email" filled type="email" hint="Email">
                <template v-slot:prepend>
                    <q-icon name="contact_mail" color="green" />
                </template>
            </q-input>

            <q-input v-model="tel" filled type="tel" hint="Numer telefonu">
                <template v-slot:prepend>
                    <q-icon name="contact_phone" color="green" />
                </template>
            </q-input>

            <q-input v-model="birthdate" filled readonly type="hard" hint="Data urodzenia">
                <template v-slot:prepend>
                    <q-icon name="cake" color="green" />
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
      :max-height="150"
      :max-width="300"
    />

<br>

    <a href="/#/Account"><q-btn wait-for-ripple rounded :loading="loading4" color="green" @click="simulateProgress(4)" style="width: 220px"> Utwórz konto
      <template v-slot:loading>
        <q-spinner-hourglass class="on-left" /> Tworzenie konta...
      </template>
    </q-btn>
    </a>

    </q-page>
</template>




<script>
    export default {
        data () {
    return {
        text:'',
        name:'',
        surname: '',
        password: '',
        password2: '',
        password3: '',
        loading4: false,
        email: '',
        tel: '',
        birthdate: '',
        userAvatar: undefined,   
            }
            
  },
  methods: {
 simulateProgress (number) {
      this[`loading${number}`] = true
      setTimeout(() => {
        this[`loading${number}`] = false
      }, 2000)
    },   
      handleUploaded(resp) {
        this.userAvatar = resp.relative_url;
      }
    }    
}
</script>