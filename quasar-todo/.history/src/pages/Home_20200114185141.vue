<template>
  <q-page class="q-pa-md">
<h5 class="q-m-none text-center text-bold" >Witaj w Twoim zdrowszym życiu!</h5>

<p class="q-md-none text-center text-body1">Możesz prowadzić swój dziennik postępów w ramach stosowania diety, 
  pobierać dokumenty (w tym diety), 
  udostępniać swoje pliki,
  dokonywać zmian w swoich preferencjach żywieniowych,
  oraz w razie potrzeby 
  zaczerpnąć wiedzy o produktach.
</p>
<br>
      <div id="login" class="bg-transparent text-center">
        <p class="text-body2 text-bold"> Zaloguj się poniżej do swojego konta. </p>
        <input type="text" name="mail" v-model="input.username" placeholder="Twój email" />
        <input type="password" name="password" v-model="input.password" placeholder="Hasło" /><br>     
<br>
        <a href="/#/Account"><q-btn rounded no-caps :loading="loading5" color="green-8" @click="simulateProgress(5)" v-on:click="login()" icon-right="arrow_forward">Zaloguj
          <template v-slot:loading>
            <q-spinner-facebook class="on-right"/>
          </template>
        </q-btn>
        </a>

        <q-btn v-on:click="icon = true" rounded no-caps :loading="loading6" color="blue-5" @click="simulateProgress(6)"  width="200px">Nie pamiętam hasła
          <q-dialog v-model="icon">
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6 text-center">Uwaga!</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
            </q-card-section>
              <q-card-section> 
                 Sprawdź skrzynkę pocztową, wysłaliśmy na nią maila z procedurą resetowania hasła
              </q-card-section>
            </q-card>
        </q-dialog>
          <template v-slot:loading>
                <q-spinner-facebook class="on-right"/>
              </template>
      </q-btn>
     </div>
<br>
<br>
<br>
     <div id="login" class="bg-transparent text-center">
    <p class="text-body2 text-bold"> Nie masz jeszcze konta? Załóż je! </p>
      <a href="/#/NewAccount"><q-btn rounded no-caps color="green" icon="group_add" class="konto"> Stwórz konto
          <template v-slot:loading>
            <q-spinner-facebook class="on-right"/>
          </template>
        </q-btn>
        </a>
        </div>
     <br>
     <q-img class="text-center" src="statics/you.png" style="height: auto"></q-img>
</q-page> 
</template>

<style>
    .login {
        margin: auto;
        width: auto;
        color: black;
    }
    .konto {
      width: 220px;
    }
</style>



<script>
    export default {
        name: 'Login',
        data() {
            return {
                icon: false,
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