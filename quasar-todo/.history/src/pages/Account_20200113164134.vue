<template>
    <div id="login" class="back">
        <p class="text-h5 text-bold">Zaloguj się poniżej do swojego konta.</p>
        <input type="text" name="mail" v-model="input.username" placeholder="Twój email" />
        <input type="password" name="password" v-model="input.password" placeholder="Hasło" />
        <button type="button" v-on:click="login()">Login</button>
    </div>
    
</template>


<script>
    export default {
        
    }
</script>



