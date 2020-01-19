<template>
  <q-page class="bg-grey-3 column">
    <div class="row q-pa-sm bg-primary">
           <q-input 
           v-model="newProduct" 
           label="Dodaj produkt" 
           dense bg-color="white" 
           class="col" 
           square
           @keyup.enter="addProduct"
           >
        <template v-slot:append>
          <q-btn round dense flat icon="add" @click="addProduct"/>
        </template>
      </q-input>
    </div>
    <q-list class="bg-white" separator bordered>
      <q-item 
      v-ripple 
      v-for="(product, index) in products" 
      :key="product.title" 
      @click="product.done = !product.done" 
      clickable
      :class="{'done bg-blue-1': product.done}"
      >
        <q-item-section avatar>
          <q-checkbox v-model="product.done" color="primary" class="no-pointer-events"/>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ product.title }}</q-item-label>
        </q-item-section>
        <q-item-section v-if="product.done" side>
          <q-btn flat round color="primary" icon="delete" @click.stop="deleteProduct(index)"/>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  data() {
    return{
      newProduct: "",
      products: [
      {
        title: "bakłażan",
        done: false
      },
         {
        title: "brokuł",
        done: false
      },
             {
        title: "burak",
        done: false
      },
             {
        title: "czosnek",
        done: false
      },
             {
        title: "cebula",
        done: false
      },
             {
        title: "cukinia",
        done: false
      },
             {
        title: "rzodkiewka",
        done: false
      },
             {
        title: "fasola szparagowa",
        done: false
      },
             {
        title: "fasola ziarnista",
        done: false
      },
             {
        title: "groszek",
        done: false
      },
             {
        title: "kalafior",
        done: false
      },
             {
        title: "brukselka",
        done: false
      },
             {
        title: "kapusta",
        done: false
      },
             {
        title: "marchew",
        done: false
      },
             {
        title: "oliwki",
        done: false
      },
             {
        title: "papryka",
        done: false
      },
             {
        title: "kapusta pekińska",
        done: false
      },
             {
        title: "pieczarki",
        done: false
      },
             {
        title: "por",
        done: false
      },
             {
        title: "pomidor",
        done: false
      },
             {
        title: "sałata",
        done: false
      },
             {
        title: "seler korzeń/nać",
        done: false
      },
             {
        title: "soczewica/ciecierzyca",
        done: false
      },
             {
        title: "kiszona kapusta",
        done: false
      },
             {
        title: "suszone pomidory",
        done: false
      },
             {
        title: "bób",
        done: false
      },
             {
        title: "szpinak",
        done: false
      },
             {
        title: "dynia",
        done: false
      },
             {
        title: "kukurydza",
        done: false
      },
             {
        title: "awokado",
        done: false
      },
             {
        title: "",
        done: false
      },
             {
        title: "Pomidor",
        done: false
      },
             {
        title: "Pomidor",
        done: false
      },
             {
        title: "Pomidor",
        done: false
      },
             {
        title: "Pomidor",
        done: false
      },
             {
        title: "Pomidor",
        done: false
      },
             {
        title: "Pomidor",
        done: false
      },
             {
        title: "Pomidor",
        done: false
      },
             {
        title: "Pomidor",
        done: false
      },
             {
        title: "Pomidor",
        done: false
      },
             {
        title: "Pomidor",
        done: false
      },
             {
        title: "Pomidor",
        done: false
      },
             {
        title: "Pomidor",
        done: false
      },
             {
        title: "Pomidor",
        done: false
      },
             {
        title: "Pomidor",
        done: false
      },
             {
        title: "Pomidor",
        done: false
      },
             {
        title: "Pomidor",
        done: false
      },
      
         {
        title: "Jabłko",
        done: false
      },
      ]
    }
  },
  methods: {
    deleteProduct (index) {
      this.$q.dialog({
        title: 'Uwaga',
        message: 'Czy na pewno chcesz usunąć?',
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
    color: #bbb;
  }
}
</style>
