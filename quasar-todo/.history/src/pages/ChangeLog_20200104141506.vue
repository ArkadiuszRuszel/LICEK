<template>
  <div class="q-pa-md">
   <q-table
      :data="data"
      :columns="columns"
      title="Dbaj o siebie prowadząc swój dziennik!"
      :rows-per-page-options="[]"
      row-key="name"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="desc" :props="props">
            {{ props.row.name }}
            <q-popup-edit v-model="props.row.name" buttons>
              <q-input v-model="props.row.name" dense autofocus counter />
            </q-popup-edit>
          </q-td>
          <q-td key="calories" :props="props">
            {{ props.row.calories }}
            <q-popup-edit v-model.number="props.row.calories" buttons>
              <q-input type="number" v-model.number="props.row.calories" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="fat" :props="props">
            <div class="text-pre-wrap">{{ props.row.fat }}</div>
            <q-popup-edit v-model.number="props.row.fat" buttons>
              <q-input type="number" v-model.number="props.row.fat" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="carbs" :props="props">
            {{ props.row.carbs }}
            <q-popup-edit v-model.number="props.row.carbs" buttons persistent>
              <q-input type="number" v-model.number="props.row.carbs"  dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="protein" :props="props">
            {{ props.row.protein }}
            <q-popup-edit v-model.number="props.row.protein" buttons label-set="Save" label-cancel="Close">
              <q-input type="number" v-model.number="props.row.protein" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="sodium" :props="props">
            {{ props.row.sodium }}
            <q-popup-edit v-model.number="props.row.sodium" buttons>
              <q-input type="number" v-model.number="props.row.sodium" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="calcium" :props="props">
            {{ props.row.calcium }}
            <q-popup-edit v-model="props.row.calcium" buttons>
              <q-input v-model="props.row.calcium" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="iron" :props="props">
            {{ props.row.iron }}
            <q-popup-edit v-model="props.row.iron" buttons>
              <q-input v-model="props.row.iron" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="iron" :props="props">
            {{ props.row.iron }}
            <q-popup-edit v-model="props.row.iron" buttons>
              <q-input v-model="props.row.iron" dense autofocus />
            </q-popup-edit>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>
<script>
const columns = [
  { name: 'desc', align: 'left', label: 'Dzień diety', field: 'name' },
  { name: 'calories', align: 'center', label: 'Data', field: 'calories' },
  { name: 'fat', label: 'Spadek masy', field: 'fat' },
  { name: 'carbs', label: 'Wzrost masy', field: 'carbs' },
  { name: 'protein', label: 'Masa ciała', field: 'protein' },
  { name: 'sodium', label: '%TK - Procent Tkanki Tłuszczowej', field: 'sodium' },
  { name: 'calcium', label: 'MM - Masa Mięśni (kg)', field: 'calcium' },
  { name: 'iron', label: 'Obw', field: 'iron' },
  { name: 'iron', label: 'Iron (%)', field: 'iron' },
]

const data = [
  {
    name: '1',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: '14%',
    iron: '1%'
  },
]

export default {
  data () {
    return {
      data,
      columns
    }
  }
}
</script>