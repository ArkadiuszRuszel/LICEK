<template>
   <q-page class="q-pa-md bg-grey-1">
        <p class="q-m-none text-center text-bold">Resetuj hasło



          <div class="card-body">
            <form autocomplete="off" @submit.prevent="requestResetPassword" method="post">
              <div class="form-group">
                  <p class="text-h5 text bold">Email</p>
                  <input type="email" id="email" class="form-control" placeholder="twoj@email.com" v-model="email" required>
              </div>
              <button type="submit" class="btn btn-primary">Send Password Reset Link</button>
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