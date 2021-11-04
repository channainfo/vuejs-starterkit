<template>
  <div>
    <h3>Items - loading {{ loading }}</h3>
    <loader v-show="loading" />
    <ul class="prog-lang">
      <item-component
        v-for="item in items"
        :key="item.id"
        :item="item"
        @select="onItemSelect"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ItemInterface } from "@/models/items/Item.interface";
import ItemComponent from "./children/Item.component.vue";
import Loader from "@/components/Loader.component.vue"

export default defineComponent({
  components: { ItemComponent, Loader },
  props: {
    items: {
      type: Array as PropType<ItemInterface[]>,
    },
    loading: {
      type: Boolean,
    },
  },

  setup(props, { emit }) {
    const onItemSelect = (item: ItemInterface) => {
      item.selected = !item.selected;
      console.log(`Item ${item.name} switches ${item.selected}`);

      emit('selectItem', item)
    };

    return { onItemSelect };
  },
});
</script>

<style lang='scss'>
.prog-lang {
  list-style-type: none;
  li {
    display: inline-block;
    padding: 0.7em 1.2em;

    &.selected {
      font-weight: bold;
      font-size: 110%;
    }
  }
}
</style>