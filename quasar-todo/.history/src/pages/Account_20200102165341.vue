<template>
    <div id="login">
        <h4>Zaloguj się poniżej by zmienić swoje dane.</h4>
        <input type="text" name="username" v-model="input.username" placeholder="Nazwa użytkownika" />
        <input type="password" name="password" v-model="input.password" placeholder="Hasło" />
        <button type="button" v-on:click="login()">Login</button>
    </div>
<div class="login-page">
    <div class="content">
        <!-- <h1 class="app-name">Sb Admin Material</h1> -->
        <form class="login-form" fxFlex  >
            <div class="text-center">
                <h2 class="app-name">Sb Admin Material</h2>
            </div>
            <div fxFlex  fxlayout="row" fxlayout.lt-md="column">
                <div fxFlexFill>
                    <mat-form-field class="w-100">
                        <input matInput placeholder="Email">
                    </mat-form-field>
                </div>
            </div>
            <div fxFlex  fxLayout="row" fxLayout.lt-md="column">
                <div fxFlexFill>
                    <mat-form-field class="w-100">
                        <input matInput type="password" placeholder="Password">
                    </mat-form-field>
                </div>
            </div>
            <div fxFlex  fxLayout="row" fxLayout.lt-md="column" style="margin: 20px 0 30px 0">
                <div fxFlex>
                    <mat-checkbox color="primary">Remember Me</mat-checkbox>
                </div>
                <div fxFlex  fxLayoutAlign="end">
                    <a href="javascript:void(0)">Forget Password</a>
                </div>
            </div>
            <div fxFlex  fxLayout="row" fxLayout.lt-md="column">
                <div fxFlexFill>
                    <button mat-raised-button color="primary" class="w-100" (click)="onLogin()">Login</button>
                </div>
            </div>

        </form>
    </div>
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