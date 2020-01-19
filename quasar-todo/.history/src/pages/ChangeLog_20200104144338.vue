<template>
  <div class="q-pa-md">
   <q-table
      :data="data"
      :columns="columns"
      title="Dbaj o siebie prowadząc swój dziennik!"
      :rows-per-page-options="[]"
      row-key="name"
      :pagination.sync="pagination"

    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="day" :props="props">
            {{ props.row.name }}
            <q-popup-edit v-model="props.row.name" buttons>
              <q-input v-model="props.row.name" dense autofocus counter />
            </q-popup-edit>
          </q-td>
          <q-td key="date" :props="props">
            {{ props.row.data }}
            <q-popup-edit v-model.number="props.row.date" buttons>
              <q-input type="date" v-model.number="props.row.date" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="weightloss" :props="props">
             <q-badge color="orange"> {{ props.row.weightloss }} </q-badge>
            <q-popup-edit v-model.number="props.row.weightloss" buttons>
              <q-input type="number" v-model.number="props.row.weightloss" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="weightgain" :props="props">
              <q-badge color="green">
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
  { name: 'weightloss', align: 'left', label: 'Spadek masy ciała', field: 'weightloss' },
  { name: 'weightgain', align: 'left', label: 'Wzrost masy ciała', field: 'weightgain' },
  { name: 'bodyweight', align: 'left', label: 'Masa ciała', field: 'bodyweight' },
  { name: 'tk', align: 'left', label: '%TK - Tkanka Tłuszczowa (%)', field: 'tk' },
  { name: 'mm', align: 'left', label: 'MM - Masa Mięśni (kg)', field: 'mm' },
  { name: 'waist', align: 'left', label: 'Obwód pasa (cm)', field: 'waist' },
  { name: 'bmi', align: 'left', label: 'Wskaźnik BMI', field: 'bmi' },
]

const data = [
  {
    day: '',
    date: '',
    weightloss: '',
    weightgain: '',
    tk: '',
    mm: '',
    waist: '',
    bmi: ''
  },
]

export default {
  data () {
    return {
      data,
      columns,
            pagination: {
        rowsPerPage: 7
      },
    }
  }
}
</script>