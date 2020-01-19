<template>
 <div id="accounts-create-edit-view">
 You can create and edit accounts with me, yippee!

 <router-link :to="{ name: 'accountsListView' }">View all accounts</router-link>

 <form class="form" @submit.prevent="saveNewAccount">
 <label for="name" class="label">Name</label>
 <p class="control">
 <input type="text" class="input" name="name" v-model="newAccount.name">
 </p>
 <label for="category" class="label">Category</label>
 <p class="control">
 <span class="select">
 <select name="category" v-model="newAccount.category">
 <option v-for="value, key in categories" :value="key">{{ value }}</option>
 </select>
 </span>
 </p>
 <label for="balance" class="label">Balance</label>
 <p class="control">
 <input type="text" class="input" name="balance" v-model="newAccount.balance">
 </p>
 <div class="control is-grouped">
 <p class="control">
 <button class="button is-primary">Submit</button>
 </p>
 <p class="control">
 <router-link :to="{ name: 'accountsListView' }"><button class="button is-link">Cancel</button></router-link>
 </p>
 </div>
 </form>
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