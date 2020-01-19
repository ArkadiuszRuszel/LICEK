<template>
  <div class="q-pa-md bg-grey-1">

  <p class="text-h5 text-bold">Zapisuj swoje postępy w dzienniku - motywuj się!</p>

   <q-table
      :data="data"
      :columns="columns"
      :rows-per-page-options="[]"
      row-key="id"
      :pagination.sync="pagination"
      no-data-label="Brak danych!"
      :loading="loading"
      >

      <template v-slot:body="props" append>
        <q-tr :props="props">
          <q-td key="day" :props="props">
            {{ props.row.name }}
            <q-popup-edit v-model="props.row.name" buttons color="black">
              <q-input v-model="props.row.name" dense autofocus counter color="green"/>
            </q-popup-edit>
          </q-td>
          <q-td key="date" :props="props">
            {{ props.row.date }}
            <q-popup-edit v-model.number="props.row.date" buttons color="black" persistent>
                <q-date color="green" v-model="props.row.date" mask="DD.MM.YYYY"/>
            </q-popup-edit>
          </q-td>
          <q-td key="weightloss" :props="props">
             <q-badge color="green"> {{ props.row.weightloss }} </q-badge>
            <q-popup-edit v-model.number="props.row.weightloss" buttons color="black">
              <q-input type="number" v-model.number="props.row.weightloss" dense autofocus color="green"/>
            </q-popup-edit>
          </q-td>
          <q-td key="weightgain" :props="props">
              <q-badge color="green"> {{ props.row.weightgain}} </q-badge>
            <q-popup-edit v-model.number="props.row.weightgain" buttons color="black" persistent>
              <q-input type="number" v-model.number="props.row.weightgain"  dense autofocus color="green"/>
            </q-popup-edit>
          </q-td>
          <q-td key="bodyweight" :props="props">
              <q-badge color="blue"> {{ props.row.bodyweight }} </q-badge>
            <q-popup-edit v-model.number="props.row.bodyweight" buttons color="black" persistent>
              <q-input type="number" v-model.number="props.row.bodyweight" dense autofocus color="green"/>
            </q-popup-edit>
          </q-td>
          <q-td key="tk" :props="props">
             <q-badge color="yellow"> {{ props.row.tk }} </q-badge>
            <q-popup-edit v-model.number="props.row.tk" buttons color="black">
              <q-input type="number" v-model.number="props.row.tk" dense autofocus color="green"/>
            </q-popup-edit>
          </q-td>
          <q-td key="mm" :props="props">
             <q-badge color="red"> {{ props.row.mm }} </q-badge>
            <q-popup-edit v-model="props.row.mm" buttons color="black">
              <q-input v-model="props.row.mm" dense autofocus color="green"/>
            </q-popup-edit>
          </q-td>
          <q-td key="waist" :props="props">
          <q-badge color="black"> {{ props.row.waist }} </q-badge>
            <q-popup-edit v-model="props.row.waist" buttons color="black">
              <q-input v-model="props.row.waist" dense autofocus color="green"/>
            </q-popup-edit>
          </q-td>
          <q-td key="bmi" :props="props">
         <q-badge color="orange"> {{ props.row.bmi }} </q-badge>
            <q-popup-edit v-model="props.row.bmi" buttons color="black">
              <q-input v-model="props.row.bmi" dense autofocus color="green"/>
            </q-popup-edit>
          </q-td>
        </q-tr>
      </template>
    </q-table>

    <br>
    <q-btn color="green" :disable="loading" label="Dodaj dzień" @click="addRow" />
    <q-btn color="red" :disable="loading" label="Usuń dzień" @click="deleteRow" />

  </div>
</template>

<script>
const columns = [
  { name: 'day', align: 'left', label: 'Dzień diety', field: 'day' },
  { name: 'date', align: 'left', label: 'Data', field: 'date' },
  { name: 'weightloss', align: 'left', label: 'Spadek masy ciała (kg)', field: 'weightloss' },
  { name: 'weightgain', align: 'left', label: 'Wzrost masy ciała (kg)', field: 'weightgain' },
  { name: 'bodyweight', align: 'left', label: 'Masa ciała (kg)', field: 'bodyweight' },
  { name: 'tk', align: 'left', label: '%TK - Tkanka tłuszczowa (%)', field: 'tk' },
  { name: 'mm', align: 'left', label: 'MM - Masa mięśni (kg)', field: 'mm' },
  { name: 'waist', align: 'left', label: 'Obwód pasa (cm)', field: 'waist' },
  { name: 'bmi', align: 'left', label: 'Wskaźnik BMI', field: 'bmi' },
]

const data = [
  {
    id: '',
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
      loading: false,
      columns,
            pagination: {
        rowsPerPage: 7
      },
    }
  },

  methods: {

    addRow () {
      this.loading = true
      setTimeout(() => {
        var row = {}
        const index = this.data.length + 1
        row = this.data.length
        if (this.data.length === 0) { this.length = 0 }
        //row.id = ++this.rowCount
        this.data.push(row)
        const addRow = { ...row }
        this.data = [ ...this.data.slice(0, index), addRow, ...this.data.slice(index) ]
        this.loading = false
      }, 500)
    },
      deleteRow () {
      this.loading = true
      setTimeout(() => {
        const index = Math.floor(Math.random() * this.data.length)
        this.data = [ ...this.data.slice(0, index), ...this.data.slice(index + 1) ]
        this.loading = false
      }, 500)
    }
  }
}
</script>

