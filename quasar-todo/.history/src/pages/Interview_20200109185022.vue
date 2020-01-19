<template>
  <q-page class="q-pa-lg bg-grey-1">
      <p class="text-h5 text-bold">W tym miejscu możesz wybrać produkty, które spożywasz w celu wypełnienia wywiadu żywieniowego dla dietetyka.</p>
      <p class="text-subtitle1">Możesz także wykreślić produkty, których NIE jadasz.</p>
    <div class="row q-pa-sm bg-green">
           <q-input 
           v-model="newProduct" 
           label="Dodaj produkt, którego nie ma poniżej" 
           dense bg-color="white" 
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
          <q-checkbox v-model="product.done" color="green" class="no-pointer-events"/>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ product.title }}</q-item-label>
        </q-item-section>
        <q-item-section v-if="product.done" side>
          <q-btn flat round color="red" icon="delete" @click.stop="deleteProduct(index)"/>
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
        title: "banan",
        done: false
      },
             {
        title: "granat",
        done: false
      },
             {
        title: "porzeczki",
        done: false
      },
             {
        title: "ananas",
        done: false
      },
             {
        title: "gruszka",
        done: false
      },
             {
        title: "porzeczki",
        done: false
      },
             {
        title: "jabłko",
        done: false
      },
             {
        title: "mango",
        done: false
      },
             {
        title: "kiwi",
        done: false
      },
             {
        title: "jagody",
        done: false
      },
             {
        title: "melon",
        done: false
      },
             {
        title: "morela",
        done: false
      },
             {
        title: "maliny",
        done: false
      },
             {
        title: "pomarańcz",
        done: false
      },
             {
        title: "śliwka",
        done: false
      },
             {
        title: "truskawka",
        done: false
      },
             {
        title: "arbuz",
        done: false
      },
      
         {
        title: "agrest",
        done: false
      },
      ]
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
