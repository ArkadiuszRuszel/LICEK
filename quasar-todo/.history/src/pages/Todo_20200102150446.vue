<template>
  <q-page class="bg-grey-3 column">
    <div class="row q-pa-sm bg-primary">
           <q-input 
           v-model="newProduct" 
           label="Dodaj produkt" 
           dense bg-color="white" 
           class="col" 
           square
           @keyup.enter="addproduct"
           >
        <template v-slot:append>
          <q-btn round dense flat icon="add" @click="addProduct"/>
        </template>
      </q-input>
    </div>
    <q-list class="bg-white" separator bordered>
      <q-item 
      v-ripple 
      v-for="(product, index) in products" 
      :key="product.title" 
      @click="product.done = !productdone" 
      clickable
      :class="{'done bg-blue-1': product.done}"
      >
        <q-item-section avatar>
          <q-checkbox v-model="product.done" color="primary" class="no-pointer-events"/>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ product.title }}</q-item-label>
        </q-item-section>
        <q-item-section v-if="product.done" side>
          <q-btn flat round color="primary" icon="delete" @click.stop="deleteTask(index)"/>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  data() {
    return{
      newTask: "",
      tasks: [
      {
        title: "Zrobić projekt z Androida",
        done: false
      },
         {
        title: "Wynieść śmieci",
        done: false
      },
         {
        title: "Przescrollować otomoto",
        done: false
      },
      ]
    }
  },
  methods: {
    deleteTask (index) {
      this.$q.dialog({
        title: 'Uwaga',
        message: 'Czy na pewno chcesz usunąć to zadanie?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.tasks.splice(index,1)
        this.$q.notify('Zadanie zostało usunięte')
      })
    },
    addTask(){
      console.log("dodawanie zadania")
    }
  }
}
</script>
<style lang="scss">
.done {
  .q-item__label {
    text-decoration: line-through;
    color: #bbb;
  }
}
</style>
