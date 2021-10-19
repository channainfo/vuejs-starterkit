<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <item-list :items='items' />
    <hello-world msg="Welcome to Your Vue.js + TypeScript App"/>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import ItemList from '@/components/items/ItemList.component.vue'
import { ItemInterface } from '@/models/items/Item.interface'

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
    ItemList
  },

  setup(){
    const items: ItemInterface[] = [
      {id: 1, name: 'Ruby', selected: false},
      {id: 2, name: 'Php', selected: false},
      {id: 3, name: 'Python', selected: false},
      {id: 4, name: 'C', selected: false},
    ]

    return {items};
  }
});
</script>
