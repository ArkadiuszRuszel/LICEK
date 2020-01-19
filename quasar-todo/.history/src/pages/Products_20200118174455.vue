<template>
  <div class="q-pa-md bg-grey-1">

          <q-input dense debounce="300" filled v-model="filter" color="green" label="Tutaj możesz znaleźć wybrany produkt">
            <q-icon name="search" />
          </q-input>

   <q-table
    :data="data"
    :columns="columns"
    row-key="name"
    :pagination.sync="pagination"
    :filter="filter"
    class="column-table"

    >

      <template v-slot:body="props">
        <q-tr :props="props">   

          <q-td key="desc" :props="props">     
           {{ props.row.name }}
            <q-popup-edit v-model="props.row.name">
              <q-input v-model="props.row.name" dense autofocus counter persistent/>
            </q-popup-edit>     
          </q-td>

          <q-td key="comment" :props="props">
            {{ props.row.comment }}
            <q-popup-edit v-model="props.row.comment">
              <q-input v-model.number="props.row.comment" dense autofocus />
            </q-popup-edit>
          </q-td>

          <q-td key="calories" :props="props">
            <q-badge color="orange"> {{ props.row.calories }} </q-badge>
            <q-popup-edit v-model.number="props.row.calories">
              <q-input type="number" v-model.number="props.row.calories" dense autofocus />
            </q-popup-edit>
          </q-td>

          <q-td key="carbohydrates" :props="props">
            <q-badge color="red"> {{ props.row.carbohydrates }} </q-badge>
            <q-popup-edit v-model.number="props.row.carbohydrates">
              <q-input type="number" v-model.number="props.row.carbohydrates" dense autofocus />
            </q-popup-edit>
          </q-td>

          <q-td key="roughage" :props="props">
            <q-badge color="green"> {{ props.row.roughage }} </q-badge>
            <q-popup-edit v-model.number="props.row.roughage">
              <q-input type="number" v-model.number="props.row.roughage" dense autofocus />
            </q-popup-edit>
          </q-td>

          <q-td key="fat" :props="props">
            <q-badge color="yellow"> {{ props.row.fat }} </q-badge>
            <q-popup-edit v-model.number="props.row.fat">
              <q-input type="number" v-model.number="props.row.fat" dense autofocus />
            </q-popup-edit>
          </q-td>

          <q-td key="protein" :props="props">
          <q-badge color="blue"> {{ props.row.protein }} </q-badge>
            <q-popup-edit v-model.number="props.row.protein">
              <q-input type="number" v-model.number="props.row.protein" dense autofocus />
            </q-popup-edit>
          </q-td>

        </q-tr>           
      </template>
    </q-table>
  </div>
</template>

<style lang="sass">
.column-table

  td:first-child
    font-weight: bold
  td:first-child
    background-color: $green-6 !important
  td:first-child
    color: #ffffff

</style>


<script>
const columns = [
  { name: 'desc', style: 'width: 150px', align: 'left', label: 'Rodzaj produktu (100g)', field: 'name' },
  { name: 'comment', style: 'width: 200px', align: 'left', label: 'Opis produktu', field: 'comment' },
  { name: 'calories', align: 'center', label: 'Kalorie (w g/ml)', field: 'calories', sortable: true },
  { name: 'carbohydrates', align: 'center', label: 'Węglowodany (g)', field: 'carbohydrates', sortable: true },
  { name: 'roughage', align: 'center', label: 'Błonnik (g)', field: 'roughage', sortable: true },
  { name: 'fat', align: 'center', label: 'Tłuszcz (g)', field: 'fat', sortable: true },
  { name: 'protein', align: 'center', label: 'Białko (g)', field: 'protein', sortable: true }
]

