<template>

    
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