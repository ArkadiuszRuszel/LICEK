<template>
   <q-page class="q-pa-md">
        <p class="q-m-none text-center text-bold text-h5">Resetuj hasło



          <div class="card-body text-center">
            <form autocomplete="off" @submit.prevent="requestResetPassword" method="post">
              <div class="form-group">
                  <p class="text-body1 text-center">Email</p>
                  <input type="email" id="email" class="form-control text-center" placeholder="twoj@email.com" v-model="email" required>
              </div>
              <q-btn type="submit" class="color=green" width="300px">Wyślij </q-btn>
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