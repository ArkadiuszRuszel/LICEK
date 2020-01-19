<template>
  <q-page class="q-pa-lg">
  <q-img class="h3-image absolute-mid bg-transparent" src="statics/you.png" >  
<h4 class="q-md-none text-center text-bold" >Witaj na stronie Twojego zdrowszego życia!</h4>

<h6 class="text-center text-body1">Na danej stronie możesz prowadzić swój dziennik postępów w ramach stosowania diety, 
  pobierać dokumenty (w tym diety), 
  dokonywać zmian w swoich preferencjach żywieniowych 
  oraz w razie potrzeby 
  zaczerpnąć wiedzy o produktach.
</h6>

<br>
      <div id="login" class="back absolute-center">
        <p class="text-h5 text-bold">Zaloguj się poniżej do swojego konta.</p>
        <input type="text" name="mail" v-model="input.username" placeholder="Twój email" />
        <input type="password" name="password" v-model="input.password" placeholder="Hasło" />
        <button type="button" v-on:click="login()">Login</button>
    </div>
  </q-img>    
</q-page> 
</template>

<style scoped>
    #login {
        width: auto;
        color: black;
        border: 1px solid #CCCCCC;
        padding: 20px;
    }
</style>



<script>
    export default {
        name: 'Login',
        data() {
            return {
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
            }
        }
    }
</script>