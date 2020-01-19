<template>
    <div id="login">
        <h4>Zaloguj się poniżej do swojego konta.</h4>
        <input type="text" name="username" v-model="input.username" placeholder="Nazwa użytkownika" />
        <input type="password" name="password" v-model="input.password" placeholder="Hasło" />
        <button type="button" v-on:click="login()">Login</button>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "secure" });
                    } else {
                        console.log("Nazwa użytkownika lub/i hasło są niepoprawne.");
                    }
                } else {
                    console.log("Nazwa użytkownika i hasło muszą być podane");
                }
            }
        }
    }
</script>

<style scoped>
    #login {
        width: auto;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        padding: 20px;
    }
</style>

<template>
  <div class="q-pa-md">
   <q-table
      :data="data"
      :columns="columns"
      title="QDataTable with QPopupEdit"
      :rows-per-page-options="[]"
      row-key="name"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="desc" :props="props">
            {{ props.row.name }}
            <q-popup-edit v-model="props.row.name" title="Edit the Name">
              <q-input v-model="props.row.name" dense autofocus counter />
            </q-popup-edit>
          </q-td>
          <q-td key="calories" :props="props">
            {{ props.row.calories }}
            <q-popup-edit v-model.number="props.row.calories">
              <q-input type="number" v-model.number="props.row.calories" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="fat" :props="props">
            {{ props.row.fat }}
            <q-popup-edit v-model.number="props.row.fat">
              <q-input type="number" v-model.number="props.row.fat" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="carbs" :props="props">
            {{ props.row.carbs }}
            <q-popup-edit v-model.number="props.row.carbs" disable>
              <q-input type="number" v-model.number="props.row.carbs" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="protein" :props="props">
            {{ props.row.protein }}
            <q-popup-edit v-model.number="props.row.protein">
              <q-input type="number" v-model.number="props.row.protein" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="sodium" :props="props">
            {{ props.row.sodium }}
            <q-popup-edit v-model.number="props.row.sodium">
              <q-input type="number" v-model.number="props.row.sodium" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="calcium" :props="props">
            {{ props.row.calcium }}
            <q-popup-edit v-model="props.row.calcium">
              <template v-slot:title>
                <div class="text-italic text-primary">
                  My Custom Title
                </div>
              </template>
              <q-input v-model="props.row.calcium" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="iron" :props="props">
            {{ props.row.iron }}
            <q-popup-edit v-model="props.row.iron">
              <q-input v-model="props.row.iron" dense autofocus />
            </q-popup-edit>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>