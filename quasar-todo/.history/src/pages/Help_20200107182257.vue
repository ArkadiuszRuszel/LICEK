<template>
<div :style="myStyle" id="wrapper"></div>
  <q-page class="q-pa-lg">
<h5 class="q-mt-none">O nas</h5>
<h4 class="text-center text-body1 text-bold">Created by Arkadiusz Ruszel</h4>
<h5 class="text-center text-body1"><a href="https://github.com/blacksun55" target="_blank" rel="noopener"><img src="statics/git.png" height="25px" width="25px">https://github.com/blacksun55</a></h5>
<h5 class="text-center text-body1"><a href="https://www.facebook.com/arek.ruszel" target="_blank" rel="noopener"><img src="statics/facebook.png" height="22px" width="22px">https://www.facebook.com/arek.ruszel</a></h5>
<h4 class="text-center text-body1 text-bold">2020</h4>
  </q-page>
  </div>
</template>

<script>
export default {
  data(){
       return{
         myStyle:{
            backgroundColor:"#16a085" 
            }

           }
         }

}
</script>

