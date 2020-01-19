<template>
   <q-page class="q-pa-md bg-grey-1">
        <p class="text-h5 text-bold">Twoje konto
            <q-avatar size="60px" class="q-mb-sm avatar">
                <img src="statics/krolik.jpg">
            </q-avatar>
        </p>

        <br>

        <div class="q-gutter-md row items-start">
            <q-input v-model="password" filled type="password" hint="Hasło" /> <br>
            <q-input v-model="password" filled type="password" hint="Zmień hasło" />
            <q-input v-model="email" filled type="email" hint="Email" />
            <q-input v-model="tel" filled type="tel" hint="Numer telefonu" />
            <q-input v-model.number="date" buttons color="black" filled type="date" hint="Data urodzenia" />

                        <q-popup-edit v-model.number="props.row.date" buttons color="black" persistent>
                <q-date color="green" v-model="props.row.date" mask="DD.MM.YYYY"/>
            </q-popup-edit>
    </div>




    </q-page>
</template>




<script>
    export default {
        data () {
    return {
      password: '',
      email: '',
      search: '',
      tel: '',
      time: '',
      date: ''
    }
  }
        
    }
</script>



