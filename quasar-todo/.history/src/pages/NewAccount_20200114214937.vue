<template>
  <q-page class="q-pa-lg bg-grey-1">
    <p class="text-h5 text-bold">Dołącz do nas tworząc nowe konto!</p>
<br>
<p class="text-subtitle2">Dodaj swój avatar</p>
   <q-avatar>
   </q-avatar>
   <br>
<template>
  <div class="container">
    <div class="large-12 medium-12 small-12 cell">
        <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
        <button v-on:click="submitFile()">Prześlij zdjęcie</button>
    </div>
  </div>
</template>    

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
      autogrow
      filled
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
        file: '',
            }
            
  },
  methods: {
        simulateProgress (number) { 
            this[`loading${number}`] = true
        setTimeout(() => { 
            this[`loading${number}`] = false 
            }, 2000)
        },   
      handleFileUpload(){ 
          this.file = this.$refs.file.files[0];
    }
    }    
}
</script>