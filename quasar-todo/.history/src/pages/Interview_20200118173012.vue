<template>
  <q-page class="q-pa-lg bg-grey-1">
      <p class="text-h5 text-bold">W tym miejscu możesz wybrać produkty, których NIE spożywasz w celu wypełnienia wywiadu żywieniowego dla dietetyka.</p>
      <p class="text-body1">Wypełnij wywiad żywieniowy online by oszczędzić swój czas oraz środowisko :)</p>
    <div class="row">


    <q-input color="white" filled square class="col bg-green-7" v-model="text1" label="Dodaj inny produkt, który LUBISZ i którego nie ma poniżej">
      <template v-slot:append>
        <q-icon name="img:statics/icons/thumbsup.png" color="black" />
      </template>
    </q-input>
        <q-input color="white" filled square class="col bg-red-7" v-model="text2" label="Dodaj inny produkt, którego NIE LUBISZ i którego nie ma poniżej">
      <template v-slot:append>
        <q-icon name="img:statics/icons/thumbsdown.png" color="black" />
      </template>
    </q-input>
   </div>
   <br>
    <p></p>
            <q-select  transition-show="flip-up" transition-hide="flip-down" multiple color="red" bg-color="green-3" filled v-model="model1" :options="options1" label="Warzywa">
        <template v-slot:prepend>
          <q-icon name="img:statics/icons/vegetables.png"/>
        </template>
      </q-select>

            <q-select transition-show="flip-up" transition-hide="flip-down" multiple color="red" bg-color="amber-3" filled v-model="model2" :options="options2" label="Owoce">
        <template v-slot:prepend>
          <q-icon name="img:statics/icons/fruits.png"/>
       </template> 
      </q-select>

            <q-select transition-show="flip-up" transition-hide="flip-down" multiple color="red" bg-color="yellow-1" filled v-model="model3" :options="options3" label="Nabiał">
        <template v-slot:prepend>
          <q-icon name="img:statics/icons/dairy.png"/>
       </template> 
      </q-select>

            <q-select transition-show="flip-up" transition-hide="flip-down" multiple color="red" bg-color="red-3" filled v-model="model4" :options="options4" label="Mięso">
        <template v-slot:prepend>
          <q-icon name="img:statics/icons/meat.png"/>
       </template> 
      </q-select>

      
            <q-select transition-show="flip-up" transition-hide="flip-down" multiple color="red" bg-color="blue-grey-3" filled v-model="model5" :options="options5" label="Ryby">
        <template v-slot:prepend>
          <q-icon name="img:statics/icons/fish.png"/>
       </template> 
      </q-select>

      
            <q-select transition-show="flip-up" transition-hide="flip-down" multiple color="red" bg-color="yellow-3" filled v-model="model6" :options="options6" label="Pieczywo">
        <template v-slot:prepend>
          <q-icon name="img:statics/icons/bread.png"/>
       </template> 
      </q-select>

      
            <q-select transition-show="flip-up" transition-hide="flip-down" multiple color="red" bg-color="brown-3" filled v-model="model7" :options="options7" label="Orzechy/Pestki">
        <template v-slot:prepend>
          <q-icon name="img:statics/icons/nuts.png"/>
       </template> 
      </q-select>

      
            <q-select transition-show="flip-up" transition-hide="flip-down" multiple color="red" bg-color="indigo-1" filled v-model="model8" :options="options8" label="Płatki">
        <template v-slot:prepend>
          <q-icon name="img:statics/icons/cereal.png"/>
       </template> 
      </q-select>

      
            <q-select transition-show="flip-up" transition-hide="flip-down" multiple color="red" bg-color="orange-3" filled v-model="model9" :options="options9" label="Zupy">
        <template v-slot:prepend>
          <q-icon name="img:statics/icons/soup.png"/>
       </template> 
      </q-select>

                  <q-select transition-show="flip-up" transition-hide="flip-down" multiple color="red" bg-color="brown-2" filled v-model="model10" :options="options10" label="Dodatki">
        <template v-slot:prepend>
          <q-icon name="img:statics/icons/groats.png"/>
       </template> 
      </q-select>

      
            <q-select transition-show="flip-up" transition-hide="flip-down" multiple color="red" bg-color="cyan-3" filled v-model="model11" :options="options11" label="Inne">
        <template v-slot:prepend>
          <q-icon name="img:statics/icons/otherfood.png"/>
       </template> 
      </q-select>

<br>

    <q-btn no-caps rounded :loading="loading4" color="green" @click="simulateProgress(4)" style="width: 220px"> Zapisz zmiany
      <template v-slot:loading>
        <q-spinner-hourglass class="on-left" /> Trwa zapisywanie...
      </template>
    </q-btn>

  </q-page>
</template>

<script>
export default {
  data() {
    return{
      text1: '',
      text2: '',
      loading4: false,
      progress: false,
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
 simulateProgress (number) {
      this[`loading${number}`] = true
      setTimeout(() => {
        this[`loading${number}`] = false
      }, 2000)
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
 .is-selected {
        text-decoration: line-through;
        }

</style>
