<template>
  <div class="q-pa-md">

          <q-input dense debounce="300" filled v-model="filter" color="green" label="Tutaj możesz znaleźć wybrany produkt">
            <q-icon name="search" />
          </q-input>

   <q-table
    :data="data"
    :columns="columns"
    row-key="name"
    :pagination.sync="pagination"
    :filter="filter"
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
            {{ props.row.calories }}
            <q-popup-edit v-model.number="props.row.calories">
              <q-input type="number" v-model.number="props.row.calories" dense autofocus />
            </q-popup-edit>
          </q-td>

          <q-td key="fat" :props="props">
            <div class="text-pre-wrap">{{ props.row.fat }}</div>
            <q-popup-edit v-model.number="props.row.fat">
              <q-input type="number" v-model.number="props.row.fat" dense autofocus />
            </q-popup-edit>
          </q-td>
        </q-tr>           
      </template>
    </q-table>
  </div>
</template>

<script>
const columns = [
  { name: 'desc', style: 'width: 150px', align: 'left', label: 'Rodzaj produktu (100g)', field: 'name' },
  { name: 'comment', style: 'width: 200px', align: 'left', label: 'Opis produktu', field: 'comment' },
  { name: 'calories', align: 'center', label: 'Kalorie (w 100g/100ml)', field: 'calories' },
  { name: 'fat', align: 'center', label: 'Tłuszcz (g)', field: 'fat' }
]

const data = [
  {
    name: 'Śledź',
    comment: `to ryba, która ma liczne właściwości i wartości odżywcze`,
    calories: 160,
    fat: 9.04
  },
  {
    name: 'Łosoś',
    comment: `jest bardzo znaną i lubianą przez konsumentów rybą`,
    calories: 208,
    fat: 13
  },
  {
    name: 'Fasola',
    comment: `roślina strączkowa`,
    calories: 347,
    fat: 1.2
  },
  {
    name: 'Groch zwyczajny',
    comment: `roślina strączkowa`,
    calories: 81,
    fat: 0.4
  },
  {
    name: 'Płatki kukurydziane',
    comment: `popularny posiłek śniadaniowy, głównie ze względu na krótki czas przygotowywania oraz pożywność`,
    calories: 357,
    fat: 0.4
  },
  {
    name: 'Płatki owsiane',
    comment: `owies i jego przetwory kompleksowo pokrywają zapotrzebowanie na składniki odżywcze organizmu`,
    calories: 389,
    fat: 7
  },
  {
    name: 'Chleb żytni',
    comment: `jest zrobiony na mące żytniej`,
    calories: 259,
    fat: 3.3
  },
  {
    name: 'Chleb biały',
    comment: `jest zrobiony na mące pszennej`,
    calories: 264,
    fat: 3.2
  },
  {
    name: 'Pączek',
    comment: `pączki najbardziej rozchwytywane są w tłusty czwartek`,
    calories: 426,
    fat: 22.9
  },
  {
    name: 'Drożdżówka z serem',
    comment: `domowa drożdżówka z pewnością będzie miała więcej składników odżywczych i mniej prostych węglowodanów niż ta kupiona w sklepie`,
    calories: 292,
    fat: 6.7
  },
  {
    name: 'Olej lniany',
    comment: `poprzez tłoczenie na zimno nasion lnu zwyczajnego otrzymywany jest olej roślinny o żółtawym zabarwieniu i intensywnym, cierpkim zapachu`,
    calories: 884,
    fat: 100
  },
    {
    name: 'Bułka razowa',
    comment: `to bułki pszenno-żytnie, produkowane są na naturalnych rozczynach drożdżowych z mąki pszennej, w tym z mąki pszennej graham`,
    calories: 249,
    fat: 4.9
  },
    {
    name: 'Bułka kajzerka',
    comment: `mała, okrągła bułka z charakterystycznymi pięcioma promienistymi bruzdami na wierzchu`,
    calories: 254,
    fat: 3.3
  },
    {
    name: 'Napój bezalkoholowy',
    comment: `rodzaj napoju, który nie zawiera znaczących ilości alkoholu`,
    calories: 40,
    fat: 0
  },
    {
    name: 'Coca-Cola',
    comment: `mała, okrągła bułka z charakterystycznymi pięcioma promienistymi bruzdami na wierzchu`,
    calories: 42,
    fat: 0
  },
    {
    name: 'Pizza',
    comment: `potrawa kuchni włoskiej, obecnie szeroko rozpowszechniona na całym świecie`,
    calories: 266,
    fat: 10
  },
    {
    name: 'Hamburger',
    comment: ` typowe danie typu fast food, kanapka z kotletem najczęściej z mięsa wołowego`,
    calories: 294,
    fat: 14
  }

]

export default {
  data () {
    return {
      data,
      filter: '',
      columns,
      pagination: {
        rowsPerPage: 100
      },
    }
  }
}
</script>

<style lang="scss">
  .background
  </style>
