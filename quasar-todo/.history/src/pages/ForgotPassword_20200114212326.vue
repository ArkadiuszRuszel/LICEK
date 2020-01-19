<template>
   <q-page class="q-pa-md">
        <p class="q-m-none text-center text-bold text-h5">Resetuj hasło
          <div class="card-body text-center">
            <form autocomplete="off" @submit.prevent="requestResetPassword" method="post">
              <div class="form-group">
                  <p class="text-body1 text-center">Nie przejmuj się, nic straconego! Wpisz poniżej swojego emaila, a my wyślemy na niego link potrzebny do zresetowania hasła.</p>
                  <input type="email" id="email" class="kontrolka text-center" placeholder="twój@email.com" color="green" v-model="email" required>
              </div>
              <br>
              <q-btn rounded color="blue-5" class="zapomnianekonto">Wyślij email</q-btn>
            </form>
          </div>
  </q-page>
</template>

<style>

    .zapomnianekonto {
      width: 220px;
    }
    .kontrolka {
        width: 330px;
    }
</style>


<script>
export default {
    data() {
      return {
        email: null,
        has_error: false
      }
    },
    methods: {
        requestResetPassword() {
            this.$http.post("/auth/reset-password", {email: this.email}).then(result => {
                this.response = result.data;
                console.log(result.data);
            }, error => {
                console.error(error);
            });
        }
    }
}
</script>