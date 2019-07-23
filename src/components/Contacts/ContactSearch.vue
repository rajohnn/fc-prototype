<template>
  <q-card class="my-card">
    <q-card-section class="bg-grey-8 text-white">
      <div class="text-h6">All Contacts</div>
    </q-card-section>

    <q-card-section>
       <q-input bottom-slots v-model="text" label="Search Name" counter maxlength="50">
          <template v-slot:append>
            <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" ></q-icon>
            <q-icon name="search" ></q-icon>
          </template>
          <template v-slot:hint>
            To filter, type a name above
          </template>
        </q-input>
    </q-card-section>
    <q-separator ></q-separator>
    <q-card-section>
      <q-list class="scroll" style="height:310px" dense>
          <q-item v-for="(name, index) in filteredNames" :key="index" clickable v-ripple>
            <q-item-label>
              {{ name }}
            </q-item-label>
          </q-item>
      </q-list>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'ContactSearch',
  data () {
    return {
      text: '',
      names: [
        'Jacque Crawley',
        'Tenisha Marchan',
        'Ouida Lazzaro',
        'Tracie Houser',
        'Sage Hanson',
        'Nenita Reach',
        'Florene Cambridge',
        'Cortez Heldt',
        'Hipolito Bressler',
        'Merissa Hard',
        'Luanne Mehl',
        'Shellie Jeanbaptiste',
        'Vaughn Dickenson',
        'Krysta Baier',
        'Gracia Tseng',
        'Julianna Leavitt',
        'Raeann Lavin',
        'Georgeann Tenenbaum',
        'Ross Heacock',
        'Rolf Knopp',
        'Junko Hasse',
        'Consuela Odriscoll',
        'Anastasia Lusby',
        'Ma Yen',
        'Shanda Cavazos',
        'Jeanetta Helmick',
        'Carrie Eye',
        'Lavelle Paschke',
        'Romana Purgason',
        'Dania Bey',
        'Beatrice Diaz',
        'Winford Slape',
        'Josephine Hennis',
        'Arlyne Cory',
        'Felipe Netherton',
        'Deadra Fregoso',
        'Marita Gammel',
        'Debbie Redding',
        'Sol Grauer',
        'Darin Neff',
        'Luana Coats',
        'Daphne Pearl',
        'Beulah Riles',
        'Shirlee Mcwilliam',
        'Vicki Norris',
        'Leonie Sepe',
        'Jeromy Gunnell',
        'Nicolle Atkin',
        'Katerine Carra',
        'Corrie Mecham',
        'Sanj Lalchandani',
        'Richard Johnn',
        'Larry Carosi',
        'John Beckwith',
        'Fred Steffen'
      ]
    }
  },
  computed: {
    filteredNames: function () {
      const results = this.names.filter(name => name.toLowerCase().includes(this.text.toLowerCase()))
      return results.sort()
    }
  }
}
</script>
