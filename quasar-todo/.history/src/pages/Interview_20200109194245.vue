<template>
  <q-page class="q-pa-lg bg-grey-1">
      <p class="text-h5 text-bold">W tym miejscu możesz wybrać produkty, które spożywasz w celu wypełnienia wywiadu żywieniowego dla dietetyka.</p>
      <p class="text-subtitle1">Możesz także wykreślić produkty, których NIE jadasz.</p>
    <div class="row bg-green">
           <q-input 
           v-model="newProduct" 
           label="Dodaj produkt, którego nie ma poniżej" 
           color="white"
            
           bg-grey-1
           filled
           class="col" 
           square
           @keyup.enter="addProduct"
           >
        <template v-slot:append>
          <q-btn round dense flat icon="add" @click="addProduct"/>
        </template>
      </q-input>
    </div>
         <q-select  color="black" bg-color="green-3" filled v-model="model" :options="options" label="Owoce i warzywa">
        <template v-slot:prepend>
          <q-icon name="img:statics/fruitsvegetables.png"/>
        </template>

        <q-select  color="black" bg-color="green-3" filled v-model="model" :options="options" label="Owoce i warzywa">
        <template v-slot:prepend>
          <q-icon name="img:statics/fruitsvegetables.png"/>
        </template>

                 <q-select  color="black" bg-color="green-3" filled v-model="model" :options="options" label="Owoce i warzywa">
        <template v-slot:prepend>
          <q-icon name="img:statics/fruitsvegetables.png"/>
        </template>
        </q
    <q-list class="bg-white" separator>
      <q-item 
      v-ripple 
      v-for="(product, index) in products" 
      :key="product.title" 
      @click="product.done = !product.done" 
      clickable
      :class="{'done bg-green-1': product.done}"
      >
        <q-item-section avatar>
          <q-checkbox v-model="product.done" filledcolor="green" class="no-pointer-events"/>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ product.title }}</q-item-label>
        </q-item-section>
        <q-item-section v-if="product.done" side>
          <q-btn flat round color="red" icon="delete" @click.stop="deleteProduct(index)"/>
        </q-item-section>
      </q-item>
     </q-list>
    </q-select>
  </q-page>
</template>

<script>
export default {
  data() {
    return{
      model: null,
      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ],

    }
  },
  methods: {
    deleteProduct (index) {
      this.$q.dialog({
        title: 'Uwaga',
        message: 'Czy na pewno nie jadasz danego produktu?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.products.splice(index,1)
        this.$q.notify('Produkt został usunięty')
      })
    },
    addProduct(){
      console.log("Dodawanie produktu")
    }
  }
}
</script>
<style lang="scss">
.done {
  .q-item__label {
    text-decoration: line-through;
    color: brown;
  }
}

</style>
