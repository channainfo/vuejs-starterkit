<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <item-list :items="items" :loading="loading" @selectItem="onSelectItem" />
    <hello-world msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import ItemList from "@/components/items/ItemList.component.vue";
import store from "@/store";
import { ItemInterface } from "@/models/items/Item.interface";


export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
    ItemList,
  },

  setup() {
    const items = computed(() => {
      return store.state.items;
    });

    const loading = computed(() => {
      return store.state.loading;
    });

    const onSelectItem = (item: ItemInterface) => {
      store.dispatch('selectItem', {
        id: item.id,
        selected: item.selected
      })
    }

    onMounted(() => {
      store.dispatch("loadItems");
    });

    return {
      items,
      loading,
      onSelectItem
    };
  },
});
</script>
