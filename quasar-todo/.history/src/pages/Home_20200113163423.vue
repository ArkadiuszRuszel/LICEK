<template>
  <q-page class="q-pa-lg">
  <q-img class="h4-image bg-transparent" src="statics/you.png" >  
<h4 class="q-md-none text-center text-bold" >Witaj na stronie Twojego zdrowszego życia!</h4>

<h6 class="text-center text-body1">Na danej stronie możesz prowadzić swój dziennik postępów w ramach stosowania diety, 
  pobierać dokumenty (w tym diety), 
  dokonywać zmian w swoich preferencjach żywieniowych 
  oraz w razie potrzeby 
  zaczerpnąć wiedzy o produktach.
</h6>
<br>
<br>
      <p class="text-h5 text-bold login"></p>
        <p class="text-h6 text-bold text-center ">Zaloguj się poniżej do swojego konta.</p>
        <input type="text" name="mail" v-model="input.username" placeholder="Twój email" />
        <input type="password" name="password" v-model="input.password" placeholder="Hasło" /><br>     
<br>
        <q-btn rounded no-caps :loading="loading5" color="green-8" @click="simulateProgress(5)" v-on:click="login()" icon-right="arrow_forward">Zaloguj się
          <template v-slot:loading>
            <q-spinner-facebook class="on-right"/>
          </template>
        </q-btn>
        <q-btn rounded no-caps :loading="loading6" color="blue-5" @click="simulateProgress(6)" v-on:click="passrem()" width="200px">Nie pamiętam hasła
      <template v-slot:loading>
                <q-spinner-facebook class="on-right"/>Sprawdź adres email
      </template>
      </q-btn>
</q-img>
</q-page> 
</template>

<style scss>
    .login {
        margin: auto;
        width: auto;
        color: black;
    }
</style>



<script>
    export default {
        name: 'Login',
        data() {
            return {
                loading6: false,
                loading5: false,
                input: {
                    mail: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                if(this.input.mail != "" && this.input.password != "") {
                    if(this.input.mail == this.$parent.mockAccount.mail && this.input.password == this.$parent.mockAccount.password) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "secure" });
                    } else {
                        console.log("Adres email lub/i hasło są niepoprawne.");
                    }
                } else {
                    console.log("Adres email i hasło muszą być podane");
                }
            },

            simulateProgress (number) {
              this[`loading${number}`] = true
            setTimeout(() => {
              this[`loading${6}`] = false
            }, 3000)
             setTimeout(() => {
              this[`loading${5}`] = false
            }, 1000)
        }
    }
}

</script>