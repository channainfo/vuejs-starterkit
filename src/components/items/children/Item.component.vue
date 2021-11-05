<template>
  <li :class="css" @click="onClick">
    <div class="selected-indicator">⋆</div>
    <div class="name">{{ item.name }}</div>
  </li>
</template>

<script lang="ts">
import { ItemInterface } from "@/models/items/Item.interface";
import { defineComponent, computed, PropType } from "vue";

export default defineComponent({
  props: {
    item: {
      type: Object as PropType<ItemInterface>,
    },
  },
  setup(props, { emit }) {
    const css = computed(() => {
      let css = "item";
      if (props.item?.selected) {
        css += " selected";
      }
      return css.trim();
    });

    const onClick = () => {
      emit("select", props.item);
    };

    return {
      css,
      onClick,
    };
  },
});
</script>

<style lang="scss" scoped>
.selected-indicator, .selected{
  font-size: 120%;
  color: green;
}
</style>
