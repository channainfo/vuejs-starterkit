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
import ItemList from '@/components/ItemList.component.vue'

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
    ItemList
  },

  setup(){
    const items: any[] = [
      {id: 1, name: 'Ruby'},
      {id: 2, name: 'Php'},
      {id: 3, name: 'Python'},
      {id: 4, name: 'C'},
    ]

    return {items};
  }
});
</script>
