<template>
    <div id="login">
        <h5>Login</h5>
        <input type="text" name="username" v-model="input.username" placeholder="Nazwa użytkownika" />
        <input type="password" name="password" v-model="input.password" placeholder="Hasło" />
        <button type="button" v-on:click="login()">Login</button>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "secure" });
                    } else {
                        console.log("Nazwa użytkownika lub/i hasło są niepoprawne.");
                    }
                } else {
                    console.log("Nazwa użytkownika i hasło muszą być podane");
                }
            }
        }
    }
</script>

<style scoped>
    #login {
        width: auto;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        padding: 20px;
    }
</style>