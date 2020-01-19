<template>
  <q-page class="q-pa-lg bg-grey-1">
      <p class="text-h5 text-bold">W tym miejscu możesz wybrać produkty, których NIE spożywasz w celu wypełnienia wywiadu żywieniowego dla dietetyka.</p>
      <p class="text-subtitle1">Wypełnij wywiad żywieniowy online by zaoszczędzić swój czas oraz środowisko :)</p>
    <div class="row bg-green">
           <q-input 
           v-model="newProduct" 
           label="Dodaj produkt, który lubisz, a którego nie ma poniżej" 
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
    <p></p>
            <q-select transition-show="flip-up" transition-hide="flip-down" multiple color="red" bg-color="green-3" filled v-model="model1" :options="options1" label="Warzywa">
        <template v-slot:prepend>
          <q-icon name="img:statics/icons/vegetables.png"/>
        </template>
      </q-select>

            <q-select transition-show="flip-up" transition-hide="flip-down" multiple color="black" bg-color="amber-3" filled v-model="model2" :options="options2" label="Owoce">
        <template v-slot:prepend>
          <q-icon name="img:statics/icons/fruits.png"/>
       </template> 
      </q-select>

            <q-select transition-show="flip-up" transition-hide="flip-down" multiple color="black" bg-color="yellow-1" filled v-model="model3" :options="options3" label="Nabiał">
        <template v-slot:prepend>
          <q-icon name="img:statics/icons/dairy.png"/>
       </template> 
      </q-select>

            <q-select transition-show="flip-up" transition-hide="flip-down" multiple color="black" bg-color="red-3" filled v-model="model4" :options="options4" label="Mięso">
        <template v-slot:prepend>
          <q-icon name="img:statics/icons/meat.png"/>
       </template> 
      </q-select>

      
            <q-select transition-show="flip-up" transition-hide="flip-down" multiple color="black" bg-color="blue-grey-3" filled v-model="model5" :options="options5" label="Ryby">
        <template v-slot:prepend>
          <q-icon name="img:statics/icons/fish.png"/>
       </template> 
      </q-select>

      
            <q-select transition-show="flip-up" transition-hide="flip-down" multiple color="black" bg-color="yellow-3" filled v-model="model6" :options="options6" label="Pieczywo">
        <template v-slot:prepend>
          <q-icon name="img:statics/icons/bread.png"/>
       </template> 
      </q-select>

      
            <q-select transition-show="flip-up" transition-hide="flip-down" multiple color="black" bg-color="brown-3" filled v-model="model7" :options="options7" label="Orzechy/Pestki">
        <template v-slot:prepend>
          <q-icon name="img:statics/icons/nuts.png"/>
       </template> 
      </q-select>

      
            <q-select transition-show="flip-up" transition-hide="flip-down" multiple color="black" bg-color="indigo-1" filled v-model="model8" :options="options8" label="Płatki">
        <template v-slot:prepend>
          <q-icon name="img:statics/icons/cereal.png"/>
       </template> 
      </q-select>

      
            <q-select transition-show="flip-up" transition-hide="flip-down" multiple color="black" bg-color="orange-3" filled v-model="model9" :options="options9" label="Zupy">
        <template v-slot:prepend>
          <q-icon name="img:statics/icons/soup.png"/>
       </template> 
      </q-select>

                  <q-select transition-show="flip-up" transition-hide="flip-down" multiple color="black" bg-color="brown-2" filled v-model="model10" :options="options10" label="Dodatki">
        <template v-slot:prepend>
          <q-icon name="img:statics/icons/groats.png"/>
       </template> 
      </q-select>

      
            <q-select transition-show="flip-up" transition-hide="flip-down" multiple color="black" bg-color="cyan-3" filled v-model="model10" :options="options10" label="Inne">
        <template v-slot:prepend>
          <q-icon name="img:statics/icons/otherfood.png"/>
       </template> 
      </q-select>

    <q-list class="bg-white" separator>
      <q-item 
      v-ripple 
      v-for="(product, index) in products" 
      :key="product.title" 
      @click="product.done = !product.done" 
      clickable
      :class="{'done bg-green-1': product.done}">


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
  </q-page>
</template>

<script>
export default {
  data() {
    return{
      model1: null,
      model2: null,
      model3: null,
      model4: null,
      model5: null,
      model6: null,
      model7: null,
      model8: null,
      model9: null,
      model10: null,
      model11: null,
      options1: [
        'bakłażan', 'brokuł', 'buraki', 'czosnek', 'cebula', 'cukinia', 'rzodkiewka', 'fasola szparagowa', 'fasola ziarnista', 'groszek', 'groszek z marchewką', 'marchew', 'ogórek', 'ogórek kiszony', 'oliwki', 'papryka', 'kapusta pekińska', 'pomidor', 'por', 'sałata', 'seler korzeń/nać', 'soczewica/ciecierzyca', 'kiszona kapusta', 'suszone pomidory', 'bób', 'szpinak', 'kukurydza', 'soki warzywne', 'dynia'
      ],
      options2: [
        'awokado', 'banan', 'granat', 'porzeczki', 'ananas', 'gruszka', 'jabłko', 'jagody/borówki', 'kiwi', 'mango', 'maliny', 'grapefruit', 'mandarynka', 'melon', 'morela', 'pomarańcz', 'suszona morela', 'suszona śliwa', 'suszona żurawina', 'śliwka','truskawka', 'soki owocowe', 'winogrona', 'wiśnie/czereśnie', 'brzoskwinia/nektarynka', 'arbuz', 'agrest'
      ],
      options3: [
        'feta', 'mozzarella', 'ser twarogowy', 'serek wiejski lekki', 'ser żółty', 'lazur/rokpol', 'parmezan', 'camembert', 'mleko', 'jogurt', 'kefir', 'maślanka' 
      ],
      options4: [
        'kurczak', 'wieprzowina', 'wołowina', 'indyk', 'wątróbka', 'diczyzna'
      ],
      options5: [
        'śledź', 'makrela', 'sola', 'łosoś wędzony', 'łosoś świeży', 'dorsz', 'tuńczyk', 'pstrąg', 'krewetki' 
      ],
      options6: [
        'żytni', 'graham', 'bułki graham', 'chrupkie - vasa', 'wafle ryżowe'
      ],
      options7: [
        'nerkowiec', 'laskowe', 'włoskie', 'migdały', 'pestki dyni', 'słonecznik', 'sezam'
      ],
      options8: [
        'owsiane', 'musli z rodzynkami i orzechami', 'musli z owocami', 'żytnie', 'otręby', 'orkiszowe', 'jęczmiennie', 'kukurydziane', 'pszenne'
      ],
      options9: [
        'krem', 'pomidorowa', 'ogórkowa', 'warzywna', 'krupnik', 'grzybowa', 'rosół'
      ],
      options10: [
        'gryczana', 'jęczmienna', 'bulgur', 'kuskus', 'makaron', 'ryż', 'jaglana', 'pęczak'
      ],
      options11: [
        'jajka', 'dżem', 'miód', 'czekolada gorzka', 'lody', 'ciasteczka pełnoziarniste'
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