const data = [
  {
    name: 'Śledź',
    comment: `ryba, która ma liczne właściwości i wartości odżywcze`,
    calories: 158,
    carbohydrates: null,
    roughage: null,
    fat: 9.04,
    protein: 17.96

  },
  {
    name: 'Łosoś',
    comment: `jest bardzo znaną i lubianą przez konsumentów rybą`,
    calories: 208,
    carbohydrates: null,
    roughage: null,
    fat: 13.42,
    protein: 20.42

  },
  {
    name: 'Fasola',
    comment: `roślina strączkowa`,
    calories: 341,
    carbohydrates: 58.59,
    roughage: 25,
    fat: 1.53,
    protein: 26.2
  },
  {
    name: 'Groch zwyczajny',
    comment: `roślina strączkowa`,
    calories: 81,
    carbohydrates: 14.45,
    roughage: 5.1,
    fat: 0.4,
    protein: 5.42
  },
  {
    name: 'Płatki kukurydziane',
    comment: `popularny posiłek śniadaniowy, głównie ze względu na krótki czas przygotowywania oraz pożywność`,
    calories: 363,
    carbohydrates: 83.6,
    roughage: 6.6,
    fat: 2.5,
    protein: 6.9
  },
  {
    name: 'Płatki owsiane',
    comment: `owies i jego przetwory kompleksowo pokrywają zapotrzebowanie na składniki odżywcze organizmu`,
    calories: 379,
    carbohydrates: 67.7,
    roughage: 10.10,
    fat: 6.52,
    protein: 13.15
  },
  {
    name: 'Chleb żytni',
    comment: `zrobiony na mące żytniej`,
    calories: 259,
    carbohydrates: 48,
    roughage: 6,
    fat: 3.3,
    protein: 9
  },
  {
    name: 'Chleb biały',
    comment: `zrobiony na mące pszennej`,
    calories: 264,
    carbohydrates: 49,
    roughage: 2.7,
    fat: 3.2,
    protein: 9
  },
  {
    name: 'Pączek',
    comment: `pączki najbardziej rozchwytywane są w tłusty czwartek`,
    calories: 426,
    carbohydrates: 65.5,
    roughage: 1.6,
    fat: 15.3,
    protein: 7.2
  },
  {
    name: 'Drożdżówka z serem',
    comment: `domowa drożdżówka z pewnością będzie miała więcej składników odżywczych i mniej prostych węglowodanów niż ta kupiona w sklepie`,
    calories: 298,
    carbohydrates: 44,
    roughage: 1.2,
    fat: 9.3,
    protein: 9
  },
  {
    name: 'Olej lniany',
    comment: `poprzez tłoczenie na zimno nasion lnu zwyczajnego otrzymywany jest olej roślinny o żółtawym zabarwieniu i intensywnym, cierpkim zapachu`,
    calories: 884,
    carbohydrates: null,
    roughage: null,
    fat: 100,
    protein: 0.1
  },
  {
    name: 'Olej rzepakowy',
    comment: `jeden z najzdrowszych na świecie`,
    calories: 884,
    carbohydrates: null,
    roughage: null,
    fat: 100,
    protein: null
  },
    {
    name: 'Bułka razowa',
    comment: `to bułki pszenno-żytnie, produkowane są na naturalnych rozczynach drożdżowych z mąki pszennej, w tym z mąki pszennej graham`,
    calories: 249,
    carbohydrates: 39,
    roughage: 7.9,
    fat: 4.9,
    protein: 8.6
  },
    {
    name: 'Bułka kajzerka',
    comment: `mała, okrągła bułka z charakterystycznymi pięcioma promienistymi bruzdami na wierzchu`,
    calories: 254,
    carbohydrates: 54,
    roughage: 2,
    fat: 3.3,
    protein: 8
  },
    {
    name: 'Napój bezalkoholowy',
    comment: `rodzaj napoju, który nie zawiera znaczących ilości alkoholu`,
    calories: 40,
    carbohydrates: 11,
    roughage: null,
    fat: null,
    protein: null
  },
    {
    name: 'Coca-Cola',
    comment: `marka napoju gazowanego przedsiębiorstwa The Coca-Cola Company`,
    calories: 42,
    carbohydrates: 10.6,
    roughage: null,
    fat: null,
    protein: null
  },
    {
    name: 'Pizza',
    comment: `potrawa kuchni włoskiej, obecnie szeroko rozpowszechniona na całym świecie`,
    calories: 266,
    carbohydrates: 33,
    roughage: 2.3,
    fat: 10,
    protein: 17.96
  },
    {
    name: 'Hamburger',
    comment: `typowe danie typu fast food, kanapka z kotletem najczęściej z mięsa wołowego`,
    calories: 294,
    carbohydrates: 24,
    roughage: 0.9,
    fat: 14,
    protein: 17
  },
    {
    name: 'Ryż',
    comment: `rodzaj zbóż z rodziny wiechlinowatych obejmujący 25 gatunków. Występuje w strefie klimatów gorących i ciepłych na całym świecie.`,
    calories: 130,
    carbohydrates: 75,
    roughage: 6,
    fat: 1.1,
    protein: 15
  },
    {
    name: 'Skrzydełko kurczaka',
    comment: `mięso z kurczaka zawiera stosunkowo dużo białka, przy niskiej zawartości tłuszczu i cholesterolu`,
    calories: 186,
    carbohydrates: null,
    roughage: null,
    fat: 93,
    protein: 18.6
  },
    {
    name: 'Kurczak tuszka',
    comment: `mięso z kurczaka zawiera stosunkowo dużo białka, przy niskiej zawartości tłuszczu i cholesterolu`,
    calories: 158,
    carbohydrates: null,
    roughage: null,
    fat: 14,
    protein: 17
  },
    {
    name: 'Pierś kurczaka bez skóry',
    comment: `mięso z kurczaka zawiera stosunkowo dużo białka, przy niskiej zawartości tłuszczu i cholesterolu`,
    calories: 99,
    carbohydrates: null,
    roughage: null,
    fat: 1.3,
    protein: 21.5
  },   
    {
    name: 'Pierś kurczaka ze skórą',
    comment: `mięso z kurczaka zawiera stosunkowo dużo białka, przy niskiej zawartości tłuszczu i cholesterolu`,
    calories: 157,
    carbohydrates: null,
    roughage: null,
    fat: 9.2,
    protein: 20.8
  },   
    {
    name: 'Udko kurczaka bez skóry',
    comment: `mięso z kurczaka zawiera stosunkowo dużo białka, przy niskiej zawartości tłuszczu i cholesterolu`,
    calories: 125,
    carbohydrates: null,
    roughage: null,
    fat: 6,
    protein: 17.8
  },
    {
    name: 'Udko kurczaka ze skórą',
    comment: `mięso z kurczaka zawiera stosunkowo dużo białka, przy niskiej zawartości tłuszczu i cholesterolu`,
    calories: 158,
    carbohydrates: null,
    roughage: null,
    fat: 1.3,
    protein: 10.02
  },
    {
    name: 'Piwo',
    comment: `napój alkoholowy otrzymywany w wyniku fermentacji alkoholowej brzeczki piwnej`,
    calories: 43,
    carbohydrates: 3.6,
    roughage: null,
    fat: null,
    protein: 0.7
  },
    {
    name: 'Banan',
    comment: `jest jadalnym owocem - botanicznie jagodą`,
    calories: 88,
    carbohydrates: 23,
    roughage: 2.6,
    fat: 0.3,
    protein: 1.1
  },
    {
    name: 'Truskawki',
    comment: `roślina mieszaniec dwóch gatunków poziomki z rodziny różowatych`,
    calories: 32,
    carbohydrates: 8,
    roughage: 2,
    fat: 0.3,
    protein: 0.7
  },
    {
    name: 'Pomidor',
    comment: `to bogate pod względem wartości odżywczych i niskokaloryczne warzywa z rodziny psiankowatych`,
    calories: 18,
    carbohydrates: 3.89,
    roughage: 1.2,
    fat: 0.2,
    protein: 0.88
  },
    {
    name: 'Ogórek',
    comment: `to warzywo, którego właściwości i wartości odżywcze powinno się docenić zwłaszcza w upały`,
    calories: 12,
    carbohydrates: 2.16,
    roughage: 0.7,
    fat: 0.16,
    protein: 0.59
  },
    {
    name: 'Cukinia/Kabaczek',
    comment: `to bogate pod względem wartości odżywczych i niskokaloryczne warzywa z rodziny psiankowatych`,
    calories: 16,
    carbohydrates: 3.89,
    roughage: 1,
    fat: 0.3,
    protein: 1.2
  },
    {
    name: 'Pomidor',
    comment: `to bogate pod względem wartości odżywczych i niskokaloryczne warzywa z rodziny psiankowatych`,
    calories: 18,
    carbohydrates: 3.89,
    roughage: 1.2,
    fat: 0.2,
    protein: 0.88
  },
    {
    name: 'Pomidor',
    comment: `to bogate pod względem wartości odżywczych i niskokaloryczne warzywa z rodziny psiankowatych`,
    calories: 18,
    carbohydrates: 3.89,
    roughage: 1.2,
    fat: 0.2,
    protein: 0.88
  },
  
  

]

export default {
  data () {
    return {
      data,
      filter: '',
      columns,
      sortable: true,
      pagination: {
        rowsPerPage: 100
      },
    }
  }
}
</script>