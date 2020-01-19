<template>

<q-page class="q-pa-lg">
<h5 class="q-mt-none">Facebook</h5>

<p>Nie zapomnij polubić Nas na facebooku :)</p>

<div id="face">
<q-btn color="primary" icon-right="send" label="Facebook" @click="myFunction()"/>
<q-btn color="primary" icon-right="send" label="Facebook" @click="myFunction()"/>
</div>

<!-- https://www.facebook.com/dietetykeczarniak -->

<p></p>

<h5 class="q-mt-none">Znany lekarz</h5>

<p>Oraz pozostaw pozytywną opinię na znanym lekarzu!</p>
<q-btn color="secondary" icon-right="send" label="Znany lekarz" />

<!-- https://www.znanylekarz.pl/magdalena-sniegulska/dietetyk/slupsk -->


</q-page>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.0.5/vue.min.js"></script>
<script type="text/javascript">
  new Vue({
    el: '#face',
    data: {
      myModel:false
    },  
    methods:{
      myFunction: function () {   
          window.open("https://www.facebook.com/dietetykeczarniak", "_blank");    
      }
    }
  });
</script>
<script>
export default {

}

</script>
