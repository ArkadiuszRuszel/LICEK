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
          <q-td key="day" :props="props">
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
          <q-td key="bmi" :props="props">
            {{ props.row.bmi }}
            <q-popup-edit v-model="props.row.bmi" buttons>
              <q-input v-model="props.row.bmi" dense autofocus />
            </q-popup-edit>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>
<script>
const columns = [
  { name: 'day', align: 'left', label: 'Dzień diety', field: 'day' },
  { name: 'data', align: 'left', label: 'Data', field: 'data' },
  { name: 'weightloss', align: 'left', label: 'Spadek masy', field: 'weightloss' },
  { name: 'weightgain', align: 'left', label: 'Wzrost masy', field: 'weightgain' },
  { name: 'bodyweight', align: 'left', label: 'Masa ciała', field: 'bodyweight' },
  { name: 'tk', align: 'left', label: '%TK - Procent Tkanki Tłuszczowej', field: 'tk' },
  { name: 'mm', align: 'left', label: 'MM - Masa Mięśni (kg)', field: 'mm' },
  { name: 'waist', align: 'left', label: 'Obwód pasa (cm)', field: 'waist' },
  { name: 'bmi', align: 'left', label: 'Wskaźnik BMI', field: 'bmi' },
]

const data = [
  {
    name: '1',
    data:,
    weightloss: 6.0,
    weightgain: 24,
    tk: 4.0,
    mm: 87,
    waist: '14%',
    bmi: '1'
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