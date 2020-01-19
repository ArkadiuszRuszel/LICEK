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
          <q-td key="data" :props="props">
            {{ props.row.data }}
            <q-popup-edit v-model.number="props.row.data" buttons>
              <q-input type="date" v-model.number="props.row.data" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="weightloss" :props="props">
            {{ props.row.weightloss }}
            <q-popup-edit v-model.number="props.row.weightloss" buttons>
              <q-input type="number" v-model.number="props.row.weightloss" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="weightgain" :props="props">
            {{ props.row.weightgain}}
            <q-popup-edit v-model.number="props.row.weightgain" buttons persistent>
              <q-input type="number" v-model.number="props.row.weightgain"  dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="bodyweight" :props="props">
            {{ props.row.bodyweight }}
            <q-popup-edit v-model.number="props.row.bodyweight" buttons persistent>
              <q-input type="number" v-model.number="props.row.bodyweight" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="tk" :props="props">
            {{ props.row.tk }}
            <q-popup-edit v-model.number="props.row.tk" buttons>
              <q-input type="number" v-model.number="props.row.tk" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="mm" :props="props">
            {{ props.row.mm }}
            <q-popup-edit v-model="props.row.mm" buttons>
              <q-input v-model="props.row.mm" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="waist" :props="props">
            {{ props.row.waist }}
            <q-popup-edit v-model="props.row.waist" buttons>
              <q-input v-model="props.row.waist" dense autofocus />
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
  { name: 'date', align: 'left', label: 'Data', field: 'date' },
  { name: 'weightloss', align: 'left', label: 'Spadek masy', field: 'weightloss' },
  { name: 'weightgain', align: 'left', label: 'Wzrost masy', field: 'weightgain' },
  { name: 'bodyweight', align: 'left', label: 'Masa ciała', field: 'bodyweight' },
  { name: 'tk', align: 'left', label: '%TK - Tkanka Tłuszczowa (%)', field: 'tk' },
  { name: 'mm', align: 'left', label: 'MM - Masa Mięśni (kg)', field: 'mm' },
  { name: 'waist', align: 'left', label: 'Obwód pasa (cm)', field: 'waist' },
  { name: 'bmi', align: 'left', label: 'Wskaźnik BMI', field: 'bmi' },
]

const data = [
  {
    name: '1',
    date: '',
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