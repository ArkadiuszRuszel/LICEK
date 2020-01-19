<template>
  <div class="q-pa-md">

          <q-input dense debounce="300" filled v-model="filter" placeholder="Znajdź produkt" color="green" label="Tutaj możesz znaleźć wybrany produkt">
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
            <q-popup-edit
              buttons
              v-model="props.row.comment"
            >
              <q-input
                type="textarea"
                v-model="props.row.comment"
                autofocus
                counter
                @keyup.enter.stop
              />
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
  { name: 'calories', align: 'center', label: 'Kalorie (w 100g)', field: 'calories' },
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
    comment: `jest bardzo znaną i lubianą przez konsumentów rybą.`,
    calories: 208,
    fat: 13
  },
  {
    name: 'Eclair',
    comment: `It's not cold and also great!
Have a taste!`,
    calories: 262,
    fat: 16.0
  },
  {
    name: 'Cupcake',
    comment: `It could be warm and it's great!
 Have a taste!`,
    calories: 305,
    fat: 3.7
  },
  {
    name: 'Gingerbread',
    comment: `It's spicy and great!
Have a taste!`,
    calories: 356,
    fat: 16.0
  },
  {
    name: 'Jelly bean',
    comment: `It's neither cold or warm, but great!
Have one or two or several, but not too many!`,
    calories: 375,
    fat: 0.0
  },
  {
    name: 'Lollipop',
    comment: `It's sticky and normally sweet!
Have a lick!`,
    calories: 392,
    fat: 0.2
  },
  {
    name: 'Honeycomb',
    comment: `It's special and sweet!
Have a taste!`,
    calories: 408,
    fat: 3.2
  },
  {
    name: 'Donut',
    comment: `It's an American classic glazed!
Have one with coffee!`,
    calories: 452,
    fat: 25.0
  },
  {
    name: 'KitKat',
    comment: `It's good with a break! Have a section to perfection!`,
    calories: 518,
    fat: 26.0
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