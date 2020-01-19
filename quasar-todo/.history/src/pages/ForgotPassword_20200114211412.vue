<template>
   <q-page class="q-pa-md">
        <p class="q-m-none text-center text-bold text-h5">Resetuj hasło
          <div class="card-body text-center">
            <form autocomplete="off" @submit.prevent="requestResetPassword" method="post">
              <div class="form-group">
                  <p class="text-body1 text-center">Podaj niżej swój email powiązany z kontem w Zdrowie+ i kliknij WYŚLIJ EMAIL, aby kontynuować proces resetowania hasła</p>
                  <input type="email" id="email" class="form-control text-center" placeholder="twój@email.com" color="green" v-model="email" required>
              </div>
              <br>
              <q-btn rounded color="blue-5" width="400px">Wyślij email</q-btn>
            </form>
          </div>
  </q-page>
</template>
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